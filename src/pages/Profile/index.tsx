import { useContext } from "react";
import Button from "../../components/Button";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, ProfileBox } from "./styles";

const Profile: React.FC = () => {
  const auth = useContext(AuthContext);

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <Container>
      <ProfileBox>
        <p>Name: {auth.user?.name}</p>
        <p>Email: {auth.user?.email}</p>
        <p>Tipo de cadastro: {auth.user?.userType}</p>

        <Button className="button__profile" onClick={handleLogout}>
          Sair
        </Button>
      </ProfileBox>
    </Container>
  );
};

export default Profile;
