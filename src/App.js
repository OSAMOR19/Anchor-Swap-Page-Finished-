import "./App.css";
import Home from "./Components/Home";
// import About from "./Components/About";
import Work from "./Components/Work";
import Swap from "./Pages/swap/swap";
import { BrowserRouter as Switch, Route, createBrowserRouter,RouterProvider } from "react-router-dom";

// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/swap",
    element: <Swap/>,
  },
]);

function App() {
  return <RouterProvider router={router} />
  // return (
  //   <div className="App">
  //     <Home />
  //     {/* <About /> */}
      
  //     <Swap/>

  //     <Work />
  //     {/* <Testimonial /> */} 
  //     {/* <Contact /> */}
  //     {/* <Footer /> */}
  //   </div>
  // );
}

export default App;
