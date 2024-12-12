/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 Lnb Hook
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const menuList = [
    {
        menuNo: 1,
        menuUrl: "Profile",
        menuCode: "Profile",
        menuName: "프로필",
    },
    {
        menuNo: 2,
        menuUrl: "PortFolio",
        menuCode: "PortFolio",
        menuName: "포토폴리오",

    },
    {
        menuNo: 3,
        menuUrl: "Trip",
        menuCode: "Trip",
        menuName: "여행",
    },
    {
        menuNo: 4,
        menuUrl: "Study",
        menuCode: "Study",
        menuName: "공부",
    },
    {
        menuNo: 5,
        menuCode: "game",
        menuName: "게임",
    },
]

const useClientLnb = () => {


    const navigate = useNavigate();

    const [toggleLnb, setToggleLnb] = useState<boolean>(false)


    // 메뉴 클릭
    const handleMenuItemClick = (menuUrl: string) => {
        navigate(`/${menuUrl}`);
    }

    return {
        // Handler
        handleMenuItemClick
    }

}

export default useClientLnb;