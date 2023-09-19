

const Login = () => {

    return (
        <div className="flex justify-center bg-transparent">
            <form className="w-[20%] mt-[17%] " >
                <h1 className="text-6xl font-bold mb-10">Login</h1>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-white-700 text-sm font-bold mb-2">
                    Email:
                    </label>
                    <input
                    type="text"
                    name="email"
                    id='email'
                    required
                    className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-white-700 text-sm font-bold mb-2">
                    Password:
                    </label>
                    <input
                    type="password"
                    name="password"
                    id='password'
                    className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                    required
                    />
                </div>
            

                <button type="submit" className='  items-stretch item-center mt-[5%]  space-y-4  text-white-500 border-[2px]  border-gray-800 hover:border-slate-400  bg-black text-2xl transition duration-200 w-fit rounded-3xl py-1 px-8' onClick={()=>window.open('../home','_self')}> Login</button>
                <button className=" ml-[20px] items-stretch item-center mt-[5%]  space-y-4  text-white-500 border-[2px]  border-gray-800 hover:border-slate-400  bg-black text-2xl transition duration-200 w-fit rounded-3xl py-1 px-8"  onClick={()=>window.open('../','_self')}>
                    Home
                </button>
            </form>
        </div>
    )

}
export default Login