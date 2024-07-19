import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Academic from './pages/Academic';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Header from "./components/Header";

function AppRouter(){
    return(
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/academic" element={<Academic />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route  basename="/"path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;