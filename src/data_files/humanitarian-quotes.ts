/**
 * Real quotes and statistics from authoritative sources
 * Used for rotating banner and category tooltips
 */

export interface HumanitarianQuote {
  quote: string;
  source: string;
  sourceUrl: string;
  category: "Food Security" | "Healthcare" | "Education" | "Disaster Response" | "Economic Empowerment" | "Environmental" | "Accessibility" | "Human Rights" | "General";
  stat?: string; // Optional highlighted statistic
}

export interface CategoryStats {
  category: string;
  headline: string;
  stats: {
    value: string;
    label: string;
  }[];
  source: string;
  sourceUrl: string;
}

// Rotating quotes for the homepage banner
export const rotatingQuotes: HumanitarianQuote[] = [
  // Food Security - MealMatch related
  {
    quote: "In 2024, the U.S. let 29% of the 240 million tons in our food supply go unsold or uneaten—while 47.4 million Americans faced food insecurity.",
    source: "ReFED & USDA",
    sourceUrl: "https://refed.org/food-waste/the-problem/",
    category: "Food Security",
    stat: "47.4M"
  },
  {
    quote: "The restaurant industry wastes $162 billion in food every year while 7.2 million children live in food-insecure households.",
    source: "RTS & USDA",
    sourceUrl: "https://www.rts.com/resources/guides/food-waste-america/",
    category: "Food Security",
    stat: "$162B"
  },
  {
    quote: "Globally, 1.05 billion tonnes of food was wasted in 2022—while 295 million people experienced acute hunger.",
    source: "UNEP & UN",
    sourceUrl: "https://www.unep.org/resources/publication/food-waste-index-report-2024",
    category: "Food Security",
    stat: "1.05B tonnes"
  },

  // Food Security - FreeRange Connect related
  {
    quote: "Family poultry makes up nearly 80% of all poultry products in developing countries. Disease causes 57% of annual chicken mortality in these communities.",
    source: "FAO & BMC Veterinary Research",
    sourceUrl: "https://bmcvetres.biomedcentral.com/articles/10.1186/s12917-025-04549-7",
    category: "Food Security",
    stat: "80%"
  },
  {
    quote: "In sub-Saharan Africa, 85% of households keep poultry—with women owning 70%. Vaccination can increase chick survival from 30% to 70%.",
    source: "FAO",
    sourceUrl: "https://openknowledge.fao.org/server/api/core/bitstreams/73edfce9-c9a1-4814-b907-d86917967ed3/content",
    category: "Food Security",
    stat: "85%"
  },

  // Environmental - AquaAlert related
  {
    quote: "2.2 billion people lack safely managed drinking water. At least 1.7 billion drink water contaminated with feces.",
    source: "WHO",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/drinking-water",
    category: "Environmental",
    stat: "2.2B"
  },
  {
    quote: "Contaminated water causes 505,000 diarrheal deaths each year—395,000 of them children under 5. These deaths are preventable.",
    source: "WHO",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/drinking-water",
    category: "Environmental",
    stat: "505K"
  },
  {
    quote: "People in least developed countries are more than twice as likely to lack basic drinking water and sanitation services.",
    source: "WHO & UNICEF",
    sourceUrl: "https://data.unicef.org/topic/water-and-sanitation/drinking-water/",
    category: "Environmental",
    stat: "2x"
  },

  // Disaster Response - CoolRoute related
  {
    quote: "Excessive heat causes more weather-related deaths than hurricanes, flooding, and tornadoes combined—about 1,500 deaths annually in the U.S.",
    source: "CDC & NBC News",
    sourceUrl: "https://www.nbcnews.com/news/us-news/hundreds-homeless-die-extreme-heat-rcna34409",
    category: "Disaster Response",
    stat: "1,500"
  },
  {
    quote: "In Phoenix, 602 people died from heat in 2024. In Las Vegas, heat deaths tripled in three years to 513.",
    source: "Maricopa County Health & Clark County",
    sourceUrl: "https://www.azfamily.com/2025/03/10/phoenix-area-saw-fewer-heat-deaths-2024-report-says/",
    category: "Disaster Response",
    stat: "602"
  },
  {
    quote: "With any environmental crisis, people experiencing homelessness experience it first, they experience it worst, and they experience it longest.",
    source: "Katie League, National Health Care for the Homeless Council",
    sourceUrl: "https://www.pbs.org/newshour/nation/extreme-heat-can-be-deadly-for-people-who-are-homeless",
    category: "Disaster Response"
  },

  // Healthcare - NightGaze related
  {
    quote: "One in four older adults fall each year. Half of those who lie on the floor for over an hour die within six months—even without direct injury.",
    source: "CDC & New England Journal of Medicine",
    sourceUrl: "https://www.cdc.gov/falls/data-research/facts-stats/index.html",
    category: "Healthcare",
    stat: "1 in 4"
  },
  {
    quote: "After a fall, more than half of older people living alone cannot get up without help. 30% of the oldest adults lie on the ground for over an hour.",
    source: "Physiopedia",
    sourceUrl: "https://www.physio-pedia.com/Long_Lie",
    category: "Healthcare",
    stat: "50%+"
  },
  {
    quote: "Those found within one hour of falling have a 12% mortality rate. Those not found for 72 hours: 62%.",
    source: "New England Journal of Medicine",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10463813/",
    category: "Healthcare",
    stat: "12% vs 62%"
  },

  // Human Rights - Freedom Forge related
  {
    quote: "Indigenous religions, grouped collectively, are the world's sixth largest religion—and by far the oldest. Yet they face systematic erasure and lack legal recognition.",
    source: "Cultural Survival",
    sourceUrl: "https://www.culturalsurvival.org/news/indigenous-religions-face-persecution-asia-and-around-world",
    category: "Human Rights",
    stat: "6th largest"
  },
  {
    quote: "Over 360 million Christians face high persecution. Religious minorities across all faiths endure severe oppression worldwide.",
    source: "Aid to the Church in Need",
    sourceUrl: "https://www.vaticannews.va/en/church/news/2024-11/religious-persecution-worldwide-growing-crisis-for-all-humanity.html",
    category: "Human Rights",
    stat: "360M+"
  },
  {
    quote: "84% of people worldwide identify with a faith tradition. For many Indigenous communities, lack of legal charter means their beliefs remain invisible to the law.",
    source: "USIP & Harvard Law Review",
    sourceUrl: "https://harvardlawreview.org/print/vol-134/living-the-sacred-indigenous-peoples-and-religious-freedom/",
    category: "Human Rights",
    stat: "84%"
  },

  // General - Tech for Good
  {
    quote: "The UN Secretary-General has called for all people to be connected by 2030. No single digital solution can close the divide—but good design helps.",
    source: "UNDP",
    sourceUrl: "https://www.undp.org/digital/standards/2-bridge-digital-divide",
    category: "General"
  },
  {
    quote: "Smart cities can be a tremendous force for good—but only when people are at the center of development.",
    source: "UN-Habitat",
    sourceUrl: "https://unhabitat.org/programme/legacy/people-centered-smart-cities/addressing-the-digital-divide",
    category: "General"
  }
];

// Category-specific statistics for tooltips
export const categoryStats: CategoryStats[] = [
  {
    category: "Food Security",
    headline: "Hunger exists alongside massive waste",
    stats: [
      { value: "47.4M", label: "Americans face food insecurity" },
      { value: "$162B", label: "food wasted by restaurants yearly" },
      { value: "80%", label: "of developing world poultry is small-scale" },
      { value: "57%", label: "of chicken deaths from preventable disease" }
    ],
    source: "USDA, ReFED, FAO",
    sourceUrl: "https://refed.org/food-waste/the-problem/"
  },
  {
    category: "Healthcare",
    headline: "Falls devastate elderly independence",
    stats: [
      { value: "1 in 4", label: "older adults fall each year" },
      { value: "3M", label: "ER visits from elderly falls yearly" },
      { value: "50%+", label: "who fall can't get up alone" },
      { value: "6 months", label: "mortality window after long lies" }
    ],
    source: "CDC, NEJM",
    sourceUrl: "https://www.cdc.gov/falls/data-research/facts-stats/index.html"
  },
  {
    category: "Education",
    headline: "Digital divide limits opportunity",
    stats: [
      { value: "40%", label: "of countries lack basic ICT skills" },
      { value: "2.9B", label: "people still offline globally" },
      { value: "2030", label: "UN goal for universal connectivity" },
      { value: "50%", label: "refugee mobile access increase possible" }
    ],
    source: "UNDP, ITU",
    sourceUrl: "https://www.undp.org/digital/standards/2-bridge-digital-divide"
  },
  {
    category: "Disaster Response",
    headline: "Climate extremes kill the vulnerable",
    stats: [
      { value: "1,500+", label: "annual U.S. heat deaths" },
      { value: "602", label: "Phoenix heat deaths in 2024" },
      { value: "3x", label: "Las Vegas heat death increase in 3 years" },
      { value: "33K+", label: "cooling center visits in Phoenix" }
    ],
    source: "CDC, Maricopa County Health",
    sourceUrl: "https://www.azfamily.com/2025/03/10/phoenix-area-saw-fewer-heat-deaths-2024-report-says/"
  },
  {
    category: "Economic Empowerment",
    headline: "Technology can bridge the gap",
    stats: [
      { value: "600K+", label: "refugees gained mobile access in Uganda" },
      { value: "$1T", label: "global economic loss from food waste" },
      { value: "70%", label: "of African poultry owned by women" },
      { value: "$14", label: "revenue per $1 saved on food waste" }
    ],
    source: "UNHCR, UNEP, FAO",
    sourceUrl: "https://odi.org/en/about/our-work/the-humanitarian-digital-divide-understanding-the-impact-of-technology-on-crisis-response/"
  },
  {
    category: "Environmental",
    headline: "Clean water remains out of reach",
    stats: [
      { value: "2.2B", label: "people lack safe drinking water" },
      { value: "1.7B", label: "drink feces-contaminated water" },
      { value: "505K", label: "annual deaths from unsafe water" },
      { value: "395K", label: "child deaths preventable yearly" }
    ],
    source: "WHO, UNICEF",
    sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/drinking-water"
  },
  {
    category: "Accessibility",
    headline: "Barriers exclude billions",
    stats: [
      { value: "1.3B", label: "people live with disabilities" },
      { value: "80%", label: "live in developing countries" },
      { value: "52%", label: "of disabled adults face food insecurity" },
      { value: "2x", label: "more likely to lack healthcare access" }
    ],
    source: "WHO, USDA",
    sourceUrl: "https://www.who.int/health-topics/disability"
  },
  {
    category: "Human Rights",
    headline: "Faith communities face erasure",
    stats: [
      { value: "360M+", label: "Christians face high persecution" },
      { value: "84%", label: "of people identify with a faith" },
      { value: "6th", label: "largest religion: Indigenous faiths" },
      { value: "8.7%", label: "of Indigenous land titles registered" }
    ],
    source: "ACN, Cultural Survival, USIP",
    sourceUrl: "https://www.culturalsurvival.org/news/indigenous-religions-face-persecution-asia-and-around-world"
  }
];

// Get quotes filtered by category
export function getQuotesByCategory(category: string): HumanitarianQuote[] {
  return rotatingQuotes.filter(q => q.category === category || q.category === "General");
}

// Get stats for a specific category
export function getStatsForCategory(category: string): CategoryStats | undefined {
  return categoryStats.find(c => c.category === category);
}

// Get a random quote (optionally filtered by category)
export function getRandomQuote(category?: string): HumanitarianQuote {
  const quotes = category ? getQuotesByCategory(category) : rotatingQuotes;
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default { rotatingQuotes, categoryStats, getQuotesByCategory, getStatsForCategory, getRandomQuote };
