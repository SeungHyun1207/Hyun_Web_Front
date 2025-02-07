/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : Input 컴포넌트 리스트 페이지
 */

import BaseInput from './baseInput';

const InputItemList = () => {
  return (
    <div className="inputItemListWrap">
      <div className="inputItemCardList">
        {/* 🔹 기본 사용 */}
        <BaseInput type="text" placeholder="기본 입력" />
        {/* 🔹 검색 입력 (돋보기 아이콘) */}
        <BaseInput
          type="search"
          placeholder="검색"
          className="input-search"
          icon="🔍"
        />
        {/* 🔹 비밀번호 입력 (👁️ 아이콘 포함) */}
        <BaseInput type="password" placeholder="비밀번호 입력" />
        {/* 🔹 숫자 입력 */}
        <BaseInput
          type="number"
          placeholder="숫자 입력"
          className="input-number"
        />
        {/* 🔹 이메일 입력 */}
        <BaseInput type="email" placeholder="이메일 입력" />
        {/* 🔹 날짜 입력 */}
        <BaseInput type="date" placeholder="날짜 선택" />
        {/* 🔹 파일 업로드 */}
        <BaseInput type="file" placeholder="파일 업로드" />
        {/* 🔹 에러 메시지 포함 */}
        <BaseInput
          type="text"
          placeholder="에러 발생"
          errorMessage="필수 입력 사항입니다."
        />
        {/* 🔹 작은 사이즈 */}
        <BaseInput type="text" placeholder="작은 입력창" size="small" />
        {/* 🔹 중간 사이즈 */}
        <BaseInput type="text" placeholder="중간 입력창" size="medium" />
        {/* 🔹 큰 사이즈 */}
        <BaseInput type="text" placeholder="큰 입력창" size="large" />
        {/* 🔹 ✅ 커스텀 스타일 적용 (배경색, 테두리 등 변경 가능) */}
        <BaseInput
          type="text"
          placeholder="커스텀 스타일 적용"
          customStyle={{
            backgroundColor: '#f8f9fa',
            border: '2px solid #007bff',
            padding: '12px',
          }}
        />
      </div>
    </div>
  );
};

export default InputItemList;
