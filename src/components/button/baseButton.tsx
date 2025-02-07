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
  // size?: 'small' | 'medium' | 'large';
  // variant?: 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary';
  // block?: boolean;
  // fullWidth?: boolean;
  // isLoading?: boolean;
  // icon?: React.ReactNode;
  // loadingText?: string;
  // as?: React.ElementType;
  // href?: string;
  // target?: '_blank' | '_self' | '_parent' | '_top';
  // rel?: string;
  // data?: Record<string, unknown>;
  // to?: string | React.ReactElement | null;
  // tabIndex?: number;
  // autoFocus?: boolean;
  // form?: string;
  // formAction?: string;
  // formEncType?: string;
}

const BaseButton = ({
  buttonName,
  className,
  disabled,
  onClick,
  type,
}: IBaseButtonProps) => {
  return (
    <>
      <button
        className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        <span>{buttonName}</span>
      </button>
    </>
  );
};

export default BaseButton;
