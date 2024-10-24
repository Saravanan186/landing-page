import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar(){

    const btn = "Button"

    const [bttn, setbttn] = useState(0)
    const [name, setName] = useState("Saravana")

    console.log(btn);
    console.log(bttn);
     
    
    console.log(name);

    const click = ()=>{
        console.log(bttn);
        setName("SDS")
        setbttn(bttn + 10)
        
    }
    return (
        <>
            <div className="flex justify-evenly bg-blue-300 h-[100px] items-center">
                <div>
                    <h1>Loger</h1>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink to="/" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-yellow-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive})=>
                                isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                            }>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Service" className={({isActive})=>
                               isActive ? "rounded-lg p-2 bg-gray-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                        }>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Product" className={({isActive})=>
                               isActive ? "rounded-lg p-2 bg-red-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                        }>Product</NavLink>
                        </li>
                        <li>
                            <NavLink to="/counter" className={({isActive})=>
                               isActive ? "rounded-lg p-2 bg-red-400" : "text-white p-2 hover:bg-gray-200 rounded-lg hover:text-black transition-all duration-300"
                        }>Counter</NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <button onClick={click}>Click here</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;


// Event 

// State Management 
// Hooks Inbuild Hooks      useState
                            useEffect
                            useContext
                            useNavigate