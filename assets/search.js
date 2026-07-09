const searchIndex = [
  { title: "Unit 1 — Saludos",
    keywords: "greetings alphabet pronunciation hola buenos días farewells polite expressions",
    url: "/teaching/spanish/a1/a1-1/unit-1.html" },
  { title: "Unit 2 — Origen",
    keywords: "countries nationalities SER español mexicano origin de dónde eres",
    url: "/teaching/spanish/a1/a1-1/unit-2.html" },
  { title: "Unit 3 — Profesiones",
    keywords: "jobs professions gender plurals médico profesor architect gender",
    url: "/teaching/spanish/a1/a1-1/unit-3.html" },
  { title: "Unit 4 — Ubicación",
    keywords: "location ESTAR prepositions cerca lejos dónde está bank hospital",
    url: "/teaching/spanish/a1/a1-1/unit-4.html" },
  { title: "Unit 5 — Objetos",
    keywords: "objects articles demonstratives HAY este ese aquel libro mesa",
    url: "/teaching/spanish/a1/a1-1/unit-5.html" },
  { title: "Unit 6 — Familia",
    keywords: "family possessives TENER padre madre hermano hijo abuelo",
    url: "/teaching/spanish/a1/a1-1/unit-6.html" },
  { title: "Unit 7 — Descripción",
    keywords: "physical description personality SER TENER alto rubio ojos pelo",
    url: "/teaching/spanish/a1/a1-1/unit-7.html" },
  { title: "Quick Check A",
    keywords: "quick check review units 1 2 3 oral recap greetings countries professions",
    url: "/teaching/spanish/a1/a1-1/quick-check-a.html" },
  { title: "Knowledge Check 1",
    keywords: "knowledge check review units 1-7 identity existence conversation",
    url: "/teaching/spanish/a1/a1-1/knowledge-check-1.html" },
  { title: "Unit 8 — Estados",
    keywords: "emotions states ESTAR SER cansado triste nervioso TENER hambre",
    url: "/teaching/spanish/a1/a1-2/unit-8.html" },
  { title: "Unit 9 — La Semana",
    keywords: "week days -AR verbs frequency siempre nunca lunes trabajo",
    url: "/teaching/spanish/a1/a1-2/unit-9.html" },
  { title: "Unit 10 — Rutina",
    keywords: "daily routine reflexive verbs time telling me levanto ducho acuesto",
    url: "/teaching/spanish/a1/a1-2/unit-10.html" },
  { title: "Unit 11 — Calendario",
    keywords: "dates months seasons weather hace llueve nieva calendar future IR A",
    url: "/teaching/spanish/a1/a1-2/unit-11.html" },
  { title: "Quick Check B",
    keywords: "quick check review units 8 9 10 states week routine time",
    url: "/teaching/spanish/a1/a1-2/quick-check-b.html" },
  { title: "Knowledge Check 2",
    keywords: "knowledge check review units 8-11 daily life preferences conversation",
    url: "/teaching/spanish/a1/a1-2/knowledge-check-2.html" },
  { title: "Unit 12 — Aficiones",
    keywords: "hobbies GUSTAR likes preferences me gusta encantar interesar bailar",
    url: "/teaching/spanish/a1/a1-2/unit-12.html" },
  { title: "Unit 13 — Restaurante",
    keywords: "restaurant ordering food PEDIR QUERER quisiera carta menú paella",
    url: "/teaching/spanish/a1/a1-2/unit-13.html" },
  { title: "Unit 14 — De Compras",
    keywords: "shopping clothing pronouns lo la los las QUEDAR talla precio",
    url: "/teaching/spanish/a1/a1-2/unit-14.html" },
  { title: "Knowledge Check 3",
    keywords: "knowledge check review units 12-14 hobbies restaurant shopping",
    url: "/teaching/spanish/a1/a1-2/knowledge-check-3.html" },
  { title: "Unit 15 — Comparaciones",
    keywords: "comparisons más menos tan como mejor peor mayor menor -ísimo",
    url: "/teaching/spanish/a1/a1-3/unit-15.html" },
  { title: "Unit 15b — Obligación",
    keywords: "obligation TENER QUE HAY QUE necesitar deber must have to",
    url: "/teaching/spanish/a1/a1-3/unit-15b.html" },
  { title: "Unit 16 — Ciudad",
    keywords: "city directions imperative girar seguir cruzar SABER CONOCER metro",
    url: "/teaching/spanish/a1/a1-3/unit-16.html" },
  { title: "Unit 17 — Salud",
    keywords: "health body parts DOLER me duele cabeza fiebre médico",
    url: "/teaching/spanish/a1/a1-3/unit-17.html" },
  { title: "Quick Check C",
    keywords: "quick check review units 15 16 17 comparisons city health",
    url: "/teaching/spanish/a1/a1-3/quick-check-c.html" },
  { title: "Knowledge Check 4",
    keywords: "knowledge check review units 15-17 comparisons directions health",
    url: "/teaching/spanish/a1/a1-3/knowledge-check-4.html" },
  { title: "Unit 18 — Futuro",
    keywords: "future IR A infinitive plans voy vas va vamos mañana semana que viene",
    url: "/teaching/spanish/a1/a1-3/unit-18.html" },
  { title: "Unit 19 — Pasado I",
    keywords: "past preterite regular verbs -AR -ER -IR hablé comí viví ayer",
    url: "/teaching/spanish/a1/a1-3/unit-19.html" },
  { title: "Unit 20 — Pasado II",
    keywords: "past irregular preterite fui tuve estuve hice viaje travel pasado",
    url: "/teaching/spanish/a1/a1-3/unit-20.html" },
  { title: "Knowledge Check 5",
    keywords: "knowledge check final review all units A1 complete conversation",
    url: "/teaching/spanish/a1/a1-3/knowledge-check-5.html" },
  { title: "Country Randomizer",
    keywords: "tool countries nationalities randomizer practice game",
    url: "/teaching/tools/country-randomizer.html" },
  { title: "Weather Randomizer",
    keywords: "tool weather city temperature conditions practice",
    url: "/teaching/tools/weather-randomizer.html" },
  { title: "Clock Trainer",
    keywords: "tool time clock telling la una son las practice",
    url: "/teaching/tools/clock-trainer.html" },
  { title: "Hobby Spinner",
    keywords: "tool hobbies GUSTAR spinner practice game",
    url: "/teaching/tools/hobby-spinner.html" },
  { title: "Restaurant Menu",
    keywords: "tool restaurant menu ordering food practice interactive",
    url: "/teaching/tools/restaurant-menu.html" },
  { title: "Body Map",
    keywords: "tool body parts health DOLER clickable interactive",
    url: "/teaching/tools/body-map.html" },
  { title: "Trip Randomizer",
    keywords: "tool travel past trip preterite randomizer practice",
    url: "/teaching/tools/trip-randomizer.html" }
];

function runSearch(query) {
  const results = document.getElementById('search-results');
  if (!query || query.length < 2) {
    results.style.display = 'none';
    return;
  }
  const q = query.toLowerCase();
  const matches = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) ||
    item.keywords.toLowerCase().includes(q)
  );
  if (matches.length === 0) {
    results.innerHTML = '<div style="padding:12px 16px;color:#a09880;font-size:13px;">No results / 无结果</div>';
  } else {
    results.innerHTML = matches.map(m =>
      `<a href="${m.url}" style="display:block;padding:10px 16px;font-size:13px;color:#2e2416;text-decoration:none;border-bottom:1px solid #f0ede6;" onmouseover="this.style.background='#f7f5ef'" onmouseout="this.style.background='#ffffff'">${m.title}</a>`
    ).join('');
  }
  results.style.display = 'block';
}

function showResults() {
  const val = document.getElementById('site-search').value;
  if (val && val.length >= 2) runSearch(val);
}

function hideResults() {
  const el = document.getElementById('search-results');
  if (el) el.style.display = 'none';
}
