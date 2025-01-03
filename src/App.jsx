import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/Applayout";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import Personal from "./pages/skills/Personal";
import Technical from "./pages/skills/Technical";
import Professional from "./pages/skills/Professional";
import Languages from "./pages/skills/Languages";
import Experiences from "./pages/Experiences";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="skills" element={<Skills />}>
              <Route index element={<Navigate replace to="personal" />} />
              <Route path="personal" element={<Personal />} />
              <Route path="technical" element={<Technical />} />
              <Route path="professional" element={<Professional />} />
              <Route path="languages" element={<Languages />} />
            </Route>
            <Route path="education" element={<Education />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
