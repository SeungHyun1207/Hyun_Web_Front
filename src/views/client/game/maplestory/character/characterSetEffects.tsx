import { useMapleCharacterSetEffectStore } from '@/stores/game/useMapleCharacterStore';

/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 적용중인 세트효과
 */
const CharacterSetEffects = () => {
  const { characterSetEffect } = useMapleCharacterSetEffectStore();

  return (
    <div>
      <h2>Character Set Effects</h2>

      {characterSetEffect && characterSetEffect.length > 0 ? (
        characterSetEffect.map((item, index) => {
          const totalCountList = characterSetEffect.find(
            (item) => item.total_set_count
          );
          const totalCount = totalCountList?.total_set_count;

          console.log('totalCount', totalCount);

          return (
            <div key={index}>
              {totalCount && totalCount > 1 && (
                <div className="setEffectWrap">
                  <span> {item.set_name}</span>
                  <span> {totalCount}세트 적용중</span>
                </div>
              )}
              <p>{item.set_name} </p>
            </div>
          );
        })
      ) : (
        <p>No character set effects applied.</p>
      )}
    </div>
  );
};

export default CharacterSetEffects;
