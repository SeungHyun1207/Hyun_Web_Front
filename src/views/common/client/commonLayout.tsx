/**
 *  작성일 : 2024-12-12
 *  작성자 : SH.K
 *  내용 : 사용자 공통 레이아웃
 */

import { Outlet } from 'react-router-dom';
import ClientHeader from './header';

const CommonLayout = () => {
  return (
    <div className="clientMainWrap">
      {/* Header */}
      <ClientHeader />
      {/* SideBar */}
      {/* <ClientLnb /> */}
      {/* Footer */}
      {/* Content */}
      {/* Outlet */}
      <Outlet />
    </div>
  );
};

export default CommonLayout;
