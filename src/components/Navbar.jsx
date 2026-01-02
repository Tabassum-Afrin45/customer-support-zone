import { Plus } from "lucide-react";
const Navbar = () => {
  return (
    <div className="content-box flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
      <h2 className="text-xl font-bold">CS — Ticket System
      </h2>
      <nav>
        <ul className="flex gap-10">
          <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             Home
            </a>
          </li>
                 <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             FAQ
            </a>
          </li>
                 <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             Changelog
            </a>
          </li>
                 <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             Blog
            </a>
          </li>
                 <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             Download
            </a>
          </li>
                 <li className="">
            <a
              href="#"
              className="border-none duration-200 hover:font-bold"
            >
             Contact
            </a>
          </li>
   
          <li>
           <button className="flex items-center h-10 p-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-md text-white"><Plus />New Ticket</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;