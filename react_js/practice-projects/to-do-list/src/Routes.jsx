import SignUp from "./components/signup";
import LogIn from "./components/login";
export const routes = [
    {
        path : "/", 
        element : <LogIn></LogIn>
    },
    {
        path : "/signup", 
        element : <SignUp></SignUp>
    }
]