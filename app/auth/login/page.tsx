"use client";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { LoginImage } from "./LoginImage";
import Link from "next/link";



const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex px-4 justify-center mx-auto  lg:py-10 max-w-380  w-full">
      <LoginImage />

      <div className="flex lg:min-h-full w-full min-h-screen flex-col items-center justify-center">
        <Image
          src="/xpartex.svg"
          alt="Logo"
          width={130}
          height={100}
          className="mb-2 lg:hidden"
        />
        <h1 className="text-2xl lg:text-4xl font-semibold">Welcome Back</h1>
        <p className="text-sm text-center lg:text-[16px] mt-1 lg:mt-3 text-neutral-500">
          Please enter your login credentials to continue.
        </p>

        <div className="flex mt-8 w-full text-neutral-700 flex-col mx-auto gap-3">
          <div className="flex w-full max-w-sm mx-auto flex-col gap-1 lg:gap-2">
            <span className="font-medium text-neutral-600">Email</span>
            <input
              type="text"
              className="w-full border border-neutral-300 bg-white lg:bg-transparent  rounded-lg py-2 lg:py-2.5 px-3"
              placeholder="Enter Your Email"
            />
            <p className="mt-3 font-medium text-neutral-600">Password</p>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border border-neutral-300 bg-white lg:bg-transparent  rounded-lg py-2 lg:py-2.5 px-3"
                placeholder="Enter Your Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              >
                {showPassword ? (
                  <EyeOff size={18} className="cursor-pointer" />
                ) : (
                  <Eye size={18} className="cursor-pointer" />
                )}
              </button>
            </div>
            <div className="flex lg:text-[16px] text-sm items-center justify-between w-full mt-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" className="cursor-pointer" />
                <span className="font-medium text-neutral-500">
                  Remember me
                </span>
              </div>
              <Link
                href="/auth/forgot-password"
                className="text-blue-600 font-semibold"
              >
                Forgot Password
              </Link>
            </div>
            <button className="signIn rounded-lg text-white font-semibold py-2.5 mt-4 cursor-pointer">
              Sign In
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="w-20 h-px bg-neutral-200"></div>
              <span className="text-neutral-300">Or</span>
              <div className="w-20 h-px bg-neutral-200"></div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 lg:mt-2">
              <Image
                src="/auth/google.svg"
                alt="Google"
                width={30}
                height={30}
                className="rounded-lg cursor-pointer"
              />
              <Image
                src="/auth/facebook.svg"
                alt="Facebook 1"
                width={30}
                height={30}
                className="rounded-lg cursor-pointer"
              />

              <Image
                src="/auth/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
                className="rounded-lg cursor-pointer"
              />
            </div>
            <div className="mt-5 lg:text-[16px] text-sm justify-center flex items-center gap-1">
              <p className="text-neutral-500">Don’t have an account yet?</p>
              <Link
                href="/auth/register"
                className="text-blue-600 font-semibold cursor-pointer"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
 