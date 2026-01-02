import { Facebook, Linkedin, Mail, X } from "lucide-react";

const Footer = () => {  
  return ( 
<div className=" bg-black h-fit">
  <div className="w-11/12 mx-auto py-10 grid grid-cols-5 text-gray-300 space-x-10">
   <div>
    <h2 className="font-bold text-white text-xl pb-3">CS — Ticket System</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
   </div>
   <div>
    <h2 className="font-bold text-white text-xl pb-3">Company</h2>
    <ul>
        <li>About Us</li>
        <li className="py-3">Our Mission</li>
        <li>Contact Saled</li>
    </ul>
   </div>
   <div>
    <h2 className="font-bold text-white text-xl pb-3">Services</h2>
    <ul>
        <li>Products & Services</li>
        <li className="py-3">Customer Stories</li>
        <li>Download Apps</li>
    </ul>
   </div>
   <div>
    <h2 className="font-bold text-white text-xl pb-3">Information</h2>
    <ul>
        <li>Privacy Policy</li>
        <li className="py-3">Terms & Conditions</li>
        <li>Join Us</li>
    </ul>
   </div>
   <div>
    <h2 className="font-bold text-white text-xl pb-3">Social Links</h2>
    <ul>
        <li className="flex flex-row gap-0.5"><span><X /></span>@CS — Ticket System</li>
        <li className="flex flex-row gap-0.5 py-3"><span><Linkedin /></span>@CS — Ticket System</li>
        <li className="flex flex-row gap-0.5 pb-3"><span><Facebook /></span>@CS — Ticket System</li>
        <li className="flex flex-row gap-1"><span><Mail /></span>support@cst.com</li>
    </ul>
   </div>
  </div>
   <div className="text-white pb-10 w-11/12 mx-auto text-center">
        <hr className="pb-4" />
        &copy; 2025 CS — Ticket System. All rights reserved.
    </div>
  </div>
  );
};

export default Footer;