import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';

const userReadableAuthError = (e: FirebaseError) => {
	switch (e.code) {
		case AuthErrorCodes.EMAIL_EXISTS:
			return 'An account with that email already exists';
		case 'auth/missing-email':
			return 'Enter an email';
		case AuthErrorCodes.INTERNAL_ERROR:
			return 'An unknown error occurred';
		case AuthErrorCodes.INVALID_EMAIL:
			return 'Invalid email';
		case AuthErrorCodes.INVALID_PASSWORD:
			return 'Incorrect password';
		case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
			return 'Too many requests try again later';
		case AuthErrorCodes.UNVERIFIED_EMAIL:
			return 'You need to verify your email';
		case AuthErrorCodes.USER_DELETED:
			return "Couldn't find a user with that identifier";
		case AuthErrorCodes.WEAK_PASSWORD:
			return 'Your password should be at least 6 characters';
		default:
			return e.code;
	}
};

export default userReadableAuthError;
