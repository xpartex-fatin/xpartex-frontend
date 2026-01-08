"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const page = () => {
  const router = useRouter();
  return (
    <div className="authBox md:w-auto w-full md:min-w-md  lg:p-12 flex flex-col items-center   text-center lg:rounded-2xl lg:bg-white bg-transparent">
      <Image
        src="/xpartex.svg"
        alt="Logo"
        width={130}
        height={100}
        className="mb-2 lg:hidden"
      />
      <p className="text-2xl lg:text-3xl font-semibold">
        Forgot your password?
      </p>
      <p className="text-sm text-center lg:text-[16px] mt-1 lg:mt-3 text-neutral-500">
        Enter your email to reset your password
      </p>
      <div className="w-full">
        <p className="text-left text-sm mt-6 font-semibold text-neutral-600">
          Email <span className="text-red-600">* </span>{" "}
        </p>
        <input
          type="text"
          className="w-full border mt-1 lg:bg-transparent bg-white border-neutral-300 rounded-lg py-2 lg:py-2.5 px-3"
          placeholder="Enter Your Email"
        />
      </div>
      <button
        onClick={() => router.push("/auth/forgot-password/otp")}
        className="signIn rounded-lg text-white font-semibold py-2.5 w-full mt-4 cursor-pointer"
      >
        Reset Password
      </button>
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

export default page;
