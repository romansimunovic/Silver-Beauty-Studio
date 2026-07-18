import React, { useState } from "react";
import { SERVICES, RESERVED } from "../data/bookingConfig";
import { generateSlots } from "../utils/generateSlots";

export default function NailsMakeupBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  function handleDate(e) {
    const value = e.target.value;
    setDate(value);
    setSelectedSlot(""); // Resetiraj odabrani sat pri promjeni datuma
    if (value) {
      setSlots(generateSlots(value, RESERVED));
    } else {
      setSlots([]);
    }
  }

  function submit(e) {
    e.preventDefault();
    if (!selectedSlot) {
      alert("Molimo odaberite vrijeme termina.");
      return;
    }

    alert(
      `✨ ZAKAZIVANJE USPJEŠNO! ✨\n\n` +
      `Draga ${name}, Vaš upit za tretman "${SERVICES[service].name}" je zaprimljen.\n\n` +
      `📅 Datum: ${date}\n` +
      `⏰ Vrijeme: ${selectedSlot}h\n\n` +
      `🤖 AUTOMATIZACIJA PINGANJA UKLJUČENA:\n` +
      `Sustav će Vam automatski poslati SMS podsjetnik na broj ${phone} i potvrdni e-mail na ${email} točno 24 sata prije početka Vašeg termina.`
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto px-1 sm:px-0 overflow-hidden">
      <h2 className="font-serif text-3xl text-center mb-2">Provjeri dostupnost</h2>
      <p className="text-center text-xs opacity-60 mb-10">Brzo i jednostavno osigurajte svoj termin</p>

      <form onSubmit={submit} className="w-full space-y-5">
        <input
          required
          type="text"
          placeholder="Ime i prezime"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-4 border border-[#EFCACF] rounded-xl text-sm bg-white box-border focus:outline-none focus:ring-1 focus:ring-[#C98B94]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            required
            type="tel"
            placeholder="Telefon (npr. 091...)"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="w-full p-4 border border-[#EFCACF] rounded-xl text-sm bg-white box-border focus:outline-none focus:ring-1 focus:ring-[#C98B94]"
          />
          <input
            required
            type="email"
            placeholder="E-mail adresa"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-4 border border-[#EFCACF] rounded-xl text-sm bg-white box-border focus:outline-none focus:ring-1 focus:ring-[#C98B94]"
          />
        </div>

        <select
          required
          value={service}
          onChange={e => setService(e.target.value)}
          className="w-full p-4 border border-[#EFCACF] rounded-xl bg-white text-sm box-border focus:outline-none focus:ring-1 focus:ring-[#C98B94]"
        >
          <option value="">Odaberi uslugu</option>
          {Object.entries(SERVICES).map(([key, item]) => (
            <option key={key} value={key}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="w-full">
  <label className="block text-sm font-medium text-[#4A3E3F] mb-2">
    Odaberite datum posjeta
  </label>
  <div className="relative w-full">
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      min={new Date().toISOString().split('T')[0]} // Sprječava odabir prošlih datuma
      className="w-full min-w-0 max-w-full px-4 py-3.5 rounded-xl border border-[#C98B94]/20 bg-white text-[#4A3E3F] focus:outline-none focus:ring-2 focus:ring-[#C98B94] transition-all text-base appearance-none block box-border"
    />
  </div>
</div>

        {slots.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wider opacity-70">Slobodni termini za odabrani dan:</p>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full">
              {slots.map(slot => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`w-full p-3 rounded-xl text-xs font-semibold transition-all ${
                    selectedSlot === slot
                      ? "bg-[#C98B94] text-white shadow-md scale-95"
                      : "bg-[#FDF5F6] text-[#4A3E3F] hover:bg-[#EFCACF]/30"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="submit"
          disabled={!service || !date || !selectedSlot}
          className="w-full bg-[#4A3E3F] text-white p-4 rounded-xl text-xs uppercase tracking-widest font-bold hover:bg-[#3d3233] transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
        >
          Pošalji zahtjev za termin
        </button>
      </form>
    </div>
  );
}