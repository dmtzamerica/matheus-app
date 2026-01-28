// Spanish Reading App for Kids
// ============================

// Data
const consonants = ['m', 'p', 's', 'l', 't', 'n', 'd', 'c', 'r', 'b', 'f', 'g', 'h', 'j', 'k', 'v', 'w', 'x', 'y', 'z', 'ñ', 'ch', 'll'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

const wordsByCategory = {
    animals: [
        { word: 'gato', emoji: '🐱', syllables: 'ga-to' },
        { word: 'perro', emoji: '🐕', syllables: 'pe-rro' },
        { word: 'pato', emoji: '🦆', syllables: 'pa-to' },
        { word: 'oso', emoji: '🐻', syllables: 'o-so' },
        { word: 'pez', emoji: '🐟', syllables: 'pez' },
        { word: 'rana', emoji: '🐸', syllables: 'ra-na' },
        { word: 'león', emoji: '🦁', syllables: 'le-ón' },
        { word: 'mono', emoji: '🐵', syllables: 'mo-no' },
        { word: 'vaca', emoji: '🐄', syllables: 'va-ca' },
        { word: 'lobo', emoji: '🐺', syllables: 'lo-bo' },
        { word: 'pájaro', emoji: '🐦', syllables: 'pá-ja-ro' },
        { word: 'ratón', emoji: '🐭', syllables: 'ra-tón' }
    ],
    food: [
        { word: 'manzana', emoji: '🍎', syllables: 'man-za-na' },
        { word: 'pan', emoji: '🍞', syllables: 'pan' },
        { word: 'leche', emoji: '🥛', syllables: 'le-che' },
        { word: 'uva', emoji: '🍇', syllables: 'u-va' },
        { word: 'queso', emoji: '🧀', syllables: 'que-so' },
        { word: 'huevo', emoji: '🥚', syllables: 'hue-vo' },
        { word: 'plátano', emoji: '🍌', syllables: 'plá-ta-no' },
        { word: 'fresa', emoji: '🍓', syllables: 'fre-sa' },
        { word: 'pizza', emoji: '🍕', syllables: 'piz-za' },
        { word: 'sopa', emoji: '🍲', syllables: 'so-pa' },
        { word: 'agua', emoji: '💧', syllables: 'a-gua' },
        { word: 'helado', emoji: '🍦', syllables: 'he-la-do' }
    ],
    family: [
        { word: 'mamá', emoji: '👩', syllables: 'ma-má' },
        { word: 'papá', emoji: '👨', syllables: 'pa-pá' },
        { word: 'bebé', emoji: '👶', syllables: 'be-bé' },
        { word: 'niño', emoji: '👦', syllables: 'ni-ño' },
        { word: 'niña', emoji: '👧', syllables: 'ni-ña' },
        { word: 'abuela', emoji: '👵', syllables: 'a-bue-la' },
        { word: 'abuelo', emoji: '👴', syllables: 'a-bue-lo' },
        { word: 'hermano', emoji: '👦', syllables: 'her-ma-no' },
        { word: 'hermana', emoji: '👧', syllables: 'her-ma-na' },
        { word: 'tío', emoji: '👨', syllables: 'tí-o' },
        { word: 'tía', emoji: '👩', syllables: 'tí-a' },
        { word: 'primo', emoji: '🧒', syllables: 'pri-mo' }
    ],
    objects: [
        { word: 'casa', emoji: '🏠', syllables: 'ca-sa' },
        { word: 'sol', emoji: '☀️', syllables: 'sol' },
        { word: 'luna', emoji: '🌙', syllables: 'lu-na' },
        { word: 'mesa', emoji: '🪑', syllables: 'me-sa' },
        { word: 'cama', emoji: '🛏️', syllables: 'ca-ma' },
        { word: 'pelota', emoji: '⚽', syllables: 'pe-lo-ta' },
        { word: 'libro', emoji: '📚', syllables: 'li-bro' },
        { word: 'carro', emoji: '🚗', syllables: 'ca-rro' },
        { word: 'árbol', emoji: '🌳', syllables: 'ár-bol' },
        { word: 'flor', emoji: '🌸', syllables: 'flor' },
        { word: 'estrella', emoji: '⭐', syllables: 'es-tre-lla' },
        { word: 'zapato', emoji: '👟', syllables: 'za-pa-to' }
    ]
};

// All words for the game
const allWords = Object.values(wordsByCategory).flat();

// Numbers 1-20
const numbers = [
    { number: 1, word: 'uno', emoji: '1️⃣' },
    { number: 2, word: 'dos', emoji: '2️⃣' },
    { number: 3, word: 'tres', emoji: '3️⃣' },
    { number: 4, word: 'cuatro', emoji: '4️⃣' },
    { number: 5, word: 'cinco', emoji: '5️⃣' },
    { number: 6, word: 'seis', emoji: '6️⃣' },
    { number: 7, word: 'siete', emoji: '7️⃣' },
    { number: 8, word: 'ocho', emoji: '8️⃣' },
    { number: 9, word: 'nueve', emoji: '9️⃣' },
    { number: 10, word: 'diez', emoji: '🔟' },
    { number: 11, word: 'once', emoji: '1️⃣1️⃣' },
    { number: 12, word: 'doce', emoji: '1️⃣2️⃣' },
    { number: 13, word: 'trece', emoji: '1️⃣3️⃣' },
    { number: 14, word: 'catorce', emoji: '1️⃣4️⃣' },
    { number: 15, word: 'quince', emoji: '1️⃣5️⃣' },
    { number: 16, word: 'dieciséis', emoji: '1️⃣6️⃣' },
    { number: 17, word: 'diecisiete', emoji: '1️⃣7️⃣' },
    { number: 18, word: 'dieciocho', emoji: '1️⃣8️⃣' },
    { number: 19, word: 'diecinueve', emoji: '1️⃣9️⃣' },
    { number: 20, word: 'veinte', emoji: '2️⃣0️⃣' },
];

// State
let stars = parseInt(localStorage.getItem('spanishStars') || '0');
let currentConsonant = 'm';
let currentCategory = 'animals';
let currentGameWord = null;
let correctCount = parseInt(localStorage.getItem('correctCount') || '0');
let streak = 0;

// DOM Elements
const starCountEl = document.getElementById('starCount');
const syllablesGrid = document.getElementById('syllablesGrid');
const wordsGrid = document.getElementById('wordsGrid');
const gameEmoji = document.getElementById('gameEmoji');
const gameOptions = document.getElementById('gameOptions');
const gameFeedback = document.getElementById('gameFeedback');
const nextBtn = document.getElementById('nextBtn');
const listenBtn = document.getElementById('listenBtn');
const correctCountEl = document.getElementById('correctCount');
const streakCountEl = document.getElementById('streakCount');
const streakFire = document.getElementById('streakFire');
const celebration = document.getElementById('celebration');

// Initialize
function init() {
    updateStars();
    updateCorrectCount();
    setupNavigation();
    setupConsonantSelector();
    setupCategorySelector();
    setupVowels();
    renderSyllables();
    renderWords();
    renderNumbers();
    setupGame();
}

// Update star display
function updateStars() {
    starCountEl.textContent = stars;
    localStorage.setItem('spanishStars', stars.toString());
}

// Update correct count
function updateCorrectCount() {
    correctCountEl.textContent = correctCount;
    localStorage.setItem('correctCount', correctCount.toString());
}

// Add stars with celebration
function addStars(amount) {
    stars += amount;
    updateStars();
    
    if (amount >= 1) {
        showCelebration();
    }
}

// Show celebration
function showCelebration() {
    celebration.classList.add('active');
    
    // Create confetti
    createConfetti();
    
    setTimeout(() => {
        celebration.classList.remove('active');
    }, 1500);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A06CD5', '#45B7D1'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            z-index: 1001;
            animation: confettiFall ${2 + Math.random() * 2}s linear forwards;
        `;
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 4000);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// All valid syllables for detection
const allSyllables = new Set();
const allConsonants = ['m', 'p', 's', 'l', 't', 'n', 'd', 'c', 'r', 'b', 'f', 'g', 'h', 'j', 'k', 'v', 'w', 'x', 'y', 'z', 'ñ', 'ch', 'll'];
const allVowels = ['a', 'e', 'i', 'o', 'u'];
allConsonants.forEach(c => allVowels.forEach(v => allSyllables.add(c + v)));

// Check if text is a single syllable
function isSyllable(text) {
    return allSyllables.has(text.toLowerCase());
}

// Get the best Spanish voice available - prefer female/warm voices
let cachedSpanishVoice = null;

function getSpanishVoice() {
    if (cachedSpanishVoice) return cachedSpanishVoice;
    
    const voices = window.speechSynthesis.getVoices();
    
    // Debug: log available Spanish voices
    const spanishVoices = voices.filter(v => v.lang.startsWith('es'));
    console.log('Available Spanish voices:', spanishVoices.map(v => `${v.name} (${v.lang})`));
    
    // Preferred female Spanish voice names (common on macOS/iOS)
    const preferredFemaleVoices = [
        'Paulina',      // Mexican Spanish female - very warm
        'Mónica',       // Spanish female
        'Monica',       // Spanish female (without accent)
        'Angelica',     // Mexican Spanish female
        'Angélica',     // Mexican Spanish female (with accent)
        'Francisca',    // Chilean Spanish female
        'Esperanza',    // Mexican Spanish female
        'Marisol',      // Spanish female
        'Penelope',     // Spanish female
        'Penélope',     // Spanish female (with accent)
    ];
    
    // First try to find a preferred female voice
    for (const name of preferredFemaleVoices) {
        const voice = voices.find(v => 
            v.name.includes(name) && v.lang.startsWith('es')
        );
        if (voice) {
            console.log('Selected voice:', voice.name);
            cachedSpanishVoice = voice;
            return voice;
        }
    }
    
    // Then try any female Spanish voice (often have "female" or "mujer" in name)
    const femaleVoice = voices.find(v => 
        v.lang.startsWith('es') && 
        (v.name.toLowerCase().includes('female') || 
         v.name.toLowerCase().includes('mujer') ||
         v.name.toLowerCase().includes('woman'))
    );
    if (femaleVoice) {
        console.log('Selected voice:', femaleVoice.name);
        cachedSpanishVoice = femaleVoice;
        return femaleVoice;
    }
    
    // Prefer Mexican or Latin American Spanish for clearer pronunciation
    const preferredLangs = [
        'es-MX', 'es-US', 'es-419', // Latin American
        'es-ES', 'es'  // Spain Spanish
    ];
    
    for (const langCode of preferredLangs) {
        const voice = voices.find(v => v.lang === langCode || v.lang.startsWith(langCode));
        if (voice) {
            console.log('Selected voice:', voice.name);
            cachedSpanishVoice = voice;
            return voice;
        }
    }
    
    // Fallback to any Spanish voice
    cachedSpanishVoice = voices.find(v => v.lang.startsWith('es'));
    console.log('Selected voice (fallback):', cachedSpanishVoice?.name);
    return cachedSpanishVoice;
}

// Text to Speech
function speak(text, isSyllableMode = false) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const lowerText = text.toLowerCase();
    
    // For syllables, speak them more clearly
    let textToSpeak = text;
    if (isSyllable(lowerText)) {
        // Repeat the syllable for better learning
        textToSpeak = `${text}... ${text}`;
    }
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-MX'; // Mexican Spanish tends to be clearer
    
    // Adjust rate based on content type
    if (isSyllable(lowerText)) {
        utterance.rate = 0.55;
        utterance.pitch = 1.1; // Warmer tone
    } else if (text.length <= 6) {
        utterance.rate = 0.65; // Slow for short words
        utterance.pitch = 1.1; // Warmer tone
    } else {
        utterance.rate = 0.75; // Normal for longer words
        utterance.pitch = 1.1; // Warmer tone
    }
    
    // Use the best Spanish voice
    const spanishVoice = getSpanishVoice();
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Syllables that get misinterpreted by TTS and need phonetic help
const syllableFixMap = {
    // A endings - these are generally fine
    'ma': 'ma', 'pa': 'pa', 'sa': 'sa', 'la': 'la', 'ta': 'ta',
    'na': 'nah', 'da': 'da', 'ca': 'ca', 'ra': 'ra', 'ba': 'ba',
    'fa': 'fa', 'ga': 'ga', 'ja': 'ja', 'ka': 'ka', 'va': 'va',
    'wa': 'wa', 'xa': 'xa', 'ya': 'ya', 'za': 'za',
    'ña': 'ña', 'cha': 'cha', 'lla': 'lla', 'rra': 'rra',
    
    // E endings
    'me': 'me', 'pe': 'pe', 'se': 'se', 'le': 'le', 'te': 'te',
    'ne': 'neh', 'de': 'de', 'ce': 'ce', 're': 're', 'be': 'be',
    'fe': 'fe', 'ge': 'ge', 'je': 'je', 'ke': 'ke', 've': 've',
    'we': 'we', 'xe': 'xe', 'ye': 'ye', 'ze': 'ze',
    'ñe': 'ñe', 'che': 'che', 'lle': 'lle', 'rre': 'rre',
    
    // I endings
    'mi': 'mi', 'pi': 'pi', 'si': 'si', 'li': 'li', 'ti': 'ti',
    'ni': 'ni', 'di': 'di', 'ci': 'ci', 'ri': 'ri', 'bi': 'bi',
    'fi': 'fi', 'gi': 'gi', 'ji': 'ji', 'ki': 'ki', 'vi': 'vi',
    'wi': 'wi', 'xi': 'xi', 'yi': 'yi', 'zi': 'zi',
    'ñi': 'ñi', 'chi': 'chi', 'lli': 'lli', 'rri': 'rri',
    
    // O endings
    'mo': 'mo', 'po': 'po', 'so': 'so', 'lo': 'lo', 'to': 'toh',
    'no': 'no', 'do': 'do', 'co': 'co', 'ro': 'ro', 'bo': 'bo',
    'fo': 'fo', 'go': 'goh', 'jo': 'jo', 'ko': 'ko', 'vo': 'boh',
    'wo': 'wo', 'xo': 'xo', 'yo': 'yo', 'zo': 'zo',
    'ño': 'ño', 'cho': 'cho', 'llo': 'llo', 'rro': 'rro',
    
    // U endings
    'mu': 'mu', 'pu': 'pu', 'su': 'su', 'lu': 'luh', 'tu': 'tu',
    'nu': 'nu', 'du': 'du', 'cu': 'cu', 'ru': 'ru', 'bu': 'bu',
    'fu': 'fu', 'gu': 'gu', 'ju': 'ju', 'ku': 'ku', 'vu': 'vu',
    'wu': 'wu', 'xu': 'xu', 'yu': 'yu', 'zu': 'zu',
    'ñu': 'ñu', 'chu': 'chu', 'llu': 'llu', 'rru': 'rru',
    
    // H is silent in Spanish
    'ha': 'a', 'he': 'e', 'hi': 'i', 'ho': 'o', 'hu': 'u',
};

// Speak syllable with emphasis
function speakSyllable(syllable) {
    window.speechSynthesis.cancel();
    
    const lowerSyllable = syllable.toLowerCase();
    
    // Use the mapped version or original
    let textToSpeak = syllableFixMap[lowerSyllable] || lowerSyllable;
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-MX';
    utterance.rate = 0.6;
    utterance.pitch = 1.1;
    
    const spanishVoice = getSpanishVoice();
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Setup Navigation
function setupNavigation() {
    const tabs = document.querySelectorAll('.nav-tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.tab;
            
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');
            
            // Start new game when switching to game tab
            if (targetId === 'game') {
                newGameRound();
            }
        });
    });
}

// Setup Consonant Selector
function setupConsonantSelector() {
    const buttons = document.querySelectorAll('.consonant-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentConsonant = btn.dataset.consonant;
            
            // Speak the consonant
            speakConsonant(currentConsonant);
            
            renderSyllables();
        });
    });
}

// Speak consonant
function speakConsonant(consonant) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(consonant);
    utterance.lang = 'es-MX';
    utterance.rate = 0.6;
    utterance.pitch = 1.1;
    
    const spanishVoice = getSpanishVoice();
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Setup Category Selector
function setupCategorySelector() {
    const buttons = document.querySelectorAll('.category-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderWords();
        });
    });
}

// Setup Vowels
function setupVowels() {
    const vowelEls = document.querySelectorAll('.vowel');
    
    vowelEls.forEach(vowel => {
        vowel.addEventListener('click', () => {
            const letter = vowel.textContent.toLowerCase();
            // Speak vowel twice for emphasis
            speakVowel(letter);
            vowel.style.transform = 'scale(1.3)';
            setTimeout(() => {
                vowel.style.transform = '';
            }, 200);
        });
    });
}

// Speak vowel with emphasis
function speakVowel(vowel) {
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(vowel);
    utterance.lang = 'es-MX';
    utterance.rate = 0.65;
    utterance.pitch = 1.1; // Slightly higher for warmer tone
    
    const spanishVoice = getSpanishVoice();
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

// Render Syllables
function renderSyllables() {
    syllablesGrid.innerHTML = '';
    
    vowels.forEach((vowel, index) => {
        const syllable = currentConsonant + vowel;
        const card = document.createElement('div');
        card.className = 'syllable-card';
        card.textContent = syllable.toUpperCase();
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.addEventListener('click', () => {
            speakSyllable(syllable);
            card.style.transform = 'scale(1.2) rotate(5deg)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
        
        syllablesGrid.appendChild(card);
    });
}

// Render Words
function renderWords() {
    wordsGrid.innerHTML = '';
    
    const words = wordsByCategory[currentCategory];
    
    words.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <span class="word-emoji">${item.emoji}</span>
            <span class="word-text">${item.word}</span>
            <span class="word-syllables">${item.syllables}</span>
        `;
        
        card.addEventListener('click', () => {
            speak(item.word);
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
        
        wordsGrid.appendChild(card);
    });
}

// Render Numbers
function renderNumbers() {
    const numbersGrid = document.getElementById('numbersGrid');
    numbersGrid.innerHTML = '';
    
    numbers.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'number-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        card.innerHTML = `
            <span class="number-digit">${item.number}</span>
            <span class="number-word">${item.word}</span>
        `;
        
        card.addEventListener('click', () => {
            speak(item.word);
            card.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                card.style.transform = '';
            }, 300);
        });
        
        numbersGrid.appendChild(card);
    });
}

// Setup Game
function setupGame() {
    listenBtn.addEventListener('click', () => {
        if (currentGameWord) {
            speak(currentGameWord.word);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        newGameRound();
    });
    
    newGameRound();
}

// New Game Round
function newGameRound() {
    // Reset UI
    gameFeedback.textContent = '';
    gameFeedback.className = 'game-feedback';
    nextBtn.style.display = 'none';
    
    // Pick random word
    currentGameWord = allWords[Math.floor(Math.random() * allWords.length)];
    gameEmoji.textContent = currentGameWord.emoji;
    
    // Generate options (1 correct + 3 wrong)
    const options = [currentGameWord];
    while (options.length < 4) {
        const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        if (!options.find(o => o.word === randomWord.word)) {
            options.push(randomWord);
        }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    // Render options
    gameOptions.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'game-option';
        btn.textContent = option.word;
        btn.addEventListener('click', () => checkAnswer(btn, option));
        gameOptions.appendChild(btn);
    });
    
    // Auto-speak the word
    setTimeout(() => speak(currentGameWord.word), 500);
}

// Check Answer
function checkAnswer(btn, selectedOption) {
    const buttons = gameOptions.querySelectorAll('.game-option');
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    if (selectedOption.word === currentGameWord.word) {
        // Correct!
        btn.classList.add('correct');
        gameFeedback.textContent = '¡Muy bien! 🎉';
        gameFeedback.className = 'game-feedback correct';
        
        correctCount++;
        streak++;
        updateCorrectCount();
        streakCountEl.textContent = streak;
        
        if (streak >= 3) {
            streakFire.classList.add('active');
        }
        
        // Add star every 3 correct answers
        if (correctCount % 3 === 0) {
            addStars(1);
        }
        
        speak('¡Muy bien!');
    } else {
        // Wrong
        btn.classList.add('wrong');
        gameFeedback.textContent = `Era: ${currentGameWord.word}`;
        gameFeedback.className = 'game-feedback wrong';
        
        streak = 0;
        streakCountEl.textContent = streak;
        streakFire.classList.remove('active');
        
        // Highlight correct answer
        buttons.forEach(b => {
            if (b.textContent === currentGameWord.word) {
                setTimeout(() => b.classList.add('correct'), 500);
            }
        });
        
        speak(currentGameWord.word);
    }
    
    nextBtn.style.display = 'inline-block';
}

// Load voices when available
window.speechSynthesis.onvoiceschanged = () => {
    // Reset cached voice to pick up newly loaded voices
    cachedSpanishVoice = null;
    getSpanishVoice();
};

// Preload voices
function preloadVoices() {
    // Trigger voice loading
    window.speechSynthesis.getVoices();
    
    // Some browsers need a small delay
    setTimeout(() => {
        cachedSpanishVoice = null;
        getSpanishVoice();
    }, 100);
}

// ========================
// Counting Game
// ========================

const fruits = ['🍎', '🍊', '🍋', '🍇', '🍓', '🍑', '🍒', '🥝', '🍌', '🍉'];
const numberWords = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
    'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'];

let currentCount = 0;
let countingScore = 0;

function initCountingGame() {
    const nextBtn = document.getElementById('countingNextBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            newCountingRound();
        });
    }
    newCountingRound();
}

function newCountingRound() {
    const fruitDisplay = document.getElementById('fruitDisplay');
    const countingOptions = document.getElementById('countingOptions');
    const countingFeedback = document.getElementById('countingFeedback');
    const nextBtn = document.getElementById('countingNextBtn');
    
    if (!fruitDisplay || !countingOptions) return;
    
    // Reset
    countingFeedback.textContent = '';
    countingFeedback.className = 'counting-feedback';
    nextBtn.style.display = 'none';
    
    // Random count between 1 and 20
    currentCount = Math.floor(Math.random() * 20) + 1;
    
    // Random fruit
    const fruit = fruits[Math.floor(Math.random() * fruits.length)];
    
    // Display fruits with animation
    fruitDisplay.innerHTML = '';
    for (let i = 0; i < currentCount; i++) {
        const fruitEl = document.createElement('span');
        fruitEl.className = 'fruit-item';
        fruitEl.textContent = fruit;
        fruitEl.style.animationDelay = `${i * 0.05}s`;
        fruitDisplay.appendChild(fruitEl);
    }
    
    // Generate 3 options (1 correct, 2 wrong)
    const options = [currentCount];
    while (options.length < 3) {
        let wrongNum;
        // Generate nearby numbers for harder difficulty
        if (Math.random() > 0.5) {
            wrongNum = currentCount + Math.floor(Math.random() * 3) + 1;
        } else {
            wrongNum = currentCount - Math.floor(Math.random() * 3) - 1;
        }
        // Keep in range 1-20 and avoid duplicates
        if (wrongNum >= 1 && wrongNum <= 20 && !options.includes(wrongNum)) {
            options.push(wrongNum);
        }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    // Render options
    countingOptions.innerHTML = '';
    options.forEach(num => {
        const btn = document.createElement('button');
        btn.className = 'counting-option';
        btn.innerHTML = `
            <span class="number">${num}</span>
            <span class="word">${numberWords[num]}</span>
        `;
        btn.addEventListener('click', () => checkCountingAnswer(btn, num));
        countingOptions.appendChild(btn);
    });
    
    // Speak the question
    setTimeout(() => {
        speak(`¿Cuántas ${fruit === '🍎' ? 'manzanas' : 'frutas'} hay?`);
    }, 500);
}

function checkCountingAnswer(btn, selectedNum) {
    const countingOptions = document.getElementById('countingOptions');
    const countingFeedback = document.getElementById('countingFeedback');
    const nextBtn = document.getElementById('countingNextBtn');
    const countingCorrectEl = document.getElementById('countingCorrect');
    
    if (selectedNum === currentCount) {
        // Correct!
        // Disable all buttons
        countingOptions.querySelectorAll('.counting-option').forEach(b => {
            b.disabled = true;
        });
        
        btn.classList.add('correct');
        countingFeedback.textContent = `¡Muy bien! Hay ${numberWords[currentCount]} 🎉`;
        countingFeedback.className = 'counting-feedback success';
        
        countingScore++;
        countingCorrectEl.textContent = countingScore;
        
        speak(`¡Muy bien! Hay ${numberWords[currentCount]}`);
        
        // Add star every 5 correct
        if (countingScore % 5 === 0) {
            addStars(1);
        }
        
        nextBtn.style.display = 'inline-block';
    } else {
        // Wrong - just mark this button wrong but let them try again
        btn.classList.add('wrong');
        btn.disabled = true;
        countingFeedback.textContent = '¡Intenta otra vez! 💪';
        countingFeedback.className = 'counting-feedback error';
        
        speak('Intenta otra vez');
    }
}

// ========================
// Name Spelling Game
// ========================

const targetName = 'MATHEUS';
let currentLetters = [];

function initNameGame() {
    const letterBank = document.getElementById('letterBank');
    const dropZones = document.querySelectorAll('.drop-zone');
    const mixBtn = document.getElementById('mixBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    if (!letterBank || !mixBtn || !resetBtn) {
        console.error('Name game elements not found');
        return;
    }
    
    console.log('Initializing name game...');
    
    // Initialize letters
    resetNameGame();
    
    // Mix button
    mixBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Mix clicked');
        shuffleLetters();
        speak('¡Mezclado!');
    });
    
    // Reset button
    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Reset clicked');
        resetNameGame();
    });
    
    // Setup drop zones
    dropZones.forEach((zone, i) => {
        console.log('Setting up drop zone', i);
        
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('dragleave', handleDragLeave);
        zone.addEventListener('drop', handleDrop);
        
        // Click to place selected letter
        zone.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Zone clicked', i);
            handleZoneClick(zone);
        });
    });
    
    // Click on letter bank to return letters
    letterBank.addEventListener('click', (e) => {
        if (e.target === letterBank && selectedLetter) {
            // Clicking empty area of bank with a letter selected - deselect
            selectedLetter.classList.remove('selected');
            selectedLetter = null;
        }
    });
    
    console.log('Name game initialized');
}

function handleZoneClick(zone) {
    if (!selectedLetter) return;
    
    // Get the index of this zone
    const zoneIndex = parseInt(zone.dataset.index);
    const expectedLetter = targetName[zoneIndex];
    const selectedLetterChar = selectedLetter.textContent;
    
    // Check if this is the correct letter for this position
    if (selectedLetterChar !== expectedLetter) {
        // Wrong letter - shake the zone and don't place it
        zone.classList.add('wrong-shake');
        speak('No, intenta con otra');
        setTimeout(() => {
            zone.classList.remove('wrong-shake');
        }, 500);
        return;
    }
    
    // Correct letter!
    // If zone already has a letter, move it back to bank
    const existingLetter = zone.querySelector('.draggable-letter');
    if (existingLetter) {
        existingLetter.classList.remove('selected');
        document.getElementById('letterBank').appendChild(existingLetter);
    }
    
    // Move selected letter to zone
    zone.appendChild(selectedLetter);
    zone.classList.add('filled');
    selectedLetter.classList.remove('selected');
    selectedLetter = null;
    
    // Speak encouragement
    speak('¡Muy bien!');
    
    // Check if complete
    checkNameComplete();
}

function resetNameGame() {
    console.log('resetNameGame called');
    const letterBank = document.getElementById('letterBank');
    const dropZones = document.querySelectorAll('.drop-zone');
    const nameFeedback = document.getElementById('nameFeedback');
    
    console.log('letterBank:', letterBank);
    
    // Clear drop zones
    dropZones.forEach(zone => {
        zone.innerHTML = '';
        zone.classList.remove('filled');
    });
    
    // Clear feedback
    if (nameFeedback) {
        nameFeedback.textContent = '';
        nameFeedback.className = 'name-feedback';
    }
    
    // Create shuffled letters
    currentLetters = targetName.split('');
    console.log('currentLetters:', currentLetters);
    shuffleLetters();
}

function shuffleLetters() {
    console.log('shuffleLetters called');
    const letterBank = document.getElementById('letterBank');
    
    if (!letterBank) {
        console.error('letterBank not found!');
        return;
    }
    
    // Get letters currently in the bank and drop zones
    let lettersInBank = [];
    const dropZones = document.querySelectorAll('.drop-zone');
    
    // Collect letters from drop zones first
    dropZones.forEach(zone => {
        const letter = zone.querySelector('.draggable-letter');
        if (letter) {
            lettersInBank.push(letter.textContent);
            zone.innerHTML = '';
            zone.classList.remove('filled');
        }
    });
    
    // Also get letters still in bank
    letterBank.querySelectorAll('.draggable-letter').forEach(letter => {
        lettersInBank.push(letter.textContent);
    });
    
    // If no letters found (first run), use the target name
    if (lettersInBank.length === 0) {
        lettersInBank = targetName.split('');
        console.log('First run, using targetName:', lettersInBank);
    }
    
    // Shuffle
    for (let i = lettersInBank.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lettersInBank[i], lettersInBank[j]] = [lettersInBank[j], lettersInBank[i]];
    }
    
    console.log('Letters to render:', lettersInBank);
    
    // Render letters
    letterBank.innerHTML = '';
    lettersInBank.forEach((letter, index) => {
        const letterEl = createDraggableLetter(letter, index);
        letterBank.appendChild(letterEl);
    });
    
    console.log('Letters in bank:', letterBank.children.length);
}

let selectedLetter = null;

function createDraggableLetter(letter, index) {
    const letterEl = document.createElement('div');
    letterEl.className = 'draggable-letter';
    letterEl.textContent = letter;
    letterEl.draggable = true;
    letterEl.dataset.letter = letter;
    letterEl.dataset.id = `letter-${index}-${Date.now()}`;
    
    // Click to select (works on both desktop and mobile)
    letterEl.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleLetterClick(this);
    };
    
    // Drag events for desktop
    letterEl.addEventListener('dragstart', handleDragStart);
    letterEl.addEventListener('dragend', handleDragEnd);
    
    letterEl.style.cursor = 'pointer';
    
    return letterEl;
}

// Speak just the letter sound, not "M mayúscula"
function speakLetter(letter) {
    window.speechSynthesis.cancel();
    
    // Use lowercase to avoid "mayúscula" being said
    const textToSpeak = letter.toLowerCase();
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'es-MX';
    utterance.rate = 0.7;
    utterance.pitch = 1.1;
    
    const spanishVoice = getSpanishVoice();
    if (spanishVoice) {
        utterance.voice = spanishVoice;
    }
    
    window.speechSynthesis.speak(utterance);
}

function handleLetterClick(letterEl) {
    // If clicking same letter, deselect
    if (selectedLetter === letterEl) {
        selectedLetter.classList.remove('selected');
        selectedLetter = null;
        speakLetter(letterEl.textContent);
        return;
    }
    
    // Deselect previous
    if (selectedLetter) {
        selectedLetter.classList.remove('selected');
    }
    
    // Select this letter
    selectedLetter = letterEl;
    letterEl.classList.add('selected');
    speakLetter(letterEl.textContent);
}

let draggedElement = null;
let touchStartX = 0;
let touchStartY = 0;
let touchClone = null;

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.id);
    e.dataTransfer.effectAllowed = 'move';
    
    // Speak just the letter sound
    speakLetter(e.target.textContent);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
    draggedElement = null;
    
    // Remove drag-over from all zones
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-over');
}

function handleDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    const zone = e.currentTarget;
    zone.classList.remove('drag-over');
    
    if (!draggedElement) return;
    
    // Get the index of this zone
    const zoneIndex = parseInt(zone.dataset.index);
    const expectedLetter = targetName[zoneIndex];
    const droppedLetter = draggedElement.textContent;
    
    // Check if this is the correct letter for this position
    if (droppedLetter !== expectedLetter) {
        // Wrong letter - shake and return to bank
        zone.classList.add('wrong-shake');
        speak('Intenta con otra');
        setTimeout(() => {
            zone.classList.remove('wrong-shake');
        }, 500);
        return;
    }
    
    // Correct letter!
    // If zone already has a letter, move it back to bank
    const existingLetter = zone.querySelector('.draggable-letter');
    if (existingLetter) {
        document.getElementById('letterBank').appendChild(existingLetter);
    }
    
    // Move dragged letter to zone
    zone.appendChild(draggedElement);
    zone.classList.add('filled');
    
    // Speak encouragement
    speak('¡Muy bien!');
    
    // Check if complete
    checkNameComplete();
}

// Touch handling for mobile
function handleTouchStart(e) {
    const touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    draggedElement = e.target;
    
    // Create visual clone
    touchClone = e.target.cloneNode(true);
    touchClone.style.position = 'fixed';
    touchClone.style.pointerEvents = 'none';
    touchClone.style.zIndex = '1000';
    touchClone.style.opacity = '0.8';
    touchClone.classList.add('dragging');
    document.body.appendChild(touchClone);
    
    e.target.style.opacity = '0.4';
    speak(e.target.textContent);
}

function handleTouchMoveLetter(e) {
    if (!touchClone) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    touchClone.style.left = (touch.clientX - 27) + 'px';
    touchClone.style.top = (touch.clientY - 27) + 'px';
    
    // Highlight drop zone under finger
    const dropZones = document.querySelectorAll('.drop-zone');
    dropZones.forEach(zone => {
        const rect = zone.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            zone.classList.add('drag-over');
        } else {
            zone.classList.remove('drag-over');
        }
    });
}

function handleTouchEndLetter(e) {
    if (!touchClone || !draggedElement) return;
    
    const touch = e.changedTouches[0];
    
    // Find drop zone under finger
    const dropZones = document.querySelectorAll('.drop-zone');
    let targetZone = null;
    
    dropZones.forEach(zone => {
        const rect = zone.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            targetZone = zone;
        }
        zone.classList.remove('drag-over');
    });
    
    if (targetZone) {
        // If zone already has a letter, move it back to bank
        const existingLetter = targetZone.querySelector('.draggable-letter');
        if (existingLetter) {
            document.getElementById('letterBank').appendChild(existingLetter);
            existingLetter.style.opacity = '1';
        }
        
        // Move letter to zone
        targetZone.appendChild(draggedElement);
        targetZone.classList.add('filled');
        checkNameComplete();
    }
    
    // Cleanup
    draggedElement.style.opacity = '1';
    touchClone.remove();
    touchClone = null;
    draggedElement = null;
}

function handleTouchMove(e) {
    // For drop zones
}

function handleTouchEnd(e) {
    // For drop zones
}

function checkNameComplete() {
    const dropZones = document.querySelectorAll('.drop-zone');
    const nameFeedback = document.getElementById('nameFeedback');
    
    // Check if all zones are filled
    let allFilled = true;
    let spelledName = '';
    
    dropZones.forEach(zone => {
        const letter = zone.querySelector('.draggable-letter');
        if (letter) {
            spelledName += letter.textContent;
        } else {
            allFilled = false;
        }
    });
    
    if (!allFilled) {
        nameFeedback.textContent = '';
        nameFeedback.className = 'name-feedback';
        return;
    }
    
    // Check if correct
    if (spelledName === targetName) {
        nameFeedback.textContent = '¡Muy bien, Matheus! 🎉';
        nameFeedback.className = 'name-feedback success';
        speak('¡Muy bien Matheus! ¡Excelente!');
        addStars(1);
    } else {
        nameFeedback.textContent = '¡Intenta de nuevo! 💪';
        nameFeedback.className = 'name-feedback error';
        speak('Intenta de nuevo');
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    try {
        preloadVoices();
        console.log('Voices preloaded');
        init();
        console.log('Main init done');
        initCountingGame();
        console.log('Counting game init done');
        initNameGame();
        console.log('Name game init done');
    } catch (e) {
        console.error('Error during init:', e);
    }
});
