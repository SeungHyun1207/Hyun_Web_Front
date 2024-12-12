/**
 *  작성일 : 2024-12-09 
 *  작성자 : SH.K
 *  내용 : 로그인 체크
 */

import { ViteMode } from "@/common/common";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const activeMode = import.meta.env.MODE;

const SecurityCheck = () => {

    const navigate = useNavigate();

    useEffect(() => {
        if (activeMode === ViteMode.DEV) {
            navigate("/main")
        }
    }, [])

    return (
        <Outlet />
    )

}

export default SecurityCheck;