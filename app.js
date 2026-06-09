// Main Application Controller

document.addEventListener("DOMContentLoaded", () => {
    initGeocoding();
    initForm();
    initLanguageSwitcher();
    initPrintButton();
    
    // Set default birth date/time for demonstration (e.g. Chennai, 2000-01-01 17:30 IST)
    document.getElementById("name").value = "Kiruthik";
    document.getElementById("dob").value = "2000-01-01";
    document.getElementById("tob").value = "17:30";
    document.getElementById("birthplace").value = "Chennai, Tamil Nadu, India";
    document.getElementById("latitude").value = "13.0827";
    document.getElementById("longitude").value = "80.2707";
    document.getElementById("timezone").value = "5.5";
});

// Autocomplete geocoding using Google Places or Nominatim OpenStreetMap API fallback
let googleAutocompleteActive = false;
let googleAutocomplete = null;

function initGeocoding() {
    const input = document.getElementById("birthplace");
    const suggestionBox = document.getElementById("geo-suggestions");
    const apiKeyInput = document.getElementById("google-api-key");
    let timeoutId;
    
    // Load cached Google API Key if exists
    const cachedKey = localStorage.getItem("google_maps_api_key") || "";
    if (apiKeyInput) {
        apiKeyInput.value = cachedKey;
        if (cachedKey) {
            loadGoogleMapsScript(cachedKey);
        }
        
        // Listen to changes to key
        apiKeyInput.addEventListener("change", () => {
            const key = apiKeyInput.value.trim();
            localStorage.setItem("google_maps_api_key", key);
            if (key) {
                loadGoogleMapsScript(key);
            } else {
                // If key is cleared, disable Google Autocomplete and allow Nominatim fallback
                googleAutocompleteActive = false;
                if (googleAutocomplete) {
                    google.maps.event.clearInstanceListeners(input);
                    googleAutocomplete = null;
                }
                const oldScript = document.getElementById("google-maps-api-script");
                if (oldScript) oldScript.remove();
            }
        });
    }
    
    input.addEventListener("input", () => {
        // If Google Autocomplete is active, let Google handle suggestions
        if (googleAutocompleteActive) {
            return;
        }
        
        clearTimeout(timeoutId);
        const query = input.value.trim();
        if (query.length < 3) {
            suggestionBox.innerHTML = "";
            return;
        }
        
        timeoutId = setTimeout(() => {
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`)
                .then(res => res.json())
                .then(data => {
                    suggestionBox.innerHTML = "";
                    data.forEach(item => {
                        const div = document.createElement("div");
                        div.className = "suggestion-item";
                        div.innerText = item.display_name;
                        div.addEventListener("click", () => {
                            input.value = item.display_name;
                            document.getElementById("latitude").value = parseFloat(item.lat).toFixed(4);
                            document.getElementById("longitude").value = parseFloat(item.lon).toFixed(4);
                            
                            // Approximate timezone offset based on longitude (15 degrees = 1 hour)
                            const approxTz = Math.round((parseFloat(item.lon) / 15) * 2) / 2;
                            document.getElementById("timezone").value = approxTz;
                            
                            suggestionBox.innerHTML = "";
                        });
                        suggestionBox.appendChild(div);
                    });
                })
                .catch(err => console.error("Geocoding search failed:", err));
        }, 500);
    });
    
    // Close suggestions on clicking outside
    document.addEventListener("click", (e) => {
        if (e.target !== input) {
            suggestionBox.innerHTML = "";
        }
    });
}

function loadGoogleMapsScript(key) {
    if (window.google && window.google.maps) {
        initGooglePlaces();
        return;
    }
    
    const existing = document.getElementById("google-maps-api-script");
    if (existing) existing.remove();
    
    const script = document.createElement("script");
    script.id = "google-maps-api-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(key)}&libraries=places&callback=initGooglePlaces`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
        console.error("Failed to load Google Maps API script.");
        googleAutocompleteActive = false;
        alert("Failed to load Google Maps API script. Please check your API key and internet connection.");
    };
    document.head.appendChild(script);
}

window.initGooglePlaces = function() {
    const input = document.getElementById("birthplace");
    const suggestionBox = document.getElementById("geo-suggestions");
    
    // Clear OSM suggestions list
    suggestionBox.innerHTML = "";
    
    try {
        googleAutocomplete = new google.maps.places.Autocomplete(input, {
            types: ["(cities)"]
        });
        googleAutocompleteActive = true;
        
        googleAutocomplete.addListener("place_changed", () => {
            const place = googleAutocomplete.getPlace();
            if (!place.geometry) {
                console.warn("No geometry details available for place: '" + place.name + "'");
                return;
            }
            
            const lat = place.geometry.location.lat();
            const lon = place.geometry.location.lng();
            
            document.getElementById("latitude").value = lat.toFixed(4);
            document.getElementById("longitude").value = lon.toFixed(4);
            
            // Calculate approximate timezone offset based on longitude
            const approxTz = Math.round((lon / 15) * 2) / 2;
            document.getElementById("timezone").value = approxTz;
        });
    } catch (e) {
        console.error("Failed to initialize Google Places Autocomplete:", e);
        googleAutocompleteActive = false;
    }
};

function initForm() {
    const form = document.getElementById("birth-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        calculateHoroscope();
    });
}

// Convert offset decimal to ISO timezone offset string (+HH:MM or -HH:MM)
function formatOffset(offsetDecimal) {
    const sign = offsetDecimal >= 0 ? "+" : "-";
    const absOffset = Math.abs(offsetDecimal);
    const hours = Math.floor(absOffset);
    const minutes = Math.round((absOffset - hours) * 60);
    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");
    return `${sign}${hh}:${mm}`;
}

function calculateHoroscope() {
    const name = document.getElementById("name").value.trim() || "Native";
    const dob = document.getElementById("dob").value;
    const tob = document.getElementById("tob").value;
    const birthplace = document.getElementById("birthplace").value.trim() || "Unknown";
    const latitude = parseFloat(document.getElementById("latitude").value);
    const longitude = parseFloat(document.getElementById("longitude").value);
    const timezone = parseFloat(document.getElementById("timezone").value);
    
    if (isNaN(latitude) || isNaN(longitude) || isNaN(timezone)) {
        alert("Please enter valid latitude, longitude, and timezone offset.");
        return;
    }
    
    // 1. Convert local time to UTC date using offset
    const offsetStr = formatOffset(timezone);
    const localDateTimeStr = `${dob}T${tob}:00${offsetStr}`;
    const birthDate = new Date(localDateTimeStr);
    
    if (isNaN(birthDate.getTime())) {
        alert("Invalid Date or Time of Birth.");
        return;
    }
    
    // Show loading indicator
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("results-section").classList.add("hidden");
    
    // Wrap calculation in setTimeout to allow UI thread to paint the loader
    setTimeout(() => {
        try {
            // Create AstroTime object for UTC birth time
            const time = Astronomy.MakeTime(birthDate);
            
            // Calculate Ayanamsa (absolute JD = time.ut + 2451545.0)
            const jd = time.ut + 2451545.0;
            const ayanamsa = AstrologyCalc.calculateAyanamsa(jd);
            
            // Calculate Sidereal Lagna
            const lagnaDetails = AstrologyCalc.calculateLagna(time, longitude, latitude, ayanamsa);
            
            // Calculate Sidereal positions of all planets
            const planetsList = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Rahu", "Ketu"];
            const planetaryData = planetsList.map(p => {
                const lon = AstrologyCalc.getSiderealLongitude(p, time, ayanamsa);
                const rasiIdx = AstrologyCalc.getRasiIndex(lon);
                const nakDetails = AstrologyCalc.getNakshatraDetails(lon);
                return {
                    name: p,
                    longitude: lon,
                    rasiIndex: rasiIdx,
                    nakIndex: nakDetails.index,
                    pada: nakDetails.pada,
                    progress: nakDetails.progress,
                    formattedLon: AstrologyCalc.formatDMS(lon % 30)
                };
            });
            
            // Extract Moon Sign & Nakshatra for basic birth details
            const moonData = planetaryData.find(p => p.name === "Moon");
            const moonRasiIdx = moonData.rasiIndex;
            const moonNakDetails = AstrologyCalc.getNakshatraDetails(moonData.longitude);
            
            // Generate Vimshottari Dashas
            const dashaData = DashaEngine.calculateDashas(moonData.longitude, birthDate);
            
            // Generate Gochara Transits (Saturn, Jupiter, Rahu, Ketu)
            const transitEvents = TransitEngine.calculateTransits(moonRasiIdx, birthDate);
            
            // Render basic birth info
            renderBasicInfo(name, dob, tob, birthplace, timezone, latitude, longitude, jd, ayanamsa, lagnaDetails, moonRasiIdx, moonNakDetails);
            
            // Render South Indian Rasi Charts (English & Tamil)
            renderRasiCharts(lagnaDetails.sidereal, planetaryData);
            
            // Render Planetary positions tables
            renderPlanetaryTables(lagnaDetails.sidereal, planetaryData);
            
            // Render Personality & Natal predictions
            renderNatalPredictions(lagnaDetails.sidereal, moonRasiIdx, moonNakDetails);
            
            // Render Vimshottari Dasha timeline
            renderDashaTimeline(dashaData);
            
            // Render Gochara transits list
            renderTransitTimeline(transitEvents);
            
            // Hide loading, show results
            document.getElementById("loading").classList.add("hidden");
            document.getElementById("results-section").classList.remove("hidden");
            
            // Scroll to results smoothly
            document.getElementById("results-section").scrollIntoView({ behavior: "smooth" });
            
        } catch (e) {
            console.error("Astrological calculation error:", e);
            alert("Calculation failed: " + e.message);
            document.getElementById("loading").classList.add("hidden");
        }
    }, 100);
}

function renderBasicInfo(name, dob, tob, birthplace, timezone, latitude, longitude, jd, ayanamsa, lagnaDetails, moonRasiIdx, moonNakDetails) {
    const lagnaRasi = Translations.rasis[AstrologyCalc.getRasiIndex(lagnaDetails.sidereal)];
    const moonRasi = Translations.rasis[moonRasiIdx];
    const moonNak = Translations.nakshatras[moonNakDetails.index];
    
    // English Panel
    const enHTML = `
        <div class="info-row"><strong>👤 Name:</strong> <span>${name}</span></div>
        <div class="info-row"><strong>📅 Date of Birth:</strong> <span>${dob}</span></div>
        <div class="info-row"><strong>⌚ Time of Birth (Local):</strong> <span>${tob} (UTC ${formatOffset(timezone)})</span></div>
        <div class="info-row"><strong>📍 Birthplace:</strong> <span>${birthplace}</span></div>
        <div class="info-row"><strong>🗺️ Coordinates:</strong> <span>${Math.abs(latitude).toFixed(4)}° ${latitude >= 0 ? "N" : "S"}, ${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? "E" : "W"}</span></div>
        <div class="info-row"><strong>🔢 Julian Date:</strong> <span>${jd.toFixed(4)}</span></div>
        <div class="info-row"><strong>📐 Lahiri Ayanamsa:</strong> <span>${AstrologyCalc.formatDMS(ayanamsa)}</span></div>
        <div class="info-row highlight"><strong>Ascendant (Lagna):</strong> <span>🌅 ${lagnaRasi.en} at ${AstrologyCalc.formatDMS(lagnaDetails.sidereal % 30)}</span></div>
        <div class="info-row highlight"><strong>Rasi (Moon Sign):</strong> <span>🌙 ${moonRasi.en}</span></div>
        <div class="info-row highlight"><strong>Nakshatra (Star):</strong> <span>⭐ ${moonNak.en} (Pada ${moonNakDetails.pada})</span></div>
    `;
    
    // Tamil Panel
    const taHTML = `
        <div class="info-row"><strong>👤 பெயர்:</strong> <span>${name}</span></div>
        <div class="info-row"><strong>📅 பிறந்த தேதி:</strong> <span>${dob}</span></div>
        <div class="info-row"><strong>⌚ பிறந்த நேரம்:</strong> <span>${tob} (UTC ${formatOffset(timezone)})</span></div>
        <div class="info-row"><strong>📍 பிறந்த இடம்:</strong> <span>${birthplace}</span></div>
        <div class="info-row"><strong>🗺️ புவியியல் குறியீடு:</strong> <span>${Math.abs(latitude).toFixed(4)}° ${latitude >= 0 ? "வ" : "தெ"}, ${Math.abs(longitude).toFixed(4)}° ${longitude >= 0 ? "கி" : "மே"}</span></div>
        <div class="info-row"><strong>🔢 ஜூலியன் நாள்:</strong> <span>${jd.toFixed(4)}</span></div>
        <div class="info-row"><strong>📐 லஹிரி அயனாம்சம்:</strong> <span>${AstrologyCalc.formatDMS(ayanamsa)}</span></div>
        <div class="info-row highlight"><strong>லக்னம் (Ascendant):</strong> <span>🌅 ${lagnaRasi.ta} - ${AstrologyCalc.formatDMS(lagnaDetails.sidereal % 30)}</span></div>
        <div class="info-row highlight"><strong>ராசி (சந்திர ராசி):</strong> <span>🌙 ${moonRasi.ta}</span></div>
        <div class="info-row highlight"><strong>நட்சத்திரம் (பாதம்):</strong> <span>⭐ ${moonNak.ta} (${moonNakDetails.pada}-ம் பாதம்)</span></div>
    `;
    
    document.getElementById("info-panel-en").innerHTML = enHTML;
    document.getElementById("info-panel-ta").innerHTML = taHTML;
}

// South Indian Chart Grid Mapping
// Clockwise from top-left (0,0) to left-middle (1,0)
const CHART_GRID_MAP = [
    { row: 0, col: 0, rasiIndex: 11, labelEn: "♓ Pisces", labelTa: "♓ மீனம்" },       // Meena
    { row: 0, col: 1, rasiIndex: 0, labelEn: "♈ Aries", labelTa: "♈ மேஷம்" },        // Mesha
    { row: 0, col: 2, rasiIndex: 1, labelEn: "♉ Taurus", labelTa: "♉ ரிஷபம்" },       // Rishabha
    { row: 0, col: 3, rasiIndex: 2, labelEn: "♊ Gemini", labelTa: "♊ மிதுனம்" },      // Mithuna
    { row: 1, col: 3, rasiIndex: 3, labelEn: "♋ Cancer", labelTa: "♋ கடகம்" },       // Kataka
    { row: 2, col: 3, rasiIndex: 4, labelEn: "♌ Leo", labelTa: "♌ சிம்மம்" },          // Simha
    { row: 3, col: 3, rasiIndex: 5, labelEn: "♍ Virgo", labelTa: "♍ கன்னி" },         // Kanya
    { row: 3, col: 2, rasiIndex: 6, labelEn: "♎ Libra", labelTa: "♎ துலாம்" },         // Tula
    { row: 3, col: 1, rasiIndex: 7, labelEn: "♏ Scorpio", labelTa: "♏ விருச்சிகம்" },  // Vrischika
    { row: 3, col: 0, rasiIndex: 8, labelEn: "♐ Sagittarius", labelTa: "♐ தனுசு" },  // Dhanus
    { row: 2, col: 0, rasiIndex: 9, labelEn: "♑ Capricorn", labelTa: "♑ மகரம்" },    // Makara
    { row: 1, col: 0, rasiIndex: 10, labelEn: "♒ Aquarius", labelTa: "♒ கும்பம்" }     // Kumbha
];

function renderRasiCharts(lagnaLon, planetaryData) {
    const lagnaRasiIdx = AstrologyCalc.getRasiIndex(lagnaLon);
    
    // English Rasi Chart Container
    const chartEn = document.getElementById("rasi-chart-en");
    chartEn.innerHTML = "";
    
    // Tamil Rasi Chart Container
    const chartTa = document.getElementById("rasi-chart-ta");
    chartTa.innerHTML = "";
    
    // Draw cells
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            // Check if it's the center merged area
            if ((r === 1 || r === 2) && (c === 1 || c === 2)) {
                if (r === 1 && c === 1) {
                    // Render center text once
                    const centerDivEn = document.createElement("div");
                    centerDivEn.className = "chart-cell-center";
                    centerDivEn.innerHTML = "<strong>🎡 RASI CHART 🪐</strong><br><small>✨ Sidereal (Lahiri)</small>";
                    centerDivEn.style.gridArea = "2 / 2 / 4 / 4";
                    chartEn.appendChild(centerDivEn);
                    
                    const centerDivTa = document.createElement("div");
                    centerDivTa.className = "chart-cell-center";
                    centerDivTa.innerHTML = "<strong>🎡 ராசி கட்டம் 🪐</strong><br><small>✨ நிரயண முறை</small>";
                    centerDivTa.style.gridArea = "2 / 2 / 4 / 4";
                    chartTa.appendChild(centerDivTa);
                }
                continue;
            }
            
            // Outer cells
            const gridConfig = CHART_GRID_MAP.find(m => m.row === r && m.col === c);
            const rasiIndex = gridConfig.rasiIndex;
            
            // Filter planets in this rasi
            const cellPlanets = planetaryData.filter(p => p.rasiIndex === rasiIndex);
            const isLagnaHere = lagnaRasiIdx === rasiIndex;
            
            // Build cell contents - English
            const cellDivEn = document.createElement("div");
            cellDivEn.className = "chart-cell";
            cellDivEn.style.gridRow = r + 1;
            cellDivEn.style.gridColumn = c + 1;
            
            let htmlEn = `<div class="rasi-name">${gridConfig.labelEn}</div>`;
            htmlEn += `<div class="rasi-planets">`;
            if (isLagnaHere) {
                htmlEn += `<span class="planet-tag lagna-tag">Lagn</span>`;
            }
            cellPlanets.forEach(p => {
                const label = p.name.substring(0, 2);
                htmlEn += `<span class="planet-tag ${p.name.toLowerCase()}-tag" title="${p.name} at ${p.formattedLon}">${label}</span>`;
            });
            htmlEn += `</div>`;
            cellDivEn.innerHTML = htmlEn;
            chartEn.appendChild(cellDivEn);
            
            // Build cell contents - Tamil
            const cellDivTa = document.createElement("div");
            cellDivTa.className = "chart-cell";
            cellDivTa.style.gridRow = r + 1;
            cellDivTa.style.gridColumn = c + 1;
            
            let htmlTa = `<div class="rasi-name">${gridConfig.labelTa}</div>`;
            htmlTa += `<div class="rasi-planets">`;
            if (isLagnaHere) {
                htmlTa += `<span class="planet-tag lagna-tag">லக்</span>`;
            }
            cellPlanets.forEach(p => {
                const labelTa = Translations.planets[p.name].ta.substring(0, 3);
                htmlTa += `<span class="planet-tag ${p.name.toLowerCase()}-tag" title="${Translations.planets[p.name].en} at ${p.formattedLon}">${labelTa}</span>`;
            });
            htmlTa += `</div>`;
            cellDivTa.innerHTML = htmlTa;
            chartTa.appendChild(cellDivTa);
        }
    }
}

function renderPlanetaryTables(lagnaLon, planetaryData) {
    const tableEn = document.getElementById("planets-table-en");
    const tableTa = document.getElementById("planets-table-ta");
    
    // English Table Header
    let htmlEn = `
        <thead>
            <tr>
                <th>🪐 Planet</th>
                <th>📐 Longitude</th>
                <th>🎡 Rasi Sign</th>
                <th>⭐ Nakshatra</th>
                <th>🦶 Pada</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>🌅 Ascendant (Lagna)</strong></td>
                <td>${AstrologyCalc.formatDMS(lagnaLon)}</td>
                <td>${Translations.rasis[AstrologyCalc.getRasiIndex(lagnaLon)].en}</td>
                <td>${Translations.nakshatras[AstrologyCalc.getNakshatraDetails(lagnaLon).index].en}</td>
                <td>${AstrologyCalc.getNakshatraDetails(lagnaLon).pada}</td>
            </tr>
    `;
    
    // Tamil Table Header
    let htmlTa = `
        <thead>
            <tr>
                <th>🪐 கிரகம்</th>
                <th>📐 பாகை</th>
                <th>🎡 ராசி</th>
                <th>⭐ நட்சத்திரம்</th>
                <th>🦶 பாதம்</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>🌅 லக்னம் (Lagna)</strong></td>
                <td>${AstrologyCalc.formatDMS(lagnaLon)}</td>
                <td>${Translations.rasis[AstrologyCalc.getRasiIndex(lagnaLon)].ta}</td>
                <td>${Translations.nakshatras[AstrologyCalc.getNakshatraDetails(lagnaLon).index].ta}</td>
                <td>${AstrologyCalc.getNakshatraDetails(lagnaLon).pada}</td>
            </tr>
    `;
    
    // Add planets
    planetaryData.forEach(p => {
        const pName = Translations.planets[p.name];
        const rasi = Translations.rasis[p.rasiIndex];
        const nak = Translations.nakshatras[p.nakIndex];
        
        htmlEn += `
            <tr>
                <td><strong>${pName.en}</strong></td>
                <td>${AstrologyCalc.formatDMS(p.longitude)}</td>
                <td>${rasi.en}</td>
                <td>${nak.en}</td>
                <td>${p.pada}</td>
            </tr>
        `;
        
        htmlTa += `
            <tr>
                <td><strong>${pName.ta}</strong></td>
                <td>${AstrologyCalc.formatDMS(p.longitude)}</td>
                <td>${rasi.ta}</td>
                <td>${nak.ta}</td>
                <td>${p.pada}</td>
            </tr>
        `;
    });
    
    htmlEn += `</tbody>`;
    htmlTa += `</tbody>`;
    
    tableEn.innerHTML = htmlEn;
    tableTa.innerHTML = htmlTa;
}

function renderNatalPredictions(lagnaLon, moonRasiIdx, moonNakDetails) {
    const lagnaIdx = AstrologyCalc.getRasiIndex(lagnaLon);
    
    const lagnaPred = Translations.lagnaPredictions[lagnaIdx];
    const rasiPred = Translations.rasiPredictions[moonRasiIdx];
    const nakPred = Translations.nakshatraPredictions[moonNakDetails.index];
    
    // English predictions
    document.getElementById("pred-panel-en").innerHTML = `
        <div class="pred-card">
            <h4>🌅 1. Lagna (Ascendant) Personality Analysis</h4>
            <p>${lagnaPred.en}</p>
        </div>
        <div class="pred-card">
            <h4>🌙 2. Rasi (Moon Sign) Emotional Nature</h4>
            <p>${rasiPred.en}</p>
        </div>
        <div class="pred-card">
            <h4>⭐ 3. Nakshatra (Birth Star) Qualities</h4>
            <p><strong>${Translations.nakshatras[moonNakDetails.index].en} (Pada ${moonNakDetails.pada})</strong>: ${nakPred.en}</p>
        </div>
    `;
    
    // Tamil predictions
    document.getElementById("pred-panel-ta").innerHTML = `
        <div class="pred-card">
            <h4>🌅 1. லக்ன குணங்கள் (Lagna Character)</h4>
            <p>${lagnaPred.ta}</p>
        </div>
        <div class="pred-card">
            <h4>🌙 2. ராசி குணங்கள் (Moon Sign Impact)</h4>
            <p>${rasiPred.ta}</p>
        </div>
        <div class="pred-card">
            <h4>⭐ 3. நட்சத்திர பலன்கள் (Birth Star Impact)</h4>
            <p><strong>${Translations.nakshatras[moonNakDetails.index].ta} (${moonNakDetails.pada}-ம் பாதம்)</strong>: ${nakPred.ta}</p>
        </div>
    `;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatDateTa(date) {
    const monthsTa = ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"];
    return `${date.getDate()} ${monthsTa[date.getMonth()]} ${date.getFullYear()}`;
}

function renderDashaTimeline(dashaData) {
    const bal = dashaData.balance;
    const timeline = dashaData.timeline;
    
    // English balance
    document.getElementById("dasha-balance-en").innerHTML = `
        <strong>⏳ Balance Dasha at Birth:</strong> ${Translations.planets[bal.planet].en} Mahadasha: ✨ ${bal.years} years, 📅 ${bal.months} months, and ⏳ ${bal.days} days remaining.
    `;
    
    // Tamil balance
    document.getElementById("dasha-balance-ta").innerHTML = `
        <strong>⏳ பிறப்பில் இருப்பு தசா:</strong> ${Translations.planets[bal.planet].ta} தசா - ✨ ${bal.years} வருடங்கள், 📅 ${bal.months} மாதங்கள், மற்றும் ⏳ ${bal.days} நாட்கள் இருப்பு உள்ளது.
    `;
    
    // English Timeline List
    let timelineHTMLen = "";
    timeline.forEach(m => {
        const mPlanet = Translations.planets[m.planet].en;
        const mStartStr = formatDate(m.startDate);
        const mEndStr = formatDate(m.endDate);
        const prediction = Translations.dashaPredictions[m.planet].en;
        
        timelineHTMLen += `
            <div class="dasha-node">
                <div class="dasha-planet"><strong>${mPlanet} Mahadasha</strong> ✨ (${m.durationYears} Years)</div>
                <div class="dasha-dates">📅 Period: ${mStartStr} to ${mEndStr}</div>
                <p class="dasha-desc">${prediction}</p>
                <div class="bhukti-container">
                    <div class="bhukti-title">🔍 Antardashas (Sub-periods):</div>
                    <div class="bhukti-grid">
        `;
        
        m.antardashas.forEach(a => {
            const aPlanet = Translations.planets[a.planet].en;
            timelineHTMLen += `
                <div class="bhukti-badge">
                    <span>${aPlanet}</span>
                    <small>📅 ${formatDate(a.startDate)} - ${formatDate(a.endDate)}</small>
                </div>
            `;
        });
        
        timelineHTMLen += `
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("dasha-timeline-en").innerHTML = timelineHTMLen;
    
    // Tamil Timeline List
    let timelineHTMLta = "";
    timeline.forEach(m => {
        const mPlanet = Translations.planets[m.planet].ta;
        const mStartStr = formatDateTa(m.startDate);
        const mEndStr = formatDateTa(m.endDate);
        const prediction = Translations.dashaPredictions[m.planet].ta;
        
        timelineHTMLta += `
            <div class="dasha-node">
                <div class="dasha-planet"><strong>${mPlanet} தசா (Mahadasha)</strong> ✨ (${m.durationYears} ஆண்டுகள்)</div>
                <div class="dasha-dates">📅 காலம்: ${mStartStr} முதல் ${mEndStr} வரை</div>
                <p class="dasha-desc">${prediction}</p>
                <div class="bhukti-container">
                    <div class="bhukti-title">🔍 புத்திகள் (Antardashas):</div>
                    <div class="bhukti-grid">
        `;
        
        m.antardashas.forEach(a => {
            const aPlanet = Translations.planets[a.planet].ta;
            timelineHTMLta += `
                <div class="bhukti-badge">
                    <span>${aPlanet} புத்தி</span>
                    <small>📅 ${formatDateTa(a.startDate)} முதல் ${formatDateTa(a.endDate)} வரை</small>
                </div>
            `;
        });
        
        timelineHTMLta += `
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("dasha-timeline-ta").innerHTML = timelineHTMLta;
}

function renderTransitTimeline(transitEvents) {
    // Sort transits chronologically
    transitEvents.sort((a, b) => a.date.getTime() - b.date.getTime());
    
    const timelineEn = document.getElementById("transit-timeline-en");
    const timelineTa = document.getElementById("transit-timeline-ta");
    
    let htmlEn = "";
    let htmlTa = "";
    
    transitEvents.forEach(e => {
        const pName = Translations.planets[e.planet];
        const newRasi = Translations.rasis[e.newSign];
        const dateStr = formatDate(e.date);
        const dateStrTa = formatDateTa(e.date);
        
        const badgeClass = `impact-${e.impact}`;
        let impactLabelEn = e.impact.toUpperCase();
        let impactLabelTa = e.impact === "positive" ? "நன்மை" : (e.impact === "warning" ? "கவனம்" : "சமநிலை");
        if (e.impact === "positive") {
            impactLabelEn = "✨ POSITIVE";
            impactLabelTa = "🟢 நன்மை";
        } else if (e.impact === "warning") {
            impactLabelEn = "⚠️ WARNING";
            impactLabelTa = "⚠️ கவனம்";
        } else {
            impactLabelEn = "🔵 NEUTRAL";
            impactLabelTa = "🔵 சமநிலை";
        }
        
        htmlEn += `
            <div class="transit-item ${e.planet.toLowerCase()}">
                <div class="transit-meta">
                    <span class="transit-badge-impact ${badgeClass}">${impactLabelEn}</span>
                    <span class="transit-date">📅 ${dateStr}</span>
                </div>
                <div class="transit-header">
                    <strong>${pName.en}</strong> enters <strong>${newRasi.en}</strong> (House ${e.house} from Moon)
                </div>
                <div class="transit-body">
                    ${e.en}
                </div>
            </div>
        `;
        
        htmlTa += `
            <div class="transit-item ${e.planet.toLowerCase()}">
                <div class="transit-meta">
                    <span class="transit-badge-impact ${badgeClass}">${impactLabelTa}</span>
                    <span class="transit-date">${dateStrTa}</span>
                </div>
                <div class="transit-header">
                    <strong>${pName.ta}</strong> - <strong>${newRasi.ta} ராசிக்கு</strong> பெயர்ச்சி ஆகிறது (சந்திரனுக்கு ${e.house}-ம் வீடு)
                </div>
                <div class="transit-body">
                    ${e.ta}
                </div>
            </div>
        `;
    });
    
    timelineEn.innerHTML = htmlEn || "<p>No major transits found in this period.</p>";
    timelineTa.innerHTML = htmlTa || "<p>இந்த காலகட்டத்தில் பெயர்ச்சிகள் ஏதும் இல்லை.</p>";
}

function initLanguageSwitcher() {
    const btnEn = document.getElementById("btn-lang-en");
    const btnTa = document.getElementById("btn-lang-ta");
    
    if (btnEn && btnTa) {
        btnEn.addEventListener("click", () => {
            document.body.className = "lang-en";
            btnEn.classList.add("active");
            btnTa.classList.remove("active");
            updatePlaceholders("en");
        });
        
        btnTa.addEventListener("click", () => {
            document.body.className = "lang-ta";
            btnTa.classList.add("active");
            btnEn.classList.remove("active");
            updatePlaceholders("ta");
        });
    }
    
    // Set initial placeholders
    updatePlaceholders("en");
}

function updatePlaceholders(lang) {
    const nameInput = document.getElementById("name");
    const birthplaceInput = document.getElementById("birthplace");
    const keyInput = document.getElementById("google-api-key");
    
    if (lang === "en") {
        if (nameInput) nameInput.placeholder = "e.g. Kiruthik";
        if (birthplaceInput) birthplaceInput.placeholder = "e.g. Chennai, India";
        if (keyInput) keyInput.placeholder = "Enter key for Google Places dropdown";
    } else {
        if (nameInput) nameInput.placeholder = "எ.கா. கிருத்திக்";
        if (birthplaceInput) birthplaceInput.placeholder = "எ.கா. சென்னை, இந்தியா";
        if (keyInput) keyInput.placeholder = "கூகுள் மேப்ஸ் API கீ உள்ளிடவும்";
    }
}

function initPrintButton() {
    const printBtn = document.getElementById("btn-print-horoscope");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }
}
