import { useState } from "react";
import SideBar from "./Component/SideBar/SideBar";
import { useRoutes } from "react-router-dom";
import { router } from "./router";

function App() {
  const route = useRoutes(router);

  return (
    <div className="bg-[#DBEADD] h-screen flex">
      <SideBar />
      <div className="w-full">{route}</div>
    </div>
  );
}

export default App;
