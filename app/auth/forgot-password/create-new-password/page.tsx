"use client";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useAuthReusable } from "@/components/reUsable/auth/useAuthReusable";

const CreateNewPasswordPage = () => {
  const router = useRouter();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { renderTitle, renderButton } = useAuthReusable({
    title: "New Password",
    subtitle: "Please insert a new password",
    inputs: [], 
    buttonText: "Submit",
    onSubmit: () => {}, 
  });

  return (
    <div className="authBox lg:p-12 flex flex-col items-center text-center lg:rounded-2xl w-full md:w-auto md:min-w-md lg:bg-white bg-transparent">
      <div className="flex lg:min-h-full w-full flex-col items-center">
        <Image
          src="/xpartex.svg"
          alt="Logo"
          width={130}
          height={100}
          className="mb-2 lg:hidden"
        />

        {renderTitle()}

        <div className="flex mt-4 w-full text-neutral-700 flex-col mx-auto gap-4 max-w-sm">
          <div className="flex flex-col gap-1 lg:gap-2">
            <span className="font-semibold text-start text-sm text-neutral-600">
              New Password <span className="text-red-500">*</span>
            </span>
            <div className="relative w-full">
              <input
                type={showNewPassword ? "text" : "password"}
                className="w-full border bg-white lg:bg-transparent border-neutral-300 rounded-lg py-2 lg:py-2.5 px-3"
                placeholder="Enter New Password"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              >
                {showNewPassword ? (
                  <EyeOff size={18} className="cursor-pointer" />
                ) : (
                  <Eye size={18} className="cursor-pointer" />
                )}
              </button>
            </div>

            <span className="font-semibold text-start text-sm text-neutral-600 mt-3">
              Confirm Password <span className="text-red-500">*</span>
            </span>
            <div className="relative w-full">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="w-full border bg-white lg:bg-transparent border-neutral-300 rounded-lg py-2 lg:py-2.5 px-3"
                placeholder="Confirm New Password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} className="cursor-pointer" />
                ) : (
                  <Eye size={18} className="cursor-pointer" />
                )}
              </button>
            </div>

            <div className=" w-full">{renderButton()}</div>

            <div
              onClick={() => router.push("/auth/forgot-password/otp")}
              className="cursor-pointer justify-center flex items-center font-bold gap-1 mt-4"
            >
              <IoIosArrowRoundBack size={25} />
              <span className="text-sm text-neutral-500">Back to OTP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPasswordPage;
