"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useAuthReusable } from "@/components/reUsable/auth/useAuthReusable";

const ForgotPasswordPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const inputsConfig = [
    {
      label: "", // leave blank so reusable input doesn't render its label
      placeholder: "Enter Your Email",
      type: "email" as const,
      value: email,
      onChange: (val: string) => setEmail(val),
    },
  ];

  const { renderTitle, renderInput, renderButton } = useAuthReusable({
    title: "Forgot your password?",
    subtitle: "Enter your email to reset your password",
    inputs: inputsConfig,
    buttonText: "Reset Password",
    onSubmit: () => router.push("/auth/forgot-password/otp"),
  });

  return (
    <div className="authBox md:w-auto w-full md:min-w-md lg:p-12 flex flex-col items-center text-center lg:rounded-2xl lg:bg-white bg-transparent">
      <Image
        src="/xpartex.svg"
        alt="Logo"
        width={130}
        height={100}
        className="mb-2 lg:hidden"
      />
      {renderTitle()}
      <div className="flex mt-4 w-full flex-col  max-w-sm text-neutral-700">
        <div className="w-full">
          <p className="text-left text-sm font-semibold text-neutral-600">
            Email <span className="text-red-500">*</span>
          </p>
          {renderInput(inputsConfig[0], 0)}
        </div>
        {renderButton()}
      </div>
      <div
        onClick={() => router.push("/auth/login")}
        className="cursor-pointer flex items-center font-bold gap-1 mt-4"
      >
        <IoIosArrowRoundBack size={25} />
        <span className="text-sm text-neutral-500">Back to Sign In</span>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
