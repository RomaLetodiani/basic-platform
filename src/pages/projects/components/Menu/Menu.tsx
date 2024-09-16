import { Link } from "react-router-dom";
import { useMenuItems } from "./hooks";
import Stack from "@mui/material/Stack";

const Menu = () => {
  const menuItems = useMenuItems();
  return (
    <Stack>
      {menuItems.map((item) => (
        <Link key={item.path} to={item.path}>
          {item.title}
        </Link>
      ))}
    </Stack>
  );
};

export default Menu;
