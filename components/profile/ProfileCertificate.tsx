
"use client"
import ProfileCardSeeMoreButton from '@/hooks/profile/ProfileCardSeeMoreButton';
import ProfileCardTitle from '@/hooks/profile/ProfileCardTitle';
import ProfileCertificateCard from '@/hooks/profile/ProfileCertificateCard';

const ProfileCertificate = () => {
  return (
    <div className="w-full rounded-xl bg-white shadow p-5">
      <div className="w-full flex items-center justify-between">
        <ProfileCardTitle title="Certificates" />
        <ProfileCardSeeMoreButton />
      </div>
      <div className="my-4 h-px w-full bg-neutral-300" />

      <ProfileCertificateCard />
    </div>
  );
}

export default ProfileCertificate