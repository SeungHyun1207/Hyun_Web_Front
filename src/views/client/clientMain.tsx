/**
 *  작성일 : 2024-12-09
 *  작성자 : SH.K
 *  내용 : 사용자 메인화면
 */

import BaseButton from '@/components/button/baseButton';
import { useEffect, useRef, useState } from 'react';
import ProfileImage from '../../../public/images/profile.jpg';

const ClientMain = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false); // 스크롤이 조금이라도 내려가면 숨기기
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef]);

  return (
    <div ref={scrollRef} className="clientMain">
      <div className="contentWrap">
        {/* Content 1 */}
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
                <h2> {visible}</h2>
                <p>Rank 1</p>
              </div>
            </div>
          </div>
          {/* 스크롤 아이템 */}

          {/* MUI이용해서 이미지  
                  https://mui.com/material-ui/react-image-list/

                  이미지 이용해서 어떻게 만들건지 생각해보고 정리하기
                  카드 형식으로 해서
                  */}
          <div className={`scrollItem ${visible ? 'show' : 'hide'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 16.5l-6-6 1.41-1.41L12 13.67l4.59-4.58L18 10.5z" />
            </svg>
          </div>
        </section>

        <section className="content">가계부로 갈 수 있는 위치</section>
        <section className="content">3</section>
      </div>
    </div>
  );
};

export default ClientMain;
