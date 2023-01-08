import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../container/Layout";
import StudentLogin from "../pages/StudentLogin";
import ProfessorLogin from "../pages/ProfessorLogin";
import { RequireAuth } from "../contexts/Auth/RequireAuth";
import Dashboard from "../pages/Dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/professor-login" element={<ProfessorLogin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
