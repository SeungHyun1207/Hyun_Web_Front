/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Maple 공통 Hook
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useMapleCommon = () => {
  const navigate = useNavigate();

  const [mapleSearchViewShow, setMapleSearchViewShow] = useState<string>('');

  // 캐릭터 및 길드 검색 화면 핸들링
  const handleSearchWrapShow = (type: 'character' | 'guild' | 'union') => {
    setMapleSearchViewShow((prev) => {
      if (prev === type) {
        return prev;
      }
      return type;
    });
    navigate(`/game/${type}`);
  };

  return {
    // State
    mapleSearchViewShow,
    // Handler
    handleSearchWrapShow,
  };
};

export default useMapleCommon;
