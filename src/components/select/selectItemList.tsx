/**
 *  작성일 : 2025-02-11
 *  작성자 : SH.K
 *  내용 : Select 컴포넌트 리스트 페이지
 */

import { useState } from 'react';
import BaseSelect from './baseSelect';

type SelectVariant =
  | 'default'
  | 'primary'
  | 'danger'
  | 'success'
  | 'warning'
  | 'secondary'
  | 'outline'
  | 'disabled';
type SelectType =
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

interface SelectItem {
  selectName: string;
  variant: SelectVariant;
  selectType: SelectType;
}

const selectList: SelectItem[] = [
  { selectName: '기본 선택', variant: 'default', selectType: 'basic' },
  { selectName: '아이콘 선택', variant: 'success', selectType: 'icon' },
  { selectName: '멀티 선택', variant: 'danger', selectType: 'multi' },
  { selectName: '검색 가능한 선택', variant: 'outline', selectType: 'search' },
  { selectName: '태그 스타일 선택', variant: 'warning', selectType: 'tag' },
  { selectName: '라디오 버튼 선택', variant: 'secondary', selectType: 'radio' },
  { selectName: '스위치 선택', variant: 'primary', selectType: 'switch' },
  { selectName: '그룹화된 선택', variant: 'success', selectType: 'grouped' },
  { selectName: '슬라이더 선택', variant: 'outline', selectType: 'slider' },
  { selectName: '이모지 선택', variant: 'default', selectType: 'emoji' },
];

const SelectItemList = () => {
  const [selectedValues, setSelectedValues] = useState<{
    [key: number]: string | number | null;
  }>({});

  const handleSelectChange = (index: number, value: string | number) => {
    setSelectedValues((prev) => ({ ...prev, [index]: value }));
  };

  return (
    <div className="selectItemListWrap">
      <div className="selectItemCardList">
        {selectList.map((select, index) => (
          <div key={index} className="selectCard">
            <BaseSelect
              className={`base-select ${select.variant}`}
              variant={select.variant}
              selectType={select.selectType}
              customSize={{ width: '200px', height: '50px' }}
              options={[
                { label: `${select.selectName} - 옵션 1`, value: 'option1' },
                { label: `${select.selectName} - 옵션 2`, value: 'option2' },
              ]}
              value={selectedValues[index] ?? ''}
              onChange={(value) => handleSelectChange(index, value)}
              placeholder={select.selectName}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectItemList;
