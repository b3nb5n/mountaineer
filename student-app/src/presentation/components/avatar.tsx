import LogoutIcon from '@mui/icons-material/Logout';
import {
	Avatar,
	Box,
	ClickAwayListener,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Paper,
	useTheme,
} from '@mui/material';
import React, { useContext, useState } from 'react';
import authContext from '../../data/auth-context';

interface StyledAvatarProps {}

const StyledAvatar: React.FC<StyledAvatarProps> = ({}) => {
	const { palette } = useTheme();
	const { signOut } = useContext(authContext);
	const [actionsOpen, setActionsOpen] = useState(false);

	return (
		<Box sx={{ position: 'relative', ml: 2 }}>
			<Avatar
				onClick={() => setActionsOpen(true)}
				sx={{
					bgcolor: palette.primary.main,
					cursor: 'pointer',
				}}
			/>

			{actionsOpen && (
				<ClickAwayListener onClickAway={() => setActionsOpen(false)}>
					<Paper
						elevation={2}
						sx={{
							position: 'absolute',
							right: '-12px',
							top: 'calc(100% + 12px)',
						}}
					>
						<List onClick={() => setActionsOpen(false)}>
							<ListItemButton onClick={signOut}>
								<ListItemIcon>
									<LogoutIcon />
								</ListItemIcon>
								<ListItemText primary='Logout' />
							</ListItemButton>
						</List>
					</Paper>
				</ClickAwayListener>
			)}
		</Box>
	);
};

export default StyledAvatar;
