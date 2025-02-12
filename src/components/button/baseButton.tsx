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
  isGlitch?: boolean;
}

const BaseButton = ({
  buttonName,
  className = '',
  disabled,
  onClick,
  type = 'button',
  customSize,
  isGlitch = false,
}: IBaseButtonProps) => {
  const isNeon = className.includes('btn-neon');

  return (
    <button
      className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={
        customSize ? { width: customSize.width, height: customSize.height } : {}
      }
    >
      {/* 네온 효과 추가 */}
      {isNeon && (
        <>
          <span className="neon-line line1"></span>
          <span className="neon-line line2"></span>
          <span className="neon-line line3"></span>
          <span className="neon-line line4"></span>
        </>
      )}

      {/* Glitch 효과 추가 */}
      {isGlitch ? (
        <div className="glitch-container">
          <span className="glitch-text glitch-layer1">{buttonName}</span>
          <span className="glitch-text glitch-layer2">{buttonName}</span>
          <span className="glitch-text">{buttonName}</span>
        </div>
      ) : (
        <span>{buttonName}</span>
      )}
    </button>
  );
};

export default BaseButton;
