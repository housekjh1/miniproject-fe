import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Nav from "./component/Nav";
import Login from "./component/Login";
import Home from "./component/Home";
import Test1 from "./component/Test1";
import Test2 from "./component/Test2";
import NotFound from "./component/NotFound";

function App() {

  const AuthCheck = ({ children }) => {
    const isAuthenticated = localStorage.getItem('user') === 'authenticated';
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <RecoilRoot>
      <main className='container mx-auto'>
        <BrowserRouter>
          <article>
            <Nav />
          </article>
          <article className="h-[42.5rem] sm:h-[39.25rem] md:h-[34.25rem]">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<AuthCheck><Home /></AuthCheck>} />
              <Route path="/test1" element={<AuthCheck><Test1 /></AuthCheck>} />
              <Route path="/test2" element={<AuthCheck><Test2 /></AuthCheck>} />
              <Route path="*" element={<AuthCheck><NotFound /></AuthCheck>} />
            </Routes>
          </article>
        </BrowserRouter>
      </main>
    </RecoilRoot >
  );
}

export default App;
