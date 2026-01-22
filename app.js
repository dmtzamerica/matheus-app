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
    'fo': 'fo', 'go': 'go', 'jo': 'jo', 'ko': 'ko', 'vo': 'boh',
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

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    preloadVoices();
    init();
});
