import React from 'react';
import { X, Heart, ArrowRight, Share2, Sparkles } from 'lucide-react';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-500 border border-white/50 ring-1 ring-black/5">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 pointer-events-none z-0"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>

        {/* Close Button - Fixed Position */}
        <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/50 hover:bg-white text-slate-400 hover:text-slate-600 transition-colors backdrop-blur-sm shadow-sm"
        >
            <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content Wrapper */}
        <div className="overflow-y-auto p-8 text-center relative z-10 overscroll-contain">
            
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
                <div className="relative bg-gradient-to-br from-emerald-400 to-teal-600 w-full h-full rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 text-white">
                    <Heart className="w-10 h-10 fill-current" />
                    <div className="absolute -top-1 -right-1 bg-white text-emerald-600 rounded-full p-1.5 shadow-sm border border-emerald-100">
                        <Sparkles className="w-4 h-4" />
                    </div>
                </div>
            </div>
            
            {/* Content */}
            <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">
                幫助下一屆學弟妹！
            </h3>
            
            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
                您的經驗是無價的寶藏。<br/>
                立即分享您的<span className="text-emerald-600 font-bold bg-emerald-50 px-1 rounded">序位資訊</span>，協助擴充我們的資料庫，讓落點分析更精準！
            </p>

            {/* CTA Button */}
            <a 
                href="https://tyctw.github.io/score/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group relative overflow-hidden"
            >
                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></span>
                <Share2 className="w-5 h-5" />
                立即前往分享
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