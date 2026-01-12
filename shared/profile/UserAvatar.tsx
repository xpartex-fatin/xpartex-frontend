import Image from "next/image";
import { memo } from "react";
import { CiCamera } from "react-icons/ci";

const UserAvatar = memo(() => {
  return (
    <div className="relative max-w-40 max-h-40">
      <div className="rounded-full overflow-hidden bg-neutral-200 w-40 h-40">
        <Image
          src="https://i.ibb.co.com/67fpNVMH/profile.jpg"
          alt="User"
          width={160}
          height={160}
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>

      <CiCamera className="absolute bottom-3 right-1 z-9999 text-3xl bg-neutral-100 border border-neutral-300 text-neutral-700 rounded-full p-1 cursor-pointer" />
    </div>
  );
});

UserAvatar.displayName = "UserAvatar";

export default UserAvatar;
