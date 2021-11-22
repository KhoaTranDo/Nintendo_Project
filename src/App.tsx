import React from "react";
import "./App.scss";

interface PropsInterface {
  children: React.ReactNode;
}
const App: React.FC<PropsInterface> = (props: PropsInterface) => {
  return <>{props.children}</>;
};

export default App;
