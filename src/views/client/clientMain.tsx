/**
 *  작성일 : 2024-12-09
 *  작성자 : SH.K
 *  내용 : 사용자 메인화면
 */

import BaseButton from '@/components/button/baseButton';
import ProfileImage from '../../../public/images/profile.jpg';

const ClientMain = () => {
  return (
    <div className="clientMain">
      <div className="contentWrap">
        <section className="content">
          <div className="profileWrap">
            <div className="leftContent">
              <div className="profile">
                <img src={ProfileImage} alt="profile" />
                <div className="profileInfo">
                  <h2>User Name</h2>
                  <p>User ID : user01</p>
                  <p>Level : 10</p>
                </div>
                <BaseButton
                  buttonName="프로필 보러 가기"
                  customSize={{
                    width: 'fit-content',
                    height: '3rem',
                  }}
                />
              </div>
            </div>
            <div className="rightContent">
              <div className="rank">
                <h2>Rank</h2>
                <p>Rank 1</p>
              </div>
            </div>
          </div>
        </section>
        <section className="content">2</section>
        <section className="content">3</section>
      </div>
    </div>
  );
};

export default ClientMain;
