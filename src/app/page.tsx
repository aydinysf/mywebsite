'use client';

import React, { useState } from 'react';
import { Database, Smartphone, Bot, Cpu, ArrowRight, CheckCircle2, ChevronRight, Mail, Server, Shield, Zap, Globe, HardDrive } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Odoo ERP',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#090A0F] text-slate-300 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* 1. Header (Sticky / Glassmorphism) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#090A0F]/80 backdrop-blur-md border-b border-[#1E2333]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Ezgisel Logo" className="w-9 h-9 rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)] object-cover" />
            <span className="text-xl font-bold tracking-tight text-white">
              EZGİSEL<span className="text-indigo-400">.TECH</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors">Hizmetler</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Vaka Analizleri</a>
            <a href="#products" className="hover:text-white transition-colors">Ürünlerimiz</a>
            <a href="#contact" className="hover:text-white transition-colors">İletişim</a>
          </nav>
          <a href="#contact" className="hidden md:flex items-center justify-center px-5 py-2.5 bg-[#12151F] hover:bg-[#1E2333] border border-[#1E2333] hover:border-indigo-500/50 text-white text-sm font-medium rounded-lg transition-all">
            Toplantı Planla
          </a>
        </div>
      </header>

      {/* 2. Hero Bölümü */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12151F] border border-[#1E2333] text-xs font-medium text-indigo-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Odoo ERP & Kurumsal Teknoloji Mimarisi
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
            İşletmenizi Odoo ERP, Saha Mobil Çözümleri ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Yapay Zeka</span> ile Büyütün.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Tüm muhasebe, stok, satış ve saha operasyonlarınızı Odoo ERP omurgasında birleştiriyor; özel mobil uygulamalar, AI otomasyonları ve GEO (Yapay Zeka Görünürlüğü) ile ölçeklendiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
              Ücretsiz Keşif & Analiz Planla <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-[#12151F] hover:bg-[#1E2333] border border-[#1E2333] text-white text-sm font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
              Hizmetleri İncele ↓
            </a>
          </div>
        </div>
      </section>

      {/* 3. Metrikler & Sayısal Göstergeler */}
      <section className="py-12 border-y border-[#1E2333] bg-[#0C0E14] relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#1E2333]/50">
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-3xl font-bold text-white font-mono mb-2">%75</span>
            <span className="text-sm text-slate-500 font-medium">Operasyonel Süreç Hızı</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-3xl font-bold text-white font-mono mb-2">99.9%</span>
            <span className="text-sm text-slate-500 font-medium">Sistem Erişilebilirliği</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-3xl font-bold text-white font-mono mb-2">100/100</span>
            <span className="text-sm text-slate-500 font-medium">Core Web Vitals</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-3xl font-bold text-white font-mono mb-2">360°</span>
            <span className="text-sm text-slate-500 font-medium">Tam Entegre ERP & Mobil</span>
          </div>
        </div>
      </section>

      {/* 4. Hizmet Sütunları */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Core Architecture & Services</h2>
            <p className="text-slate-400 max-w-2xl">Modern işletmeler için uçtan uca tasarlanmış teknik servis katmanlarımız.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group bg-[#12151F] border border-[#1E2333] hover:border-indigo-500/50 p-8 rounded-2xl transition-all hover:bg-[#151925]">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Odoo ERP & CRM</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Python modül geliştirme, e-Dönüşüm, muhasebe, stok ve sipariş akışı entegrasyonları.</p>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-[#12151F] border border-[#1E2333] hover:border-cyan-500/50 p-8 rounded-2xl transition-all hover:bg-[#151925]">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Saha & Mobil Opt.</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Depo barkod okuma, saha satış (plasiyer) ve anlık yönetici dashboard mobil çözümleri.</p>
            </div>

            {/* Service 3 */}
            <div className="group bg-[#12151F] border border-[#1E2333] hover:border-purple-500/50 p-8 rounded-2xl transition-all hover:bg-[#151925]">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Kurumsal AI Otomasyonu</h3>
              <p className="text-sm text-slate-400 leading-relaxed">RAG doküman işleme, otomatik fatura OCR ve 7/24 Odoo entegre AI asistanları.</p>
            </div>

            {/* Service 4 */}
            <div className="group bg-[#12151F] border border-[#1E2333] hover:border-emerald-500/50 p-8 rounded-2xl transition-all hover:bg-[#151925]">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">E-Ticaret & GEO</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Pazaryeri entegrasyonları, teknik SEO ve ChatGPT/Perplexity görünürlüğü (GEO).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Vaka Analizleri (Case Studies) */}
      <section id="case-studies" className="py-32 px-6 bg-[#0C0E14] border-y border-[#1E2333]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Case Studies & Architecture</h2>
            <p className="text-slate-400 max-w-2xl">Müşterilerimiz için çözdüğümüz kompleks mühendislik problemleri.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-[#12151F] border border-[#1E2333] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <HardDrive className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white">Depo Entegrasyonu</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">PROBLEM</span>
                  <p className="text-sm text-slate-300">Günde 10.000+ siparişin manuel işlenmesi kaynaklı %12 hata payı ve sevkiyat gecikmeleri.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">SOLUTION</span>
                  <p className="text-sm text-slate-300">Odoo WMS modülü ile entegre, özel React Native el terminali uygulaması geliştirildi.</p>
                </div>
                <div className="pt-4 border-t border-[#1E2333]">
                  <span className="text-xs font-mono text-indigo-400 block mb-1">RESULT</span>
                  <p className="text-sm text-white font-medium">Hata payı %0.1'e düştü, paketleme hızı 4 kat arttı.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#12151F] border border-[#1E2333] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white">AI Fatura Okuma</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">PROBLEM</span>
                  <p className="text-sm text-slate-300">Tedarikçi faturalarının muhasebe sistemine girilmesi için harcanan günlük 15 adam/saat iş gücü.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">SOLUTION</span>
                  <p className="text-sm text-slate-300">Computer Vision (OCR) ve LLM tabanlı otomatik veri çıkarım RAG pipeline'ı kuruldu.</p>
                </div>
                <div className="pt-4 border-t border-[#1E2333]">
                  <span className="text-xs font-mono text-cyan-400 block mb-1">RESULT</span>
                  <p className="text-sm text-white font-medium">Fatura giriş süresi saniyelere indi, operasyonel yük tamamen sıfırlandı.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#12151F] border border-[#1E2333] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white">Odoo B2B Portalı</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">PROBLEM</span>
                  <p className="text-sm text-slate-300">Bayilerin siparişlerini telefon/mail ile vermesi ve stok durumunu canlı görememesi.</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-500 block mb-1">SOLUTION</span>
                  <p className="text-sm text-slate-300">Odoo backend'ine bağlı, Next.js tabanlı yüksek performanslı özel B2B Sipariş Portalı.</p>
                </div>
                <div className="pt-4 border-t border-[#1E2333]">
                  <span className="text-xs font-mono text-purple-400 block mb-1">RESULT</span>
                  <p className="text-sm text-white font-medium">Bayi siparişleri %100 dijitalleşti, müşteri memnuniyeti %92 arttı.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Ürünlerimiz (Our Products) */}
      <section id="products" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Harici Ürün & Girişimlerimiz</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Kendi bünyemizde geliştirdiğimiz bağımsız SaaS ve B2C teknoloji platformları.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Product 1 */}
            <div className="group relative bg-[#12151F] border border-[#1E2333] hover:border-indigo-500/50 rounded-3xl overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <Shield className="w-7 h-7 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dijital Arşiv Sistemi</h3>
                    <span className="text-xs font-mono text-indigo-400">Kurumsal SaaS</span>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-8">
                  KVKK uyumlu, akıllı arama ve OCR (Karakter Tanıma) destekli yeni nesil kurumsal doküman yönetim sistemi. Dosyalarınızı güvenle bulutta saklayın ve saniyeler içinde aradığınızı bulun.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-indigo-400 transition-colors cursor-pointer">
                  İncele <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group relative bg-[#12151F] border border-[#1E2333] hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all">
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Zap className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Polosim eSIM</h3>
                    <span className="text-xs font-mono text-cyan-400">Global Mobil Platform</span>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Global seyahat edenler için anında aktifleşen, fiziki sim karta ihtiyaç duymayan yeni nesil dijital eSIM platformu. 150+ ülkede kesintisiz ve güvenli 5G internet erişimi.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-cyan-400 transition-colors cursor-pointer">
                  Platforma Git <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. İletişim & Form */}
      <section id="contact" className="py-32 px-6 bg-[#0C0E14] border-t border-[#1E2333]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sistem Mimarinizi Konuşalım</h2>
            <p className="text-slate-400">Operasyonlarınızı dijitalleştirmek ve verimliliğinizi artırmak için formu doldurun.</p>
          </div>

          <div className="bg-[#12151F] border border-[#1E2333] rounded-3xl p-8 md:p-12 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Talebiniz Alındı</h3>
                <p className="text-slate-400">Sistem mühendislerimiz en kısa sürede sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Ad Soyad</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#090A0F] border border-[#1E2333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Şirket E-postası</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#090A0F] border border-[#1E2333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">İlgilenilen Mimari Alanı</label>
                  <select 
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-[#090A0F] border border-[#1E2333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  >
                    <option value="Odoo ERP">Odoo ERP Entegrasyonu</option>
                    <option value="Mobil Uygulama">Mobil & Saha Uygulamaları</option>
                    <option value="AI Otomasyonu">Kurumsal Yapay Zeka (AI)</option>
                    <option value="Tam Paket">Uçtan Uca Dijital Dönüşüm (Tam Paket)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Proje Detayları</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-[#090A0F] border border-[#1E2333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    placeholder="Mevcut sisteminiz ve çözmek istediğiniz problem hakkında kısaca bilgi verin..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Gönderiliyor...
                    </span>
                  ) : (
                    <>Talebi İlet <Mail className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="border-t border-[#1E2333] bg-[#090A0F] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Ezgisel Yazılım. Enterprise Architecture Solutions.
          </div>
          <div className="flex gap-6 font-mono text-xs text-slate-600">
            <a href="/llms.txt" className="hover:text-indigo-400 transition-colors">/llms.txt</a>
            <a href="/sitemap.xml" className="hover:text-indigo-400 transition-colors">/sitemap.xml</a>
            <a href="/robots.txt" className="hover:text-indigo-400 transition-colors">/robots.txt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
