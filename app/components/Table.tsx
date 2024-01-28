import { Table as RadixTable } from "@radix-ui/themes";

interface Row {
  [key: string]: any;
}

interface TableProps {
  columns: {
    field: keyof Row;
    headerName: string;
    renderCell?: (prop: Row) => any;
  }[];
  rows: Row[] | undefined;
}

const Table: React.FC<TableProps> = (props) => {
  const { columns, rows } = props;
  const columnHeaders = columns.map((col) => col.headerName);
  const columnFields = columns.map((col) => col.field);

  return (
    <RadixTable.Root variant="surface">
      <RadixTable.Header>
        <RadixTable.Row>
          {columnHeaders.map((header) => (
            <RadixTable.ColumnHeaderCell key={header}>
              {header}
            </RadixTable.ColumnHeaderCell>
          ))}
        </RadixTable.Row>
      </RadixTable.Header>

      <RadixTable.Body>
        {rows?.map((row, index) => (
          <RadixTable.Row key={index}>
            {Object.entries(row)
              .filter((item) => columnFields.includes(item[0]))
              .map((r) => {
                const correspondingCol = columns.find(
                  (col) => col.field === r[0]
                );
                return (
                  <RadixTable.Cell key={r[1]}>
                    {correspondingCol?.renderCell
                      ? correspondingCol?.renderCell({ row })
                      : r[1]}
                  </RadixTable.Cell>
                );
              })}
          </RadixTable.Row>
        ))}
      </RadixTable.Body>
    </RadixTable.Root>
  );
};

export default Table;
