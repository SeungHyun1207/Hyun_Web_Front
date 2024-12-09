/**
 *  작성일 : 2024-12-09 
 *  작성자 : SH.K
 *  내용 : 로그인 체크
 */

import { Outlet } from "react-router-dom";

const ProtectRoute = () => {

    const activeMode = import.meta.env.Mode;


    return (
        <Outlet />
    )

}

export default ProtectRoute;