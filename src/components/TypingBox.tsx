import React, { useEffect, useRef, useState } from "react";
import StatsDisplay from "./StatsDisplay";
import { paragraphs } from "../data/paragraphs";

const TEST_DURATION = 30;

const TypingBox = () => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [wpmHistory, setWpmHistory] = useState<number[]>([]);
  const [started, setStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const [paragraph, setParagraph] = useState(() => {
    return paragraphs[Math.floor(Math.random() * paragraphs.length)];
  });

  const handleStart = () => {
    if (!started && !isFinished) {
      setStarted(true);
    }
  };

  const handleReset = () => {
    setInput("");
    setStarted(false);
    setIsFinished(false);
    setTimeLeft(TEST_DURATION);
    setWpmHistory([]);
    setParagraph(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    clearInterval(intervalRef.current!);
  };

  useEffect(() => {
    if (started && timeLeft > 0) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setIsFinished(true);
            clearInterval(intervalRef.current!);
          }
          return newTime;
        });

        const words = input.trim().split(/\s+/).length;
        const minutes = (TEST_DURATION - timeLeft) / 60;
        const currentWPM = Math.round(words / minutes || 0);
        setWpmHistory((prev) => [...prev, currentWPM]);
      }, 1000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [started, timeLeft]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!started) handleStart();
    setInput(e.target.value);
  };

  const currentWPM = wpmHistory[wpmHistory.length - 1] || 0;
  const previousWPM = wpmHistory[wpmHistory.length - 2] || 0;
  const percentChange = previousWPM
    ? Math.round(((currentWPM - previousWPM) / previousWPM) * 100)
    : 0;

  return (
    <>
      {/* Paragraph and input */}
      <div className="flex max-w-[720px] flex-col gap-4 px-4 py-3">
        <div className="whitespace-pre-wrap text-[#a2c398] text-base font-medium leading-relaxed">
          {paragraph}
        </div>

        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="Start typing here..."
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#426039] bg-[#21301c] focus:border-[#426039] min-h-36 placeholder:text-[#a2c398] p-[15px] text-base font-normal leading-normal"
            value={input}
            onChange={handleInputChange}
            disabled={isFinished}
          />
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-stretch">
        <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
          <button
            onClick={handleStart}
            disabled={started || isFinished}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#8cd279] text-[#171f14] text-sm font-bold leading-normal tracking-[0.015em] disabled:opacity-50"
          >
            <span className="truncate">Start</span>
          </button>
          <button
            onClick={handleReset}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2f402b] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Reset</span>
          </button>

          {/* Timer display */}
      <div className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#2f402b] text-[#e2e8d7] text-sm font-medium leading-normal tracking-[0.015em]"
>
        Time left: {timeLeft}s
      </div>
        </div>
      </div>

      <StatsDisplay
        wpm={currentWPM}
        percentChange={percentChange}
        wpmHistory={wpmHistory}
      />
    </>
  );
};

export default TypingBox;
