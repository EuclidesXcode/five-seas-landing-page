'use client';

import { useState } from 'react';

type BillingCycle = 'monthly' | 'semester' | 'annual';

const pricingData = {
  basic: {
    name: 'Basic',
    description: 'Emissão de NFS-e',
    features: [
      'Emissão ilimitada de NFS-e',
      'Suporte por email',
      'Painel de controle',
      'Relatórios básicos',
    ],
    prices: {
      monthly: 99.90,
      semester: 89.90,
      annual: 79.90,
    },
  },
  standard: {
    name: 'Standard',
    description: 'NFS-e, NF-e e NFC-e',
    features: [
      'Tudo do plano Basic',
      'Emissão de NF-e',
      'Emissão de NFC-e',
      'Suporte prioritário',
      'Relatórios avançados',
      'API de integração',
    ],
    prices: {
      monthly: 199.90,
      semester: 179.90,
      annual: 159.90,
    },
  },
  premium: {
    name: 'Premium',
    description: 'Completo com IA',
    features: [
      'Tudo do plano Standard',
      'Assistente com IA',
      'Automação inteligente',
      'Suporte 24/7',
      'Consultoria especializada',
      'Relatórios personalizados',
      'Múltiplos usuários',
    ],
    prices: {
      monthly: 349.90,
      semester: 319.90,
      annual: 289.90,
    },
  },
};

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const getBillingLabel = (cycle: BillingCycle) => {
    switch (cycle) {
      case 'monthly':
        return 'Mensal';
      case 'semester':
        return 'Semestral';
      case 'annual':
        return 'Anual';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Five SaaS
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Sistema completo de emissão de Notas Fiscais
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
              Simplifique a emissão de NFS-e, NF-e e NFC-e com tecnologia de ponta e inteligência artificial
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Por que escolher o Five SaaS?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Rápido e Eficiente</h3>
              <p className="text-gray-600">
                Emita suas notas fiscais em segundos com nossa interface intuitiva e automatizada
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">100% Seguro</h3>
              <p className="text-gray-600">
                Seus dados protegidos com criptografia de ponta e conformidade total com a legislação
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Inteligência Artificial</h3>
              <p className="text-gray-600">
                IA que aprende com seus padrões e automatiza processos para maior produtividade
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            Escolha o plano ideal
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Todas as licenças incluem atualizações gratuitas e suporte técnico
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle('semester')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'semester'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Semestral
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">-10%</span>
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Anual
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">-20%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-200 hover:border-blue-500 transition-all">
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{pricingData.basic.name}</h3>
              <p className="text-gray-600 mb-6">{pricingData.basic.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">
                  R$ {pricingData.basic.prices[billingCycle].toFixed(2)}
                </span>
                <span className="text-gray-600 ml-2">/{getBillingLabel(billingCycle).toLowerCase()}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricingData.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Começar agora
              </button>
            </div>

            {/* Standard Plan */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-4 border-blue-600 relative transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">{pricingData.standard.name}</h3>
              <p className="text-gray-600 mb-6">{pricingData.standard.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">
                  R$ {pricingData.standard.prices[billingCycle].toFixed(2)}
                </span>
                <span className="text-gray-600 ml-2">/{getBillingLabel(billingCycle).toLowerCase()}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricingData.standard.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Começar agora
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{pricingData.premium.name}</h3>
              <p className="text-indigo-100 mb-6">{pricingData.premium.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  R$ {pricingData.premium.prices[billingCycle].toFixed(2)}
                </span>
                <span className="text-indigo-100 ml-2">/{getBillingLabel(billingCycle).toLowerCase()}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pricingData.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-300 mr-2">★</span>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-indigo-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Começar agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Five SaaS</h3>
          <p className="text-gray-400 mb-4">
            Sistema completo de emissão de Notas Fiscais
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 Five SaaS. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
