/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 장착중인 심볼
 */
import { useMapleCharacterSymbolEquipmentsStore } from '@/apis/hooks/client/game/stores/useGameStore';

const CharacterSymbolEquipments = () => {
  const { characterSymbolEquipments } =
    useMapleCharacterSymbolEquipmentsStore();

  return (
    <div className="characterSymbolWrap">
      {characterSymbolEquipments && characterSymbolEquipments.length > 0 ? (
        characterSymbolEquipments.map((item, index) => {
          return (
            <div key={index} className="symbolItem">
              <img src={item.symbol_icon} alt={item.symbol_name} />
              <span>{item.symbol_name}</span>
            </div>
          );
        })
      ) : (
        <div
          className="no-equipment"
          style={{
            color: '#ffffff',
            width: '500px',
            textAlign: 'center',
          }}
        >
          <span>캐릭터를 검색해주세요!</span>
        </div>
      )}
    </div>
  );
};

export default CharacterSymbolEquipments;
