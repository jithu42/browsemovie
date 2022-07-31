import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterPaths from "../RouterPaths";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <>
      <RecoilRoot> 
        <Router>
          <RouterPaths />
        </Router>{" "}
      </RecoilRoot>
    </>
  );
};

export default App;
