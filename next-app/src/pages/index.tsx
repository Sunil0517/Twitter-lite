import Login from './component/login'

const Index = () =>{

    return(
        <div className="container">
          <div className="flex flex-row">
            <div className=" flex w-[50%] h-full  justify-center">
              <img className="mt-[20%] w-[500px] h-[500px]"  src="data:image/png;base64,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" alt="" />
            </div>
            <div className='flex flex-col w-[50%] h-full  justify-center ml-[5%]'>
              <h1 className='text-7xl font-bold mt-[25%]'>Happening now</h1>
              <h1 className='text-5xl font-bold mt-[5%]'>Join today.</h1>
              <button className="flex  items-stretch item-center mt-[5%] border-[2px]  border-gray-900 hover:border-slate-200  space-y-4  text-white  bg-blue-400 text-2xl transition duration-200 w-fit rounded-3xl py-1 px-8"  onClick={()=>window.open('createUser' ,'_self')}>
                Create account
              </button>
              <h2 className='text-xl font-bold mt-[10%]'>Already have an account?</h2>
              <button className="  items-stretch item-center mt-[5%]  space-y-4  text-blue-500 border-[2px]  border-gray-800 hover:border-slate-400  bg-black text-2xl transition duration-200 w-fit rounded-3xl py-1 px-8"  onClick={()=>window.open('./component/login' ,'_self')}>
                Sign in
              </button>
            </div>
          </div>
        </div>
    )

}
export default Index;

