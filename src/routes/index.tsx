import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Professor from "../pages/Professor";
import Layout from "../container/Layout";
import StudentLogin from "../pages/StudentLogin";
import ProfessorLogin from "../pages/ProfessorLogin";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/professor-login" element={<ProfessorLogin />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
