import React, { useState } from "react";


function Menu({ toggleDarkMode }) {

  const [checked, setChecked] = useState(false)

  const handleToggle = () => {
    toggleDarkMode();
    setChecked(!checked)
  }


  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={checked}
          onChange={handleToggle}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
}

export default Menu;
