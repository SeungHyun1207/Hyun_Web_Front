/**
 *  작성일 : 2025-01-21
 *  작성자 : SH.K
 *  내용 : 사용자 Lnb Hook
 */

import { IStyleItemsList } from '@/apis/client/styleItemsApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styleItems = [
  {
    styleNo: 1,
    styleUrl: 'login',
    styleCode: 'login',
    styleName: '로그인',
  },
  {
    styleNo: 2,
    styleUrl: 'button',
    styleCode: 'button',
    styleName: '버튼',
  },
  {
    styleNo: 3,
    styleUrl: 'trip',
    styleCode: 'trip',
    styleName: '여행',
  },
  {
    styleNo: 4,
    styleUrl: 'study',
    styleCode: 'study',
    styleName: '공부',
  },
  {
    styleNo: 5,
    styleUrl: 'game',
    styleCode: 'game',
    styleName: '게임',
  },
  // {
  //   styleNo: 6,
  //   styleUrl: 'styleItem',
  //   styleCode: 'styleItem',
  //   styleName: '스타일 아이템',
  // },
];

const useStyleItems = () => {
  const navigate = useNavigate();

  const [styleItemsList, setStyleItemsList] =
    useState<IStyleItemsList[]>(styleItems);

  // 아이템 클릭
  const handleStyleItemsClick = (styleUrl: string) => {
    navigate(`/styleItem/${styleUrl}`);
  };

  return {
    // State
    styleItemsList,
    // SetState

    // Handler
    handleStyleItemsClick,
  };
};

export default useStyleItems;
