import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loginpage from "./pages/Login";
import SingupPage from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Protectedroute";
import AddUsers from "./pages/addusers";
import Userlist from "./pages/userlist";

const App = () => {
  return (
    <body class="antialiased bg-gray-200  font-sans ">
      <div className=" min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <AuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Loginpage />} />
                <Route path="/signup" element={<SingupPage />} />
                <Route
                  className=""
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                <Route
                  className=""
                  path="/addusers"
                  element={
                    <ProtectedRoute>
                      <AddUsers />
                    </ProtectedRoute>
                  }
                />
                <Route
                  className=""
                  path="/userlist"
                  element={
                    <ProtectedRoute>
                      <Userlist />
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
};

export default App;
