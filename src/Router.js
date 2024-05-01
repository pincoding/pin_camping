import { HashRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Login } from "./pages/login/Login";
import { Header } from "./components/Header";
import { routerUrl } from "./routes";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routerUrl.home} element={<Home />}></Route>
        <Route path={routerUrl.detail} element={<Detail />}></Route>
        <Route path={routerUrl.search} element={<Search />}></Route>
        <Route path={routerUrl.login} element={<Login />}></Route>
        <Route path={routerUrl.notfound} element={<NotFound />}></Route>
      </Routes>
    </HashRouter>
  );
};
