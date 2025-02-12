/**
 *  작성일 : 2025-02-12
 *  작성자 : SH.K
 *  내용 : String Utils
 */

// HTML 엔티티(예: &lt;, &gt;, &nbsp;)가 포함된 문자열을 일반 문자열로 변환(디코딩) 해주는 함수.
export const decodeHTML = (rawHTML: string): string => {
  if (rawHTML) {
    const convertedUnicode = rawHTML.replace('\u000B', '&nbsp;');
    const e = document.createElement('div');
    e.innerHTML = convertedUnicode;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue ?? '';
  } else {
    return '';
  }
};

// HTML 태그를 제거한 후 남은 텍스트가 있는지 확인하여 비어 있는 문자열인지 검사하는 함수.
export const emptyCheck = (data: string) => {
  if (data) {
    const checkData = data.replace(
      /<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g,
      ''
    );
    if (checkData === null) {
      return true;
    }

    if (checkData.trim().length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};
