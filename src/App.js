import {BrowserRouter as Routes,Route,} from "react-router-dom";


// import Home component
import Home from "./components/Home";
// import About component
import Aboutus from "./components/Aboutus";

function App() {
return (
	<>

		<Routes>
		<Route path="/" element={<Home/>} />	
		<Route path="/Aboutus" element={<Aboutus/>} />\
		<Route path="/Home" element={<Home/>} />
		</Routes>
	</>
);
}

export default App
