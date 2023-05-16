import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

function Home  ()  {
return (
	
    <><div className="container">
            <img src="./image/image1.jpeg" alt="" />
            <button class="btn">
                <Link to="/Aboutus">Start</Link>
            </button>
        </div>
        </>
    
    
);
};

export default Home;
