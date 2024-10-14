import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Third-party imports
import { Provider } from "react-redux";

import Body from "./components/Body"; // Local imports
import Head from "./components/Head";
import BodyContainer from "./components/BodyContainer";
import WatchPage from "./components/WatchPage";
import store from "./utils.js/store";
import "./App.css";



const appRouter = createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<BodyContainer/>
      },
      {
        path:"/watch",
        element:<WatchPage/>
      }
    ]
}])
const App=()=>{
  return (

    <Provider store={store}>
        <div>
          <Head/>
          <RouterProvider router={appRouter}/>
        </div>
    </Provider>
    
  );
}

export default App;


// Head
// body 
// sidebar 
//   menu items
// body container 
//   buttons list 
//   video container 
//     video card