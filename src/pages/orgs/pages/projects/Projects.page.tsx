// import { useProjectsQuery } from "@/server/query";
import { Link, useParams } from "react-router-dom";
import { Project } from "@/types";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProjectsPage = () => {
  const { orgId } = useParams();

  if (!orgId) {
    throw new Error("orgId is required");
  }

  // const { data: projects, isError, isPending } = useProjectsQuery(orgId ?? "");

  // if (isPending) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error</div>;
  // }

  const projects: Project[] = [
    {
      id: "1",
      name: "Project 1",
    },
    {
      id: "2",
      name: "Project 2",
    },
    {
      id: "3",
      name: "Project 3",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, minmax(240px, 1fr))",
          sm: "repeat(2, minmax(240px, 1fr))",
          lg: "repeat(3, minmax(240px, 1fr))",
        },
        gap: 2,
      }}
    >
      {projects.map(({ id, name }) => (
        <Link to={id} key={id}>
          <Card variant="outlined">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ flex: 1 }}>
                <Typography>{name}</Typography>
              </Box>
            </Box>
          </Card>
        </Link>
      ))}
    </Box>
  );
};

export default ProjectsPage;
