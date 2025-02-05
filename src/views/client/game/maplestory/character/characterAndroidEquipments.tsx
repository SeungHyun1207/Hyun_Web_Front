/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 장착중인 안드로이드
 */
import { useMapleCharacterAndroidStore } from '@/apis/hooks/client/game/stores/useGameStore';

const CharacterAndroidEquipments = () => {
  const { characterAndroidEquipment } = useMapleCharacterAndroidStore();

  return (
    <div className="characterAndroidWrap">
      {characterAndroidEquipment && (
        <div className="androidInfo">
          <div>
            <span>
              안드로이드 : {characterAndroidEquipment.android_nickname}
            </span>
            <img src={characterAndroidEquipment.android_icon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterAndroidEquipments;
