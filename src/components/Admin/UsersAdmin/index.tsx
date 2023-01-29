import colors from "constants/color";
import { NavLink } from "react-router-dom";
import Admin from "..";

const UsersAdmin = () => {
  return (
    <div className="flex flex-col gap-6">
      <Admin active="Users" />
      UsersAdmin
    </div>
  );
};

export default UsersAdmin;
