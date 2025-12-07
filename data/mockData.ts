
import { Song, Prayer, Article, BibleVerse, Blessing } from '../types';

const IMAGE_BASE_PATH = (() => {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
})();

const VEM_AR_JESUS_IMAGE = `${IMAGE_BASE_PATH}images/vem-ar-jesus-v2.png`;
const BIBELN_KALLA_IMAGE = `${IMAGE_BASE_PATH}images/bibeln-myt-eller-tillforlitlig-kalla.png`;
const TALA_VALSIGNELSER_STA_FAST_IMAGE = `${IMAGE_BASE_PATH}images/tala-valsignelser-sta-fast.png`;

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
    imageUrl: 'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=600&auto=format&fit=crop'
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
      {
        id: 't1',
        title: 'Oceans (instrumental)',
        audioUrl: 'https://www.youtube.com/embed/H9U9E3c0Qzg?si=2gp01Nt0Lb1U7D09'
      },
      {
        id: 't2',
        title: 'You Say',
        audioUrl: 'https://www.youtube.com/embed/HqpNGYbcy3U?si=VMGN31IzXJ2GNtO4'
      },
      {
        id: 't3',
        title: 'YHWH will manifest Himself',
        audioUrl: 'https://www.youtube.com/embed/UZO0gOLUHJU?si=ohMnHT-kF6SlCcLV'
      }
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
      { id: 't1', title: 'Oceans', audioUrl: 'https://www.youtube.com/embed/eLqTZ07ja7g?si=J6s9zt6y_5G5OVdl' },
      { id: 't2', title: 'You Say', audioUrl: 'https://www.youtube.com/embed/ihrUIPfvTh8?si=S2rT4hnD32bfBxgn' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=600&auto=format&fit=crop' // Abstract/Light
  },
  {
    id: '4',
    title: 'Bön att tala välsignelser över ditt liv',
    body: `Käre Herre,
 jag kommer inför dig med ett hjärta fyllt av tacksamhet och lovsång.
 Jag prisar ditt heliga namn,
 för du är Skaparen av allt.

Du talade universum till existens  
 och du skapade mig till din avbild.  
 Jag är förundrad över din makt,  
 och jag tackar dig för allt du har gjort för mig.

Jag ber att mina ord från och med i dag  
 ska vara fyllda av välsignelse och godhet.  
 Låt mig tala liv in i varje situation,  
 se det goda i andra  
 och sprida kärlek och vänlighet vart jag än går.

Hjälp mig att använda mina ord för att lyfta andra,  
 ge hopp och bringa helande,  
 och låta ditt ljus lysa genom mig.

Jag talar ditt välbehag över mitt liv,  
 för jag vet att du är en Gud av överflöd och välsignelse.  
Jag bekänner framgång och god hälsa över min familj,  
 och jag litar på ditt beskydd.

Jag talar positivitet över min arbetsplats  
 och tror att du har stora saker för mig framöver.

Herre, ta bort allt negativt tal från min mun.  
 Hjälp mig att tänka före jag talar,  
 och att använda min röst till det som är gott.  
Låt mina ord spegla din kärlek och nåd.

Jag lyfter upp denna bön till dig i Jesu namn  
 och tackar dig för din trofasthet  
 och alla de välsignelser du gett mig.  
 Jag ger dig all ära.  
Amen.`,
    categories: ['Dagliga böner', 'Välsignelse'],
    tags: ['Välsignelse', 'Tacksamhet', 'Ordets kraft'],
    createdAt: '2024-12-20T09:00:00Z',
    featured: false,
    tracks: [
      { id: 't1', title: 'Oceans (instrumental)', audioUrl: 'https://www.youtube.com/embed/eLqTZ07ja7g?si=J6s9zt6y_5G5OVdl' },
      { id: 't2', title: 'You Say', audioUrl: 'https://www.youtube.com/embed/ihrUIPfvTh8?si=S2rT4hnD32bfBxgn' },
      { id: 't3', title: 'Baptize Me With Fire', audioUrl: 'https://www.youtube.com/embed/DjVSEFIc_yA?si=K365xKQh9XO1MKPS' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=600&auto=format&fit=crop' // Light rays/hopeful
  },
  {
    id: '5',
    title: 'Mitt hjärta i stormen',
    subtitle: 'En omskriven och förenklad version av Psalm 31 (SFB15), skapad för att hjälpa dig att be när natten känns tung och tankarna rusar.',
    body: `2  
Till dig, Herre, kommer jag för skydd.  
Låt mig aldrig hamna i skam.  
Rädda mig med din godhet och sanning.  

3  
Lyssna på mig, Herre.  
Kom snabbt och hjälp mig!  
Var min trygga plats,  
mitt starka försvar.  

4  
För du är min klippa och min trygghet.  
Led mig och visa vägen  
för ditt namns skull.  

5  
Befria mig ur fällorna  
som andra lagt för mig,  
för du är min beskyddare.  

6  
I dina händer lämnar jag mitt liv.  
Du har köpt mig fri, Herre,  
du trofaste Gud.  

7  
Jag avskyr det som är tomt och falskt,  
jag litar på Herren.  

8  
Jag vill glädjas  
över din kärlek.  
Du ser min smärta  
och du vet hur jag mår när allt är svårt.  

9  
Du låter mig inte falla  
i fienders händer.  
Du ger mig plats att andas.  

10  
Var nära mig, Herre, jag är i nöd.  
Sorgen sliter på mig,  
på insidan och utsidan.  

11  
Mitt liv känns fullt av sorg,  
mina år av suckar.  
Jag tappar kraft  
på grund av min synd,  
min kropp orkar inte mer.  

12  
På grund av mina fiender  
har jag blivit en skam för människor.  
De som känner mig blir rädda  
och undviker mig.  

13  
Det är som om jag är bortglömd,  
som om jag inte längre finns.  
Som ett trasigt kärl  
man slängt bort.  

14  
Jag hör vad andra viskar,  
oro överallt.  
De går ihop mot mig  
och planerar ont.  

15  
Men jag litar på dig, Herre.  
Jag säger: ”Du är min Gud.”  

16  
Min tid är i dina händer.  
Rädda mig från dem som vill mig illa.  

17  
Låt ditt ansikte lysa över mig.  
Rädda mig med din kärlek.  

18  
Herre, låt mig inte stå där och skämmas  
när jag ropar till dig.  
Låt de som gör det onda stå för sina handlingar  
och tystna.  

19  
Tysta lögnarnas ord,  
de som talar stolta och hårda ord  
mot den som vill leva rätt.  

20  
Så stor är din godhet,  
den du sparar åt dem som älskar dig  
och visar inför människor  
mot dem som flyr till dig!  

21  
Du skyddar dem nära dig  
från människors intriger.  
Du tar dem i din trygghet  
bort från elaka ord.  

22  
Herren är värd att prisas!  
Han har visat mig sin kärlek  
även när allt känns som en stad i kring och under attack.  

23  
Jag säger i min ångest:  
”Jag är avskuren från dina ögon.”  
Men du hörde min bön om nåd  
när jag ropade till dig.  

24  
Älska Herren,  
alla ni som följer honom!  
Herren tar hand om dem som är honom trogna,  
men den som är högmodig  
får ta konsekvenserna.  

25  
Var starka och modiga i era hjärtan,  
alla ni som hoppas på Herren!`,
    categories: ['02–04 på natten', 'I stormen', 'Motarbetad och bortglömd'],
    tags: ['Nattbön', 'Storm', 'Psalm 31'],
    createdAt: '2025-02-15T02:30:00Z',
    tracks: [
      { id: 't1', title: 'Mitt hjärta i stormen – reflektion', audioUrl: 'https://www.youtube.com/embed/oQMJBz5bcbg?si=mGSd6pPQTL4sQhDB' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1501975558162-0be7b8c5d2ff?q=80&w=1200&auto=format&fit=crop'
  }
];

export const BLESSINGS: Blessing[] = [
  {
    id: 'b1',
    title: 'Stå fast med Guds styrka',
    body: `### **Syfte**
Att stärka dig mentalt och andligt så du kan stå fast, hitta inre stabilitet och återta fokus och frid mitt i press och stress.

### **Instruktion**
Läs texten nedan noga. Den har kraft att bygga upp dig och ge dig styrka.
Låt orden forma ditt hjärta och påminna dig om vem Gud är — och vem du är i Kristus.

---

### **1. Starta med att rusta dig med Bibelns mentala ”svärd”**
*Läs dessa verser långsamt och låt dem sjunka in i dig:*

**Psalm 144:1–2**  
*”Lovad vare Herren, min klippa, som lär mina händer att strida och mina armar att kämpa.
Gud är min nåd och min borg, mitt fasta värn och min räddare, min sköld; honom tar jag min tillflykt till.”*

**Jesaja 41:10**  
*”Frukta inte, för jag är med dig, var inte förskräckt, för jag är din Gud.
Jag styrker dig, jag hjälper dig, jag uppehåller dig med min rättfärdighets högra hand.”*

**Efesierbrevet 1:19–20**  
*”Vad mäktig hans styrka är för oss som tror — samma kraft som han med sin makt lät verka i Kristus när han uppväckte honom från
de döda och satte honom på sin högra sida i himlen.”*

---

### **2. Din andliga verklighet**
**Läs detta högt för dig själv:**

* Jag är buren av Guds klippa som aldrig vacklar.
* Jag är tränad av Herren att stå i livets press.
* Jag är trygg i Kristus, även när känslorna stormar.
* Jag är älskad, bevarad och rustad av Gud.
* Jag är en som går framåt — inte tillbaka.

---

### **3. Visualisera – se det framför dig**
Föreställ dig att du går genom en vanlig dag: skola, jobb, gruppchattar, tunnelbanans brus.
Trycket i bröstet, oron, stressen och modlösheten vill komma krypande.

Du stannar.  
Under dina fötter känner du något fast, orubbligt och tryggt.

**Det är klippan.**  
**Det är Gud.**

Bredvid dig står Kristus, han som vandrar med dig — *”Jag är med er alla dagar till tidens slut” (Matt 28:20).*  
Han lägger sin hand på din axel och säger:  
*”Jag tränar ditt inre. Jag ger dig frid mitt i allt.”*

Ljuset från honom fyller dig och ger dig ro.  
Du vet att du står tryggt.  
Du vet att du inte går ensam.

---

### **4. Omprogrammera dig och förändra din situation**
**Läs med beslutsamhet — detta är Guds välsignelse över ditt liv:**

Herre, min klippa, jag talar ut att min styrka kommer från dig.  
Du tränar mitt hjärta att stå fast, mina tankar att vila i ro och min själ att hitta fokus och mod genom din kraft.

Samma kraft som uppväckte dig från de döda är verksam i mig och ger mig kraft att fortsätta.

När oro knackar — du är min sköld.  
När stress pressar — du är min borg.  
När jag är svag — du är min styrka.

Jesus, min Herre, låt ditt ord vara mitt svärd, din närvaro min trygghet och ditt hjärta min vila.  
Du är min tillflykt, min styrka och min seger.

Du ska överraska mig med dina välsignelser.  
Jag vandrar i dina välsignelser.

Jag behöver inte kämpa som andra, för du tar min kamp.  
Du tränar mina armar till hårt arbete, men det är du som låter allt mitt arbete få gott resultat.

Havet reser sig framför mig och fienden jagar min själ, men du stoppar fienden och skyddar mig.  
Du klyver havet mitt itu och låter mig passera igenom i trygghet.

Du är mitt enda hopp.  
Du är min kraft.  
Jag ska lita på dig.  
Du är min styrka.  
Du är mitt allt.

Jag är redo, Herre.  
Jag är redo för dagen nu, jag är redo för natten nu.  
Jag är redo att fortsätta vandra, för min själ har fått se dig.  
Amen.

---

### **5. Bygg dig själv – tala liv till din själ**
*Läs dessa högt för dig själv tills du tror dem och kan vila i att de är sanna för dig:*

* Herren tränar mitt hjärta att stå fast och min själ att vila i hans frid.
* Guds kraft verkar i mig — samma kraft som uppväckte Jesus från de döda.
* När oro knackar är Herren min sköld och mitt skydd.
* När stress pressar bär Gud mig och är min starka borg.
* Jesus är min tillflykt, min styrka och min seger — jag vilar i hans närvaro.
* Gud går före mig, tar min kamp och öppnar havet framför mig.
* Jag tillhör min Gud, han välsignar mig i Jesus och jag litar på hans godhet över mitt liv.

---

### **6. Slutbön**
Herre, tack för att du omsluter mig med din trofasthet.
Tack att du stärker mina tankar, lugnar mitt hjärta och leder mina steg — precis som du lovat.

När jag möter press — tala din sanning till mig.  
När jag möter oro — bär mig med din kraft.  
När jag möter förvirring — lys med ditt ljus och visa mig vägen.

Gör mitt hjärta stadigt i dig, du som är min klippa och min borg.  
Låt mitt inre formas av samma kraft som verkar i mig, den kraft som uppväckte Jesus från de döda.  
Låt min dag präglas av ditt ljus, din glädje och den seger du redan har gett mig.

Jag tillhör dig, Herre.  
Jag går i den styrka du tränar i mig, och i den frid du låter bo i mitt hjärta.  
Amen.

---`,
    categories: ['Kamp & befrielse', 'Inre styrka'],
    createdAt: '2025-12-20T09:00:00Z',
    featured: true,
    tracks: [
      {
        id: 'sta-fast-track-1',
        title: 'Instrumental bakgrund',
        youtubeUrl: 'https://www.youtube.com/embed/oQMJBz5bcbg?si=L3N3mB8KktYyxtR5'
      }
    ],
    imageUrl: TALA_VALSIGNELSER_STA_FAST_IMAGE
  },
  {
    id: 'b2',
    title: 'Välsignelse över familjen',
    body: `Jag talar Guds beskydd över mitt hem.
Herren är vår frid och vår styrka.
Må hans kärlek fylla varje rum,
och hans glädje vara vår gemensamma ton.

Vi får vila i att Gud håller sin hand över oss,
leder våra beslut och ger oss mod att älska varandra.

Jag tackar dig, Jesus, för att du är mitt ibland oss.`,
    categories: ['Familj', 'Trygghet'],
    tags: ['Beskydd', 'Hem'],
    createdAt: '2025-01-05T18:30:00Z',
    tracks: [
      { id: 't1', title: 'Quiet piano', audioUrl: 'https://www.youtube.com/embed/pPRdiutFEeA?si=1sK5DXPPEuiKe2CO' },
      { id: 't2', title: 'Soft strings', audioUrl: 'https://www.youtube.com/embed/2L9ggxl0CMw?si=suN0wbI_6t01GYOG' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1498496294664-6b32b228ab46?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'b3',
    title: 'Frimodighet och hopp',
    subtitle: 'När du behöver nytt mod att tala liv.',
    body: `Jag talar frimodighet över mig själv.
Gud har inte gett mig modlöshetens ande,
utan kraft, kärlek och självkontroll.

Jag bekänner att jag är kallad att lysa,
att mina ord kan bära hopp och läkedom.
Helige Ande, fyll mina ord med nåd och sanning,
så att jag får styrka att tala välsignelse där jag går.

Jag väntar med tillit på vad Gud gör.`,
    categories: ['Frimodighet', 'Nytt kapitel'],
    tags: ['Hopp', 'Mod'],
    createdAt: '2025-01-10T12:15:00Z',
    tracks: [],
    imageUrl: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=600&auto=format&fit=crop'
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
    reference: 'Psaltaren 23:1',
    text: 'Herren är min herde, mig skall inget fattas.',
    reflection:
      'Du får vila i att du inte behöver bära allt själv. Gud leder dig steg för steg, även när du känner dig osäker. Låt honom vara din trygghet i dag.',
    isDailyWord: true
  },
  {
    id: '2',
    reference: 'Jesaja 41:10',
    text:
      'Frukta inte, ty jag är med dig. Se dig inte ängsligt om, ty jag är din Gud. Jag styrker dig och hjälper dig, jag stöder dig med min rättfärdighets högra hand.',
    reflection:
      'Du är inte ensam i det du står i just nu. Gud håller dig uppe när du känner dig svag. Lita på att han bär dig genom allt som känns för stort.'
  },
  {
    id: '3',
    reference: 'Matteusevangeliet 11:28',
    text: 'Kom till mig, alla ni som arbetar och står betunga, så skall jag ge er vila.',
    reflection:
      'Du behöver inte fortsätta kämpa i egen kraft. Låt Jesus ta del av det du bär på. Han vill ge dig en vila som når längre än sömn och ledighet.',
    isDailyWord: true
  },
  {
    id: '4',
    reference: 'Filipperbrevet 4:6–7',
    text:
      'Bekymra er inte för något, utan låt Gud i allt få veta era önskningar genom bön och åkallan med tacksägelse. Och Guds frid, som övergår allt förstånd, skall bevara era hjärtan och era tankar i Kristus Jesus.',
    reflection:
      'Du får lämna din oro till Gud, om och om igen. När du gör det öppnar du dörren för hans frid att fylla dig. Han vakar över dig, även när du inte märker det.'
  },
  {
    id: '5',
    reference: 'Psaltaren 46:2',
    text: 'Därför behöver vi inte frukta, även om jorden skakar och bergen störtar i havets hjärta.',
    reflection:
      'Du har en trygg plats att gå till när livet skakar. Gud är din fasta grund, även om allt omkring dig faller. Du kan luta dig mot honom i allt.'
  },
  {
    id: '6',
    reference: 'Jeremia 29:11',
    text: 'Ty jag vet vilka tankar jag har för er — det är fridens tankar och inte ofärdens — för att ge er en framtid och ett hopp.',
    reflection:
      'Du får tro att Gud har goda tankar för din framtid. Även när du inte ser vägen framför dig, är han redan där. Han leder dig mot hopp och helhet.'
  },
  {
    id: '7',
    reference: 'Johannes 14:27',
    text: 'Frid lämnar jag kvar åt er, min frid ger jag er. Inte ger jag er det som världen ger. Låt inte era hjärtan oroas och tappa inte modet.',
    reflection:
      'Du kan ta emot en frid som inte beror på omständigheter. Den kommer från Jesus själv. Låt hans ord lugna ditt hjärta i dag.'
  },
  {
    id: '8',
    reference: 'Romarbrevet 8:38–39',
    text:
      'Ty jag är övertygad om att varken död eller liv, änglar eller furstar eller makter eller något som skall ske, vare sig höjd eller djup eller någon annan skapad ting, skall kunna skilja oss från Guds kärlek i Kristus Jesus vår Herre.',
    reflection:
      'Du är älskad utan villkor. Ingenting du möter kan ta dig bort från den kärleken. Du får vila i att Gud håller fast vid dig varje dag.',
    isDailyWord: true
  },
  {
    id: '9',
    reference: 'Psaltaren 34:18',
    text: 'Herren är nära dem som har förkrossat hjärta, han räddar dem som har bedrövad ande.',
    reflection:
      'När du känner dig trasig, är Gud ännu närmare än du tror. Han ser dina tårar och din kamp. Låt honom trösta och läka det som gör ont.'
  },
  {
    id: '10',
    reference: 'Andra Korinthierbrevet 12:9',
    text: 'Men han sade till mig: ”Min nåd är allt du behöver, för kraften fullkomnas i svaghet.”',
    reflection:
      'Du behöver inte vara stark hela tiden. Gud verkar mitt i din svaghet och bär det du inte orkar. Du får vila i hans tillräcklighet.'
  },
  {
    id: '11',
    reference: 'Psaltaren 121:1–2',
    text: 'Jag lyfter mina ögon upp mot bergen — varifrån skall min hjälp komma? Min hjälp kommer från Herren, himlens och jordens skapare.',
    reflection:
      'Du kan lyfta blicken från det som tynger dig. Gud är din hjälp, inte dina egna ansträngningar. Han möter dig där du är och leder dig framåt.'
  },
  {
    id: '12',
    reference: 'Ordspråksboken 3:5–6',
    text: 'Förtrösta på Herren av hela ditt hjärta och förlita dig inte på ditt förstånd. Erkänn honom på alla dina vägar, så skall han göra dina stigar jämna.',
    reflection:
      'Du behöver inte förstå allt för att gå med Gud. När du lägger dina vägar i hans hand, leder han dig rätt. Låt honom visa dig nästa steg.'
  },
  {
    id: '13',
    reference: 'Psaltaren 91:4',
    text: 'Han skall täcka dig med sina fjädrar, under hans vingar finner du din tillflykt.',
    reflection:
      'Du får gömma dig hos Gud när livet känns farligt eller överväldigande. Han skyddar dig som en trygg famn. Vila där en stund i dag.'
  },
  {
    id: '14',
    reference: 'Efesierbrevet 2:10',
    text: 'Ty vi är hans skapelse, skapade i Kristus Jesus till goda gärningar, som Gud förberett åt oss, för att vi skall vandra i dem.',
    reflection:
      'Du är skapad med mening och värde. Gud har lagt ner något vackert i dig som ingen annan har. Du får gå i det han har förberett för dig.'
  },
  {
    id: '15',
    reference: 'Jesaja 40:31',
    text: 'Men de som hoppas på Herren får ny kraft, de flyger upp med vingar som örnar, de springer utan att mattas, de vandrar utan att bli trötta.',
    reflection:
      'När du känner dig slutkörd kan Gud fylla dig med ny styrka. Du får våga hoppas, även om det känns svårt. Han reser dig när du faller.'
  },
  {
    id: '16',
    reference: 'Psaltaren 139:5',
    text: 'Du omsluter mig på alla sidor och håller mig i din hand.',
    reflection:
      'Du är aldrig utanför Guds omsorg. Han har dig i sitt grepp, både när du sover och när du kämpar. Lita på att han vakar över dig.'
  },
  {
    id: '17',
    reference: 'Romarbrevet 15:13',
    text: 'Må hoppets Gud fylla er med all glädje och frid i tron, så att ni överflödar i hopp med hjälp av den helige Ande.',
    reflection:
      'Gud vill fylla dig med ett hopp som bär genom allt. Du behöver inte skapa det själv. Öppna ditt hjärta för hans glädje och frid i dag.'
  },
  {
    id: '18',
    reference: 'Johannesevangeliet 15:5',
    text: 'Jag är vinstocken, ni är grenarna. Den som blir kvar i mig och jag i honom bär mycket frukt, för utan mig kan ni ingenting göra.',
    reflection:
      'Du behöver inte prestera inför Gud. När du vilar i honom, flödar livet igenom dig. Låt honom vara din kraftkälla i allt du gör.'
  },
  {
    id: '19',
    reference: 'Klagovisorna 3:22–23',
    text: 'Herren stora trofasthet har inte tagit slut, hans barmhärtighet är inte slut. Den är ny varje morgon. Din trofasthet är stor.',
    reflection:
      'Hur gårdagen än såg ut, börjar Gud om med dig i dag. Du får ta emot hans nåd på nytt. Andas in hans barmhärtighet och börja om i frid.'
  },
  {
    id: '20',
    reference: 'Psaltaren 55:23',
    text: 'Kasta din börda på Herren, han skall uppehålla dig. Han skall aldrig tillåta den rättfärdige att vackla.',
    reflection:
      'Du behöver inte bära allt själv längre. Gud tar emot det du lägger i hans hand. Låt honom lyfta av dig det som tynger ditt hjärta just nu.'
  },
  {
    id: '21',
    reference: 'Jesaja 55:7',
    text: 'Den ogudaktige må överge sin väg och den orättfärdige sina tankar. Han må vända om till Herren, så skall han förbarma sig över honom.',
    reflection:
      'Du får alltid en väg tillbaka, oavsett hur din vandring sett ut. När du överger det som skadar dig och vänder dig mot Gud, möter han dig med ömhet och förlåtelse.'
  },
  {
    id: '22',
    reference: 'Jakobs brev 4:8',
    text: 'Närma er Gud, så skall han närma sig er. Gör era händer rena, ni syndare, och rena era hjärtan, ni tvehågsna.',
    reflection:
      'Du får komma nära Gud precis som du är. När du gör det, renar han dig steg för steg och fyller dig med ny kraft för att leva annorlunda.'
  },
  {
    id: '23',
    reference: 'Romarbrevet 12:2',
    text: 'Anpassa er inte efter den här världen, utan låt er förvandlas genom förnyelsen av ert sinne.',
    reflection:
      'Du behöver inte följa strömmen. Gud ger dig förmågan att tänka nytt, välja nytt och leva med riktning och klarhet.'
  },
  {
    id: '24',
    reference: 'Psaltaren 32:1',
    text: 'Salig är den som fått sin överträdelse förlåten, sin synd övertäckt.',
    reflection:
      'Du kan andas ut. Förlåtelsen är verklig, och du behöver inte bära gamla bördor längre. Gud täcker det som varit och gör dig fri.'
  },
  {
    id: '25',
    reference: 'Första Johannesbrevet 1:9',
    text: 'Om vi bekänner våra synder är han trofast och rättfärdig, så att han förlåter oss synderna och renar oss från all orättfärdighet.',
    reflection:
      'Du behöver aldrig tveka att komma till Gud. Han möter dig inte med skam, utan med rening och en nystart.'
  },
  {
    id: '26',
    reference: 'Ordspråksboken 28:13',
    text: 'Den som döljer sina överträdelser går det illa, men den som bekänner och överger dem finner barmhärtighet.',
    reflection:
      'Du blir inte fri genom att dölja det som gör ont — du blir fri genom att komma till Gud med det. Han tar emot dig och leder dig vidare.'
  },
  {
    id: '27',
    reference: 'Johannes 8:12',
    text: 'Jag är världens ljus. Den som följer mig skall inte vandra i mörkret utan ha livets ljus.',
    reflection:
      'Du behöver inte famla i mörkret. När du följer Jesus får du riktning, klarhet och ett ljus som aldrig slocknar.'
  },
  {
    id: '28',
    reference: 'Efesierbrevet 4:22–24',
    text: 'Lägg av den gamla människan… och ikläd er den nya som är skapad till likhet med Gud.',
    reflection:
      'Du är inte fast i gamla mönster. Gud hjälper dig att lämna det som håller dig tillbaka och klä dig i ett nytt sätt att leva.'
  },
  {
    id: '29',
    reference: 'Psaltaren 51:12',
    text: 'Skapa i mig ett rent hjärta, Gud, och ge mig på nytt en frimodig ande.',
    reflection:
      'Gud kan förnya dig på djupet, även där du känner dig som svagast. Be honom att göra ditt hjärta rent och din ande stark igen.'
  },
  {
    id: '30',
    reference: 'Titusbrevet 2:11–12',
    text: 'Guds nåd… fostrar oss till att säga nej till ogudaktighet och världsliga begär.',
    reflection:
      'Du är inte ensam i kampen mot det som drar dig bort från Gud. Hans nåd lär dig steg för steg att leva ett renare liv.'
  },
  {
    id: '31',
    reference: 'Hebreerbrevet 12:1',
    text: 'Låt oss lägga bort allt som tynger och särskilt synden som snärjer oss.',
    reflection:
      'Du får släppa taget om det som binder dig. Gud ger dig mod att lämna allt som kväver glädjen och hindrar din vandring.'
  },
  {
    id: '32',
    reference: 'Andra Timoteusbrevet 1:7',
    text: 'Gud har inte gett oss en ande av fruktan, utan av kraft, kärlek och självbehärskning.',
    reflection:
      'Du behöver inte styras av rädsla eller av gamla mönster. Du har fått kraft att stå stadigt och välja det som bygger upp.'
  },
  {
    id: '33',
    reference: 'Matteusevangeliet 5:8',
    text: 'Saliga är de renhjärtade, för de skall se Gud.',
    reflection:
      'Du får sträva efter ett rent hjärta — inte perfekt, men äkta. Gud möter dig när du söker honom med uppriktighet.'
  },
  {
    id: '34',
    reference: 'Romarbrevet 6:14',
    text: 'Synden skall inte vara herre över er, för ni står inte under lagen utan under nåden.',
    reflection:
      'Du behöver inte vara slav under gamla vanor. Guds nåd ger dig kraft att leva fritt och nytt.'
  },
  {
    id: '35',
    reference: 'Första Petrusbrevet 1:16',
    text: 'Var heliga, för jag är helig.',
    reflection:
      'Du får växa i helighet, steg för steg. Gud kallar dig inte till perfektion, utan till gemenskap med honom — och där förändras du.'
  },
  {
    id: '36',
    reference: 'Galaterbrevet 5:16',
    text: 'Vandra i Anden, så kommer ni inte göra vad köttet begär.',
    reflection:
      'Du kan ta beslut i vardagen med Andens hjälp. När du går med Gud, faller många frestelser bort av sig själva.'
  },
  {
    id: '37',
    reference: 'Psaltaren 119:11',
    text: 'Jag gömmer ditt ord i mitt hjärta för att inte synda mot dig.',
    reflection:
      'Du får fylla ditt hjärta med Guds ord. Det stärker dig, ger vishet och leder dig när du står inför val.'
  },
  {
    id: '38',
    reference: 'Johannes 15:3',
    text: 'Ni är redan rena genom det ord som jag har talat till er.',
    reflection:
      'Gud renar dig inte genom prestation, utan genom sitt ord och sin närvaro. Du är redan påbörjad i något nytt.'
  },
  {
    id: '39',
    reference: 'Josua 1:9',
    text: 'Var stark och frimodig… ty Herren, din Gud, är med dig vart du än går.',
    reflection:
      'Du kan gå modigt även in i förändringar. Gud är med dig i varje steg, varje beslut, varje omstart.'
  },
  {
    id: '40',
    reference: 'Romarbrevet 13:12',
    text: 'Låt oss lägga av mörkrets gärningar och ikläda oss ljusets vapenrustning.',
    reflection:
      'Du får kliva ut ur det som hör mörkret till och ta på dig det som hör ljuset till. Gud ger dig rustning, klarhet och kraft att leva annorlunda.'
  }
];
