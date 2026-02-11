import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

const EVENTS = [
  { name: '國中教育會考報名', date: '2026-03-05T08:00:00' },
  { name: '寄發准考證', date: '2026-04-10T08:00:00' },
  { name: '國中教育會考', date: '2026-05-16T08:00:00' },
  { name: '會考成績公布', date: '2026-06-05T08:00:00' },
  { name: '序位區間公告/志願選填', date: '2026-06-18T08:00:00' },
  { name: '志願選填截止', date: '2026-06-25T17:00:00' },
  { name: '免試入學放榜', date: '2026-07-07T11:00:00' },
];

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);
  const [targetEvent, setTargetEvent] = useState<{name: string, date: string} | null>(null);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const nextEvent = EVENTS.find(event => new Date(event.date).getTime() > now.getTime());

      if (!nextEvent) {
        setTargetEvent(null);
        return;
      }

      setTargetEvent(nextEvent);
      const difference = new Date(nextEvent.date).getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!targetEvent || !timeLeft) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <div className="relative bg-white/40 backdrop-blur-xl border border-white/50 rounded-[32px] p-8 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]">
            <div className="flex items-center gap-6 w-full md:w-auto border-b md:border-b-0 border-slate-200/50 pb-8 md:pb-0">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-3xl shadow-xl shadow-indigo-500/20 shrink-0 text-white">
                    <Timer className="w-8 h-8" />
                </div>
                <div className="text-left">
                    <p className="text-indigo-600 text-[11px] font-black tracking-widest uppercase mb-2">UPCOMING EVENT</p>
                    <h3 className="font-black text-2xl text-slate-800 tracking-tight leading-tight">
                        {targetEvent.name}
                    </h3>
                </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
                <TimeUnit value={timeLeft.days} label="Days" />
                <span className="font-light text-3xl text-slate-300 mb-6">:</span>
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <span className="font-light text-3xl text-slate-300 mb-6">:</span>
                <TimeUnit value={timeLeft.minutes} label="Mins" />
                <span className="font-light text-3xl text-slate-300 mb-6">:</span>
                <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>
        </div>
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center gap-2">
        <div className="bg-white/80 border border-white rounded-3xl w-16 h-20 md:w-20 md:h-24 flex items-center justify-center shadow-lg shadow-indigo-500/5 backdrop-blur-sm">
            <span className="text-3xl md:text-4xl font-black font-mono text-slate-800 leading-none tracking-tighter">
                {value.toString().padStart(2, '0')}
            </span>
        </div>
        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
    </div>
);