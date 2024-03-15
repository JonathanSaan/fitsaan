"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import banner from "../../../public/dumbbell-weight-plate.webp";

type FormValues = {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  
  return (
    <div className="flex h-screen bg-black">
      <Image src={banner} alt="dumbbell weight plate" placeholder="blur" priority className="max-lg:hidden object-left-bottom pointer-events-none w-[50%]" />
      <div className="flex flex-col flex-auto justify-center items-center h-full text-white">
        <h1 className="uppercase text-6xl">sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-11 mb-6 max-sm:px-[7vw] max-sm:w-full">
          <input type="text" placeholder="Username" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-2 pb-3 sm:w-[28rem]" {...register("username", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="email" placeholder="Email" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray mt-5 pl-2 pb-3 sm:w-[28rem]" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          <input type="password" placeholder="Password" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray mt-5 pl-2 pb-3 sm:w-[28rem]" {...register("password", {required: true, min: 8})} />
          <input type="password" placeholder="Confirm password" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray mt-5 pl-2 pb-3 sm:w-[28rem]" {...register("confirmPassword", {required: true, min: 8})} />
          
          <span className="my-6">
            <label className="cursor-pointer">
              <input type="checkbox" className="mr-2 bg-red accent-red" />Accept terms conditions & privacy policy
            </label>
          </span>

          <button className="uppercase bg-red hover:bg-red/85 h-12 sm:w-[28rem] rounded">sign up</button>
          <button className="flex justify-center items-center mt-6 mx-auto border-2 border-gray hover:bg-gray/10 px-5 h-12 w-full rounded"><FaGoogle size={18} className="mr-2"/> Sign up with Google</button>
        </form>
        <span>Already have an account? <Link href="/sign-in" className="ml-1 pb-1 px-1 hover:border-b-2 hover:border-red text-red">Sign in</Link></span>
      </div>
    </div>
  );
}

export default SignUp;
