import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Applayout() {
  return (
    <div className="h-screen w-full relative ">
      <Navigation />
      <main className="py-10 h-full md:py-20 px-10 md:px-36 ">
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
