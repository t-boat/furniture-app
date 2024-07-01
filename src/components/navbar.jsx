import { Link } from "react-router-dom";
import K from "../constants";

const Navbar = () => {
  return (
    <div className="flex justify-between px-20 py-10 absolute top-0 left-0 w-full">
      
      <span>Logo Here</span>

      <div className="flex gap-4 text-white">
        {
          K.NAVLINKS.map((item, index) => {
            return <Link key={index} to={item.path} className="first-of-type:text-orange-500">{item.name}</Link>;
          })
        }
      </div>

    </div>
  );
};

export default Navbar;