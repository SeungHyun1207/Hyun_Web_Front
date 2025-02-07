/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 장착중인 캐시장비
 */
import {
  equipmentClassName,
  equipmentOrder,
} from '@/apis/hooks/client/game/useMapleCharacter';
import { useMapleCharacterCashItemEquipmentsStore } from '@/stores/game/useMapleCharacterStore';

const CharacterCashItemEquipments = () => {
  const { characterCashItemEquipments } =
    useMapleCharacterCashItemEquipmentsStore();

  return (
    <div className="characterItemWrap">
      {characterCashItemEquipments && characterCashItemEquipments.length > 0 ? (
        equipmentOrder.map((row, rowIndex) => (
          <div key={rowIndex} className={`slotRow row-${rowIndex}`}>
            {row.map((slotName, colIndex) => {
              if (slotName === '') {
                return <div key={colIndex} className="empty-slot"></div>;
              }
              const className =
                equipmentClassName.get(slotName) || 'defaultClass';
              const item = characterCashItemEquipments.find(
                (item) => item.cash_item_equipment_slot === slotName
              );
              return (
                <div key={colIndex} className={`${className} equipment-slot`}>
                  {item ? (
                    <img
                      src={item.cash_item_icon}
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
        <div className="no-equipment">
          <span>캐릭터를 검색해주세요!</span>
        </div>
      )}
    </div>
  );
};
export default CharacterCashItemEquipments;
