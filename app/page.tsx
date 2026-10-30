'use client';

import {useState} from "react";
import Link from "next/link";

 export default function(){
   const [fullname, setFullName] = useState('');
   const [Email, setEmail] = useState('');
   const [Passsword, setPasssword] = useState('');

   const validName = fullname.trim().length >=3;
   const validPassword =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=\S).{8,}$/.test(Passsword);
   
   const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email);

   return(
    <main className="flex min-h-screen bg-gradient-to-br from-teal-800  to-green-400 items-center justify-center p-4">
     <form action="" className="grid w-full max-w-md gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
       <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <div className="grid gap-2">
            <label htmlFor="" className="text-gray-900 text-left">Full Name</label>
            <input type="text" className="rounded border border-gray-900 p-3 outline-none placeholder:text-gray-800" placeholder="Full Name"value={fullname}
            onChange={(e) =>{
              setFullName(e.target.value)
            }}></input>
            {
              fullname.length<3 && (<p className="text-red-800"> Name must be Three Characters</p>)
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="" className="text-gray-900 text-left">Email</label>
            <input type="text" className="rounded border border-gray-900 p-3 outline-none placeholder:text-gray-800" placeholder="Email"value={Email}
            onChange={(e) =>{
              setEmail(e.target.value)
            }}></input>
            {
              Email.length< 8 && (<p className="text-red-800"> Name must be 8 Characters</p>)
            }
          </div>
          <div className="grid gap-2">
            <label htmlFor="" className="text-gray-900 text-left">Password</label>
            <input type="text" className="rounded border border-gray-900 p-3 outline-none placeholder:text-gray-800" placeholder="Passsword"value={Passsword}
            onChange={(e) =>{
              setPasssword(e.target.value)
            }}></input>
            {
               Passsword.length> 0 && !validPassword ?(
                <p className="text-red-800">
                  Password must contain:
                  <br />. At least 8 Characters
                  <br />.1 uppercase letter(A-Z)
                  <br />.1 number(0-9)
                  <br />.1 special character (!@#$%)
                </p>
              ) : null} 
            </div>
            <Link href="/dashboard">
             <button className="px-5 mt-4 py-4 text-white-800 rounded-4xl bg-gray-800">Register</button>
                </Link>
           </div>
         </form>
       </main>

   );
  }
     

 
  






