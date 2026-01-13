import OnlyLogo from "@/public/hooks/icon/OnlyLogo";

const RootLoading = () => {
  return (
     <div className="fixed inset-0 z-9999 top-0 flex flex-col items-center  pt-[30vh] bg-white">
      <div className="animate-pulse">
        <OnlyLogo />
      </div>

      <div className="mt-6 h-1 w-35 overflow-hidden rounded-full bg-gray-200 relative">
        <div className="h-full w-1/2 absolute left-0 top-0 animate-loading-bar bg-linear-to-r from-[#00BFFF] to-[#40E0D0]" />
      </div>
    </div>
  );
};

export default RootLoading;
