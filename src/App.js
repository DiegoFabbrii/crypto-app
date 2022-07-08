import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MenuMobProvider from "./context/MenuMobContext";
import ThemeProvider from "./context/ThemeContext";
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Account from "./pages/Account";
import CoinPage from "./pages/CoinPage";
import SearchAndPagProvider from "./context/SearchAndPaginationContext";

function App() {
    return (
        <ThemeProvider>
            <MenuMobProvider>
                <SearchAndPagProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/sigin" element={<SingIn />} />
                        <Route path="/" element={<SingUp />} />
                        <Route path="/" element={<Account />} />
                        <Route path="/coin/:id" element={<CoinPage />} />
                    </Routes>
                </SearchAndPagProvider>
            </MenuMobProvider>
        </ThemeProvider>
    );
}

export default App;
