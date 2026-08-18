"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight,
  Settings, 
  ShoppingCart, 
  Calculator, 
  Factory, 
  Briefcase,
  Users,
  Box,
  CheckCircle2
} from 'lucide-react';

export default function OdooErpPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-400/20 via-purple-400/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* 1. Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 font-bold text-xl tracking-tight text-slate-900 group">
            <div className="p-2 bg-slate-100 rounded-full group-hover:bg-indigo-100 transition-colors">
              <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
            </div>
            <img src="/ezgisellogo.png" alt="Ezgisel Yazılım" className="h-12 md:h-16 w-auto object-contain hidden md:block" />
            <span className="md:hidden text-base">Ana Sayfaya Dön</span>
          </Link>

          <a 
            href="/#contact" 
            className="px-6 py-2.5 text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-full border border-slate-700 shadow-sm transition-all hover:shadow-md"
          >
            ERP Toplantısı Planla
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 text-xs font-bold mb-8 shadow-sm">
          <Settings className="w-4 h-4" />
          Odoo Mimari & Mühendislik Hizmetleri
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
          Şirketinizin Tüm Operasyonunu <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Odoo ERP ile Tek Bir Yere Toplayın
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Muhasebe, üretim, İK, stok ve satış süreçlerinizi birbirinden kopuk sistemler yerine, tamamen birbirine entegre ve şirketinizin kurallarına göre özelleştirilmiş tek bir Odoo altyapısında yönetin.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/#contact" 
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            Ücretsiz Sistem Analizi Al <ArrowRight className="w-4 h-4"/>
          </a>
        </div>
      </section>

      {/* 3. Modules Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Odoo Modülleri & Çözümlerimiz</h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">İşletmenizin ihtiyacına göre sadece gereken modülleri aktifleştiriyor ve size özel kodluyoruz.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Muhasebe */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <Calculator className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Finans & Muhasebe</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Türkiye e-fatura/e-arşiv entegrasyonları, banka mutabakatları ve otomatik tahsilat hatırlatmaları.</p>
          </div>

          {/* Stok / Depo */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <Box className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Stok & Depo (WMS)</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Çoklu depo yönetimi, barkodlu mal kabul/çıkış, rotalama ve akıllı tedarik kuralları.</p>
          </div>

          {/* Üretim */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <Factory className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Üretim (MRP)</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Ürün ağaçları (BOM), iş istasyonları kapasite planlaması ve fire takibi ile tam kontrol.</p>
          </div>

          {/* CRM & Satış */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <Briefcase className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">CRM & Satış</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Müşteri potansiyelleri, teklif şablonları, online müşteri paneli ve B2B fiyat listeleri.</p>
          </div>

          {/* İK */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <Users className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">İnsan Kaynakları</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Personel izinleri, masraf yönetimi, bordro puantaj hesaplamaları ve performans değerlendirme.</p>
          </div>

          {/* E-Ticaret */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-300 transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-indigo-100">
              <ShoppingCart className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">E-Ticaret & POS</h3>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Stok ve muhasebeye anlık bağlı perakende satış ekranları ve online mağaza altyapısı.</p>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-sm font-bold text-slate-500 gap-4 bg-slate-50">
        <div>© {new Date().getFullYear()} Ezgisel Yazılım. Tüm Hakları Saklıdır.</div>
      </footer>

    </div>
  );
}
