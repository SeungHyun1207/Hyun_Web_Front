/**
 *  작성일 : 2024-12-09
 *  작성자 : SH.K
 *  내용 : 로그인 체크
 */

import { ViteMode } from '@/common/common';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const activeMode = import.meta.env.MODE;

const SecurityCheck = () => {
  const navigate = useNavigate();
  // const isAuthenticated = Boolean(localStorage.getItem('userToken')); // 로그인 여부 확인 (예시)

  useEffect(() => {
    if (activeMode === ViteMode.DEV) {
      navigate(`/main`);
    } else {
      navigate(`/login`);
    }
  }, []);

  // useEffect(() => {
  //   if (activeMode === ViteMode.DEV) {
  //     navigate('/main', { replace: true });
  //   } else if (!isAuthenticated) {
  //     navigate('/login', { replace: true });
  //   }
  // }, [navigate, isAuthenticated]); // 로그인 상태와 navigate 변경 시만 실행

  // return isAuthenticated ? <Outlet /> : null; // 로그인 안 됐으면 화면 렌더링 안 함

  return (
    <>
      <Outlet />
    </>
  );
};

export default SecurityCheck;
