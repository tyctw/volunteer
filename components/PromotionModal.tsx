import React from 'react';
import { X, HeartHandshake, ArrowRight, Share2, Sparkles, ShieldCheck, Users, ClipboardCheck } from 'lucide-react';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const highlights = [
    {
      icon: <ClipboardCheck className="w-4 h-4" />,
      title: '補足序位資料',
      desc: '讓落點分析更接近真實情況',
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: '匿名分享',
      desc: '只需要提供升學參考資料',
    },
    {
      icon: <Users className="w-4 h-4" />,
      title: '幫助學弟妹',
      desc: '給下一屆更安心的選填依據',
    },
  ];

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/45 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-[28px] shadow-2xl w-full max-w-md max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500 border border-white/70 ring-1 ring-black/5">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.26),transparent_34%),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.22),transparent_30%),linear-gradient(135deg,#ecfdf5_0%,#f0fdfa_50%,#eff6ff_100%)] pointer-events-none z-0"></div>
        <div className="absolute inset-x-0 top-0 h-48 opacity-45 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:22px_22px] pointer-events-none z-0"></div>

        {/* Close Button - Fixed Position */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/75 hover:bg-white text-slate-400 hover:text-slate-700 transition-colors backdrop-blur-sm shadow-sm border border-white/70"
            aria-label="關閉彈窗"
        >
            <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="overflow-y-auto p-6 text-center relative z-10 overscroll-contain">
            
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-emerald-300 rounded-full animate-ping opacity-20"></div>
                <div className="relative bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 w-full h-full rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-500/25 text-white rotate-3">
                    <HeartHandshake className="w-8 h-8 -rotate-3" />
                    <div className="absolute -top-2 -right-2 bg-white text-emerald-600 rounded-full p-1.5 shadow-sm border border-emerald-100">
                        <Sparkles className="w-3.5 h-3.5" />
                    </div>
                </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/80 border border-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-black shadow-sm mb-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                分享 1 分鐘，幫下一屆少走彎路
            </div>
            
            {/* Content */}
            <h3 className="text-2xl sm:text-[28px] font-black text-slate-900 mb-2 leading-tight">
                幫助下一屆學弟妹！
            </h3>
            
            <p className="text-slate-600 text-[15px] leading-relaxed mb-5 font-medium max-w-sm mx-auto">
                你的會考序位與選填經驗，可以成為下一屆同學最需要的參考。
                匿名分享資料，讓落點分析更完整、更有用。
            </p>

            <div className="grid grid-cols-3 gap-2 mb-4 text-left">
                {highlights.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-white/80 border border-slate-100 p-3 shadow-sm">
                        <div className="w-7 h-7 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                            {item.icon}
                        </div>
                        <div className="text-xs font-black text-slate-800 mb-1 leading-snug">{item.title}</div>
                        <div className="text-[11px] leading-relaxed text-slate-500 font-medium">{item.desc}</div>
                    </div>
                ))}
            </div>

            <div className="rounded-2xl bg-slate-900 text-white p-3.5 mb-4 text-left overflow-hidden relative">
                <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-emerald-400/25 to-transparent pointer-events-none"></div>
                <div className="relative">
                    <div className="text-xs font-bold text-emerald-200 mb-1">需要你的資料</div>
                    <p className="text-[13px] leading-relaxed text-slate-200 font-medium">
                        分享序位區間、會考成績與志願結果，能協助資料庫校準預測，讓更多人選填時不再只能靠猜。
                    </p>
                </div>
            </div>

            {/* CTA Button */}
            <a 
                href="https://tyctw.github.io/score/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-white font-black rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
            >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <Share2 className="w-5 h-5" />
                立即匿名分享序位
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
                onClick={onClose}
                className="mt-4 text-slate-400 text-sm font-bold hover:text-slate-600 transition-colors"
            >
                稍後再說
            </button>
        </div>
      </div>
    </div>
  );
};
