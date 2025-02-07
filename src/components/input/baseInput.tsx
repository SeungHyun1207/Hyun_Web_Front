/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 기본 Input 컴포넌트
 */

import { useState } from 'react';

interface IBaseInputProps {
  type?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  maxLength?: number;
  errorMessage?: string;
  icon?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  customStyle?: React.CSSProperties; // ✅ 사용자가 직접 커스텀 스타일 적용 가능
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const BaseInput = ({
  type = 'text',
  className = '',
  placeholder,
  value,
  onChange,
  disabled,
  errorMessage,
  icon,
  size = 'medium',
  customStyle, // ✅ 커스텀 스타일
  ...props
}: IBaseInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="input-wrapper" style={customStyle}>
      {/* 아이콘이 있을 경우 왼쪽에 표시 */}
      {icon && <span className="input-icon">{icon}</span>}

      {/* Input 필드 */}
      <input
        type={type === 'password' && isPasswordVisible ? 'text' : type}
        className={`input ${className} ${
          errorMessage ? 'input-error' : ''
        } input-${size} ${icon ? 'input-search' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />

      {/* 비밀번호 보이기 버튼 */}
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? '🙈' : '👁️'}
        </button>
      )}

      {/* 에러 메시지 */}
      {errorMessage && <p className="input-error-message">{errorMessage}</p>}
    </div>
  );
};

export default BaseInput;
