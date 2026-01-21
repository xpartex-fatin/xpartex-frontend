import Image from "next/image";
import { memo } from "react";
import { CiCamera } from "react-icons/ci";

const UserAvatar = memo(() => {
  return (
    <div className="relative h-40 w-40 shrink-0">
      <div className="h-full w-full overflow-hidden rounded-full border-4 border-white bg-neutral-200 shadow">
        <Image
          src="https://i.ibb.co.com/67fpNVMH/profile.jpg"
          alt="User"
          width={160}
          height={160}
          priority
          className="object-cover"
        />
      </div>

      <button className="absolute bottom-2 right-2 rounded-full border border-neutral-300 bg-white p-1.5 text-neutral-700 shadow hover:bg-neutral-100">
        <CiCamera className="text-xl" />
      </button>
    </div>
  );
});

UserAvatar.displayName = "UserAvatar";
export default UserAvatar;
