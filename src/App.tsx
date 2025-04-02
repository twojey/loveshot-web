import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Apple, Store as PlayStore, Camera, Brain, Zap, Upload, Sparkles, Heart, LightningBolt } from 'lucide-react';
import Image from '/src/babe3.png';
import MobileImage from '/src/babe3-mobile.png';
import BeforeAfter from '/src/attila-before-after.webp';
import Canard from '/src/differentcanard.png';
import Logo from '/src/loveshot_logo.png';
import MobileLogo from '/src/fav-loveshot.png';
import AppleLogo from '/src/Apple_logo_black.svg';
import PlayStoreLogo from '/src/playstore.svg';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const differenceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqRef = useRef(null);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    setIsMobileMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-8">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img 
                  src={Logo} 
                  alt="Loveshot Logo" 
                  className="hidden md:block h-8 w-auto"
                />
                <img 
                  src={MobileLogo} 
                  alt="Loveshot Logo" 
                  className="md:hidden h-8 w-auto"
                />
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#hero" 
                className="text-gray-600 hover:text-[#FF5A5F] transition-colors cursor-pointer"
                onClick={() => handleScrollTo(heroRef)}
              >
                Accueil
              </a>
              <a 
                href="#features" 
                className="text-gray-600 hover:text-[#FF5A5F] transition-colors cursor-pointer"
                onClick={() => handleScrollTo(featuresRef)}
              >
                Fonctionnalités
              </a>
              <a 
                href="#difference" 
                className="text-gray-600 hover:text-[#FF5A5F] transition-colors cursor-pointer"
                onClick={() => handleScrollTo(differenceRef)}
              >
                Avantages
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-[#FF5A5F] transition-colors cursor-pointer"
                onClick={() => handleScrollTo(howItWorksRef)}
              >
                Comment ça marche
              </a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-[#FF5A5F]"
              >
                <svg 
                  className="h-6 w-6" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                  href="#hero" 
                  className="block px-3 py-2 text-base text-gray-600 hover:text-[#FF5A5F] hover:bg-gray-50 rounded-md cursor-pointer"
                  onClick={() => handleScrollTo(heroRef)}
                >
                  Accueil
                </a>
                <a 
                  href="#features" 
                  className="block px-3 py-2 text-base text-gray-600 hover:text-[#FF5A5F] hover:bg-gray-50 rounded-md cursor-pointer"
                  onClick={() => handleScrollTo(featuresRef)}
                >
                  Fonctionnalités
                </a>
                <a 
                  href="#difference" 
                  className="block px-3 py-2 text-base text-gray-600 hover:text-[#FF5A5F] hover:bg-gray-50 rounded-md cursor-pointer"
                  onClick={() => handleScrollTo(differenceRef)}
                >
                  Avantages
                </a>
                <a 
                  href="#how-it-works" 
                  className="block px-3 py-2 text-base text-gray-600 hover:text-[#FF5A5F] hover:bg-gray-50 rounded-md cursor-pointer"
                  onClick={() => handleScrollTo(howItWorksRef)}
                >
                  Comment ça marche
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        id="hero" 
        ref={heroRef}
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="hero-content pt-16 md:pt-0">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="hero-grid md:grid-cols-2 gap-8 items-center">
              <div className="hero-text">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FF5A5F] to-[#660F0F] text-transparent bg-clip-text">
                  Obtiens 7,2x plus de matchs
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-700">
                  Utilise notre intelligence artificielle pour avoir des photos captivantes qui attirent, même les plus belles femmes.
                </p>
                <div className="block md:hidden">
                  <div className="hero-image-container">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <img 
                        src={MobileImage}
                        alt="Exemple de photo améliorée pour mobile"
                        className="w-full max-w-2xl mx-auto rounded-[1rem]"
                      />
                    </motion.div>
                  </div>
                </div>
                <div className="hero-buttons">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center justify-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={AppleLogo} 
                      alt="Apple Logo" 
                      className="h-6 w-auto filter invert"
                    />
                    {"Télécharger sur\nl'App Store"}
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary flex items-center justify-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={PlayStoreLogo} 
                      alt="Play Store Logo" 
                      className="h-6 w-6"
                    />
                    {"Disponible sur\nGoogle Play"}
                  </motion.button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="hero-image-container">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <img 
                      src={Image}
                      alt="Exemple de photo améliorée"
                      className="w-full max-w-2xl mx-auto rounded-[1rem]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        ref={featuresRef}
        className="difference-section py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="clay-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Enfin un truc qui marche</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Gagne un temps précieux et arrête d'être ignoré</p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Camera className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Photos améliorées</h3>
                <p className="text-gray-600">Nos algorithmes d'IA analysent et améliorent automatiquement vos photos pour les rendre plus attrayantes.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Brain className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Intelligence artificielle</h3>
                <p className="text-gray-600">Notre IA apprend de millions de profils pour vous donner les meilleurs conseils personnalisés.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Sparkles className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Résultats rapides</h3>
                <p className="text-gray-600">Obtenez des résultats concrets en quelques jours, grâce à notre approche scientifique et éprouvée.</p>
              </motion.div>
            </div>
            <div className="hero-image-container mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img 
                  src={BeforeAfter}
                  alt="Transformation avant/après"
                  className="w-full max-w-2xl mx-auto rounded-[1rem]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Difference Section */}
      <motion.section 
        id="difference" 
        ref={differenceRef}
        className="difference-section py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="clay-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Deviens différent</h2>
            <p className="text-xl text-center text-gray-600 mb-12">Sur les apps de rencontre, 90% de tes résultats dépendent de tes photos.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Camera className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Photos en action</h3>
                <p className="text-gray-600">Arrête d'être ignoré et génère beaucoup de matchs grâce aux photos de toi en activité</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Brain className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Photos qui te ressemblent</h3>
                <p className="text-gray-600">Arrête les discussions sans intérêt et utilise ton nouveau profil pour trouver des femmes qui te veulent</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Sparkles className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Résultats rapides</h3>
                <p className="text-gray-600">Arrête de perdre du temps et utilise une solution prouvée qui donne des résultats rapides</p>
              </motion.div>
            </div>
            <div className="hero-image-container mt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <img 
                  src={Canard}
                  alt="Différence avant/après"
                  className="w-full max-w-2xl mx-auto rounded-[1rem]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Nouvelle section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Accède aux plus belles femmes</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600">Télécharge l'application maintenant pour commencer ta transformation</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={AppleLogo} 
                alt="Apple Logo" 
                className="h-6 w-auto filter invert"
              />
              {"Télécharger sur\nl'App Store"}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-3 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={PlayStoreLogo} 
                alt="Play Store Logo" 
                className="h-6 w-6"
              />
              {"Disponible sur\nGoogle Play"}
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* How it Works Section */}
      <motion.section 
        id="how-it-works" 
        ref={howItWorksRef}
        className="how-it-works-section py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="clay-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Comment ça marche ?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Upload className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Upload tes photos</h3>
                <p className="text-gray-600">Télécharge quelques photos de toi</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Sparkles className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Génère des photos uniques</h3>
                <p className="text-gray-600">L'IA crée des photos attrayantes avec l'effet paparazzi.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="clay-card text-center"
              >
                <div className="clay-icon inline-block">
                  <Heart className="w-8 h-8 text-[#FF5A5F]" />
                </div>
                <h3 className="text-xl font-bold mb-4">Attire les filles</h3>
                <p className="text-gray-600">Utilise tes nouvelles photos pour avoir plus de matchs.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        id="faq" 
        ref={faqRef}
        className="faq-section py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="clay-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions fréquentes</h2>
            <div className="space-y-8">
              {[
                {
                  q: "Est-ce que ça marche vraiment?",
                  a: "Oui, 94% de nos utilisateurs ont constaté une augmentation significative de leurs matchs dans les 24 heures suivant l'utilisation."
                },
                {
                  q: "Est-ce que les photos ont l'air fausses?",
                  a: "Non, nos photos sont hyper réalistes et retouchées à la main pour garantir leur authenticité. C'est toujours toi, mais présenté sous ton meilleur jour."
                },
                {
                  q: "J'ai déjà essayé de changer mes photos, pourquoi ça serait différent?",
                  a: "Loveshot ne fait pas de simples retouches. Nous utilisons des techniques scientifiques qui ont fait leurs preuves pour capturer ce que tu as de meilleur."
                },
                {
                  q: "Est-ce que l'offre illimitée inclut une période d'essai?",
                  a: "Oui, tu peux essayer notre service et payer plus tard si tu es satisfait des résultats."
                }
              ].map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="clay-card"
                >
                  <h3 className="text-xl font-bold mb-4">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;