/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 캐릭터 무릉도장 최고기록 정보
 */

import { useMapleCharacterDojangStore } from '@/apis/hooks/client/game/stores/useGameStore';

const CharacterDojang = () => {
  const { characterDojang } = useMapleCharacterDojangStore();

  return (
    <div className="characterDojangWrap">
      <h1>무릉도장</h1>
      {characterDojang && (
        <div>
          <div>
            <span>최고 층수 : {characterDojang.dojang_best_floor}층</span>
            <span>시간 : {characterDojang.dojang_best_time}초</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterDojang;
