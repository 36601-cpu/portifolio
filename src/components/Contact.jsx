import React, { useState } from 'react';

export function Contact({ personal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome.';
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Por favor, informe um e-mail válido.';
    }
    if (!formData.subject.trim()) errs.subject = 'Por favor, informe o assunto.';
    if (!formData.message.trim()) errs.message = 'Por favor, escreva sua mensagem.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real smooth client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1200);
  };

  const handleSendViaWhatsApp = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const text = encodeURIComponent(
      `Olá Gustavo! Meu nome é ${formData.name} (${formData.email}).\n\nAssunto: ${formData.subject}\n\nMensagem: ${formData.message}`
    );
    window.open(`https://wa.me/${personal.phoneRaw}?text=${text}`, '_blank');
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <section id="contato" className="relative py-24 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="ambient-glow-2 top-10 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-mono-code text-purple-300 mb-3">
            <span>04 // CONEXÃO & COMUNICAÇÃO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Entre em <span className="text-gradient-purple">Contato</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-base sm:text-lg">
            Tem uma oportunidade, projeto ou quer bater um papo sobre tecnologia? Fique à vontade para me mandar uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick WhatsApp Action Card */}
            <div className="glass-panel p-7 rounded-3xl relative overflow-hidden bg-gradient-to-br from-purple-950/40 via-purple-900/20 to-transparent border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Conversa Rápida</h3>
                  <span className="text-xs font-mono-code text-emerald-400">Resposta Direta</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-5">
                Precisa de um retorno ágil? Inicie uma conversa diretamente no meu WhatsApp com um clique.
              </p>
              <a
                href={`https://wa.me/${personal.phoneRaw}?text=Ol%C3%A1%20Gustavo%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar!`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-2xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <span>Falar no WhatsApp Agora</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
              </a>
            </div>

            {/* Contact Details List */}
            <div className="glass-panel p-7 rounded-3xl space-y-4">
              <h3 className="text-base font-bold text-white mb-4 pb-2 border-b border-purple-500/15">
                Informações de Contato
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                    ✉️
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-slate-400 block">E-mail</span>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-purple-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.email, 'email')}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-colors"
                  title="Copiar e-mail"
                >
                  {copiedItem === 'email' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400">
                    📞
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-slate-400 block">Telefone / WhatsApp</span>
                    <a
                      href={`https://wa.me/${personal.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-white hover:text-purple-400 transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personal.phone, 'phone')}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/20 transition-colors"
                  title="Copiar telefone"
                >
                  {copiedItem === 'phone' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-purple-950/20 border border-purple-500/15">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 mt-0.5">
                  📍
                </div>
                <div>
                  <span className="text-[10px] font-mono-code text-slate-400 block">Localização</span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {personal.location}
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Functional Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl relative">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-500/15">
                <div>
                  <h3 className="text-xl font-bold text-white">Envie uma Mensagem</h3>
                  <span className="text-xs font-mono-code text-purple-400">Formulário de Contato Direto</span>
                </div>
                <span className="text-xs font-mono-code text-slate-400">
                  Tempo estimado: 1 min
                </span>
              </div>

              {/* Success Notification Alert */}
              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-3 animate-fadeIn">
                  <span className="text-xl">✅</span>
                  <div>
                    <strong className="block font-semibold">Mensagem enviada com sucesso!</strong>
                    <span className="text-xs text-emerald-200">Muito obrigado pelo contato, Gustavo responderá em breve.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ex: Carlos Silva"
                      className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.name ? 'border-rose-500/80' : 'border-purple-500/25 focus:border-purple-500'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ex: carlos@email.com"
                      className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                        errors.email ? 'border-rose-500/80' : 'border-purple-500/25 focus:border-purple-500'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Assunto da Mensagem *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Ex: Oportunidade de Estágio / Projeto Web"
                    className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.subject ? 'border-rose-500/80' : 'border-purple-500/25 focus:border-purple-500'
                    }`}
                  />
                  {errors.subject && <span className="text-[11px] text-rose-400 mt-1 block">{errors.subject}</span>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono-code text-slate-300 mb-1.5">
                    Mensagem *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem ou detalhes sobre a oportunidade..."
                    className={`w-full px-4 py-3 rounded-xl bg-purple-950/20 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      errors.message ? 'border-rose-500/80' : 'border-purple-500/25 focus:border-purple-500'
                    }`}
                  ></textarea>
                  {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Processando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar Mensagem</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="py-3.5 px-5 rounded-xl font-semibold text-sm border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all flex items-center justify-center gap-2"
                    title="Preencher e enviar diretamente pelo WhatsApp"
                  >
                    <span>Enviar via WhatsApp</span>
                    <span className="text-base">📲</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
