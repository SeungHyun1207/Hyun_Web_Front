import ClientMain from '@/views/client/clientMain';
import CommonLayout from '@/views/common/client/commonLayout';
import StyleItem from '@views/client/styleItems/styleItems';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import SecurityCheck from './routers/securityCheck';
import defaultTheme from './theme/defaultTheme';

function App() {
  return (
    /**
     *  테마 설정
     */
    <ThemeProvider theme={defaultTheme}>
      {/* 보안 체크 */}
      <Routes>
        <Route path={'/'} element={<SecurityCheck />}>
          <Route element={<CommonLayout />}>
            {/* 로그인 */}
            {/*<Route path="login" element={<Login />} />*/}

            {/* 메인 */}
            <Route path="main" element={<ClientMain />} />

            {/* 프로필 */}
            {/* 포토폴리오 */}
            {/* 여행 */}
            {/* 공부 */}
            {/* 게임 */}
            <Route path="game" element={<StyleItem />} />
            {/* 스타일 아이템 */}
            <Route path="styleItem" element={<StyleItem />}>
              {/* <Route path="" <StyleItem /> */}
            </Route>
          </Route>
          {/*
          <Route element={<AdminCommonLayout />}>
            <Route path="admin" element={<AdminMain />} >
              <Route path="/dashBoard" element={<DashBoardIndex />} />
            </Route>
          </Route>
          */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
