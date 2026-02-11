import React, { useState } from 'react';
import { X, Copy, Check, Facebook, MessageCircle, Share2, Smartphone, QrCode } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '全國會考序位查詢與志願選填網址整理平台',
          text: '彙整全國各就學區志願選填、序位查詢及放榜查詢連結，快速掌握升學關鍵時刻！',
          url: url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const lineShare = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      <div className="relative bg-white/95 backdrop-blur-2xl rounded-[32px] shadow-2xl w-full max-w-sm overflow-hidden animate-in zoom-in-95 duration-300 border border-white/50 ring-1 ring-black/5">
        
        {/* Header */}
        <div className="bg-white/50 p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-indigo-600" />
                分享網站
            </h3>
            <button 
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        <div className="p-6 flex flex-col items-center">
            {/* QR Code Section */}
            <div className="relative group mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-lg opacity-20"></div>
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 w-48 h-48 flex items-center justify-center relative z-10">
                    <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedUrl}&bgcolor=ffffff`}
                        alt="Website QR Code"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-4">掃描 QR Code 快速分享</p>

            {/* URL Input */}
            <div className="w-full relative mb-6">
                <input 
                    type="text" 
                    value={url} 
                    readOnly
                    className="w-full pl-4 pr-12 py-3 bg-slate-100 text-slate-600 text-sm font-medium rounded-xl focus:outline-none border border-transparent focus:border-indigo-500/30 selection:bg-indigo-200"
                />
                <button 
                    onClick={handleCopy}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white rounded-lg text-slate-400 hover:text-indigo-600 transition-all shadow-sm"
                    title="複製連結"
                >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
            </div>

            {/* Share Buttons */}
            <div className="grid grid-cols-3 gap-3 w-full">
                <a 
                    href={lineShare} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl hover:bg-[#06C755]/10 text-slate-600 hover:text-[#06C755] transition-colors group"
                >
                    <div className="w-10 h-10 bg-[#06C755] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">LINE</span>
                </a>

                <a 
                    href={facebookShare} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-3 rounded-2xl hover:bg-[#1877F2]/10 text-slate-600 hover:text-[#1877F2] transition-colors group"
                >
                    <div className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <Facebook className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">Facebook</span>
                </a>

                <button 
                    onClick={handleNativeShare}
                    disabled={!navigator.share}
                    className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-colors group ${!navigator.share ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-100 text-slate-600 hover:text-slate-900'}`}
                >
                    <div className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-500/20 group-hover:scale-110 transition-transform">
                        <Smartphone className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">更多</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};