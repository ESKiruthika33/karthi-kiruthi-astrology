// Vimshottari Dasha Engine

const DASHA_ORDER = ["Ketu", "Venus", "Sun", "Moon", "Mars", "Rahu", "Jupiter", "Saturn", "Mercury"];

const DASHA_YEARS = {
    Ketu: 7,
    Venus: 20,
    Sun: 6,
    Moon: 10,
    Mars: 7,
    Rahu: 18,
    Jupiter: 16,
    Saturn: 19,
    Mercury: 17
};

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

function calculateDashas(moonLongitude, birthDate) {
    // 1. Get Moon's Nakshatra index and progress fraction
    const nakLength = 13.333333333333334;
    const nakIndex = Math.floor(moonLongitude / nakLength);
    const progress = (moonLongitude % nakLength) / nakLength; // Fraction of Nakshatra elapsed [0, 1)
    
    // 2. Identify the starting Dasha (ruler of the Moon Nakshatra)
    const startPlanetIndex = nakIndex % 9;
    const startPlanet = DASHA_ORDER[startPlanetIndex];
    const startPlanetDuration = DASHA_YEARS[startPlanet];
    
    // 3. Compute virtual start date of the first Dasha (before birth)
    const elapsedDuration = progress * startPlanetDuration; // in years
    const virtualStartMs = birthDate.getTime() - (elapsedDuration * MS_PER_YEAR);
    
    let currentMs = virtualStartMs;
    const dashaList = [];
    
    // 4. Generate all 9 major Dashas (120 years total)
    for (let i = 0; i < 9; i++) {
        const planetIndex = (startPlanetIndex + i) % 9;
        const planet = DASHA_ORDER[planetIndex];
        const durationYears = DASHA_YEARS[planet];
        const mahadashaMs = durationYears * MS_PER_YEAR;
        
        const mStart = new Date(currentMs);
        const mEnd = new Date(currentMs + mahadashaMs);
        
        // Only include Mahadashas that end after birth
        if (mEnd.getTime() >= birthDate.getTime()) {
            const antardashas = [];
            let aCurrentMs = currentMs;
            
            // Generate nested Antardashas (Bhukti) for this Mahadasha
            for (let j = 0; j < 9; j++) {
                const subPlanetIndex = (planetIndex + j) % 9;
                const subPlanet = DASHA_ORDER[subPlanetIndex];
                const subDurationYears = (durationYears * DASHA_YEARS[subPlanet]) / 120;
                const subMs = subDurationYears * MS_PER_YEAR;
                
                const aStart = new Date(aCurrentMs);
                const aEnd = new Date(aCurrentMs + subMs);
                
                // Only include if it ends after birth
                if (aEnd.getTime() >= birthDate.getTime()) {
                    // If it started before birth, clamp display start date to birthDate
                    const displayStart = aStart.getTime() < birthDate.getTime() ? birthDate : aStart;
                    antardashas.push({
                        planet: subPlanet,
                        startDate: displayStart,
                        endDate: aEnd,
                        durationYears: subDurationYears
                    });
                }
                aCurrentMs += subMs;
            }
            
            // Clamp Mahadasha display start date to birthDate if it started before birth
            const displayStart = mStart.getTime() < birthDate.getTime() ? birthDate : mStart;
            
            dashaList.push({
                planet: planet,
                startDate: displayStart,
                endDate: mEnd,
                durationYears: durationYears,
                antardashas: antardashas
            });
        }
        
        currentMs += mahadashaMs;
    }
    
    // 5. Calculate remaining Dasha at birth details
    const remainingYears = (1 - progress) * startPlanetDuration;
    const remainingMonths = (remainingYears - Math.floor(remainingYears)) * 12;
    const remainingDays = (remainingMonths - Math.floor(remainingMonths)) * 30.4375; // average month days
    
    const balance = {
        planet: startPlanet,
        years: Math.floor(remainingYears),
        months: Math.floor(remainingMonths),
        days: Math.floor(remainingDays)
    };
    
    return {
        balance: balance,
        timeline: dashaList
    };
}

const DashaEngine = {
    calculateDashas
};

if (typeof module !== 'undefined') {
    module.exports = DashaEngine;
}
