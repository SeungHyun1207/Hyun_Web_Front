/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 기본 버튼 컴포넌트
 */

interface IBaseButtonProps {
  buttonName: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  customSize?: {
    width: string;
    height: string;
  };
}

const BaseButton = ({
  buttonName,
  className,
  disabled,
  onClick,
  type,
  customSize,
}: IBaseButtonProps) => {
  return (
    <>
      <button
        className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
        style={
          customSize
            ? { width: customSize.width, height: customSize.height }
            : {}
        }
      >
        <span>{buttonName}</span>
      </button>
    </>
  );
};

export default BaseButton;
