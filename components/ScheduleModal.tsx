import React from 'react';
import { X, Calendar, Clock, AlertCircle } from 'lucide-react';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const scheduleItems = [
    { event: '國中教育會考報名', date: '115/03/05(四) ~ 115/03/07(六)', icon: 'edit' },
    { event: '國中教育會考寄發准考證', date: '115/04/10(五)', icon: 'mail' },
    { event: '國中教育會考日期', date: '115/05/16(六) ~ 115/05/17(日)', icon: 'pen', highlight: true },
    { event: '國中教育會考成績公布', date: '115/06/05(五)', icon: 'award' },
    { event: '個人序位區間公告/查詢', date: '115/06/18(四)', icon: 'bar-chart' },
    { event: '就學區免試入學志願選填', date: '115/06/18(四) - 115/06/25(四)', icon: 'list', highlight: true },
    { event: '就學區免試入學放榜', date: '115/07/07(二)', icon: 'check-circle' },
  ];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white/90 backdrop-blur-2xl rounded-[32px] shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] border border-white/50 ring-1 ring-black/5">
        {/* Header */}
        <div className="bg-white/50 p-6 border-b border-slate-100 flex justify-between items-center backdrop-blur-sm">
             <div>
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    115學年度重要日程
                </h3>
                <p className="text-slate-500 text-xs mt-1 font-bold tracking-wide">國中教育會考 & 免試入學時程表</p>
            </div>
            <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto">
            <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                    <div 
                        key={index} 
                        className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${item.highlight ? 'bg-orange-50/80 border-orange-100 shadow-sm' : 'bg-white/60 border-slate-100 hover:border-slate-200'}`}
                    >
                        <div className={`p-3 rounded-xl shrink-0 shadow-sm ${item.highlight ? 'bg-orange-100 text-orange-600' : 'bg-white text-slate-400 border border-slate-100'}`}>
                           <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className={`font-bold text-base ${item.highlight ? 'text-slate-900' : 'text-slate-700'}`}>
                                {item.event}
                            </h4>
                            <p className={`${item.highlight ? 'text-orange-600' : 'text-slate-500'} font-bold mt-1 font-mono text-sm tracking-tight`}>
                                {item.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50/50 rounded-2xl text-xs text-slate-500 flex items-start gap-3 leading-relaxed border border-blue-100/50">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-500" />
                <p className="font-medium">日程僅供參考，實際時間請以<span className="text-slate-800 font-bold">全國試務會</span>及各就學區免試入學委員會最新公告簡章為準。</p>
            </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-white/50 flex justify-center shrink-0 backdrop-blur-sm">
            <button 
                onClick={onClose}
                className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-900/20 hover:shadow-indigo-500/30"
            >
                關閉視窗
            </button>
        </div>
      </div>
    </div>
  );
};