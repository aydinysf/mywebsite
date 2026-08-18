"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Bot, 
  TrendingUp, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Code2, 
  ShieldCheck, 
  Zap, 
  Send,
  Database,
  Search,
  Layers,
  Smartphone,
  Palette,
  X
} from 'lucide-react';

const colorMap: any = {
  orange: { bg: 'bg-orange-50', text: 'text-orange-500', border: 'border-orange-100', borderHover: 'hover:border-orange-200', badgeText: 'text-orange-600' },
  red: { bg: 'bg-red-50', text: 'text-red-500', border: 'border-red-100', borderHover: 'hover:border-red-200', badgeText: 'text-red-600' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-500', border: 'border-emerald-100', borderHover: 'hover:border-emerald-200', badgeText: 'text-emerald-600' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-500', border: 'border-yellow-100', borderHover: 'hover:border-yellow-200', badgeText: 'text-yellow-600' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-500', border: 'border-purple-100', borderHover: 'hover:border-purple-200', badgeText: 'text-purple-600' },
  cyan: { bg: 'bg-cyan-50', text: 'text-cyan-500', border: 'border-cyan-100', borderHover: 'hover:border-cyan-200', badgeText: 'text-cyan-600' },
};

const servicesData = [
  {
    id: 'software',
    title: 'Özel Yazılım & Sistem Entegrasyonu',
    shortTitle: 'Backend & API',
    desc: 'Yüksek hacimli e-ticaret siteleri, ERP/CRM köprüleri, dinamik sepet mantığı ve kesintisiz mikroservis mimarileri inşa ediyoruz.',
    icon: Terminal,
    color: 'orange',
    images: [
      '/mockups/software_mockup_1786913882562.jpg',
      '/mockups/ai_mockup_1786913891060.jpg',
      '/mockups/seo_mockup_1786913900832.jpg'
    ],
    takeaways: [
      'Sepet, stok ve ödeme akışı optimizasyonu',
      'Pazaryeri & Muhasebe API entegrasyonları',
      'Ölçeklenebilir Mikroservis (Backend) Mimarisi'
    ]
  },
  {
    id: 'ai',
    title: 'Yapay Zeka (AI) Entegrasyonları',
    shortTitle: 'LLM & RAG',
    desc: 'Şirketinizin kendi verilerine bağlı çalışan RAG destekli asistanlar, akıllı evrak okuma ve otomatik operasyon hatları.',
    icon: Bot,
    color: 'red',
    images: [
      '/mockups/ai_mockup_1786913891060.jpg',
      '/mockups/software_mockup_1786913882562.jpg',
      '/mockups/geo_mockup_1786913911717.jpg'
    ],
    takeaways: [
      'PDF/Fatura okuma ve veri işleme botları',
      '7/24 Müşteri ve e-ticaret satış ajanları',
      'Kurumsal verilerinizle (RAG) beslenen özel AI modelleri'
    ]
  },
  {
    id: 'seo',
    title: 'Teknik SEO & Programatik Büyüme',
    shortTitle: 'Core Web Vitals',
    desc: 'Kod seviyesinde hız optimizasyonu, hatasız şema yapılandırması ve AI ile otomatik üretilen binlerce dinamik açılış sayfası.',
    icon: TrendingUp,
    color: 'emerald',
    images: [
      '/mockups/seo_mockup_1786913900832.jpg',
      '/mockups/geo_mockup_1786913911717.jpg',
      '/mockups/software_mockup_1786913882562.jpg'
    ],
    takeaways: [
      'Programatik SEO ve landing page motoru',
      'Schema.org (JSON-LD) anlamsal veri mimarisi',
      '100/100 Core Web Vitals (Hız Skoru) Garantisi'
    ]
  },
  {
    id: 'geo',
    title: 'GEO (Generative Engine Optimization)',
    shortTitle: 'Next-Gen Search',
    desc: 'ChatGPT, Perplexity ve Gemini gibi AI motorlarının verinizi doğrudan okuyup kullanıcılara marka referansı vermesini sağlıyoruz.',
    icon: Cpu,
    color: 'yellow',
    images: [
      '/mockups/geo_mockup_1786913911717.jpg',
      '/mockups/seo_mockup_1786913900832.jpg',
      '/mockups/ai_mockup_1786913891060.jpg'
    ],
    takeaways: [
      'llms.txt ve AI tarayıcı uyumluluğu',
      'Bilgi grafiği (Entity & Graph) otorite kurulumu',
      'LLM sorgularında marka referansı olma stratejisi'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobil Uygulama Geliştirme',
    shortTitle: 'iOS & Android',
    desc: 'Kullanıcı dostu, yüksek performanslı ve donanım özelliklerini tam kullanan Native ve Cross-Platform (React Native / Flutter) uygulamalar.',
    icon: Smartphone,
    color: 'purple',
    images: [
      '/mockups/mobile_mockup_1786913922105.jpg',
      '/mockups/ui_ux_mockup_1786913931387.jpg',
      '/mockups/software_mockup_1786913882562.jpg'
    ],
    takeaways: [
      'B2B ve B2C e-ticaret uygulamaları',
      'Push bildirim ve donanım entegrasyonu',
      'React Native ve Flutter teknolojileri ile kesintisiz deneyim'
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Tasarım Hizmeti',
    shortTitle: 'User Experience',
    desc: 'Kullanıcı psikolojisini merkeze alan, dönüşüm oranlarını artıran estetik ve modern arayüz (UI) ve deneyim (UX) tasarımları.',
    icon: Palette,
    color: 'cyan',
    images: [
      '/mockups/ui_ux_mockup_1786913931387.jpg',
      '/mockups/mobile_mockup_1786913922105.jpg',
      '/mockups/seo_mockup_1786913900832.jpg'
    ],
    takeaways: [
      'Wireframe, prototipleme ve A/B testleri',
      'Marka kurumsal kimliğine uygun sistem tasarımı',
      'Dönüşüm Odaklı (Conversion Rate) kullanıcı yolculukları'
    ]
  }
];

export default function FullLandingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', service: 'software', message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Modal State
  const [activeModal, setActiveModal] = useState<any>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (activeModal) {
      setActiveImageIndex(0);
    }
  }, [activeModal]);

  // Handle ESC to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Mail gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Sistem hatası. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-[#F4F8FD] text-slate-900 selection:bg-red-500 selection:text-white font-sans antialiased ${activeModal ? 'overflow-hidden h-screen' : ''}`}>
      
      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer" 
            onClick={() => setActiveModal(null)}
          />
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-700 hover:bg-white hover:scale-110 shadow-sm transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-slate-100 relative overflow-hidden group/slider">
              <img 
                src={activeModal.images[activeImageIndex]} 
                alt={activeModal.title} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              
              {/* Slider Controls */}
              {activeModal.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => prev === 0 ? activeModal.images.length - 1 : prev - 1); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => prev === activeModal.images.length - 1 ? 0 : prev + 1); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/slider:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
                    {activeModal.images.map((_: any, idx: number) => (
                      <div 
                        key={idx} 
                        className={`h-1.5 rounded-full transition-all ${idx === activeImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              )}

              <div className="absolute bottom-6 left-6 right-6">
                <span className={`inline-block px-3 py-1 text-xs font-black uppercase tracking-wider bg-white rounded-md mb-2 text-slate-900 shadow-sm pointer-events-none`}>
                  {activeModal.shortTitle}
                </span>
              </div>
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl font-black text-slate-900 mb-4">{activeModal.title}</h2>
              <p className="text-slate-600 font-medium leading-relaxed mb-8">
                {activeModal.desc}
              </p>
              
              <div className="space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Hap Bilgiler (Neler Sağlıyoruz?)</h4>
                <ul className="space-y-3">
                  {activeModal.takeaways.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${colorMap[activeModal.color].text}`} />
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a 
                  href="#contact" 
                  onClick={() => setActiveModal(null)}
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold bg-slate-900 hover:bg-slate-800 transition-colors shadow-sm`}
                >
                  Bu Hizmet İçin Toplantı Planla <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-orange-400/20 via-red-400/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 1. Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-slate-900">
            <img src="/ezgisellogo.png" alt="Ezgisel Yazılım" className="h-24 md:h-32 w-auto object-contain" />
          </div>

          <nav className="hidden md:flex items-center gap-3">
            <a href="#services" className="px-5 py-2.5 rounded-full bg-slate-100/80 text-slate-700 text-base font-bold border border-transparent hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300">Hizmetler</a>
            <Link href="/odoo-erp" className="px-5 py-2.5 rounded-full bg-indigo-50 text-indigo-600 text-base font-bold border border-indigo-200 hover:bg-indigo-100 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(79,70,229,0.2)] transition-all duration-300">Odoo & ERP</Link>
            <a href="#cases" className="px-5 py-2.5 rounded-full bg-slate-100/80 text-slate-700 text-base font-bold border border-transparent hover:bg-red-50 hover:text-red-600 hover:border-red-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-300">Vaka Analizleri</a>
            <a href="#methodology" className="px-5 py-2.5 rounded-full bg-slate-100/80 text-slate-700 text-base font-bold border border-transparent hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300">Çalışma Modeli</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-slate-100/80 text-slate-700 text-base font-bold border border-transparent hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300">İletişim</a>
          </nav>

          <a 
            href="#contact" 
            className="px-6 py-2.5 text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-full border border-slate-700 shadow-sm transition-all hover:shadow-md"
          >
            Toplantı Planla
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-200 bg-orange-50 text-orange-700 text-xs font-bold mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
          Yazılım Mimarisi • AI Entegrasyonu • SEO & GEO
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          İşinizi Modern Yazılım, Yapay Zeka ve <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#E73142] via-[#F18833] to-yellow-500 bg-clip-text text-transparent">
            GEO ile Geleceğe Taşıyın
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          E-ticaret ve B2B altyapılarınızı ölçeklenebilir backend sistemleriyle güçlendiriyor; 
          özel AI ajanları, teknik SEO ve yapay zeka arama motoru optimizasyonu (GEO) ile trafiğinizi ve operasyonel kârınızı artırıyoruz.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E73142] to-[#F18833] hover:from-[#d62b3a] hover:to-[#e07722] text-white font-bold shadow-lg shadow-orange-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            Ücretsiz Keşif Seansı Al <ArrowRight className="w-4 h-4"/>
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-bold border border-slate-200 shadow-sm transition-all hover:scale-105"
          >
            Hizmet Paketleri ↓
          </a>
        </div>
      </section>

      {/* 3. Metrics / Proof */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-y border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-white/50">
        <div>
          <div className="text-3xl font-black text-slate-900 font-mono">%70+</div>
          <div className="text-xs text-slate-500 mt-1 font-bold">Operasyonel Süreç Tasarrufu</div>
        </div>
        <div>
          <div className="text-3xl font-black text-[#F18833] font-mono">99.9%</div>
          <div className="text-xs text-slate-500 mt-1 font-bold">API & Sistem Erişilebilirliği</div>
        </div>
        <div>
          <div className="text-3xl font-black text-[#E73142] font-mono">100/100</div>
          <div className="text-xs text-slate-500 mt-1 font-bold">Teknik SEO & Hız Skoru</div>
        </div>
        <div>
          <div className="text-3xl font-black text-emerald-500 font-mono">Top #3</div>
          <div className="text-xs text-slate-500 mt-1 font-bold">Perplexity & ChatGPT Görünürlüğü</div>
        </div>
      </section>

      {/* 4. Services Grid (4 Pillars) */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Uzmanlık Alanlarımız</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">Mühendislik temelli yazılım çözümleri ve yeni nesil yapay zeka stratejileri.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id}
              onClick={() => setActiveModal(service)}
              className={`p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 ${colorMap[service.color].borderHover} transition-all duration-300 group cursor-pointer flex flex-col h-full`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3.5 rounded-2xl ${colorMap[service.color].bg} ${colorMap[service.color].border} ${colorMap[service.color].text} group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 h-6"/>
                </div>
                <span className={`text-xs font-bold font-mono ${colorMap[service.color].badgeText} px-3 py-1.5 rounded-full ${colorMap[service.color].bg} ${colorMap[service.color].border}`}>
                  {service.shortTitle}
                </span>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium flex-grow">
                {service.desc}
              </p>
              <div className={`inline-flex items-center font-bold text-sm ${colorMap[service.color].text} mt-auto`}>
                Detayları İncele <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"/>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Case Studies (Vaka Analizleri) */}
      <section id="cases" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Örnek Başarı Senaryoları</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">Müşterilerimize sağladığımız ölçülebilir teknik çıktılar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold font-mono text-orange-500 bg-orange-50 px-2.5 py-1 rounded-md">E-Ticaret Entegrasyonu</span>
            <h4 className="text-lg font-black text-slate-900 mt-4 mb-3">Sepet & ERP Senkronizasyonu</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              Özel sepet mimarisi ve ERP entegrasyonu ile sipariş işleme süresi %80 kısaltıldı, anlık stok sapmaları sıfırlandı.
            </p>
            <div className="text-sm font-black text-orange-600 font-mono">+%35 Dönüşüm Oranı</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold font-mono text-red-500 bg-red-50 px-2.5 py-1 rounded-md">AI Otomasyonu</span>
            <h4 className="text-lg font-black text-slate-900 mt-4 mb-3">RAG Destekli Destek Ajanı</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              Kurumsal dokümanlara bağlı AI botu ile müşteri destek taleplerinin %65'i insan müdahalesi olmadan çözüldü.
            </p>
            <div className="text-sm font-black text-red-600 font-mono">7/24 Kesintisiz Yanıt</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">GEO Stratejisi</span>
            <h4 className="text-lg font-black text-slate-900 mt-4 mb-3">AI Arama Görünürlüğü</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4 font-medium">
              llms.txt ve semantik şema kurulumu sayesinde marka, Perplexity ve ChatGPT B2B sorgularında birincil öneri haline getirildi.
            </p>
            <div className="text-sm font-black text-emerald-600 font-mono">4.2x AI Trafiği</div>
          </div>
        </div>
      </section>

      {/* 6. Contact & Meeting Booking Form */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 border-t border-slate-200">
        <div className="p-8 sm:p-12 rounded-[2rem] bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-10 relative z-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Projenizi Birlikte İnşa Edelim</h2>
            <p className="mt-3 text-slate-600 text-sm font-medium">
              Mevcut altyapınızı, AI fırsatlarınızı ve SEO/GEO performansınızı konuşacağımız ücretsiz 20 dakikalık keşif görüşmesi planlayın.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-center relative z-10">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4"/>
              <h4 className="text-xl font-black text-slate-900">Talebiniz Alındı!</h4>
              <p className="text-sm text-slate-600 mt-2 font-bold">En geç 24 saat içinde e-posta adresiniz üzerinden toplantı takvimiyle dönüş yapacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto relative z-10">
              <div>
                <label className="block text-sm font-black text-slate-700 mb-1.5">Ad Soyad</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ahmet Yılmaz"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm font-medium transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700 mb-1.5">Şirket E-postası</label>
                <input 
                  type="email" 
                  required
                  placeholder="ahmet@sirketiniz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm font-medium transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700 mb-1.5">İlgilendiğiniz Hizmet Alanı</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer font-bold"
                >
                  <option value="software">Özel Yazılım & Sistem Entegrasyonu</option>
                  <option value="odoo">Odoo & ERP Entegrasyonları</option>
                  <option value="mobile">Mobil Uygulama Geliştirme</option>
                  <option value="ai">Yapay Zeka (AI) Otomasyonları</option>
                  <option value="seo-geo">Teknik SEO & GEO (AI Görünürlüğü)</option>
                  <option value="design">UI/UX Tasarım Hizmetleri</option>
                  <option value="full">Uçtan Uca Büyüme & Teknoloji Paketi</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-black text-slate-700 mb-1.5">Mesajınız / Mevcut Probleminiz</label>
                <textarea 
                  rows={3}
                  placeholder="Mevcut sistemlerimiz ve entegrasyon ihtiyaçlarımız hakkında..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm font-medium transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting} 
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-[#E73142] to-[#F18833] hover:from-[#d62b3a] hover:to-[#e07722] text-white font-black text-lg transition-all shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Ücretsiz Keşif Talebi Gönder'} <Send className="w-5 h-5"/>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-sm font-bold text-slate-500 gap-4 bg-[#F4F8FD]">
        <div>© {new Date().getFullYear()} Ezgisel Yazılım. Resmi faturalı ve sözleşmeli hizmet.</div>
        <div className="flex gap-6 font-mono text-xs font-black">
          <a href="/llms.txt" className="hover:text-orange-500 transition-colors">/llms.txt</a>
          <a href="/sitemap.xml" className="hover:text-orange-500 transition-colors">/sitemap.xml</a>
          <a href="/robots.txt" className="hover:text-orange-500 transition-colors">/robots.txt</a>
        </div>
      </footer>

    </div>
  );
}
