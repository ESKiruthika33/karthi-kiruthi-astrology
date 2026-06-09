// Core Astrology Calculator Engine

// Modulo helper for positive angles [0, 360)
function normalize360(angle) {
    return (angle % 360 + 360) % 360;
}

// Calculate Lahiri Ayanamsa for a given Julian Date
// Formula based on Chitra Paksha Lahiri Ayanamsa
function calculateAyanamsa(jd) {
    // T is Julian centuries from J2000.0 (JD 2451545.0)
    const T = (jd - 2451545.0) / 36525;
    // Lahiri Ayanamsa at J2000.0 is 23.853056 degrees
    const A = 23.853056 + 1.3969713 * T + 0.0003086 * T * T;
    return normalize360(A);
}

// Calculate geocentric sidereal longitude for a planet
function getSiderealLongitude(planetName, time, ayanamsa) {
    if (planetName === "Rahu" || planetName === "Ketu") {
        // Calculate Mean Node of the Moon (Standard in Vedic Astrology)
        const T = time.ut / 36525;
        let rahu = 125.0445479 - 1934.1361839 * T + 0.0003086 * T * T + (T * T * T) / 467441 - (T * T * T * T) / 18999000;
        rahu = normalize360(rahu);
        // Subtract Ayanamsa to get sidereal position
        rahu = normalize360(rahu - ayanamsa);
        if (planetName === "Rahu") return rahu;
        return normalize360(rahu + 180);
    }
    
    // Using astronomy-engine for physical bodies
    // EclipticLongitude returns the apparent tropical ecliptic longitude of date (seen from Earth)
    let bodyName = planetName;
    if (planetName === "Sun") bodyName = "Sun";
    else if (planetName === "Moon") bodyName = "Moon";
    
    // We get the geocentric vector and convert to Ecliptic
    const vec = Astronomy.GeoVector(bodyName, time, true);
    const ecl = Astronomy.Ecliptic(vec);
    
    // Subtract Ayanamsa to convert Tropical (Sayana) to Sidereal (Nirayana)
    return normalize360(ecl.elon - ayanamsa);
}

// Calculate Sidereal Lagna (Ascendant)
function calculateLagna(time, longitude, latitude, ayanamsa) {
    // 1. Get Greenwich Apparent Sidereal Time (GAST) in hours
    const gast = Astronomy.SiderealTime(time);
    
    // 2. Convert to Local Sidereal Time (LST) in degrees
    const lst = normalize360(gast * 15 + longitude);
    
    // 3. Get true obliquity of the ecliptic (tobl) from e_tilt
    const tilt = Astronomy.e_tilt(time);
    const epsilon = tilt.tobl; // True obliquity of date
    
    // 4. Calculate Ascendant using spherical trigonometry
    const lstRad = lst * Math.PI / 180;
    const epsRad = epsilon * Math.PI / 180;
    const latRad = latitude * Math.PI / 180;
    
    const y = Math.cos(lstRad);
    const x = -Math.sin(lstRad) * Math.cos(epsRad) - Math.tan(latRad) * Math.sin(epsRad);
    
    let ascendant = Math.atan2(y, x) * 180 / Math.PI;
    ascendant = normalize360(ascendant);
    
    // 5. Subtract Ayanamsa to get Sidereal Ascendant (Lagna)
    const siderealLagna = normalize360(ascendant - ayanamsa);
    
    return {
        tropical: ascendant,
        sidereal: siderealLagna,
        lst: lst,
        obliquity: epsilon
    };
}

// Map a longitude to Rasi (Zodiac Sign)
function getRasiIndex(longitude) {
    return Math.floor(longitude / 30);
}

// Map a longitude to Nakshatra, Pada and remaining degrees
function getNakshatraDetails(longitude) {
    const nakLength = 13.333333333333334; // 13 degrees 20 minutes
    const padaLength = 3.3333333333333335; // 3 degrees 20 minutes
    
    const nakIndex = Math.floor(longitude / nakLength);
    const remainingInNak = longitude % nakLength;
    const pada = Math.floor(remainingInNak / padaLength) + 1;
    const progress = remainingInNak / nakLength; // progress fraction
    
    return {
        index: nakIndex,
        pada: pada,
        progress: progress,
        remainingDegrees: nakLength - remainingInNak
    };
}

// Helper to format degrees to D° M' S"
function formatDMS(degrees) {
    const d = Math.floor(degrees);
    const mDouble = (degrees - d) * 60;
    const m = Math.floor(mDouble);
    const s = Math.floor((mDouble - m) * 60);
    return `${d}° ${m}' ${s}"`;
}

// Export functions for browser / Node.js
const AstrologyCalc = {
    normalize360,
    calculateAyanamsa,
    getSiderealLongitude,
    calculateLagna,
    getRasiIndex,
    getNakshatraDetails,
    formatDMS
};

if (typeof module !== 'undefined') {
    module.exports = AstrologyCalc;
}
