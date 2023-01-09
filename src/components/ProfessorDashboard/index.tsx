import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useApi } from "../../hooks/useApi";

import { Container, SituationBox, Title, Input, DateContainer } from "./styles";

const ProfessorDashboard: React.FC = () => {
  const auth = useContext(AuthContext);
  const api = useApi();
  const [rows, setRows] = useState<Array<object>>();

  useEffect(() => {
    const handleCallProfessor = async () => {
      if (auth.user) {
        const professorRes: any = await api.callProfessor(auth.user?.token);

        for (let i: number = 0; professorRes.length >= i; i++) {
          let name =
            professorRes[i]?.firstName + " " + professorRes[i]?.lastName;
          professorRes[i]?.scores.map((score: any) => {
            let updated = format(new Date(score?.updatedAt), "dd-MM-yyyy");
            let updatedHour = format(new Date(score?.updatedAt), "hh:mm");
            let n1 = score?.n1.toFixed(2);
            let n2 = score?.n2.toFixed(2);
            let n3 = score?.n3.toFixed(2);
            let n4 = score?.n4.toFixed(2);
            let average = score?.average.toFixed(2);
            let situation = score?.situation;

            return setRows([
              ...(rows ?? []),
              {
                name,
                updated,
                updatedHour,
                n1,
                n2,
                n3,
                n4,
                average,
                situation,
              },
            ]);
          });
        }
      }
    };

    handleCallProfessor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>
        <h1>Meus Alunos</h1>
        <div className="input-line">
          <Input type="text" placeholder="pesquisar alunos" />
          <img src="/assets/lupa.svg" alt="lupa" />
        </div>
      </Title>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Aluno</TableCell>
            <TableCell>Atualização</TableCell>
            <TableCell>Av. 1</TableCell>
            <TableCell>Av. 2</TableCell>
            <TableCell>Av. 3</TableCell>
            <TableCell>Av. 4</TableCell>
            <TableCell>Média Final</TableCell>
            <TableCell>Situação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row: any, index: any) => (
            <TableRow key={index} sx={{ borderRadius: 0, marginBottom: "8px" }}>
              <TableCell>{row?.name}</TableCell>
              <TableCell>
                <DateContainer>
                  <p>{row?.updated}</p>
                  <span>{row?.updatedHour}</span>
                </DateContainer>
              </TableCell>
              <TableCell>{row?.n1}</TableCell>
              <TableCell>{row?.n2}</TableCell>
              <TableCell>{row?.n3}</TableCell>
              <TableCell>{row?.n4}</TableCell>
              <TableCell>{row?.average}</TableCell>
              <TableCell>
                <SituationBox
                  className={
                    row?.situation.toLowerCase() === "aprovado"
                      ? `aproved`
                      : `failed`
                  }
                >
                  {row?.situation}
                </SituationBox>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ProfessorDashboard;
