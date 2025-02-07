/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 기본 Input 컴포넌트
 */

interface IBaseInputProps {
  type?: string;
  name?: string;
  value?: any;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  maxLength?: number;
  autoFocus?: boolean;
  pattern?: string;
  errorMessage?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  readOnly?: boolean;
  min?: number;
  max?: number;
  step?: number;
  minLength?: number;
  patternErrorMessage?: string;
  minErrorMessage?: string;
  maxErrorMessage?: string;
  stepErrorMessage?: string;
  minLengthErrorMessage?: string;
  maxLengthErrorMessage?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const BaseInput = ({}: IBaseInputProps) => {
  return <></>;
};

export default BaseInput;
