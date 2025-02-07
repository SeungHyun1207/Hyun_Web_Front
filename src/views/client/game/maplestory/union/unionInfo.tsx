/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 유니온 정보 조회
 */

import { useMapleUnionInfoStore } from '@/stores/game/useMapleCharacterStore';

const UnionInfo = () => {
  const { unionInfo } = useMapleUnionInfoStore();

  return (
    <div className="unionInfoWrap">
      <h1>유니온</h1>
      {unionInfo && (
        <div>
          <span>{unionInfo.union_grade}</span>
        </div>
      )}
    </div>
  );
};

export default UnionInfo;
