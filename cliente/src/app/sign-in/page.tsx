"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import banner from "../../../public/dumbbell-weight-plate.webp";

type FormValues = {
  email: string
  password: string
}

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { isValid } } = useForm<FormValues>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="flex h-screen bg-black">
      <Image src={banner} alt="dumbbell weight plate" placeholder="blur" priority className="max-lg:hidden object-left-bottom pointer-events-none w-[50%]" />
      <div className="flex flex-col flex-auto justify-center items-center h-full text-white">
        <h1 className="uppercase text-5xl">sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-11 mb-6 max-sm:px-[7vw] max-sm:w-full">
          <span className="relative">
            <FaUser color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type="text" placeholder="Email or Username" className="bg-black outline-none caret-red placeholder-white border-b-2 border-gray focus:border-red pl-12 pb-2 h-11 sm:w-[28rem]" {...register("email", {required: true, pattern: /^(([a-z][a-z0-9.-_]{2,19})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}))$/ })} />
          </span>
          
          <span className="relative mt-4">
            <FaLock color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="bg-black outline-none caret-red placeholder-white border-b-2 border-gray focus:border-red pl-12 pr-16 pb-2 h-11 sm:w-[28rem]" {...register("password", {required: true, minLength: 8})} />
            
            <button type="button" onClick={togglePasswordVisibility} className="absolute flex items-center mt-[-2.3rem] mr-5 right-0">
              {showPassword ? <FaEyeSlash color="#da272c" size={20} /> : <FaEye color="#da272c" size={20} />}
            </button>
          </span>
          
          <span className="flex justify-between text-center my-6 h-7">
            <label className="cursor-pointer">
              <input type="checkbox" className="mr-2 bg-red accent-red" />Remember me
            </label>
            <Link href="/forgot-password" className="text-red pb-1 px-1 hover:border-b-2 hover:border-red">Forgot password?</Link>
          </span>
          
          <button className={`uppercase ${isValid ? "bg-red hover:bg-red-600 active:bg-red-700" : "border-2 border-gray cursor-not-allowed"} h-12 sm:w-[28rem] rounded`} disabled={!isValid}>sign in</button>
          <button className="flex justify-center items-center mt-6 mx-auto border-2 border-gray hover:bg-gray/10 px-5 h-12 w-full rounded"><FaGoogle size={18} className="mr-2"/> Sign in with Google</button>
        </form>
        <span>Don't have an account? <Link href="/sign-up" className="ml-1 pb-1 px-1 hover:border-b-2 hover:border-red text-red">Sign up</Link></span>
      </div>
    </div>
  );
}

export default SignIn;
