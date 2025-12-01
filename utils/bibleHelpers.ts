import { BibleVerse } from '../types';
import { VERSES } from '../data/mockData';

/**
 * Returns a category label (e.g., "EVANGELIUM") based on the book name in the reference.
 */
export const getBookCategory = (reference: string): string => {
  const book = reference.split(' ')[0]; // Basic split, e.g., "Johannes" from "Johannes 3:16"
  
  // Gospels
  if (['Matteusevangeliet', 'Markusevangeliet', 'Lukasevangeliet', 'Johannes'].some(b => book.includes(b))) {
    return 'EVANGELIUM';
  }
  // Psalms
  if (['Psaltaren'].some(b => book.includes(b))) {
    return 'PSALTARPSALM';
  }
  // Prophets
  if (['Jeremia', 'Jesaja', 'Hesekiel', 'Daniel'].some(b => book.includes(b))) {
    return 'PROFETIA';
  }
  // Epistles/Letters
  if (['Filipperbrevet', 'Romarbrevet', 'Korinthierbrevet', 'Galaterbrevet', 'Efesierbrevet', 'Kolosserbrevet', 'Thessalonikerbrevet', 'Timotheosbrevet', 'Titusbrevet', 'Filemonbrevet', 'Hebreerbrevet', 'Jakobsbrevet', 'Petrusbrevet', 'Johannesbrevet'].some(b => book.includes(b))) {
    return 'BREVEN';
  }
  // Moses books
  if (['Mosebok'].some(b => book.includes(b))) {
    return 'TORAH';
  }

  // Fallback
  return book.toUpperCase();
};

/**
 * Selects a daily verse deterministically based on the current date.
 * This ensures all users see the same "Dagens ord" on a given day, and it rotates.
 */
export const getDailyVerse = (): BibleVerse => {
  if (VERSES.length === 0) return { id: '0', reference: 'Joh 1:1', text: 'I begynnelsen var Ordet.' };

  const dateStr = new Date().toDateString();
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) {
    hash = dateStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % VERSES.length;
  return VERSES[index];
};

/**
 * Returns a random verse from the collection.
 */
export const getRandomVerse = (): BibleVerse => {
   return VERSES[Math.floor(Math.random() * VERSES.length)];
};

/**
 * Generates a theologically grounded, safe, and encouraging reflection.
 * In a real app, this would call an AI backend. Here we use a randomized bank of reflections.
 */
export const generateReflection = (verse: BibleVerse): string => {
  // Stubbed reflections that are biblically grounded and non-speculative.
  const reflections = [
    "Detta bibelord påminner oss om Guds ständiga närvaro. Oavsett vad vi möter idag får vi vila i att Han har omsorg om oss.",
    "Här ser vi en glimt av Guds karaktär – trofast och nådefull. Det är en grund vi kan bygga våra liv på, även när allt annat skakar.",
    "En uppmaning till förtröstan. Vi behöver inte bära allt själva; vi är inbjudna att lämna våra bördor till Honom som förmår allt.",
    "Guds kärlek är inte en prestation utan en gåva. Detta ord vill uppmuntra dig att ta emot den gåvan i enkelhet och tacksamhet.",
    "I en värld full av brus erbjuder Guds ord en riktning. Låt detta bli en påminnelse om vad som verkligen består i evighet.",
    "Frid är inte frånvaro av storm, utan närvaro av Gud. Detta ord inbjuder oss att söka den friden mitt i vardagen.",
    "Hoppet som beskrivs här handlar inte om önsketänkande, utan om ett löfte. Gud står fast vid sitt ord genom alla tider."
  ];

  return reflections[Math.floor(Math.random() * reflections.length)];
};
