/**
 *  작성일 : 2025-01-16
 *  작성자 : SH.K
 *  내용 : 사용자 GNB (Global Navigation Bar)
 */

import useGnb from '@/apis/hooks/client/gnb/useGnb';
import BaseButton from '@/components/button/baseButton';

const ClientGnb = () => {
  const {
    // State
    clientMenuList,
    // SetState
    // Handler
    handleLogoClick,
    handleMenuItemClick,
  } = useGnb();

  return (
    <div className="clientGnb">
      <div className="logo_wrap">
        <div className="logo_content">
          <div
            className="logo"
            onClick={() => {
              handleLogoClick();
            }}
          >
            <img alt="Logo" />
          </div>
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

      <div className="login_wrap">
        <div className="login_btn">
          <BaseButton buttonName="로그인" />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ClientGnb;
