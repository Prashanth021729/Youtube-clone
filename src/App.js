import Header from "./components/Header";
import Body from "./components/Body"
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer"
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watchpage from "./components/Watchpage";

const appRouter = createBrowserRouter([{
  path: "/",
  element:<Body/>,
  children:[
  {
    path: "/",
    element: <MainContainer/>
  },
  {
    path:"watch",
    element:<Watchpage/>
  }

  ]

}])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <RouterProvider router = {appRouter}/>
    </div>
    </Provider>
  );
}

export default App;