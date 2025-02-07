/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 사용자 공통 Header
 */

// import ClientGnb from '@/views/client/navigation/clientGnb';
import ClientGnb from '@/views/client/navigation/clientGnb';

const ClientHeader = () => {
  return (
    <div className="cHeaderWrap">
      {/* Header */}
      <ClientGnb />
    </div>
  );
};

export default ClientHeader;
