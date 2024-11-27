// import React from "react";
// import { AppBarWrap } from "./Navbar.Styles";
// import { MdNotificationsNone } from "react-icons/md";
// import { FiSearch } from "react-icons/fi";
// import { MdOutlineMenu } from "react-icons/md";
// // import profileIcon from "/path/to/profile-icon.png"; // Replace with your profile icon path
// // // import logoIcon from "/path/to/logo-icon.png"; // Replace with your logo icon path

// function NavBar() {
//   return (
//     <AppBarWrap>
//       <div className="appbar-content">
//         <div className="appbar-left">
//           <button type="button" className="sidebar-open-btn">
//             <MdOutlineMenu size={24} />
//           </button>
//           <h3 className="appbar-title">Dashboard</h3>
//         </div>
//         <div className="appbar-right">
//           <div className="appbar-search"></div>

//           {/* Notification Bell Icon */}

//         </div>
//       </div>
//     </AppBarWrap>
//   );
// }

// export default NavBar;










//^^^^^^^^^^ my static data ^^^^^^^^^^^^^^^^^^^^//








// import React, { useState } from "react";
// import { MdNotificationsNone } from "react-icons/md";
// import { AppBarWrap } from "./Navbar.Styles";

// const Navbar = () => {
//   const [showNotification, setShowNotification] = useState(false);

//   const toggleNotification = () => {
//     setShowNotification((prev) => !prev);
//   };

//   return (
//     <AppBarWrap>
//       <div className="appbar-content">
//         <div className="appbar-left">
//           <h1 className="appbar-title">Dashboard : Welcome, Student!</h1>
//         </div>

//         <div className="appbar-right">
//           <button className="notification-bell" onClick={toggleNotification}>
//             <MdNotificationsNone size={24} />
//           </button>
//           {showNotification && (
//             <div className="notification-modal show">
//               <div className="modal-header">Notifications</div>
//               <div className="modal-content">
//                 <p>
//                   {" "}
//                   <b className="message-header">Holiday Announcement :</b> <br />
//                   "The school will remain closed from September 18 to September
//                   20 for Ganesha Chaturthi celebrations. May Lord Ganesha bless
//                   you with wisdom and prosperity!" <br />
//                   <b className="message-header">Pre-Holiday Tasks :</b> <br />
//                    "As we approach Ganesha Chaturthi, kindly ensure all assignments and
//                   exam preparations are communicated to students before the
//                   holiday break from September 18 to September 20." <br />
//                   <b className="message-header">Festival Greetings :</b> <br />
//                    "Wishing you and your family a joyous Ganesha
//                   Chaturthi. May this festival bring happiness and success in
//                   your life. Enjoy the holidays!" <br />
//                   <b className="message-header"> Post-Holiday Reminder :</b> <br />
//                    "School reopens on September 21. Let’s prepare for a productive week
//                   ahead after the festivities!"
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppBarWrap>
//   );
// };

// export default Navbar;










//^^^^^^^^^^ my static data ^^^^^^^^^^^^^^^^^^^^//
//^^^^^^^^^^ data by circular ^^^^^^^^^^^^^^^^^^^^//


import React, { useState, useEffect } from "react";
import { MdNotificationsNone } from "react-icons/md";
import { AppBarWrap } from "./Navbar.Styles";
import { getAllCircularNotificationsApi } from "../../../../api/circularNotificationApi";

const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [circulars, setCirculars] = useState([]);
  const [filteredCirculars, setFilteredCirculars] = useState([]);

  // Fetch circular data
  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        const data = await getAllCircularNotificationsApi();
        if (data?.circularNotifications) {
          const formattedData = data.circularNotifications.map((circular) => ({
            key: circular._id,
            title: circular.circularName,
            description: circular.content,
            image: circular.image,
          }));
          setCirculars(formattedData);
          setFilteredCirculars(formattedData);
        }
      } catch (error) {
        console.error("Error fetching circulars:", error);
      }
    };

    fetchCirculars();
  }, []);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  return (
    <AppBarWrap>
      <div className="appbar-content">
        <div className="appbar-left">
          <h1 className="appbar-title">Dashboard : Welcome, Student!</h1>
        </div>

        <div className="appbar-right">
          <button className="notification-bell" onClick={toggleNotification}>
            <MdNotificationsNone size={24} />
          </button>
          {showNotification && (
            <div className="notification-modal show">
              <div className="modal-header">Notifications</div>
              <div className="modal-content">
                {filteredCirculars.length > 0 ? (
                  filteredCirculars.map((circular) => (
                    <div key={circular.key} className="notification-item">
                      <img
                        src={circular.image}
                        alt={circular.title}
                        width="40"
                      />
                      <div>
                        <b className="message-header">{circular.title}:</b>
                        <p>{circular.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No notifications available.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </AppBarWrap>
  );
};

export default Navbar;
