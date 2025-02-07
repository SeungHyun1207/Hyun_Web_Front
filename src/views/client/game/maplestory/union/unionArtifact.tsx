/**
 *  작성일 : 2025-02-06
 *  작성자 : SH.K
 *  내용 : 유니온 아티팩트 정보 조회
 */

import { useMapleUnionArtifactStore } from '@/stores/game/useMapleCharacterStore';

const UnionArtifact = () => {
  const { unionArtifact } = useMapleUnionArtifactStore();

  return (
    <div className="unionInfoWrap">
      {unionArtifact && (
        <div>
          <h2>적용중인 아티팩트 효과</h2>
          <span>
            {unionArtifact.union_artifact_effect &&
              unionArtifact.union_artifact_effect.map((item) => (
                <div>
                  {item.level} : {item.name}
                </div>
              ))}
          </span>
        </div>
      )}
    </div>
  );
};

export default UnionArtifact;
