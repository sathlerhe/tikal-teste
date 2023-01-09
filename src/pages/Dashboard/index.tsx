import { useContext } from "react";
import ProfessorDashboard from "../../components/ProfessorDashboard";
import StudentDashboard from "../../components/StudentDashboard";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <Container>
      {auth.user?.userType === "professor" ? (
        <ProfessorDashboard />
      ) : (
        <StudentDashboard />
      )}
    </Container>
  );
};

export default Dashboard;
