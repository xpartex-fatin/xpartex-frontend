type ProfileCardTitleProps = {
  title: string;
};

const ProfileCardTitle = ({ title }: ProfileCardTitleProps) => {
  return <h2 className="text-xl lg:text-2xl font-semibold text-neutral-800">{title}</h2>;
};

export default ProfileCardTitle;
