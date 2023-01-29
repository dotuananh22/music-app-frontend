import colors from "constants/color";
import { NavLink } from "react-router-dom";
import Admin from "..";

const ReleasesAdmin = () => {
  return (
    <div className="flex flex-col gap-6">
      <Admin active="Releases" />
      ReleasesAdmin
    </div>
  );
};

export default ReleasesAdmin;
