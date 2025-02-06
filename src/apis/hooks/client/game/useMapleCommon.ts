/**
 *  작성일 : 2025-02-03
 *  작성자 : SH.K
 *  내용 : 사용자 Maple 공통 Hook
 */

import { useState } from 'react';

const useMapleCommon = () => {
  // 캐릭터 검색 화면 Show Default : true
  const [characterSearchWrapShow, setCharacterSearchWrapShow] =
    useState<boolean>(true);
  // 길드 검색 화면 Show
  const [guildSearchWrapShow, setGuildSearchWrapShow] =
    useState<boolean>(false);

  // 캐릭터 컨텐츠 화면 Show
  const [characterContentWrapShow, setCharacterContentWrapShow] =
    useState<boolean>(true);
  // 길드 컨텐츠 화면 Show
  const [guildContentWrapShow, setGuildContentWrapShow] =
    useState<boolean>(false);

  // 캐릭터 및 길드 검색 화면 핸들링
  const handleSearchWrapShow = (type: 'character' | 'guild') => {
    if (type === 'character') {
      setCharacterSearchWrapShow(!characterSearchWrapShow);
      setCharacterContentWrapShow(!characterContentWrapShow);
      setGuildSearchWrapShow(!guildSearchWrapShow);
      setGuildContentWrapShow(!guildContentWrapShow);
    } else {
      setCharacterSearchWrapShow(!characterSearchWrapShow);
      setCharacterContentWrapShow(!characterContentWrapShow);
      setGuildSearchWrapShow(!guildSearchWrapShow);
      setGuildContentWrapShow(!guildContentWrapShow);
    }
  };

  return {
    // State
    characterSearchWrapShow,
    characterContentWrapShow,
    guildSearchWrapShow,
    guildContentWrapShow,
    // Handler
    handleSearchWrapShow,
  };
};

export default useMapleCommon;
