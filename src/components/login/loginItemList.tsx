/**
 *  작성일 : 2025-02-07
 *  작성자 : SH.K
 *  내용 : 로그인 컴포넌트 페이지
 */

import { useState } from 'react';
import BaseButton from '../button/baseButton';
import BaseInput from '../input/baseInput';

interface ILoginItem {
  signUpTitle: string;
  signInTitle: string;
  variant?: string;
}

const loginCardList: ILoginItem[] = [
  {
    signUpTitle: '기본 회원가입',
    signInTitle: '기본 로그인',
    variant: 'default',
  },
  { signUpTitle: '네온 회원가입', signInTitle: '네온 로그인', variant: 'neon' },

  {
    signUpTitle: '네온 바운스 회원가입',
    signInTitle: '네온 바운스 로그인',
    variant: 'bounce',
  },
  {
    signUpTitle: '네온 회원가입',
    signInTitle: '네온 로그인',
    variant: 'shake',
  },
];

const LoginItemList = () => {
  // True =>  로그인
  // false => 회원가입
  const [loginView, setLoginView] = useState<boolean>(false);

  return (
    <div className="loginItemsWrap">
      <div className="loginCardList">
        {loginCardList.map((item, index) => (
          <div key={index} className={`loginCard ${item.variant}`}>
            {/* 회원가입 & 로그인 */}
            <div className={`signInUpWrap ${loginView ? 'signUp' : 'signIn'}`}>
              <div className="signInUpTitle">
                <h2 className="title">
                  {loginView ? item.signUpTitle : item.signInTitle}
                </h2>
              </div>
              <div className="signInUpContent">
                {loginView === true && (
                  <div className="emailBox">
                    <span>Email : </span>
                    <BaseInput
                      type="email"
                      placeholder="이메일 입력"
                      customSize={{
                        width: '300px',
                      }}
                    />
                  </div>
                )}
                <div className="idBox">
                  <span>ID : </span>
                  <BaseInput
                    type="text"
                    placeholder="아이디 입력"
                    customSize={{ width: '300px' }}
                  />
                </div>
                <div className="pwBox">
                  <span>PW : </span>
                  <BaseInput
                    type="password"
                    placeholder="비밀번호 입력"
                    customSize={{ width: '300px' }}
                  />
                </div>
                <BaseButton
                  buttonName="회원가입"
                  customSize={{ width: '300px' }}
                  onClick={() => {}}
                />
              </div>
            </div>

            <div className={`introWrap ${loginView ? 'signIn' : 'signUp'} `}>
              <div className="introTitle">
                <h2>{loginView ? 'Welcome : )' : 'Hello : )'}</h2>
              </div>
              <div className="introContent">
                <span>
                  {loginView
                    ? '아이디가 있다면 로그인을 해주세요!'
                    : '아이디가 없으시다면 회원가입을 진행해 주세요!'}
                </span>
              </div>
              <BaseButton
                buttonName={`${loginView ? '로그인' : '회원가입'}`}
                className="btn-neon-skyblue"
                onClick={() => {
                  setLoginView(!loginView);
                }}
              />
            </div>

            {/* 네온 효과용 요소 */}
            {item.variant === 'neon' && (
              <>
                <span className="neon-line line1"></span>
                <span className="neon-line line2"></span>
                <span className="neon-line line3"></span>
                <span className="neon-line line4"></span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoginItemList;
