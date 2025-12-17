import {Link} from "react-router";
import {PlusIcon} from "@heroicons/react/24/solid";
const Navbar = () => {
  return( 
  <header classname= "bg-base-300border-b border-base-content/10">
    <div className="mx-auto max-w-6xl p-4">
      <div className="flex items-centre justify-between">
        <h1 className="text-3xl font-bold text-primary font-,mono tracking-tight">ThinkBoard</h1>
        <div className="flex items-center gap-4">
           <Link to={"/create"} classname= "btn btn-primary"> 
           <PlusIcon className="size-5"/>
           <span>new note</span>
           </Link>
        </div>
      </div>

    </div>
  </header>
  );
};

export default Navbar;