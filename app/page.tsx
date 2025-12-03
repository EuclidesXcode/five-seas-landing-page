'use client';

import { useState } from 'react';
import ProductShowcase from './components/ProductShowcase';
import { Check, Star, Zap } from 'lucide-react';

type BillingCycle = 'monthly' | 'semiannual' | 'annual';

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const getPriceMultiplier = (cycle: BillingCycle) => {
    switch (cycle) {
      case 'semiannual': return 0.9;
      case 'annual': return 0.8;
      default: return 1;
    }
  };

  const calculatePrice = (basePrice: number) => {
    const multiplier = getPriceMultiplier(billingCycle);
    return (basePrice * multiplier).toFixed(2).replace('.', ',');
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Five SaaS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-300">
              Sistema completo de emissão de Notas Fiscais
            </p>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
              Simplifique a emissão de NFS-e, NF-e e NFC-e com tecnologia de ponta e inteligência artificial
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-950"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Por que escolher o Five SaaS?
            </h2>
            <p className="text-slate-400 text-lg">Tecnologia de ponta para transformar seu negócio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 - Rápido */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  Rápido e Eficiente
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Emita suas notas fiscais em segundos com nossa interface intuitiva e automatizada
                </p>
              </div>
            </div>

            {/* Card 2 - Seguro */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-emerald-500/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  100% Seguro
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Seus dados protegidos com criptografia de ponta e conformidade total com a legislação
                </p>
              </div>
            </div>

            {/* Card 3 - IA */}
            <div className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-700/50 hover:border-purple-500/50 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  Inteligência Artificial
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  IA que aprende com seus padrões e automatiza processos para maior produtividade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <ProductShowcase />

      {/* Pricing Section */}
      <section className="w-full bg-slate-950 py-32 px-4 relative">
        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-900/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Planos transparentes e escaláveis
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Comece pequeno e cresça conosco. Mude de plano a qualquer momento.
          </p>

          {/* Toggle Switch */}
          <div className="inline-flex bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-full p-1.5 mb-20 shadow-xl">
            {(['monthly', 'semiannual', 'annual'] as const).map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  billingCycle === cycle 
                    ? 'bg-slate-800 text-white shadow-lg' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cycle === 'monthly' && 'Mensal'}
                {cycle === 'semiannual' && 'Semestral'}
                {cycle === 'annual' && 'Anual'}
                
                {cycle !== 'monthly' && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    billingCycle === cycle ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-500/10 text-emerald-500/70'
                  }`}>
                    {cycle === 'semiannual' ? '-10%' : '-20%'}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* Basic Plan */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800 flex flex-col hover:border-slate-700 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
                <p className="text-slate-500 text-sm">Ideal para MEI e pequenos negócios</p>
              </div>
              <div className="flex items-baseline mb-8">
                <span className="text-slate-400 text-lg font-medium mr-1">R$</span>
                <span className="text-5xl font-bold text-white tracking-tight">{calculatePrice(99.90)}</span>
                <span className="text-slate-500 ml-2 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-left">
                {[
                  "Emissão ilimitada de NFS-e",
                  "Suporte por email",
                  "Painel de controle básico",
                  "Backup mensal automático"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="p-0.5 rounded-full bg-slate-800 text-slate-400"><Check className="w-3 h-3" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-4 rounded-xl transition-all border border-slate-700">
                Começar agora
              </button>
            </div>

            {/* Standard Plan (Highlighted) */}
            <div className="relative bg-slate-900 rounded-3xl p-8 border border-blue-500/50 shadow-[0_0_40px_-10px_rgba(59,130,246,0.2)] flex flex-col transform md:-translate-y-4 z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">
                MAIS POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Standard</h3>
                <p className="text-blue-200/60 text-sm">Automação completa para empresas</p>
              </div>
              <div className="flex items-baseline mb-8">
                <span className="text-slate-400 text-lg font-medium mr-1">R$</span>
                <span className="text-5xl font-bold text-white tracking-tight">{calculatePrice(199.90)}</span>
                <span className="text-slate-500 ml-2 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-left">
                {[
                  "Tudo do plano Basic",
                  "Emissão de NF-e e NFC-e",
                  "Suporte prioritário (WhatsApp)",
                  "Relatórios fiscais avançados",
                  "API de integração REST",
                  "Certificado A1 incluso"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                    <div className="p-0.5 rounded-full bg-blue-500/20 text-blue-400"><Check className="w-3 h-3" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20">
                Começar agora
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-900/50 rounded-3xl p-8 border border-purple-500/30 flex flex-col hover:border-purple-500/50 transition-colors">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                  Premium <Zap className="w-4 h-4 text-purple-400 fill-current" />
                </h3>
                <p className="text-slate-500 text-sm">Inteligência máxima e consultoria</p>
              </div>
              <div className="flex items-baseline mb-8">
                <span className="text-slate-400 text-lg font-medium mr-1">R$</span>
                <span className="text-5xl font-bold text-white tracking-tight">{calculatePrice(349.90)}</span>
                <span className="text-slate-500 ml-2 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow text-left">
                {[
                  "Assistente Fiscal com IA",
                  "Auditoria automática de notas",
                  "Multi-CNPJ e Multi-Usuário",
                  "Consultoria mensal dedicada",
                  "Dashboard White-label",
                  "SLA de 99.9%"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                    <div className="p-0.5 rounded-full bg-purple-500/20 text-purple-400"><Star className="w-3 h-3" /></div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-transparent hover:bg-purple-500/10 text-purple-300 font-medium py-4 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500">
                Começar agora
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Five SaaS</h3>
          <p className="text-slate-400 mb-4">
            Sistema completo de emissão de Notas Fiscais
          </p>
          <p className="text-slate-500 text-sm">
            © 2025 Five SaaS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
