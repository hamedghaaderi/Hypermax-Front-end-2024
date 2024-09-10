import { useRoutes } from "react-router-dom";
import HomePage from "./pages/homepage";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
