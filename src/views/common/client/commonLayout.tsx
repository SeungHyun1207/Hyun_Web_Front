/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 공통 레이아웃
 */

import ClientMain from '@/views/client/clientMain';
import ClientLnb from '@/views/client/navigation/clientLnb';
import { Outlet } from 'react-router-dom';
import ClientHeader from './header';

const CommonLayout = () => {
  return (
    <div className="mainWrap">
      {/* Header */}
      <ClientHeader />
      {/* SideBar */}
      <ClientLnb />
      {/* Footer */}
      {/* Content */}
      <ClientMain />
      {/* Outlet */}
      <Outlet />;
    </div>
  );
};

export default CommonLayout;
