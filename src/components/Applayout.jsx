import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Applayout() {
  return (
    <div className="h-screen bg-white w-full relative ">
      <Navigation />
      <main className="py-10 h-full md:py-20 px-4  md:px-36 ">
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
