/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 로그인 Hook
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const userInfo = [
    {
        userId: "admin",
        userName: "관리자",
        password: "shkang"
    }
];

const useLogin = () => {

    const navigate = useNavigate();

    // State
    const [userId, setUserId] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [password, setPassWord] = useState<string>("");


    const validationLogin = () => {

        const validationCheck = [];

        if (userId.trim().length === 0) {
            validationCheck.push("아이디는 필수입니다.")
        }

        if (userName.trim().length === 0) {
            validationCheck.push("이름은 필수입니다.");
        }

        if (password.trim().length === 0) {
            validationCheck.push("비밀번호는 필수입니다.");
        }

        return validationCheck;
    }

    // Handler
    const loginCheck = () => {

        const validationCheck = validationLogin();

        if (validationCheck.length > 0) {
            alert(validationCheck.join("\n"));
            return;
        }

    }


    return {
        // State

        // SetState

        // Handler 
        loginCheck,
    }
}

export default useLogin;