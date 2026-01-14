type ProfileCardSeeMoreButtonProps = {
  label?: string;
  onClick?: () => void;
};

const ProfileCardSeeMoreButton = ({
  label = "See More",
  onClick,
}: ProfileCardSeeMoreButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="cursor-pointer text-[#00BFFF]"
    >
      {label}
    </button>
  );
};

export default ProfileCardSeeMoreButton;
