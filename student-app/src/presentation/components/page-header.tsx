import SearchIcon from '@mui/icons-material/Search';
import {
	Box,
	InputAdornment,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import Action, { ActionProps } from './action';
import StyledAvatar from './avatar';

interface PageHeaderProps {
	title: string;
	actions?: ActionProps[];
	search?: (term: string) => void;
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	actions,
	search,
}) => {
	const [searchFocused, setSearchFocused] = useState(false);
	const { palette } = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-end',
				justifyContent: 'space-between',
				marginBottom: 2,
			}}
		>
			<Typography variant='h2' sx={{ textTransform: 'capitalize' }}>
				{title}
			</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{actions?.map((props) => (
					<Action {...props} />
				))}

				{search && (
					<TextField
						variant='outlined'
						size='small'
						placeholder='Search...'
						sx={{ width: '36ch' }}
						onFocus={() => setSearchFocused(true)}
						onBlur={() => setSearchFocused(false)}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<SearchIcon
										htmlColor={
											searchFocused
												? palette.primary.main
												: palette.grey.A200
										}
									/>
								</InputAdornment>
							),
						}}
					/>
				)}

				<StyledAvatar />
			</Box>
		</Box>
	);
};

export default PageHeader;
