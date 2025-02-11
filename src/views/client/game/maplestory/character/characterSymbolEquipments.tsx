/**
 *  작성일 : 2025-02-05
 *  작성자 : SH.K
 *  내용 : 장착중인 심볼
 */
import { useMapleCharacterSymbolEquipmentsStore } from '@/stores/game/useMapleCharacterStore';

const CharacterSymbolEquipments = () => {
  const { characterSymbolEquipments } =
    useMapleCharacterSymbolEquipmentsStore();

  return (
    <div className="characterSymbolWrap">
      {characterSymbolEquipments && characterSymbolEquipments.length > 0 ? (
        characterSymbolEquipments.map((item, index) => {
          const symbolName = item.symbol_name;
          const splitName = symbolName.split('아케인심볼 : ');
          const maxLevel = symbolName.includes('아케인')
            ? 20
            : symbolName.includes('어센틱')
            ? 11
            : null;

          return (
            <div key={index} className="symbolItem">
              <div className="symbolImg">
                <img src={item.symbol_icon} alt={item.symbol_name} />
              </div>
              <div className="symbolInfo">
                <span>{splitName}</span>
                {maxLevel && (
                  <span>
                    {item.symbol_level} / {maxLevel}
                  </span>
                )}
              </div>
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
