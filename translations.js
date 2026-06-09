const Translations = {
    // UI Labels
    labels: {
        title: {
            en: "Karthi-Kiruthi AI Astrology",
            ta: "கார்த்தி-கிருத்தி ஏஐ ஜோதிடம்"
        },
        inputHeader: {
            en: "Birth Details Input",
            ta: "பிறப்பு விபரங்கள்"
        },
        name: {
            en: "Name",
            ta: "பெயர்"
        },
        dob: {
            en: "Date of Birth",
            ta: "பிறந்த தேதி"
        },
        tob: {
            en: "Time of Birth (Local)",
            ta: "பிறந்த நேரம் (உள்ளூர்)"
        },
        birthplace: {
            en: "Birthplace (City, Country)",
            ta: "பிறந்த இடம் (நகரம், நாடு)"
        },
        latitude: {
            en: "Latitude",
            ta: "அட்சரேகை (Latitude)"
        },
        longitude: {
            en: "Longitude",
            ta: "தீர்க்கரேகை (Longitude)"
        },
        timezone: {
            en: "Timezone Offset (hrs from UTC)",
            ta: "நேர மண்டலம் (UTC இலிருந்து மணி)"
        },
        calculate: {
            en: "Calculate Horoscope",
            ta: "ஜாதகம் கணிப்பீடுக"
        },
        calculating: {
            en: "Calculating...",
            ta: "கணிக்கப்படுகிறது..."
        },
        resultsHeader: {
            en: "Vedic Astrology Calculations",
            ta: "வேத ஜோதிட கணக்கீடுகள்"
        },
        basicDetails: {
            en: "Basic Birth Details",
            ta: "அடிப்படை விபரங்கள்"
        },
        rasiChart: {
            en: "South Indian Rasi Chart (Sidereal)",
            ta: "தென்னிந்திய ராசி கட்டம் (நிரயண முறை)"
        },
        planetaryPositions: {
            en: "Planetary Positions & Longitudes",
            ta: "கிரக நிலைகள் மற்றும் பாகைகள்"
        },
        dashaTimeline: {
            en: "Vimshottari Dasha Timeline (120 Years)",
            ta: "விம்சோத்தரி தசா கால அட்டவணை (120 வருடங்கள்)"
        },
        transitPredictions: {
            en: "Major Transit Predictions (Next 100 Years)",
            ta: "முக்கிய கோச்சார பலன்கள் (அடுத்த 100 ஆண்டுகள்)"
        },
        generalPredictions: {
            en: "Personality & Natal Predictions",
            ta: "பிறப்பு ஜாதக பொதுப் பலன்கள்"
        },
        utcTime: {
            en: "UTC Birth Time",
            ta: "UTC பிறந்த நேரம்"
        },
        istTime: {
            en: "IST Birth Time",
            ta: "IST பிறந்த நேரம்"
        },
        ayanamsa: {
            en: "Lahiri Ayanamsa",
            ta: "லஹிரி அயனாம்சம்"
        },
        lst: {
            en: "Local Sidereal Time (LST)",
            ta: "உள்ளூர் சித்திர நேரம் (LST)"
        },
        julianDate: {
            en: "Julian Date (JD)",
            ta: "ஜூலியன் நாள் (JD)"
        },
        lagna: {
            en: "Ascendant (Lagna)",
            ta: "லக்னம்"
        },
        rasi: {
            en: "Moon Sign (Raasi)",
            ta: "ராசி"
        },
        nakshatra: {
            en: "Birth Star (Nakshatra)",
            ta: "நட்சத்திரம்"
        },
        pada: {
            en: "Pada (Quarter)",
            ta: "பாதம்"
        },
        planet: {
            en: "Planet",
            ta: "கிரகம்"
        },
        longitudeDeg: {
            en: "Sidereal Longitude",
            ta: "நிரயண பாகை"
        },
        rasiPosition: {
            en: "Rasi Position",
            ta: "ராசி நிலை"
        },
        house: {
            en: "House",
            ta: "பாவம் (வீடு)"
        },
        dashaBalance: {
            en: "Balance Dasha at Birth",
            ta: "பிறப்பில் இருப்பு தசா"
        },
        years: {
            en: "years",
            ta: "வருடங்கள்"
        },
        months: {
            en: "months",
            ta: "மாதங்கள்"
        },
        days: {
            en: "days",
            ta: "நாட்கள்"
        },
        period: {
            en: "Period",
            ta: "காலம்"
        },
        startDate: {
            en: "Start Date",
            ta: "ஆரம்ப தேதி"
        },
        endDate: {
            en: "End Date",
            ta: "முடிவு தேதி"
        },
        transitDate: {
            en: "Transit Date",
            ta: "பெயர்ச்சி தேதி"
        },
        description: {
            en: "Prediction & Impact",
            ta: "பலன்கள் & தாக்கம்"
        }
    },

    // Planet Names
    planets: {
        Sun: { en: "☀️ Sun (Suriyan)", ta: "☀️ சூரியன்" },
        Moon: { en: "🌙 Moon (Chandran)", ta: "🌙 சந்திரன்" },
        Mercury: { en: "☄️ Mercury (Budhan)", ta: "☄️ புதன்" },
        Venus: { en: "💖 Venus (Sukran)", ta: "💖 சுக்கிரன்" },
        Mars: { en: "🔥 Mars (Sevvai)", ta: "🔥 செவ்வாய்" },
        Jupiter: { en: "👑 Jupiter (Guru)", ta: "👑 குரு" },
        Saturn: { en: "🪐 Saturn (Sani)", ta: "🪐 சனி" },
        Rahu: { en: "🌑 Rahu", ta: "🌑 ராகு" },
        Ketu: { en: "🔮 Ketu", ta: "🔮 கேது" },
        Lagna: { en: "🌅 Lagna (Ascendant)", ta: "🌅 லக்னம்" }
    },

    // Rasi Names
    rasis: [
        { en: "♈ Aries (Mesha)", ta: "♈ மேஷம்", ruler: "Mars" },
        { en: "♉ Taurus (Rishabha)", ta: "♉ ரிஷபம்", ruler: "Venus" },
        { en: "♊ Gemini (Mithuna)", ta: "♊ மிதுனம்", ruler: "Mercury" },
        { en: "♋ Cancer (Kataka)", ta: "♋ கடகம்", ruler: "Moon" },
        { en: "♌ Leo (Simha)", ta: "♌ சிம்மம்", ruler: "Sun" },
        { en: "♍ Virgo (Kanya)", ta: "♍ கன்னி", ruler: "Mercury" },
        { en: "♎ Libra (Tula)", ta: "♎ துலாம்", ruler: "Venus" },
        { en: "♏ Scorpio (Vrischika)", ta: "♏ விருச்சிகம்", ruler: "Mars" },
        { en: "♐ Sagittarius (Dhanus)", ta: "♐ தனுசு", ruler: "Jupiter" },
        { en: "♑ Capricorn (Makara)", ta: "♑ மகரம்", ruler: "Saturn" },
        { en: "♒ Aquarius (Kumbha)", ta: "♒ கும்பம்", ruler: "Saturn" },
        { en: "♓ Pisces (Meena)", ta: "♓ மீனம்", ruler: "Jupiter" }
    ],

    // Nakshatra Names
    nakshatras: [
        { en: "⭐ Aswini", ta: "⭐ அஸ்வினி", ruler: "Ketu" },
        { en: "⭐ Bharani", ta: "⭐ பரணி", ruler: "Venus" },
        { en: "⭐ Krittika", ta: "⭐ கார்த்திகை", ruler: "Sun" },
        { en: "⭐ Rohini", ta: "⭐ ரோகிணி", ruler: "Moon" },
        { en: "⭐ Mrigashirsha", ta: "⭐ மிருகசீரிடம்", ruler: "Mars" },
        { en: "⭐ Ardra", ta: "⭐ திருவாதிரை", ruler: "Rahu" },
        { en: "⭐ Punarvasu", ta: "⭐ புனர்பூசம்", ruler: "Jupiter" },
        { en: "⭐ Pushya", ta: "⭐ பூசம்", ruler: "Saturn" },
        { en: "⭐ Ashlesha", ta: "⭐ ஆயில்யம்", ruler: "Mercury" },
        { en: "⭐ Magha", ta: "⭐ மகம்", ruler: "Ketu" },
        { en: "⭐ Purva Phalguni (Pooram)", ta: "⭐ பூரம்", ruler: "Venus" },
        { en: "⭐ Uttara Phalguni (Uthiram)", ta: "⭐ உத்திரம்", ruler: "Sun" },
        { en: "⭐ Hasta", ta: "⭐ அஸ்தம்", ruler: "Moon" },
        { en: "⭐ Chitra", ta: "⭐ சித்திரை", ruler: "Mars" },
        { en: "⭐ Swati", ta: "⭐ சுவாதி", ruler: "Rahu" },
        { en: "⭐ Vishakha", ta: "⭐ விசாகம்", ruler: "Jupiter" },
        { en: "⭐ Anuradha", ta: "⭐ அனுஷம்", ruler: "Saturn" },
        { en: "⭐ Jyeshtha (Kettai)", ta: "⭐ கேட்டை", ruler: "Mercury" },
        { en: "⭐ Mula", ta: "⭐ மூலம்", ruler: "Ketu" },
        { en: "⭐ Purva Ashadha (Pooradam)", ta: "⭐ பூராடம்", ruler: "Venus" },
        { en: "⭐ Uttara Ashadha (Uthiradam)", ta: "⭐ உத்திராடம்", ruler: "Sun" },
        { en: "⭐ Shravana (Thiruvonam)", ta: "⭐ திருவோணம்", ruler: "Moon" },
        { en: "⭐ Dhanishta (Avittam)", ta: "⭐ அவிட்டம்", ruler: "Mars" },
        { en: "⭐ Shatabhisha (Sadhayam)", ta: "⭐ சதயம்", ruler: "Rahu" },
        { en: "⭐ Purva Bhadrapada (Poorattadhi)", ta: "⭐ பூரட்டாதி", ruler: "Jupiter" },
        { en: "⭐ Uttara Bhadrapada (Uthirattadhi)", ta: "⭐ உத்திரட்டாதி", ruler: "Saturn" },
        { en: "⭐ Revati", ta: "⭐ ரேவதி", ruler: "Mercury" }
    ],

    // Rasi predictions (Personality based on Moon Sign)
    rasiPredictions: {
        0: {
            en: "Aries (Mesha) Moon Sign: You possess high energy, dynamic leadership qualities, and courage. You are pioneering but can be impulsive or quick-tempered at times.",
            ta: "மேஷ ராசி: நீங்கள் அதிக ஆற்றல், தலைமைத்துவ பண்புகள் மற்றும் தைரியம் கொண்டவர். எதிலும் முன்னோடியாக செயல்படுவீர்கள். சில நேரங்களில் அவசர முடிவுகளையோ, கோபத்தையோ வெளிப்படுத்தலாம்."
        },
        1: {
            en: "Taurus (Rishabha) Moon Sign: You are stable, practical, artistic, and patient. You appreciate comfort and beauty, but can show stubbornness when pushed.",
            ta: "ரிஷப ராசி: நீங்கள் நிலையானவர், நடைமுறைவாதி, கலை ஆர்வம் மற்றும் பொறுமை கொண்டவர். வசதியையும் அழகையும் விரும்புவீர்கள். பிடிவாத குணம் உங்களிடம் சற்று அதிகமாக இருக்கலாம்."
        },
        2: {
            en: "Gemini (Mithuna) Moon Sign: Highly intellectual, communicative, adaptable, and witty. You love learning and socializing, though you may struggle with focus or indecisiveness.",
            ta: "மிதுன ராசி: அதிக புத்திசாலித்தனம், பேச்சுத்திறன் மற்றும் நகைச்சுவை உணர்வு மிக்கவர். புதிய விஷயங்களை கற்கவும் பழகவும் விரும்புவீர்கள். சில நேரங்களில் இரட்டை மனநிலையும் கவனம் சிதறலும் ஏற்படலாம்."
        },
        3: {
            en: "Cancer (Kataka) Moon Sign: Deeply emotional, intuitive, nurturing, and family-oriented. You are highly imaginative but can experience mood swings and sensitivity.",
            ta: "கடக ராசி: ஆழமான உணர்ச்சிவசப்படுபவர், நல்ல உள்ளுணர்வு கொண்டவர், குடும்பத்தின் மீது அதிக பற்று உடையவர். கற்பனைத்திறன் மிக்கவர் என்றாலும் அடிக்கடி மனநிலை மாற்றங்களும் உணர்ச்சிவசப்படலும் ஏற்படும்."
        },
        4: {
            en: "Leo (Simha) Moon Sign: Generous, confident, creative, and born to lead. You seek attention and respect, possessing a warm heart, but can occasionally be proud or dogmatic.",
            ta: "சிம்ம ராசி: தாராள குணம், அதீத தன்னம்பிக்கை மற்றும் படைப்பாற்றல் மிக்கவர். தலைமை தாங்கும் தகுதி கொண்டவர். மற்றவர்களின் மரியாதையையும் கவனத்தையும் ஈர்க்க விரும்புவீர்கள். சில சமயம் கர்வம் வரலாம்."
        },
        5: {
            en: "Virgo (Kanya) Moon Sign: Analytical, detail-oriented, systematic, and helpful. You strive for perfection and are highly organized, though you can be overly self-critical.",
            ta: "கன்னி ராசி: பகுத்தறியும் திறன், நுணுக்கமான கவனிப்பு, மற்றும் ஒழுங்குமுறை கொண்டவர். தூய்மையையும் துல்லியத்தையும் விரும்புவீர்கள். உங்களையே அதிகம் குறை கூறிக் கொள்ளும் பழக்கம் இருக்கும்."
        },
        6: {
            en: "Libra (Tula) Moon Sign: Diplomatic, artistic, peace-loving, and relationship-oriented. You seek balance and harmony in all things, but can struggle with making decisions.",
            ta: "துலா ராசி: சாதுரியமானவர், கலைநயம் மிக்கவர், அமைதியை விரும்புபவர். உறவுகளுக்கு முக்கியத்துவம் தருவீர்கள். சமநிலையை விரும்பினாலும், முடிவெடுப்பதில் உங்களுக்கு தயக்கங்கள் இருக்கும்."
        },
        7: {
            en: "Scorpio (Vrischika) Moon Sign: Intense, secretive, highly intuitive, and determined. You possess strong willpower and transformational energy, but can hold grudges.",
            ta: "விருச்சிக ராசி: தீவிரமான சிந்தனை, ரகசியத்தன்மை மற்றும் அதீத மன உறுதி கொண்டவர். எதையும் சாதிக்கும் பிடிவாதம் இருக்கும். பிறர் செய்த தவறுகளை எளிதில் மறக்கவோ மன்னிக்கவோ மாட்டீர்கள்."
        },
        8: {
            en: "Dhanus (Sagittarius) Moon Sign: Optimistic, philosophical, freedom-loving, and direct. You have a love for travel and truth, but can be blunt or overly optimistic at times.",
            ta: "தனுசு ராசி: நம்பிக்கையாளர், தத்துவ சிந்தனையாளர், சுதந்திரத்தை விரும்புபவர். நேர்மையானவர் மற்றும் பயணங்களை விரும்புபவர். சில நேரங்களில் மறைமுகமாக பேசாமல் நேரடியாக பேசி மற்றவர்களை காயப்படுத்தலாம்."
        },
        9: {
            en: "Capricorn (Makara) Moon Sign: Disciplined, ambitious, practical, and highly responsible. You believe in hard work and respect tradition, but can be pessimistic or emotionally detached.",
            ta: "மகர ராசி: ஒழுக்கம், லட்சியம் மற்றும் கடமை உணர்வு மிக்கவர். கடின உழைப்பை நம்புவீர்கள், பாரம்பரியத்திற்கு மதிப்பளிப்பீர்கள். சில நேரங்களில் மனச்சோர்வோ அல்லது தனிமையோ உங்களை வாட்டலாம்."
        },
        10: {
            en: "Aquarius (Kumbha) Moon Sign: Humanitarian, intellectual, innovative, and independent. You think ahead of your time and value friendship, but can be eccentric or detached.",
            ta: "கும்ப ராசி: மனிதநேயம் மிக்கவர், புத்திசாலி, புதுமையான சிந்தனையாளர் மற்றும் சுதந்திரமானவர். சமூக நலனில் ஆர்வம் காட்டுவீர்கள். சில சமயம் பிடிவாதமாகவோ அல்லது ஒதுங்கியோ இருப்பீர்கள்."
        },
        11: {
            en: "Pisces (Meena) Moon Sign: Imaginative, compassionate, spiritual, and artistic. You have deep empathy and healing energy, though you can be escapist or overly sensitive.",
            ta: "மீன ராசி: கற்பனைத்திறன், கருணை, ஆன்மீக ஈடுபாடு மற்றும் கலை ஆர்வம் மிக்கவர். மற்றவர்களின் துயர் துடைக்க விரும்புவீர்கள். சில சமயம் யதார்த்த உலகை எதிர்கொள்ள பயந்து கற்பனையில் வாழலாம்."
        }
    },

    // Lagna predictions
    lagnaPredictions: {
        0: {
            en: "Aries (Mesha) Lagna: You have a strong, athletic physical constitution, a bold demeanor, and a restless nature. You project confidence and initiative to the world.",
            ta: "மேஷ லக்னம்: நீங்கள் பலமான மற்றும் சுறுசுறுப்பான உடல்வாகு கொண்டவர். தைரியமும், எப்போதும் ஏதாவது செய்துகொண்டே இருக்க வேண்டும் என்ற துடிப்பான குணமும் உங்களிடம் இருக்கும்."
        },
        1: {
            en: "Taurus (Rishabha) Lagna: Handsome/beautiful appearance, reliable nature, soft-spoken but stubborn when opposed. You have a strong aesthetic sense and build assets steadily.",
            ta: "ரிஷப லக்னம்: அழகான தோற்றமும், நம்பிக்கையான குணமும் கொண்டவர். மென்மையாகப் பேசுவீர்கள், ஆனால் எதிர்த்தால் பிடிவாதம் காட்டுவீர்கள். கலை மற்றும் சொத்துக்களைச் சேர்ப்பதில் ஆர்வம் இருக்கும்."
        },
        2: {
            en: "Gemini (Mithuna) Lagna: Youthful looks, highly active intellect, expressive eyes, and natural curiosity. You are highly expressive, engaging in writing, speech, or media.",
            ta: "மிதுன லக்னம்: இளமையான தோற்றம், சுறுசுறுப்பான மூளை மற்றும் கூர்மையான கண்கள் கொண்டவர். எழுத்து, பேச்சு அல்லது தகவல் தொடர்பு துறைகளில் சிறந்து விளங்குவீர்கள்."
        },
        3: {
            en: "Cancer (Kataka) Lagna: Sensitive, nurturing expression, round face, and deeply caring nature. You are highly protective of loved ones and driven by emotional security.",
            ta: "கடக லக்னம்: மென்மையான குணம், வட்டமான முகம் மற்றும் அன்பான அரவணைக்கும் குணம் கொண்டவர். குடும்பத்தினரின் பாதுகாப்பில் அதிக கவனம் செலுத்துவீர்கள்."
        },
        4: {
            en: "Leo (Simha) Lagna: Regal bearing, commanding presence, thick hair, and proud walk. You possess natural dignity and seek to occupy positions of authority and respect.",
            ta: "சிம்ம லக்னம்: கம்பீரமான தோற்றம், அதிகாரமான பார்வை மற்றும் கம்பீரமான நடை கொண்டவர். இயற்கையிலேயே தர்ம குணம் மற்றும் நிர்வாகத் திறமை உடையவர்."
        },
        5: {
            en: "Virgo (Kanya) Lagna: Neat appearance, youthful look, analytical eyes, and modest demeanor. You excel in details, management, and solving complex problems systematically.",
            ta: "கன்னி லக்னம்: நேர்த்தியான தோற்றம், கூர்மையான பகுத்தறிவு மற்றும் எளிமையான நடத்தை கொண்டவர். கணக்கு வழக்கு மற்றும் நிர்வாகத் திறனில் மிகவும் துல்லியமாக செயல்படுவீர்கள்."
        },
        6: {
            en: "Libra (Tula) Lagna: Elegant appearance, charming smile, polite mannerisms, and a balanced outlook. You value partnerships, beauty, justice, and social harmony.",
            ta: "துலா லக்னம்: நாகரீகமான தோற்றம், அழகான புன்னகை மற்றும் நியாயமான குணம் கொண்டவர். கூட்டாண்மை, கலை மற்றும் சமரச உடன்பாடுகளை விரும்புவீர்கள்."
        },
        7: {
            en: "Scorpio (Vrischika) Lagna: Penetrating eyes, mysterious aura, intense body language, and strong determination. You have great research ability and hide your emotions deeply.",
            ta: "விருச்சிக லக்னம்: ஊடுருவிப் பார்க்கும் கண்கள், காந்த ஈர்ப்பு சக்தி மற்றும் அசைக்க முடியாத மன உறுதி கொண்டவர். எதையும் ஆழமாக ஆராயும் திறமையும், ரகசியத்தை காக்கும் குணமும் இருக்கும்."
        },
        8: {
            en: "Sagittarius (Dhanus) Lagna: Tall stature, cheerful facial expression, noble demeanor, and active lifestyle. You are spiritually oriented, love freedom, and project optimism.",
            ta: "தனுசு லக்னம்: உயரமான கம்பீரமான தோற்றம், மகிழ்ச்சியான முகம் மற்றும் நேர்மையான குணம் கொண்டவர். தர்ம சிந்தனையும், சுதந்திர மனப்பான்மையும் கொண்ட நல்ல தத்துவவாதி."
        },
        9: {
            en: "Capricorn (Makara) Lagna: Serious look, steady gait, slim physical structure, and professional behavior. You are highly focused on career, duty, and status through endurance.",
            ta: "மகர லக்னம்: பொறுப்பான தோற்றம், மெதுவான ஆனால் நிலையான நடை, உழைப்பாளி. தொழில் முன்னேற்றம் மற்றும் சமுதாய அந்தஸ்தில் அதிக அக்கறை செலுத்துவீர்கள்."
        },
        10: {
            en: "Aquarius (Kumbha) Lagna: Unique appearance, friendly nature, intellectual look, and unconventional ideas. You are attracted to science, community development, and broad networks.",
            ta: "கும்ப லக்னம்: தனித்துவமான தோற்றம், நட்பு குணம் மற்றும் தொலைநோக்கு சிந்தனை உடையவர். ஆராய்ச்சி, விஞ்ஞானம் மற்றும் சமூகப் பணிகளில் ஈடுபடக்கூடியவர்."
        },
        11: {
            en: "Pisces (Meena) Lagna: Soft, dreamy eyes, peaceful face, gentle demeanor, and highly receptive nature. You possess deep philosophical or artistic inclinations.",
            ta: "மீன லக்னம்: அமைதியான கனவு கண்கள், மென்மையான முகம் மற்றும் கருணையான நடத்தை கொண்டவர். கலை, ஆன்மீகம் அல்லது கற்பனை உலகில் அதிக ஈடுபாடு இருக்கும்."
        }
    },

    // Nakshatra predictions (brief overview)
    nakshatraPredictions: {
        0: { en: "Aswini: Quick, athletic, eager to help, pioneering, and values speed.", ta: "அஸ்வினி: வேகமானவர், சுறுசுறுப்பானவர், பிறருக்கு உதவும் குணம் கொண்டவர், எதிலும் முதன்மையானவர்." },
        1: { en: "Bharani: Creative, strong-willed, undergoes major transformations, values truth.", ta: "பரணி: கலை ஆர்வம், மன உறுதி, வாழ்க்கையில் பெரிய மாற்றங்களைச் சந்திப்பவர், நேர்மையாளர்." },
        2: { en: "Krittika: Bright, sharp intellect, critical, protective, hot-tempered but pure.", ta: "கார்த்திகை: பிரகாசமானவர், கூர்மையான அறிவு, கண்டிப்பானவர், கோபக்காரர் ஆனால் சுத்தமான மனம்." },
        3: { en: "Rohini: Beautiful, magnetic personality, artistic, loves luxury, stable.", ta: "ரோகிணி: அழகானவர், கவர்ச்சியானவர், கலை ஆர்வம் மிக்கவர், ஆடம்பரத்தை விரும்புபவர்." },
        4: { en: "Mrigashirsha: Searcher, curious, loves travel, intellectual, highly sensitive.", ta: "மிருகசீரிடம்: தேடுதல் குணம், ஆர்வம் மிக்கவர், பிரயாணங்களை விரும்புபவர், புத்திசாலி." },
        5: { en: "Ardra: Emotional storm, highly intellectual, learns through struggles, innovative.", ta: "திருவாதிரை: உணர்ச்சி பெருக்கம், கூர்மையான அறிவு, போராட்டங்களை வெல்பவர், புதிய சிந்தனையாளர்." },
        6: { en: "Punarvasu: Nurturing, returns to safety, spiritual, charitable, good teacher.", ta: "புனர்பூசம்: அமைதியானவர், ஆன்மீக நாட்டம், வள்ளல் தன்மை, சிறந்த ஆசிரியர் அல்லது வழிகாட்டி." },
        7: { en: "Pushya: Nourishing, highly duty-bound, respects rules, spiritual, peaceful.", ta: "பூசம்: கடமை உணர்வு, தர்ம சிந்தனை, சட்டங்களுக்கு மதிப்பளிப்பவர், அமைதியானவர்." },
        8: { en: "Ashlesha: Deeply intuitive, sharp tongue, protective, intense, mystical.", ta: "ஆயில்யம்: உள்ளுணர்வு மிக்கவர், சாதுரியமாக பேசுபவர், குடும்பத்தை காப்பவர், ஆன்மீக சக்தி கொண்டவர்." },
        9: { en: "Magha: Royal behavior, respects ancestors, values heritage, leader, authoritative.", ta: "மகம்: கம்பீரமானவர், முன்னோர்களை மதிப்பவர், பாரம்பரியத்தை காப்பவர், சிறந்த தலைவர்." },
        10: { en: "Purva Phalguni: Joyful, creative, loves comfort, artistic, romantic, popular.", ta: "பூரம்: மகிழ்ச்சியானவர், கலை ஆர்வம், ஆடம்பரம் மற்றும் காதல் உணர்வு மிக்கவர், புகழ்பெற்றவர்." },
        11: { en: "Uttara Phalguni: Helpful, reliable, makes great friends, values contract, structured.", ta: "உத்திரம்: உதவி செய்பவர், நம்பிக்கையானவர், நல்ல நண்பர்களைப் பெறுபவர், நேர்மை உடையவர்." },
        12: { en: "Hasta: Skilled hands, witty, clever planner, highly adaptable, loves crafts.", ta: "அஸ்தம்: கைதேர்ந்தவர், நகைச்சுவை உணர்வு, சாதுரியமாக திட்டமிடுபவர், கலைஞர்." },
        13: { en: "Chitra: Beautiful design, architect, creative, loves gemstones, strong dynamic energy.", ta: "சித்திரை: கலைநயம் மிக்கவர், கட்டிடக் கலைஞர், படைப்பாற்றல் மற்றும் அழகு உணர்வு உடையவர்." },
        14: { en: "Swati: Independent like the wind, commercial skill, polite, values freedom, traveler.", ta: "சுவாதி: சுதந்திரமானவர், வியாபார சாதுரியம், மென்மையானவர், பயணங்களை விரும்புபவர்." },
        15: { en: "Vishakha: Determined, goal-oriented, competitive, spiritual path seeker, persistent.", ta: "விசாகம்: லட்சியவாதி, விடாமுயற்சி கொண்டவர், ஆன்மீக நாட்டம், எதையும் சாதிப்பவர்." },
        16: { en: "Anuradha: Friendly, group builder, lives abroad, romantic, values loyalty.", ta: "அனுஷம்: நட்பு குணம், கூட்டமைப்பை உருவாக்குபவர், வெளிநாட்டில் வாழ்பவர், விசுவாசி." },
        17: { en: "Jyeshtha: Protective elder, occult knowledge, proud, values power, sharp minded.", ta: "கேட்டை: பொறுப்பானவர், ஆன்மீக ரகசியங்களை அறிபவர், கௌரவம் பார்ப்பவர், புத்திசாலி." },
        18: { en: "Mula: Root investigator, direct, spiritual destruction of ego, values truth.", ta: "மூலம்: உண்மையை ஆராய்பவர், நேரடியானவர், ஆன்மீக ஞானம் கொண்டவர், மன உறுதி உடையவர்." },
        19: { en: "Purva Ashadha: Unconquerable, popular, loves water, artistic, highly ambitious.", ta: "பூராடம்: வெல்ல முடியாதவர், புகழ்பெற்றவர், ஆடம்பர பிரியர், உயர் லட்சியங்களை உடையவர்." },
        20: { en: "Uttara Ashadha: Victorious, highly moral, patient, respected, duty-conscious.", ta: "உத்திராடம்: வெற்றி பெறுபவர், தர்ம குணமுடையவர், பொறுமையானவர், மரியாதைக்குரியவர்." },
        21: { en: "Shravana: Listener, highly knowledgeable, respects learning, traditional, organized.", ta: "திருவோணம்: சிறந்த கேட்பவர், அறிவு ஜீவி, கல்வியை மதிப்பவர், ஒழுக்கமானவர்." },
        22: { en: "Dhanishta: Wealthy, musically inclined, works in large organizations, ambitious.", ta: "அவிட்டம்: செல்வாக்கு உடையவர், இசை ஆர்வம் கொண்டவர், பெரிய நிறுவனங்களில் பணிபுரிபவர்." },
        23: { en: "Shatabhisha: Healer of hundred diseases, secretive, philosophical, independent.", ta: "சதயம்: மருத்துவ குணம், ரகசியம் காப்பவர், தத்துவ ஞானி, யாருக்கும் பணியாதவர்." },
        24: { en: "Purva Bhadrapada: Intense, values spiritual transformation, dual personality, dedicated.", ta: "பூரட்டாதி: தீவிர சிந்தனையாளர், ஆன்மீக ஞானம், இரட்டை குணம், லட்சியத்திற்காக அர்ப்பணிப்பவர்." },
        25: { en: "Uttara Bhadrapada: Wise, peaceful, meditative nature, patient, charitable.", ta: "உத்திரட்டாதி: அறிவாளி, அமைதியானவர், தியான குணம், பொறுமையானவர், கொடையாளி." },
        26: { en: "Revati: Protector of travelers, wealthy, sweet speech, highly artistic, spiritual.", ta: "ரேவதி: பாதுகாப்பவர், செல்வந்தர், இனிமையாக பேசுபவர், கலை மற்றும் ஆன்மீக ஈடுபாடு உடையவர்." }
    },

    // Vimshottari Dasha predictions
    dashaPredictions: {
        Ketu: {
            en: "Ketu Mahadasha (7 Years): Period of spiritual growth, detachment, and introspection. Career changes and sudden insights are common. Guard against skin complaints and anxiety.",
            ta: "ராகு-கேது பெயர்ச்சி (கேது தசா - 7 ஆண்டுகள்): ஆன்மீக வளர்ச்சி, பற்றற்ற நிலை மற்றும் சுய பரிசோதனைக்கான காலம். தொழில் மாற்றங்கள் மற்றும் திடீர் ஞானம் உண்டாகும். தோல் உபாதைகள் மற்றும் மனக்கவலையில் எச்சரிக்கை தேவை."
        },
        Venus: {
            en: "Venus Mahadasha (20 Years): Highly creative, artistic, and romantic period. Brings material comforts, marriage, luxury vehicles, and financial prosperity. Excellent for relationships.",
            ta: "சுக்கிர தசா (20 ஆண்டுகள்): அதீத படைப்பாற்றல், கலை ஆர்வம் மற்றும் காதல் உணர்வு மிக்க காலம். பொருள் சேர்க்கை, திருமணம், வாகன யோகம் மற்றும் பொருளாதார வளம் உண்டாகும்."
        },
        Sun: {
            en: "Sun Mahadasha (6 Years): Period of authority, career rise, government benefits, and recognition. Your self-confidence peaks. Ensure you avoid conflicts with father or superiors.",
            ta: "சூரிய தசா (6 ஆண்டுகள்): அதிகாரம், தொழில் உயர்வு, அரசு வழியில் நன்மைகள் மற்றும் புகழ் கிடைக்கும் காலம். தன்னம்பிக்கை அதிகரிக்கும். தந்தை அல்லது உயர் அதிகாரிகளுடன் கருத்து வேறுபாடுகளைத் தவிர்க்கவும்."
        },
        Moon: {
            en: "Moon Mahadasha (10 Years): Period of emotional growth, family happiness, journeys, and changes. Mental peace fluctuates. Creative pursuits and business related to liquids prosper.",
            ta: "சந்திர தசா (10 ஆண்டுகள்): உணர்ச்சி ரீதியான முதிர்ச்சி, குடும்ப மகிழ்ச்சி, பயணங்கள் மற்றும் மாற்றங்கள் நிறைந்த காலம். மன அமைதி மாறுபடும். கலை மற்றும் நீர் சார்ந்த தொழில்கள் சிறக்கும்."
        },
        Mars: {
            en: "Mars Mahadasha (7 Years): High energy, real estate gains, courage, and leadership. Highly active period. Beware of injuries, property disputes, and hot temper.",
            ta: "செவ்வாய் தசா (7 ஆண்டுகள்): அதிக ஆற்றல், பூமி லாபம், தைரியம் மற்றும் தலைமைப்பண்பு கூடும். மிகவும் விறுவிறுப்பான காலம். காயங்கள், சொத்து தகராறுகள் மற்றும் முன்கோபத்தில் கவனம் தேவை."
        },
        Rahu: {
            en: "Rahu Mahadasha (18 Years): Foreign travels, sudden financial rise, technological career growth, and intense desires. Watch out for illusions, sudden setbacks, and secret enemies.",
            ta: "ராகு தசா (18 ஆண்டுகள்): வெளிநாட்டுப் பயணங்கள், திடீர் யோகம், தொழில்நுட்பத் துறை வளர்ச்சி மற்றும் அதீத ஆசைகள் உண்டாகும். கற்பனையான பயம், திடீர் தடங்கல்கள் மற்றும் மறைமுக எதிரிகளிடம் எச்சரிக்கை."
        },
        Jupiter: {
            en: "Jupiter Mahadasha (16 Years): Period of wisdom, spiritual progress, wealth accumulation, childbirth, and higher knowledge. Highly auspicious for education, teaching, and legal affairs.",
            ta: "குரு தசா (16 ஆண்டுகள்): ஞானம், ஆன்மீக வளர்ச்சி, சொத்து சேர்க்கை, புத்திர பாக்கியம் மற்றும் உயர் கல்வி கிடைக்கும் காலம். படிப்பு, போதனை மற்றும் சட்ட விவகாரங்களில் சிறப்பான நற்பலன்கள் கிட்டும்."
        },
        Saturn: {
            en: "Saturn Mahadasha (19 Years): Period of hard work, discipline, restructuring, and lessons through endurance. Delays are common, but steady success is guaranteed through ethics.",
            ta: "சனி தசா (19 ஆண்டுகள்): கடின உழைப்பு, ஒழுக்கம், வாழ்க்கையை மறுசீரமைத்தல் மற்றும் பொறுமையால் பாடம் கற்கும் காலம். தாமதங்கள் ஏற்படும், ஆனால் நேர்மையான உழைப்பிற்கு நிலையான வெற்றி கிட்டும்."
        },
        Mercury: {
            en: "Mercury Mahadasha (17 Years): High intellectual growth, business success, learning, writing, and communication. Your analytical skills peak. Excellent for commerce and accounts.",
            ta: "புதன் தசா (17 ஆண்டுகள்): புத்திசாலித்தனமான வளர்ச்சி, வியாபார வெற்றி, கல்வி மேம்பாடு, எழுத்து மற்றும் பேச்சுத் திறமை கூடும் காலம். வணிகம், கணக்கு வழக்குகளுக்கு மிகவும் உகந்தது."
        }
    },

    // Gochara (Transit) Predictions
    transits: {
        saturn: {
            sadeSati1: {
                en: "Saturn Transit (12th House - Start of Sade Sati): Financial strain, increased expenditure, travels, and sleep issues. Time to learn money management and exercise patience.",
                ta: "சனி பெயர்ச்சி (12ம் இடம் - ஏழரை சனி ஆரம்பம் / விரய சனி): தேவையற்ற விரயங்கள், பொருளாதார நெருக்கடி, அலைச்சல் மற்றும் தூக்கமின்மை. நிதானமும், பண வரவு செலவில் கட்டுப்பாடும் தேவைப்படும் காலம்."
            },
            sadeSati2: {
                en: "Saturn Transit (1st House - Janma Sani): High mental stress, health concerns, career workload, and challenges. Saturn demands discipline and endurance. Avoid starting risky ventures.",
                ta: "சனி பெயர்ச்சி (1ம் இடம் - ஜென்ம சனி): மன அழுத்தம், உடல் உபாதைகள், அதிக வேலைப்பளு மற்றும் சவால்கள் நிறைந்த காலம். சனி பகவான் ஒழுக்கத்தையும் பொறுமையையும் சோதிப்பார். புதிய முயற்சிகளில் கவனம் தேவை."
            },
            sadeSati3: {
                en: "Saturn Transit (2nd House - End of Sade Sati): Family disputes, delays in financial returns, eye strain, and speech issues. Guard your speech. Conditions improve slowly.",
                ta: "சனி பெயர்ச்சி (2ம் இடம் - ஏழரை சனி முடிவு / பாத சனி): குடும்பத்தில் சிறு சண்டைகள், பண வரவில் தாமதம் மற்றும் பேச்சால் வீண் வாக்குவாதங்கள். வார்த்தைகளில் நிதானம் தேவை. நிலைமை மெதுவாக சீரடையும்."
            },
            ashtama: {
                en: "Saturn Transit (8th House - Ashtama Sani): High caution required in health, career, and finance. Avoid arguments, partnerships, and risky investments. Focus on ethics and hard work.",
                ta: "சனி பெயர்ச்சி (8ம் இடம் - அஷ்டம சனி): உடல் நலம், தொழில் மற்றும் பண விவகாரங்களில் அதீத எச்சரிக்கை தேவை. வீண் வாக்குவாதம், கூட்டு தொழில் மற்றும் ஆபத்தான முதலீடுகளைத் தவிர்க்கவும். நேர்மையே வெல்லும்."
            },
            ardhastama: {
                en: "Saturn Transit (4th House - Ardhastama Sani): Mother's health concerns, domestic instability, vehicle repairs, and chest area ailments. Keep patience in family matters.",
                ta: "சனி பெயர்ச்சி (4ம் இடம் - அர்த்தாஷ்டம சனி): தாயாரின் உடல்நலத்தில் அக்கறை, சொத்து அல்லது வாகனங்களால் விரயங்கள், வீட்டில் அமைதியின்மை. குடும்ப விவகாரங்களில் பொறுமையாக இருக்கவும்."
            },
            auspicious: {
                en: "Saturn Transit (Auspicious House): Financial gains, career promotion, defeat of enemies, and stability in life. Saturn rewards your past hard work.",
                ta: "சனி பெயர்ச்சி (நற்பலன் தரும் இடம் - 3, 6, 11): பொருளாதார வளர்ச்சி, தொழில் உயர்வு, எதிரிகளை வெல்லுதல் மற்றும் வாழ்வில் ஸ்திரத்தன்மை. உங்கள் உழைப்பிற்கு சனி பகவான் நல்ல பலன்களைத் தருவார்."
            },
            neutral: {
                en: "Saturn Transit (General House): Moderate period. Focus on routine responsibilities. Hard work will bring slow but steady progress.",
                ta: "சனி பெயர்ச்சி (இதர இடங்கள்): நடுத்தரமான காலம். அன்றாட பணிகளில் கவனம் செலுத்தவும். உழைப்பிற்கேற்ப மெதுவான ஆனால் நிலையான முன்னேற்றம் இருக்கும்."
            }
        },
        jupiter: {
            auspicious: {
                en: "Jupiter Transit (Auspicious House - Guru Balan): Birth of children, marriage, financial prosperity, foreign travels, and spiritual blessings. Highly supportive period.",
                ta: "குரு பெயர்ச்சி (நற்பலன் தரும் இடம் - 2, 5, 7, 9, 11 / குரு பலன்): சுப நிகழ்ச்சிகள், புத்திர பாக்கியம், பண வரவு, ஆன்மீக ஈடுபாடு மற்றும் மன மகிழ்ச்சி கூடும். அனைத்து காரியங்களிலும் வெற்றி கிட்டும்."
            },
            janma: {
                en: "Jupiter Transit (1st House - Janma Guru): Career changes, displacement or travels, mental stress, and weight issues. Focus on spirituality and health.",
                ta: "குரு பெயர்ச்சி (1ம் இடம் - ஜென்ம குரு): இடமாற்றம், தேவையற்ற அலைச்சல், தொழில் மாற்றங்கள் மற்றும் மன உளைச்சல். உடல் ஆரோக்கியத்திலும் ஆன்மீகத்திலும் கவனம் செலுத்தவும்."
            },
            neutral: {
                en: "Jupiter Transit (General House): Normal period. Financial balance is maintained. Avoid making large commitments without checking facts.",
                ta: "குரு பெயர்ச்சி (இதர இடங்கள்): சாதாரண காலம். வரவு செலவுகள் சமமாக இருக்கும். பெரிய முதலீடுகள் அல்லது வாக்குறுதிகள் அளிக்கும் போது கவனமாக செயல்படவும்."
            }
        },
        rahuKetu: {
            auspicious: {
                en: "Rahu/Ketu Transit (Auspicious House): Material expansion, victory over enemies, travel abroad, and unexpected financial gains. High luck.",
                ta: "ராகு-கேது பெயர்ச்சி (நற்பலன் தரும் இடம் - 3, 6, 11): பண வரவு, தைரியம் கூடுதல், எதிரிகளை வெல்லுதல் மற்றும் வெளிநாட்டு பயணம். எதிர்பாராத அதிர்ஷ்ட வாய்ப்புகள் கிட்டும்."
            },
            relationships: {
                en: "Rahu/Ketu Transit (1st/7th House Axis): Focus on relationships and health. Partner's health requires attention. Avoid disputes in married or business life.",
                ta: "ராகு-கேது பெயர்ச்சி (1, 7ம் இடங்கள் - களத்திர தோஷ பெயர்ச்சி): கணவன்-மனைவி அல்லது கூட்டுத் தொழில் உறவுகளில் விரிசல் ஏற்படாமல் பார்த்துக்கொள்ளவும். ஆரோக்கியத்திலும் துணையின் நலனிலும் கவனம் தேவை."
            },
            finance: {
                en: "Rahu/Ketu Transit (2nd/8th House Axis): Speech control needed. Financial fluctuations and family expenses rise. Avoid quick money schemes.",
                ta: "ராகு-கேது பெயர்ச்சி (2, 8ம் இடங்கள்): குடும்பத்தில் வாக்குவாதங்களைத் தவிர்க்கவும், தேவையற்ற பண இழப்புகள் ஏற்படலாம். குறுக்கு வழியில் பணம் சம்பாதிக்கும் ஆசையை கைவிடவும்."
            },
            neutral: {
                en: "Rahu/Ketu Transit (General House): Mixed results. Routine affairs will go smoothly with general effort.",
                ta: "ராகு-கேது பெயர்ச்சி (இதர இடங்கள்): கலவையான பலன்கள். வழக்கமான பணிகள் சுமுகமாக நடைபெறும். எதிலும் திட்டமிட்டுச் செயல்படுவது நன்மை தரும்."
            }
        }
    }
};

if (typeof module !== 'undefined') {
    module.exports = Translations;
}
