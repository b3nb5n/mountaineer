import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	Typography,
} from '@mui/material';
import { startCase } from 'lodash';
import StyledTableItem, { TableItemData } from './table-item';

interface StyledTableProps<T extends TableItemData> {
	columnHeaders: Array<keyof T>;
	items: T[];
}

const StyledTable = <T extends TableItemData>({
	columnHeaders,
	items,
}: StyledTableProps<T>) => {
	return (
		<TableContainer component={Paper} elevation={2}>
			<Table>
				<TableHead>
					{columnHeaders.map((fieldName, i) => (
						<TableCell key={i}>
							<Typography variant='h6'>
								{startCase(fieldName as string)}
							</Typography>
						</TableCell>
					))}
				</TableHead>
				<TableBody>
					{items.map((item, i) => (
						<StyledTableItem
							columnHeaders={columnHeaders}
							data={item}
							key={i}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default StyledTable;
