import React, { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { RegionLink } from '../types';
import { RedirectWarningModal } from './RedirectWarningModal';

interface LinkCardProps {
  link: RegionLink;
}

// Target Date: 2026/06/18 08:00:00
const TARGET_DATE = new Date('2026-06-18T08:00:00');

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getCategoryTheme = (category: string) => {
    switch(category) {
        case '北部': return { bg: 'bg-blue-50', text: 'text-blue-600', hoverShadow: 'hover:shadow-blue-500/20', iconBg: 'bg-blue-100' };
        case '中部': return { bg: 'bg-emerald-50', text: 'text-emerald-600', hoverShadow: 'hover:shadow-emerald-500/20', iconBg: 'bg-emerald-100' };
        case '南部': return { bg: 'bg-orange-50', text: 'text-orange-600', hoverShadow: 'hover:shadow-orange-500/20', iconBg: 'bg-orange-100' };
        case '東部': return { bg: 'bg-violet-50', text: 'text-violet-600', hoverShadow: 'hover:shadow-violet-500/20', iconBg: 'bg-violet-100' };
        default: return { bg: 'bg-slate-100', text: 'text-slate-600', hoverShadow: 'hover:shadow-slate-500/20', iconBg: 'bg-slate-200' };
    }
  };

  const theme = getCategoryTheme(link.category);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const now = new Date();
    if (now < TARGET_DATE) {
        e.preventDefault();
        setIsModalOpen(true);
    }
  };

  const handleConfirmRedirect = () => {
    setIsModalOpen(false);
    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
        <div className={`bg-white/80 backdrop-blur-sm rounded-[24px] p-1.5 border border-white/60 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] hover:shadow-2xl ${theme.hoverShadow} transition-all duration-300 hover:-translate-y-1.5 h-full flex flex-col group relative overflow-hidden`}>
            {/* Inner Content */}
            <div className="bg-white/50 rounded-[20px] p-6 flex-1 flex flex-col h-full border border-white/20">
                <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${theme.iconBg} ${theme.text} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <MapPin className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1.5 text-[11px] font-black rounded-full ${theme.bg} ${theme.text} uppercase tracking-wider border border-white/50`}>
                        {link.category}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors tracking-tight">
                {link.name}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2 font-medium">
                {link.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                {link.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold text-slate-400 bg-slate-100/80 px-2.5 py-1.5 rounded-lg border border-slate-200/50">
                    #{tag}
                    </span>
                ))}
                </div>
            </div>

            <div className="px-6 pb-4 pt-3">
                <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleClick}
                className="flex items-center justify-center w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all duration-300 gap-2 group/btn cursor-pointer shadow-lg shadow-slate-900/10 hover:shadow-indigo-500/30"
                >
                前往網站
                <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>

        <RedirectWarningModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={handleConfirmRedirect}
            siteName={link.name}
        />
    </>
  );
};