import { ArrowLeft, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

/**
 * Design Philosophy: Minimalist, Elegant, Premium
 * - Playfair Display for headlines (serif, sophisticated)
 * - Lato for body text (clean, readable)
 * - Color Palette: Warm white, matte black, graphite, gold accents
 * - Whitespace and breathing room throughout
 * - Subtle animations and smooth transitions
 */

export default function Portfolio() {
  // All portfolio photos - 6 main + 28 additional
  const portfolioPhotos = [
    { src: "/portfolio-01.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-02.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-03.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-04.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-05.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-06.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-01.jpg", alt: "Projeto Ateliê de Gesso" },
   
    { src: "/portfolio-extra-12.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-13.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-14.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-15.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-16.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-17.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-18.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-19.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-20.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-21.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-22.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-23.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-24.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-25.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-26.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-27.jpg", alt: "Projeto Ateliê de Gesso" },
    { src: "/portfolio-extra-28.jpg", alt: "Projeto Ateliê de Gesso" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Voltar</span>
            </a>
          </Link>
          <img src="/logo.png" alt="Ateliê de Gesso" className="h-10" />
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container text-center">
          <motion.h1
            className="text-6xl font-bold mb-6 text-display"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nosso Portfólio
          </motion.h1>
          <motion.p
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Conheça todos os projetos realizados com excelência, precisão e sofisticação. Cada imagem conta uma história de transformação de ambientes.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container text-center">
          <motion.h2
            className="text-5xl font-bold mb-6 text-display"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Gostou de algum projeto?
          </motion.h2>
          <motion.p
            className="text-xl text-foreground/70 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Entre em contato conosco para discutir como podemos transformar seu ambiente com a mesma qualidade e sofisticação.
          </motion.p>
          <motion.a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-secondary transition-all hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Solicitar Orçamento
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-background border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-display">Fale Conosco</h2>
            <p className="text-xl text-foreground/70">
              Estamos prontos para iniciar a transformação do seu projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <motion.div
              className="text-center p-8 rounded-lg bg-secondary/20 border border-border hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/5511999577658" className="text-foreground/70 hover:text-accent transition-colors">
                (11) 99957-7658
              </a>
              <p className="text-sm text-foreground/50 mt-2">Fabrício Setten</p>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="text-center p-8 rounded-lg bg-secondary/20 border border-border hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-bold mb-2">Telefone</h3>
              <a href="tel:+551142205045" className="text-foreground/70 hover:text-accent transition-colors">
                (11) 4220-5045
              </a>
              <p className="text-sm text-foreground/50 mt-2">Segunda a sexta, 9h-17h</p>
            </motion.div>

            {/* Email */}
            <motion.div
              className="text-center p-8 rounded-lg bg-secondary/20 border border-border hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-bold mb-2">E-mail</h3>
              <a href="mailto:contatoateliedogesso@gmail.com" className="text-foreground/70 hover:text-accent transition-colors text-sm break-all">
                contatoateliedogesso@gmail.com
              </a>
              <p className="text-sm text-foreground/50 mt-2">Resposta em 24h</p>
            </motion.div>

            {/* Location */}
            <motion.div
              className="text-center p-8 rounded-lg bg-secondary/20 border border-border hover:border-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-bold mb-2">Loja</h3>
              <p className="text-foreground/70 text-sm">
                Av. Presidente Kennedy, 3251<br />
                São Caetano do Sul, SP
              </p>
            </motion.div>
          </div>

          {/* Social Media */}
          <div className="mt-16 text-center">
            <p className="text-foreground/70 mb-6">Nos encontre nas redes sociais</p>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-foreground/70 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary/20 border-t border-border">
        <div className="container text-center text-foreground/50 text-sm">
          <p>&copy; 2024 Ateliê de Gesso. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
