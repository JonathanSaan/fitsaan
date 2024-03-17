"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, MouseEventHandler } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle, FaUser, FaLock, FaKey, FaEye, FaEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import banner from "../../../public/dumbbell-weight-plate.webp";

type FormValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const { register, watch, handleSubmit, formState: { isValid } } = useForm<FormValues>({ mode: "onChange" });
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  
  const isPasswordMatching = (value: string) => value === watch("password");
  
  const togglePasswordVisibility = (type: string | MouseEventHandler<HTMLButtonElement>) => {
    if(type === "password") {
      return setShowPassword(!showPassword);
    }
    setShowConfirmPassword(!showConfirmPassword)
  };
  
  return (
    <div className="flex h-screen bg-black">
      <Image src={banner} alt="dumbbell weight plate" placeholder="blur" priority className="max-lg:hidden object-left-bottom pointer-events-none w-[50%]" />
      <div className="flex flex-col flex-auto justify-center items-center h-full text-white">
        <h1 className="uppercase text-5xl">sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-11 mb-6 max-sm:px-[7vw] max-sm:w-full">
          <span className="relative">
            <FaUser color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type="text" placeholder="Username" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-12 pb-2 h-11 sm:w-[28rem]" {...register("username", {required: true, pattern: /^[a-z][a-z0-9.-_]{2,19}$/})} />
          </span>
          
          <span className="relative mt-4">
            <MdEmail color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type="email" placeholder="Email" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-12 pb-2 h-11 sm:w-[28rem]" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          </span>
          
          <span className="relative mt-4">
            <FaLock color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type={showPassword ? "text" : "password"} placeholder="Password" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-12 pr-16 pb-2 h-11 sm:w-[28rem]" {...register("password", {required: true, minLength: 8})} />
            
            <button type="button" onClick={() => togglePasswordVisibility("password")} className="absolute flex items-center mt-[-2.3rem] mr-5 right-0">
              {showPassword ? <FaEyeSlash color="#da272c" size={20} /> : <FaEye color="#da272c" size={20} />}
            </button>
          </span>
          
          <span className="relative mt-4">
            <FaKey color="#da272c" size={20} className="absolute flex items-center mt-1 ml-2 pointer-events-none" />
            <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm password" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-12 pr-16 pb-2 h-11 sm:w-[28rem]" {...register("confirmPassword", {required: true, minLength: 8, validate: isPasswordMatching})} />
            
            <button type="button" onClick={() => togglePasswordVisibility("confirmPassword")} className="absolute flex items-center mt-[-2.3rem] mr-5 right-0">
              {showConfirmPassword ? <FaEyeSlash color="#da272c" size={20} /> : <FaEye color="#da272c" size={20} />}
            </button>
          </span>
          
          <span className="my-6">
            <label className="cursor-pointer">
              <input type="checkbox" {...register("terms", { required: true })} className="mr-2 bg-red accent-red" />Accept terms conditions & privacy policy
            </label>
          </span>

          <button className={`uppercase ${isValid ? "bg-red hover:bg-red/85" : "border-2 border-gray cursor-not-allowed"} h-12 sm:w-[28rem] rounded`} disabled={!isValid}>sign up</button>
          <button className="flex justify-center items-center mt-6 mx-auto border-2 border-gray hover:bg-gray/10 px-5 h-12 w-full rounded"><FaGoogle size={18} className="mr-2"/> Sign up with Google</button>
        </form>
        <span>Already have an account? <Link href="/sign-in" className="ml-1 pb-1 px-1 hover:border-b-2 hover:border-red text-red">Sign in</Link></span>
      </div>
    </div>
  );
}

export default SignUp;
