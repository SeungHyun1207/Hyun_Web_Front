/**
 *  작성일 : 2024-12-09
 *  작성자 : SH.K
 *  내용 : 사용자 Lnb;
 */

import useClientLnb, { menuList } from "@/apis/hooks/common/useClientLnb";

const ClientLnb = () => {


    const {
        // State
        // SetState
        // Handler
        handleMenuItemClick
    } = useClientLnb();

    return (
        <div className="lnbWrap">
            <div className="headLineWrap">
                {/* Logo */}
                <div className="logoWrap">
                    {/* <img src="" alt="Logo" /> */}
                    <span>Logo</span>
                </div>
                {/* 프로필 */}
                <div className="profileWrap">
                    {/* <img src="" alt="Profile" /> */}
                </div>
                <div className="userInfoWrap">

                </div>
            </div>
            <div className="bodyLineWrap">
                <div className="menuWrap">
                    <div className="menu">
                        {menuList && menuList.map((item, index) => {
                            return (
                                // 추후 새로운 글이 7일 내  등록된다면 new 표시 생각해보기
                                <div className="menuItem" key={index} onClick={() => {
                                    handleMenuItemClick(item.menuCode);
                                }}>
                                    {/* <img alt="menuImage" /> */}
                                    <span>{item.menuName}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="footerLineWrap">
                <div className="settingWrap">
                    <span>설정</span>
                </div>
            </div>
        </div>
    )

}

export default ClientLnb;