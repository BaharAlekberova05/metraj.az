import { createContext } from "react";

export const OpenContext = createContext({});


// <nav>
//   <ul className="flex items-center justify-center space-x-4 h-[80px]">
//     <li className="relative group h-full flex items-center justify-center">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `flex items-center ${
//             isActive
//               ? "text-(--custom-color) font-bold"
//               : "text-(--custom-black)"
//           }`
//         }
//       >
//         Home <FaAngleDown className="ml-1.5" />
//       </NavLink>

//       {/* DROPDOWN */}
//       <ul className="flex-col space-y-3 bg-white shadow-sm rounded-lg py-6 px-4 absolute top-18 left-0 w-[250px] hidden opacity-0 group-hover:flex group-hover:opacity-100  overflow-hidden transition-all duration-300 ease-out">
//         <li>
//           <NavLink
//             to="/home1"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Home 1
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/home2"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-200 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Home 2
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/home3"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-300 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Home 3
//           </NavLink>
//         </li>
//       </ul>
//     </li>

//     <li className="relative group h-full flex items-center justify-center">
//       <NavLink
//         to="/listing"
//         className={({ isActive }) =>
//           `flex items-center ${
//             isActive
//               ? "text-(--custom-color) font-bold"
//               : "text-(--custom-black)"
//           }`
//         }
//       >
//         Listing <FaAngleDown className="ml-1.5" />
//       </NavLink>

//       <ul className="flex-col space-y-3 bg-white shadow-sm rounded-lg py-6 px-4 absolute top-18 left-0 w-[250px] hidden opacity-0 group-hover:flex group-hover:opacity-100  transition-all duration-300 ease-out">
//         <li>
//           <NavLink
//             to="/layout"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Layout
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/feature"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-200 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Feature
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/listing-details"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-300 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Listing Details
//           </NavLink>
//         </li>
//       </ul>
//     </li>

//     <li className="relative group h-full flex items-center justify-center">
//       <NavLink
//         to="/pages"
//         className={({ isActive }) =>
//           `flex items-center ${
//             isActive
//               ? "text-(--custom-color) font-bold"
//               : "text-(--custom-black)"
//           }`
//         }
//       >
//         Pages <FaAngleDown className="ml-1.5" />
//       </NavLink>

//       {/* PAGES DROPDOWN */}
//       <ul className="flex-col space-y-3 bg-white shadow-sm rounded-lg py-6 px-4 absolute top-18 left-0 w-[250px] hidden opacity-0 group-hover:flex group-hover:opacity-100  transition-all duration-300 ease-out">
//         <li className="relative group">
//           <NavLink
//             to="/agents"
//             className={({ isActive }) =>
//               `flex items-center justify-between hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-100 group relative ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Agents <FaAngleDown />
//           </NavLink>

//           {/* AGENTS DROPDOWN */}
//           <ul className="flex-col space-y-3 bg-white shadow-sm rounded-lg py-6 px-4 absolute -top-6 left-58.5 w-[250px] hidden opacity-0 group-hover:flex group-hover:opacity-100 transition-all duration-300 ease-out">
//             <li>
//               <NavLink
//                 to="/agents."
//                 className={({ isActive }) =>
//                   `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 ${
//                     isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//                   }`
//                 }
//               >
//                 Agents.
//               </NavLink>
//             </li>

//             <li>
//               <NavLink
//                 to="/agents-details"
//                 className={({ isActive }) =>
//                   `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 ${
//                     isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//                   }`
//                 }
//               >
//                 Agents Details
//               </NavLink>
//             </li>
//           </ul>
//         </li>

//         <li>
//           <NavLink
//             to="/agencies"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-200 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Agencies
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/career"
//             className={({ isActive }) =>
//               `hover:text-(--custom-color) transition-all duration-300 opacity-0 group-hover:opacity-100 delay-300 ${
//                 isActive ? "text-(--custom-color)" : "text-(--custom-black)"
//               }`
//             }
//           >
//             Career
//           </NavLink>
//         </li>
//       </ul>
//     </li>
//   </ul>
// </nav>;

