/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 사용자 공통 Header
 */

import Gnb from '@/views/client/navigation/gnb';

const ClientHeader = () => {
  return (
    <div className="cHeaderWrap">
      {/* Header */}
      <Gnb />
    </div>
  );
};

export default ClientHeader;
