"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LoginImage } from "./LoginImage";
import { useAuthReusable } from "@/components/reUsable/auth/useAuthReusable";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputsConfig = [
    {
      label: "email",
      placeholder: "enter your email",
      type: "email" as const,
      value: email,
      onChange: (val: string) => setEmail(val),
    },
    {
      label: "password",
      placeholder: "enter your password",
      type: "password" as const,
      value: password,
      onChange: (val: string) => setPassword(val),
    },
  ];

  const { renderTitle, renderInput, renderButton } = useAuthReusable({
    title: "welcome back",
    subtitle: "please enter your login credentials to continue",
    inputs: inputsConfig,
    buttonText: "Sign In",
    onSubmit: () => console.log("Login clicked", { email, password }),
  });

  return (
    <div className="flex px-4 justify-center mx-auto lg:py-10 max-w-380 w-full">
      <LoginImage />
      <div className="flex lg:min-h-full w-full min-h-screen flex-col items-center justify-center">
        <Image
          src="/xpartex.svg"
          alt="Logo"
          width={130}
          height={100}
          className="mb-2 lg:hidden"
        />
        {renderTitle()}

        <div className="flex mt-6 w-full text-neutral-700 flex-col mx-auto gap-4 max-w-sm">
          {inputsConfig.map((field, idx) => renderInput(field, idx))}
          <div className="flex lg:text-[16px] text-sm items-center justify-between w-full max-w-sm">
            <div className="flex items-center gap-1">
              <input type="checkbox" className="cursor-pointer" />
              <span className="font-medium text-neutral-500">Remember me</span>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-blue-600 font-semibold"
            >
              Forgot Password
            </Link>
          </div>
          {renderButton()}
        </div>

        <div className="mt-3 lg:mt-5 flex items-center justify-center gap-2 max-w-sm">
          <div className="w-20 h-px bg-neutral-200"></div>
          <span className="text-neutral-300">Or</span>
          <div className="w-20 h-px bg-neutral-200"></div>
        </div>
        <div className="flex items-center justify-center gap-6  mt-6 ">
          <Image
            src="/auth/google.svg"
            alt="Google"
            width={30}
            height={30}
            className="rounded-lg cursor-pointer"
          />
          <Image
            src="/auth/facebook.svg"
            alt="Facebook"
            width={30}
            height={30}
            className="rounded-lg cursor-pointer"
          />
          <Image
            src="/auth/linkedin.svg"
            alt="Linkedin"
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
  );
};

export default LoginPage;
