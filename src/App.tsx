import React, { ReactNode } from "react";
import "./App.scss";

interface PropsInterface {
  children: React.ReactNode;
}
const App = (props: PropsInterface) => {
  return <>{props.children}</>;
};

export default App;
