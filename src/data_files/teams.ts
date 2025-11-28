export interface Team {
  id: string;
  name: string;
  slogan: string;
  members: string[];
  projectName: string;
  elevatorPitch: string;
  category:
    | "Food Security"
    | "Healthcare"
    | "Education"
    | "Disaster Response"
    | "Economic Empowerment"
    | "Environmental"
    | "Accessibility"
    | "Human Rights";
  tokenImage: string;
}

const teams: Team[] = [
  {
    id: "chicken-road",
    name: "The Chicken Crossed The Road",
    slogan: "Helping rural farmers cross the digital divide",
    members: ["Sarah Chen", "Marcus Johnson", "Priya Patel"],
    projectName: "FreeRange Connect",
    elevatorPitch: "In developing nations, 80% of poultry is raised by small-scale farmers who face devastating losses from disease and predatory middlemen. FreeRange Connect is a hybrid AI/SMS app designed for low-bandwidth environments. Our computer vision disease detection lets farmers photograph sick birds for instant diagnosis in local dialects, while our 'ride-share for produce' logistics system connects isolated villages to main supply chains. We're literally saving chickens while building the infrastructure that allows vulnerable populations to cross to economic stability.",
    category: "Food Security",
    tokenImage: "/images/tokens/team-4.png"
  },
  {
    id: "hungry-hippos",
    name: "The Hungry Hippos",
    slogan: "Chomping down on food waste, one bite at a time",
    members: ["Jake Martinez", "Aisha Thompson", "Leo Park"],
    projectName: "MealMatch",
    elevatorPitch: "Every day, restaurants throw away tons of perfectly good food while families nearby go hungry. MealMatch is a simple app that connects restaurants, grocery stores, and bakeries with local food banks and shelters in real-time. When a business has surplus food, they snap a photo and post it. Nearby organizations get pinged and can claim it for pickup. No fancy tech degree needed to use it—just a smartphone and the desire to help. We're turning would-be waste into meals for people who need them.",
    category: "Food Security",
    tokenImage: "/images/tokens/team-6.png"
  },
  {
    id: "thirsty-whales",
    name: "The Thirsty Whales",
    slogan: "Making clean water accessible to everyone",
    members: ["Maya Rodriguez", "Sam Wilson", "Zara Ahmed", "Chris Lee"],
    projectName: "AquaAlert",
    elevatorPitch: "Nearly 2 billion people drink contaminated water every day because they simply don't know it's unsafe. AquaAlert is a cheap, solar-powered water sensor that texts you when your water source becomes contaminated. No internet required—just basic cell service. Communities can share data to map safe water sources in their area. We're not trying to build fancy filtration systems—we're just giving people the information they need to protect their families. Simple idea, huge impact.",
    category: "Environmental",
    tokenImage: "/images/tokens/team-7.png"
  },
  {
    id: "hot-yetis",
    name: "The Hot Yetis",
    slogan: "Keeping the heat on climate action",
    members: ["Jordan Blake", "Nina Kowalski", "Tyler Nguyen"],
    projectName: "CoolRoute",
    elevatorPitch: "During heat waves, vulnerable people—elderly, homeless, outdoor workers—die because they can't find cooling. CoolRoute maps every air-conditioned public space in a city: libraries, malls, community centers, even shady parks with water fountains. Users get walking directions to the nearest cool spot and alerts when dangerous heat is coming. Cities can see where cooling gaps exist. It's basically Google Maps for surviving summer, and it could save thousands of lives as heat waves get worse.",
    category: "Disaster Response",
    tokenImage: "/images/tokens/team-8.png"
  },
  {
    id: "freedom-forge",
    name: "The Freedom Forge",
    slogan: "Giving every soul a sanctuary",
    members: [],
    projectName: "The Freedom Forge",
    elevatorPitch: "Article 18 of the Universal Declaration of Human Rights says we all have the freedom to believe. But in reality, unless you have expensive lawyers and official paperwork, your faith is invisible to the law. Indigenous groups and small spiritual communities are often bullied out of existence simply because they lack a 'charter.' The Freedom Forge is an open-source legal shield for the spirit. We use AI to automate the complex process of registering a faith, removing the cost barrier entirely. Then, we use blockchain to permanently archive their existence, creating an immutable record that no government can erase. We aren't selling religion. We are forging the legal armor that protects the human right to believe.",
    category: "Human Rights",
    tokenImage: "/images/tokens/freedom-forge.png"
  },
  {
    id: "watchful-owls",
    name: "The Watchful Owls",
    slogan: "Dignity in privacy, safety in vigilance",
    members: [],
    projectName: "NightGaze",
    elevatorPitch: "We all fear that phone call in the middle of the night. For millions of elderly people, their own bed is a dangerous cliff edge. They fall while trying to get up in the dark, often lying on the floor for hours. Current cameras invade their privacy, and panic buttons are never worn to sleep. NightGaze is an offline, intelligent camera that sees in the dark but tells no secrets. It uses on-device AI to learn the specific body language of a 'dangerous exit'—like swinging legs out too fast. Instead of just reporting a tragedy after it happens, NightGaze intervenes before the fall, using a gentle voice prompt to pause the user, giving them those vital seconds to stabilize. We give seniors the dignity of privacy and the safety of a guardian.",
    category: "Healthcare",
    tokenImage: "/images/tokens/watchful-owls.png"
  }
];

export default teams;
export { teams };
