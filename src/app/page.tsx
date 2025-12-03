"use client";

import { useState } from "react";
import { Check, ArrowRight, Star, TrendingUp, Users, Zap, MessageSquare, Target, Award, ChevronDown, Sparkles, Clock } from "lucide-react";

export default function Home() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Corretor Imobiliário",
      content: "Aumentei minhas vendas em 340% nos primeiros 3 meses. Os scripts são incríveis!",
      rating: 5
    },
    {
      name: "Ana Paula Silva",
      role: "Corretora de Imóveis",
      content: "Finalmente consegui superar objeções com confiança. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Roberto Alves",
      role: "Corretor Sênior",
      content: "Minha taxa de conversão triplicou. Recomendo para todos os corretores!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-8">
              <Award className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-medium text-gray-700">Método validado por +2.500 corretores</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Transforme Conversas
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                em Vendas Fechadas
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Scripts e estratégias comprovadas que aumentam sua taxa de conversão em até 340%. 
              Domine a arte de vender imóveis com confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button 
                onClick={handleCheckout}
                className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Quero Aumentar Minhas Vendas
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                Ver Benefícios
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white" />
                  ))}
                </div>
                <span>+2.500 corretores</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2">4.9/5 (847 avaliações)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              O que você vai dominar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ferramentas práticas e estratégias testadas para transformar sua carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Scripts Prontos",
                description: "Abordagens testadas para cada etapa da venda, do primeiro contato ao fechamento"
              },
              {
                icon: Target,
                title: "Superação de Objeções",
                description: "Respostas eficazes para as 50 objeções mais comuns de clientes"
              },
              {
                icon: TrendingUp,
                title: "Técnicas de Fechamento",
                description: "Estratégias comprovadas para fechar mais negócios com naturalidade"
              },
              {
                icon: Users,
                title: "Rapport Instantâneo",
                description: "Crie conexão genuína e confiança nos primeiros minutos"
              },
              {
                icon: Zap,
                title: "Follow-up Eficaz",
                description: "Templates que mantêm leads aquecidos e aumentam conversões"
              },
              {
                icon: Award,
                title: "Vendas Consultivas",
                description: "Posicione-se como especialista e aumente seu ticket médio"
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - OFERTA ÚNICA */}
      <section className="py-20 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-4 animate-pulse">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold">OFERTA LIMITADA - Últimas 12 vagas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Acesso Completo por Apenas R$ 197
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Investimento único. Transformação garantida. Sem mensalidades.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl p-8 sm:p-12 transition-all duration-300 bg-gradient-to-br from-black via-gray-900 to-black text-white shadow-2xl border-4 border-yellow-400">
              {/* Badge de Destaque */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                OFERTA IRRESISTÍVEL
                <Sparkles className="w-4 h-4" />
              </div>

              {/* Preço Riscado */}
              <div className="text-center mb-8 mt-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-2xl text-gray-400 line-through">De R$ 997</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -80% OFF
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-xl text-gray-300">Por apenas</span>
                  <span className="text-7xl font-bold text-yellow-400">R$ 197</span>
                </div>
                <p className="text-gray-300 text-lg">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              {/* Título do Pacote */}
              <div className="text-center mb-8 pb-8 border-b border-gray-700">
                <h3 className="text-3xl font-bold mb-3">Pacote Completo de Conversão</h3>
                <p className="text-xl text-yellow-400 font-semibold">
                  Tudo que você precisa para vender 3x mais
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {[
                  "50+ Scripts de Vendas Testados e Aprovados",
                  "Guia Definitivo de Superação de Objeções",
                  "Templates Premium de Follow-up",
                  "Estratégias Avançadas de Fechamento",
                  "Técnicas de Rapport e Persuasão",
                  "Módulo Completo de Vendas Consultivas",
                  "Scripts Exclusivos para Redes Sociais",
                  "Acesso Vitalício + Atualizações Gratuitas",
                  "Suporte Prioritário via WhatsApp",
                  "Grupo Exclusivo de Corretores de Elite",
                  "Bônus: Checklist de Prospecção Diária",
                  "Bônus: 30 Gatilhos Mentais para Vendas"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-black font-bold" />
                    </div>
                    <span className="text-lg text-gray-100">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Principal */}
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-6 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 flex items-center justify-center gap-3 mb-6"
              >
                <Sparkles className="w-6 h-6" />
                QUERO GARANTIR MINHA VAGA AGORA
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Garantias */}
              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2 text-green-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Pagamento 100% seguro e criptografado</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-purple-400">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Acesso imediato após confirmação</span>
                </div>
              </div>

              {/* Urgência */}
              <div className="mt-8 p-4 bg-red-500/20 border border-red-500 rounded-2xl text-center">
                <p className="text-red-300 font-bold text-sm">
                  ⚠️ ATENÇÃO: Apenas 12 vagas restantes neste preço promocional!
                </p>
                <p className="text-gray-300 text-xs mt-1">
                  Após esgotadas, o valor volta para R$ 997
                </p>
              </div>
            </div>

            {/* Prova Social Abaixo */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4 font-semibold">
                ⭐ Mais de 2.500 corretores já transformaram suas vendas
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <span>🔥 847 pessoas compraram nas últimas 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Resultados reais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Veja o que corretores estão alcançando com nosso método
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checkout Section */}
      {showCheckout && (
        <section id="checkout" className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Finalize sua compra
                </h2>
                <p className="text-gray-600">
                  Você está a um passo de transformar suas vendas
                </p>
              </div>

              {/* Order Summary */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 mb-8 border-2 border-yellow-400">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                  Resumo do Pedido
                </h3>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">Pacote Completo de Conversão</p>
                    <p className="text-sm text-gray-600">Acesso vitalício + Bônus exclusivos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 line-through">R$ 997</p>
                    <p className="text-3xl font-bold text-gray-900">R$ 197</p>
                  </div>
                </div>
                <div className="border-t border-yellow-300 pt-4">
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-gray-900">Total</p>
                    <p className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                      R$ 197
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 text-right mt-1">Pagamento único</p>
                </div>
              </div>

              {/* Checkout Form */}
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefone (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    CPF
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/10 outline-none transition-all"
                    placeholder="000.000.000-00"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-5 rounded-full font-bold text-xl hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-6 h-6" />
                    FINALIZAR COMPRA - R$ 197
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600 space-y-2">
                  <p>🔒 Seus dados estão protegidos e seguros</p>
                  <p>✅ Garantia de 7 dias • Reembolso total se não gostar</p>
                  <p>⚡ Acesso imediato após confirmação do pagamento</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Scripts de Vendas Pro. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Transformando corretores em máquinas de vendas desde 2020
          </p>
        </div>
      </footer>
    </div>
  );
}
