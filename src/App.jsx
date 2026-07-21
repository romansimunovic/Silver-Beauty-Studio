import React, { useState } from "react";
import { MapPin, Clock, Palette, Brush, Sparkles, Mail, Phone } from "lucide-react";

import NailsMakeupBooking from "./components/NailsMakeupBooking";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";

const SALON_CONFIG = {
  name: "Silver Beauty Studio",
  owner: "Maja Kušljić",
  subtitle: "Luxury Beauty Studio ✨",
  address: "Josipa Jurja Strossmayera 29, 35000, Slavonski Brod",
  hours: "Radno vrijeme: Po dogovoru (uz najavu)",
  phone: "091 600 7938",
  email: "silverbeautystudio1@gmail.com",
  social: { 
    instagram: "https://www.instagram.com/silverbeautystudio/", 
    facebook: "https://www.facebook.com/profile.php?id=61559850385020&ref=NONE_xav_ig_profile_page_web#"
  },
  trust: { 
    rating: 5.0, 
    reviews: 50,
    items: ["Nokti", "Profesionalni Make up", "Spray Tan"] 
  },
  services: [
    { id: 'Nokti', title: "Nokti", desc: "Kompletna njega, manikura, vrhunski trajni lak i precizno modeliranje.", price: "Na upit" },
    { id: 'Makeup', title: "Profesionalni Make up", desc: "Ekskluzivni i besprijekoran izgled prilagođen Vašim crtama lica za sve prigode.", price: "Na upit" },
    { id: 'spray-tan', title: "Spray Tan", desc: "Ujednačen i prekrasan preplanuli ten bez opasnog UV zračenja.", price: "Na upit" }
  ]
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-[#FFFDFE] text-[#4A3E3F] font-sans scroll-smooth overflow-x-hidden">
      
      {/* NAV - Prilagođen za sve ekrane */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDFE]/90 backdrop-blur-md px-4 sm:px-6 py-4 flex justify-between items-center border-b border-[#FDF5F6]">
        <h1 className="font-serif text-sm sm:text-base md:text-lg tracking-widest uppercase truncate max-w-[70%]">
          {SALON_CONFIG.name}
        </h1>
        <div className="flex gap-4 sm:gap-5 text-[#4A3E3F] shrink-0">
          {/* INSTAGRAM */}
          <a href={SALON_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C98B94] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
          {/* FACEBOOK */}
          <a href={SALON_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="hover:text-[#C98B94] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* HERO - Urednički Split Layout (Savršeno responzivan) */}
      <header className="min-h-[90vh] grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-20 bg-[#FFFDFE] items-stretch">
        
        {/* LIJEVA STRANA: Sadržaj */}
        <div className="flex flex-col justify-center items-start px-6 sm:px-12 md:px-16 py-12 space-y-6 bg-gradient-to-br from-[#FDF5F6]/60 via-transparent to-transparent order-2 md:order-1">
          <div className="space-y-2">
            <p className="text-[10px] sm:text-[15px] uppercase tracking-[0.4em] text-[#C98B94] font-semibold">
              {SALON_CONFIG.subtitle}
            </p>
            <div className="h-[1.5px] w-12 bg-[#C98B94]/40 mt-1" />
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-tight text-[#4A3E3F]">
            Luksuzni tretmani<br />
            <span className="italic text-[#C98B94]">za Vašu ljepotu</span>
          </h1>
          
          <p className="text-base sm:text-lg opacity-85 max-w-md leading-relaxed text-[#4A3E3F]/80">
            Prepustite se stručnim rukama u ugodnom ambijentu našeg studija. 
            Specijalizirani za vrhunsku njegu noktiju, profesionalni make-up i savršen spray tan ten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a 
              href="#booking" 
              className="w-full sm:w-auto text-center bg-[#4A3E3F] text-white px-8 py-3.5 rounded-full text-base sm:text-lg uppercase tracking-widest font-bold hover:bg-[#C98B94] hover:scale-105 transition-all shadow-sm"
            >
              REZERVIRAJ
            </a>
            <a 
              href="#gallery" 
              className="w-full sm:w-auto text-center border border-[#4A3E3F] text-[#4A3E3F] px-8 py-3.5 rounded-full text-base sm:text-lg uppercase tracking-widest font-bold hover:bg-[#FDF5F6] transition-colors"
            >
              Radovi
            </a>
          </div>
        </div>

        {/* DESNA STRANA: Facebook Banner bez preklapanja */}
        <div className="relative min-h-[35vh] sm:min-h-[45vh] md:min-h-0 order-1 md:order-2 overflow-hidden bg-black flex items-center">
          <img 
            src="/images/banner.jpg" 
            alt="Silver Beauty Studio Vizual" 
            className="w-full h-full object-cover object-center md:absolute md:inset-0"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#FFFDFE]/20 via-transparent to-transparent pointer-events-none" />
        </div>

      </header>

      {/* GLAVNI SADRŽAJ */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-20 sm:space-y-28 overflow-x-hidden">
        
        {/* TRUST / INFOBAR - POPRAVLJENO: Na mobitelu ide vertikalno, na desktopu horizontalno */}
        <section className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 py-8 border-y border-[#FDF5F6] w-full text-center">
          <div className="space-y-1">
            <p className="text-2xl font-serif">5.0★</p>
            <span className="text-[15px] uppercase tracking-wider opacity-60 block">Google Ocjena</span>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#FDF5F6]" /> {/* Elegantni separator za desktop */}
          <div className="space-y-1">
            <p className="text-2xl font-serif">50+</p>
            <span className="text-[15px] uppercase tracking-wider opacity-60 block">Klijentica</span>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#FDF5F6]" /> {/* Elegantni separator za desktop */}
          <div className="space-y-1">
            <p className="text-2xl font-serif">Premium</p>
            <span className="text-[15px] uppercase tracking-wider opacity-60 block">Kvaliteta</span>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-12">Usluge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SALON_CONFIG.services.map((service, index) => (
              <div key={index} className="p-6 border border-[#FDF5F6] bg-white rounded-2xl hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl mb-3">{service.title}</h3>
                  <p className="text-base sm:text-lg opacity-75 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <span className="text-[#7c444c] text-base sm:text-lg font-bold uppercase tracking-wider">{service.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="overflow-hidden">
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-2">Radovi</h2>
          <p className="text-center text-base sm:text-lg opacity-60 mb-8 sm:mb-10 px-2">
            Rezultati naših ekskluzivnih tretmana
          </p>
          <Gallery setImage={setSelectedImage} />
        </section>

        {/* WHY */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-center mb-10 sm:mb-12">Zašto Silver Beauty Studio?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6">
            {[
              { icon: <Palette size={24} />, title: "Individualnost", text: "Svakom stilu i noktima pristupamo unikatno, naglašavajući Vašu osobnost." },
              { icon: <Brush size={24} />, title: "Preciznost", text: "Estetska pedantnost i čiste linije ključ su svakog našeg uspješnog rada." },
              { icon: <Sparkles size={24} />, title: "Dugotrajnost", text: "Koristimo isključivo certificirane i luksuzne materijale za vrhunski rezultat." }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-2 p-4">
                <div className="text-[#C98B94] flex justify-center mb-2">{item.icon}</div>
                <h3 className="uppercase font-bold text-base sm:text-lg tracking-wider">{item.title}</h3>
                <p className="text-base sm:text-lg opacity-70 leading-relaxed max-w-sm mx-auto">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="bg-[#FDF5F6]/40 py-8 sm:py-12 px-4 sm:px-6 rounded-3xl border border-[#FDF5F6]">
          <NailsMakeupBooking />
        </section>

        {/* LOCATION & CONTACT */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-center md:text-left mb-4">Gdje se nalazimo?</h2>
            
            <div className="space-y-4 text-xs opacity-80 max-w-md mx-auto md:mx-0">
              <p className="flex gap-3 items-start">
                <MapPin size={16} className="text-[#C98B94] shrink-0 mt-0.5"/> 
                <span>{SALON_CONFIG.address}</span>
              </p>

              <p className="flex gap-3 items-start">
                <Clock size={16} className="text-[#C98B94] shrink-0 mt-0.5"/> 
                <span>{SALON_CONFIG.hours}</span>
              </p>

              <a 
                href={`tel:${SALON_CONFIG.phone.replace(/\s/g, '')}`} 
                className="flex gap-3 items-center hover:text-[#C98B94] transition-colors group"
              >
                <Phone size={16} className="text-[#C98B94] group-hover:scale-110 transition-transform shrink-0"/> 
                {SALON_CONFIG.phone}
              </a>

              <a 
                href={`mailto:${SALON_CONFIG.email}`} 
                className="flex gap-3 items-center hover:text-[#C98B94] transition-colors group truncate"
              >
                <Mail size={16} className="text-[#C98B94] group-hover:scale-110 transition-transform shrink-0"/> 
                <span className="truncate">{SALON_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Interaktivna Karta */}
          <div className="h-60 sm:h-64 rounded-3xl overflow-hidden shadow-sm border border-[#FDF5F6] w-full">
            <iframe
              title="Silver Beauty Studio Lokacija"
              loading="lazy"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.6529333830254!2d18.02480530000001!3d45.15362649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475db779549c8469%3A0x9b2c453ec02e0b8!2sSilver%20Beauty%20Studio!5e0!3m2!1sen!2sus!4v1784382216037!5m2!1sen!2sus" 
              allowFullScreen
            />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#4A3E3F] text-white py-10 text-center text-[9px] sm:text-[10px] uppercase tracking-widest mt-20 px-4">
        © 2026 {SALON_CONFIG.name} • Vlasnica {SALON_CONFIG.owner}
      </footer>

      {/* GLOBAL LIGHTBOX */}
      <Lightbox image={selectedImage} setImage={setSelectedImage} />
    </div>
  );
}