// import { NextPage } from "next";
// import { signIn } from "next-auth/react";
// import { FormEventHandler, useState } from "react";

// interface Props {}

// const SignIn: NextPage = (props): JSX.Element => {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();

//     const res = await signIn("credentials", {
//       email: userInfo.email,
//       password: userInfo.password,
//       redirect: false,
//     });

//     console.log(res);
//   };

//   return (
//     <div className="sign-in-form flex justify-center">
//       <form className="w-[20%] mt-[17%] " onSubmit={handleSubmit}>
//         <h1 className="text-6xl font-bold mb-10">Login</h1>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">
//             Email:
//           </label>
//           <input
//             value={userInfo.email}
//             onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
//             type="email"
//             className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-white-700 text-sm font-bold mb-2">
//             Password:
//           </label>
//           <input
//             value={userInfo.password}
//             onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
//             className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
//             type="password"
//             placeholder="********"
//           />
//         </div>
//         <input
//           type="submit"
//           className="ml-[10px] items-stretch item-center mt-[5%] space-y-4 text-white-500 border-[2px] border-gray-800 hover:border-slate-400 bg-black text-2xl transition duration-200 w-fit rounded-3xl py-1 px-8"
//           value="Login"
//         />
//       </form>
//     </div>
//   );
// };

// export default SignIn;

import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;