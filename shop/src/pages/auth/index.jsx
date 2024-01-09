import React from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./registr";

const AuthRootComponent = () => {
    // const [login, setLogin] = React.useState('');
    
    const location = useLocation();


    return(
        // <>
        //     <div className="root">
        //         <form onSubmit={handleSubmit}>
                    
        //         </form>
        //     </div>

        // {location.pathname === '/login' ? <LoginPage setLogin={setLogin} setPassword={setPassword}/> : location.pathname === '/register' ? <RegisterPage /> : null}
        // </>
        location.pathname === '/login' ? <LoginPage /> : location.pathname === '/register' ? <RegisterPage /> : null
        
        );
};

export default AuthRootComponent;