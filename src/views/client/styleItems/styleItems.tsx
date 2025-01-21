/**
 *  작성일 : 2025-01-21
 *  작성자 : SH.K
 *  내용 : 사용자 Style Item
 */

import useStyleItems from '@/apis/hooks/client/useStyleItems';

const StyleItem = () => {
  const {
    // State
    styleItemsList,
    // SetState
    // Handler
    handleStyleItemsClick,
  } = useStyleItems();

  return (
    <div className="styleItemWrap">
      <div className="">
        {styleItemsList &&
          styleItemsList.length > 0 &&
          styleItemsList.map((item, index) => (
            <div
              key={index}
              className="styleItem"
              onClick={() => handleStyleItemsClick(item.styleUrl)}
            >
              <img alt="" />
              <p>{item.styleName}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StyleItem;
