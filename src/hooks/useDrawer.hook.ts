import { useState } from "react";

const useDrawer = (initialValue?: boolean) => {
  const [open, setOpen] = useState<boolean>(initialValue || false);

  const openDrawer = () => setOpen(true);

  const closeDrawer = () => setOpen(false);

  return { open, setOpen, openDrawer, closeDrawer };
};

export default useDrawer;
