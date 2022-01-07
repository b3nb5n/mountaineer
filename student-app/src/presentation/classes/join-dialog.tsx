import { TextField } from '@mui/material';
import React, { useState } from 'react';
import Action from '../components/action';
import StyledDialog from '../components/dialog';

const validateClassCode = (code: string) => {
	const CODE_LENGTH = 7;
	const validator = /^[a-zA-Z0-9]+$/;

	if (code.length !== CODE_LENGTH)
		return `Class codes are ${CODE_LENGTH} characters long`;
	if (!validator.test(code))
		return 'Class codes only contain alphanumeric caracters';
};

interface JoinClassDialogProps {
	open: boolean;
	onClose: VoidFunction;
}

const JoinClassDialog: React.FC<JoinClassDialogProps> = ({
	open,
	onClose: handleClose,
}) => {
	const [classCode, setClassCode] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | undefined>();

	const submit = async () => {
		if (loading) return;

		const codeError = validateClassCode(classCode);
		setError(codeError);
		if (codeError) return;

		setLoading(true);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		setLoading(false);
	};

	const close = () => {
		handleClose();
		setClassCode('');
		setLoading(false);
		setError(undefined);
	};

	return (
		<StyledDialog
			title='join a class'
			open={open}
			onClose={close}
			primaryAction={
				<Action onClick={submit} loading={loading} label='join' />
			}
		>
			<TextField
				placeholder='Class Code'
				size='small'
				value={classCode}
				helperText={error}
				disabled={loading}
				error={!!error}
				onChange={(e) => {
					e.stopPropagation();
					setClassCode(e.target.value.trim());
				}}
				fullWidth
			/>
		</StyledDialog>
	);
};

export default JoinClassDialog;
