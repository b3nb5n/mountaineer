import { TableCell, TableRow } from '@mui/material';

export type TableItemData<T extends object = {}> = {
	[property in keyof T]: React.ReactNode;
};

interface StyledTableItemProps<T extends TableItemData> {
	columnHeaders: Array<keyof T>;
	data: T;
	action?: (data: T) => void;
}

const StyledTableItem = <T extends TableItemData>({
	columnHeaders,
	data,
	action,
}: StyledTableItemProps<T>) => {
	return (
		<TableRow
			sx={{
				textDecoration: 'none',
				cursor: action ? 'pointer' : 'auto',
			}}
		>
			{columnHeaders.map((column) => (
				<TableCell
					key={column as string}
					onClick={() => {
						if (action) action(data);
					}}
				>
					{data[column]}
				</TableCell>
			))}
		</TableRow>
	);
};

export default StyledTableItem;
