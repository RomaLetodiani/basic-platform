import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";

import { styled } from "@mui/material/styles";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import { useNavigate, useParams } from "react-router-dom";
import { useProjectsQuery } from "@/server/query";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
  width: 28,
  height: 28,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.secondary,
  border: `1px solid ${theme.palette.divider}`,
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
  minWidth: 0,
  marginRight: 12,
});

const SelectContent = () => {
  const { orgId, projectId } = useParams();
  const navigate = useNavigate();
  const { data: projects } = useProjectsQuery(orgId ?? "");

  const handleChange = (event: SelectChangeEvent) => {
    const projectId = event.target.value as string;
    navigate(`${projectId}`);
  };

  return (
    <Select
      labelId="company-select"
      id="company-simple-select"
      value={projectId}
      onChange={handleChange}
      displayEmpty
      inputProps={{ "aria-label": "Select company" }}
      fullWidth
      sx={{
        maxHeight: 56,
        width: 215,
        "&.MuiList-root": {
          p: "8px",
        },
        [`& .${selectClasses.select}`]: {
          display: "flex",
          alignItems: "center",
          gap: "2px",
          pl: 1,
        },
      }}
    >
      {projects &&
        projects.map((project) => {
          return (
            <MenuItem value={project.id} sx={{ mt: 0.5, mb: 0.5 }}>
              <ListItemAvatar>
                <Avatar alt={project.name}>
                  <DevicesRoundedIcon sx={{ fontSize: "1rem" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={project.name} secondary={project.id} />
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default SelectContent;
