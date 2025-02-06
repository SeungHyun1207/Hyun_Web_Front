/**
 *  작성일 : 2025-02-06
 *  작성자 : SH.K
 *  내용 : 유니온 공격대 정보 조회
 */

import { useMapleUnionAttackerInfoStore } from '@/apis/hooks/client/game/stores/useGameStore';

const UnionAttackerInfo = () => {
  const { unionAttackerInfo } = useMapleUnionAttackerInfoStore();

  return (
    <div className="unionInfoWrap">
      {unionAttackerInfo && (
        <div>
          <h2>적용중인 유니온 효과</h2>
          <span>
            {unionAttackerInfo.union_raider_stat.map((item) => (
              <div>{item}</div>
            ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default UnionAttackerInfo;
