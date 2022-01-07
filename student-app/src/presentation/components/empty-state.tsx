import { Button, Paper, Typography } from '@mui/material';
import React from 'react';

interface EmptyStateProps {
	message: string;
	actionLabel?: string;
	actionIcon?: React.ReactNode;
	action?: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({
	message,
	actionLabel,
	actionIcon,
	action,
}) => {
	return (
		<Paper
			variant='outlined'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '48px 0',
			}}
		>
			<Typography
				variant='h5'
				color='ButtonText'
				paddingBottom={action ? 2 : 0}
			>
				{message}
			</Typography>
			{action && (
				<Button
					variant='contained'
					startIcon={actionIcon}
					onClick={action}
				>
					{actionLabel}
				</Button>
			)}
		</Paper>
	);
};

export default EmptyState;
