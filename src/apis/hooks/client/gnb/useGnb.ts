/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 Gnb Hook
 */

import { INavigationList } from '@/apis/client/navigationApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuList = [
  {
    menuNo: 1,
    menuUrl: 'profile',
    menuCode: 'profile',
    menuName: '프로필',
  },
  {
    menuNo: 2,
    menuUrl: 'portFolio',
    menuCode: 'portFolio',
    menuName: '포토폴리오',
  },
  {
    menuNo: 3,
    menuUrl: 'trip',
    menuCode: 'trip',
    menuName: '여행',
  },
  {
    menuNo: 4,
    menuUrl: 'study',
    menuCode: 'study',
    menuName: '공부',
  },
  {
    menuNo: 5,
    menuUrl: 'game',
    menuCode: 'game',
    menuName: '게임',
  },
  {
    menuNo: 6,
    menuUrl: 'styleItem',
    menuCode: 'styleItem',
    menuName: '스타일 아이템',
  },
];

const useGnb = () => {
  const navigate = useNavigate();

  // const [toggleLnb, setToggleLnb] = useState<boolean>(false)

  const [clientMenuList, setClientMenuList] =
    useState<INavigationList[]>(menuList);

  // Logo 클릭
  const handleLogoClick = () => {
    navigate(`/main`);
  };

  // 메뉴 클릭
  const handleMenuItemClick = (menuUrl: string) => {
    console.log('handleMenuItemClick', menuUrl);
    navigate(`/${menuUrl}`);
  };

  return {
    // State
    clientMenuList,
    // SetState

    // Handler
    handleLogoClick,
    handleMenuItemClick,
  };
};

export default useGnb;
