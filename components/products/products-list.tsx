//Used example from https://tailwindui.com/components/ecommerce/components/product-lists
import { productsTypes } from "./products-types";

import { ProductsItem } from "./products-item";

const dummyProducts: productsTypes[] = [
  {
    id: 1,
    name: "Pink Princess",
    description: "Aglaonema",
    price: 5.95,

    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.m.031-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Pink Princess",

    information:
      "De Aglanonema Pink Princess (Baby) is niet voor niets vernoemd naar een prinses. Deze bijzondere Babyplant laat iedereen even stilstaan om je te verliezen in haar rijke bladerpracht. Ze lijkt wel een levend kunstwerkje; ieder blad heeft een kleurexplosie van roze en groene tinten in een duizelingwekkend patroon. En het goede nieuws met deze Baby is; ze wordt met jouw zorg nog een stuk groter! Probeer hier je ogen maar eens vanaf te houden!",
    rating: 4,
    totalReviews: 376,
  },
  {
    id: 2,
    name: "Adansonii",
    description: "Monstera",
    price: 4.45,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.b.006-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Monstera",

    information:
      "De Monstera Adansonii (Baby), ook wel gatenplantje of ‘monkey mask’ genoemd is een klimmer. Wanneer je deze in je huiskamer hebt staan zul je al snel merken dat de Baby Adansonii uitlopers omhoog gaan. Voor je het weet is ze uitgegroeid tot een volwaardige huiskamerplant. Span een draad omhoog, of plaats een mospaal en je zult merken dat deze klimmer meteen blij wordt, omdat ze haar bladeren dan lekker kan laten groeien.",
    rating: 5,
    totalReviews: 456,
  },
  {
    id: 3,
    name: "Neon",
    description: "Syngonium",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_s_m_013-thumbnail_2.jpg&w=1024&q=100",
    imageAlt: "Neon",
    information:
      "De Syngonium Neon (Baby) is een prachtige babyplant met pijlvormige bladeren. Ze kan snel groeien en daarom adviseren we haar te planten in een hangpot als ze uit haar babypotje is gegroeid. Haar bladeren beginnen groenig, maar naarmate ze groter worden ontstaat er een roodachtig vlammend blad. Wil je haar wat meer sturen dan kun je voor bladgeleiding kiezen voor een bamboe rekje, waar je haar stengels af en toe weer doorheen kan leiden. De Baby De Syngonium Neon is geen rareplant, maar je komt haar niet zo vaak tegen. Een bijzondere dame dus!",
    rating: 4,
    totalReviews: 132,
  },
  {
    id: 4,
    name: "Rowleyanus",
    description: "Senecio",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_s_m_011-thumbnail_2.jpg&w=1024&q=100",
    imageAlt: "Rowleyanus",

    information:
      "De Senecio Rowleyanus, ook wel String of Pearls genoemd, is echt dé parel van alle plantjes. Dit hangende vetplantje is misschien nog wel het meest bekend onder haar bijnaam ‘Erwtenplant’. Deze bijnaam heeft ze te danken aan haar ronde blaadjes die eruitzien als kleine, groene balletjes die aan steeltjes groeien en – inderdaad – op doperwtjes lijken. Ze is daarom een mooie en leuke plant die een beetje eigenzinnigheid zal toevoegen aan elk huis!",
    rating: 3,
    totalReviews: 116,
  },
  {
    id: 5,
    name: "Moonlight",
    description: "Philodendron",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.b.021-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Moonlight",
    rating: 4,
    information:
      "De Philodendron Moonlight (Baby) is een opvallende verschijning. Haar bijna neongele bladeren lijken wel licht te geven. Niet voor niets is ze vernoemd naar het licht van de maan. Zoals bijna elke Philodendron is ze makkelijk te verzorgen en groeit ze in no-time uit tot een volwaardige huiskamerplant.",
    totalReviews: 242,
  },
  {
    id: 6,
    name: "Scandens Micans",
    description: "Philodendron",
    price: 11.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.019-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Scandens Micans",
    rating: 4.5,
    information:
      "De Philodendron Scandens Micans is er eentje om spontaan verliefd op te worden. Ze heeft prachtige hartvormige bladeren die fluweelzacht aanvoelen. En ze heeft nog een bijzondere eigenschap; in ieder licht toont ze een andere kleur. Van diepgroen tot volpaars, ieder moment van de dag verrast ze je met een mooi kleurenpalet. De Philodendron Scandens Micans is een hangplant en houdt van een lichte plek.",
    totalReviews: 242,
  },
  {
    id: 7,
    name: "White Fusion",
    description: "Calathea",
    price: 29.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_m_051-thumbnail_3.jpg&w=1024&q=100",
    imageAlt: "White Fusion",
    rating: 4,
    information:
      "De Calathea is afkomstig uit de tropische wouden van Zuid-Amerika. In de regenwouden groeien ze in de schaduw van bomen en andere grote planten daarom worden ze ook wel ‘Shadowplant’ genoemd. Deze prachtige Calathea White Fusion is zeldzaam vanwege de bonte bladeren. Naast dat ze mooie bonte bladeren heeft is ze ook luchtzuiverend! Een win-win situatie! Waar de Calathea ook bekend om staat is dat ze in de avond haar mooie bonte bladeren dichtvouwt om ze in de ochtend bij de eerste lichtstralen weer open te vouwen. Hoe mooi is dat!",
    totalReviews: 552,
  },
  {
    id: 8,
    name: "Melanochrysum",
    description: "Philodendron",
    price: 49.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.038-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Melanochrysum",
    rating: 3,
    information:
      "Philodendron Melanochrysum is een zeer zeldzame dame onder de Philodendrons. Ze wordt ook wel beschreven als het Zwarte Goud, vanwege de prachtige gouden accenten op haar blad. Haar bladeren worden naar mate ze onder wordt steeds groter zodat je er nog meer van kunt genieten! Ze is een klimmer dus ondersteun haar met een klimhulpje zodat ze lekker haar gang kan gaan. Deze Rare PLNT is een ware blikvanger die je het liefst op een podium zet zodat je er altijd naar kan blijven kijken. Hoewel het heel verleidelijk kan zijn je plantenverzameling met deze beauty te beginnen, raden we je aan met een andere plant te beginnen als je een beginnende plantenouder bent. Let ook op dat elke plant uniek is en dat niet alle planten dezelfde bladlengte zullen hebben als de productfoto's laten zien.",
    totalReviews: 52,
  },
];

export const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {dummyProducts.map((plants) => (
            <ProductsItem key={plants.id} plants={plants} />
          ))}
        </div>
      </div>
    </div>
  );
};
