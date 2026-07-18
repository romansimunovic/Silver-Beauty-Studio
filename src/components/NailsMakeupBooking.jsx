import React, { useState } from "react";
import { Calendar, Clock, User, Phone, CheckCircle, Bell, Sparkles, X } from "lucide-react";

// Popis usluga za brzi odabir unutar forme
const SERVICES = [
  { id: "Nokti", name: "Njega i uređivanje noktiju" },
  { id: "Makeup", name: "Profesionalni Make-up" },
  { id: "SprayTan", name: "Spray Tan tretman" }
];

// Simulacija slobodnih termina (u stvarnosti bi išlo iz baze, ovdje je dinamički za demo)
const MOCK_SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:30", "17:00", "18:30"];

export default function NailsMakeupBooking() {
  // Stanja za formu
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Stanje za prikaz potvrdnog prozora (Modal)
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [wantReminder, setWantReminder] = useState(true);

  // Funkcija za predaju forme
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!service || !date || !timeSlot || !name || !phone) {
      alert("Molimo ispunite sva polja i odaberite termin.");
      return;
    }
    // Otvaramo predivan potvrdni prozor
    setShowConfirmation(true);
  };

  // Resetiranje forme nakon zatvaranja modala
  const closeModal = () => {
    setShowConfirmation(false);
    setService("");
    setDate("");
    setTimeSlot("");
    setName("");
    setPhone("");
  };

  // Formatiranje datuma za ljepši prikaz u modalu (npr. 2026-07-18 -> 18.07.2026.)
  const formatFriendlyDate = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}.${month}.${year}.`;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xs relative">
      <div className="text-center space-y-2 mb-8">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3E3F]">Rezervirajte svoj termin</h3>
        <p className="text-xs text-[#4A3E3F]/60">Brzo i jednostavno osigurajte svoje vrijeme za opuštanje</p>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-6">
        {/* 1. ODABIR USLUGE */}
        <div className="space-y-2">
          <label className="text-[11px] uppercase tracking-wider font-bold text-[#4A3E3F]/80 flex items-center gap-2">
            <Sparkles size={14} className="text-[#C98B94]" /> Odaberite uslugu
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3.5 bg-[#FDF5F6]/50 border border-[#FDF5F6] rounded-xl text-sm focus:outline-hidden focus:border-[#C98B94] text-[#4A3E3F]"
            required
          >
            <option value="">-- Odaberite tretman --</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>

        {/* 2. ODABIR DATUMA - Popravljena mobilna responzivnost */}
        <div className="space-y-2 w-full max-w-full">
          <label className="text-[11px] uppercase tracking-wider font-bold text-[#4A3E3F]/80 flex items-center gap-2">
            <Calendar size={14} className="text-[#C98B94]" /> Odaberite datum
          </label>
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]} // Onemogući prošle dane
            onChange={(e) => {
              setDate(e.target.value);
              setTimeSlot(""); 
            }}
            className="block w-full max-w-full min-w-0 p-3.5 bg-[#FDF5F6]/50 border border-[#FDF5F6] rounded-xl text-sm text-[#4A3E3F] focus:outline-none focus:border-[#C98B94] box-border appearance-none"
            style={{ width: '100%', minWidth: '100%' }} // Prisilno pregaženje za tvrdoglave mobilne preglednike
            required
          />
        </div>

        {/* 3. SLOBODNI TERMINI (Prikazuju se tek kad klijentica klikne/odabere datum) */}
        {date && (
          <div className="space-y-3 pt-2 animate-fadeIn">
            <label className="text-[11px] uppercase tracking-wider font-bold text-[#4A3E3F]/80 flex items-center gap-2">
              <Clock size={14} className="text-[#C98B94]" /> Slobodni termini za {formatFriendlyDate(date)}
            </label>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
              {MOCK_SLOTS.map((slot) => {
                const isSelected = timeSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`p-3 text-xs font-semibold rounded-xl tracking-wider transition-all border text-center ${
                      isSelected
                        ? "bg-[#4A3E3F] text-white border-[#4A3E3F] shadow-xs scale-95"
                        : "bg-white text-[#4A3E3F] border-[#FDF5F6] hover:border-[#C98B94] hover:bg-[#FDF5F6]/30"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 4. OSOBNI PODACI (Prikazujemo ih tek kad odabere i vrijeme, da je ne zatrpavamo odmah) */}
        {timeSlot && (
          <div className="space-y-4 pt-4 border-t border-[#FDF5F6] text-left animate-fadeIn">
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-[#4A3E3F]/80 flex items-center gap-2">
                <User size={14} className="text-[#C98B94]" /> Vaše ime i prezime
              </label>
              <input
                type="text"
                placeholder="npr. Ana Horvat"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3.5 bg-[#FDF5F6]/50 border border-[#FDF5F6] rounded-xl text-sm focus:outline-hidden focus:border-[#C98B94]"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-wider font-bold text-[#4A3E3F]/80 flex items-center gap-2">
                <Phone size={14} className="text-[#C98B94]" /> Broj mobitela (za podsjetnik)
              </label>
              <input
                type="tel"
                placeholder="npr. 09x xxxx xxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3.5 bg-[#FDF5F6]/50 border border-[#FDF5F6] rounded-xl text-sm focus:outline-hidden focus:border-[#C98B94]"
                required
              />
            </div>

            {/* Kvačica za SMS/WhatsApp Ping dan prije */}
            <label className="flex items-center gap-3 pt-2 cursor-pointer group select-none">
              <input 
                type="checkbox" 
                checked={wantReminder} 
                onChange={(e) => setWantReminder(e.target.checked)}
                className="w-4 h-4 rounded-sm border-[#C98B94] accent-[#C98B94]"
              />
              <span className="text-xs text-[#4A3E3F]/80 group-hover:text-[#4A3E3F] flex items-center gap-1.5">
                <Bell size={13} className="text-[#C98B94]" /> Želim besplatan podsjetnik 24 sata prije termina
              </span>
            </label>
          </div>
        )}

        {/* GLAVNI GUMB ZA SLANJE */}
        <button
          type="submit"
          disabled={!timeSlot}
          className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
            timeSlot 
              ? "bg-[#C98B94] text-white hover:bg-[#b57a83] shadow-md hover:scale-[1.01] cursor-pointer" 
              : "bg-[#4A3E3F]/10 text-[#4A3E3F]/40 cursor-not-allowed"
          }`}
        >
          Dovrši rezervaciju
        </button>
      </form>

      {/* ================= EXTRA LUKSUZNI POTVRDNI OKVIR (MODAL) ================= */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 sm:p-8 text-center shadow-2xl relative border border-[#FDF5F6] animate-scaleUp">
            
            {/* Gumb za zatvaranje u kutu */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#4A3E3F]/40 hover:text-[#4A3E3F] transition-colors"
            >
              <X size={20} />
            </button>

            {/* Ikona uspjeha */}
            <div className="w-16 h-16 bg-[#FDF5F6] rounded-full flex items-center justify-center mx-auto text-[#C98B94] mb-4">
              <CheckCircle size={36} />
            </div>

            <h4 className="font-serif text-2xl text-[#4A3E3F] mb-2">Termin je rezerviran!</h4>
            <p className="text-xs text-[#4A3E3F]/60 mb-6">Hvala Vam, {name}. Vaš zahtjev je uspješno zaprimljen.</p>

            {/* Kartica s pregledom detalja */}
            <div className="bg-[#FDF5F6]/40 border border-[#FDF5F6] rounded-2xl p-4 text-left space-y-2.5 text-xs mb-6">
              <p className="text-[#4A3E3F]/70"><strong className="text-[#4A3E3F]">Tretman:</strong> {service}</p>
              <p className="text-[#4A3E3F]/70"><strong className="text-[#4A3E3F]">Datum:</strong> {formatFriendlyDate(date)}</p>
              <p className="text-[#4A3E3F]/70"><strong className="text-[#4A3E3F]">Vrijeme:</strong> {timeSlot} h</p>
            </div>

            {/* Obavijest o Pingu dan prije */}
            {wantReminder && (
              <div className="bg-[#C98B94]/10 text-[#7c444c] rounded-xl p-3 text-[11px] font-medium flex items-center justify-center gap-2 mb-6">
                <Bell size={14} className="shrink-0 animate-bounce" />
                <span>Automatski podsjetnik je uključen. Stiže Vam ping 24h ranije!</span>
              </div>
            )}

            {/* Gumb za zatvaranje / U redu */}
            <button
              onClick={closeModal}
              className="w-full py-3 bg-[#4A3E3F] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#C98B94] transition-colors"
            >
              U redu, zatvori
            </button>
          </div>
        </div>
      )}
    </div>
  );
}