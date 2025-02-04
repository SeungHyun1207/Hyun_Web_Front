/**
 *  작성일 : 2025-02-02
 *  작성자 : SH.K
 *  내용 : API 공통 Axios
 */

import axios from 'axios';

// Vite 환경 변수에서 API URL 가져오기
const BASE_URL = import.meta.env.VITE_HYUN_WEB_LOCAL;

const commonAxios = axios.create({
  baseURL: BASE_URL, // .env 환경변수에서 API URL 가져오기
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 (토큰 X)
commonAxios.interceptors.request.use((config) => {
  return config; // 단순히 요청을 그대로 반환
});

// 응답 인터셉터 (에러 로깅)
commonAxios.interceptors.response.use(
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

export default commonAxios;
