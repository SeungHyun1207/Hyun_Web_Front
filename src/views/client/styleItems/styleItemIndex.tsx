/**
 *  작성일 : 2025-01-21
 *  작성자 : SH.K
 *  내용 : 사용자 Style Item
 */

import useStyleItems from '@/apis/hooks/client/styleitems/useStyleItems';
import ButtonItemList from '@/components/button/buttonItemList';
import InputItemList from '@/components/input/inputItemList';
import LoginItemList from '@/components/login/loginItemList';

// Tab Names
const StyleItemComponentMap: Record<string, JSX.Element> = {
  login: <LoginItemList />,
  button: <ButtonItemList />,
  input: <InputItemList />,
};

const StyleItem = () => {
  const {
    // State
    styleItemsList,
    styleItemShow,
    // SetState
    // Handler
    handleStyleItemsClick,
  } = useStyleItems();

  return (
    <div className="styleItemWrap">
      <div className="styleItemSelectList">
        {styleItemsList &&
          styleItemsList.length > 0 &&
          styleItemsList.map((item, index) => (
            <div
              key={index}
              className="styleItem"
              onClick={() => handleStyleItemsClick(item.styleUrl)}
            >
              <span>{item.styleName}</span>
            </div>
          ))}
      </div>
      {/* Tab에 따라 랜더링 */}
      {styleItemShow && StyleItemComponentMap[styleItemShow]}
    </div>
  );
};

export default StyleItem;
