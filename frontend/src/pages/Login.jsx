import React , {useState} from 'react';
import PlayToast from '../components/Toast';
import {loginMutProvider} from '../api/Mutations';
import schoolLogo from '../assets/images/schoolLogo.png';
import Loader from '../components/Loader';


 function Login() {
  const [show, setShow] = useState()
  const[email, setEmail] = useState()
  const[password, setPassword] = useState()

  const loginMut = loginMutProvider();

  async function handleLogin (e) {
    
    e.preventDefault()
    loginMut.mutate({
     email: email,
     password: password,
    })
    
  }
 
  return (
    <>
     
      <div className="flex  min-h-screen  justify-center px-4 py-12 sm:px-6 lg:px-8">
        
        <div
         className="w-full mt-32 max-w-md space-y-8 ">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={schoolLogo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
           
          </div>
          <form onSubmit={e => handleLogin(e)} className="mt-8 space-y-6" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={e=> setEmail(e.target.value)}
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#747cf4] sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  onChange={e=> setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#747cf4] sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  onChange={()=> setShow(!show)}
                  className="h-4 w-4 rounded border-gray-300 text-[#747cf4] focus:ring-[#747cf4]"
                />
                <label htmlFor="remember-me"  className="ml-2 block text-sm text-gray-900">
                  show passoword
                </label>
              </div>

            </div>

            <div>
              <button
                type="submit"
                className="group relative h-9 flex w-full justify-center rounded-md bg-[#747cf4]  py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >

                {loginMut.isLoading ? <Loader /> : "Sign in"}
              </button>
            </div>
          
          </form>
           
        </div>
      </div>
    </>
  )
}

export default Login;