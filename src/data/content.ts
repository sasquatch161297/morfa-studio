import type { Collection, JournalArticle, Product } from "@/types/content";

const lactariusHero = "/images/products/lactarius/hero.png";
const collectionHero = "/images/collections/mycelia/hero.png";
const macro = "/images/collections/mycelia/macro.png";

export const products: Product[] = [
  {
    id: "mycelia-01", slug: "lactarius", name: "Lactarius", collection: "mycelia", objectNumber: "01", type: "Coffee Table",
    description: "A low table formed through concentric growth and radial structure.", inspiration: "Lactarius indigo",
    visualLanguage: ["Indigo blue", "Concentric rings", "Radial gills", "Sculptural pedestal"],
    designPrinciples: ["Concentric growth", "Radial geometry", "Layered structure"],
    dimensions: { diameter: 950, height: 340, unit: "mm" },
    materials: [{ name: "Pigmented mineral resin" }, { name: "Cast composite structure" }, { name: "Matte protective finish" }],
    heroImage: lactariusHero, gallery: [lactariusHero, macro, lactariusHero], availability: "Made to order", edition: { size: 12, artistProofs: 2 }, tone: "#233985",
  },
  {
    id: "mycelia-02", slug: "amanita", name: "Amanita", collection: "mycelia", objectNumber: "02", type: "Side Table",
    description: "A compact table balancing a rounded volume on a mineral base.", inspiration: "Amanita muscaria",
    visualLanguage: ["Deep red", "Cream", "Rounded cap", "Organic pedestal"], designPrinciples: ["Protective surface", "Balanced mass", "Soft geometry"],
    dimensions: { diameter: 430, height: 480, unit: "mm" }, materials: [{ name: "Pigmented cast resin" }, { name: "Mineral composite base" }],
    heroImage: collectionHero, gallery: [collectionHero, macro], availability: "By inquiry", tone: "#8e392c",
  },
  {
    id: "mycelia-03", slug: "oyster", name: "Oyster", collection: "mycelia", objectNumber: "03", type: "Lounge Chair",
    description: "Overlapping surfaces gather into a generous, enveloping seat.", inspiration: "Pleurotus ostreatus",
    visualLanguage: ["Layered surfaces", "Soft curves", "Cream", "Stone"], designPrinciples: ["Layering", "Overlap", "Asymmetric growth"],
    dimensions: { width: 1040, depth: 910, height: 760, unit: "mm" }, materials: [{ name: "Moulded foam" }, { name: "Textured wool upholstery" }],
    heroImage: collectionHero, gallery: [collectionHero, macro], availability: "By inquiry", tone: "#d8d0c1",
  },
  {
    id: "mycelia-04", slug: "morel", name: "Morel", collection: "mycelia", objectNumber: "04", type: "Floor Lamp",
    description: "Warm light filtered through an irregular cellular envelope.", inspiration: "Morchella esculenta",
    visualLanguage: ["Perforation", "Cellular geometry", "Warm light"], designPrinciples: ["Porosity", "Repetition", "Diffusion"],
    dimensions: { diameter: 360, height: 1420, unit: "mm" }, materials: [{ name: "Cast mineral shell" }, { name: "Dimmable LED core" }],
    heroImage: collectionHero, gallery: [collectionHero, macro], availability: "By inquiry", tone: "#b78a53",
  },
  {
    id: "mycelia-05", slug: "puffball", name: "Puffball", collection: "mycelia", objectNumber: "05", type: "Ottoman",
    description: "A quiet upholstered volume with a soft, tactile presence.", inspiration: "Calvatia gigantea",
    visualLanguage: ["Soft volume", "Off-white", "Tactile upholstery"], designPrinciples: ["Expansion", "Continuity", "Contained volume"],
    dimensions: { diameter: 660, height: 410, unit: "mm" }, materials: [{ name: "Natural latex foam" }, { name: "Wool bouclé" }],
    heroImage: collectionHero, gallery: [collectionHero, macro], availability: "By inquiry", tone: "#ddd6c8",
  },
  {
    id: "mycelia-06", slug: "mycelium", name: "Mycelium", collection: "mycelia", objectNumber: "06", type: "Console",
    description: "A branching support network carries a slender horizontal plane.", inspiration: "Mycelial networks",
    visualLanguage: ["Branching support", "Interconnected geometry", "Dark mineral surface"], designPrinciples: ["Network", "Branching", "Distributed load"],
    dimensions: { width: 1600, depth: 390, height: 780, unit: "mm" }, materials: [{ name: "Cast aluminium structure" }, { name: "Blackened mineral top" }],
    heroImage: macro, gallery: [macro, collectionHero], availability: "By inquiry", tone: "#373a34",
  },
];

export const collections: Collection[] = [
  { id: "01", slug: "mycelia", name: "Mycelia", number: "01", subject: "Fungi", description: "Furniture shaped by growth, radial structures and fungal morphology.", philosophy: "Mycelia studies the architecture of fungi: structures that expand through networks, repeat without uniformity and turn fragility into strength.", principles: ["Radial growth", "Lamellar structures", "Networks", "Repetition"], heroImage: collectionHero, gallery: [macro, lactariusHero, collectionHero], status: "current" },
  { id: "02", slug: "erosion", name: "Erosion", number: "02", subject: "Geology", description: "Mass shaped by pressure, weather and time.", philosophy: "An investigation into the material memory of stone.", principles: ["Weathering", "Layers", "Mass", "Time"], heroImage: macro, gallery: [macro], status: "forthcoming" },
  { id: "03", slug: "rhizome", name: "Rhizome", number: "03", subject: "Roots", description: "Interconnected structures formed through adaptation.", philosophy: "Branching systems resolve tension by finding new paths.", principles: ["Branching", "Tension", "Interconnection"], heroImage: macro, gallery: [macro], status: "forthcoming" },
  { id: "04", slug: "tide", name: "Tide", number: "04", subject: "Water", description: "Objects traced by current, surface and rhythm.", philosophy: "Water records motion through pattern.", principles: ["Current", "Ripple", "Fluid erosion"], heroImage: lactariusHero, gallery: [lactariusHero], status: "forthcoming" },
  { id: "05", slug: "pods", name: "Pods", number: "05", subject: "Seeds", description: "Protective volumes designed around what they contain.", philosophy: "The seed pod is enclosure as active structure.", principles: ["Protection", "Containment", "Release"], heroImage: collectionHero, gallery: [collectionHero], status: "forthcoming" },
  { id: "06", slug: "paramo", name: "Páramo", number: "06", subject: "Highland ecosystems", description: "Adaptive forms shaped by mist, lichen and altitude.", philosophy: "A study of resilient systems at the edge of habitability.", principles: ["Adaptation", "Moisture", "Resilience"], heroImage: macro, gallery: [macro], status: "forthcoming" },
];

export const journalArticles: JournalArticle[] = [
  { slug: "studying-lactarius-indigo", title: "Studying Lactarius Indigo", category: "Species", date: "06.2026", excerpt: "Pigment, concentric growth and the radial logic beneath the cap.", image: macro },
  { slug: "radial-growth", title: "Radial Growth", category: "Processes", date: "04.2026", excerpt: "How expansion from a center becomes structure.", image: lactariusHero },
  { slug: "geometry-of-mycelium", title: "The Geometry of Mycelium", category: "Field Notes", date: "02.2026", excerpt: "A network with no single point of command.", image: collectionHero },
  { slug: "objects-formed-by-erosion", title: "Objects Formed by Erosion", category: "Materials", date: "Forthcoming", excerpt: "Reading time, pressure and absence in stone.", image: macro },
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
export const getCollection = (slug: string) => collections.find((item) => item.slug === slug);
