import {
	Dialog,
	DialogContent,
	DialogTitle,
	Divider,
	Typography,
} from '@mui/material';
import { startCase } from 'lodash';
import React, { useContext, useState } from 'react';
import authContext, { IntendedAction } from '../../data/auth-context';
import EmailAuthentication from './email-auth';
import IntentionSwitch from './intention-switch';
import SocialAuthentication from './social-auth';

const AuthDialog: React.FC = () => {
	const { user } = useContext(authContext);
	const [intendedAction, setIntendedAction] =
		useState<IntendedAction>('Sign up');

	return (
		<Dialog
			open={!user}
			maxWidth='xs'
			BackdropProps={{ sx: { backdropFilter: 'blur(2px)' } }}
		>
			<DialogTitle>
				<Typography variant='h3'>
					{startCase(intendedAction)}
				</Typography>
			</DialogTitle>
			<DialogContent>
				<EmailAuthentication intendedAction={intendedAction} />
				<Divider style={{ margin: '12px 0' }}>
					<Typography>or</Typography>
				</Divider>
				<SocialAuthentication intendedAction={intendedAction} />

				<IntentionSwitch {...{ intendedAction, setIntendedAction }} />
			</DialogContent>
		</Dialog>
	);
};

export default AuthDialog;
