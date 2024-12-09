// import React, { useState, useRef, useEffect } from "react";
// import logo from "../../../assets/logo.png";
// import {
//   HeaderContainer,
//   Logo,
//   NavMenu,
//   NavLinks,
//   DropdownWrapper,
//   HamburgerMenu,
//   MobileMenu,
//   SignUpButton,
// } from "./Header.styles";
// import { useNavigate } from "react-router-dom";
// import { getBoards } from "../../../api/boardApi";
// import { getClassesByBoardId } from "../../../api/classApi";
// import { getPackageByClassId } from "../../../api/packagesApi";

// const Header = () => {
//   const navigate = useNavigate();
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const [boards, setBoards] = useState([]);
//   const [classes, setClasses] = useState({});
//   const [packages, setPackages] = useState({});

//   const [hoveredBoardId, setHoveredBoardId] = useState(null);
//   const [hoveredClassId, setHoveredClassId] = useState(null);

//   const dropdownRef = useRef(null);

//   // Click outside handler to close the Courses dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsCoursesOpen(false);
//         setHoveredBoardId(null);
//         setHoveredClassId(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Toggle the "Courses" dropdown and fetch boards if not already fetched
//   const handleCoursesClick = async (e) => {
//     e.preventDefault();
//     setIsCoursesOpen((prev) => !prev);

//     if (boards.length === 0 && !isCoursesOpen) {
//       try {
//         const fetchedBoards = await getBoards();
//         setBoards(fetchedBoards);
//       } catch (error) {
//         console.error("Failed to fetch boards:", error);
//       }
//     }
//   };

//   // Handle hover on a board to fetch classes
//   const handleBoardMouseEnter = async (boardId) => {
//     setHoveredBoardId(boardId);
//     if (!classes[boardId]) {
//       try {
//         const fetchedClasses = await getClassesByBoardId(boardId);
//         setClasses((prev) => ({ ...prev, [boardId]: fetchedClasses }));
//       } catch (error) {
//         console.error(`Failed to fetch classes for board ${boardId}:`, error);
//       }
//     }
//   };

//   const handleBoardMouseLeave = () => {
//     setHoveredBoardId(null);
//   };

//   // Handle hover on a class to fetch packages
//   const handleClassMouseEnter = async (classId) => {
//     setHoveredClassId(classId);
//     if (!packages[classId]) {
//       try {
//         const fetchedPackages = await getPackageByClassId(classId, "normal"); // Assuming "normal" is the default mode
//         const fetchedPackages2 = await getPackageByClassId(classId, "personal");
//         setPackages((prev) => ({ ...prev, [classId]: fetchedPackages.concat(fetchedPackages2) }));
//       } catch (error) {
//         console.error(`Failed to fetch packages for class ${classId}:`, error);
//       }
//     }
//   };

//   const handleClassMouseLeave = () => {
//     setHoveredClassId(null);
//   };

//   // Handle logout functionality
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/");
//   };

//   // Toggle the mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   return (
//     <HeaderContainer>
//       <Logo>
//         <a href="/">
//           <img src={logo} alt="The Toppers Academy" className="logo-icon" />
//         </a>
//       </Logo>

//       {/* Desktop Navigation Menu */}
//       <NavMenu>
//         <NavLinks>
//           {/* Courses Dropdown */}
//           <DropdownWrapper ref={dropdownRef}>
//             <a href="#!" onClick={handleCoursesClick}>
//               Courses
//             </a>
//             {isCoursesOpen && boards.length > 0 && (
//               <ul className="boards-menu">
//                 {boards.map((board) => (
//                   <li
//                     key={board._id}
//                     onMouseEnter={() => handleBoardMouseEnter(board._id)}
//                     onMouseLeave={handleBoardMouseLeave}
//                   >
//                     <a href={`/pages/BatchesDetailPage/BatchesLandingPage/${board._id}`}>{board.name}</a>
//                     {hoveredBoardId === board._id && classes[board._id] && (
//                       <ul className="classes-menu">
//                         {classes[board._id].map((cls) => (
//                           <li
//                             key={cls._id}
//                             onMouseEnter={() => handleClassMouseEnter(cls._id)}
//                             onMouseLeave={handleClassMouseLeave}
//                           >
//                             <a href={`/testingClass/${cls._id}`}>{cls.className}</a>
//                             {hoveredClassId === cls._id && packages[cls._id] && (
//                               <ul className="packages-menu">
//                                 {packages[cls._id].map((pkg) => (
//                                   <li key={pkg._id}>
//                                     <a href={`/testingPackage/${pkg._id}`}>{pkg.package_name}</a>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </DropdownWrapper>

//           {/* Study Material Dropdown (if needed) */}
//           <DropdownWrapper>
//             <a href="#!">Study Material</a>
//             {/* Implement similar nested structure if required */}
//           </DropdownWrapper>

//           {/* Other Navigation Links */}
//           <li><a href="#!">Become a Teacher</a></li>
//           <li><a href="#!">Create Your Enrollment</a></li>
//           <li><a href="#!">About Us</a></li>
//         </NavLinks>
//       </NavMenu>

//       {/* Hamburger Menu for Mobile */}
// <HamburgerMenu onClick={toggleMobileMenu}>
//   <span />
//   <span />
//   <span />
// </HamburgerMenu>

//       {/* Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <MobileMenu>
//           <NavLinks>
//             {/* For mobile, you might want to implement similar dynamic fetching or simplify the menu */}
//             <li><a href="#!">Courses</a></li>
//             <li><a href="#!">Study Material</a></li>
//             <li><a href="#!">Become a Teacher</a></li>
//             <li><a href="#!">Create Your Enrollment</a></li>
//             <li><a href="#!">About Us</a></li>
//           </NavLinks>
//         </MobileMenu>
//       )}

//       {/* Logout Button */}
//       <SignUpButton onClick={handleLogout}>Logout</SignUpButton>
//     </HeaderContainer>
//   );
// };

// export default Header;

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    2     &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// import React, { useState, useRef, useEffect } from "react";
// import logo from "../../../assets/logo.png";
// import {
//   HeaderContainer,
//   Logo,
//   NavMenu,
//   NavLinks,
//   DropdownWrapper,
//   HamburgerMenu,
//   MobileMenu,
//   SignUpButton,
// } from "./Header.styles";
// import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
// import { FaSchool } from "react-icons/fa";
// import { LiaUniversitySolid } from "react-icons/lia";
// import { FaUniversity } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { getBoards } from "../../../api/boardApi";
// import { getClassesByBoardId } from "../../../api/classApi";
// import { getPackageByClassId } from "../../../api/packagesApi";

// const Header = () => {
//   const navigate = useNavigate();
//   const [isCoursesOpen, setIsCoursesOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [boards, setBoards] = useState([]);
//   const [classes, setClasses] = useState({});
//   const [packages, setPackages] = useState({});
//   const [hoveredBoardId, setHoveredBoardId] = useState(null);
//   const [hoveredClassId, setHoveredClassId] = useState(null);

//   const dropdownRef = useRef(null);

//   // Fetch boards when a category is hovered
//   const handleCategoryMouseEnter = async (category) => {
//     setSelectedCategory(category);
//     if (!boards[category]) {
//       try {
//         const fetchedBoards = await getBoards(category);
//         setBoards((prev) => ({ ...prev, [category]: fetchedBoards }));
//       } catch (error) {
//         console.error(`Failed to fetch boards for ${category}:, error`);
//       }
//     }
//     setIsCoursesOpen(true); // Open the dropdown on hover
//   };

//   const handleCategoryMouseLeave = () => {
//     setSelectedCategory(null);
//     setIsCoursesOpen(false);
//   };

//   // Fetch classes when a board is hovered
//   const handleBoardMouseEnter = async (boardId) => {
//     setHoveredBoardId(boardId);
//     if (!classes[boardId]) {
//       try {
//         const fetchedClasses = await getClassesByBoardId(boardId);
//         setClasses((prev) => ({ ...prev, [boardId]: fetchedClasses }));
//       } catch (error) {
//         console.error(`Failed to fetch classes for board ${boardId}:, error`);
//       }
//     }
//   };

//   const handleBoardMouseLeave = () => {
//     setHoveredBoardId(null);
//   };

//   // Fetch packages when a class is hovered
//   const handleClassMouseEnter = async (classId) => {
//     setHoveredClassId(classId);
//     if (!packages[classId]) {
//       try {
//         const fetchedPackages = await getPackageByClassId(classId, "normal");
//         const fetchedPackages2 = await getPackageByClassId(classId, "personal");
//         setPackages((prev) => ({
//           ...prev,
//           [classId]: fetchedPackages.concat(fetchedPackages2),
//         }));
//       } catch (error) {
//         console.error(`Failed to fetch packages for class ${classId}:, error`);
//       }
//     }
//   };

//   const handleClassMouseLeave = () => {
//     setHoveredClassId(null);
//   };

//   return (
//     <HeaderContainer>
//       <Logo>
//         <a href="/">
//           <img src={logo} alt="The Toppers Academy" className="logo-icon" />
//         </a>
//       </Logo>

//       {/* Desktop Navigation Menu */}
//       <NavMenu>
//         <NavLinks>
//           {/* Courses Dropdown */}
//           <DropdownWrapper
//             ref={dropdownRef}
//             onMouseEnter={() => setIsCoursesOpen(true)}
//             onMouseLeave={handleCategoryMouseLeave}
//           >
//             <div className="dropdown-button">
//               Courses{" "}
//               {isCoursesOpen ? (
//                 <IoIosArrowUp className="arrowicon" />
//               ) : (
//                 <IoIosArrowDown className="arrowicon" />
//               )}
//             </div>
//             {isCoursesOpen && (
//               <ul className="category-menu">
//                 {["School", "College", "University"].map((category) => (
//                   <li
//                     key={category}
//                     onMouseEnter={() => handleCategoryMouseEnter(category)}
//                     style={{ marginTop: "20px" }}
//                   >
//                     <span className="categorylink">
//                       {category === "School" && <FaSchool size={20} />}
//                       {category === "College" && (
//                         <LiaUniversitySolid size={20} />
//                       )}
//                       {category === "University" && <FaUniversity size={20} />}
//                       {category}
//                     </span>
//                     {selectedCategory === category &&
//                       boards[category] &&
//                       boards[category].length > 0 && (
//                         <ul className="boards-menu">
//                           {boards[category].map((board) => (
//                             <li
//                               key={board._id}
//                               onMouseEnter={() =>
//                                 handleBoardMouseEnter(board._id)
//                               }
//                               onMouseLeave={handleBoardMouseLeave}
//                             >
//                               <a
//                                 href={`/pages/BatchesDetailPage/BatchesLandingPage/${board._id}`}
//                               >
//                                 {board.name}
//                               </a>
//                               {hoveredBoardId === board._id &&
//                                 classes[board._id] && (
//                                   <ul className="classes-menu">
//                                     {classes[board._id].map((cls) => (
//                                       <li
//                                         key={cls._id}
//                                         onMouseEnter={() =>
//                                           handleClassMouseEnter(cls._id)
//                                         }
//                                         onMouseLeave={handleClassMouseLeave}
//                                       >
//                                         <a href={`/testingClass/${cls._id}`}>
//                                           {cls.className}
//                                         </a>
//                                         {hoveredClassId === cls._id &&
//                                           packages[cls._id] && (
//                                             <ul className="packages-menu">
//                                               {packages[cls._id].map((pkg) => (
//                                                 <li key={pkg._id}>
//                                                   <a
//                                                     href={`/testingPackage/${pkg._id}`}
//                                                   >
//                                                     {pkg.package_name}
//                                                   </a>
//                                                 </li>
//                                               ))}
//                                             </ul>
//                                           )}
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </DropdownWrapper>

//           {/* Other Navigation Links */}
//           <li>
//             <a href="#!">Become a Teacher</a>
//           </li>
//           <li>
//             <a href="#!">Create Your Enrollment</a>
//           </li>
//           <li>
//             <a href="#!">About Us</a>
//           </li>
//         </NavLinks>
//       </NavMenu>

//       {/* Logout Button */}
//       <SignUpButton onClick={() => navigate("/")}>Logout</SignUpButton>
//     </HeaderContainer>
//   );
// };

// export default Header;

















import React, { useState, useRef, useEffect } from "react";
import logo from "../../../assets/logo.png";
import schoolIcon from "../../../Main/assets/school.png";
import collegeIcon from "../../../Main/assets/college.png";
import universityIcon from "../../../Main/assets/university.png";
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavLinks,
  DropdownWrapper,
  HamburgerMenu,
  MobileMenu,
  SignUpButton,
} from "./Header.styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { getBoards } from "../../../api/boardApi";
import { getClassesByBoardId } from "../../../api/classApi";
import { getPackageByClassId } from "../../../api/packagesApi";

const Header = () => {
  const navigate = useNavigate();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [boards, setBoards] = useState([]);
  const [classes, setClasses] = useState({});
  const [packages, setPackages] = useState({});
  const [hoveredBoardId, setHoveredBoardId] = useState(null);
  const [hoveredClassId, setHoveredClassId] = useState(null);

  const dropdownRef = useRef(null);

  const handleCategoryMouseEnter = async (category) => {
    setSelectedCategory(category);
    if (!boards[category]) {
      try {
        const fetchedBoards = await getBoards(category);
        setBoards((prev) => ({ ...prev, [category]: fetchedBoards }));
      } catch (error) {
        console.error(`Failed to fetch boards for ${category}:`, error);
      }
    }
    setIsCoursesOpen(true);
  };

  const handleCategoryMouseLeave = () => {
    setSelectedCategory(null);
    setIsCoursesOpen(false);
  };

  const handleBoardMouseEnter = async (boardId) => {
    setHoveredBoardId(boardId);
    if (!classes[boardId]) {
      try {
        const fetchedClasses = await getClassesByBoardId(boardId);
        setClasses((prev) => ({ ...prev, [boardId]: fetchedClasses }));
      } catch (error) {
        console.error(`Failed to fetch classes for board ${boardId}:`, error);
      }
    }
  };

  const handleBoardMouseLeave = () => {
    setHoveredBoardId(null);
  };

  const handleClassMouseEnter = async (classId) => {
    setHoveredClassId(classId);
    if (!packages[classId]) {
      try {
        const fetchedPackages = await getPackageByClassId(classId, "normal");
        const fetchedPackages2 = await getPackageByClassId(classId, "personal");
        setPackages((prev) => ({
          ...prev,
          [classId]: fetchedPackages.concat(fetchedPackages2),
        }));
      } catch (error) {
        console.error(`Failed to fetch packages for class ${classId}:`, error);
      }
    }
  };

  const handleClassMouseLeave = () => {
    setHoveredClassId(null);
  };

  return (
    <HeaderContainer>
      <Logo>
        <a href="/">
          <img src={logo} alt="The Toppers Academy" className="logo-icon" />
        </a>
      </Logo>

      <NavMenu>
        <NavLinks>
          <DropdownWrapper
            ref={dropdownRef}
            onMouseEnter={() => setIsCoursesOpen(true)}
            onMouseLeave={handleCategoryMouseLeave}
            isCoursesOpen={isCoursesOpen} 
          >
            <div className="dropdown-button">
              Courses{" "}
              {isCoursesOpen ? (
                <IoIosArrowUp className="arrowicon" />
              ) : (
                <IoIosArrowDown className="arrowicon" />
              )}
            </div>
            {isCoursesOpen && (
              <ul className="category-menu">
                {["School", "College", "University"].map((category) => (
                  <li
                    key={category}
                    onMouseEnter={() => handleCategoryMouseEnter(category)}
                    className="category-item"
                    style={{ marginTop: "20px" }}
                  >
                    <span className="categorylink">
                      {category === "School" && (
                        <img src={schoolIcon} alt="School" className="img"/>
                      )}
                      {category === "College" && (
                        <img src={collegeIcon} alt="College" className="img"/>
                      )}
                      {category === "University" && (
                        <img src={universityIcon} alt="University" className="img"/>
                      )}
                      {category}
                    </span>
                    {selectedCategory === category &&
                      boards[category] &&
                      boards[category].length > 0 && (
                        <ul className="boards-menu">
                          {boards[category].map((board) => (
                            <li
                              key={board._id}
                              onMouseEnter={() =>
                                handleBoardMouseEnter(board._id)
                              }
                              onMouseLeave={handleBoardMouseLeave}
                            >
                              <a
                                href={`/pages/BatchesDetailPage/BatchesLandingPage/${board._id}`}
                              >
                                {board.name}
                              </a>
                              {hoveredBoardId === board._id &&
                                classes[board._id] && (
                                  <ul className="classes-menu">
                                    {classes[board._id].map((cls) => (
                                      <li
                                        key={cls._id}
                                        onMouseEnter={() =>
                                          handleClassMouseEnter(cls._id)
                                        }
                                        onMouseLeave={handleClassMouseLeave}
                                      >
                                        <a href={`/testingClass/${cls._id}`}>
                                          {cls.className}
                                        </a>
                                        {hoveredClassId === cls._id &&
                                          packages[cls._id] && (
                                            <ul className="packages-menu">
                                              {packages[cls._id].map((pkg) => (
                                                <li key={pkg._id}>
                                                  <a
                                                    href={`/testingPackage/${pkg._id}`}
                                                  >
                                                    {pkg.package_name}
                                                  </a>
                                                </li>
                                              ))}
                                            </ul>
                                          )}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </DropdownWrapper>
          <li>
            <a href="#!">Become a Teacher</a>
          </li>
          <li>
            <a href="#!">Create Your Enrollment</a>
          </li>
          <li>
            <a href="#!">About Us</a>
          </li>
        </NavLinks>
      </NavMenu>

      <SignUpButton onClick={() => navigate("/")}>Logout</SignUpButton>
    </HeaderContainer>
  );
};

export default Header;
