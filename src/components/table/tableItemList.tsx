/**
 *  작성일 : 2025-02-13
 *  작성자 : SH.K
 *  내용 : Select 컴포넌트 리스트 페이지
 */

const TableItemList = () => {
  return (
    <div className="tableItemListWrap">
      <div className="tableItemCardList">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>조회수</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: TableItemCardList 컴포��트로 ItemList를 ��더 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableItemList;
