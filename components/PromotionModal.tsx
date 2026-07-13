import React from 'react';
import { ArrowRight, BarChart3, ExternalLink, Share2, Sparkles, X } from 'lucide-react';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromotionModal: React.FC<PromotionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="share-title">
      <button className="absolute inset-0 cursor-default bg-slate-950/55 backdrop-blur-md" onClick={onClose} aria-label="關閉視窗" />
      <section className="relative w-full max-w-[28rem] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_32px_90px_-26px_rgba(15,23,42,0.62)]">
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 px-7 pb-20 pt-7 text-white sm:px-8">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-cyan-200/60 blur-2xl" />
          <div className="absolute -bottom-16 left-12 h-36 w-36 rounded-full bg-emerald-300/50 blur-2xl" />
          <div className="relative flex items-start justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[11px] font-black tracking-[0.16em] backdrop-blur-sm"><Sparkles className="h-3.5 w-3.5" />升學資源</div>
            <button onClick={onClose} className="rounded-full border border-white/20 bg-white/10 p-2 text-white/90 backdrop-blur-sm transition hover:bg-white/20" aria-label="關閉"><X className="h-5 w-5" /></button>
          </div>
          <div className="relative mt-8 flex items-end justify-between gap-5">
            <div><p className="text-sm font-bold text-emerald-50">成績與序位資訊</p><h2 id="share-title" className="mt-1 text-3xl font-black tracking-tight">會考序位分享</h2></div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm"><Share2 className="h-8 w-8" /></div>
          </div>
        </div>

        <div className="relative -mt-12 px-5 pb-5 sm:px-6 sm:pb-6">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_18px_44px_-24px_rgba(15,23,42,.32)] sm:p-7">
            <div className="flex items-start gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"><BarChart3 className="h-5 w-5" /></span><div><p className="text-xs font-black tracking-[0.16em] text-slate-400">DATA SHARE</p><p className="mt-1.5 text-sm font-medium leading-6 text-slate-600">提供會考成績與序位資料，作為升學資訊參考。</p></div></div>
            <div className="mt-6 h-px bg-slate-100" />
            <div className="mt-5 grid grid-cols-2 gap-3 text-center"><div className="rounded-xl bg-slate-50 px-3 py-3"><p className="text-[11px] font-black tracking-wide text-slate-400">資料類型</p><p className="mt-1 text-sm font-bold text-slate-700">成績與序位</p></div><div className="rounded-xl bg-slate-50 px-3 py-3"><p className="text-[11px] font-black tracking-wide text-slate-400">服務名稱</p><p className="mt-1 text-sm font-bold text-slate-700">序位分享</p></div></div>
            <a href="https://tyctw.github.io/score/" target="_blank" rel="noopener noreferrer" className="group mt-6 flex items-center justify-between rounded-2xl bg-slate-900 px-5 py-4 text-sm font-black text-white shadow-lg shadow-slate-900/15 transition hover:bg-emerald-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-200" onClick={onClose}><span className="flex items-center gap-2"><ExternalLink className="h-4 w-4" />前往序位分享</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></a>
          </div>
          <button onClick={onClose} className="mx-auto mt-4 block rounded-xl px-4 py-2 text-sm font-bold text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">暫時不要</button>
        </div>
      </section>
    </div>
  );
};
