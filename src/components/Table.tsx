import { ReactNode } from "react";

export type TableColumns<T> = TColumn<T>[];

type TColumn<TRow> = {
  key: keyof TRow;
  label: string;
  render?: (data?: TRow) => ReactNode;
};

interface TableProps<TRow> {
  rows: TRow[];
  columns: TColumn<TRow>[];
}

const Table = <T extends object>({ rows, columns }: TableProps<T>) => {
  return (
    <table>
      {/* column header */}
      <thead>
        <tr>
          {columns.map((col) => (
            <th>{col.label}</th>
          ))}
        </tr>
      </thead>

      {/* rows */}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>
                <span className="cell-header">{col.label}:</span>{" "}
                {col.render ? col.render(row) : (row[col.key] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
