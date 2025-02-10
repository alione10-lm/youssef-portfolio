import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="flex items-center md:shadow-md border md:border-none border-gray-200  gap-2 text-xs md:text-sm md:gap-4 fixed backdrop-blur-sm bg-transparent left-1/2 -translate-x-1/2 top-4  rounded-full  px-4 py-2 md:px-4 md:py-2">
      <StyledLink to="home">Home </StyledLink>
      <StyledLink to="education">Education</StyledLink>
      <StyledLink to="experiences">Experiences</StyledLink>
      <StyledLink to="skills">Skills</StyledLink>
      <StyledLink to="contact">Contact</StyledLink>
    </header>
  );
}
function StyledLink({ children, to }) {
  return (
    <NavLink
      className="text-slate-700 font-medium   hover:bg-blue-600 p-1 hover:text-blue-50  md:px-4 md:py-2 rounded-full transition-all duration-300"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Navigation;
