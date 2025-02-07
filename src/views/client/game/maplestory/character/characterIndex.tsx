import useMapleCharacter from '@/apis/hooks/client/game/useMapleCharacter';
import BaseButton from '@/components/button/baseButton';
import BaseInput from '@/components/input/baseInput';
import { useMapleCharacterBaseInfoStore } from '@/stores/game/useMapleCharacterStore';
import CharacterCashItemEquipments from './characterCashItemEquipments';
import CharacterDojang from './characterDojang';
import CharacterItemEquipments from './characterItemEquipments';
import CharacterSetEffects from './characterSetEffects';
import CharacterSymbolEquipments from './characterSymbolEquipments';

/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : Maple 캐릭터 Index
 */
const CharacterIndex = () => {
  const { characterBaseInfos } = useMapleCharacterBaseInfoStore();

  const {
    // State
    characterSearchName,
    setCharacterSearchName,
    characterPopularity,
    // Handler
    handleCharacterSearch,
    getCharacterOCID,
  } = useMapleCharacter();

  return (
    <div className="characterIndexWrap">
      <div className="characterTitle">
        <div className="title">
          <span>메이플스토리_캐릭터_검색</span>
        </div>
      </div>
      <div className="characterSearch">
        <BaseInput
          type="search"
          placeholder="캐릭터 명을 입력해 주세요!"
          className="input-search"
          icon="🔍"
          onChange={(e) => {
            setCharacterSearchName(e.target.value);
          }}
          onClick={() => {
            getCharacterOCID(characterSearchName);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getCharacterOCID(characterSearchName);
            }
          }}
          customSize={{
            width: '300px',
          }}
        />
        <BaseButton
          buttonName="검색"
          className="btn-primary"
          onClick={() => {
            getCharacterOCID(characterSearchName);
          }}
        />
      </div>
      <div className="characterInfoWrap">
        {/* 기본정보 */}
        <div className="baseInfoCard">
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
                {/* 무릉도장 최고기록 */}
                <CharacterDojang />
                <div className="expInfo">
                  <div>
                    경험치 : {characterBaseInfos.character_exp_rate}% / 100%
                  </div>
                </div>
                <div className="guildInfo">
                  <div>길드 : {characterBaseInfos.character_guild_name}</div>
                </div>
                {/* 적용중인 세트 효과 */}
                <CharacterSetEffects />
                {/* 장착중인 심볼 */}
                <CharacterSymbolEquipments />
              </div>
            </div>
          )}
        </div>
        <div className="itemInfo">
          <CharacterItemEquipments />
          <CharacterCashItemEquipments />
        </div>
      </div>
    </div>
  );
};

export default CharacterIndex;
