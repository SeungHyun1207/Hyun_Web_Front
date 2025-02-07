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
    styleUrl: 'input',
    styleCode: 'input',
    styleName: 'input',
  },
  // {
  //   styleNo: 4,
  //   styleUrl: 'file',
  //   styleCode: 'file',
  //   styleName: 'file',
  // },
  // {
  //   styleNo: 5,
  //   styleUrl: 'toast',
  //   styleCode: 'toast',
  //   styleName: 'toast',
  // },
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

  const [styleItemShow, setStyleItemShow] = useState<string>('');

  // 아이템 클릭
  const handleStyleItemsClick = (styleUrl: string) => {
    setStyleItemShow((prev) => {
      // 같은 값을 다시 눌렀을 때 사라지지 않도록 방지
      if (prev === styleUrl) {
        return prev; // 상태 유지 (변경 없음)
      }
      return styleUrl;
    });
    navigate(`/styleItem/${styleUrl}`);
  };

  return {
    // State
    styleItemsList,
    styleItemShow,
    // SetState
    // Handler
    handleStyleItemsClick,
  };
};

export default useStyleItems;
