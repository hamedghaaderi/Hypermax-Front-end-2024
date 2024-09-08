import { useRoutes } from "react-router-dom";
import Footer from "./components/footer";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Footer />,
    },
  ]);
  return <>{routes}</>;
};

export default App;
