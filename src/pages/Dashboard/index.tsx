import ProfessorDashboard from "../../components/ProfessorDashboard";
import StudentDashboard from "../../components/StudentDashboard";
import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const userType: string = "professor";
  return (
    <Container>
      {userType === "professor" ? <ProfessorDashboard /> : <StudentDashboard />}
    </Container>
  );
};

export default Dashboard;
