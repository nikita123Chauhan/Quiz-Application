import React, {createContext, useState, useEffect, Children} from "react";

//Create Authcontext

export const Authcontext=createContext();

const AuthProvider= ({Children}) =>{
    const [user, setUser]=useState(null);
    const [token, setToken] = useState(localStorage.getItem("tpken") || "");
    useEffect(() => {
        if(token){
            setUser({username:localStorage.getItem("username")});
            //store userdetails if needed
        }
    },[token]);

    //function to log-in

    const login=(username, password) =>{
        fetch("https://balanced-violet-spy.glitch.me/login",{
            method:"POST",
            headers:{"Context-Type":"application/json"},
        }).then((res) =>res.json()).then((data) => {if(data.token){
            localStorage.setItem("token",data.token);
            localStorage.setItem("username",username);
            setToken(data.token);
            setUser({username});
        }
    else{
        alert("Inavalid Credentials");

    }}).catch((error) =>console.log("Login error:", error));
    };

    //functions to logout
    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setToken("");
        setUser(null);
    };
    return(
        <Authcontext.Provider value={{user, token, login}}>
        {Children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;