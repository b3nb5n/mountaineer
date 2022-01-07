import {
	Button,
	ButtonProps,
	CircularProgress,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';

export interface ActionProps {
	onClick: VoidFunction;
	label?: string;
	icon?: React.ReactNode;
	loading?: boolean;
	style?: 'primary' | 'secondary';
	fullWidth?: boolean;
}

const Action: React.FC<ActionProps> = ({
	onClick,
	label,
	icon,
	loading,
	style,
	fullWidth,
}) => {
	const theme = useTheme();
	let spinnerColor: string;
	let buttonVariant: ButtonProps['variant'];
	switch (style) {
		case 'secondary':
			spinnerColor = theme.palette.getContrastText(
				theme.palette.background.default
			);
			buttonVariant = 'outlined';
			break;
		default:
			spinnerColor = theme.palette.primary.contrastText;
			buttonVariant = 'contained';
			break;
	}

	return (
		<Button
			variant={buttonVariant}
			onClick={onClick}
			disableElevation
			disableRipple={loading}
			disableFocusRipple={loading}
			disableTouchRipple={loading}
			fullWidth={fullWidth}
			sx={{
				position: 'relative',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			{icon}
			<Typography variant='button' sx={{ opacity: loading ? 0 : 1 }}>
				{label}
			</Typography>
			<CircularProgress
				size={16}
				style={{
					position: 'absolute',
					color: spinnerColor,
					display: loading ? 'block' : 'none',
				}}
			/>
		</Button>
	);
};

export default Action;
