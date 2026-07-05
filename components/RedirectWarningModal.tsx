import React from 'react';
import { AlertTriangle, ArrowRight, X } from 'lucide-react';

interface RedirectWarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  siteName: string;
}

export const RedirectWarningModal: React.FC<RedirectWarningModalProps> = ({ isOpen, onClose, onConfirm, siteName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300 border border-white/50 ring-1 ring-black/5">
        <div className="p-8 text-center">
            <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg shadow-orange-500/10">
                <AlertTriangle className="w-10 h-10 text-orange-500" />
            </div>
            
            <h3 className="text-2xl font-black text-slate-800 mb-3 tracking-tight">
                系統尚未開放
            </h3>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                <span className="font-bold text-slate-900">{siteName}</span> 的志願選填與序位查詢功能預計於 <span className="text-orange-600 font-bold bg-orange-50 px-2 py-0.5 rounded border border-orange-100">115/06/18</span> 開放。
                <br/><br/>
                目前前往可能只能看到測試畫面或舊資料，您確定要繼續前往嗎？
            </p>

            <div className="flex flex-col gap-3">
                <button 
                    onClick={onConfirm}
                    className="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 group border border-slate-200"
                >
                    仍然前往
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                    onClick={onClose}
                    className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/30"
                >
                    取消，稍後再來
                </button>
            </div>
        </div>

        <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
        >
            <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};