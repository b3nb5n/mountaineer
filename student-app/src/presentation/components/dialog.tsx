import CloseIcon from '@mui/icons-material/Close';
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	Typography,
} from '@mui/material';
import { startCase } from 'lodash';
import React from 'react';

interface StyledDialogProps {
	title: string;
	open: boolean;
	onClose: VoidFunction;
	primaryAction: React.ReactNode;
}

const StyledDialog: React.FC<StyledDialogProps> = ({
	title,
	open,
	onClose,
	primaryAction,
	children,
}) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			BackdropProps={{ sx: { backdropFilter: 'blur(2px)' } }}
			maxWidth='xs'
			fullWidth
		>
			<DialogTitle
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Typography variant='h3'>{startCase(title)}</Typography>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</DialogTitle>
			<DialogContent>
				<Box height={2} />
				{children}
			</DialogContent>
			<DialogActions sx={{ padding: '0 24px 16px' }}>
				{primaryAction}
			</DialogActions>
		</Dialog>
	);
};

export default StyledDialog;
