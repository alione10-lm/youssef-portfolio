import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex items-center  border-blue-100 border  gap-2 text-xs md:text-sm md:gap-6 fixed backdrop-blur-sm bg-transparent left-1/2 -translate-x-1/2 top-4  rounded-full  px-2 py-2 md:px-4 md:py-2">
      <StyledLink to="home">Home </StyledLink>
      <StyledLink to="education">Education</StyledLink>
      <StyledLink to="experiences">Experiences</StyledLink>
      <StyledLink to="skills">Skills</StyledLink>
      <StyledLink to="contact">Contact</StyledLink>
    </nav>
  );
}
function StyledLink({ children, to }) {
  return (
    <NavLink
      className="text-slate-800  hover:bg-blue-600 p-1 hover:text-blue-50  md:px-4 md:py-2 rounded-full transition-all duration-300"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Navigation;
