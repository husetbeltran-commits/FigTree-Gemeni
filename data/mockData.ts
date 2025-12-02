
import { Song, Prayer, Article, BibleVerse } from '../types';

import { Song, Prayer, Article, BibleVerse } from '../types';

const IMAGE_BASE_PATH = (() => {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
})();

const VEM_AR_JESUS_IMAGE = `${IMAGE_BASE_PATH}images/vem-ar-jesus-v2.png`;
const BIBELN_KALLA_IMAGE = `${IMAGE_BASE_PATH}images/bibeln-myt-eller-tillforlitlig-kalla.png`;

export const SONGS: Song[] = [
  {
    id: '1',
    title: 'O Store Gud',
    lyrics: `O store Gud, när jag den värld beskådar
Som du har skapat med ditt allmaktsord
Hur där din visdom väver livets trådar
Och alla väsen mättas vid ditt bord

Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!
Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!

När sommarvinden susar över fälten
När blommor dofta invid källans rand
När trastar drilla i de gröna tälten
Vid furuskogens tysta, dunkla rand

Då brister själen ut i lovsångs ljud:
O store Gud, o store Gud!`,
    categories: ['Lovsång', 'Hymn'],
    tags: ['Klassisk', 'Natur'],
    createdAt: '2023-01-01',
    featured: true,
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop' // Nature/Forest
  },
  {
    id: '2',
    title: 'Tio tusen skäl',
    lyrics: `Sjung min själ till Herren
Sjung min själ
Sjung ut Hans heliga namn
Sjung som aldrig förr
Sjung min själ
Sjung ut Hans heliga namn

Solen går upp, det är en ny dag
Det är dags att sjunga igen
Vad som än händer och vad som än väntar
Låt mig få sjunga när kvällen når sitt slut`,
    categories: ['Lovsång', 'Modern'],
    tags: ['Matt Redman', 'Översättning'],
    createdAt: '2023-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=600&auto=format&fit=crop' // Sunrise/Sky
  },
  {
    id: '3',
    title: 'Hörnsten',
    lyrics: `Mitt hopp är byggt på Kristus
Hans blod och Hans rättfärdighet
Jag vågar inte tro på nåt annat
Än Jesu namn och helighet

Kristus är min fasta grund
En klippa i en orolig stund
Allt annat är som sand
Allt annat är som sand`,
    categories: ['Lovsång', 'Ungdomsmöte'],
    tags: ['Hillsong', 'Tillit'],
    createdAt: '2023-08-20',
    pinned: true,
    imageUrl: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=600&auto=format&fit=crop' // Stone/Texture
  }
];

export const PRAYERS: Prayer[] = [
  {
    id: '1',
    title: 'Sinnesrobönen',
    body: `Gud, ge mig sinnesro
att acceptera det jag inte kan förändra,
mod att förändra det jag kan,
och förstånd att inse skillnaden.

Låt mig leva en dag i taget,
ett ögonblick i sänder.
Låt mig ta emot svårigheter som en väg till frid.
Låt mig, liksom Jesus, ta denna syndiga värld som den är,
inte som jag skulle önska att den vore.

Låt mig lita på att du gör allting rätt
om jag överlåter mig till din vilja.
Så att jag kan bli rimligt lycklig i detta liv
och fullkomligt lycklig tillsammans med dig i evigheten.
Amen.`,
    categories: ['Dagliga böner', 'Bön vid oro'],
    tags: ['Klassisk', 'Trygghet'],
    createdAt: '2023-02-10',
    featured: true,
    tracks: [
      { id: 't1', title: 'Stillhet (Piano)', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: 't2', title: 'Regnljud', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=600&auto=format&fit=crop' // Calming water/stones
  },
  {
    id: '2',
    title: 'Aftonbön',
    body: `Gud, tack för denna dag som gått.
Tack för allt jag fått uppleva, både glädje och utmaningar.
Förlåt mig där jag brustit i kärlek till dig och min nästa.
Jag lämnar nu allt i dina händer.
Bevara mig och mina kära under natten.
Låt mig vila i din frid.
I Jesu namn, Amen.`,
    categories: ['Dagliga böner', 'Tyst stund'],
    tags: ['Kväll', 'Vila'],
    createdAt: '2023-09-01',
    tracks: [],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop' // Sunset/Calm
  },
  {
    id: '3',
    title: 'Bön vid ångest',
    body: `Herre, mitt hjärta är oroligt.
Tankarna snurrar och jag finner inget fäste.
Du har sagt att du är min herde och att mig intet skall fattas.
Hjälp mig att andas in din nåd.
Hjälp mig att släppa taget om det jag inte kan kontrollera.
Du är större än min oro.
Du är här, just nu.
Jag vilar i dig. Amen.`,
    categories: ['Bön vid oro', 'Andningsbön'],
    tags: ['Psykisk hälsa', 'Tröst'],
    createdAt: '2023-11-05',
    tracks: [
       { id: 't3', title: 'Lugnande atmosfär', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=600&auto=format&fit=crop' // Abstract/Light
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Vad innebär det att tro?',
    body: `Att tro handlar inte bara om att hålla vissa påståenden för sanna. Det handlar om en relation.

### En levande relation
När vi talar om tro i kristen bemärkelse, talar vi om tillit. Som ett barn litar på sin förälder, är vi inbjudna att lita på Gud. Det är en vandring där vi dag för dag lär oss att känna igen Guds röst.

### Tvivel är en del av tron
Många tror att tvivel är motsatsen till tro, men ofta är tvivel en del av trons växt. Genom att våga ställa de svåra frågorna kan vår tro fördjupas och mogna. Gud är inte rädd för dina frågor.

### Gemenskap
Tron är heller inte något vi bär ensamma. Vi är skapade för gemenskap, att vara en del av en kropp. Kyrkan är inte en byggnad, utan vi människor tillsammans.`,
    categories: ['Evangeliet', 'Livet med Gud'],
    tags: ['Grunder', 'Intro'],
    createdAt: '2023-10-12',
    featured: true,
    pinned: true,
    mainImageUrl: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=600&auto=format&fit=crop' // Open book/Light
  },
  {
    id: '2',
    title: 'Att hitta vila i en stressig värld',
    body: `Vi lever i ett samhälle som ständigt kräver vår uppmärksamhet. Prestation, sociala medier och karriär kan lätt bli avgudar som stjäl vår frid.

Jesus säger: "Kom till mig, alla ni som arbetar och bär på tunga bördor, så ska jag ge er vila." (Matt 11:28).

Detta är inte en uppmaning till passivitet, utan till en inre hållning. Att vila i Gud är att veta att vårt värde inte ligger i vad vi gör, utan i vem vi är – Guds älskade barn.`,
    categories: ['Livet med Gud', 'Hopp'],
    tags: ['Stress', 'Vila'],
    createdAt: '2023-12-01',
    mainImageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=600&auto=format&fit=crop' // Coffee/Relax
  },
  {
    id: '3',
    title: 'Vem är Jesus?',
    body: `Historiskt sett är Jesus från Nasaret en person som faktiskt levt. Men vem var han egentligen – en vis lärare, en profet, eller något mycket större?

Jesus från Nasaret är mer än en religiös figur. Han är en historisk person, en världsomvälvande gestalt – och, enligt Bibeln, själva Gud som blev människa. Men vem är han egentligen, och varför spelar det någon roll idag?

## En verklig person i historien

Det finns få historiska personer från antiken som är lika väldokumenterade som Jesus. Utöver de fyra evangelierna – som i sig är trovärdiga antika källor – nämns Jesus också av historiker som Josefus, Tacitus och Plinius den yngre. Det råder bred vetenskaplig konsensus om att Jesus levde, predikade, korsfästes och att hans efterföljare från allra första början vittnade om att han uppstått från de döda.

Men även om Jesus är historiskt trovärdig – är det övernaturliga trovärdigt?

## Vetenskapen närmar sig mysteriet

Många antar att vetenskapen och tron står i konflikt. Men verkligheten är mer nyanserad. Ju mer vi utforskar universum, desto mer mysterium stöter vi på. Kvantfysikens värld bryter mot våra vardagliga förväntningar: partiklar kan vara på två platser samtidigt, påverka varandra över enorma avstånd, och uppföra sig både som vågor och partiklar beroende på om någon observerar dem.

Vi lever i en värld där tid, rum och materia inte är så "solida" som vi trodde. Det som en gång avfärdades som övernaturligt – som tanken att en Gud kan träda in i tiden och bli människa – framstår i dag som filosofiskt möjligt och vetenskapligt mindre främmande än tidigare.

## Vem sade Jesus att han var?

Jesus sade inte bara att vi skulle älska våra fiender eller vända andra kinden till. Han sade också radikala saker som:

> ”Jag är vägen, sanningen och livet. Ingen kommer till Fadern utom genom mig” (Johannes 14:6)

och

> ”Jag och Fadern är ett” (Johannes 10:30)

Han påstod inte bara att han kände Gud – utan att han var Gud. Och hans liv, död och uppståndelse utgör kärnan i kristendomen. Om uppståndelsen är sann, så bevisar den hans anspråk. Om den inte är det, är hela tron tom.

## Varför du behöver Jesus – särskilt i Sverige

I ett sekulärt Sverige där Gud ofta förpassats till historiens skräphög, står många ändå kvar med tomheten. Vi har frihet, teknologi och trygghet – men också ensamhet, ångest och en längtan efter mening.

Jesus erbjuder något unikt:
* Inte bara en livsfilosofi, utan förlåtelse.
* Inte bara inre frid, utan evigt liv.
* Inte bara kärlek, utan sanning.

Han möter dig där du är – med öppna armar, inte med krav.
Han bjuder in dig till att lära känna honom, inte bara som en symbol, utan som en levande Frälsare.

## Avslutande bön

> Jesus, om du är den du säger att du är – visa dig för mig. Jag är öppen. Hjälp mig tro, även när jag tvivlar. Amen.`,
    categories: ['Evangeliet', 'Identitet i Kristus'],
    tags: ['Teologi', 'Jesus', 'Vem är Jesus-serien'],
    createdAt: '2025-12-01',
    featured: false,
    mainImageUrl: VEM_AR_JESUS_IMAGE
  },
  {
  id: '4',
  title: 'Bibeln: myt eller tillförlitlig källa?',
  body: `**Vi ser Bibeln överallt – på hotellrum, i högtider, på sociala medier. Men kan man verkligen lita på den? Är den historiskt trovärdig, eller bara religiösa legender? Här är vad vi faktiskt vet.**

---

### Vad menar vi med ”trovärdig”?

Att något är trovärdigt betyder inte att det måste bevisas i ett laboratorium. Det betyder att det står pall för granskning.

Vi tror på massor av saker i vardagen utan att själva kunna testa dem i mikroskop. Som historia, relationer, värderingar – eller ögonvittnesskildringar. Därför är det rimligt att fråga: **Håller Bibeln, om vi tar den på allvar som ett historiskt dokument?**

---

### En av världens bäst bevarade antika texter

Bibeln är inte en bok. Den är **66 böcker, skrivna av över 40 författare** under ungefär 1500 år, på tre kontinenter – men med en sammanhängande berättelse.

Nya testamentet har **över 5 800 bevarade grekiska handskrifter**, plus tusentals översättningar. Det är mer än något annat från antiken. De är dessutom nära i tid till originalen – vilket gör att vi **kan veta med mycket hög precision vad som skrevs från början**.

Till skillnad från viskleken har Bibeln bevarats med extrem noggrannhet.

---

### Arkeologin backar upp detaljerna

Bibeln beskriver platser, folk och händelser – och gång på gång har arkeologin bekräftat att dessa faktiskt existerat:

- Pontius Pilatus – bekräftad genom inskription i Caesarea.
- Davids dynasti – omnämnd i Tel Dan-stelen.
- Babyloniska rikets fall – återges i flera oberoende källor.
- Jerusalem och tempelområdet – stämmer med arkeologiska fynd.

Det betyder inte att varje berättelse kan bevisas. Men det **visar att Bibeln är djupare rotad i historien än många tror**.

---

### Den känns för äkta för att vara påhitt

Om du hittar på en religion – skriver du då in att dina ledare tvivlade, svek sin vän, och att kvinnor (som då inte ansågs trovärdiga vittnen) var de första som såg uppståndelsen?

Förmodligen inte.

Bibeln är ärlig. Den är inte rädd för komplexitet. Och det gör den – märkligt nog – mer trovärdig.

---

### Så… är det bara en religiös bok?

Nej, det är mycket mer.

Bibeln är **historiskt stark, textkritiskt välbevarad, arkeologiskt förankrad och litterärt komplex**. Men framför allt: den säger att det finns en Gud som talar – genom historia, poesi, lag, brev… och till sist genom en person: Jesus.

Det är där allting ställs på sin spets. För om Jesus är den Bibeln säger att han är – då är det här inte bara gamla texter. Då är det **en röst som fortfarande talar**.

---

### Vad betyder det för dig?

Du behöver inte blint tro. Men du får gärna undersöka. Börja läsa själv. Prata med någon som läst. Våga vara nyfiken.

Bibeln säger:

> ”Den som söker, han finner” (Matteus 7:8).

---

### En enkel bön för klarhet

*Gud, om du finns – hjälp mig att förstå. Ge mig mod att se det jag kanske missat. Visa mig inte bara enkla svar, utan sanningen, även när den är större än jag kan greppa. Hjälp mig att våga utforska. Amen.*`,
  categories: ['Evangeliet', 'Bibeln'],
  tags: ['Teologi', 'Bibeln', 'Vem är Jesus-serien'],
  createdAt: '2025-12-01',
  featured: false,
  mainImageUrl: BIBELN_KALLA_IMAGE
},
  
];

export const VERSES: BibleVerse[] = [
  {
    id: '1',
    reference: 'Johannes 3:16',
    text: 'Så älskade Gud världen att han gav den sin ende son, för att de som tror på honom inte skall gå under utan ha evigt liv.',
    isDailyWord: true
  },
  {
    id: '2',
    reference: 'Psaltaren 23:1',
    text: 'Herren är min herde, mig skall intet fattas.'
  },
  {
    id: '3',
    reference: 'Filipperbrevet 4:6-7',
    text: 'Gör er inga bekymmer, utan när ni åkallar och ber, tacka då Gud och låt honom få veta alla era önskningar. Då skall Guds frid, som är mera värd än allt vi tänker, ge era hjärtan och era tankar skydd i Kristus Jesus.'
  },
  {
    id: '4',
    reference: 'Matteusevangeliet 11:28',
    text: 'Kom till mig, alla ni som arbetar och bär på tunga bördor, så skall jag ge er vila.'
  },
  {
    id: '5',
    reference: 'Jeremia 29:11',
    text: 'Jag vet vilka tankar jag har för er, säger Herren, nämligen fridens tankar och inte ofärdens för att ge er en framtid och ett hopp.'
  }
];
