"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RegisterImage } from "./RegisteImage";
import { useAuthReusable } from "@/components/reUsable/auth/useAuthReusable";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputsConfig = [
    {
      label: "email",
      placeholder: "Enter Your Email",
      type: "email" as const,
      value: email,
      onChange: (val: string) => setEmail(val),
    },
    {
      label: "password",
      placeholder: "Enter Your Password",
      type: "password" as const,
      value: password,
      onChange: (val: string) => setPassword(val),
    },
    {
      label: "confirm password",
      placeholder: "Confirm Your Password",
      type: "password" as const,
      value: confirmPassword,
      onChange: (val: string) => setConfirmPassword(val),
    },
  ];

  const { renderTitle, renderInput, renderButton } = useAuthReusable({
    title: "create an account",
    subtitle: "Complete one-stop solution for RMG & Textile.",
    inputs: inputsConfig,
    buttonText: "Sign Up",
    onSubmit: () =>
      console.log("Register clicked", { email, password, confirmPassword }),
  });

  return (
    <div className="flex px-4 min-h-screen lg:min-h-[80vh] items-center justify-center mx-auto lg:py-10 max-w-380 w-full">
      <RegisterImage />
      <div className="flex  w-full items-center justify-center flex-col ">
        <Image
          src="/xpartex.svg"
          alt="Logo"
          width={130}
          height={100}
          className="mb-2 lg:hidden"
        />
        {renderTitle()}
        <div className="flex mt-6 w-full text-neutral-700 flex-col mx-auto gap-4 max-w-sm">
          <div className=" ">
            <div className="flex flex-col gap-4">
              {" "}
              {inputsConfig.map((field, idx) => renderInput(field, idx))}
            </div>

            <div className="flex lg:text-[16px] mt-2   text-sm items-start gap-1 w-full">
              <input type="checkbox" className="mt-1 cursor-pointer" />
              <p className="text-[13px]">
                I agree to the Xpartex &nbsp;
                <span className="text-blue-500 cursor-pointer">
                  Terms & services
                </span>
                &nbsp; and
                <span className="text-blue-500 cursor-pointer">
                  &nbsp; Privacy Policy
                </span>
              </p>
            </div>
          </div>

          {renderButton()}

          <div>
            <div className=" flex items-center justify-center gap-2 max-w-sm">
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
          </div>

          <div className="mt-5 lg:text-[16px] text-sm justify-center flex items-center gap-1">
            <p className="text-neutral-500">Already have an account?</p>
            <Link
              href="/auth/login"
              className="text-blue-600 font-semibold cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
