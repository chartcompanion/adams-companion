/* ===== Adams Chart Visual Companion - script.js ===== */

/* -------- Panels configuration -------- */
const PANELS = {
  full: {
    title: "Full Chart",
    subtitle: "Adams Chart of History — Complete Overview",
    description: "The complete Adams Synchronological Chart of Universal History, spanning from creation to 1881. This panoramic view shows the rise and fall of nations, the lineage of key figures, and the flow of world history in a single sweeping timeline.",
    image: "assets/adams-full.dzi",
    download: "assets/adams-full.jpg"
  },
  p1: {
    title: "Panel 1",
    subtitle: "Creation to the Flood",
    description: "The beginning of the world, the creation of Adam and Eve, the Garden of Eden, the Fall, the generations from Adam to Noah, and the Great Flood.",
    image: "assets/panel-01.dzi",
    download: "assets/panel-01.jpg"
  },
  p2: {
    title: "Panel 2",
    subtitle: "Post-Flood to the Patriarchs",
    description: "The descendants of Noah, the scattering of nations at Babel, the call of Abraham, and the lives of Isaac and Jacob.",
    image: "assets/panel-02.dzi",
    download: "assets/panel-02.jpg"
  },
  p3: {
    title: "Panel 3",
    subtitle: "The Patriarchs to the Exodus",
    description: "The sojourn in Egypt, the life of Joseph, the oppression under Pharaoh, and the birth and calling of Moses.",
    image: "assets/panel-03.dzi",
    download: "assets/panel-03.jpg"
  },
  p4: {
    title: "Panel 4",
    subtitle: "The Exodus and the Law",
    description: "The deliverance from Egypt, the giving of the Law at Sinai, the wilderness wanderings, and the preparation to enter the Promised Land.",
    image: "assets/panel-04.dzi",
    download: "assets/panel-04.jpg"
  },
  p5: {
    title: "Panel 5",
    subtitle: "Conquest to the United Kingdom",
    description: "The conquest of Canaan under Joshua, the era of the Judges, the rise of Saul, and the golden age of David and Solomon.",
    image: "assets/panel-05.dzi",
    download: "assets/panel-05.jpg"
  },
  p6: {
    title: "Panel 6",
    subtitle: "The Divided Kingdom to Assyrian Captivity",
    description: "The division of Israel and Judah, the ministries of Elijah and Elisha, the prophets, and the Assyrian conquest of the northern kingdom.",
    image: "assets/panel-06.dzi",
    download: "assets/panel-06.jpg"
  },
  p7: {
    title: "Panel 7",
    subtitle: "Babylonian Exile to Persian Restoration",
    description: "The fall of Jerusalem, the Babylonian captivity, the rise of Persia under Cyrus, the return and rebuilding of the Temple.",
    image: "assets/panel-07.dzi",
    download: "assets/panel-07.jpg"
  },
  p8: {
    title: "Panel 8",
    subtitle: "The Greek Empire and Intertestamental Period",
    description: "Alexander the Great, the Hellenistic kingdoms, the Ptolemies and Seleucids, the Maccabean revolt, and the rise of Rome.",
    image: "assets/panel-08.dzi",
    download: "assets/panel-08.jpg"
  },
  p9: {
    title: "Panel 9",
    subtitle: "The Roman Empire and the Life of Christ",
    description: "The Roman world, the birth and ministry of Jesus Christ, the crucifixion and resurrection, and the spread of the early Church.",
    image: "assets/panel-09.dzi",
    download: "assets/panel-09.jpg"
  },
  p10: {
    title: "Panel 10",
    subtitle: "Constantine to the Modern Era (1881)",
    description: "Constantine and the Christian empire, Charlemagne, the Crusades, the Reformation under Luther, the age of discovery with Columbus, Napoleon, and the modern world to 1881.",
    image: "assets/panel-10.dzi",
    download: "assets/panel-10.jpg"
  }
};

// Order used for Previous / Next navigation
const PANEL_ORDER = ["full", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10"];

/* -------- Search index --------
   Each entry: { title, type, panel, keywords }
   "panel" must match a key in PANELS (e.g. "p1", "p5", "full").
   Easily expandable: add new objects here or load from a JSON file later.
*/

const SEARCH_INDEX = [

  // ============================================================
  // PANEL 1 — Creation to the Flood
  // ============================================================
  { title: "Adam",          type: "Person",  panel: "p1",  keywords: ["adam", "creation", "genesis", "first man", "eden"] },
  { title: "Eve",           type: "Person",  panel: "p1",  keywords: ["eve", "first woman", "eden", "creation"] },
  { title: "Cain",          type: "Person",  panel: "p1",  keywords: ["cain", "abel", "first murder"] },
  { title: "Abel",          type: "Person",  panel: "p1",  keywords: ["abel", "cain"] },
  { title: "Seth",          type: "Person",  panel: "p1",  keywords: ["seth", "third son of adam"] },
  { title: "Enoch",         type: "Person",  panel: "p1",  keywords: ["enoch", "walked with god"] },
  { title: "Methuselah",    type: "Person",  panel: "p1",  keywords: ["methuselah", "longest life", "969"] },
  { title: "Lamech",        type: "Person",  panel: "p1",  keywords: ["lamech", "father of noah"] },
  { title: "Noah",          type: "Person",  panel: "p1",  keywords: ["noah", "ark", "flood", "deluge"] },
  { title: "The Flood",     type: "Event",   panel: "p1",  keywords: ["flood", "deluge", "noah", "ark", "great flood"] },
  { title: "Eden",          type: "Place",   panel: "p1",  keywords: ["eden", "garden", "paradise"] },
  { title: "Antediluvian Era", type: "Era",  panel: "p1",  keywords: ["antediluvian", "before flood", "pre-flood"] },

  // ============================================================
  // PANEL 2 — Post-Flood to the Patriarchs
  // ============================================================
  { title: "Shem",          type: "Person",  panel: "p2",  keywords: ["shem", "son of noah", "semites"] },
  { title: "Ham",           type: "Person",  panel: "p2",  keywords: ["ham", "son of noah"] },
  { title: "Japheth",       type: "Person",  panel: "p2",  keywords: ["japheth", "son of noah"] },
  { title: "Nimrod",        type: "Person",  panel: "p2",  keywords: ["nimrod", "mighty hunter", "babel"] },
  { title: "Tower of Babel", type: "Event",  panel: "p2",  keywords: ["babel", "tower", "languages", "shinar"] },
  { title: "Abraham",       type: "Person",  panel: "p2",  keywords: ["abraham", "abram", "patriarch", "ur", "canaan", "father of nations"] },
  { title: "Sarah",         type: "Person",  panel: "p2",  keywords: ["sarah", "sarai", "wife of abraham"] },
  { title: "Lot",           type: "Person",  panel: "p2",  keywords: ["lot", "nephew of abraham", "sodom"] },
  { title: "Isaac",         type: "Person",  panel: "p2",  keywords: ["isaac", "son of abraham"] },
  { title: "Rebekah",       type: "Person",  panel: "p2",  keywords: ["rebekah", "rebecca", "wife of isaac"] },
  { title: "Jacob",         type: "Person",  panel: "p2",  keywords: ["jacob", "israel", "twelve tribes"] },
  { title: "Esau",          type: "Person",  panel: "p2",  keywords: ["esau", "edom", "brother of jacob"] },
  { title: "Joseph",        type: "Person",  panel: "p2",  keywords: ["joseph", "coat", "egypt", "dreams"] },
  { title: "Job",           type: "Person",  panel: "p2",  keywords: ["job", "suffering", "patience"] },
  { title: "Sodom and Gomorrah", type: "Event", panel: "p2", keywords: ["sodom", "gomorrah", "destruction"] },
  { title: "Egypt",         type: "Empire",  panel: "p2",  keywords: ["egypt", "pharaoh", "nile", "egyptian", "kemet"] },
  { title: "Ur of the Chaldees", type: "Place", panel: "p2", keywords: ["ur", "chaldees", "abraham birthplace", "mesopotamia"] },
  { title: "Canaan",        type: "Place",   panel: "p2",  keywords: ["canaan", "promised land", "palestine"] },

  // ============================================================
  // PANEL 3 — The Patriarchs to the Exodus
  // ============================================================
  { title: "Moses",         type: "Person",  panel: "p3",  keywords: ["moses", "exodus", "law", "sinai", "ten commandments", "lawgiver"] },
  { title: "Aaron",         type: "Person",  panel: "p3",  keywords: ["aaron", "high priest", "brother of moses"] },
  { title: "Miriam",        type: "Person",  panel: "p3",  keywords: ["miriam", "sister of moses"] },
  { title: "Pharaoh",       type: "Person",  panel: "p3",  keywords: ["pharaoh", "exodus", "egypt"] },
  { title: "The Exodus",    type: "Event",   panel: "p3",  keywords: ["exodus", "moses", "egypt", "passover"] },
  { title: "Ten Commandments", type: "Event", panel: "p3", keywords: ["commandments", "decalogue", "sinai", "law"] },
  { title: "Mount Sinai",   type: "Place",   panel: "p3",  keywords: ["sinai", "mountain", "law"] },
  { title: "Hammurabi",     type: "Person",  panel: "p3",  keywords: ["hammurabi", "babylon", "code", "law"] },
  { title: "Minos",         type: "Person",  panel: "p3",  keywords: ["minos", "crete", "minoan"] },
  { title: "Trojan War",    type: "Event",   panel: "p3",  keywords: ["troy", "trojan", "war", "homer", "iliad"] },
  { title: "Hercules",      type: "Person",  panel: "p3",  keywords: ["hercules", "heracles", "twelve labors"] },
  { title: "Theseus",       type: "Person",  panel: "p3",  keywords: ["theseus", "athens", "minotaur"] },
  { title: "Assyria",       type: "Empire",  panel: "p3",  keywords: ["assyria", "assyrian", "nineveh"] },
  { title: "Babylon",       type: "Empire",  panel: "p3",  keywords: ["babylon", "babylonian", "tigris", "euphrates"] },
  { title: "Memphis",       type: "Place",   panel: "p3",  keywords: ["memphis", "egypt", "old kingdom"] },
  { title: "Thebes",        type: "Place",   panel: "p3",  keywords: ["thebes", "egypt", "luxor"] },

  // ============================================================
  // PANEL 4 — The Exodus and the Law
  // ============================================================
  { title: "Joshua",        type: "Person",  panel: "p4",  keywords: ["joshua", "jericho", "conquest", "successor of moses"] },
  { title: "Jericho",       type: "Event",   panel: "p4",  keywords: ["jericho", "walls", "conquest"] },
  { title: "The Judges",    type: "Era",     panel: "p4",  keywords: ["judges", "israel", "deborah", "gideon"] },
  { title: "Deborah",       type: "Person",  panel: "p4",  keywords: ["deborah", "judge", "prophetess"] },
  { title: "Gideon",        type: "Person",  panel: "p4",  keywords: ["gideon", "judge", "midianites"] },
  { title: "Samson",        type: "Person",  panel: "p4",  keywords: ["samson", "delilah", "philistines", "strength"] },
  { title: "Ruth",          type: "Person",  panel: "p4",  keywords: ["ruth", "boaz", "moabite"] },
  { title: "Samuel",        type: "Person",  panel: "p4",  keywords: ["samuel", "prophet", "judge", "anointed kings"] },
  { title: "Saul",          type: "Person",  panel: "p4",  keywords: ["saul", "first king", "israel"] },
  { title: "David",         type: "Person",  panel: "p4",  keywords: ["david", "goliath", "psalms", "king of israel"] },
  { title: "Goliath",       type: "Person",  panel: "p4",  keywords: ["goliath", "philistine", "giant", "david"] },
  { title: "Ramses II",     type: "Person",  panel: "p4",  keywords: ["ramses", "rameses", "ramesses", "egypt", "pharaoh"] },
  { title: "Tutankhamun",   type: "Person",  panel: "p4",  keywords: ["tutankhamun", "tutankhamen", "king tut", "egypt"] },
  { title: "Phoenicia",     type: "Empire",  panel: "p4",  keywords: ["phoenicia", "phoenician", "tyre", "sidon"] },
  { title: "Sparta",        type: "Empire",  panel: "p4",  keywords: ["sparta", "spartan", "lycurgus"] },
  { title: "Athens",        type: "Empire",  panel: "p4",  keywords: ["athens", "athenian", "attica"] },
  { title: "Olympic Games", type: "Event",   panel: "p4",  keywords: ["olympic", "olympia", "games", "776 bc"] },
  { title: "Founding of Rome", type: "Event", panel: "p4", keywords: ["rome", "founding", "romulus", "remus", "753 bc"] },
  { title: "Romulus",       type: "Person",  panel: "p4",  keywords: ["romulus", "remus", "rome founder"] },
  { title: "Homer",         type: "Person",  panel: "p4",  keywords: ["homer", "iliad", "odyssey", "greek poet"] },

  // ============================================================
  // PANEL 5 — Conquest to the United Kingdom
  // ============================================================
  { title: "Solomon",       type: "Person",  panel: "p5",  keywords: ["solomon", "wisdom", "temple", "son of david"] },
  { title: "Solomon's Temple", type: "Event", panel: "p5", keywords: ["temple", "first temple", "jerusalem", "solomon"] },
  { title: "Queen of Sheba", type: "Person", panel: "p5",  keywords: ["sheba", "queen", "solomon"] },
  { title: "Rehoboam",      type: "Person",  panel: "p5",  keywords: ["rehoboam", "son of solomon", "division"] },
  { title: "Jeroboam",      type: "Person",  panel: "p5",  keywords: ["jeroboam", "northern kingdom", "israel"] },
  { title: "Kingdom of Israel", type: "Empire", panel: "p5", keywords: ["israel", "northern kingdom", "samaria"] },
  { title: "Kingdom of Judah", type: "Empire", panel: "p5", keywords: ["judah", "southern kingdom", "jerusalem"] },
  { title: "Elijah",        type: "Person",  panel: "p5",  keywords: ["elijah", "elias", "prophet", "ahab"] },
  { title: "Elisha",        type: "Person",  panel: "p5",  keywords: ["elisha", "prophet", "successor of elijah"] },
  { title: "Ahab",          type: "Person",  panel: "p5",  keywords: ["ahab", "king of israel", "jezebel"] },
  { title: "Jezebel",       type: "Person",  panel: "p5",  keywords: ["jezebel", "queen", "ahab"] },
  { title: "Isaiah",        type: "Person",  panel: "p5",  keywords: ["isaiah", "prophet", "messiah"] },
  { title: "Jonah",         type: "Person",  panel: "p5",  keywords: ["jonah", "whale", "nineveh", "prophet"] },
  { title: "Hosea",         type: "Person",  panel: "p5",  keywords: ["hosea", "prophet"] },
  { title: "Amos",          type: "Person",  panel: "p5",  keywords: ["amos", "prophet"] },
  { title: "Sennacherib",   type: "Person",  panel: "p5",  keywords: ["sennacherib", "assyria", "king"] },
  { title: "Tiglath-Pileser", type: "Person", panel: "p5", keywords: ["tiglath-pileser", "assyria"] },
  { title: "Fall of Samaria", type: "Event", panel: "p5",  keywords: ["samaria", "722 bc", "assyrian conquest", "ten lost tribes"] },
  { title: "Carthage",      type: "Empire",  panel: "p5",  keywords: ["carthage", "carthaginian", "phoenician colony"] },
  { title: "Lydia",         type: "Empire",  panel: "p5",  keywords: ["lydia", "croesus", "anatolia"] },
  { title: "Croesus",       type: "Person",  panel: "p5",  keywords: ["croesus", "lydia", "wealth"] },
  { title: "Hesiod",        type: "Person",  panel: "p5",  keywords: ["hesiod", "greek poet", "theogony"] },
  { title: "Sappho",        type: "Person",  panel: "p5",  keywords: ["sappho", "lesbos", "poet"] },
  { title: "Aesop",         type: "Person",  panel: "p5",  keywords: ["aesop", "fables"] },

  // ============================================================
  // PANEL 6 — The Divided Kingdom to Assyrian Captivity
  // ============================================================
  { title: "Hezekiah",      type: "Person",  panel: "p6",  keywords: ["hezekiah", "judah", "king"] },
  { title: "Manasseh",      type: "Person",  panel: "p6",  keywords: ["manasseh", "judah", "king"] },
  { title: "Josiah",        type: "Person",  panel: "p6",  keywords: ["josiah", "reform", "judah"] },
  { title: "Jeremiah",      type: "Person",  panel: "p6",  keywords: ["jeremiah", "weeping prophet", "lamentations"] },
  { title: "Ezekiel",       type: "Person",  panel: "p6",  keywords: ["ezekiel", "prophet", "exile"] },
  { title: "Daniel",        type: "Person",  panel: "p6",  keywords: ["daniel", "lions den", "babylon", "prophet"] },
  { title: "Nebuchadnezzar", type: "Person", panel: "p6",  keywords: ["nebuchadnezzar", "babylon", "king", "captivity"] },
  { title: "Babylonian Captivity", type: "Event", panel: "p6", keywords: ["babylonian captivity", "exile", "586 bc", "destruction of jerusalem"] },
  { title: "Fall of Jerusalem", type: "Event", panel: "p6", keywords: ["fall of jerusalem", "586 bc", "babylonian", "first temple destruction"] },
  { title: "Hanging Gardens", type: "Place", panel: "p6", keywords: ["hanging gardens", "babylon", "wonder of the world"] },
  { title: "Belshazzar",    type: "Person",  panel: "p6",  keywords: ["belshazzar", "babylon", "writing on the wall"] },
  { title: "Zoroaster",     type: "Person",  panel: "p6",  keywords: ["zoroaster", "zarathustra", "persia", "religion"] },
  { title: "Thales",        type: "Person",  panel: "p6",  keywords: ["thales", "miletus", "philosopher", "first philosopher"] },
  { title: "Anaximander",   type: "Person",  panel: "p6",  keywords: ["anaximander", "miletus", "philosopher"] },
  { title: "Pythagoras",    type: "Person",  panel: "p6",  keywords: ["pythagoras", "mathematics", "samos", "theorem"] },
  { title: "Confucius",     type: "Person",  panel: "p6",  keywords: ["confucius", "kongzi", "china", "philosopher"] },
  { title: "Lao Tzu",       type: "Person",  panel: "p6",  keywords: ["lao tzu", "laozi", "taoism", "china"] },
  { title: "Buddha",        type: "Person",  panel: "p6",  keywords: ["buddha", "siddhartha", "gautama", "buddhism", "india"] },
  { title: "Mahavira",      type: "Person",  panel: "p6",  keywords: ["mahavira", "jainism", "india"] },
  { title: "Solon",         type: "Person",  panel: "p6",  keywords: ["solon", "athens", "lawgiver"] },
  { title: "Tarquin",       type: "Person",  panel: "p6",  keywords: ["tarquin", "rome", "last king"] },
  { title: "Roman Republic", type: "Era",    panel: "p6",  keywords: ["roman republic", "509 bc", "rome", "consuls"] },

  // ============================================================
  // PANEL 7 — Babylonian Exile to Persian Restoration
  // ============================================================
  { title: "Cyrus the Great", type: "Person", panel: "p7", keywords: ["cyrus", "persia", "great", "achaemenid", "founder of persia"] },
  { title: "Darius I",      type: "Person",  panel: "p7",  keywords: ["darius", "persia", "marathon", "great king"] },
  { title: "Xerxes",        type: "Person",  panel: "p7",  keywords: ["xerxes", "ahasuerus", "persia", "thermopylae"] },
  { title: "Persia",        type: "Empire",  panel: "p7",  keywords: ["persia", "persian", "achaemenid"] },
  { title: "Persian Wars",  type: "Event",   panel: "p7",  keywords: ["persian wars", "marathon", "thermopylae", "salamis"] },
  { title: "Battle of Marathon", type: "Event", panel: "p7", keywords: ["marathon", "490 bc", "athens", "persians"] },
  { title: "Battle of Thermopylae", type: "Event", panel: "p7", keywords: ["thermopylae", "leonidas", "300", "spartans"] },
  { title: "Battle of Salamis", type: "Event", panel: "p7", keywords: ["salamis", "naval battle", "themistocles"] },
  { title: "Leonidas",      type: "Person",  panel: "p7",  keywords: ["leonidas", "sparta", "thermopylae", "300"] },
  { title: "Themistocles",  type: "Person",  panel: "p7",  keywords: ["themistocles", "athens", "salamis"] },
  { title: "Pericles",      type: "Person",  panel: "p7",  keywords: ["pericles", "athens", "golden age"] },
  { title: "Herodotus",     type: "Person",  panel: "p7",  keywords: ["herodotus", "father of history"] },
  { title: "Thucydides",    type: "Person",  panel: "p7",  keywords: ["thucydides", "peloponnesian war", "historian"] },
  { title: "Socrates",      type: "Person",  panel: "p7",  keywords: ["socrates", "philosopher", "athens", "hemlock"] },
  { title: "Plato",         type: "Person",  panel: "p7",  keywords: ["plato", "academy", "republic", "philosopher"] },
  { title: "Aristotle",     type: "Person",  panel: "p7",  keywords: ["aristotle", "lyceum", "philosopher", "tutor of alexander"] },
  { title: "Hippocrates",   type: "Person",  panel: "p7",  keywords: ["hippocrates", "medicine", "oath"] },
  { title: "Sophocles",     type: "Person",  panel: "p7",  keywords: ["sophocles", "tragedy", "oedipus"] },
  { title: "Euripides",     type: "Person",  panel: "p7",  keywords: ["euripides", "tragedy", "athens"] },
  { title: "Aeschylus",     type: "Person",  panel: "p7",  keywords: ["aeschylus", "tragedy", "father of tragedy"] },
  { title: "Aristophanes",  type: "Person",  panel: "p7",  keywords: ["aristophanes", "comedy"] },
  { title: "Peloponnesian War", type: "Event", panel: "p7", keywords: ["peloponnesian war", "athens", "sparta"] },
  { title: "Ezra",          type: "Person",  panel: "p7",  keywords: ["ezra", "scribe", "second temple"] },
  { title: "Nehemiah",      type: "Person",  panel: "p7",  keywords: ["nehemiah", "walls of jerusalem"] },
  { title: "Esther",        type: "Person",  panel: "p7",  keywords: ["esther", "persian queen", "purim"] },
  { title: "Second Temple", type: "Event",   panel: "p7",  keywords: ["second temple", "rebuilt", "zerubbabel", "ezra"] },
  { title: "Malachi",       type: "Person",  panel: "p7",  keywords: ["malachi", "last prophet"] },

  // ============================================================
  // PANEL 8 — The Greek Empire and Intertestamental Period
  // ============================================================
  { title: "Alexander the Great", type: "Person", panel: "p8", keywords: ["alexander", "alexander the great", "macedon", "macedonia", "conqueror"] },
  { title: "Philip of Macedon", type: "Person", panel: "p8", keywords: ["philip", "macedon", "father of alexander"] },
  { title: "Diogenes",      type: "Person",  panel: "p8",  keywords: ["diogenes", "cynic", "philosopher"] },
  { title: "Epicurus",      type: "Person",  panel: "p8",  keywords: ["epicurus", "epicurean", "philosopher"] },
  { title: "Zeno of Citium", type: "Person", panel: "p8",  keywords: ["zeno", "stoicism", "stoic"] },
  { title: "Euclid",        type: "Person",  panel: "p8",  keywords: ["euclid", "geometry", "elements"] },
  { title: "Archimedes",    type: "Person",  panel: "p8",  keywords: ["archimedes", "syracuse", "eureka", "lever"] },
  { title: "Eratosthenes",  type: "Person",  panel: "p8",  keywords: ["eratosthenes", "earth circumference", "alexandria"] },
  { title: "Library of Alexandria", type: "Place", panel: "p8", keywords: ["library", "alexandria", "ptolemy", "scholarship"] },
  { title: "Ptolemy I",     type: "Person",  panel: "p8",  keywords: ["ptolemy", "egypt", "diadochi"] },
  { title: "Seleucus",      type: "Person",  panel: "p8",  keywords: ["seleucus", "seleucid", "diadochi"] },
  { title: "Antiochus IV",  type: "Person",  panel: "p8",  keywords: ["antiochus", "epiphanes", "seleucid", "maccabees"] },
  { title: "Maccabean Revolt", type: "Event", panel: "p8", keywords: ["maccabees", "hanukkah", "judas maccabeus", "revolt"] },
  { title: "Judas Maccabeus", type: "Person", panel: "p8", keywords: ["judas maccabeus", "judah", "hammer", "maccabees"] },
  { title: "Hanukkah",      type: "Event",   panel: "p8",  keywords: ["hanukkah", "festival of lights", "maccabees"] },
  { title: "Septuagint",    type: "Event",   panel: "p8",  keywords: ["septuagint", "lxx", "greek bible", "alexandria"] },
  { title: "Punic Wars",    type: "Event",   panel: "p8",  keywords: ["punic wars", "rome", "carthage", "hannibal"] },
  { title: "Hannibal",      type: "Person",  panel: "p8",  keywords: ["hannibal", "carthage", "alps", "elephants"] },
  { title: "Scipio Africanus", type: "Person", panel: "p8", keywords: ["scipio", "africanus", "zama", "rome"] },
  { title: "Cato the Elder", type: "Person", panel: "p8", keywords: ["cato", "elder", "rome"] },
  { title: "Sulla",         type: "Person",  panel: "p8",  keywords: ["sulla", "dictator", "rome"] },
  { title: "Marius",        type: "Person",  panel: "p8",  keywords: ["marius", "rome", "general"] },
  { title: "Spartacus",     type: "Person",  panel: "p8",  keywords: ["spartacus", "slave revolt", "gladiator"] },
  { title: "Cicero",        type: "Person",  panel: "p8",  keywords: ["cicero", "rome", "orator"] },
  { title: "Pompey",        type: "Person",  panel: "p8",  keywords: ["pompey", "rome", "triumvirate"] },
  { title: "Qin Shi Huang", type: "Person",  panel: "p8",  keywords: ["qin shi huang", "first emperor of china", "great wall", "terracotta"] },
  { title: "Great Wall of China", type: "Event", panel: "p8", keywords: ["great wall", "china", "qin"] },
  { title: "Mauryan Empire", type: "Empire", panel: "p8",  keywords: ["maurya", "mauryan", "india"] },
  { title: "Ashoka",        type: "Person",  panel: "p8",  keywords: ["ashoka", "asoka", "india", "buddhism"] },

  // ============================================================
  // PANEL 9 — The Roman Empire and the Life of Christ
  // ============================================================
  { title: "Julius Caesar", type: "Person",  panel: "p9",  keywords: ["caesar", "julius caesar", "rome", "ides of march", "rubicon"] },
  { title: "Cleopatra",     type: "Person",  panel: "p9",  keywords: ["cleopatra", "egypt", "antony", "caesar"] },
  { title: "Mark Antony",   type: "Person",  panel: "p9",  keywords: ["antony", "mark antony", "cleopatra", "actium"] },
  { title: "Augustus",      type: "Person",  panel: "p9",  keywords: ["augustus", "octavian", "first emperor", "rome", "principate"] },
  { title: "Tiberius",      type: "Person",  panel: "p9",  keywords: ["tiberius", "rome", "emperor"] },
  { title: "Caligula",      type: "Person",  panel: "p9",  keywords: ["caligula", "rome", "emperor"] },
  { title: "Claudius",      type: "Person",  panel: "p9",  keywords: ["claudius", "rome", "britain"] },
  { title: "Nero",          type: "Person",  panel: "p9",  keywords: ["nero", "rome", "fire", "fiddled"] },
  { title: "Vespasian",     type: "Person",  panel: "p9",  keywords: ["vespasian", "rome", "flavian"] },
  { title: "Titus",         type: "Person",  panel: "p9",  keywords: ["titus", "rome", "destruction of jerusalem"] },
  { title: "Domitian",      type: "Person",  panel: "p9",  keywords: ["domitian", "rome", "persecution"] },
  { title: "Trajan",        type: "Person",  panel: "p9",  keywords: ["trajan", "rome", "greatest extent"] },
  { title: "Hadrian",       type: "Person",  panel: "p9",  keywords: ["hadrian", "wall", "rome"] },
  { title: "Marcus Aurelius", type: "Person", panel: "p9", keywords: ["marcus aurelius", "stoic", "meditations", "philosopher emperor"] },
  { title: "Jesus Christ",  type: "Person",  panel: "p9",  keywords: ["jesus", "christ", "messiah", "savior", "nazareth", "lord", "yeshua"] },
  { title: "Mary",          type: "Person",  panel: "p9",  keywords: ["mary", "mother of jesus", "virgin", "madonna"] },
  { title: "Joseph (NT)",   type: "Person",  panel: "p9",  keywords: ["joseph", "carpenter", "father of jesus"] },
  { title: "John the Baptist", type: "Person", panel: "p9", keywords: ["john the baptist", "baptizer", "forerunner"] },
  { title: "The Apostles",  type: "Group",   panel: "p9",  keywords: ["apostles", "twelve", "disciples"] },
  { title: "Peter (Apostle)", type: "Person", panel: "p9", keywords: ["peter", "simon peter", "apostle", "rock"] },
  { title: "Paul (Apostle)", type: "Person", panel: "p9",  keywords: ["paul", "saul", "tarsus", "apostle to gentiles", "epistles"] },
  { title: "John (Apostle)", type: "Person", panel: "p9",  keywords: ["john", "apostle", "revelation", "patmos"] },
  { title: "Pontius Pilate", type: "Person", panel: "p9",  keywords: ["pilate", "pontius pilate", "judea", "crucifixion"] },
  { title: "Herod the Great", type: "Person", panel: "p9", keywords: ["herod", "the great", "judea", "temple rebuilt"] },
  { title: "Crucifixion",   type: "Event",   panel: "p9",  keywords: ["crucifixion", "calvary", "golgotha", "passion"] },
  { title: "Resurrection",  type: "Event",   panel: "p9",  keywords: ["resurrection", "easter", "risen"] },
  { title: "Pentecost",     type: "Event",   panel: "p9",  keywords: ["pentecost", "holy spirit", "church birthday"] },
  { title: "Destruction of Jerusalem (70 AD)", type: "Event", panel: "p9", keywords: ["destruction", "jerusalem", "70 ad", "second temple", "titus"] },
  { title: "Bar Kokhba Revolt", type: "Event", panel: "p9", keywords: ["bar kokhba", "jewish revolt", "132 ad"] },
  { title: "Pompeii",       type: "Event",   panel: "p9",  keywords: ["pompeii", "vesuvius", "79 ad", "eruption"] },
  { title: "Mount Vesuvius", type: "Event",  panel: "p9",  keywords: ["vesuvius", "pompeii", "eruption"] },
  { title: "Virgil",        type: "Person",  panel: "p9",  keywords: ["virgil", "vergil", "aeneid"] },
  { title: "Horace",        type: "Person",  panel: "p9",  keywords: ["horace", "rome", "poet"] },
  { title: "Ovid",          type: "Person",  panel: "p9",  keywords: ["ovid", "metamorphoses", "rome"] },
  { title: "Seneca",        type: "Person",  panel: "p9",  keywords: ["seneca", "stoic", "nero"] },
  { title: "Pliny the Elder", type: "Person", panel: "p9", keywords: ["pliny", "natural history"] },
  { title: "Tacitus",       type: "Person",  panel: "p9",  keywords: ["tacitus", "historian", "rome"] },
  { title: "Josephus",      type: "Person",  panel: "p9",  keywords: ["josephus", "jewish historian"] },
  { title: "Han Dynasty",   type: "Empire",  panel: "p9",  keywords: ["han", "china", "dynasty"] },
  { title: "Boudica",       type: "Person",  panel: "p9",  keywords: ["boudica", "boudicca", "britain", "iceni"] },
  { title: "Silk Road",     type: "Event",   panel: "p9",  keywords: ["silk road", "trade", "china", "rome"] },

  // ============================================================
  // PANEL 10 — Constantine to the Modern Era (1881)
  // ============================================================

  // Late Antiquity
  { title: "Constantine the Great", type: "Person", panel: "p10", keywords: ["constantine", "great", "rome", "christian emperor", "milvian bridge"] },
  { title: "Edict of Milan", type: "Event", panel: "p10", keywords: ["edict of milan", "313", "tolerance", "christianity"] },
  { title: "Council of Nicaea", type: "Event", panel: "p10", keywords: ["nicaea", "325", "creed", "council"] },
  { title: "Constantinople",type: "Place",   panel: "p10", keywords: ["constantinople", "byzantium", "istanbul", "new rome"] },
  { title: "Diocletian",    type: "Person",  panel: "p10", keywords: ["diocletian", "rome", "tetrarchy", "persecution"] },
  { title: "Theodosius I",  type: "Person",  panel: "p10", keywords: ["theodosius", "christianity", "state religion"] },
  { title: "Augustine of Hippo", type: "Person", panel: "p10", keywords: ["augustine", "hippo", "confessions", "city of god"] },
  { title: "Jerome",        type: "Person",  panel: "p10", keywords: ["jerome", "vulgate", "latin bible"] },
  { title: "Ambrose",       type: "Person",  panel: "p10", keywords: ["ambrose", "milan", "church father"] },
  { title: "Attila the Hun", type: "Person", panel: "p10", keywords: ["attila", "huns", "scourge of god"] },
  { title: "Fall of Rome",  type: "Event",   panel: "p10", keywords: ["fall of rome", "476", "odoacer", "western empire"] },
  { title: "Odoacer",       type: "Person",  panel: "p10", keywords: ["odoacer", "fall of rome"] },

  // Byzantine & Early Medieval
  { title: "Justinian I",   type: "Person",  panel: "p10", keywords: ["justinian", "byzantine", "code of justinian", "hagia sophia"] },
  { title: "Hagia Sophia",  type: "Place",   panel: "p10", keywords: ["hagia sophia", "constantinople", "byzantine"] },
  { title: "Theodora",      type: "Person",  panel: "p10", keywords: ["theodora", "byzantine empress"] },
  { title: "Mohammed",      type: "Person",  panel: "p10", keywords: ["mohammed", "muhammad", "islam", "prophet of islam"] },
  { title: "Hegira",        type: "Event",   panel: "p10", keywords: ["hegira", "hijra", "622", "medina"] },
  { title: "Caliphate",     type: "Empire",  panel: "p10", keywords: ["caliphate", "islamic", "umayyad", "abbasid"] },
  { title: "Charles Martel", type: "Person", panel: "p10", keywords: ["charles martel", "tours", "frankish"] },
  { title: "Battle of Tours", type: "Event", panel: "p10", keywords: ["tours", "732", "poitiers", "charles martel"] },
  { title: "Charlemagne",   type: "Person",  panel: "p10", keywords: ["charlemagne", "charles the great", "carolingian", "holy roman emperor", "carolus magnus"] },
  { title: "Holy Roman Empire", type: "Empire", panel: "p10", keywords: ["holy roman empire", "germany", "charlemagne"] },
  { title: "Alfred the Great", type: "Person", panel: "p10", keywords: ["alfred", "great", "wessex", "england"] },
  { title: "Vikings",       type: "Group",   panel: "p10", keywords: ["vikings", "norse", "scandinavia", "raiders"] },
  { title: "Leif Erikson",  type: "Person",  panel: "p10", keywords: ["leif erikson", "vinland", "viking america"] },

  // High Middle Ages
  { title: "William the Conqueror", type: "Person", panel: "p10", keywords: ["william", "conqueror", "norman", "1066", "hastings"] },
  { title: "Battle of Hastings", type: "Event", panel: "p10", keywords: ["hastings", "1066", "norman conquest"] },
  { title: "Crusades",      type: "Event",   panel: "p10", keywords: ["crusades", "holy land", "jerusalem", "1095"] },
  { title: "First Crusade", type: "Event",   panel: "p10", keywords: ["first crusade", "1095", "urban ii", "jerusalem"] },
  { title: "Saladin",       type: "Person",  panel: "p10", keywords: ["saladin", "salah ad-din", "ayyubid", "jerusalem"] },
  { title: "Richard the Lionheart", type: "Person", panel: "p10", keywords: ["richard", "lionheart", "third crusade", "england"] },
  { title: "Frederick Barbarossa", type: "Person", panel: "p10", keywords: ["barbarossa", "frederick", "holy roman emperor"] },
  { title: "Genghis Khan",  type: "Person",  panel: "p10", keywords: ["genghis khan", "mongol", "temujin", "khan"] },
  { title: "Mongol Empire", type: "Empire",  panel: "p10", keywords: ["mongol", "mongols", "khan", "horde"] },
  { title: "Kublai Khan",   type: "Person",  panel: "p10", keywords: ["kublai", "khan", "yuan", "china"] },
  { title: "Marco Polo",    type: "Person",  panel: "p10", keywords: ["marco polo", "venice", "china", "kublai"] },
  { title: "Magna Carta",   type: "Event",   panel: "p10", keywords: ["magna carta", "1215", "john", "england", "rights"] },
  { title: "King John",     type: "Person",  panel: "p10", keywords: ["king john", "england", "magna carta"] },
  { title: "St. Francis of Assisi", type: "Person", panel: "p10", keywords: ["francis", "assisi", "franciscan", "poverty"] },
  { title: "Thomas Aquinas", type: "Person", panel: "p10", keywords: ["aquinas", "thomas", "summa", "scholastic"] },
  { title: "Dante",         type: "Person",  panel: "p10", keywords: ["dante", "alighieri", "divine comedy", "inferno"] },
  { title: "Black Death",   type: "Event",   panel: "p10", keywords: ["black death", "plague", "1347", "bubonic"] },
  { title: "Hundred Years' War", type: "Event", panel: "p10", keywords: ["hundred years war", "england", "france"] },
  { title: "Joan of Arc",   type: "Person",  panel: "p10", keywords: ["joan of arc", "jeanne d'arc", "maid of orleans", "france"] },
  { title: "Petrarch",      type: "Person",  panel: "p10", keywords: ["petrarch", "petrarca", "humanism", "italy"] },
  { title: "Boccaccio",     type: "Person",  panel: "p10", keywords: ["boccaccio", "decameron", "italy"] },
  { title: "Geoffrey Chaucer", type: "Person", panel: "p10", keywords: ["chaucer", "canterbury tales", "england"] },

  // Renaissance & Discovery
  { title: "Fall of Constantinople", type: "Event", panel: "p10", keywords: ["fall of constantinople", "1453", "ottoman", "byzantine end"] },
  { title: "Mehmed II",     type: "Person",  panel: "p10", keywords: ["mehmed", "conqueror", "ottoman", "constantinople"] },
  { title: "Ottoman Empire", type: "Empire", panel: "p10", keywords: ["ottoman", "turks", "sultan", "istanbul"] },
  { title: "Suleiman the Magnificent", type: "Person", panel: "p10", keywords: ["suleiman", "magnificent", "ottoman"] },
  { title: "Gutenberg",     type: "Person",  panel: "p10", keywords: ["gutenberg", "printing press", "bible"] },
  { title: "Printing Press", type: "Event",  panel: "p10", keywords: ["printing press", "gutenberg", "1440"] },
  { title: "Christopher Columbus", type: "Person", panel: "p10", keywords: ["columbus", "christopher columbus", "1492", "america", "discovery"] },
  { title: "Discovery of America", type: "Event", panel: "p10", keywords: ["discovery of america", "1492", "columbus", "new world"] },
  { title: "Vasco da Gama", type: "Person",  panel: "p10", keywords: ["vasco da gama", "india", "portugal"] },
  { title: "Ferdinand Magellan", type: "Person", panel: "p10", keywords: ["magellan", "circumnavigation", "portugal"] },
  { title: "Amerigo Vespucci", type: "Person", panel: "p10", keywords: ["vespucci", "amerigo", "america name"] },
  { title: "Hernán Cortés", type: "Person",  panel: "p10", keywords: ["cortes", "cortez", "aztec", "mexico"] },
  { title: "Francisco Pizarro", type: "Person", panel: "p10", keywords: ["pizarro", "inca", "peru"] },
  { title: "Aztec Empire",  type: "Empire",  panel: "p10", keywords: ["aztec", "mexico", "tenochtitlan", "montezuma"] },
  { title: "Inca Empire",   type: "Empire",  panel: "p10", keywords: ["inca", "peru", "andes", "atahualpa"] },
  { title: "Leonardo da Vinci", type: "Person", panel: "p10", keywords: ["leonardo", "da vinci", "renaissance", "mona lisa"] },
  { title: "Michelangelo",  type: "Person",  panel: "p10", keywords: ["michelangelo", "sistine", "david", "renaissance"] },
  { title: "Raphael",       type: "Person",  panel: "p10", keywords: ["raphael", "raffaello", "renaissance"] },
  { title: "Lorenzo de' Medici", type: "Person", panel: "p10", keywords: ["lorenzo", "medici", "florence", "magnificent"] },
  { title: "Niccolò Machiavelli", type: "Person", panel: "p10", keywords: ["machiavelli", "the prince", "florence"] },
  { title: "Erasmus",       type: "Person",  panel: "p10", keywords: ["erasmus", "humanist", "rotterdam"] },
  { title: "Thomas More",   type: "Person",  panel: "p10", keywords: ["thomas more", "utopia", "england"] },
  { title: "Copernicus",    type: "Person",  panel: "p10", keywords: ["copernicus", "heliocentric", "astronomy"] },
  { title: "Tycho Brahe",   type: "Person",  panel: "p10", keywords: ["tycho brahe", "astronomy", "denmark"] },

  // Reformation & Early Modern
  { title: "Martin Luther", type: "Person",  panel: "p10", keywords: ["martin luther", "luther", "reformation", "95 theses", "wittenberg"] },
  { title: "Reformation",   type: "Event",   panel: "p10", keywords: ["reformation", "protestant", "luther", "1517"] },
  { title: "John Calvin",   type: "Person",  panel: "p10", keywords: ["calvin", "calvinism", "geneva"] },
  { title: "Henry VIII",    type: "Person",  panel: "p10", keywords: ["henry viii", "england", "anne boleyn", "anglican"] },
  { title: "Anne Boleyn",   type: "Person",  panel: "p10", keywords: ["anne boleyn", "henry viii", "england"] },
  { title: "Thomas Cranmer", type: "Person", panel: "p10", keywords: ["cranmer", "archbishop", "english reformation"] },
  { title: "Mary I (Bloody Mary)", type: "Person", panel: "p10", keywords: ["mary i", "bloody mary", "catholic", "england"] },
  { title: "Elizabeth I",   type: "Person",  panel: "p10", keywords: ["elizabeth i", "virgin queen", "england", "tudor"] },
  { title: "William Shakespeare", type: "Person", panel: "p10", keywords: ["shakespeare", "bard", "stratford", "hamlet"] },
  { title: "Francis Bacon", type: "Person",  panel: "p10", keywords: ["francis bacon", "scientific method"] },
  { title: "Galileo Galilei", type: "Person", panel: "p10", keywords: ["galileo", "galilei", "telescope", "heliocentric"] },
  { title: "Johannes Kepler", type: "Person", panel: "p10", keywords: ["kepler", "planetary motion"] },
  { title: "Cervantes",     type: "Person",  panel: "p10", keywords: ["cervantes", "don quixote", "spain"] },
  { title: "Spanish Armada", type: "Event",  panel: "p10", keywords: ["spanish armada", "1588", "england"] },
  { title: "Philip II of Spain", type: "Person", panel: "p10", keywords: ["philip ii", "spain", "habsburg"] },
  { title: "Mary, Queen of Scots", type: "Person", panel: "p10", keywords: ["mary queen of scots", "scotland", "stuart"] },
  { title: "Thirty Years' War", type: "Event", panel: "p10", keywords: ["thirty years war", "1618", "germany", "westphalia"] },
  { title: "Gustavus Adolphus", type: "Person", panel: "p10", keywords: ["gustavus adolphus", "sweden"] },
  { title: "Cardinal Richelieu", type: "Person", panel: "p10", keywords: ["richelieu", "cardinal", "france", "louis xiii"] },
  { title: "Oliver Cromwell", type: "Person", panel: "p10", keywords: ["cromwell", "oliver", "puritan", "lord protector", "england"] },
  { title: "English Civil War", type: "Event", panel: "p10", keywords: ["english civil war", "cromwell", "charles i"] },
  { title: "Charles I of England", type: "Person", panel: "p10", keywords: ["charles i", "england", "executed"] },
  { title: "Charles II of England", type: "Person", panel: "p10", keywords: ["charles ii", "restoration", "england"] },
  { title: "Glorious Revolution", type: "Event", panel: "p10", keywords: ["glorious revolution", "1688", "william and mary"] },
  { title: "Mayflower",     type: "Event",   panel: "p10", keywords: ["mayflower", "pilgrims", "1620", "plymouth"] },
  { title: "Pilgrims",      type: "Group",   panel: "p10", keywords: ["pilgrims", "puritans", "plymouth"] },
  { title: "Jamestown",     type: "Event",   panel: "p10", keywords: ["jamestown", "1607", "virginia"] },
  { title: "Pocahontas",    type: "Person",  panel: "p10", keywords: ["pocahontas", "powhatan", "virginia"] },
  { title: "John Locke",    type: "Person",  panel: "p10", keywords: ["locke", "john locke", "philosopher", "two treatises"] },
  { title: "Isaac Newton",  type: "Person",  panel: "p10", keywords: ["newton", "isaac newton", "gravity", "principia"] },
  { title: "René Descartes", type: "Person", panel: "p10", keywords: ["descartes", "cartesian", "cogito"] },
  { title: "Blaise Pascal", type: "Person",  panel: "p10", keywords: ["pascal", "pensées", "mathematician"] },
  { title: "Louis XIV",     type: "Person",  panel: "p10", keywords: ["louis xiv", "sun king", "france", "versailles"] },
  { title: "Versailles",    type: "Place",   panel: "p10", keywords: ["versailles", "louis xiv", "palace"] },
  { title: "Peter the Great", type: "Person", panel: "p10", keywords: ["peter the great", "russia", "tsar", "westernization"] },
  { title: "Catherine the Great", type: "Person", panel: "p10", keywords: ["catherine the great", "russia", "empress"] },
  { title: "Frederick the Great", type: "Person", panel: "p10", keywords: ["frederick the great", "prussia"] },
  { title: "Maria Theresa", type: "Person",  panel: "p10", keywords: ["maria theresa", "austria", "habsburg"] },
  { title: "Voltaire",      type: "Person",  panel: "p10", keywords: ["voltaire", "enlightenment", "candide"] },
  { title: "Rousseau",      type: "Person",  panel: "p10", keywords: ["rousseau", "social contract", "enlightenment"] },
  { title: "Montesquieu",   type: "Person",  panel: "p10", keywords: ["montesquieu", "spirit of laws", "separation of powers"] },
  { title: "Adam Smith",    type: "Person",  panel: "p10", keywords: ["adam smith", "wealth of nations", "economics"] },
  { title: "Bach",          type: "Person",  panel: "p10", keywords: ["bach", "johann sebastian bach", "baroque"] },
  { title: "Handel",        type: "Person",  panel: "p10", keywords: ["handel", "messiah", "baroque"] },
  { title: "Mozart",        type: "Person",  panel: "p10", keywords: ["mozart", "wolfgang amadeus", "classical"] },
  { title: "Beethoven",     type: "Person",  panel: "p10", keywords: ["beethoven", "ludwig van", "ninth symphony"] },

  // Modern Era
  { title: "American Revolution", type: "Event", panel: "p10", keywords: ["american revolution", "1776", "independence", "thirteen colonies"] },
  { title: "Declaration of Independence", type: "Event", panel: "p10", keywords: ["declaration of independence", "1776", "jefferson"] },
  { title: "George Washington", type: "Person", panel: "p10", keywords: ["washington", "george washington", "first president", "american revolution"] },
  { title: "Thomas Jefferson", type: "Person", panel: "p10", keywords: ["jefferson", "thomas jefferson", "declaration", "third president"] },
  { title: "Benjamin Franklin", type: "Person", panel: "p10", keywords: ["franklin", "benjamin franklin", "founding father", "lightning"] },
  { title: "John Adams",    type: "Person",  panel: "p10", keywords: ["john adams", "second president"] },
  { title: "James Madison", type: "Person",  panel: "p10", keywords: ["madison", "constitution", "fourth president"] },
  { title: "U.S. Constitution", type: "Event", panel: "p10", keywords: ["constitution", "united states", "1787", "philadelphia"] },
  { title: "French Revolution", type: "Event", panel: "p10", keywords: ["french revolution", "1789", "bastille", "guillotine"] },
  { title: "Storming of the Bastille", type: "Event", panel: "p10", keywords: ["bastille", "1789", "july 14"] },
  { title: "Louis XVI",     type: "Person",  panel: "p10", keywords: ["louis xvi", "guillotine", "france"] },
  { title: "Marie Antoinette", type: "Person", panel: "p10", keywords: ["marie antoinette", "let them eat cake", "france"] },
  { title: "Robespierre",   type: "Person",  panel: "p10", keywords: ["robespierre", "terror", "jacobin"] },
  { title: "Reign of Terror", type: "Event", panel: "p10", keywords: ["reign of terror", "robespierre", "guillotine"] },
  { title: "Napoleon Bonaparte", type: "Person", panel: "p10", keywords: ["napoleon", "bonaparte", "emperor", "france", "waterloo"] },
  { title: "Battle of Waterloo", type: "Event", panel: "p10", keywords: ["waterloo", "1815", "napoleon", "wellington"] },
  { title: "Battle of Trafalgar", type: "Event", panel: "p10", keywords: ["trafalgar", "1805", "nelson"] },
  { title: "Lord Nelson",   type: "Person",  panel: "p10", keywords: ["nelson", "horatio nelson", "trafalgar"] },
  { title: "Duke of Wellington", type: "Person", panel: "p10", keywords: ["wellington", "waterloo", "britain"] },
  { title: "Lewis and Clark", type: "Event", panel: "p10", keywords: ["lewis and clark", "expedition", "louisiana"] },
  { title: "War of 1812",   type: "Event",   panel: "p10", keywords: ["war of 1812", "united states", "britain"] },
  { title: "Simón Bolívar", type: "Person",  panel: "p10", keywords: ["bolivar", "simón bolívar", "south america", "liberator"] },
  { title: "Independence of Latin America", type: "Event", panel: "p10", keywords: ["latin america", "independence", "bolivar", "san martin"] },
  { title: "Industrial Revolution", type: "Event", panel: "p10", keywords: ["industrial revolution", "steam", "factories", "britain"] },
  { title: "James Watt",    type: "Person",  panel: "p10", keywords: ["james watt", "steam engine"] },
  { title: "George Stephenson", type: "Person", panel: "p10", keywords: ["stephenson", "railway", "locomotive"] },
  { title: "Eli Whitney",   type: "Person",  panel: "p10", keywords: ["eli whitney", "cotton gin"] },
  { title: "Robert Fulton", type: "Person",  panel: "p10", keywords: ["fulton", "steamboat"] },
  { title: "Samuel Morse",  type: "Person",  panel: "p10", keywords: ["morse", "telegraph", "code"] },
  { title: "Alexander Graham Bell", type: "Person", panel: "p10", keywords: ["bell", "alexander graham bell", "telephone"] },
  { title: "Thomas Edison", type: "Person",  panel: "p10", keywords: ["edison", "thomas edison", "electric light", "phonograph"] },
  { title: "Queen Victoria", type: "Person", panel: "p10", keywords: ["victoria", "queen victoria", "british empire", "victorian"] },
  { title: "Charles Darwin", type: "Person", panel: "p10", keywords: ["darwin", "evolution", "origin of species"] },
  { title: "Charles Dickens", type: "Person", panel: "p10", keywords: ["dickens", "oliver twist", "victorian novelist"] },
  { title: "Karl Marx",     type: "Person",  panel: "p10", keywords: ["marx", "karl marx", "communism", "das kapital"] },
  { title: "Crimean War",   type: "Event",   panel: "p10", keywords: ["crimean war", "1853", "florence nightingale"] },
  { title: "Florence Nightingale", type: "Person", panel: "p10", keywords: ["florence nightingale", "nursing", "crimean"] },
  { title: "Italian Unification", type: "Event", panel: "p10", keywords: ["italian unification", "risorgimento", "garibaldi", "cavour"] },
  { title: "Giuseppe Garibaldi", type: "Person", panel: "p10", keywords: ["garibaldi", "italy", "unification", "thousand"] },
  { title: "Camillo Cavour", type: "Person", panel: "p10", keywords: ["cavour", "italy", "unification", "piedmont"] },
  { title: "Victor Emmanuel II", type: "Person", panel: "p10", keywords: ["victor emmanuel", "italy", "first king"] },
  { title: "German Unification", type: "Event", panel: "p10", keywords: ["german unification", "1871", "bismarck"] },
  { title: "Otto von Bismarck", type: "Person", panel: "p10", keywords: ["bismarck", "iron chancellor", "germany"] },
  { title: "Franco-Prussian War", type: "Event", panel: "p10", keywords: ["franco-prussian war", "1870", "sedan"] },
  { title: "Abraham Lincoln", type: "Person", panel: "p10", keywords: ["lincoln", "abraham lincoln", "civil war", "emancipation", "16th president"] },
  { title: "American Civil War", type: "Event", panel: "p10", keywords: ["american civil war", "1861", "union", "confederacy", "slavery"] },
  { title: "Emancipation Proclamation", type: "Event", panel: "p10", keywords: ["emancipation proclamation", "1863", "lincoln", "slavery"] },
  { title: "Ulysses S. Grant", type: "Person", panel: "p10", keywords: ["grant", "ulysses s. grant", "civil war", "18th president"] },
  { title: "Robert E. Lee", type: "Person",  panel: "p10", keywords: ["robert e. lee", "confederate", "civil war"] },
  { title: "Battle of Gettysburg", type: "Event", panel: "p10", keywords: ["gettysburg", "1863", "civil war"] },
  { title: "Frederick Douglass", type: "Person", panel: "p10", keywords: ["douglass", "frederick douglass", "abolition"] },
  { title: "Harriet Beecher Stowe", type: "Person", panel: "p10", keywords: ["harriet beecher stowe", "uncle tom's cabin"] },
  { title: "Suez Canal",    type: "Event",   panel: "p10", keywords: ["suez canal", "1869", "egypt"] },
  { title: "Meiji Restoration", type: "Event", panel: "p10", keywords: ["meiji", "japan", "1868", "restoration"] },
  { title: "Boxer Rebellion (precursors)", type: "Era", panel: "p10", keywords: ["china", "qing", "treaty of nanking", "opium wars"] },
  { title: "Opium Wars",    type: "Event",   panel: "p10", keywords: ["opium wars", "china", "britain"] },
  { title: "Qing Dynasty",  type: "Empire",  panel: "p10", keywords: ["qing", "china", "manchu"] },
  { title: "Mughal Empire", type: "Empire",  panel: "p10", keywords: ["mughal", "india", "akbar", "taj mahal"] },
  { title: "Akbar the Great", type: "Person", panel: "p10", keywords: ["akbar", "mughal", "india"] },
  { title: "Shah Jahan",    type: "Person",  panel: "p10", keywords: ["shah jahan", "taj mahal", "mughal"] },
  { title: "Taj Mahal",     type: "Place",   panel: "p10", keywords: ["taj mahal", "india", "shah jahan"] },
  { title: "British Raj",   type: "Empire",  panel: "p10", keywords: ["british raj", "india", "victoria"] },
  { title: "Sepoy Mutiny",  type: "Event",   panel: "p10", keywords: ["sepoy", "mutiny", "1857", "india"] },
  { title: "Australia Settled", type: "Event", panel: "p10", keywords: ["australia", "1788", "captain cook", "settlement"] },
  { title: "Captain Cook",  type: "Person",  panel: "p10", keywords: ["cook", "captain cook", "pacific", "australia"] },
  { title: "Year 1881",     type: "Event",   panel: "p10", keywords: ["1881", "chart end", "adams chart"] }

];

/* -------- DOM references -------- */
const titleEl       = document.getElementById("viewerTitle");
const subtitleEl    = document.getElementById("viewerSubtitle");
const descEl        = document.getElementById("viewerDescription");
const navButtons    = document.querySelectorAll(".nav-btn");
const searchInput   = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const prevBtn       = document.getElementById("prevBtn");
const nextBtn       = document.getElementById("nextBtn");
const openTabBtn    = document.getElementById("openTabBtn");

/* -------- State -------- */
let currentKey = "full";

/* -------- Initialize OpenSeadragon (single viewer, DZI tile source) -------- */
const viewer = OpenSeadragon({
  id: "openseadragon-viewer",
  prefixUrl: "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/4.1.0/images/",
  tileSources: PANELS[currentKey].image,
  showNavigationControl: true,
  showNavigator: false,
  gestureSettingsTouch: { pinchToZoom: true, flickEnabled: true },
  animationTime: 0.4,
  blendTime: 0.1,
  maxZoomPixelRatio: 2,
  immediateRender: true
});

/* -------- Load a panel by key -------- */
function loadPanel(key) {
  if (!PANELS[key]) return;
  currentKey = key;

  /* Update browser URL so it reflects the current panel (deep-link friendly) */
  if (window.history && window.history.pushState) {
    const newUrl = key === "full"
      ? window.location.pathname
      : window.location.pathname + "?panel=" + key;
    window.history.pushState({ panel: key }, "", newUrl);
  }
  const panel = PANELS[key];

  // Update header text
  titleEl.textContent    = panel.title;
  subtitleEl.textContent = panel.subtitle || "";
  descEl.textContent     = panel.description;

  // Show loading overlay
  showLoading(true);

  // Safety: hide the loader after 4 seconds even if no event fires.
  // By then the user sees something, and the spinner has done its job.
  clearTimeout(window.__loaderTimeout);
  window.__loaderTimeout = setTimeout(() => showLoading(false), 4000);

  // Swap the image in the existing viewer (no new viewer instance)
  viewer.open(panel.image);

  // Highlight the active button
  navButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.key === key);
  });

  // Enable/disable prev/next at edges
  const idx = PANEL_ORDER.indexOf(key);
  prevBtn.disabled = idx <= 0;
  nextBtn.disabled = idx === -1 || idx >= PANEL_ORDER.length - 1;
}

/* -------- Loading overlay helper -------- */
function showLoading(visible) {
  const el = document.getElementById("loadingOverlay");
  if (el) el.hidden = !visible;
}

/* -------- Reset zoom when image is opened -------- */
viewer.addHandler("open", () => {
  // Use a tiny delay so OpenSeadragon has time to compute the bounds
  setTimeout(() => {
    viewer.viewport.goHome(true);
  }, 50);
});

/* Hide the loading overlay reliably across DZI behaviors:
   - 'tile-drawn' fires when a tile is actually painted
   - 'fully-loaded-change' fires when all visible tiles are loaded
   - safety timeout in case something is stuck */
function hideLoaderOnce() {
  showLoading(false);
}

viewer.addHandler("tile-drawn", hideLoaderOnce);
viewer.addHandler("fully-loaded-change", hideLoaderOnce);

viewer.addHandler("open-failed", () => {
  showLoading(false);
  titleEl.textContent = PANELS[currentKey].title + " — failed to load";
});

/* -------- Navigation buttons -------- */
navButtons.forEach(btn => {
  btn.addEventListener("click", () => loadPanel(btn.dataset.key));
});

/* -------- Previous / Next -------- */
prevBtn.addEventListener("click", () => {
  const idx = PANEL_ORDER.indexOf(currentKey);
  if (idx > 0) loadPanel(PANEL_ORDER[idx - 1]);
});

nextBtn.addEventListener("click", () => {
  const idx = PANEL_ORDER.indexOf(currentKey);
  if (idx >= 0 && idx < PANEL_ORDER.length - 1) loadPanel(PANEL_ORDER[idx + 1]);
});

/* -------- Open current image in a new tab -------- */
openTabBtn.addEventListener("click", () => {
  const url = PANELS[currentKey].download || PANELS[currentKey].image;
  window.open(url, "_blank", "noopener");
});

/* -------- Search -------- */
function runSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.hidden = true;
    searchResults.innerHTML = "";
    return;
  }

  // Score each entry by relevance.
  // Higher score = more relevant. Threshold: keep score >= 50.
  function scoreItem(item) {
    const title = item.title.toLowerCase();
    const type = item.type.toLowerCase();
    const keywords = item.keywords.map(k => k.toLowerCase());

    // Exact title match
    if (title === q) return 1000;

    // Title starts with query (e.g. "Mac" matches "Machiavelli")
    if (title.startsWith(q)) return 500;

    // A word in the title starts with query (e.g. "Mac" matches "Philip of Macedon")
    const titleWords = title.split(/\s+/);
    if (titleWords.some(w => w.startsWith(q))) return 300;

    // A keyword exactly matches
    if (keywords.includes(q)) return 250;

    // A keyword starts with query
    if (keywords.some(k => k.startsWith(q))) return 200;

    // A word inside a keyword starts with query
    if (keywords.some(k => k.split(/\s+/).some(w => w.startsWith(q)))) return 150;

    // Type matches
    if (type === q) return 120;

    // Substring match somewhere — only if query is at least 4 chars
    if (q.length >= 4) {
      if (title.includes(q)) return 80;
      if (keywords.some(k => k.includes(q))) return 60;
    }

    return 0;
  }

  const scored = SEARCH_INDEX
    .map(item => ({ item, score: scoreItem(item) }))
    .filter(x => x.score >= 50)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const matches = scored.map(x => x.item);

  searchResults.innerHTML = "";
  if (matches.length === 0) {
    const li = document.createElement("li");
    li.className = "no-result";
    li.textContent = "No results found.";
    searchResults.appendChild(li);
  } else {
    matches.forEach(item => {
      const li = document.createElement("li");

      const titleSpan = document.createElement("span");
      titleSpan.className = "result-title";
      titleSpan.textContent = item.title;

      const metaSpan = document.createElement("span");
      metaSpan.className = "result-meta";
      const panelLabel = PANELS[item.panel] ? PANELS[item.panel].title : item.panel;
      metaSpan.textContent = `${item.type} · ${panelLabel}`;

      li.appendChild(titleSpan);
      li.appendChild(metaSpan);

      li.addEventListener("click", () => {
        loadPanel(item.panel);
        searchResults.hidden = true;
        searchInput.value = item.title;
        // Scroll viewer into view (especially helpful on mobile)
        document.getElementById("openseadragon-viewer")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      });

      searchResults.appendChild(li);
    });
  }

  searchResults.hidden = false;
}

searchInput.addEventListener("input", e => runSearch(e.target.value));

// Hide results when clicking outside the search section
document.addEventListener("click", e => {
  if (!e.target.closest(".search-section")) {
    searchResults.hidden = true;
  }
});

/* -------- Initial load -------- */
/* Read panel from URL query string for QR code deep links */
const urlParams = new URLSearchParams(window.location.search);
const panelFromUrl = urlParams.get("panel");
const validPanels = ["full","p1","p2","p3","p4","p5","p6","p7","p8","p9","p10"];
if (panelFromUrl && validPanels.includes(panelFromUrl)) {
  loadPanel(panelFromUrl);
} else {
  loadPanel("full");
}

/* -------- Book promo modal -------- */
const bookCta = document.getElementById("book-cta");
const bookModal = document.getElementById("book-modal");
const bookModalClose = document.getElementById("book-modal-close");

if (bookCta && bookModal && bookModalClose) {
  bookCta.addEventListener("click", () => { window.open("https://www.amazon.com/s?k=adams+time+chart&rh=p_78%3AB0GZKB488T%2Cssx%3Arelevance", "_blank"); return;
    bookModal.hidden = false;
  });
  bookModalClose.addEventListener("click", () => {
    bookModal.hidden = true;
  });
  bookModal.addEventListener("click", e => {
    if (e.target === bookModal) bookModal.hidden = true;
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && !bookModal.hidden) {
      bookModal.hidden = true;
    }
  });
}

/* -------- Handle browser back/forward buttons for deep-link navigation -------- */
window.addEventListener("popstate", () => {
  const params = new URLSearchParams(window.location.search);
  const panel = params.get("panel");
  if (panel && PANELS[panel]) {
    loadPanel(panel);
  } else {
    loadPanel("full");
  }
});
