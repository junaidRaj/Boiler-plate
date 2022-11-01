import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Home from "../Screens/home";
import Login from "../Screens/login";
import  QuizPage  from "../Screens/Quiz";
import SignUp from "../Screens/signup";
import StudentsList from "../Screens/Students";

function AppRouter(){
    return<>
    <Router>
        <Routes>
            <Route path="/:id" element={<Home/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="SignUp" element={<SignUp/>}/>
            <Route path="stdList" element={<StudentsList/>}/>
            <Route path="QuizPage" element={<QuizPage/>}/>
        </Routes>
    </Router>
    </>
}
export default AppRouter;