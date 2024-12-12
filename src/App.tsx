import ClientMain from "@/views/client/clientMain";
import CommonLayout from "@/views/common/client/commonLayout";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.scss";
import SecurityCheck from "./routers/securityCheck";
import defaultTheme from "./theme/defaultTheme";

function App() {

  return (
    /**
     *  테마 설정
     */
    <ThemeProvider theme={defaultTheme}>

      {/* 보안 체크 */}
      <Routes>
        <Route path={"/"} element={<SecurityCheck />} >
          <Route element={<CommonLayout />}>
            {/*<Route path="login" element={<Login />} />*/}
            <Route path="main" element={<ClientMain />} />
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


    </ThemeProvider >

  )
}

export default App;
