// Gochara (Transit) Prediction Engine

function calculateTransits(birthMoonRasi, birthDate) {
    const transitEvents = [];
    
    // We scan month-by-month for 100 years (1200 months)
    let currentDate = new Date(birthDate.getTime());
    
    // Keep track of the previous signs of Jupiter, Saturn, and Rahu
    let prevSigns = { Jupiter: -1, Saturn: -1, Rahu: -1 };
    
    // Initial check at birth
    const initTime = Astronomy.MakeTime(currentDate);
    const initAyanamsa = AstrologyCalc.calculateAyanamsa(initTime.ut + 2451545.0);
    
    prevSigns.Jupiter = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Jupiter", initTime, initAyanamsa));
    prevSigns.Saturn = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Saturn", initTime, initAyanamsa));
    prevSigns.Rahu = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Rahu", initTime, initAyanamsa));
    
    // Loop through 1200 months
    for (let m = 1; m <= 1200; m++) {
        // Increment date by 1 month
        currentDate.setMonth(currentDate.getMonth() + 1);
        
        const time = Astronomy.MakeTime(currentDate);
        const ayanamsa = AstrologyCalc.calculateAyanamsa(time.ut + 2451545.0);
        
        // Compute new sidereal signs
        const juSign = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Jupiter", time, ayanamsa));
        const saSign = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Saturn", time, ayanamsa));
        const raSign = AstrologyCalc.getRasiIndex(AstrologyCalc.getSiderealLongitude("Rahu", time, ayanamsa));
        
        // Check Jupiter
        if (juSign !== prevSigns.Jupiter) {
            recordTransit("Jupiter", prevSigns.Jupiter, juSign, currentDate, birthMoonRasi, transitEvents);
            prevSigns.Jupiter = juSign;
        }
        
        // Check Saturn
        if (saSign !== prevSigns.Saturn) {
            recordTransit("Saturn", prevSigns.Saturn, saSign, currentDate, birthMoonRasi, transitEvents);
            prevSigns.Saturn = saSign;
        }
        
        // Check Rahu
        if (raSign !== prevSigns.Rahu) {
            recordTransit("Rahu", prevSigns.Rahu, raSign, currentDate, birthMoonRasi, transitEvents);
            prevSigns.Rahu = raSign;
        }
    }
    
    return transitEvents;
}

function recordTransit(planet, oldSign, newSign, date, birthMoonRasi, eventList) {
    // Calculate transit house relative to birth Moon Sign (1-indexed, 1 to 12)
    const house = (newSign - birthMoonRasi + 12) % 12 + 1;
    
    let predKey = "";
    let impactType = "neutral"; // neutral, positive, warning
    
    if (planet === "Saturn") {
        if (house === 12) {
            predKey = "sadeSati1";
            impactType = "warning";
        } else if (house === 1) {
            predKey = "sadeSati2";
            impactType = "warning";
        } else if (house === 2) {
            predKey = "sadeSati3";
            impactType = "warning";
        } else if (house === 8) {
            predKey = "ashtama";
            impactType = "warning";
        } else if (house === 4) {
            predKey = "ardhastama";
            impactType = "warning";
        } else if (house === 3 || house === 6 || house === 11) {
            predKey = "auspicious";
            impactType = "positive";
        } else {
            predKey = "neutral";
            impactType = "neutral";
        }
    } else if (planet === "Jupiter") {
        if (house === 2 || house === 5 || house === 7 || house === 9 || house === 11) {
            predKey = "auspicious";
            impactType = "positive";
        } else if (house === 1) {
            predKey = "janma";
            impactType = "warning";
        } else {
            predKey = "neutral";
            impactType = "neutral";
        }
    } else if (planet === "Rahu") {
        if (house === 3 || house === 6 || house === 11) {
            predKey = "auspicious";
            impactType = "positive";
        } else if (house === 1 || house === 7) {
            predKey = "relationships";
            impactType = "warning";
        } else if (house === 2 || house === 8) {
            predKey = "finance";
            impactType = "warning";
        } else {
            predKey = "neutral";
            impactType = "neutral";
        }
    }
    
    // Get predictions dictionary
    const planetKey = planet === "Rahu" ? "rahuKetu" : planet.toLowerCase();
    const prediction = Translations.transits[planetKey][predKey];
    
    eventList.push({
        planet: planet,
        oldSign: oldSign,
        newSign: newSign,
        date: new Date(date.getTime()),
        house: house,
        impact: impactType,
        en: prediction.en,
        ta: prediction.ta
    });
}

const TransitEngine = {
    calculateTransits
};

if (typeof module !== 'undefined') {
    module.exports = TransitEngine;
}
