import Link from 'next/link';
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src= 'assets/icons/zhea.svg' alt='company logo' className='companyLogo' width={60} height ={60}/>
        </Link>

          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/meetTeam" className="text-white hover:text-gray-300 transition duration-300">
                Meet the Team
              </Link>
            </li>
            <li>
              <Link href="/joinTeam" key={new Date().getTime()} className="text-white hover:text-gray-300 transition duration-300">
               Join Team
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
               About us
              </Link>
            </li>
          </ul>

      </div>
    </nav>
  );
};

export default Navbar;


// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS works
// import "./NavBar.css";

// const NavBar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link href="/" className="navbar-brand">
//           <Image src="/assets/icons/zhea.svg" alt="ZHEA Tech Logo" width={50} height={50} className="companyLogo" />
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">test</li>

//             <li className="nav-item">
//               <Link href="/" className="nav-link">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/about" className="nav-link">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/meetTeam" className="nav-link">Meet the Team</Link>
//             </li>
//             <li className="nav-item">
//               <Link href="/joinTeam" className="nav-link">Join the Team</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
