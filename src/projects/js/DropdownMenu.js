import { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  let menu = null;
  if (isOpen) {
    menu = (
      <ul>
        <li>Edit</li>
        <li>Remove</li>
        <li>Archive</li>
      </ul>
    );
  }

  const handleMenu = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      {menu}
      <button onClick={handleMenu}>Menu</button>
    </div>
  );
};

export default DropdownMenu;
