"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const ForgotPasswordOtppage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["", "", "", "", ""]);
  const [timer, setTimer] = useState(59);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    if (value && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasteData = e.clipboardData.getData("text").slice(0, 5);
    if (!/^\d+$/.test(pasteData)) return;
    const newOtp = pasteData.split("").slice(0, 5);
    setOtp([...newOtp, "", "", "", "", ""].slice(0, 5));
    if (newOtp.length > 0) inputsRef.current[newOtp.length - 1]?.focus();
  };

  return (
    <div>
      <div className="authBox p-4 lg:p-12 flex flex-col items-center text-center lg:rounded-2xl lg:bg-white bg-transparent">
        <Image
          src="/xpartex.svg"
          alt="Logo"
          width={130}
          height={100}
          className="mb-2 lg:hidden"
        />
        <p className="text-2xl lg:text-3xl font-semibold">OTP Verification</p>
        <p className="text-sm lg:text-[16px] mt-2 text-neutral-500">
          We have sent a verification code to your email
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-semibold text-neutral-700">
            bulb**********ail.com
          </span>
          <button className="text-blue-500 text-sm font-medium">Change</button>
        </div>

        <div className="flex w-full gap-3 mt-6">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => {
                inputsRef.current[idx] = el;
              }}
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              onPaste={handlePaste}
              maxLength={1}
              className="w-15 h-12 text-center text-lg bg-white lg:bg-transparent font-semibold border border-neutral-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
          ))}
        </div>

        <button
          onClick={() =>
            router.push("/auth/forgot-password/create-new-password")
          }
          className="signIn rounded-lg text-white font-semibold py-2.5 w-full mt-6 cursor-pointer"
        >
          Verify
        </button>

        <div className="flex items-center gap-2 mt-4 text-sm">
          <span className="text-neutral-500">Didn’t get code?</span>
          <span
            className={`font-bold ${
              timer === 0 ? "text-red-500" : "text-neutral-600"
            }`}
          >
            Resend in 0:{timer.toString().padStart(2, "0")}
          </span>
        </div>
        <div
          onClick={() => router.push("/auth/forgot-password")}
          className="cursor-pointer flex items-center font-bold gap-1 mt-4"
        >
          <IoIosArrowRoundBack size={25} />
          <span className="text-sm text-neutral-500">
            Back to Forgot Password
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordOtppage;
