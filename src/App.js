
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Loginpage from "./pages/Login";
import SingupPage from "./pages/Signup";
import HomePage from "./pages/homepage";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Protectedroute"
import Users from "./pages/users";
const App = () => {
  return (  
    
    <body class="antialiased bg-gray-200  font-sans ">
      <div className=" min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
        <AuthContextProvider>
           <BrowserRouter>
        <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/signup" element={<SingupPage/>} />
        <Route className=""
            path='/homepage'
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />

<Route className=""
            path='/users'
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
          </AuthContextProvider>  
        
       
        </div>

      </div>
      </body>
     
     
  
  
  );
}
 
export default App;