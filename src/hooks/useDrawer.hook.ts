import { useState } from "react";

const useDrawer = (initialValue?: boolean) => {
  const [open, setOpen] = useState<boolean>(initialValue || false);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value);
  };

  return { open, setOpen, openDrawer, closeDrawer, toggleDrawer };
};

export default useDrawer;
