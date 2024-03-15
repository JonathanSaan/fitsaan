"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import banner from "../../../public/dumbbell-weight-plate.webp";

type FormValues = {
  email: string
  password: string
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  
  return (
    <div className="flex h-screen bg-black">
      <Image src={banner} alt="dumbbell weight plate" placeholder="blur" priority className="max-lg:hidden object-left-bottom pointer-events-none w-[50%]" />
      <div className="flex flex-col flex-auto justify-center items-center h-full text-white">
        <h1 className="uppercase text-6xl">sign in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-11 mb-6 max-sm:px-[7vw] max-sm:w-full">
          <input type="text" placeholder="Email or Username" className="bg-black outline-none caret-red placeholder-white border-b-2 border-gray focus:border-red pl-2 pb-3 sm:w-[28rem]" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="password" placeholder="Password" className="bg-black outline-none caret-red placeholder-white border-b-2 border-gray focus:border-red mt-5 pl-2 pb-3 sm:w-[28rem]" {...register("password", {required: true, min: 8})} />
          
          <span className="flex justify-between text-center my-6 h-7">
            <label className="cursor-pointer">
              <input type="checkbox" className="mr-2 bg-red accent-red" />Remember me
            </label>
            
            <Link href="/forgot-password" className="text-red pb-1 px-1 hover:border-b-2 hover:border-red">Forgot password?</Link>
          </span>
          
          <button className="uppercase bg-red hover:bg-red/85 h-12 sm:w-[28rem] rounded">sign in</button>
          <button className="flex justify-center items-center mt-6 mx-auto border-2 border-gray hover:bg-gray/10 px-5 h-12 w-full rounded"><FaGoogle size={18} className="mr-2"/> Sign in with Google</button>
        </form>
        <span>Don't have an account? <Link href="/sign-up" className="ml-1 pb-1 px-1 hover:border-b-2 hover:border-red text-red">Sign up</Link></span>
      </div>
    </div>
  );
}

export default SignIn;
