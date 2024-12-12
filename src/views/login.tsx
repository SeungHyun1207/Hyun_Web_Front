/**
 *  작성일 : 2024-12-09
 *  작성자 : SH.K
 *  내용 : 로그인 페이지
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState<string>("");
    const [password, setPassWord] = useState<string>("");



    return (
        <div className="loginWrap">
            <h2>하이</h2>
        </div>
    )
}

export default Login; 