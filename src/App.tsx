import ClientMain from '@/views/client/clientMain';
import MapleIndex from '@/views/client/game/mapleIndex';
import CharacterIndex from '@/views/client/game/maplestory/character/characterIndex';
import GuildIndex from '@/views/client/game/maplestory/guild/guildIndex';
import UnionIndex from '@/views/client/game/maplestory/union/unionIndex';
import StyleItem from '@/views/client/styleItems/styleItemIndex';
import CommonLayout from '@/views/common/client/commonLayout';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import ButtonItemList from './components/button/buttonItemList';
import InputItemList from './components/input/inputItemList';
import LoginItemList from './components/login/loginItemList';
import SelectItemList from './components/select/selectItemList';
import ToastItemList from './components/toast/toastItemList';
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
        {/* 아직 로그인페이지 사용x 임으로 일단 주석처리 */}
        <Route path={'/'} element={<SecurityCheck />}>
          <Route path="/" element={<CommonLayout />}>
            {/* 로그인 */}
            {/*<Route path="login" element={<Login />} />*/}

            {/* 메인 */}
            <Route path="main" element={<ClientMain />} />

            {/* 프로필 */}
            <Route path="profile" element={<MapleIndex />}>
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
            </Route>
            {/* 포토폴리오 */}
            <Route path="portfolio" element={<MapleIndex />}>
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
            </Route>
            {/* 여행 */}
            <Route path="trip" element={<MapleIndex />}>
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
              <Route path="" element={<CharacterIndex />} />
            </Route>
            {/* 공부 */}
            <Route path="study" element={<MapleIndex />}>
              <Route path="html" element={<CharacterIndex />} />
              <Route path="css" element={<CharacterIndex />} />
              <Route path="react" element={<CharacterIndex />} />
              <Route path="javascript" element={<CharacterIndex />} />
            </Route>
            {/* 게임 */}
            <Route path="game" element={<MapleIndex />}>
              <Route path="character" element={<CharacterIndex />} />
              <Route path="guild" element={<GuildIndex />} />
              <Route path="union" element={<UnionIndex />} />
            </Route>
            {/* 스타일 아이템 */}
            <Route path="styleItem" element={<StyleItem />}>
              <Route path="login" element={<LoginItemList />} />
              <Route path="button" element={<ButtonItemList />} />
              <Route path="toast" element={<ToastItemList />} />
              <Route path="input" element={<InputItemList />} />
              <Route path="select" element={<SelectItemList />} />
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
