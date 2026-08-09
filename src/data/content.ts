import type { Collection, JournalArticle, Product } from "@/types/content";

const lactariusHero = "/images/products/lactarius/hero.png";
const collectionHero = "/images/collections/mycelia/hero.png";
const macro = "/images/collections/mycelia/macro.png";
const amanitaHero = "/images/products/amanita/hero.png";
const oysterHero = "/images/products/oyster/hero.png";
const morelHero = "/images/products/morel/hero.png";
const puffballHero = "/images/products/puffball/hero.png";
const myceliumHero = "/images/products/mycelium/hero.png";
const canopyHero = "/images/concepts/canopy/concept-v1.png";
const duneHero = "/images/concepts/dune/concept-v1.png";
const glacialHero = "/images/concepts/glacial/concept-v1.png";
const calderaHero = "/images/concepts/caldera/concept-v1.png";
const understoryHero = "/images/products/understory/hero.png";
const strataHero = "/images/products/strata/hero.png";
const siroccoHero = "/images/products/sirocco/hero.png";
const driftHero = "/images/products/drift/hero.png";
const crevasseHero = "/images/products/crevasse/hero.png";
const floeHero = "/images/products/floe/hero.png";
const scoriaHero = "/images/products/scoria/hero.png";
const vesicleHero = "/images/products/vesicle/hero.png";

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
    heroImage: amanitaHero, gallery: [amanitaHero, collectionHero, macro], availability: "By inquiry", tone: "#8e392c",
  },
  {
    id: "mycelia-03", slug: "oyster", name: "Oyster", collection: "mycelia", objectNumber: "03", type: "Lounge Chair",
    description: "Overlapping surfaces gather into a generous, enveloping seat.", inspiration: "Pleurotus ostreatus",
    visualLanguage: ["Layered surfaces", "Soft curves", "Cream", "Stone"], designPrinciples: ["Layering", "Overlap", "Asymmetric growth"],
    dimensions: { width: 1040, depth: 910, height: 760, unit: "mm" }, materials: [{ name: "Moulded foam" }, { name: "Textured wool upholstery" }],
    heroImage: oysterHero, gallery: [oysterHero, collectionHero, macro], availability: "By inquiry", tone: "#d8d0c1",
  },
  {
    id: "mycelia-04", slug: "morel", name: "Morel", collection: "mycelia", objectNumber: "04", type: "Floor Lamp",
    description: "Warm light filtered through an irregular cellular envelope.", inspiration: "Morchella esculenta",
    visualLanguage: ["Perforation", "Cellular geometry", "Warm light"], designPrinciples: ["Porosity", "Repetition", "Diffusion"],
    dimensions: { diameter: 360, height: 1420, unit: "mm" }, materials: [{ name: "Cast mineral shell" }, { name: "Dimmable LED core" }],
    heroImage: morelHero, gallery: [morelHero, macro, collectionHero], availability: "By inquiry", tone: "#b78a53",
  },
  {
    id: "mycelia-05", slug: "puffball", name: "Puffball", collection: "mycelia", objectNumber: "05", type: "Ottoman",
    description: "A quiet upholstered volume with a soft, tactile presence.", inspiration: "Calvatia gigantea",
    visualLanguage: ["Soft volume", "Off-white", "Tactile upholstery"], designPrinciples: ["Expansion", "Continuity", "Contained volume"],
    dimensions: { diameter: 660, height: 410, unit: "mm" }, materials: [{ name: "Natural latex foam" }, { name: "Wool bouclé" }],
    heroImage: puffballHero, gallery: [puffballHero, collectionHero, macro], availability: "By inquiry", tone: "#ddd6c8",
  },
  {
    id: "mycelia-06", slug: "mycelium", name: "Mycelium", collection: "mycelia", objectNumber: "06", type: "Console",
    description: "A branching support network carries a slender horizontal plane.", inspiration: "Mycelial networks",
    visualLanguage: ["Branching support", "Interconnected geometry", "Dark mineral surface"], designPrinciples: ["Network", "Branching", "Distributed load"],
    dimensions: { width: 1600, depth: 390, height: 780, unit: "mm" }, materials: [{ name: "Cast aluminium structure" }, { name: "Blackened mineral top" }],
    heroImage: myceliumHero, gallery: [myceliumHero, macro, collectionHero], availability: "By inquiry", tone: "#373a34",
  },
  {
    id: "canopy-01", slug: "arbor", name: "Arbor", collection: "canopy", objectNumber: "01", type: "Dining Table",
    description: "A generous dining plane carried by a branching structure that distributes weight like a forest canopy.", inspiration: "Rainforest canopy load distribution",
    visualLanguage: ["Dark mineral plane", "Branching bronze", "Layered silhouette"], designPrinciples: ["Distributed load", "Branching", "Vertical stratification"],
    dimensions: { width: 2400, depth: 1100, height: 740, unit: "mm" }, materials: [{ name: "Honed mineral composite" }, { name: "Sand-cast bronze" }, { name: "Dark oiled timber" }],
    heroImage: canopyHero, gallery: [canopyHero, strataHero, understoryHero], availability: "Concept — by inquiry", tone: "#344438",
  },
  {
    id: "canopy-02", slug: "understory", name: "Understory", collection: "canopy", objectNumber: "02", type: "Lounge Chair",
    description: "An enveloping chair suspended inside a branching frame, shaped by the sheltered layer beneath the canopy.", inspiration: "The protected understory of the tropical forest",
    visualLanguage: ["Moss wool", "Bronze branches", "Enveloping volume"], designPrinciples: ["Shelter", "Layering", "Adaptive branching"],
    dimensions: { width: 820, depth: 850, height: 790, unit: "mm" }, materials: [{ name: "Dense wool upholstery" }, { name: "Sand-cast bronze frame" }],
    heroImage: understoryHero, gallery: [understoryHero, canopyHero, strataHero], availability: "Concept — by inquiry", tone: "#53634c",
  },
  {
    id: "canopy-03", slug: "strata", name: "Strata", collection: "canopy", objectNumber: "03", type: "Coffee Table",
    description: "Overlapping planes create a low landscape of shadow, surface and changing levels for the living room.", inspiration: "The vertical strata of a rainforest canopy",
    visualLanguage: ["Overlapping planes", "Deep green mineral", "Branching support"], designPrinciples: ["Layering", "Overlap", "Distributed support"],
    dimensions: { width: 1280, depth: 900, height: 340, unit: "mm" }, materials: [{ name: "Pigmented mineral composite" }, { name: "Patinated bronze" }],
    heroImage: strataHero, gallery: [strataHero, canopyHero, understoryHero], availability: "Concept — by inquiry", tone: "#263d35",
  },
  {
    id: "dune-01", slug: "mesa", name: "Mesa", collection: "dune", objectNumber: "01", type: "Dining Table",
    description: "A monolithic dining table softened by wind-shaped edges and a base hollowed like a desert formation.", inspiration: "Wind-carved mesas and shifting sand",
    visualLanguage: ["Warm stone", "Eroded edge", "Monolithic calm"], designPrinciples: ["Aeolian erosion", "Mass", "Continuity"],
    dimensions: { width: 2500, depth: 1050, height: 740, unit: "mm" }, materials: [{ name: "Sand-toned mineral composite" }, { name: "Honed travertine aggregate" }],
    heroImage: duneHero, gallery: [duneHero, driftHero, siroccoHero], availability: "Concept — by inquiry", tone: "#c89f70",
  },
  {
    id: "dune-02", slug: "sirocco", name: "Sirocco", collection: "dune", objectNumber: "02", type: "Sofa",
    description: "A continuous upholstered landscape whose back and seat rise and settle like dunes under a prevailing wind.", inspiration: "Dunes formed by the Sirocco wind",
    visualLanguage: ["Continuous curve", "Pale boucle", "Low horizon"], designPrinciples: ["Accumulation", "Flow", "Soft asymmetry"],
    dimensions: { width: 2600, depth: 980, height: 760, unit: "mm" }, materials: [{ name: "Natural latex foam" }, { name: "Textured wool bouclé" }, { name: "Internal timber frame" }],
    heroImage: siroccoHero, gallery: [siroccoHero, duneHero, driftHero], availability: "Concept — by inquiry", tone: "#d7b98f",
  },
  {
    id: "dune-03", slug: "drift", name: "Drift", collection: "dune", objectNumber: "03", type: "Coffee Table",
    description: "Interlocking stone volumes meet in a low composition that appears carved by moving sand.", inspiration: "Wind-eroded desert rock",
    visualLanguage: ["Interlocking mass", "Soft voids", "Sandstone palette"], designPrinciples: ["Erosion", "Interlock", "Material memory"],
    dimensions: { width: 1250, depth: 850, height: 330, unit: "mm" }, materials: [{ name: "Honed travertine" }, { name: "Mineral resin joinery" }],
    heroImage: driftHero, gallery: [driftHero, duneHero, siroccoHero], availability: "Concept — by inquiry", tone: "#ba8c5e",
  },
  {
    id: "glacial-01", slug: "shelf", name: "Shelf", collection: "glacial", objectNumber: "01", type: "Dining Table",
    description: "A clear-edged dining plane rests across aluminium forms that recall fractured ice shelves.", inspiration: "Antarctic ice shelves and pressure ridges",
    visualLanguage: ["Translucent blue", "Folded aluminium", "Fractured edge"], designPrinciples: ["Compression", "Fracture", "Suspension"],
    dimensions: { width: 2600, depth: 1050, height: 740, unit: "mm" }, materials: [{ name: "Recycled cast glass" }, { name: "Brushed recycled aluminium" }],
    heroImage: glacialHero, gallery: [glacialHero, floeHero, crevasseHero], availability: "Concept — by inquiry", tone: "#a8c8d8",
  },
  {
    id: "glacial-02", slug: "crevasse", name: "Crevasse", collection: "glacial", objectNumber: "02", type: "Lounge Chair",
    description: "A warm upholstered core sits between translucent folded shells, holding comfort inside a precise fissure.", inspiration: "Blue light inside a glacial crevasse",
    visualLanguage: ["White wool", "Glacial shell", "Protected core"], designPrinciples: ["Fissure", "Containment", "Thermal contrast"],
    dimensions: { width: 880, depth: 900, height: 780, unit: "mm" }, materials: [{ name: "White wool upholstery" }, { name: "Translucent recycled resin shell" }, { name: "Aluminium structure" }],
    heroImage: crevasseHero, gallery: [crevasseHero, glacialHero, floeHero], availability: "Concept — by inquiry", tone: "#bdd5df",
  },
  {
    id: "glacial-03", slug: "floe", name: "Floe", collection: "glacial", objectNumber: "03", type: "Coffee Table",
    description: "Cast-glass plates overlap at different heights like drifting ice gathering into a temporary field.", inspiration: "Sea ice floes in constant rearrangement",
    visualLanguage: ["Layered glass", "Icy translucency", "Aluminium reflection"], designPrinciples: ["Drift", "Overlap", "Temporary equilibrium"],
    dimensions: { width: 1350, depth: 900, height: 350, unit: "mm" }, materials: [{ name: "Textured cast glass" }, { name: "Brushed aluminium" }],
    heroImage: floeHero, gallery: [floeHero, glacialHero, crevasseHero], availability: "Concept — by inquiry", tone: "#8bb7c9",
  },
  {
    id: "caldera-01", slug: "crater", name: "Crater", collection: "caldera", objectNumber: "01", type: "Dining Table",
    description: "A dark dining surface opens around a molten centre, supported by a base with the density of cooled lava.", inspiration: "Volcanic calderas after collapse",
    visualLanguage: ["Obsidian plane", "Crater void", "Basalt mass"], designPrinciples: ["Collapse", "Pressure", "Cooled flow"],
    dimensions: { width: 2500, depth: 1150, height: 740, unit: "mm" }, materials: [{ name: "Honed basalt" }, { name: "Blackened steel" }, { name: "Copper-infused resin" }],
    heroImage: calderaHero, gallery: [calderaHero, vesicleHero, scoriaHero], availability: "Concept — by inquiry", tone: "#5b342b",
  },
  {
    id: "caldera-02", slug: "scoria", name: "Scoria", collection: "caldera", objectNumber: "02", type: "Lounge Chair",
    description: "A porous black shell wraps an ember-toned seat, balancing volcanic roughness with domestic warmth.", inspiration: "Vesicular scoria around a volcanic vent",
    visualLanguage: ["Porous shell", "Ember wool", "Dark mineral frame"], designPrinciples: ["Porosity", "Containment", "Thermal contrast"],
    dimensions: { width: 900, depth: 920, height: 820, unit: "mm" }, materials: [{ name: "Ember-rust wool" }, { name: "Basalt aggregate shell" }, { name: "Blackened steel" }],
    heroImage: scoriaHero, gallery: [scoriaHero, calderaHero, vesicleHero], availability: "Concept — by inquiry", tone: "#8c4431",
  },
  {
    id: "caldera-03", slug: "vesicle", name: "Vesicle", collection: "caldera", objectNumber: "03", type: "Coffee Table",
    description: "A rounded porous base supports a reflective obsidian plane, translating trapped volcanic gas into useful volume.", inspiration: "Air pockets frozen inside cooling lava",
    visualLanguage: ["Porous basalt", "Obsidian top", "Rounded mass"], designPrinciples: ["Vesiculation", "Compression", "Surface contrast"],
    dimensions: { diameter: 1200, height: 340, unit: "mm" }, materials: [{ name: "Cast basalt aggregate" }, { name: "Polished black glass" }],
    heroImage: vesicleHero, gallery: [vesicleHero, calderaHero, scoriaHero], availability: "Concept — by inquiry", tone: "#403735",
  },
];

export const collections: Collection[] = [
  { id: "01", slug: "mycelia", name: "Mycelia", number: "01", subject: "Fungi", description: "Furniture shaped by growth, radial structures and fungal morphology.", philosophy: "Mycelia studies the architecture of fungi: structures that expand through networks, repeat without uniformity and turn fragility into strength.", principles: ["Radial growth", "Lamellar structures", "Networks", "Repetition"], heroImage: collectionHero, gallery: [macro, lactariusHero, collectionHero], status: "current" },
  { id: "02", slug: "erosion", name: "Erosion", number: "02", subject: "Geology", description: "Mass shaped by pressure, weather and time.", philosophy: "An investigation into the material memory of stone.", principles: ["Weathering", "Layers", "Mass", "Time"], heroImage: "/images/collections/erosion/hero.png", gallery: ["/images/collections/erosion/hero.png"], status: "forthcoming" },
  { id: "03", slug: "rhizome", name: "Rhizome", number: "03", subject: "Roots", description: "Interconnected structures formed through adaptation.", philosophy: "Branching systems resolve tension by finding new paths.", principles: ["Branching", "Tension", "Interconnection"], heroImage: "/images/collections/rhizome/hero.png", gallery: ["/images/collections/rhizome/hero.png"], status: "forthcoming" },
  { id: "04", slug: "tide", name: "Tide", number: "04", subject: "Water", description: "Objects traced by current, surface and rhythm.", philosophy: "Water records motion through pattern.", principles: ["Current", "Ripple", "Fluid erosion"], heroImage: "/images/collections/tide/hero.png", gallery: ["/images/collections/tide/hero.png"], status: "forthcoming" },
  { id: "05", slug: "pods", name: "Pods", number: "05", subject: "Seeds", description: "Protective volumes designed around what they contain.", philosophy: "The seed pod is enclosure as active structure.", principles: ["Protection", "Containment", "Release"], heroImage: "/images/collections/pods/hero.png", gallery: ["/images/collections/pods/hero.png"], status: "forthcoming" },
  { id: "06", slug: "paramo", name: "Páramo", number: "06", subject: "Highland ecosystems", description: "Adaptive forms shaped by mist, lichen and altitude.", philosophy: "A study of resilient systems at the edge of habitability.", principles: ["Adaptation", "Moisture", "Resilience"], heroImage: "/images/collections/paramo/hero.png", gallery: ["/images/collections/paramo/hero.png"], status: "forthcoming" },
  { id: "07", slug: "canopy", name: "Canopy", number: "07", subject: "Tropical forest", description: "Furniture shaped by branching, shelter and the layered architecture of the jungle.", philosophy: "Canopy studies the rainforest as a vertical city: a living structure that distributes weight, filters light and creates shelter through interdependence.", principles: ["Branching", "Layering", "Distributed load", "Shelter"], heroImage: canopyHero, gallery: [canopyHero, understoryHero, strataHero], status: "current" },
  { id: "08", slug: "dune", name: "Dune", number: "08", subject: "Desert", description: "Domestic landscapes shaped by wind, accumulation and patient erosion.", philosophy: "Dune translates the desert as motion held in matter. Soft edges and hollowed mass preserve the direction of wind across each object.", principles: ["Aeolian erosion", "Accumulation", "Flow", "Material memory"], heroImage: duneHero, gallery: [duneHero, siroccoHero, driftHero], status: "current" },
  { id: "09", slug: "glacial", name: "Glacial", number: "09", subject: "Antarctica", description: "Objects formed through pressure, fracture, drift and translucent light.", philosophy: "Glacial studies ice as both landscape and archive: immense pressure expressed through clear edges, shifting planes and protected interior warmth.", principles: ["Compression", "Fracture", "Drift", "Thermal contrast"], heroImage: glacialHero, gallery: [glacialHero, crevasseHero, floeHero], status: "current" },
  { id: "10", slug: "caldera", name: "Caldera", number: "10", subject: "Volcanoes", description: "Furniture shaped by collapse, cooled flow, porosity and subterranean heat.", philosophy: "Caldera translates volcanic transformation into domestic objects where rough mineral shells hold polished, warm and tactile interiors.", principles: ["Pressure", "Porosity", "Cooled flow", "Collapse"], heroImage: calderaHero, gallery: [calderaHero, scoriaHero, vesicleHero], status: "current" },
];

export const journalArticles: JournalArticle[] = [
  { slug: "studying-lactarius-indigo", title: "Studying Lactarius Indigo", category: "Species", date: "06.2026", excerpt: "Pigment, concentric growth and the radial logic beneath the cap.", image: macro, observation: "Colour is not applied after form. In Lactarius indigo, colour belongs to the organism’s structure.", body: ["The first study for Mycelia began beneath the cap. From above, Lactarius indigo appears as a sequence of soft concentric fields. Turned over, the organism reveals a precise radial order: hundreds of lamellae carrying the surface above.", "We isolated these two readings as separate design instructions. Concentric growth established the tabletop while the gills suggested a base that distributes load outward from a dense centre.", "Indigo was treated as material information rather than decoration—a mineral pigment embedded through the cast body so that colour and object remain inseparable."] },
  { slug: "radial-growth", title: "Radial Growth", category: "Processes", date: "04.2026", excerpt: "How expansion from a center becomes structure.", image: lactariusHero, observation: "A radius is not only a line. Repeated, it becomes a system for carrying weight.", body: ["Radial systems appear whenever growth begins at a centre and must negotiate an expanding perimeter. Fungal caps, shells and ripples share this logic without sharing a final shape.", "For furniture, the principle offers a way to organise structure without a front or back. Loads can move through repeated ribs, while every viewing angle reveals the same underlying rule.", "The resulting geometry is exact but never visually rigid. Small shifts in spacing and thickness preserve the sense of growth that produced it."] },
  { slug: "geometry-of-mycelium", title: "The Geometry of Mycelium", category: "Field Notes", date: "02.2026", excerpt: "A network with no single point of command.", image: myceliumHero, observation: "Strength emerges from relationships between points, not from one dominant support.", body: ["A mycelial network expands by branching, testing and reconnecting. There is no central trunk and no predetermined final outline.", "The Mycelium console translates this behaviour into a support structure. Members divide around openings, join where forces concentrate and leave material absent where it contributes little.", "Casting makes the network continuous. The process records subtle differences at each junction, leaving evidence of how the structure was formed."] },
  { slug: "objects-formed-by-erosion", title: "Objects Formed by Erosion", category: "Materials", date: "09.2026", excerpt: "Reading time, pressure and absence in stone.", image: "/images/collections/erosion/hero.png", observation: "Erosion designs through removal. What disappears determines what can remain.", body: ["Erosion is often described as damage, yet its results have extraordinary structural clarity. Water, wind and pressure remove the vulnerable and make resistance visible.", "Our early material tests build mass first, then introduce controlled absence through carving, aggregate exposure and repeated abrasion.", "The collection will hold the tension between geological weight and inhabitable scale: objects that appear excavated, yet are calibrated for the body and the room."] },
];

export const getProduct = (slug: string) => products.find((item) => item.slug === slug);
export const getCollection = (slug: string) => collections.find((item) => item.slug === slug);
export const getArticle = (slug: string) => journalArticles.find((item) => item.slug === slug);
