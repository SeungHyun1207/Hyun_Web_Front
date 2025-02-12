/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 로그인 컴포넌트 페이지
 */

const loginCardList = [
  {
    title: '로그인 컴포넌트1',
    content: '로그인 컴포넌트1',
    link: '/loginComponent1',
  },
  {
    title: '로그인 컴포넌트2',
    content: '로그인 컴포넌트2',
    link: '/loginComponent2',
  },
  {
    title: '로그인 컴포넌트3',
    content: '로그인 컴포넌트3',
    link: '/loginComponent3',
  },
];

const LoginItemList = () => {
  return (
    <div className="loginItemsWrap">
      <div className="loginCardList">
        {loginCardList && loginCardList.length > 0 ? (
          loginCardList.map((item, index) => (
            <div key={index} className="loginCard">
              <div className=""></div>
            </div>
          ))
        ) : (
          <div className="emptyLoginCardList">
            <span>등록된 컴포넌트가 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginItemList;
