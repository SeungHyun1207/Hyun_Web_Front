import { useMapleCharacterSetEffectStore } from '@/apis/hooks/client/game/stores/useGameStore';

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
      {characterSetEffect &&
        characterSetEffect.map((effect, index) => (
          <div key={index}>
            <span>
              {effect.set_name} {effect.total_set_count} 세트 적용중
            </span>
          </div>
        ))}
    </div>
  );
};

export default CharacterSetEffects;
