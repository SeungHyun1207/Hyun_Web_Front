import BaseButton from './baseButton';

/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 버튼 컴포넌트 리스트 페이지
 */
const buttonList = [
  {
    buttonName: '네온 버튼 1',
    buttonClassName: 'btn-neon-skyblue',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '네온 버튼 2',
    buttonClassName: 'btn-neon-purple',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '네온 버튼 3',
    buttonClassName: 'btn-neon-green',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '저장',
    buttonClassName: 'btn-success',
    disabled: false,
    customSize: { width: '200px', height: '100px' },
  },
  {
    buttonName: '삭제',
    buttonClassName: 'btn-danger',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '수정',
    buttonClassName: 'btn-edit',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '취소',
    buttonClassName: 'btn-cancel',
    disabled: false,
    customSize: { width: '200px', height: '100px' },
  },
  {
    buttonName: '확인',
    buttonClassName: 'btn-success',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '삭제(비활성화)',
    buttonClassName: 'btn-disabled',
    disabled: true,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '닫기',
    buttonClassName: 'btn-close',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '경고',
    buttonClassName: 'btn-warning',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '확인',
    buttonClassName: 'btn-success',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '작은 버튼',
    buttonClassName: 'btn-primary btn-small',
    disabled: false,
    customSize: { width: '250px', height: '100px' },
  },
  {
    buttonName: '큰 버튼',
    buttonClassName: 'btn-primary btn-large',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '사이즈 커스텀 버튼',
    buttonClassName: 'btn-primary btn-custom',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: 'Glitch 레드 버튼',
    className: 'btn btn-glitch btn-glitch-red',
  },
  {
    buttonName: 'Glitch 그린 버튼',
    className: 'btn btn-glitch btn-glitch-green',
  },
  {
    buttonName: 'Glitch 퍼플 버튼',
    className: 'btn btn-glitch btn-glitch-purple',
  },
  {
    buttonName: '스위치 버튼1',
    buttonClassName: 'btn-switch',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '스위치 버튼2',
    buttonClassName: 'btn-switch',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '스위치 버튼3',
    buttonClassName: 'btn-switch',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '애니메이션 버튼1',
    buttonClassName: 'btn-animated',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '애니메이션 버튼2',
    buttonClassName: 'btn-animated',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '애니메이션 버튼3',
    buttonClassName: 'btn-animated',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '그라디언트 버튼',
    buttonClassName: 'btn-gradient',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '호버 버튼',
    buttonClassName: 'btn-hover',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '블록 버튼',
    buttonClassName: 'btn-block',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '흘러가는 버튼 흘러가는 버튼 흘러가는 버튼',
    buttonClassName: 'btn-marquee',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
  },
  {
    buttonName: '크로스 버튼',
    buttonClassName: 'btn-cross',
    disabled: false,
    customSize: { width: '200px', height: '50px' },
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
