import {
	DataGrid as MuiTable,
	DataGridProps as MuiTableProps,
	ColDef as MuiTableColProps,
	RowsProp as MuiTableRowProps,
} from '@material-ui/data-grid';

export const DEFAULT_PAGE_SIZE = 25;
export type TableProps = Omit<MuiTableProps, 'rows' | 'loading'> & {
	data: TableRowsProps;
	isLoading?: boolean;
};
export type TableRowsProps = MuiTableRowProps;
export type TableColProps = MuiTableColProps;

/**
 * @see Docs https://material-ui.com/components/data-grid/getting-started/
 */
export const Table = ({
	data,
	disableColumnMenu = true,
	disableMultipleSelection = true,
	pageSize = DEFAULT_PAGE_SIZE,
	rowsPerPageOptions = [],
	paginationMode = 'server',
	isLoading,
	columns,
	...props
}: TableProps) => {
	return (
		<MuiTable
			{...props}
			disableColumnMenu={disableColumnMenu}
			rows={data}
			columns={columns.map((c) => ({ ...c, disableClickEventBubbling: true }))}
			disableMultipleSelection={disableMultipleSelection}
			pageSize={pageSize}
			rowsPerPageOptions={rowsPerPageOptions}
			paginationMode={paginationMode}
			loading={isLoading}
		/>
	);
};
