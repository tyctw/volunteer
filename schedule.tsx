import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowLeft, ArrowRight, Award, BarChart3, CalendarDays, CheckCircle2, Clock3, ExternalLink, FileText, GraduationCap, Mail, PenLine } from 'lucide-react';

const scheduleItems = [
  { month: '03', date: '03.05 — 03.07', weekday: '週四至週六', title: '國中教育會考報名', description: '完成報名與相關資料確認。', icon: FileText, tone: 'indigo' },
  { month: '04', date: '04.10', weekday: '週五', title: '寄發准考證', description: '確認應試資訊與考場安排。', icon: Mail, tone: 'sky' },
  { month: '05', date: '05.16 — 05.17', weekday: '週六、週日', title: '國中教育會考', description: '掌握考場與各科應試時間。', icon: PenLine, tone: 'orange', key: true },
  { month: '06', date: '06.05', weekday: '週五', title: '會考成績公布', description: '查詢成績，整理後續選填所需資料。', icon: Award, tone: 'violet' },
  { month: '06', date: '06.18', weekday: '週四', title: '個人序位區間公告／查詢', description: '了解自己在就學區的相對位置。', icon: BarChart3, tone: 'emerald', key: true },
  { month: '06', date: '06.18 — 06.25', weekday: '週四至週四', title: '免試入學志願選填', description: '依各就學區規定完成志願選填。', icon: CalendarDays, tone: 'rose', key: true },
  { month: '07', date: '07.07', weekday: '週二', title: '免試入學放榜', description: '依公告方式查詢錄取結果。', icon: CheckCircle2, tone: 'slate' },
];

const months = [
  { id: '03', name: '三月', note: '開始準備' },
  { id: '04', name: '四月', note: '確認應試' },
  { id: '05', name: '五月', note: '正式會考' },
  { id: '06', name: '六月', note: '成績與選填' },
  { id: '07', name: '七月', note: '錄取結果' },
];

const tones: Record<string, string> = {
  indigo: 'bg-indigo-50 text-indigo-600 ring-indigo-100', sky: 'bg-sky-50 text-sky-600 ring-sky-100', orange: 'bg-orange-50 text-orange-600 ring-orange-100', violet: 'bg-violet-50 text-violet-600 ring-violet-100', emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100', rose: 'bg-rose-50 text-rose-600 ring-rose-100', slate: 'bg-slate-100 text-slate-600 ring-slate-200',
};

function EventCard({ item, compact = false }: { item: typeof scheduleItems[number]; compact?: boolean }) {
  const Icon = item.icon;
  return <article className={`relative rounded-2xl border p-4 transition hover:-translate-y-0.5 hover:shadow-lg ${item.key ? 'border-orange-200 bg-gradient-to-br from-white to-orange-50/70 shadow-sm' : 'border-slate-100 bg-white shadow-sm'} ${compact ? '' : 'sm:p-5'}`}>
    {item.key && <span className="absolute right-3 top-3 rounded-full bg-orange-100 px-2 py-0.5 text-[9px] font-black tracking-wide text-orange-700">重點</span>}
    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ring-1 ${tones[item.tone]}`}><Icon className="h-4 w-4" /></span>
    <time className="mt-4 block text-sm font-black tracking-tight text-slate-900">{item.date}</time>
    <p className="mt-0.5 text-[11px] font-bold text-slate-400">{item.weekday}</p>
    <h3 className="mt-3 text-sm font-black leading-6 text-slate-800">{item.title}</h3>
    <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{item.description}</p>
  </article>;
}

function SchedulePage() {
  return <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-800 selection:bg-orange-500 selection:text-white">
    <div className="fixed inset-0 -z-10 overflow-hidden"><div className="absolute -left-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-orange-200/35 blur-3xl" /><div className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-amber-100/60 blur-3xl" /><div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b0a_1px,transparent_1px),linear-gradient(to_bottom,#64748b0a_1px,transparent_1px)] bg-[size:28px_28px]" /></div>

    <nav className="sticky top-0 z-20 px-4 pt-4 sm:px-6"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/80 bg-white/80 px-5 shadow-sm backdrop-blur-xl sm:px-6"><a href="./" className="group flex items-center gap-3" aria-label="回到首頁"><span className="rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 p-2 text-white shadow-lg shadow-orange-500/25"><GraduationCap className="h-5 w-5" /></span><span className="hidden font-bold tracking-tight text-slate-800 sm:inline">教育會考志願選填資訊</span></a><a href="./" className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-orange-50 hover:text-orange-700"><ArrowLeft className="h-4 w-4" />回首頁</a></div></nav>

    <main className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-900 px-7 py-10 text-white shadow-[0_25px_70px_-35px_rgba(15,23,42,.7)] sm:px-12 sm:py-14"><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.3)_1px,transparent_1px)] [background-size:26px_26px]" /><div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-400/40 blur-3xl" /><div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-3xl"><p className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-400/10 px-3 py-1.5 text-xs font-black tracking-[0.12em] text-orange-200"><Clock3 className="h-3.5 w-3.5" />116 學年度</p><h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">重要日程，一眼掌握</h1><p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">從報名、會考到志願選填與放榜，依時間順序整理每個關鍵節點，幫你從容安排下一步。</p></div><div className="flex gap-2"><span className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center backdrop-blur"><b className="block text-xl">03 — 07</b><small className="mt-1 block text-xs font-bold text-slate-300">月度進程</small></span><a href="#planner" className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:bg-orange-50">查看日程 <ArrowRight className="h-4 w-4" /></a></div></div></section>

      <section id="planner" className="scroll-mt-24 py-14"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm font-black tracking-[0.12em] text-orange-600">SCHEDULE PLANNER</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">學年度關鍵節點</h2></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-100 bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm"><CalendarDays className="h-4 w-4 text-orange-500" />民國 116 年</span></div>

        <div className="hidden overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_50px_-35px_rgba(15,23,42,.35)] lg:block"><div className="grid grid-cols-5 border-b border-slate-100 bg-slate-50/70">{months.map((month, index) => <div key={month.id} className={`relative px-5 py-5 ${index !== 0 ? 'border-l border-slate-100' : ''}`}><span className="text-3xl font-black tracking-tighter text-slate-200">{month.id}</span><p className="mt-1 text-lg font-black text-slate-800">{month.name}</p><p className="mt-1 text-xs font-bold text-slate-400">{month.note}</p>{index < months.length - 1 && <span className="absolute -right-2 top-8 z-10 h-4 w-4 rounded-full border-4 border-white bg-orange-300" />}</div>)}</div><div className="grid min-h-[25rem] grid-cols-5">{months.map((month, index) => <div key={month.id} className={`p-4 ${index !== 0 ? 'border-l border-slate-100' : ''}`}><div className="space-y-3">{scheduleItems.filter(item => item.month === month.id).map(item => <EventCard key={item.title} item={item} compact />)}</div></div>)}</div></div>

        <div className="relative mx-auto max-w-4xl lg:hidden"><div className="absolute bottom-7 left-[1.7rem] top-7 w-px bg-gradient-to-b from-indigo-100 via-orange-200 to-slate-200" /><div className="space-y-5">{scheduleItems.map(item => <div key={item.title} className="relative grid grid-cols-[3.4rem_1fr] gap-4"><div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${tones[item.tone]}`}><item.icon className="h-6 w-6" /></div><EventCard item={item} /></div>)}</div></div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]"><div className="rounded-[1.75rem] border border-amber-100 bg-amber-50/80 p-6 sm:p-8"><p className="text-sm font-black tracking-[0.12em] text-amber-700">提醒</p><h2 className="mt-3 text-2xl font-black text-slate-900">日期請以正式公告為準</h2><p className="mt-3 max-w-2xl text-sm font-medium leading-7 text-slate-600">本頁協助掌握整體節奏；實際報名、選填、錄取與報到規定，請依國中教育會考全國試務會及各就學區免試入學委員會最新公告辦理。</p><a href="https://cap.rcpet.edu.tw/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:text-orange-700"><ExternalLink className="h-4 w-4" />前往國中教育會考官網</a></div><a href="mailto:tyctw.analyze@gmail.com" className="group rounded-[1.75rem] bg-gradient-to-br from-orange-500 to-rose-500 p-6 text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 sm:p-8"><Mail className="h-6 w-6 text-orange-100" /><p className="mt-8 text-sm font-bold text-orange-100">有日程上的疑問？</p><p className="mt-2 text-xl font-black">聯絡我們</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">寄送信件 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></a></section>
    </main>
  </div>;
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><SchedulePage /></React.StrictMode>);
