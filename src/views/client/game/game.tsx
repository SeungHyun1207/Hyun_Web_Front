/**
 *  작성일 : 2025-01-16
 *  작성자 : SH.K
 *  내용 : 사용자 GNB (Global Navigation Bar)
 */

import { ICharacterItemEquipments } from '@/apis/client/gameApi';
import useGame from '@/apis/hooks/client/game/useGame';
import { useEffect } from 'react';
import {
  useMapleCharacterBaseInfoStore,
  useMapleCharacterItemEquipmentsStore,
} from './../../../apis/hooks/client/game/stores/useGameStore';

const equipmentOrder = [
  ['반지1', '', '모자', '', '엠블렘'],
  ['반지2', '펜던트', '얼굴장식', '', '뱃지'],
  ['반지3', '펜던트2', '눈장식', '귀고리', '훈장'],
  ['반지4', '무기', '상의', '어깨장식', '보조무기'],
  ['포켓 아이템', '벨트', '하의', '장갑', '망토'],
  ['', '', '신발', '안드로이드', '기계 심장'],
];

const equipmentClassName = new Map([
  ['반지', 'ringInfo'],
  ['반지1', 'ringInfo'],
  ['반지2', 'ringInfo'],
  ['반지3', 'ringInfo'],
  ['반지4', 'ringInfo'],
  ['모자', 'capInfo'],
  ['엠블렘', 'emblemInfo'],
  ['펜던트', 'pendantInfo'],
  ['펜던트2', 'pendantInfo'],
  ['얼굴장식', 'foreheadInfo'],
  ['뱃지', 'badgeInfo'],
  ['눈장식', 'eyeInfo'],
  ['귀고리', 'earringInfo'],
  ['훈장', 'medalInfo'],
  ['무기', 'weaponInfo'],
  ['상의', 'clothesInfo'],
  ['어깨장식', 'shoulderInfo'],
  ['보조무기', 'subWeaponInfo'],
  ['포켓 아이템', 'poketInfo'],
  ['벨트', 'beltInfo'],
  ['하의', 'pantsInfo'],
  ['장갑', 'glovesInfo'],
  ['망토', 'capeInfo'],
  ['신발', 'shoesInfo'],
  ['안드로이드', 'androidInfo'],
  ['기계 심장', 'heartInfo'],
]);

const Game = () => {
  // Store
  const { characterBaseInfos } = useMapleCharacterBaseInfoStore();
  const { characterItemEquipments } = useMapleCharacterItemEquipmentsStore();

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

  // 장착중인 장비 랜더링
  const renderCharacterEquipment = (
    characterItemEquipments: ICharacterItemEquipments[]
  ) => {
    return (
      <div className="characterItemWrap">
        {characterItemEquipments && characterItemEquipments.length > 0 ? (
          equipmentOrder.map((row, rowIndex) => (
            <div key={rowIndex} className={`slotRow row-${rowIndex}`}>
              {row.map((slotName, colIndex) => {
                if (slotName === '') {
                  return <div key={colIndex} className="empty-slot"></div>;
                }
                const className =
                  equipmentClassName.get(slotName) || 'defaultClass';
                const item = characterItemEquipments.find(
                  (item) => item.item_equipment_slot === slotName
                );
                return (
                  <div key={colIndex} className={`${className} equipment-slot`}>
                    {item ? (
                      <img
                        src={item.item_icon}
                        alt={slotName}
                        className="equipment-icon"
                      />
                    ) : (
                      <span className="empty-slot"></span>
                    )}
                  </div>
                );
              })}
            </div>
          ))
        ) : (
          <div className="no-equipment">X</div>
        )}
      </div>
    );
  };

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
        {renderCharacterEquipment(characterItemEquipments)}
      </div>
    </div>
  );
};

export default Game;
