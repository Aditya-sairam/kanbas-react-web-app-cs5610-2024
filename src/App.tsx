import React from "react";
import Labs from "./Labs";
import TOC from "./Labs/TOC";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kanbas from "./Kanbas";
import { Provider } from "react-redux";
import store from "./Kanbas/store";

export default function App(){
  return(
    <HashRouter>
    
    <Provider store={store}>
      <div>
      <Routes>
        <Route path="/" element={<TOC  />} />
      <Route path="/Labs/*" element={<Labs />} />
      <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
    </Provider>
    </HashRouter>

  )
}

