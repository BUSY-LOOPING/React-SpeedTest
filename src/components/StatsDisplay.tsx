import WpmChart from "./WpmChart";

type StatsProps = {
  wpm: number;
  percentChange: number;
  wpmHistory: number[];
};

const StatsDisplay = ({ wpm, percentChange, wpmHistory }: StatsProps) => {
  return (
    <div className="flex flex-wrap gap-4 px-4 py-6">
      <div className="flex min-w-72 flex-1 flex-col gap-2">
        <p className="text-white text-base font-medium leading-normal">Typing Speed (WPM)</p>
        <p className="text-white tracking-light text-[32px] font-bold leading-tight truncate">{wpm}</p>
        <div className="flex gap-1">
          <p className="text-[#a2c398] text-base font-normal leading-normal">Last 60 seconds</p>
          <p className={`text-base font-medium leading-normal ${percentChange >= 0 ? 'text-[#0bda35]' : 'text-red-400'}`}>
            {percentChange >= 0 ? '+' : ''}{percentChange}%
          </p>
        </div>
        <div className="flex min-h-[180px] flex-1 flex-col gap-8 py-4">
          <WpmChart data={wpmHistory} />

        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;
