/**
 *  작성일 : 2025-02-11
 *  작성자 : SH.K
 *  내용 : 기본 Select 컴포넌트
 */

import { useState } from 'react';

interface IBaseSelectProps<T extends string | number> {
  options: { label: string; value: T }[];
  value?: T | null;
  onChange?: (value: T) => void;
  placeholder?: string;
  disabled?: boolean;
  customSize?: { width?: string; height?: string };
  className?: string;
  variant?:
    | 'default'
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'secondary'
    | 'outline'
    | 'disabled';
  selectType?:
    | 'basic'
    | 'icon'
    | 'multi'
    | 'search'
    | 'tag'
    | 'radio'
    | 'switch'
    | 'grouped'
    | 'slider'
    | 'emoji';
}

const BaseSelect = <T extends string | number>({
  options,
  value: propValue,
  onChange,
  placeholder,
  disabled,
  customSize,
  className,
  variant = 'default',
  selectType = 'basic',
}: IBaseSelectProps<T>) => {
  const [localValue, setLocalValue] = useState<T | null>(propValue ?? null);

  const handleChange = (newValue: T) => {
    setLocalValue(newValue);
    onChange?.(newValue);
  };

  // selectGroupOption도 확인
  return (
    <div
      className={`select-wrapper ${selectType}`}
      style={{ width: customSize?.width, height: customSize?.height }}
    >
      {selectType === 'slider' ? (
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={localValue ?? 0}
          onChange={(e) => handleChange(Number(e.target.value) as T)}
          disabled={disabled}
          className={`slider ${className ?? ''}`}
        />
      ) : selectType === 'radio' ? (
        <div className="radio-group">
          {options.map((option) => (
            <label key={option.value} className="radio-label">
              <input
                type="radio"
                name={`radio-${placeholder}`}
                value={option.value}
                checked={localValue === option.value}
                onChange={() => handleChange(option.value)}
                disabled={disabled}
              />
              {option.label}
            </label>
          ))}
        </div>
      ) : selectType === 'switch' ? (
        <label className="switch">
          <input
            type="checkbox"
            checked={localValue === 'on'}
            onChange={() =>
              handleChange(localValue === 'on' ? ('off' as T) : ('on' as T))
            }
            disabled={disabled}
          />
          <span className="slider"></span>
        </label>
      ) : (
        <select
          value={localValue ?? ''}
          onChange={(e) => handleChange(e.target.value as T)}
          disabled={disabled}
          className={`base-select ${variant} ${className ?? ''}`}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default BaseSelect;
