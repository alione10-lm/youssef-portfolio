import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex items-center  border-blue-100 border  gap-8 text-sm fixed backdrop-blur-sm bg-transparent left-1/2 -translate-x-1/2 top-4  rounded-full  px-4 py-2 md:px-4 md:py-2">
      <StyledLink to="home">Home</StyledLink>
      <StyledLink to="education">Education</StyledLink>
      <StyledLink to="skills">Skills</StyledLink>
      <StyledLink to="contact">Contact</StyledLink>
    </div>
  );
}
function StyledLink({ children, to }) {
  return (
    <NavLink
      className="text-slate-800 hover:bg-blue-500 py-1 px-2   md:px-4 md:py-2 rounded-full transition-all duration-300"
      to={to}
    >
      {children}
    </NavLink>
  );
}

export default Navigation;
