import BaseButton from './baseButton';

/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 버튼 컴포넌트 리스트 페이지
 */
const buttonList = [
  {
    buttonName: '저장',
    buttonClassName: 'btn-primary',
    disabled: false,
    customSize: {
      width: '200px',
      height: '100px',
    },
  },
  {
    buttonName: '삭제',
    buttonClassName: 'btn-danger',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '수정',
    buttonClassName: 'btn-info',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '취소',
    buttonClassName: 'btn-secondary',
    disabled: false,
    customSize: {
      width: '200px',
      height: '100px',
    },
  },
  {
    buttonName: '확인',
    buttonClassName: 'btn-success',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '삭제(비활성화)',
    buttonClassName: 'btn-danger',
    disabled: true,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '닫기',
    buttonClassName: 'btn-warning',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '경고',
    buttonClassName: 'btn-outline-danger',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '확인',
    buttonClassName: 'btn-outline-success',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '작은 버튼',
    buttonClassName: 'btn-primary small',
    disabled: false,
    size: 'small',
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '큰 버튼',
    buttonClassName: 'btn-primary large',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
  {
    buttonName: '커스텀 버튼',
    buttonClassName: 'btn-primary custom',
    disabled: false,
    customSize: {
      width: '200px',
      height: '50px',
    },
  },
];

const ButtonItemList = () => {
  return (
    <div className="buttonItemListWrap">
      <div className="buttonItemCardList">
        {buttonList.map((button, index) => (
          <div key={index} className="buttonCard">
            <BaseButton
              buttonName={button.buttonName}
              className={button.buttonClassName}
              disabled={button.disabled}
              customSize={button.customSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonItemList;
