import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Instagram, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Design Philosophy: Minimalist, Elegant, Premium
 * - Playfair Display for headlines (serif, sophisticated)
 * - Lato for body text (clean, readable)
 * - Color Palette: Warm white, matte black, graphite, gold accents
 * - Whitespace and breathing room throughout
 * - Subtle animations and smooth transitions
 */

export default function Home() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "gesso",
      title: "Gesso e Drywall",
      description: "Estruturas leves e resistentes que redefinem espaços com isolamento acústico e térmico de excelência.",
      icon: "gesso"
    },
    {
      id: "sancas",
      title: "Sancas, Nichos e Forros",
      description: "O toque de design e funcionalidade no seu teto. Criamos forros rebaixados que valorizam a iluminação.",
      icon: "sancas"
    },
    {
      id: "eletrica",
      title: "Elétrica",
      description: "Instalação e adequação de infraestrutura elétrica com segurança e suporte técnico completo.",
      icon: "eletrica"
    },
    {
      id: "pintura",
      title: "Pintura",
      description: "Acabamento final com cores e texturas premium. Superfícies impecáveis e duradouras.",
      icon: "pintura"
    }
  ];

  const diferenciais = [
    {
      title: "Precisão e Acabamento Impecável",
      description: "Obsessão pelo detalhe. Execução milimétrica e acabamento liso, uniforme e de alto padrão."
    },
    {
      title: "Sofisticação e Modernidade",
      description: "Alinhados às últimas tendências de design, garantindo ambientes contemporâneos e atemporais."
    },
    {
      title: "Equipe Especializada",
      description: "Profissionais treinados e capacitados com foco em soluções técnicas e consultoria."
    },
    {
      title: "Pontualidade Inegociável",
      description: "Respeito ao seu tempo. Entregamos no prazo combinado, sem atrasos ou surpresas."
    },
    {
      title: "Solução Completa (Turn-Key)",
      description: "Gesso, Drywall, Iluminação, Elétrica e Pintura. Um único ponto de contato."
    },
    {
      title: "Consultoria Personalizada",
      description: "Do briefing à entrega, oferecemos suporte e orientação para as melhores escolhas."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <img src="/logo.png" alt="Ateliê de Gesso" className="h-10" />
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
            <a href="/portfolio" className="hover:text-accent transition-colors">Portfólio</a>
            <a href="#diferenciais" className="hover:text-accent transition-colors">Diferenciais</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </div>
          <Button variant="default" size="sm" className="bg-primary text-primary-foreground hover:bg-secondary">
            Solicitar Orçamento
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-gesso.jpg" 
            alt="Ateliê de Gesso - Ambiente Premium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container relative z-10 text-white">
          <motion.div 
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-display leading-tight">
              Detalhes que elevam e transformam o seu ambiente.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
              Precisão, qualidade e sofisticação em cada projeto. Transformando ambientes há mais de 20 anos.
            </p>
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold transition-all hover:shadow-lg"
            >
              Solicite seu Orçamento <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-display" style={{fontSize: '80px'}}>
                Sobre Nós
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed" style={{fontSize: '24px'}}>
                O Ateliê de Gesso não apenas executa serviços: nós transformamos espaços. Com mais de duas décadas de experiência, consolidamos nossa marca como referência em soluções completas de gesso, drywall, iluminação e decoração, sempre atuando ao lado de parceiros especializados para oferecer resultados de excelência.
              </p>
              <div className="space-y-4">
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-accent" style={{fontSize: '50px'}}>20+</div>
                  <div>
                    <div className="font-semibold" style={{fontSize: '24px'}}>Anos de Experiência</div>
                    <div className="text-sm text-foreground/60" style={{fontSize: '20px'}}>Referência no mercado</div>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-accent" style={{fontSize: '50px'}}>40k+</div>
                  <div>
                    <div className="font-semibold" style={{fontSize: '24px'}}>m² Executados</div>
                    <div className="text-sm text-foreground/60" style={{fontSize: '20px'}}>Projetos de alta qualidade</div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
              <img 
                src="/loja-atelie.webp" 
                alt="Loja Ateliê de Gesso" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-display">Soluções Completas para o Seu Projeto</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Oferecemos um leque completo de serviços, garantindo uma solução integrada e de alto padrão.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <svg className="w-12 h-12 mb-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {service.icon === "gesso" && <path d="M4 20h16M6 16l2-8h8l2 8M8 8l4-4 4 4" />}
                  {service.icon === "sancas" && <><path d="M9 18h6M12 2C6.48 2 2 6.48 2 12c0 2.85 1.2 5.4 3.1 7.2M22 12c0-5.52-4.48-10-10-10" /><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" fill="currentColor" /></>}
                  {service.icon === "eletrica" && <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />}
                  {service.icon === "pintura" && <><circle cx="12" cy="12" r="10" /><circle cx="8" cy="8" r="2" fill="currentColor" /><circle cx="16" cy="8" r="2" fill="currentColor" /><circle cx="8" cy="16" r="2" fill="currentColor" /><circle cx="16" cy="16" r="2" fill="currentColor" /></>}
                </svg>
                <h3 className="text-xl font-bold mb-3 text-display group-hover:text-accent transition-colors" style={{fontSize: '30px'}} style={{fontSize: '24px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}}>
                  {service.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed" style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <a href="/portfolio" className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg">
              Ver Mais Projetos
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-display">Portfólio</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Conheça alguns dos nossos projetos realizados com excelência e sofisticação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/portfolio-01.jpg", alt: "Projeto Ateliê de Gesso" },
              { src: "/portfolio-02.jpg", alt: "Projeto Ateliê de Gesso" },
              { src: "/portfolio-03.jpg", alt: "Projeto Ateliê de Gesso" },
              { src: "/portfolio-04.jpg", alt: "Projeto Ateliê de Gesso" },
              { src: "/portfolio-05.jpg", alt: "Projeto Ateliê de Gesso" },
              { src: "/portfolio-06.jpg", alt: "Projeto Ateliê de Gesso" }
            ].map((image, idx) => (
              <motion.div
                key={idx}
                className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver projeto
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section id="diferenciais" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-display">Por Que Escolher o Ateliê de Gesso?</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Nosso compromisso é com a sua satisfação total e com a entrega de um projeto que exceda expectativas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-background p-8 rounded-lg border border-border hover:border-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-display" style={{fontSize: '30px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}} style={{fontSize: '30px'}}>{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed" style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}} style={{fontSize: '18px'}}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Designer Partnership Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8 text-display">
              Parceria com Designer de Interiores
            </h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Contamos com a parceria especializada de <span className="font-semibold">Patrícia Setten</span>, Designer de Interiores com mais de 20 anos de experiência no ramo. Patrícia desenvolve <span className="font-semibold">projetos executivos e projetos em 3D de alta qualidade</span>, garantindo que cada detalhe do seu ambiente seja pensado com precisão estética e funcionalidade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/50 p-8 rounded-lg border border-border hover:border-accent transition-colors text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="8" cy="8" r="1.5" fill="currentColor" />
                <circle cx="16" cy="8" r="1.5" fill="currentColor" />
                <circle cx="8" cy="16" r="1.5" fill="currentColor" />
                <circle cx="16" cy="16" r="1.5" fill="currentColor" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-display" style={{fontSize: '30px'}}>Projetos Executivos</h3>
              <p className="text-foreground/70" style={{fontSize: '18px'}}>Detalhamento técnico completo para execução da sua obra.</p>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg border border-border hover:border-accent transition-colors text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3l18 18M3 21L21 3" />
                <rect x="2" y="2" width="20" height="20" fill="none" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-display" style={{fontSize: '30px'}}>Projetos 3D</h3>
              <p className="text-foreground/70" style={{fontSize: '18px'}}>Visualização realista do seu ambiente antes da execução.</p>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg border border-border hover:border-accent transition-colors text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <h3 className="text-xl font-bold mb-3 text-display" style={{fontSize: '30px'}}>20+ Anos</h3>
              <p className="text-foreground/70" style={{fontSize: '18px'}}>Experiência consolidada em design de interiores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-6 text-display text-primary-foreground">
            Reinvente seu espaço conosco.
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Dê o primeiro passo em direção ao ambiente que você sempre sonhou.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
          >
            Transforme Seu Ambiente — Solicite Seu Orçamento <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-display">Fale Conosco</h2>
            <p className="text-xl text-foreground/70">Estamos prontos para iniciar a transformação do seu projeto.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-muted/50 p-8 rounded-lg text-center border border-border hover:border-accent transition-colors">
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">WhatsApp</h3>
              <p className="text-foreground/70 text-sm mb-4" style={{fontSize: '18px'}}>(11) 99957-7658</p>
              <p className="text-xs text-foreground/50" style={{fontSize: '15px'}}>Fabrício Setten</p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border border-border hover:border-accent transition-colors">
              <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className="text-foreground/70 text-sm mb-4" style={{fontSize: '18px'}}>(11) 4220-5045</p>
              <p className="text-xs text-foreground/50" style={{fontSize: '15px'}}>Segunda a sexta, 9h-17h</p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border border-border hover:border-accent transition-colors">
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">E-mail</h3>
              <p className="text-foreground/70 text-sm mb-4" style={{fontSize: '18px'}}>contatoateliedogesso@gmail.com</p>
              <p className="text-xs text-foreground/50" style={{fontSize: '15px'}}>Resposta em 24h</p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg text-center border border-border hover:border-accent transition-colors">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="font-bold mb-2">Loja</h3>
              <p className="text-foreground/70 text-sm mb-4" style={{fontSize: '18px'}}>Av. Presidente Kennedy, 3251</p>
              <p className="text-xs text-foreground/50" style={{fontSize: '15px'}}>São Caetano do Sul, SP</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60 mb-6">Nos encontre nas redes sociais</p>
            <div className="flex gap-6 justify-center">
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent hover:text-accent/80 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t border-border">
        <div className="container text-center text-sm text-primary-foreground/70">
          <p>&copy; 2025 Ateliê de Gesso. Todos os direitos reservados.</p>
          <p className="mt-2">Transformando ambientes com precisão, qualidade e sofisticação.</p>
        </div>
      </footer>
    </div>
  );
}
