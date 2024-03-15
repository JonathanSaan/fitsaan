"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import banner from "../../../public/dumbbell-weight-plate.webp";

type FormValues = {
  email: string
}

const SignIn = () => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)
  
  return (
    <div className="flex h-screen bg-black">
      <Image src={banner} alt="dumbbell weight plate" placeholder="blur" priority className="max-lg:hidden object-left-bottom pointer-events-none w-[50%]" />
      <div className="flex flex-col flex-auto justify-center items-center h-full text-white">
        <h1 className="uppercase text-6xl">forgot password?</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-11 mb-6 max-sm:px-[7vw] max-sm:w-full">
          <input type="text" placeholder="Email" className="bg-black outline-none caret-red placeholder-white border-b-2 focus:border-red border-gray pl-2 pb-3 sm:w-[28rem]" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
          
          <button className="uppercase bg-red hover:bg-red/85 mt-8 h-12 sm:w-[28rem] rounded">continue</button>
        </form>
        <span><Link href="/sign-in" className="ml-1 pb-1 px-1 hover:border-b-2 hover:border-red text-red">Return to Sign in</Link></span>
      </div>
    </div>
  );
}

export default SignIn;
