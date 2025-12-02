
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
    createdAt: '2023-01-01T08:30:00Z',
    youtubeUrl: 'https://www.youtube.com/embed/cX932ceIRKQ?si=0HoywA4cr-pCL8Sz', // Placeholder
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop' // Nature/Forest
  },
  {
    id: '2',
    title: 'Tio tusen skäl/Lova Herren min själ',
    lyrics: `1. Vid dagens början när solen stiger,
ger jag min sång till Dig min Gud.
Vad än som mig sker och vad än som ligger framför,
låt sången ljuda stark vid dagens slut.

Lova Herren min själ, o min själ
tillbe den Helige.
Sjung som aldrig förut, o min själ.
Jag tillber den Helige.

2. Så rik på nåd och så sen till vrede.
Så mild och god är Du Gud mot mig.
Om all Din kärlek vill jag sjunga evigt.
Du ger mig tusen skäl att prisa Dig.

Lova Herren min själ, o min själ
tillbe den Helige.
Sjung som aldrig förut, o min själ.
Jag tillber den Helige.

3. Och på den dag då min kraft flyr undan,
när slutet nalkas för mig en gång.
Då stiger mitt lov och min själ ska sjunga,
i tusen år och evigheten lång.`,
    categories: ['Lovsång', 'Modern'],
    tags: ['Matt Redman', 'Översättning'],
    createdAt: '2023-05-15T12:00:00Z',
    youtubeUrl: 'https://www.youtube.com/embed/1_z-NSe5ohQ?si=PlEUm7RtSvOWJhdF',
    imageUrl: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?q=80&w=600&auto=format&fit=crop' // Sunrise/Sky
  },
  {
    id: '3',
    title: 'Jag vill ge dig o Herre min lovsång',
    lyrics: `[Vers 1]
Jag vill ge dig o Herre min lovsång
Jag vill tacka med skönaste ord
för din kärlek och nåd som är gränslös
Jag vill tacka för allt gott Du gjort

[Refräng]
Jag vill göra mitt liv till en lovsång till dig
Där var ton skall en hyllning till dig bära
och i dagar av glädje och dagar av sorg
Vill jag leva var dag
till din ära

[Vers 2]
Ingen annan är värld att besjungas
endast Du, Herre äger min sång
och i himmelens gyllene salar
skall jag prisa dig evighet lång

[Vers 3]
Och om sången nån gång skulle tystna
eller störas av oro och strid
herre öppna på nytt mina ögon
så jag ser att hos dig är min frid`,
    categories: ['Lovsång', 'Ungdomsmöte'],
    tags: ['Hillsong', 'Tillit'],
    createdAt: '2023-08-20T18:15:00Z',
    featured: true,
    pinned: true,
    youtubeUrl: 'https://www.youtube.com/embed/dwDlpO7TTwI?si=G_06CzeVzWn5g_AE" title="YouTube video player',
    imageUrl: 'https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?q=80&w=600&auto=format&fit=crop' // Stone/Texture
  },
  {
    id: '4',
    title: 'Mer helighet giv mig',
    lyrics: `1. Mer helighet giv mig,
mer mildhet, o Gud,
mer sorg över synden,
mer lust för ditt bud,
mer tjänande kärlek,
som ej söker lön,
mer tro på min Jesus,
mer kraft i min bön.

2. Mer tacksamhet giv mig,
mer saktmodigt sinn´,
mer iver att söka
din ära, ej min,
mer smärta med Jesus,
mer fröjd av hans tröst,
mer styrka att lida,
mer frid vid hans bröst.

3. Mer tålamod giv mig,
mer salighetshopp
att frigjord från världen
mot målet se opp.
Mer uthållig gör mig,
på frukter mer rik,
mer redo för himlen,
mer, Jesus, dig lik.`,
    categories: ['Hymn', 'Andakt'],
    tags: ['Helgelse', 'Kristuslikhet', 'Hängivenhet'],
    createdAt: '2023-10-10T09:00:00Z',
    youtubeUrl: 'https://www.youtube.com/embed/J3Q08XIpG-o?si=q2DqKj4u0ZgTOkz1',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Gemenskap – Jesus, namnet över alla namn',
    lyrics: `Jesus namnet över alla namn
Jesus i Honom räddningen jag fann
Jesus namnet över alla namn
Jesus i Honom räddningen jag fann

Prisa Jesus prisa Jesus namnet Jesus
Lyft upp Hans namn lyft upp Hans namn
Igen och igen

Jesus varje knä ska böja sig
Jesus tronar i all evighet
Jesus världens ljus nationers hopp
Jesus hans rättfärdighet vi fått

Prisa Jesus prisa Jesus namnet Jesus
Lyft upp Hans namn lyft upp Hans namn
Prisa Jesus prisa Jesus namnet Jesus
Lyft upp Hans namn lyft upp Hans namn
Igen och igen

Värdig värdig värdig är Han som har all makt
Värdig värdig värdig är Han som kommer igen`,
    categories: ['Lovsång', 'Andakt'],
    tags: ['Jesus', 'Tillbedjan', 'Gemenskap'],
    createdAt: '2024-05-20T14:00:00Z',
    youtubeUrl: 'https://www.youtube.com/embed/yHwBwt4rYyQ?si=VC1s8rexMwad64t0',
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Var Mig Nådig Gud / Rena Mig Med Elden Från Din Ande / Jag Vill Bli Mer Lik Dig / O Det Dyra Jesu Blod',
    lyrics: `Var mig nådig, Gud
Var mig nådig, Gud
Tvätta mig ren
Gör mitt hjärta mjukt
Var mig nådig, Gud

Var mig nådig, Gud
Var mig nådig, Gud
Tvätta mig ren
Gör mitt hjärta mjukt
Var mig nådig, Gud

Var mig nådig, Gud
Var mig nådig, Gud
Tvätta mig ren
Gör mitt hjärta mjukt
Var mig nådig, Gud

Rena mig med elden från Din Ande
Rena mig och gör mig mer lik Dig
Låt mig dö från allt som är mitt eget i mitt liv
Använd mig, Gud som du vill

Rena mig med elden från Din Ande
Rena mig och gör mig mer lik Dig
Låt mig dö från allt som är mitt eget i mitt liv
Använd mig, Gud som du vill

Rena mig med elden från Din Ande
Rena mig och gör mig mer lik Dig
Låt mig dö från allt som är mitt eget i mitt liv
Använd mig, Gud som du vill

Använd mig, Gud som du vill
Använd mig, Gud som du vill

Jag, jag vill bli mer lik Dig
Jesus, jag
Jag vill bli mer lik Dig
Jag vill va ett redskap i Din hand
Jag, jag vill bli mer lik Dig

Jag, jag vill bli mer lik Dig
Jesus, jag
Jag vill bli mer lik Dig
Jag vill va ett redskap i Din hand
Jag, jag vill bli mer lik Dig

Jag, jag vill bli mer lik Dig
Jesus, jag
Jag vill bli mer lik Dig
Jag vill va ett redskap i Din hand
Jag, jag vill bli mer lik Dig

Håll det dyra Jesu blod
Håll det dyra Jesu blod
Håll det dyra Jesu blod
Som tvår mig vit som snö

Håll det dyra Jesu blod
Håll det dyra Jesu blod
Håll det dyra Jesu blod
Som tvår mig vit som snö

Håll det dyra Jesu blod
Håll det dyra Jesu blod
Håll det dyra Jesu blod
Som tvår mig vit som snö

Håll det dyra Jesu blod
Håll det dyra Jesu blod
Håll det dyra Jesu blod
Som tvår mig vit som snö

Håll det dyra Jesu blod
Håll det dyra Jesu blod
Håll det dyra Jesu blod
Som tvår mig vit som snö`,
    categories: ['Lovsång', 'Andakt'],
    tags: ['Omvändelse', 'Helgelse', 'Jesu blod'],
    createdAt: '2024-07-15T10:30:00Z',
    youtubeUrl: 'https://www.youtube.com/embed/zFD3zqxWWTQ?si=ac-ITTeYVbrznWur',
    imageUrl: 'https://images.unsplash.com/photo-1495985835785-2c08f62c1e1c?q=80&w=600&auto=format&fit=crop'
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
    createdAt: '2023-02-10T07:45:00Z',
    featured: true,
    tracks: [
      { id: 't1', title: 'Stillhet (Piano)', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { id: 't2', title: 'Regnljud', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop' // Calm lake/morning mist
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
    createdAt: '2023-09-01T21:10:00Z',
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
    createdAt: '2023-11-05T10:05:00Z',
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
    body: `Vi hör ofta ordet ”tro” – i kyrkan, i skolan, på sociala medier. Men vad betyder det egentligen att tro? Är det bara en känsla? En idé? Eller är det något som faktiskt kan förändra hur vi tänker, känner och lever?

## Tro påverkar oss – på riktigt

Psykologer vet att vad vi tror på formar hur vi mår. Tro – även när den inte är religiös – har verklig effekt. Den kan ge hopp, minska stress och till och med påverka kroppen. Ett av de tydligaste exemplen är placeboeffekten.

### Vad är placebo?

Placebo betyder att man får något som ser ut som medicin – men som inte innehåller något verksamt ämne. Ändå mår många bättre. Varför? För att de tror att det hjälper. Hjärnan reagerar. Kroppen svarar. Tro gör något.

Forskning har visat att patienter som tror att de får behandling ofta upplever förbättring, även när de inte får ”riktig” medicin. Det är som om kroppen lyssnar på tanken. Så om tro kan påverka hur vi upplever smärta, rädsla och läkning – då är tro något mer än bara en idé. Det är en brygga mellan det osynliga och det verkliga.

## Finns det något att tro på?

Många i dag tror på vetenskap – vilket är bra. Men vetenskap handlar om att söka sanning, inte att redan veta allt. Och det är faktiskt väldigt få saker i livet vi kan bevisa helt. Du kan inte bevisa att dina vänner älskar dig. Eller att din framtid blir bra. Men du kan leva som om det är sant, och det förändrar hur du möter världen.

På samma sätt kan tron på Gud vara något djupt verkligt – även om du inte kan mäta det i ett labb. Det är en tro på något större än dig själv, som bär genom livet och ger riktning.

## Vad gör det med livet?

Att tro på Gud är inte att blunda för verkligheten. Det är att våga tro att det finns mer än det vi kan se. Det påverkar hur vi ser på andra människor, på oss själva, på framtiden. Men det räcker inte att bara ha en tro i tanken. För att den ska betyda något, behöver du leva ut den.

Om du säger att du tror på sanning – men ändå ljuger.

Om du säger att du tror på kärlek – men ändå hatar.

Då är tron tom. Tron behöver handling. Den behöver få forma dina val.

## Vad gör man med tvivel?

Tvivla är inte samma sak som att sluta tro. Det är ofta en del av att tro på riktigt. Om du aldrig ifrågasätter något, har du kanske inte tänkt så djupt. Men om du ställer frågor – för att du verkligen vill veta – då är det ett tecken på att du söker sanningen. Och kristen tro är inte rädd för sanning. Faktum är: den bygger på den.

## Tro och vetenskap – inte fiender

Du måste inte välja mellan Gud och vetenskap. De flesta av världens första vetenskapsmän – Newton, Kepler, Pascal – trodde på Gud. Inte trots vetenskapen, utan på grund av den. För om universum har en struktur, skönhet och lagbundenhet – är det då så orimligt att tro att det också finns en Skapare? Att tro på Gud kan vara den djupaste sortens sanningstörst.

## En tro som lever – tillsammans

Du är inte ensam. Tron växer ofta bäst i gemenskap med andra. Att få prata, tvivla, be, fråga – tillsammans med andra som söker – kan göra all skillnad. Kyrkan är inte en plats för perfekta människor. Det är en plats för sökande. Och i centrum av den kristna tron finns inte bara en idé – utan en person.

## Tron på Jesus

Kristendomen bygger på en historisk person: Jesus från Nasaret. En verklig människa – som levde, dog och (enligt vittnesmål) uppstod. Men Bibeln säger också att han var mer än människa. Han var – och är – Gud själv, som kom till jorden. Och hans ord har förändrat allt.

Jesus lärde att du ska älska dina fiender. Att du har ett evigt värde. Att sanning och nåd hör ihop. Att den störste är den som tjänar andra. Han vände världen upp och ner – och det gör han fortfarande.

## En utmaning till dig

Det räcker inte att bara läsa om tro. Du behöver prova den.

- Läs vad Jesus sa.
- Testa att leva som om det är sant.
- Vänd andra kinden till.
- Be för någon du ogillar.
- Ge till någon som inte kan ge tillbaka.

Kanske upptäcker du att tron inte bara är något du har – utan något som bär dig.`,
    categories: ['Evangeliet', 'Livet med Gud', 'Teologi'],
    tags: ['Tro', 'Vetenskap', 'Tvivel', 'Gemenskap', 'Jesus'],
    createdAt: '2024-04-05T13:30:00Z',
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
    createdAt: '2023-12-01T09:00:00Z',
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
    createdAt: '2025-12-15T08:00:00Z',
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
  createdAt: '2025-12-15T15:30:00Z',
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
