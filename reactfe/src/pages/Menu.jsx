import React from 'react';
import { useNavigate } from 'react-router-dom';
import { roles, routes } from "../constant";

function Menu({ clicked, role }) {
  const navigate = useNavigate();

  function handleClick(clicked, role) {
    switch (clicked) {
      case "home":
        navigate(routes.home, { state: { role: role, clicked: clicked } });
        break;
      case "history":
        if (role === roles.Employee) {
          navigate(routes.history, { state: { role: role, clicked: clicked } });
        } else {
          navigate(routes.historySelect, { state: { role: role, clicked: clicked } });
        }
        break;
      case "newRating":
        navigate(routes.newRating, { state: { role: role, clicked: clicked } });
        break;
      default:
        break;
    }
  }

  const commonClassName = 'flex-1 p-[10px] rounded items-center justify-center text-center text-lg font-sans text-white ';

  return (
      <div className="flex justify-center bg-blue-600 rounded items-center">
        <div
            className={clicked === "home" ? `${commonClassName}border-b-4 border-black` : `${commonClassName} hover:text-blue-600 hover:bg-white`}
            onClick={() => handleClick("home", role)}>
          homepage
        </div>
        <div
            className={clicked === "history" ? `${commonClassName} border-b-4 border-black` : `${commonClassName} hover:text-blue-600 hover:bg-white`}
            onClick={() => handleClick("history", role)}>
          history
        </div>
        <div
            className={clicked === "newRating" ? `${commonClassName}border-b-4 border-black ` : `${commonClassName} hover:text-blue-600 hover:bg-white`}
            onClick={() => handleClick("newRating", role)}>
          new rating
        </div>
      </div>
  );
}

export default Menu;
