import BaseButton from './baseButton';

/**
import ButtonItemList from './buttonItemList';
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 버튼 컴포넌트 리스트 페이지
 */

const ButtonItemList = () => {
  return (
    <div className="buttonItemListWrap">
      <div className="buttonItemCardList">
        <BaseButton buttonName="버튼1" type="button" className="red" />
        <BaseButton buttonName="버튼2" type="button" className="red" />
        <BaseButton buttonName="버튼3" type="button" className="red" />
        <BaseButton buttonName="버튼4" type="button" className="red" />
        <BaseButton buttonName="버튼5" type="button" className="red" />
        <BaseButton buttonName="버튼6" type="button" className="red" />
        <BaseButton buttonName="버튼7" type="button" className="red" />
      </div>
    </div>
  );
};

export default ButtonItemList;
