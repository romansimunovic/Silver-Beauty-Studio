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
    <div className="min-h-screen bg-[#FFFDFE] text-[#4A3E3F] font-sans scroll-smooth">
      
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFDFE]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-[#FDF5F6]">
        <h1 className="font-serif text-lg tracking-widest uppercase">{SALON_CONFIG.name}</h1>
        <div className="flex gap-5 text-[#4A3E3F]">
          {/* INSTAGRAM PURE SVG */}
          <a href={SALON_CONFIG.social.instagram} target="_blank" rel="noreferrer" className="hover:text-[#C98B94] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          
          {/* FACEBOOK PURE SVG */}
          <a href={SALON_CONFIG.social.facebook} target="_blank" rel="noreferrer" className="hover:text-[#C98B94] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="h-[90vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#FDF5F6] to-transparent">
        <p className="text-[10px] uppercase tracking-[0.4em] mb-4 text-[#C98B94] font-semibold">
          {SALON_CONFIG.subtitle}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
          Luksuzni tretmani<br/>za Vašu ljepotu
        </h1>
        <div className="flex gap-4">
          <a href="#booking" className="bg-[#4A3E3F] text-white px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform shadow-sm">
            Rezerviraj
          </a>
          <a href="#gallery" className="border border-[#4A3E3F] px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#FDF5F6] transition-colors">
            Radovi
          </a>
        </div>
      </header>

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-28 overflow-x-hidden">
        
        {/* TRUST / INFOBAR */}
        <section className="flex justify-center gap-12 py-8 border-y border-[#FDF5F6]">
          <div className="text-center">
            <p className="text-2xl font-serif">5.0★</p>
            <span className="text-[10px] uppercase tracking-wider opacity-60">Google Ocjena</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif">50+</p>
            <span className="text-[10px] uppercase tracking-wider opacity-60">Klijentica</span>
          </div>
          <div className="text-center">
            <p className="text-2xl font-serif">Premium</p>
            <span className="text-[10px] uppercase tracking-wider opacity-60">Kvaliteta</span>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services">
          <h2 className="font-serif text-3xl text-center mb-12">Naše Usluge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SALON_CONFIG.services.map((service, index) => (
              <div key={index} className="p-6 border border-[#FDF5F6] bg-white rounded-2xl hover:shadow-md transition-all flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl mb-3">{service.title}</h3>
                  <p className="text-xs opacity-75 leading-relaxed mb-6">{service.desc}</p>
                </div>
                <span className="text-[#7c444c] text-xs font-bold uppercase tracking-wider">{service.price}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery">
          <h2 className="font-serif text-3xl text-center mb-2">Radovi</h2>
          <p className="text-center text-xs opacity-60 mb-10">Pogledajte rezultate naših ekskluzivnih tretmana</p>
          <Gallery setImage={setSelectedImage} />
        </section>

        {/* WHY */}
        <section>
          <h2 className="font-serif text-3xl text-center mb-12">Zašto Silver Beauty Studio?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Palette size={24} />, title: "Individualnost", text: "Svakom stilu i noktima pristupamo unikatno, naglašavajući Vašu osobnost." },
              { icon: <Brush size={24} />, title: "Preciznost", text: "Estetska pedantnost i čiste linije ključ su svakog našeg uspješnog rada." },
              { icon: <Sparkles size={24} />, title: "Dugotrajnost", text: "Koristimo isključivo certificirane i luksuzne materijale za vrhunski rezultat." }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 p-4">
                <div className="text-[#C98B94] flex justify-center mb-2">{item.icon}</div>
                <h3 className="uppercase font-bold text-xs tracking-wider">{item.title}</h3>
                <p className="text-xs opacity-70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking" className="bg-[#FDF5F6]/40 py-12 px-4 rounded-3xl border border-[#FDF5F6]">
          <NailsMakeupBooking />
        </section>

        {/* LOCATION & CONTACT */}
<section className="grid md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">
    <h2 className="font-serif text-3xl mb-4">Gdje se nalazimo?</h2>
    
    <div className="space-y-4 text-xs opacity-80">
      {/* Lokacija (ostaje kao tekst, ili možeš dodati link na Google Maps) */}
      <p className="flex gap-3 items-center">
        <MapPin size={16} className="text-[#C98B94] shrink-0"/> 
        {SALON_CONFIG.address}
      </p>

      {/* Radno vrijeme */}
      <p className="flex gap-3 items-center">
        <Clock size={16} className="text-[#C98B94] shrink-0"/> 
        {SALON_CONFIG.hours}
      </p>

      {/* Klikabilni telefon */}
      <a 
        href={`tel:${SALON_CONFIG.phone.replace(/\s/g, '')}`} 
        className="flex gap-3 items-center hover:text-[#C98B94] transition-colors group"
      >
        <Phone size={16} className="text-[#C98B94] group-hover:scale-110 transition-transform shrink-0"/> 
        {SALON_CONFIG.phone}
      </a>

      {/* Klikabilni email */}
      <a 
        href={`mailto:${SALON_CONFIG.email}`} 
        className="flex gap-3 items-center hover:text-[#C98B94] transition-colors group"
      >
        <Mail size={16} className="text-[#C98B94] group-hover:scale-110 transition-transform shrink-0"/> 
        {SALON_CONFIG.email}
      </a>
    </div>
  </div>

           {/* Potpuno točna interaktivna Google Mapa za adresu Maje Kušljić u Slavonskom Brosu */}
          <div className="h-64 rounded-3xl overflow-hidden shadow-sm border border-[#FDF5F6]">
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
      <footer className="bg-[#4A3E3F] text-white py-12 text-center text-[10px] uppercase tracking-widest mt-24">
        © 2026 {SALON_CONFIG.name} • Vlasnica {SALON_CONFIG.owner}
      </footer>

      {/* GLOBAL LIGHTBOX */}
      <Lightbox image={selectedImage} setImage={setSelectedImage} />
    </div>
  );
}