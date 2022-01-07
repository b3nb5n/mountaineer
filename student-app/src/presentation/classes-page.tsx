import ClassIcon from '@mui/icons-material/SchoolOutlined';
import React, { useState } from 'react';
import JoinClassDialog from './classes/join-dialog';
import EmptyState from './components/empty-state';
import PageHeader from './components/page-header';
import StyledTable from './components/table';
import { TableItemData } from './components/table-item';

interface Class {
	name: string;
	grade: number;
}

const ClassesPage: React.FC = () => {
	const [joinDialogOpen, setJoinDialogOpen] = useState(false);
	const classes: TableItemData<Class>[] = [];

	const toggleJoinDialog = () => setJoinDialogOpen(!joinDialogOpen);

	return (
		<>
			<PageHeader title='Classes' search={() => {}} />

			{classes.length > 0 ? (
				<StyledTable
					columnHeaders={['name', 'grade']}
					items={classes}
				/>
			) : (
				<EmptyState
					message="You aren't enrolled in any classes."
					action={toggleJoinDialog}
					actionLabel='join a class'
					actionIcon={<ClassIcon />}
				/>
			)}

			<JoinClassDialog
				open={joinDialogOpen}
				onClose={toggleJoinDialog}
			/>
		</>
	);
};

export default ClassesPage;
