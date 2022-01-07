import GoogleIcon from '@mui/icons-material/Google';
import { Box, Button } from '@mui/material';
import { FirebaseError } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import authContext, { IntendedAction } from '../../data/auth-context';

interface SocialAuthenticationProps {
	intendedAction: IntendedAction;
}

const SocialAuthentication: React.FC<SocialAuthenticationProps> = ({
	intendedAction,
}) => {
	const { authenticateWithSocial } = useContext(authContext);

	const submit = async () => {
		try {
			const provider = new GoogleAuthProvider();
			await authenticateWithSocial(provider);
		} catch (e) {
			if (!(e instanceof FirebaseError)) throw e;
			console.log(e.code);
		}
	};

	return (
		<Box component='form'>
			<Button
				variant='outlined'
				size='large'
				startIcon={<GoogleIcon />}
				onClick={submit}
				fullWidth
			>
				{`${intendedAction} with google`}
			</Button>
		</Box>
	);
};

export default SocialAuthentication;
