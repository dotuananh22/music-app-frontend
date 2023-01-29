import colors from "constants/color";
import { NavLink } from "react-router-dom";

interface AdminProps {
  active: string;
}

const Admin = (props: AdminProps) => {
  return (
    <div className="flex flex-row gap-12 text-lg">
      <NavLink
        to={"/admin/dashboard"}
        className={
          props.active === "Dashboard"
            ? `text-[${colors.greenColor}] cursor-not-allowed`
            : `hover:text-[${colors.greenColor}]`
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to={"/admin/releases"}
        className={
          props.active === "Releases"
            ? `text-[${colors.greenColor}] cursor-not-allowed`
            : `hover:text-[${colors.greenColor}]`
        }
      >
        Releases
      </NavLink>
      <NavLink
        to={"/admin/artists"}
        className={
          props.active === "Artists"
            ? `text-[${colors.greenColor}] cursor-not-allowed`
            : `hover:text-[${colors.greenColor}]`
        }
      >
        Artirts
      </NavLink>
      <NavLink
        to={"/admin/users"}
        className={
          props.active === "Users"
            ? `text-[${colors.greenColor}] cursor-not-allowed`
            : `hover:text-[${colors.greenColor}]`
        }
      >
        Users
      </NavLink>
    </div>
  );
};

export default Admin;
