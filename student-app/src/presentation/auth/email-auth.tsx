import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
	Box,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import authContext, { IntendedAction } from '../../data/auth-context';
import Action from '../components/action';

interface EmailAuthProps {
	intendedAction: IntendedAction;
}

const EmailAuth: React.FC<EmailAuthProps> = ({ intendedAction }) => {
	const { palette } = useTheme();
	const { authenticateWithEmail } = useContext(authContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setPasswordVisibility] = useState(false);
	const [error, setError] = useState<string | undefined>();
	const [loading, setLoading] = useState(false);

	const submit = async () => {
		try {
			setLoading(true);
			setError(undefined);
			await authenticateWithEmail(email, password, intendedAction);
		} catch (e) {
			if (!(e instanceof Error)) throw e;
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box component='form'>
			<TextField
				variant='outlined'
				size='small'
				label='Email'
				margin='dense'
				type='email'
				onChange={(e) => setEmail(e.target.value)}
				fullWidth
			/>

			<FormControl
				variant='outlined'
				margin='dense'
				size='small'
				fullWidth
			>
				<InputLabel htmlFor='password'>Password</InputLabel>
				<OutlinedInput
					id='password'
					type={showPassword ? 'text' : 'password'}
					label='Password'
					onChange={(e) => setPassword(e.target.value)}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								edge='end'
								onClick={() => {
									setPasswordVisibility(!showPassword);
								}}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
				/>
			</FormControl>

			<Action
				onClick={submit}
				label={intendedAction}
				loading={loading}
				fullWidth
			/>

			<Typography
				color={palette.error.main}
				sx={{ margin: 1, marginBottom: 0 }}
			>
				{error}
			</Typography>
		</Box>
	);
};

export default EmailAuth;
