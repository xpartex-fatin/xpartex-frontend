import {
  FiFacebook,
  FiLinkedin,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5     w-full">
      <p className="text-[#00BFFF]">Contact Information</p>

      <div className="mt-5">
        <div className="flex items-start gap-3  ">
          <FiPhone className="text-neutral-500 text-xl" />
          <div className="text-sm">
            <p className="text-xs text-neutral-500  ">Phone</p>
            <p className="text-sm">01779 893520</p>
          </div>
        </div>

        <div className="flex mt-4 items-start gap-3  ">
          <FiMapPin className="text-neutral-500 text-2xl" />
          <div className="text-sm">
            <p className="text-xs text-neutral-500  ">Address</p>
            <p className="text-sm">House-12, Road-4, Mirpur 12, Dhaka 1216</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-xs text-neutral-500  ">Social Media</p>

          <div className="mt-3 flex items-center gap-3">
            <FiFacebook className="text-[#00BFFF] bg-[#00BFFF]/10 p-1.5 rounded-lg cursor-pointer text-4xl" />
            <FiLinkedin className="text-[#00BFFF] bg-[#00BFFF]/10 p-1.5 rounded-lg cursor-pointer text-4xl" />
            <FiTwitter className="text-[#00BFFF] bg-[#00BFFF]/10 p-1.5 rounded-lg cursor-pointer text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
