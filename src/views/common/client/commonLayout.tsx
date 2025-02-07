/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 공통 레이아웃
 */

import ClientMain from '@/views/client/clientMain';
import { Outlet } from 'react-router-dom';
import ClientHeader from './header';

const CommonLayout = () => {
  return (
    <div className="mainWrap">
      {/* Header */}
      <ClientHeader />
      {/* Footer */}
      {/* Content */}
      <ClientMain />
      {/* Outlet */}
      <Outlet />;
    </div>
  );
};

export default CommonLayout;
