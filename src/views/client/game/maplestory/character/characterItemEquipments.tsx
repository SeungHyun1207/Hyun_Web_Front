/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 장착중인 장비
 */
import { useMapleCharacterItemEquipmentsStore } from '@/apis/hooks/client/game/stores/useGameStore';
import {
  equipmentClassName,
  equipmentOrder,
} from '@apis/hooks/client/game/useGame';

const CharacterItemEquipments = () => {
  const { characterItemEquipments } = useMapleCharacterItemEquipmentsStore();

  return (
    <div className="characterItemWrap">
      {characterItemEquipments && characterItemEquipments.length > 0 ? (
        equipmentOrder.map((row, rowIndex) => (
          <div key={rowIndex} className={`slotRow row-${rowIndex}`}>
            {row.map((slotName, colIndex) => {
              if (slotName === '') {
                return <div key={colIndex} className="empty-slot"></div>;
              }
              const className =
                equipmentClassName.get(slotName) || 'defaultClass';
              const item = characterItemEquipments.find(
                (item) => item.item_equipment_slot === slotName
              );
              return (
                <div key={colIndex} className={`${className} equipment-slot`}>
                  {item ? (
                    <img
                      src={item.item_icon}
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

export default CharacterItemEquipments;
