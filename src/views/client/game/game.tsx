/**
 *  작성일 : 2025-01-16
 *  작성자 : SH.K
 *  내용 : 사용자 GNB (Global Navigation Bar)
 */

import { useMapleCharacterBaseInfoStore } from '@/apis/hooks/client/game/stores/useGameStore';
import useGame from '@/apis/hooks/client/game/useGame';
import { useEffect } from 'react';
import CharacterCashItemEquipments from './charactercashitemequipments/characterCashItemEquipments';
import CharacterItemEquipments from './characteritemequipments/characterItemEquipments';
import CharacterSetEffects from './characterseteffects/characterSetEffects';
import CharacterSymbolEquipments from './charactersymbolequipments/characterSymbolEquipments';

const Game = () => {
  // Store
  const { characterBaseInfos } = useMapleCharacterBaseInfoStore();

  // Hook
  const {
    // State
    characterSearchName,
    setCharacterSearchName,
    characterPopularity,
    // Handler
    handleCharacterSearch,
    getCharacterOCID,
  } = useGame();

  useEffect(() => {}, []);

  return (
    <div className="gameWrap">
      <div className="titleWrap">
        <span>게임</span>
      </div>
      <div className="searchBoxWrap">
        <input
          placeholder="캐릭터 명을 입력해 주세요!"
          onChange={(e) => {
            setCharacterSearchName(e.target.value);
          }}
          onKeyDown={handleCharacterSearch}
        />
        <button
          onClick={() => {
            getCharacterOCID(characterSearchName);
          }}
        >
          검색
        </button>
        <button onClick={() => {}}>초기화</button>
      </div>
      <div className="characterInfoWrap">
        {characterBaseInfos && (
          <div className="characterBaseInfoWrap">
            <div className="imageWithNameInfo">
              {/* 캐릭터 이미지 */}
              <img
                src={characterBaseInfos.character_image}
                alt="캐릭터 이미지"
              />
              {/* 캐릭터 이름 */}
              <span>{characterBaseInfos.character_name} </span>
            </div>
            <div className="characterInfo">
              <div className="classWithLevelWithPopularityInfo">
                <span> 직업 : {characterBaseInfos.character_class}</span>
                <span> 레벨 : {characterBaseInfos.character_level}</span>
                <span> 인기도 : {characterPopularity}</span>
              </div>

              <div className="expInfo">
                <div>
                  경험치 : {characterBaseInfos.character_exp_rate}% / 100%
                </div>
              </div>
              <div className="guildInfo">
                <div>길드 : {characterBaseInfos.character_guild_name}</div>
              </div>
            </div>
          </div>
        )}
        {/* 장착중인 장비 */}
        <CharacterItemEquipments />
        {/* 장착중인 캐시 장비 */}
        <CharacterCashItemEquipments />
        {/* 장착중인 심볼 */}
        <CharacterSymbolEquipments />
        {/* 적용중인 세트 효과 */}
        <CharacterSetEffects />
      </div>
    </div>
  );
};

export default Game;
