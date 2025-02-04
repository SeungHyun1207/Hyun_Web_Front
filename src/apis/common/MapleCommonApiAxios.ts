/**
 *  작성일 : 2025-02-02
 *  작성자 : SH.K
 *  내용 : Maple API 공통 Axios
 */

/** ============================================================
 *  에러 코드     | 응답 코드 |     응답 명             | 설명
 *  OPENAPI00001  |   500     | Internal Server Error   | 서버 내부 오류
 *  OPENAPI00002  |   403     | Forbidden               | 권한이 없는 경우
 *  OPENAPI00003  |   400     | Bad Request             | 유효하지 않은 식별자
 *  OPENAPI00004  |   400     | Bad Request             | 파라미터 누락 또는 유효하지 않음
 *  OPENAPI00005  |   400     | Bad Request             | 유효하지 않은 API KEY
 *  OPENAPI00006  |   400     | Bad Request             | 유효하지 않은 게임 또는 API PATH
 *  OPENAPI00007  |   429     | Too Many Requests       | API 호출량 초과
 *  OPENAPI00009  |   400     | Bad Request             | 데이터 준비 중
 *  OPENAPI00010  |   400     | Bad Request             | 게임 점검 중
 *  OPENAPI00011  |   503     | Service Unavailable     | API 점검 중
 *  ============================================================
 */

import axios from 'axios';

const Maple_Api_Key =
  'test_ccfe04bc0495562fbbcf5c371829382da0de4f332b3d75a513bdf5dd3606d6c0efe8d04e6d233bd35cf2fabdeb93fb0d';

const MapleCommonApiAxios = axios.create({
  baseURL: 'https://open.api.nexon.com/maplestory', // .env에서 OpenAPI 주소 가져오기
  timeout: 15000, // OpenAPI는 일반 API보다 여유 있는 타임아웃을 설정할 수도 있음
  headers: {
    'Content-Type': 'application/json',
    'x-nxopen-api-key': Maple_Api_Key, // OpenAPI에서 요구하는 API 키
  },
});

// 요청 인터셉터 (토큰 X)
MapleCommonApiAxios.interceptors.request.use((config) => {
  return config; // 단순히 요청을 그대로 반환
});

// 응답 인터셉터 (에러 로깅)
MapleCommonApiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 400) {
        console.error('잘못된 요청 (400)');
      } else if (status === 404) {
        console.error('리소스를 찾을 수 없음 (404)');
      } else if (status === 500) {
        console.error('서버 오류 발생 (500)');
      }
    }
    return Promise.reject(error);
  }
);

export default MapleCommonApiAxios;
