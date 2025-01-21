/**
 *  작성일 : 2025-01-16
 *  작성자 : SH.K
 *  내용 : 사용자 GNB (Global Navigation Bar)
 */

import useGnb from '@/apis/hooks/client/useGnb';

const Gnb = () => {
  const {
    // State
    clientMenuList,
    // SetState
    // Handler
    handleLogoClick,
    handleMenuItemClick,
  } = useGnb();

  return (
    <div className="client-gnb">
      <div className="logo_wrap">
        <div
          className="logo"
          onClick={() => {
            handleLogoClick();
          }}
        >
          <img />
          <span>Logo</span>
        </div>
      </div>
      <div className="gnb_wrap">
        {clientMenuList && clientMenuList.length > 0 ? (
          clientMenuList.map((item, index) => {
            return (
              <div
                className={`gnbItem ${
                  item.menuCode === 'home' ? 'active' : ''
                }`}
                key={index}
                onClick={() => {
                  handleMenuItemClick(item.menuCode);
                }}
              >
                <span>{item.menuName}</span>
              </div>
            );
          })
        ) : (
          <div className="emptyGnbItem">
            <span>메뉴가 없습니다.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gnb;
