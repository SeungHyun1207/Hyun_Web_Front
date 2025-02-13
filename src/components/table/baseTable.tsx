/**
 *  작성일 : 2025-02-13
 *  작성자 : SH.K
 *  내용 : 기본 Table 컴포넌트
 */

interface ITableHeaderProps {
  key: string | number;
  label: string;
  width?: number;
}

interface ITableBodyProps {
  [key: string | number]: React.ReactNode;
}

interface ITableProps {
  header: ITableHeaderProps[];
  body: ITableBodyProps[];
}

const BaseTable = ({ header, body }: ITableProps) => {
  return (
    <div className="baseTableWrap">
      <table>
        <thead>
          <tr>
            {header.length > 0 ? (
              header.map((column) => (
                <th key={column.key} style={{ width: column.width }}>
                  {column.label}
                </th>
              ))
            ) : (
              <th colSpan={header.length || 1}>테이블 데이터가 없습니다.</th>
            )}
          </tr>
        </thead>
        <tbody>
          {Object.keys(body).length > 0 ? (
            Object.values(body).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {header.map((column) => (
                  <td key={column.key}>
                    {(row as ITableBodyProps)[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={header.length || 1}>테이블 데이터가 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BaseTable;
