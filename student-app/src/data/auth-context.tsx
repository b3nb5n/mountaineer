import { FirebaseError } from 'firebase/app';
import {
	AuthProvider as FirebaseAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut as firebaseSignout,
	User,
} from 'firebase/auth';
import React, {
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import firebase from '../firebase';
import userReadableAuthError from './utils/auth-error-messages';

export type IntendedAction = 'Sign up' | 'Sign in';

interface AuthState {
	user: User | null;
	authenticateWithEmail: (
		email: string,
		password: string,
		intention: IntendedAction
	) => Promise<void>;
	authenticateWithSocial: (
		provider: FirebaseAuthProvider
	) => Promise<void>;
	signOut: VoidFunction;
}

const throwUnimplemented = () => {
	throw Error('Unimplemented');
};

const defaultAuthState: AuthState = {
	user: null,
	authenticateWithEmail: throwUnimplemented,
	authenticateWithSocial: throwUnimplemented,
	signOut: throwUnimplemented,
};

const authContext = createContext(defaultAuthState);

export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<AuthState['user']>(null);
	const auth = useMemo(() => getAuth(firebase), []);
	useEffect(() => onAuthStateChanged(auth, setUser), []);

	const authenticateWithEmail: AuthState['authenticateWithEmail'] =
		async (email, password, intention) => {
			try {
				switch (intention) {
					case 'Sign in':
						await signInWithEmailAndPassword(auth, email, password);
						break;
					case 'Sign up':
						await createUserWithEmailAndPassword(auth, email, password);
						break;
					default:
						throw Error('Invalid auth action');
				}
			} catch (e) {
				if (e instanceof FirebaseError)
					throw Error(userReadableAuthError(e));
				throw e;
			}
		};

	const authenticateWithSocial: AuthState['authenticateWithSocial'] =
		async (provider) => {
			try {
				await signInWithPopup(auth, provider);
			} catch (e) {
				if (e instanceof FirebaseError) throw Error(e.message);
				throw e;
			}
		};

	const signOut = () => firebaseSignout(auth);

	return (
		<authContext.Provider
			value={{
				user,
				authenticateWithEmail,
				authenticateWithSocial,
				signOut,
			}}
		>
			{children}
		</authContext.Provider>
	);
};

export default authContext;
