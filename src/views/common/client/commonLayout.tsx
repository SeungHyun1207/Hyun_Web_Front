/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 공통 레이아웃
 */

import ClientMain from '@/views/client/clientMain';
import Gnb from '@/views/client/navigation/gnb';
import { Outlet } from 'react-router-dom';

const CommonLayout = () => {
  return (
    <div className="mainWrap">
      {/* Gnb */}
      <Gnb />
      <ClientMain />

      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default CommonLayout;
