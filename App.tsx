import React, { useState, useMemo, useEffect } from 'react';
import { Search, GraduationCap, Map, BookOpen, ExternalLink, HelpCircle, Calendar, Clock, Share2, BarChart3, Menu, X, Users, Mail, ArrowRight, Sparkles, QrCode } from 'lucide-react';
import { PORTAL_DATA } from './constants';
import { RegionCategory } from './types';
import { LinkCard } from './components/LinkCard';
import { ScheduleModal } from './components/ScheduleModal';
import { CountdownTimer } from './components/CountdownTimer';
import { InfoModal } from './components/InfoModal';
import { PromotionModal } from './components/PromotionModal';
import { ShareModal } from './components/ShareModal';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<RegionCategory | 'ALL'>('ALL');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Trigger Promotion Modal on load
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsPromoModalOpen(true);
    }, 1500); // Show after 1.5 seconds for better UX
    return () => clearTimeout(timer);
  }, []);

  const categories = ['ALL', ...Object.values(RegionCategory)];

  const filteredLinks = useMemo(() => {
    return PORTAL_DATA.filter((link) => {
      const matchesSearch = 
        link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.tags.some(tag => tag.includes(searchTerm));
      
      const matchesCategory = selectedCategory === 'ALL' || link.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col relative bg-slate-50 selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      
      {/* Aurora Background Effects */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Navbar - Floating Glass */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] rounded-2xl h-16 px-6 flex items-center justify-between pointer-events-auto transition-all duration-300">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight">全國會考入口網</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 text-sm font-semibold text-slate-500 mr-2">
              <button onClick={() => setIsInfoModalOpen(true)} className="hover:text-indigo-600 transition-colors px-3 py-2 rounded-lg hover:bg-white/50">使用說明</button>
              <a href="https://cap.rcpet.edu.tw/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-white/50">
                會考官網 <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <button 
                onClick={() => setIsShareModalOpen(true)}
                className="p-2.5 text-slate-500 hover:bg-white hover:text-indigo-600 rounded-xl transition-all shadow-sm border border-transparent hover:border-slate-200 hover:shadow-md hidden md:flex items-center justify-center"
                title="分享網站"
            >
                <QrCode className="w-5 h-5" />
            </button>

            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2.5 text-slate-600 hover:bg-white hover:text-indigo-600 rounded-xl transition-all shadow-sm border border-transparent hover:border-slate-200 hover:shadow-md"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onClick={() => setIsDrawerOpen(false)} />
          <div className="relative w-80 bg-white/90 backdrop-blur-2xl h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300 border-l border-white/50">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-xl font-bold text-slate-800">更多資源</h2>
               <button onClick={() => setIsDrawerOpen(false)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
                 <X className="w-6 h-6" />
               </button>
             </div>
             
             <div className="space-y-3 flex-1 overflow-y-auto">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">分析與分享</div>
               <DrawerLink href="https://rcpett.vercel.app/" icon={<BarChart3 className="w-5 h-5" />} label="會考落點分析" color="text-violet-600" bg="bg-violet-50" />
               <DrawerLink href="https://tyctw.github.io/score/" icon={<Share2 className="w-5 h-5" />} label="會考序位分享" color="text-emerald-600" bg="bg-emerald-50" />
               <DrawerLink href="https://tyctw.github.io/shared/" icon={<Users className="w-5 h-5" />} label="會考錄取分享" color="text-orange-600" bg="bg-orange-50" />

               <div className="h-px bg-slate-200/50 my-6" />
               
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">常用連結</div>
               <DrawerLink 
                    href="#" 
                    onClick={(e: React.MouseEvent) => { e.preventDefault(); setIsShareModalOpen(true); setIsDrawerOpen(false); }}
                    icon={<QrCode className="w-5 h-5" />} 
                    label="分享本網站" 
                    color="text-indigo-600" 
                    bg="bg-indigo-50"
               />
               <DrawerLink href="https://cap.rcpet.edu.tw/" icon={<ExternalLink className="w-5 h-5" />} label="國中會考官網" />
               <button 
                onClick={() => { setIsInfoModalOpen(true); setIsDrawerOpen(false); }}
                className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 text-slate-600 font-bold transition-all group w-full text-left"
               >
                 <div className="p-2.5 rounded-xl bg-slate-50 text-slate-400 group-hover:scale-110 transition-transform shadow-sm">
                    <HelpCircle className="w-5 h-5" />
                 </div>
                 <span className="group-hover:text-slate-900 transition-colors">使用說明與QA</span>
               </button>
             </div>
             
             <div className="mt-auto pt-6 border-t border-slate-100 text-center">
               <a href="mailto:tyctw.analyze@gmail.com" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors p-3 bg-slate-50 rounded-xl w-full justify-center hover:bg-indigo-50">
                  <Mail className="w-4 h-4" /> 聯繫我們
               </a>
               <p className="text-xs text-slate-400 mt-4 font-medium">© {new Date().getFullYear()} 全國會考入口網整合平台</p>
             </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <ScheduleModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
      <InfoModal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} />
      <PromotionModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 overflow-visible">
        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          {/* Notification Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-bold mb-10 animate-fade-in-up shadow-sm hover:bg-indigo-100 transition-colors cursor-default select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            115 學年度升學資訊同步更新中
          </div>

          {/* Main Title */}
          <div className="relative mb-10">
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[1.1]">
                  免試入學
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 pb-2">
                      & 志願選填
                  </span>
                  <span className="relative inline-block text-slate-800">
                      查詢網址
                      {/* Decorative underline */}
                      <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-indigo-400 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                      </svg>
                  </span>
              </h1>
              
              {/* Decorative elements behind title */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
            彙整全國各就學區<span className="text-indigo-600 font-bold mx-1">志願選填</span>、<span className="text-indigo-600 font-bold mx-1">序位查詢</span>及<span className="text-indigo-600 font-bold mx-1">放榜查詢</span>連結。<br className="hidden md:block"/>
            快速找到您的考區，掌握升學關鍵時刻。
          </p>
          
          {/* Search Box Container */}
          <div className="w-full max-w-2xl relative group z-20">
             <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] opacity-30 blur group-hover:opacity-50 transition duration-500"></div>
             <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-16 pr-6 py-5 bg-white text-slate-800 rounded-[1.7rem] shadow-xl border-0 ring-1 ring-slate-200 focus:ring-2 focus:ring-indigo-500 transition-all text-lg placeholder:text-slate-400 font-medium"
                  placeholder="搜尋區域（如：台北、高雄、花蓮...）"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>
          
          <div className="mt-16 w-full">
            <CountdownTimer />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        
        {/* Important Dates Ticker Card */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-sm border border-white/60 p-1.5 mb-16 relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="bg-gradient-to-r from-white to-orange-50/50 rounded-2xl border border-orange-100/50 flex flex-col md:flex-row items-center justify-between p-5 md:px-8 gap-6">
                <div className="flex items-center gap-5 w-full md:w-auto">
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 p-3.5 rounded-2xl text-white shadow-lg shadow-orange-500/30 shrink-0">
                        <Calendar className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1.5">
                            <h3 className="font-bold text-slate-800 text-lg">重要日程快訊</h3>
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-md shadow-red-500/20">HOT</span>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
                            <span className="flex items-center gap-1.5 bg-white/60 px-2 py-1 rounded-md border border-white"><Clock className="w-3.5 h-3.5 text-orange-500" /> 個人序位：115/06/18</span>
                            <span className="flex items-center gap-1.5 bg-white/60 px-2 py-1 rounded-md border border-white"><BookOpen className="w-3.5 h-3.5 text-blue-500" /> 志願選填：115/06/18(四) - 115/06/25(四)</span>
                        </div>
                    </div>
                </div>
                <button 
                    onClick={() => setIsScheduleModalOpen(true)}
                    className="w-full md:w-auto px-6 py-3.5 bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                >
                    查看完整時程
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>

        {/* Resources Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ResourceCard 
                href="https://tyctw.github.io/score/"
                icon={<Share2 className="w-7 h-7" />}
                title="會考序位分享"
                desc="匿名分享會考成績與序位，協助建立大數據，造福學弟妹。"
                fromColor="from-emerald-400"
                toColor="to-teal-500"
                shadowColor="shadow-emerald-500/30"
            />
            <ResourceCard 
                href="https://rcpett.vercel.app/"
                icon={<BarChart3 className="w-7 h-7" />}
                title="會考落點分析"
                desc="輸入成績，運用歷年大數據進行精準預測與志願建議。"
                fromColor="from-violet-400"
                toColor="to-purple-500"
                shadowColor="shadow-purple-500/30"
            />
            <ResourceCard 
                href="https://tyctw.github.io/shared/"
                icon={<Users className="w-7 h-7" />}
                title="會考錄取分享"
                desc="查詢歷年學長姐的實際錄取分數與志願序參考。"
                fromColor="from-orange-400"
                toColor="to-amber-500"
                shadowColor="shadow-orange-500/30"
            />
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center mb-12 space-y-5">
            <h3 className="text-slate-400 text-xs font-black uppercase tracking-[0.25em] bg-white/50 px-4 py-1 rounded-full border border-white">選擇考區 Select Region</h3>
            <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
                <button
                key={cat}
                onClick={() => setSelectedCategory(cat as RegionCategory | 'ALL')}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 backdrop-blur-sm ${
                    selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105'
                    : 'bg-white/60 text-slate-600 hover:bg-white hover:text-indigo-600 border border-white/60 shadow-sm hover:shadow-md'
                }`}
                >
                {cat === 'ALL' ? '全部' : cat}
                </button>
            ))}
            </div>
        </div>

        {/* Links Grid */}
        <div className="space-y-8">
            <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-8 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/30"></div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                        {selectedCategory === 'ALL' ? '所有區域' : `${selectedCategory}區域`}列表
                    </h2>
                </div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
                    {filteredLinks.length} results
                </span>
            </div>

            {filteredLinks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
                ))}
            </div>
            ) : (
            <div className="flex flex-col items-center justify-center py-24 bg-white/60 backdrop-blur-md rounded-3xl border border-dashed border-slate-300">
                <div className="bg-slate-100 p-5 rounded-full mb-4">
                    <Search className="w-10 h-10 text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-800">找不到相關區域</h3>
                <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('ALL');}}
                    className="mt-4 text-indigo-600 font-bold hover:underline text-sm"
                >
                    清除搜尋條件
                </button>
            </div>
            )}
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-lg border-t border-slate-200 py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-8 text-slate-800 font-bold text-2xl tracking-tight">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-1.5 rounded-lg shadow-lg shadow-indigo-500/20">
                    <GraduationCap className="w-6 h-6" />
                </div>
                全國會考入口網
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm font-bold text-slate-500">
                <button onClick={() => setIsInfoModalOpen(true)} className="hover:text-indigo-600 transition-colors">使用說明</button>
                <a href="https://cap.rcpet.edu.tw/" target="_blank" className="hover:text-indigo-600 transition-colors">官方網站</a>
                <a href="mailto:tyctw.analyze@gmail.com" className="hover:text-indigo-600 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    tyctw.analyze@gmail.com
                </a>
            </div>

            <p className="text-slate-400 text-xs max-w-lg mx-auto leading-relaxed mb-6 font-medium">
                本網站僅提供連結彙整，實際日程與規定請以國中教育會考全國試務會及各就學區免試入學委員會公告為準。
            </p>
            
            <p className="text-xs text-slate-400 font-semibold">
                © {new Date().getFullYear()} TYCTW會考落點分析版權所有
            </p>
        </div>
      </footer>
    </div>
  );
};

// Sub-components for cleaner code
const DrawerLink = ({ href, onClick, icon, label, color = "text-slate-400", bg = "bg-slate-50" }: any) => (
  <a 
    href={href} 
    onClick={onClick}
    target={href.startsWith('http') ? "_blank" : "_self"}
    rel={href.startsWith('http') ? "noopener noreferrer" : ""}
    className="flex items-center gap-4 p-3.5 rounded-2xl hover:bg-slate-50 text-slate-600 font-bold transition-all group"
  >
    <div className={`p-2.5 rounded-xl ${bg} ${color} group-hover:scale-110 transition-transform shadow-sm`}>
        {icon}
    </div>
    <span className="group-hover:text-slate-900 transition-colors">{label}</span>
  </a>
);

const ResourceCard = ({ href, icon, title, desc, fromColor, toColor, shadowColor }: any) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:${shadowColor} hover:-translate-y-2 transition-all duration-300 flex flex-col h-full overflow-hidden`}>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${fromColor} ${toColor} rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -mr-10 -mt-10`}></div>
      
      <div className={`w-16 h-16 bg-gradient-to-br ${fromColor} ${toColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg text-white relative z-10`}>
          {icon}
      </div>
      <h3 className="font-bold text-xl text-slate-800 mb-3 relative z-10">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 relative z-10 font-medium">{desc}</p>
      <div className={`flex items-center text-slate-800 text-sm font-black mt-auto relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${fromColor} ${toColor} transition-all`}>
          立即前往 <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform text-current" />
      </div>
  </a>
);

export default App;