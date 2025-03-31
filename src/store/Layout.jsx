import { BrowserRouter, Outlet } from "react-router-dom/dist"
import ScrollToTop from "../front/components/ScrollToTop"
import { Navbar } from "../front/components/Navbar"
import { Footer } from "../front/components/Footer"
import { Signup } from "../front/pages/Signup"
import { Private } from "../front/pages/Private"
import { Single } from "../front/pages/Single"
import { Login } from "../front/pages/Login"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const basename = process.env.BASENAME || "";
    const [token, setToken] = useState(localStorage.getItem("token"))
    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar token={token} setToken={setToken} />
                    <Routes>
                        <Route element={<Home />} path="/" />    
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Login setToken={setToken} />} path="/login" />
                        <Route element={<Private />} path="/private" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not Found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    )
}