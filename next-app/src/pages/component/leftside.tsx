// import React from "react";
// import { BiHomeCircle, BiUser } from "react-icons/bi";
// import {
//   BsBell,
//   BsBookmark,
//   BsEnvelope,
//   BsThreeDots,
// } from "react-icons/bs";
// import { HiOutlineHashtag } from "react-icons/hi";
// import { HiEnvelope } from "react-icons/hi2";

// const NAVIGATION_ITEMS = [
//   {
//     title: "Home",
//     icon: BiHomeCircle,
//   },
//   {
//     title: "Explore",
//     icon: HiOutlineHashtag,
//   },
//   {
//     title: "Notifications",
//     icon: BsBell,
//   },
//   {
//     title: "Messages",
//     icon: BsEnvelope,
//   },
//   {
//     title: "Bookmarks",
//     icon: BsBookmark,
//   },
//   {
//     title: "Profile",
//     icon: BiUser,
//   },
// ];

// const LeftSide: React.FC = () => {
//   return (
//     <div className="w-[23%] flex flex-col items-center justify-between h-screen bg-blue-500 p-4">
//       <div className="flex flex-col items-center justify-start space-y-4">
//         {NAVIGATION_ITEMS.map((item, index) => (
//           <div key={index} className="flex items-center text-white">
//             {item.icon && <item.icon className="mr-2" />}
//             <span>{item.title}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftSide;

import React from "react";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots } from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import {FaXTwitter} from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

const NAVIGATION_ITEMS = [
    {
        title: "",
        icon: FaXTwitter,

    },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSide: React.FC = () => {
  return (
    <section className="w-[23%] sticky top-0 xl:flex flex-col float-right mr-40 items-stretch h-screen hidden ">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-white hover:bg-white/10 text-2xl transition duration-200 w-fit space-x-4 rounded-3xl py-2 px-6"
          >
            {item.icon && <item.icon className="mr-2" />}
            <span>{item.title}</span>
          </div>
        ))}
        <button className="flex  items-stretch item-center  space-y-4 mt-4 text-white ml-5 bg-blue-500 text-2xl transition duration-200 w-fit rounded-3xl py-2 px-6">
          Post
        </button>
      </div>
      <button className="flex items-stretch justify-center    space-y-4 mt-4 items-center text-white ml-5 bg-blue-500 text-2xl transition duration-200 w-full rounded-xl py-2 px-6" onClick={()=>window.open('../user','_self')} placeholder="All users" >users</button>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
            <img src="https://pbs.twimg.com/profile_images/1589957198989463552/DF342KyY_400x400.jpg" alt="" className="rounded-full bg-slate-400 w-10 h-10" />
                <div className="text-left text-sm">
                    <div className="font-semibold">Sunil Kumawat</div>
                    <div className="">@Sunil_kumawat17</div>
                </div>
            </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSide;
