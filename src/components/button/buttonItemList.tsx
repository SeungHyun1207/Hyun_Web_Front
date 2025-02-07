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
        <BaseButton buttonName="등록" className="btn-success" />
        <BaseButton buttonName="저장" className="btn-primary" />
        <BaseButton buttonName="삭제" className="btn-danger" />
        <BaseButton buttonName="수정" className="btn-info" />
        <BaseButton buttonName="취소" className="btn-secondary" />
        <BaseButton buttonName="닫기" className="btn-warning" />
        <BaseButton buttonName="경고" className="btn-outline-danger" />
        <BaseButton buttonName="확인" className="btn-outline-success" />
        <BaseButton
          buttonName="삭제 (비활성화)"
          className="btn-danger"
          disabled
        />
        <BaseButton buttonName="작은 버튼" className="btn-primary small" />
        <BaseButton buttonName="큰 버튼" className="btn-primary large" />
      </div>
    </div>
  );
};

export default ButtonItemList;
