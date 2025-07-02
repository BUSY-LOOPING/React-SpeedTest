type ProfileCardProps = {
  backGroundImage: string;
  name: string;
  wpm: number;
};

const ProfileCard = ({ backGroundImage, name, wpm }: ProfileCardProps) => {
  return (
    <div className="flex items-center gap-4 bg-[#162013] px-4 min-h-[72px] py-2">
      <div
        className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full h-14 w-fit`} style={{ backgroundImage: `url('${backGroundImage}')` }}
      ></div>
      <div className="flex flex-col justify-center">
        <p className="text-white text-base font-medium leading-normal line-clamp-1">
          {name}
        </p>
        <p className="text-[#a2c398] text-sm font-normal leading-normal line-clamp-2">
          {wpm} WPM
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
