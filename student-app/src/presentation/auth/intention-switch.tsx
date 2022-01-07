import { DialogContentText, Link } from '@mui/material';
import React from 'react';
import { IntendedAction } from '../../data/auth-context';

interface IntentionSwitchProps {
	intendedAction: IntendedAction;
	setIntendedAction: (_: IntendedAction) => void;
}

const IntentionSwitch: React.FC<IntentionSwitchProps> = ({
	intendedAction,
	setIntendedAction,
}) => {
	const oppositeAction = () =>
		intendedAction === 'Sign up' ? 'Sign in' : 'Sign up';

	return (
		<DialogContentText style={{ marginTop: 36, textAlign: 'center' }}>
			{intendedAction === 'Sign up'
				? 'Already have an account? '
				: 'Dont have an account? '}

			<Link
				style={{ cursor: 'pointer' }}
				onClick={() => {
					setIntendedAction(oppositeAction());
				}}
			>
				{oppositeAction()}
			</Link>
		</DialogContentText>
	);
};

export default IntentionSwitch;
