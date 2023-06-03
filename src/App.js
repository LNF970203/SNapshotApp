import React from "react";
import HeaderContent from "./Components/headerContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SnapShotApp = (props) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path = "/" element= {<HeaderContent />}>

            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default SnapShotApp;
