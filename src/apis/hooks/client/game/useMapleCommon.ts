/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Maple 공통 Hook
 */

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useMapleCommon = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mapleSearchViewShow, setMapleSearchViewShow] = useState<string>('');

  const gamePathCheck = () => {
    if (location.pathname === '/game') {
      setMapleSearchViewShow('character');
      navigate('/game/character');
    }
  };

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

  useEffect(() => {
    gamePathCheck();
  }, [location.pathname]);

  return {
    // State
    mapleSearchViewShow,
    setMapleSearchViewShow,
    // Handler
    gamePathCheck,
    handleSearchWrapShow,
  };
};

export default useMapleCommon;
