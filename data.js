   const speciesList = [

    // SHARKS & RAYS
    { name: "Whale Shark", cat: "Sharks", rarity: "rare", danger: 1, desc: "Gentle giant and largest fish in the sea. Filter-feeds on plankton." },
    { name: "Great White Shark", cat: "Sharks", rarity: "rare", danger: 5, desc: "Apex predator found in cool coastal waters. Known for incredible breaching." },
    { name: "Hammerhead Shark", cat: "Sharks", rarity: "rare", danger: 3, desc: "Unique head shape provides 360-degree vision. Often schools in groups." },
    { name: "Tiger Shark", cat: "Sharks", rarity: "rare", danger: 5, desc: "Large scavenger with vertical stripes. Known to eat almost anything." },
    { name: "Bull Shark", cat: "Sharks", rarity: "uncommon", danger: 5, desc: "Aggressive shark that can survive in both salt and fresh water." },
    { name: "Nurse Shark", cat: "Sharks", rarity: "common", danger: 2, desc: "Bottom-dweller often found sleeping under ledges during the day." },
    { name: "Manta Ray", cat: "Rays", rarity: "uncommon", danger: 1, desc: "Majestic filter-feeder with wingspans reaching up to 7 meters." },
    { name: "Spotted Eagle Ray", cat: "Rays", rarity: "uncommon", danger: 2, desc: "Beautifully patterned ray known for leaping out of the water." },
    { name: "Blue Spotted Ray", cat: "Rays", rarity: "common", danger: 3, desc: "Bright blue spots warn predators of its venomous tail spines." },
    { name: "Southern Stingray", cat: "Rays", rarity: "common", danger: 3, desc: "Large ray often found buried in the sand near coral reefs." },

    // REEF FISH
    { name: "Clownfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Small, colorful fish that lives symbiotically with stinging anemones." },
    { name: "Lionfish", cat: "Reef Fish", rarity: "common", danger: 4, desc: "Invasive species with venomous spines. Native to the Indo-Pacific." },
    { name: "Moray Eel", cat: "Reef Fish", rarity: "common", danger: 3, desc: "Snake-like fish that hides in reef crevices and has a powerful bite." },
    { name: "Parrotfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Colorful fish that grinds coral into sand with its beak-like teeth." },
    { name: "Emperor Angelfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Distinctive yellow and blue stripes; juveniles have circular patterns." },
    { name: "Mandarin Fish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "Small, spectacularly colored fish known for its dusk mating dance." },
    { name: "Stonefish", cat: "Reef Fish", rarity: "rare", danger: 5, desc: "Most venomous fish in the world. Perfectly camouflaged as a rock." },
    { name: "Barracuda", cat: "Predators", rarity: "common", danger: 3, desc: "Torpedo-shaped predator with silver scales and razor-sharp teeth." },
    { name: "Titan Triggerfish", cat: "Reef Fish", rarity: "uncommon", danger: 4, desc: "Highly territorial fish known to attack divers who enter its nesting zone." },
    { name: "Napoleon Wrasse", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "Massive reef fish with a distinctive bump on its forehead." },

    // CEPHALOPODS & INVERTEBRATES
    { name: "Blue-Ringed Octopus", cat: "Octopus", rarity: "rare", danger: 5, desc: "Tiny octopus with a bite that can be fatal to humans." },
    { name: "Giant Pacific Octopus", cat: "Octopus", rarity: "uncommon", danger: 2, desc: "The largest octopus species; highly intelligent and master of disguise." },
    { name: "Mimic Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "Can impersonate other sea creatures to avoid being eaten by predators." },
    { name: "Chambered Nautilus", cat: "Nautilus", rarity: "rare", danger: 1, desc: "A living fossil that has remained unchanged for millions of years." },
    { name: "Broadclub Cuttlefish", cat: "Cuttlefish", rarity: "uncommon", danger: 1, desc: "Able to change skin color and texture instantly to blend into reefs." },
    { name: "Box Jellyfish", cat: "Jellyfish", rarity: "rare", danger: 5, desc: "Contains extremely potent venom that can cause heart failure." },
    { name: "Moon Jellyfish", cat: "Jellyfish", rarity: "common", danger: 2, desc: "Translucent jellyfish with a mild sting; common in many oceans." },
    { name: "Crown of Thorns Starfish", cat: "Critters", rarity: "common", danger: 3, desc: "Large starfish covered in venomous spines; eats coral polyps." },
    { name: "Mantis Shrimp", cat: "Macro", rarity: "uncommon", danger: 3, desc: "Possesses a powerful 'punch' that can shatter glass aquarium walls." },
    { name: "Giant Clam", cat: "Critters", rarity: "uncommon", danger: 1, desc: "The largest living bivalve mollusk; can live for over 100 years." },

    // MAMMALS & REPTILES
    { name: "Green Sea Turtle", cat: "Turtles", rarity: "common", danger: 1, desc: "Large turtle that feeds mainly on seagrass and algae." },
    { name: "Hawksbill Turtle", cat: "Turtles", rarity: "uncommon", danger: 1, desc: "Named for its bird-like beak; critically endangered due to hunting." },
    { name: "Leatherback Turtle", cat: "Turtles", rarity: "rare", danger: 1, desc: "The largest sea turtle; has a rubbery shell instead of a hard one." },
    { name: "Bottlenose Dolphin", cat: "Mammals", rarity: "uncommon", danger: 2, desc: "Highly intelligent and social mammal often seen surfing bow waves." },
    { name: "Dugong", cat: "Mammals", rarity: "rare", danger: 1, desc: "Strictly marine mammal related to manatees; found in seagrass beds." },
    { name: "Humpback Whale", cat: "Mammals", rarity: "rare", danger: 1, desc: "Known for its complex songs and acrobatic breaching behavior." },
    { name: "Manatee", cat: "Mammals", rarity: "uncommon", danger: 1, desc: "Slow-moving 'sea cow' that inhabits warm coastal waters and rivers." },
    { name: "Sea Snake", cat: "Reptiles", rarity: "uncommon", danger: 5, desc: "Highly venomous but generally docile; must surface to breathe air." },

    // MACRO & UNIQUE
    { name: "Leafy Seadragon", cat: "Macro", rarity: "rare", danger: 1, desc: "A master of camouflage that looks like drifting seaweed." },
    { name: "Seahorse", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Unique fish where the male carries and hatches the eggs." },
    { name: "Ghost Pipefish", cat: "Macro", rarity: "rare", danger: 1, desc: "Elusive relative of the seahorse that blends in with sea fans." },
    { name: "Frogfish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Uses a lure to attract prey; walks on the seafloor using fins." },
    { name: "Nudibranch", cat: "Macro", rarity: "common", danger: 2, desc: "Shell-less sea slug known for its incredibly bright and varied colors." },
    { name: "Harlequin Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Beautiful shrimp that lives in pairs and feeds exclusively on starfish." },
    { name: "Pygmy Seahorse", cat: "Macro", rarity: "rare", danger: 1, desc: "One of the smallest seahorses, perfectly camouflaged on gorgonian corals." },
    { name: "Blue Tang", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Vibrant blue fish with yellow tail; made famous by the movie 'Finding Nemo'." },
    { name: "Moorish Idol", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Iconic tropical fish with a long, trailing dorsal fin." },
    { name: "Queen Triggerfish", cat: "Reef Fish", rarity: "common", danger: 3, desc: "Stunningly colored triggerfish with long tail filaments." },
    { name: "Porcupinefish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Can inflate its body with water and has spines for defense." },
    { name: "Giant Grouper", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Enormous fish that can reach 2 meters in length; inhabits deep reefs." },

    // EELS & SNAKES
    { name: "Ribbon Eel", cat: "Eels", rarity: "uncommon", danger: 2, desc: "Juveniles are black, males blue, and females yellow. Known for wide-open mouths." },
    { name: "Giant Moray", cat: "Eels", rarity: "common", danger: 3, desc: "The largest of the moray eels. Often seen with cleaner wrasses in its mouth." },
    { name: "Snowflake Moray", cat: "Eels", rarity: "common", danger: 2, desc: "Beautiful white and black patterns. Primarily eats crustaceans." },
    { name: "Garden Eel", cat: "Eels", rarity: "uncommon", danger: 1, desc: "Lives in sand burrows; looks like blades of grass swaying in the current." },
    { name: "Honeycombed Moray", cat: "Eels", rarity: "uncommon", danger: 3, desc: "Striking leopard-like spots. Can be quite large and curious." },
    { name: "Fimbriated Moray", cat: "Eels", rarity: "common", danger: 3, desc: "Yellow-headed eel with dark spots. Common in the Indo-Pacific." },
    { name: "Banded Sea Krait", cat: "Reptiles", rarity: "uncommon", danger: 5, desc: "Highly venomous sea snake with blue and black bands. Very docile." },

    // WRASSES & CLEANERS
    { name: "Blue Streak Cleaner Wrasse", cat: "Wrasses", rarity: "common", danger: 1, desc: "The reef's doctor. Sets up 'cleaning stations' to remove parasites from other fish." },
    { name: "Sixline Wrasse", cat: "Wrasses", rarity: "common", danger: 1, desc: "Small, fast-moving wrasse with six horizontal orange lines." },
    { name: "Rockmover Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Literally flips over rocks and coral chunks to find food underneath." },
    { name: "Bird Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Has a long, bird-like snout used to reach into reef cracks for prey." },
    { name: "Humphead Parrotfish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "Massive fish that travels in schools and 'bumps' coral with its head to eat." },

    // THE "WEIRD" & WONDERFUL
    { name: "Wobbegong Shark", cat: "Sharks", rarity: "uncommon", danger: 3, desc: "Carpet shark with tassel-like 'beard' for camouflage on the sea floor." },
    { name: "Flamboyant Cuttlefish", cat: "Cuttlefish", rarity: "rare", danger: 2, desc: "Tiny, brightly colored cuttlefish that 'walks' on the bottom rather than swimming." },
    { name: "Wonderpus Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "Distinctive white and rusty-brown patterns. Highly sought after by photographers." },
    { name: "Coconut Octopus", cat: "Octopus", rarity: "uncommon", danger: 1, desc: "Known for using discarded coconut shells or seashells as mobile homes." },
    { name: "Bobtail Squid", cat: "Cuttlefish", rarity: "uncommon", danger: 1, desc: "Tiny nocturnal squid with a glowing 'light organ' powered by bacteria." },
    { name: "Painted Frogfish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Can change color to match sponges perfectly. Uses a 'lure' to catch fish." },
    { name: "Hairy Frogfish", cat: "Macro", rarity: "rare", danger: 1, desc: "Covered in skin filaments that look like algae or hair." },
    { name: "Ornate Ghost Pipefish", cat: "Macro", rarity: "rare", danger: 1, desc: "Looks like a piece of ornate weed. Usually found near crinoids." },
    { name: "Robust Ghost Pipefish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Mimics a blade of seagrass perfectly. Very hard to spot." },
    { name: "Sargassum Fish", cat: "Macro", rarity: "rare", danger: 1, desc: "A type of frogfish that lives exclusively in floating Sargassum seaweed." },

    // TRIGGERFISH & FILEFISH
    { name: "Scrawled Filefish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Large, flat fish with beautiful blue 'scribble' patterns and dots." },
    { name: "Picasso Triggerfish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Named for its abstract geometric patterns. Very common in shallow lagoons." },
    { name: "Clown Triggerfish", cat: "Reef Fish", rarity: "uncommon", danger: 3, desc: "One of the most striking reef fish with large white spots on its belly." },
    { name: "Longnose Filefish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Small, orange and blue fish that feeds exclusively on Acropora coral polyps." },

    // BLENNIES & GOBIES
    { name: "Redlip Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Perches on coral and peers at divers with a grumpy 'frown'." },
    { name: "Sailfin Blenny", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Males flick their large dorsal fins up and down to attract mates." },
    { name: "Yellowhead Jawfish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Lives in sand holes. The male carries the eggs in its mouth until they hatch." },
    { name: "Banggai Cardinalfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Stunning fish with long fins and white spots. Endemic to a small area in Indonesia." },
    { name: "Pajama Cardinalfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Looks like it's wearing polka-dot pajama pants. Nocturnal hunter." },
    { name: "Fire Dartfish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Hover above burrows. They 'flick' their long white dorsal fin constantly." },
    { name: "Signal Goby", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Has two large 'eye spots' on its fins to confuse predators into thinking it's a bigger fish." },

    // CRUSTACEANS
    { name: "Peacock Mantis Shrimp", cat: "Macro", rarity: "uncommon", danger: 3, desc: "Incredible colors. Its punch is one of the fastest movements in the animal kingdom." },
    { name: "Boxer Crab", cat: "Macro", rarity: "rare", danger: 1, desc: "Carries tiny stinging anemones in its claws like pom-poms for defense." },
    { name: "Orangutan Crab", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Red, hairy crab that lives on bubble coral. Looks exactly like an ape." },
    { name: "Slipper Lobster", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Flat, shield-like lobster with no claws. Usually hides in caves during the day." },
    { name: "Sexy Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Small shrimp that waves its abdomen in the air while sitting on anemones." },
    { name: "Imperial Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Often found 'hitchhiking' on large sea cucumbers or nudibranchs." },

    // MISC REEF DWELLERS
    { name: "Trumpetfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Long, thin fish that hides by swimming vertically alongside sea fans." },
    { name: "Cornetfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Similar to trumpetfish but much longer and more silver. Can be over 1 meter long." },
    { name: "Porcupinefish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Covered in spines that lay flat until the fish inflates itself with water." },
    { name: "Longnose Hawkfish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Distinctive red and white grid pattern. Loves to perch on black coral." },
    { name: "Spotted Boxfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Square-shaped fish with white spots. Juveniles look like yellow cubes." },
    { name: "Cowfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Boxy fish with 'horns' above its eyes. Moves using a slow, helicopter-like hover." },
    { name: "Stone Triggerfish", cat: "Reef Fish", rarity: "rare", danger: 4, desc: "Large, drab-colored triggerfish that can be very aggressive when guarding eggs." },
    { name: "Razorfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Swims vertically in schools, head-down. Looks like a floating blade." },
    { name: "Sea Moth", cat: "Macro", rarity: "rare", danger: 1, desc: "Strange fish with wing-like fins that 'walks' across the sandy bottom." },
    { name: "Flying Gurnard", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Has massive, beautiful pectoral fins that look like wings when spread." },
    { name: "Electric Ray", cat: "Rays", rarity: "rare", danger: 4, desc: "Can deliver a powerful electric shock to stun prey or defend itself." },

    // BUTTERFLYFISH
    { name: "Copperband Butterflyfish", cat: "Butterflyfish", rarity: "uncommon", danger: 1, desc: "Long snout used for picking at tube worms. Has a 'false eye' spot near the tail." },
    { name: "Longnose Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Bright yellow with an exceptionally long snout for reaching into crevices." },
    { name: "Raccoon Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Nocturnal feeder with a black 'mask' over its eyes like a raccoon." },
    { name: "Threadfin Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Identified by a long filament trailing from its dorsal fin and a dark tail spot." },
    { name: "Ornate Butterflyfish", cat: "Butterflyfish", rarity: "uncommon", danger: 1, desc: "Intricate black diagonal lines on a white/yellow body. Primarily eats coral." },

    // PELAGICS & OPEN WATER
    { name: "Sailfish", cat: "Pelagic", rarity: "rare", danger: 2, desc: "The fastest fish in the ocean. Uses its massive 'sail' to herd schools of baitfish." },
    { name: "Blue Marlin", cat: "Pelagic", rarity: "rare", danger: 3, desc: "One of the largest and strongest predators in the open sea. Highly prized by fishers." },
    { name: "Yellowfin Tuna", cat: "Pelagic", rarity: "uncommon", danger: 1, desc: "Powerful, streamlined swimmer with bright yellow finlets. Often found in large schools." },
    { name: "Mahi Mahi", cat: "Pelagic", rarity: "uncommon", danger: 1, desc: "Also known as Dorado. Vibrant green and gold colors that fade instantly when caught." },
    { name: "Wahoo", cat: "Pelagic", rarity: "uncommon", danger: 3, desc: "Long, slender, and incredibly fast. Has a mouth full of razor-sharp teeth." },
    { name: "Oceanic Whitetip Shark", cat: "Sharks", rarity: "rare", danger: 5, desc: "Stocky shark with white-tipped fins. Known for being bold and curious in open water." },
    { name: "Shortfin Mako Shark", cat: "Sharks", rarity: "rare", danger: 5, desc: "The fastest shark species. Can leap high out of the water when hunting." },

    // GROUPERS & BASSLETS
    { name: "Potato Grouper", cat: "Groupers", rarity: "uncommon", danger: 2, desc: "Large, friendly grouper with potato-shaped markings. Famous at 'Cod Hole' in Australia." },
    { name: "Nassau Grouper", cat: "Groupers", rarity: "uncommon", danger: 2, desc: "Can change color to blend in with its surroundings. Endangered in many areas." },
    { name: "Harlequin Basslet", cat: "Critters", rarity: "common", danger: 1, desc: "Small, colorful fish with tiger-like stripes. Found on Caribbean rocky reefs." },
    { name: "Fairy Basslet", cat: "Critters", rarity: "common", danger: 1, desc: "Bright purple front and yellow back. Often swims upside down under ledges." },
    { name: "Jeweled Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Brown body with glowing neon-blue spots. Very shy and quick to hide." },

    // THE WEIRD & DEEP
    { name: "Flashlight Fish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Has bioluminescent patches under its eyes that it can 'blink' to communicate." },
    { name: "Pineapple Fish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Yellow with black-edged scales, looking exactly like the fruit. Has glowing chin organs." },
    { name: "Coffinfish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "A type of sea toad that can 'walk' on the bottom and puff itself up with water." },
    { name: "Tripod Fish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Stands on the seafloor using three long, thin fins that look like stilts." },
    { name: "Gulper Eel", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "Has a massive mouth that can stretch to swallow prey much larger than itself." },

    // SQUID & FRIENDS
    { name: "Caribbean Reef Squid", cat: "Squid", rarity: "common", danger: 1, desc: "Often seen in groups near the surface. Can communicate by flashing colors." },
    { name: "Humboldt Squid", cat: "Squid", rarity: "uncommon", danger: 4, desc: "Large, aggressive 'Red Devil' squid known for its flashing red and white skin." },
    { name: "Paper Nautilus", cat: "Octopus", rarity: "rare", danger: 1, desc: "A unique octopus where the female creates a thin, paper-like shell to hold eggs." },

    // SNAPPERS & GRUNTS
    { name: "Red Snapper", cat: "Snappers", rarity: "common", danger: 1, desc: "Iconic red fish found on deep reefs and shipwrecks. Sharp teeth for eating fish." },
    { name: "Blue Striped Grunt", cat: "Grunts", rarity: "common", danger: 1, desc: "Bright yellow with neon blue stripes. Named for the sound they make with their teeth." },
    { name: "Porkfish", cat: "Grunts", rarity: "common", danger: 1, desc: "Yellow and silver with two bold vertical black 'eyebrow' stripes." },
    { name: "Yellowtail Snapper", cat: "Snappers", rarity: "common", danger: 1, desc: "Distinctive yellow stripe from nose to tail. Usually found high above the reef." },

    // MORE "CRITTER" HUNTER FINDS
    { name: "Solenostomus cyanopterus", cat: "Macro", rarity: "rare", danger: 1, desc: "The Robust Ghost Pipefish. Mimics a blade of seagrass perfectly." },
    { name: "Coleman Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Lives exclusively on Fire Urchins. Beautifully patterned and always found in pairs." },
    { name: "Bumblebee Shrimp", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Tiny shrimp with black and yellow stripes. Feeds on the feet of sea stars." },
    { name: "Skeleton Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Almost transparent and looks like a tiny praying mantis. Found on sea fans." },
    { name: "Squat Lobster", cat: "Macro", rarity: "common", danger: 1, desc: "Tiny, colorful lobsters that live inside the folds of barrel sponges or crinoids." },
    { name: "Pom Pom Crab", cat: "Macro", rarity: "rare", danger: 1, desc: "Holds two tiny anemones in its claws to sting predators. Also known as Boxer Crab." },

    // MISC WONDERS
    { name: "Sunfish", cat: "Pelagic", rarity: "rare", danger: 1, desc: "Also known as Mola Mola. Enormous, flat, circular fish that loves to sunbathe." },
    { name: "Cobia", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Often mistaken for a shark due to its shape. Frequently follows rays and turtles." },
    { name: "Remora", cat: "Critters", rarity: "common", danger: 1, desc: "The 'hitchhiker' fish. Uses a suction cup on its head to stick to sharks and whales." },
    { name: "Great Barracuda", cat: "Predators", rarity: "common", danger: 3, desc: "Solitary giant barracuda. Known for its silver body and dark 'ink' blotches." },
    { name: "Spadefish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Silver, disk-shaped fish that schools in massive, shimmering vertical walls." },
    { name: "Glassy Sweeper", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Semi-transparent fish found in large schools inside dark caves and swim-throughs." },
    { name: "Squirrelfish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Big, red nocturnal fish with large eyes and sharp defensive spines on its gill covers." },
    { name: "Bigeye Scad", cat: "Schooling", rarity: "common", danger: 1, desc: "Small silver fish that forms huge 'bait balls' to confuse predators." },
    { name: "Dog Snapper", cat: "Snappers", rarity: "uncommon", danger: 3, desc: "Large snapper with a white patch under the eye. Known for being quite wary of divers." },
    { name: "Tarpon", cat: "Predators", rarity: "uncommon", danger: 1, desc: "Silver King. Can grow huge and gulp air at the surface. Found in mangroves and reefs." },
    { name: "Zebra Shark", cat: "Sharks", rarity: "uncommon", danger: 1, desc: "Juveniles have stripes, but adults have spots (Leopard Shark). Very gentle bottom-dweller." },
    { name: "Epaulette Shark", cat: "Sharks", rarity: "uncommon", danger: 1, desc: "The 'walking shark'. Can use its fins to walk across the reef during low tide." },
    { name: "Tasseled Scorpionfish", cat: "Predators", rarity: "uncommon", danger: 4, desc: "Incredible camouflage with skin flaps that look like algae. Highly venomous spines." },
    { name: "Leaf Scorpionfish", cat: "Critters", rarity: "uncommon", danger: 3, desc: "Thin fish that sways in the current like a dead leaf. Periodically sheds its skin." },
    { name: "Yellow Boxfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Bright yellow cube with black spots as a juvenile. Becomes more blue-grey as it ages." },

    // DAMSELFISH & CHROMIS
    { name: "Sergeant Major", cat: "Damsels", rarity: "common", danger: 1, desc: "Named for the five black stripes resembling military rank. Very bold and common." },
    { name: "Blue Chromis", cat: "Damsels", rarity: "common", danger: 1, desc: "Vibrant neon-blue fish that hover in large schools above coral heads." },
    { name: "Garibaldi", cat: "Damsels", rarity: "uncommon", danger: 2, desc: "Bright orange state fish of California. Very territorial and protective of its nest." },
    { name: "Bicolor Damselfish", cat: "Damsels", rarity: "common", danger: 1, desc: "Black front and white back. Known for 'chirping' sounds during territory disputes." },
    { name: "Three-Spot Damselfish", cat: "Damsels", rarity: "common", danger: 2, desc: "Juveniles are bright black with white spots; adults are very aggressive defenders." },

    // NOCTURNAL & SHADOW DWELLERS
    { name: "Soldierfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Large-eyed red fish that hides in caves by day and hunts plankton by night." },
    { name: "Splendid Toadfish", cat: "Critters", rarity: "rare", danger: 2, desc: "Endemic to Cozumel. Has vibrant stripes and 'whiskers'; lives under reef ledges." },
    { name: "Copper Sweeper", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Golden-bronze fish that schools in massive numbers inside dark wrecks and caves." },
    { name: "Blackbar Soldierfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Recognizable by the bold black bar behind the gill cover. Very light-sensitive." },

    // WRASSES (Part 2)
    { name: "Dragon Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Juveniles look like drifting seaweed; adults look like powerful, scaled dragons." },
    { name: "Yellowtail Coris", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Juveniles are bright orange with white spots; adults are dark green with blue dots." },
    { name: "Napoleon Fish", cat: "Wrasses", rarity: "rare", danger: 1, desc: "Also known as the Humphead Wrasse. Iconic blue-green giant of the Indo-Pacific." },
    { name: "Slingjaw Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Has a mouth that can shoot forward half its body length to catch prey." },

    // SHARKS & PREDATORS
    { name: "Thresher Shark", cat: "Sharks", rarity: "rare", danger: 2, desc: "Famous for a tail as long as its body, used to whip and stun schools of fish." },
    { name: "Galapagos Shark", cat: "Sharks", rarity: "rare", danger: 4, desc: "Large reef shark found in clear, deep waters around oceanic islands." },
    { name: "Silky Shark", cat: "Sharks", rarity: "uncommon", danger: 4, desc: "Named for its smooth skin. Often found near the edge of continental shelves." },
    { name: "Swordfish", cat: "Pelagic", rarity: "rare", danger: 3, desc: "Known for its long, flat bill. One of the few 'warm-blooded' fish in the sea." },
    { name: "King Mackerel", cat: "Predators", rarity: "common", danger: 2, desc: "Sleek, silver predator. Has a lateral line that drops sharply mid-body." },

    // THE "STRANGE" CATEGORY
    { name: "Stargazer", cat: "Critters", rarity: "rare", danger: 4, desc: "Buries itself in sand with eyes pointing up. Can deliver an electric shock." },
    { name: "Batfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Disc-shaped fish that follows divers. Juveniles mimic toxic flatworms." },
    { name: "Remora brachyptera", cat: "Critters", rarity: "common", danger: 1, desc: "The Spearfish Remora. Often found attached to billfish and marlins." },
    { name: "Shovelnose Ray", cat: "Rays", rarity: "uncommon", danger: 2, desc: "Looks like a cross between a shark and a ray. Expert at hiding in the sand." },

    // ANGELFISH (Part 2)
    { name: "French Angelfish", cat: "Angelfish", rarity: "common", danger: 1, desc: "Large black scales rimmed in gold. Usually seen in pairs that mate for life." },
    { name: "Gray Angelfish", cat: "Angelfish", rarity: "common", danger: 1, desc: "Uniformly gray with a white mouth. Very curious and will approach divers." },
    { name: "Regal Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "Spectacularly colored with blue, orange, and white vertical stripes." },
    { name: "Flame Angelfish", cat: "Angelfish", rarity: "uncommon", danger: 1, desc: "Glowing red-orange body with black vertical bars. A favorite for photographers." },
    { name: "Bi-color Angelfish", cat: "Angelfish", rarity: "common", danger: 1, desc: "Half yellow, half deep blue. Found in coral-rich areas of the Pacific." },

    // MACRO & CRITTERS (Part 3)
    { name: "Saron Shrimp", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Also known as the Marble Shrimp. Highly nocturnal with leaf-like appendages." },
    { name: "Candy Crab", cat: "Macro", rarity: "rare", danger: 1, desc: "Mimics the colors and polyps of the soft coral it lives on perfectly." },
    { name: "Xenia Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Tiny shrimp that blends in with pulsing Xenia coral." },
    { name: "Pederson Cleaner Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Transparent with purple spots. Waves its antennae to attract fish for cleaning." },
    { name: "Band-tail Scorpionfish", cat: "Predators", rarity: "common", danger: 4, desc: "Perfectly camouflaged. Has bright 'warning colors' on the inside of its fins." },

    // PUFFERS & BOXES
    { name: "Guineafowl Puffer", cat: "Puffers", rarity: "uncommon", danger: 2, desc: "Can be black with white spots or bright yellow. Skin contains tetrodotoxin." },
    { name: "Map Puffer", cat: "Puffers", rarity: "rare", danger: 2, desc: "Has intricate black lines that look like a topographic map." },
    { name: "Valentin's Sharpnose Puffer", cat: "Puffers", rarity: "common", danger: 2, desc: "Small puffer with black saddles. Mimicked by several other non-toxic species." },
    { name: "Longhorn Cowfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Known for the long horns protruding from its head and rear." },

    // SCHOOLING & REEF LIFE
    { name: "Smallmouth Grunt", cat: "Grunts", rarity: "common", danger: 1, desc: "Yellow body with silver horizontal lines. Often schools under ledges." },
    { name: "Midnight Parrotfish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "Large, deep-blue/black parrotfish with bright blue teeth." },
    { name: "Spinecheek Anemonefish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Maroon-colored clownfish with a sharp spine on its cheek. Very aggressive." },
    { name: "Yellowbar Angelfish", cat: "Angelfish", rarity: "uncommon", danger: 1, desc: "Large blue-purple fish with a bright yellow 'map' blotch on its side." },

    // BIZARRE & DEEP
    { name: "Sea Toad", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Found in deep waters; uses fins like feet to 'sit' on the ocean floor." },
    { name: "Vampire Squid", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Neither a squid nor octopus. Lives in the oxygen minimum zone." },
    { name: "Bigeye Thresher", cat: "Sharks", rarity: "rare", danger: 2, desc: "Thresher shark with enormous eyes specialized for hunting in low light." },
    { name: "Medusa Jellyfish", cat: "Jellyfish", rarity: "rare", danger: 4, desc: "Beautiful but dangerous; has long, trailing tentacles that pack a punch." },
    { name: "Cuttlefish Sepia", cat: "Cuttlefish", rarity: "common", danger: 1, desc: "Common European Cuttlefish. Master of polarized light vision." },
    { name: "Lumpsucker", cat: "Critters", rarity: "rare", danger: 1, desc: "Small, ball-shaped fish with a suction disk on its belly to stick to rocks." },
    { name: "Wolf Eel", cat: "Predators", rarity: "uncommon", danger: 3, desc: "Not a true eel, but a fish with a long body and powerful crushing jaws." },
    { name: "Red Irish Lord", cat: "Critters", rarity: "uncommon", danger: 1, desc: "A type of sculpin with incredible red/white camouflage patterns." },
    { name: "Sailfin Tang", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Can extend its dorsal and anal fins to double its apparent size." },
    { name: "Convict Tang", cat: "Reef Fish", rarity: "common", danger: 1, desc: "White with vertical black stripes. Travels in massive 'mob' schools to graze." },

    // SNAPPERS & BREAM
    { name: "Cubera Snapper", cat: "Snappers", rarity: "rare", danger: 3, desc: "The largest of all snappers. Has massive canine teeth used to crush lobsters." },
    { name: "Gray Snapper", cat: "Snappers", rarity: "common", danger: 2, desc: "Also known as Mangrove Snapper. Very smart and often avoids fish hooks." },
    { name: "Schoolmaster Snapper", cat: "Snappers", rarity: "common", danger: 1, desc: "Yellow fins and silver body. Usually found in large groups under docks or reefs." },
    { name: "Mutton Snapper", cat: "Snappers", rarity: "uncommon", danger: 2, desc: "Identified by a small black spot on its back and blue lines on its face." },
    { name: "Vermilion Snapper", cat: "Snappers", rarity: "uncommon", danger: 1, desc: "Bright red-to-pink fish found on deep offshore reefs." },
    { name: "Bream", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Silvery, flat-bodied fish found in estuaries and coastal reefs worldwide." },

    // GOATFISH (The Sand Detectives)
    { name: "Yellowfin Goatfish", cat: "Critters", rarity: "common", danger: 1, desc: "Uses 'whiskers' (barbels) to taste for food buried in the sand." },
    { name: "Dash-and-Dot Goatfish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Recognized by a black dash and a black dot on its tail base." },
    { name: "Manybar Goatfish", cat: "Critters", rarity: "common", danger: 1, desc: "Changes color rapidly from white to deep red depending on its mood." },

    // SURGEONFISH & TANGS (Part 2)
    { name: "Achilles Tang", cat: "Reef Fish", rarity: "rare", danger: 2, desc: "Stunning black body with a bright orange 'teardrop' near the tail." },
    { name: "Powder Blue Tang", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Iconic light blue body with yellow dorsal fin. Very popular in the Indo-Pacific." },
    { name: "Unicornfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Named for the bony 'horn' growing from its forehead. Expert at eating brown algae." },
    { name: "Sohal Tang", cat: "Reef Fish", rarity: "rare", danger: 3, desc: "Beautifully striped fish from the Red Sea. Extremely territorial and fast." },
    { name: "Yellow Tang", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Solid bright yellow. A symbol of Hawaiian coral reefs." },

    // THE "SHELLED" CREW
    { name: "Flamingo Tongue Snail", cat: "Critters", rarity: "uncommon", danger: 1, desc: "The colorful 'spots' are actually its living mantle covering its plain white shell." },
    { name: "Conch", cat: "Critters", rarity: "common", danger: 1, desc: "Large sea snail with a heavy, spiral shell and surprisingly complex eyes on stalks." },
    { name: "Triton's Trumpet", cat: "Critters", rarity: "rare", danger: 1, desc: "Massive snail that is one of the only predators of the Crown-of-Thorns starfish." },
    { name: "Cowrie", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Highly polished, egg-shaped shell. Historically used as currency in many cultures." },

    // TRIGGERFISH (Part 2)
    { name: "Black-Durgon", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Appears solid black but has neon blue and green lines visible in bright sunlight." },
    { name: "Redtail Triggerfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Dark body with a bright red edge on the tail. Prefers outer reef slopes." },
    { name: "Ocean Triggerfish", cat: "Pelagic", rarity: "uncommon", danger: 2, desc: "A large, gray triggerfish that lives in the open ocean and deep reefs." },

    // PIPEFIX & SEAHORSES (Part 2)
    { name: "Banded Pipefish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "White and black rings. Like seahorses, the males carry the eggs." },
    { name: "Schultz's Pipefish", cat: "Macro", rarity: "common", danger: 1, desc: "Very long, thin pipefish that blends in with reef rubble." },
    { name: "Pot-bellied Seahorse", cat: "Macro", rarity: "uncommon", danger: 1, desc: "One of the largest seahorse species, found in the cool waters of Australia." },

    // THE DEEP & UNUSUAL
    { name: "Oarfish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Longest bony fish in the world. Its appearance at the surface was once a 'sea serpent' omen." },
    { name: "Frilled Shark", cat: "Deep Sea", rarity: "rare", danger: 4, desc: "Living fossil with eel-like body and rows of needle-sharp, trident-shaped teeth." },
    { name: "Black Swallower", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Can swallow fish ten times its own mass thanks to a hugely distensible stomach." },
    { name: "Hatchetfish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Tiny, silver, blade-shaped fish with upward-looking eyes and glowing bellies." },

    // WRASSES (The Flashy Bunch)
    { name: "Humphead Glassfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Transparent fish that schools in caves, shimmering like glass in dive lights." },
    { name: "Bird Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Green (males) or black/white (females). Uses its 'beak' to pry prey from coral." },
    { name: "Cockerel Wrasse", cat: "Wrasses", rarity: "rare", danger: 1, desc: "Has long, flowing fins that look like a rooster's comb." },

    // CRUSTACEANS & MORE
    { name: "Arrow Crab", cat: "Macro", rarity: "common", danger: 1, desc: "Has a very long, pointed head and spindly blue legs. Often found on sponges." },
    { name: "Cleaner Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Red and white stripes. They will even clean the teeth of divers if you hold still!" },
    { name: "Zebra Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Tiny shrimp with bold black and white stripes, usually found on sea urchins." },
    { name: "Spiny Lobster", cat: "Critters", rarity: "common", danger: 2, desc: "Lacks the big claws of Maine lobsters; uses its long, prickly antennae for defense." },

    // UNIQUE PREDATORS
    { name: "Cuttlefish Metasepia", cat: "Cuttlefish", rarity: "rare", danger: 3, desc: "The Pfeffer's Flamboyant Cuttlefish. Highly toxic and walks on its tentacles." },
    { name: "Squid Alloteuthis", cat: "Squid", rarity: "uncommon", danger: 1, desc: "Small, pointed squid common in the Mediterranean and Atlantic." },
    { name: "Yellow-edged Moray", cat: "Eels", rarity: "common", danger: 3, desc: "A common moray with a distinctive yellow-green tint on its tail fins." },
    { name: "Whitespotted Bamboo Shark", cat: "Sharks", rarity: "uncommon", danger: 2, desc: "Small, bottom-dwelling shark often found in tide pools and shallow reefs." },

    // REEF GEMS
    { name: "Royal Gramma", cat: "Critters", rarity: "common", danger: 1, desc: "Perfectly split: bright purple in the front and yellow in the back." },
    { name: "Neon Goby", cat: "Critters", rarity: "common", danger: 1, desc: "Tiny black fish with a glowing electric-blue stripe. A dedicated cleaner fish." },
    { name: "Firefish Goby", cat: "Critters", rarity: "common", danger: 1, desc: "White head fading to fire-red tail. 'Flicks' its long dorsal fin to signal others." },
    { name: "Jawfish Opistognathus", cat: "Critters", rarity: "uncommon", danger: 1, desc: "The Blue-Spotted Jawfish. Expert at digging holes and 'hovering' above them." },
    { name: "Coral Beauty", cat: "Angelfish", rarity: "uncommon", danger: 1, desc: "Deep blue and orange dwarf angelfish that loves heavy coral cover." },
    { name: "Potter's Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "Endemic to Hawaii; has a stunning marble-orange and blue pattern." },
    { name: "Midas Blenny", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Golden-yellow blenny that swims like an eel. Mimics the schooling Lyretail Anthias." },
    { name: "Lawnmower Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Named for its habit of 'mowing' algae off rocks. Excellent camouflage." },
    { name: "Bicolor Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Dull blue-gray front with an orange back. Often hides in empty barnacle shells." },
    { name: "Blue-spotted Boxfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Square body with bright blue dots. Secretes a toxin from its skin when stressed." },
    { name: "Humpback Turretfish", cat: "Reef Fish", rarity: "rare", danger: 2, desc: "Deep-bodied boxfish with a massive triangular hump on its back." }, 

    // ANTHIAS (The Reef Clouds)
    { name: "Lyretail Anthias", cat: "Anthias", rarity: "common", danger: 1, desc: "Bright orange (females) or magenta (males). They form massive, shimmering schools." },
    { name: "Squarespot Anthias", cat: "Anthias", rarity: "uncommon", danger: 1, desc: "Males have a distinctive purple/pink square on their side. Found on deep drop-offs." },
    { name: "Red-Bar Anthias", cat: "Anthias", rarity: "uncommon", danger: 1, desc: "Deep reef dweller with a bold red vertical bar. Very popular with underwater photographers." },

    // DEEP SEA NIGHTMARES (Part 2)
    { name: "Giant Isopod", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "Scavenger that looks like a giant woodlouse. Can grow up to 14 inches long." },
    { name: "Blobfish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Voted 'world's ugliest animal'. In its high-pressure home, it looks like a normal fish." },
    { name: "Barreleye Fish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Has a transparent, fluid-filled dome on its head through which its green eyes look up." },
    { name: "Dumbo Octopus", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Named for the ear-like fins it uses to 'fly' through the midnight zone." },
    { name: "Bigfin Squid", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "Eerie squid with elbows and tentacles that can reach 20 feet in length." },

    // FLATFISH & SAND DWELLERS
    { name: "Peacock Flounder", cat: "Critters", rarity: "common", danger: 1, desc: "Can change its pattern to match any background. Both eyes are on the left side of its head." },
    { name: "Leopard Flounder", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Master of camouflage with small, leopard-like spots. Hard to see until it moves." },
    { name: "Crocodile Fish", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Lies perfectly still on the sand. Its eyes have 'lacy' fringes to break up their silhouette." },
    { name: "Starry Weever", cat: "Critters", rarity: "rare", danger: 4, desc: "Stays buried in sand with only eyes showing. Has venomous spines on its back." },

    // MORE SHARKS & RAYS
    { name: "Sand Tiger Shark", cat: "Sharks", rarity: "uncommon", danger: 3, desc: "Fierce-looking with protruding teeth, but generally docile. Gulp air to control buoyancy." },
    { name: "Blacktip Reef Shark", cat: "Sharks", rarity: "common", danger: 3, desc: "Shallow-water shark with black-tipped fins. Often seen by snorkelers." },
    { name: "Whitetip Reef Shark", cat: "Sharks", rarity: "common", danger: 3, desc: "The only reef shark that can pump water over its gills to sleep while lying still." },
    { name: "Basking Shark", cat: "Sharks", rarity: "rare", danger: 1, desc: "The second-largest fish. Filter-feeds on plankton with a massive, gaping mouth." },
    { name: "Mowitch", cat: "Rays", rarity: "uncommon", danger: 2, desc: "The Blotched Fantail Ray. A large, circular ray with black and grey speckles." },

    // EXOTIC WRASSES
    { name: "Dragon Wrasse Juvenile", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Drifts like a piece of dead leaf or seaweed to avoid detection." },
    { name: "Checkered Wrasse", cat: "Wrasses", rarity: "common", danger: 1, desc: "Green and pink checkered pattern on its scales. Very active on the reef top." },
    { name: "Yellow-breasted Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Stunning dark body with white spots and a bright yellow chest." },

    // BLENNIES & GOBIES (Part 2)
    { name: "Smith's Fangblenny", cat: "Critters", rarity: "common", danger: 3, desc: "Has venomous fangs in its lower jaw. Mimics the non-venomous blenny species." },
    { name: "Tailspot Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Small, peaceful blenny with a distinct black spot at the base of its tail." },
    { name: "Randall's Shrimp Goby", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Lives in a hole with a pistol shrimp. The goby acts as the 'lookout'." },
    { name: "Wheeler's Shrimp Goby", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Beautiful red-banded goby that shares a burrow with a blind snapping shrimp." },

    // MACRO & INVERTEBRATES
    { name: "Squid Sepioloidea", cat: "Cuttlefish", rarity: "rare", danger: 3, desc: "The Striped Pajama Squid. It is actually a cuttlefish and is highly toxic." },
    { name: "Crinoid Shrimp", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Lives exclusively among the arms of feather stars (crinoids) and mimics their color." },
    { name: "Broken-back Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Commonly known as the Durban Dancing Shrimp. Constantly jitters and sways." },
    { name: "Thor Amboinensis", cat: "Macro", rarity: "common", danger: 1, desc: "The 'Sexy Shrimp'. Waves its tail in a rhythmic dance to signal others." },

    // ANEMONEFISH (The Cousins)
    { name: "Pink Skunk Clownfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Has a single white stripe running down its back like a skunk." },
    { name: "Clark's Anemonefish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "The most widely distributed clownfish. Can live in many different types of anemones." },
    { name: "Tomato Clownfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Solid orange-red body with one white bar behind the eye. Very territorial." },

    // SURGEONFISH (The Sharp Ones)
    { name: "Orange-shoulder Tang", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Changes color completely as it grows. Adults have a bright orange bar on the side." },
    { name: "Blue-spine Unicornfish", cat: "Reef Fish", rarity: "uncommon", danger: 3, desc: "Lacks a horn but has two bright blue, razor-sharp 'scalpels' at the tail base." },
    { name: "Sailfin Tang Desjardini", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Intricate 'Indian Ocean' version of the sailfin with detailed spots and lines." },

    // MISC REEF DWELLERS
    { name: "Long-beak Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Yellow and white with a very long snout. Often seen in pairs on reef walls." },
    { name: "Pyramid Butterflyfish", cat: "Butterflyfish", rarity: "uncommon", danger: 1, desc: "Schools in mid-water to feed on plankton. Recognized by a white 'pyramid' shape." },
    { name: "Saddled Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Has a large black 'saddle' on its back and a blue-ish tail." },
    { name: "Golden Sweeper", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Small, copper-colored fish that shimmering in cave light. Found in huge schools." },
    { name: "Bigeye Priacanthus", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Huge eyes for nocturnal hunting. Can change from bright red to silver instantly." },
    { name: "Spinecheek Anemonefish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "The Maroon Clownfish. Dark red with white bands and a sharp spine on each cheek." },
    { name: "Yellow-spotted Trevally", cat: "Predators", rarity: "uncommon", danger: 1, desc: "Powerful silver fish with small yellow dots along its flanks." },
    { name: "Bluefin Trevally", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Identified by electric-blue fins. A fast, aggressive hunter of the reef." },
    { name: "Black-spotted Puffer", cat: "Puffers", rarity: "common", danger: 2, desc: "Looks like a 'dog-face' puffer. Slow-moving and often curious about divers." },
    { name: "Starry Puffer", cat: "Puffers", rarity: "rare", danger: 2, desc: "Giant puffer fish covered in tiny black dots like a starry night sky." },
    { name: "Pufferfish Arothron", cat: "Puffers", rarity: "common", danger: 2, desc: "The Reticulated Puffer. Has a complex maze-like pattern over its body." },
    { name: "Longspine Porcupinefish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Known for its massive eyes and the long spines that stick out when it puffs up." },
    { name: "Boxfish Ostracion", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "The Whitespotted Boxfish. Males are blue with white spots; females are brown." },
    { name: "Black-spotted Moray", cat: "Eels", rarity: "common", danger: 3, desc: "A small moray with a white body and perfectly round black spots." },
    { name: "Whitespot Moray", cat: "Eels", rarity: "uncommon", danger: 3, desc: "Dark brown eel with small white spots. Often found in shallow, rocky areas." },
    { name: "Saddleback Anemonefish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Has a white patch on its back that looks like a saddle. Often in 'carpet' anemones." },

    // TUNAS & MACKERELS (The Speedsters)
    { name: "Albacore Tuna", cat: "Pelagic", rarity: "uncommon", danger: 1, desc: "Known for exceptionally long pectoral fins. They migrate across entire oceans." },
    { name: "Skipjack Tuna", cat: "Pelagic", rarity: "common", danger: 1, desc: "Streamlined fish with dark longitudinal stripes on its lower sides." },
    { name: "Spanish Mackerel", cat: "Predators", rarity: "common", danger: 2, desc: "Fast predator with silver sides and oval green spots. Has very sharp teeth." },
    { name: "Bigeye Tuna", cat: "Pelagic", rarity: "rare", danger: 1, desc: "Large tuna with huge eyes specialized for hunting in deep, low-light waters." },

    // NUDIBRANCHS (Sea Slugs - The "Jewels" of the Sea)
    { name: "Chromodoris lochi", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Electric blue with black racing stripes. A favorite for macro photographers." },
    { name: "Spanish Dancer", cat: "Macro", rarity: "rare", danger: 2, desc: "The largest nudibranch. It swims by gracefully undulating its entire red body." },
    { name: "Chromodoris annae", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Blue and yellow with black lines. It feeds on specific species of sponges." },
    { name: "Nudibranch Phyllidia", cat: "Macro", rarity: "common", danger: 2, desc: "The 'Warty' nudibranch. Often grey, blue, and yellow with bumpy ridges." },
    { name: "Glaucus atlanticus", cat: "Macro", rarity: "rare", danger: 4, desc: "The Blue Dragon. Floats upside down and eats venomous Man-o-War jellyfish." },

    // SEA BASS & HAMLETS
    { name: "Barred Hamlet", cat: "Critters", rarity: "common", danger: 1, desc: "Small, shy fish with vertical brown bars. Found mostly in the Caribbean." },
    { name: "Indigo Hamlet", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Stunning blue and white striped fish. Very territorial over its patch of reef." },
    { name: "Shy Hamlet", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Dark body with a yellow tail and blue face. Lives up to its name by hiding quickly." },
    { name: "Black Sea Bass", cat: "Predators", rarity: "common", danger: 2, desc: "Stout fish that can change sex from female to male as it grows." },

    // CRUSTACEANS (Part 4)
    { name: "Teddy Bear Crab", cat: "Macro", rarity: "rare", danger: 1, desc: "Covered in thick hair that traps silt and algae for perfect camouflage." },
    { name: "Anemone Shrimp", cat: "Macro", rarity: "common", danger: 1, desc: "Transparent shrimp that lives safely among stinging anemone tentacles." },
    { name: "Squilla mantis", cat: "Macro", rarity: "uncommon", danger: 3, desc: "The Mediterranean Mantis Shrimp. Known for its 'spearing' appendages." },
    { name: "Porcelain Crab", cat: "Macro", rarity: "common", danger: 1, desc: "Not a true crab. It has long 'fans' it uses to filter plankton from the water." },
    { name: "Wire Coral Shrimp", cat: "Macro", rarity: "rare", danger: 1, desc: "Incredibly thin and long; lives exclusively on wire corals." },

    // DAMSELFISH (Part 3)
    { name: "Blue Devil Damselfish", cat: "Damsels", rarity: "common", danger: 1, desc: "Vibrant neon-blue. Males have an orange tail during mating season." },
    { name: "Jewel Damselfish", cat: "Damsels", rarity: "uncommon", danger: 1, desc: "Dark blue/black with glowing neon-blue spots that look like stars." },
    { name: "Staghorn Damselfish", cat: "Damsels", rarity: "common", danger: 1, desc: "Lives exclusively among the branches of staghorn coral." },
    { name: "Humbug Dascyllus", cat: "Damsels", rarity: "common", danger: 1, desc: "Bold black and white vertical stripes. Very hardy and common in the Pacific." },

    // WRASSES (The Deep & Rare)
    { name: "Eight-line Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Red body with eight thin white horizontal lines. Very shy." },
    { name: "Mystery Wrasse", cat: "Wrasses", rarity: "rare", danger: 1, desc: "Purple with yellow tail and a 'fake eye' on the tail base. Deep reef specialist." },
    { name: "Flashback Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Named for the bright, glowing stripe along its back that 'flashes' in light." },

    // THE DEEP SEA (The Alien Zone)
    { name: "Anglerfish Lophius", cat: "Deep Sea", rarity: "rare", danger: 3, desc: "The Monkfish. A bottom-dwelling angler with a massive, toothy mouth." },
    { name: "Sloane's Viperfish", cat: "Deep Sea", rarity: "rare", danger: 3, desc: "Has teeth so large they don't fit inside its mouth; they overlap the jaws." },
    { name: "Pelican Eel", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "Has a mouth that opens like a giant pouch, much like a pelican's beak." },

    // RAYS & SKATES
    { name: "Cownose Ray", cat: "Rays", rarity: "uncommon", danger: 2, desc: "Often seen migrating in massive groups of thousands. Head is shaped like a cow's nose." },
    { name: "Thornback Ray", cat: "Rays", rarity: "common", danger: 2, desc: "Covered in small 'thorns' for protection. Perfectly camouflaged in mud and sand." },
    { name: "Yellow Stingray", cat: "Rays", rarity: "common", danger: 3, desc: "Small round ray with a beautiful yellow-and-brown reticulated pattern." },

    // MISC REEF FISH
    { name: "Bigeye Squirrelfish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Classic red nocturnal fish with a sharp spine on the gill cover." },
    { name: "Longspine Squirrelfish", cat: "Reef Fish", rarity: "common", danger: 2, desc: "Identified by a very long white spine on its dorsal fin." },
    { name: "Sabre Squirrelfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "The largest squirrelfish. Has a very long, sharp 'sabre' spine on its cheek." },
    { name: "Yellow-edged Lyretail", cat: "Groupers", rarity: "uncommon", danger: 2, desc: "A stunning reef grouper with a moon-shaped tail edged in bright yellow." },
    { name: "Graysby", cat: "Groupers", rarity: "common", danger: 1, desc: "A small, spotted grouper common in the Caribbean. Often found in holes." },
    { name: "Coney", cat: "Groupers", rarity: "common", danger: 1, desc: "Can be red, bicolor, or bright yellow. Has two small black spots on the lower lip." },
    { name: "Peacock Hind", cat: "Groupers", rarity: "uncommon", danger: 2, desc: "Dark brown/red with bright blue spots. A very beautiful mid-sized hunter." },
    { name: "Scuttlefish", cat: "Cuttlefish", rarity: "common", danger: 1, desc: "A fast-moving cuttlefish found in sandy lagoons." },
    { name: "Bobtail Squid Euprymna", cat: "Cuttlefish", rarity: "rare", danger: 1, desc: "The Berry's Bobtail Squid. Often buries itself in sand during the day." },
    { name: "Long-arm Octopus", cat: "Octopus", rarity: "uncommon", danger: 1, desc: "Has incredibly long, thin arms. Mimics the movement of sea snakes." },
    { name: "Pygmy Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "Full-grown at the size of a golf ball. Hides in empty shells or bottles." },
    { name: "White-spotted Filefish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Can change from brown to bright orange with large white spots instantly." },
    { name: "Honeycomb Cowfish", cat: "Reef Fish", rarity: "uncommon", danger: 2, desc: "Covered in a perfect hexagonal honeycomb pattern." },
    { name: "Reef Lizardfish", cat: "Predators", rarity: "common", danger: 2, desc: "Sits on the bottom propped up on its fins. Has a mouth full of needle teeth." },
    { name: "Sand Diver", cat: "Predators", rarity: "common", danger: 2, desc: "A type of lizardfish that dives head-first into the sand to hide." },
    { name: "Goatfish Parupeneus", cat: "Critters", rarity: "common", danger: 1, desc: "The Forsskål's Goatfish. Has a bold black stripe from eye to tail." },
    { name: "Doublebar Goatfish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Named for the two thick black bars on its sides. Moves in small groups." },
    { name: "Barbet", cat: "Reef Fish", rarity: "common", danger: 1, desc: "The Black-bar Drum. High-bodied fish that makes a 'drumming' sound." },
    { name: "Jackknifefish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Has an incredibly long, pointed dorsal fin that looks like a blade." },

    // PARROTFISH (The Sand Makers)
    { name: "Stoplight Parrotfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Named for the bright yellow spot on its tail base (the 'light')." },
    { name: "Queen Parrotfish", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Beautiful blue-green body with pink and orange markings around the mouth." },
    { name: "Princess Parrotfish", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Smaller parrotfish with two pink/orange stripes along the sides." },
    { name: "Blue Parrotfish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "Solid bright blue with a large 'bulb' on its forehead as it matures." },
    { name: "Rainbow Parrotfish", cat: "Reef Fish", rarity: "rare", danger: 1, desc: "The largest parrotfish in the Atlantic, reaching up to 1.2 meters long." },

    // JELLYFISH & DRIFTERS
    { name: "Portuguese Man o' War", cat: "Jellyfish", rarity: "uncommon", danger: 5, desc: "Not a true jellyfish, but a colony of organisms. Has a painful, long-lasting sting." },
    { name: "Cannonball Jelly", cat: "Jellyfish", rarity: "common", danger: 1, desc: "Firm, bell-shaped jelly that is a favorite food for Leatherback turtles." },
    { name: "Fried Egg Jellyfish", cat: "Jellyfish", rarity: "uncommon", danger: 1, desc: "Looks exactly like a cracked egg. Often provides shelter for small fish." },
    { name: "Lion's Mane Jellyfish", cat: "Jellyfish", rarity: "rare", danger: 4, desc: "The largest known species of jellyfish. Its tentacles can reach 30 meters." },
    { name: "Irukandji Jellyfish", cat: "Jellyfish", rarity: "rare", danger: 5, desc: "Smaller than a fingernail but possesses one of the world's most potent toxins." },

    // SEA STARS & ECHINODERMS
    { name: "Chocolate Chip Sea Star", cat: "Critters", rarity: "common", danger: 1, desc: "Named for the dark brown 'horns' on its back that look like chocolate chips." },
    { name: "Blue Sea Star", cat: "Critters", rarity: "common", danger: 1, desc: "Electric blue star found across the Indo-Pacific. Feeds on algae and detritus." },
    { name: "Sunflower Sea Star", cat: "Critters", rarity: "rare", danger: 1, desc: "Can have up to 24 arms and move surprisingly fast across the seafloor." },
    { name: "Granulated Sea Star", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Commonly known as the Doughnut Sea Star. Has a thick, doughy texture." },
    { name: "Long-spined Sea Urchin", cat: "Critters", rarity: "common", danger: 3, desc: "Crucial for reef health. Its long spines are needle-sharp and venomous." },
    { name: "Fire Urchin", cat: "Critters", rarity: "rare", danger: 4, desc: "Brightly colored warning signs! Its sting is exceptionally painful." },

    // WRASSES (The Rainbow Crew)
    { name: "Bluehead Wrasse", cat: "Wrasses", rarity: "common", danger: 1, desc: "The 'supermale' has a bright blue head and two black bars behind the gill." },
    { name: "Yellowhead Wrasse", cat: "Wrasses", rarity: "common", danger: 1, desc: "Juveniles are all yellow; adults develop a dark body with a yellow head." },
    { name: "Puddingwife Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "The largest wrasse in the Caribbean. Very curious and follows divers." },
    { name: "Spanish Hogfish", cat: "Wrasses", rarity: "common", danger: 1, desc: "Purple top and yellow bottom. Often acts as a cleaner fish when young." },

    // ANGLERFISH & FROGFISH (Part 2)
    { name: "Striated Frogfish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Covered in skin filaments that look like algae. A master of ambush." },
    { name: "Warty Frogfish", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Looks exactly like a toxic sea sponge. Comes in white, yellow, and pink." },
    { name: "Clown Frogfish", cat: "Macro", rarity: "rare", danger: 1, desc: "Yellow with orange-ringed spots. One of the most beautiful macro finds." },

    // BLENNIES (The Reef Comedians)
    { name: "Blenniella periophthalmus", cat: "Critters", rarity: "common", danger: 1, desc: "The Blue-dashed Rockskipper. Often found in tide pools jumping between rocks." },
    { name: "Starry Blenny", cat: "Critters", rarity: "common", danger: 1, desc: "Dark body with white spots. Highly territorial over its algae patch." },
    { name: "Linear Blenny", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Small, slender blenny with a bright yellow dorsal fin." },

    // MORE SHARKS & PREDATORS
    { name: "Leopard Shark", cat: "Sharks", rarity: "uncommon", danger: 1, desc: "Found in sandy bays. Has beautiful dark spots and is harmless to humans." },
    { name: "Port Jackson Shark", cat: "Sharks", rarity: "uncommon", danger: 2, desc: "Known for its unique harness-like markings and screw-shaped egg cases." },
    { name: "Brownbanded Bamboo Shark", cat: "Sharks", rarity: "common", danger: 2, desc: "A slender shark that uses its fins to 'walk' along the reef bottom." },
    { name: "Needlefish", cat: "Predators", rarity: "common", danger: 3, desc: "Surface dwellers that can leap out of the water at high speeds." },

    // UNIQUE CRITTERS
    { name: "Sea Cucumber", cat: "Critters", rarity: "common", danger: 1, desc: "The vacuum cleaner of the ocean. Breathes through its anus." },
    { name: "Medusa Worm", cat: "Critters", rarity: "uncommon", danger: 1, desc: "A sea cucumber with long, sticky tentacles used to gather food." },
    { name: "Giant Barrel Sponge", cat: "Critters", rarity: "uncommon", danger: 1, desc: "The 'Redwood of the Reef'. Can live for over 2,000 years." },
    { name: "Stalked Jellyfish", cat: "Jellyfish", rarity: "rare", danger: 1, desc: "Unusual jellyfish that stays attached to seagrass or rocks." },

    // DAMSELFISH & CHROMIS (Part 4)
    { name: "Blacktail Dascyllus", cat: "Damsels", rarity: "common", danger: 1, desc: "Similar to the Humbug but with a solid black tail. Lives in coral heads." },
    { name: "Green Chromis", cat: "Damsels", rarity: "common", danger: 1, desc: "Pale green-blue fish that school in hundreds above Acropora corals." },
    { name: "Azure Damselfish", cat: "Damsels", rarity: "common", danger: 1, desc: "Half blue and half yellow. Very popular in aquarium trade." },

    // EELS (The Crevice Seekers)
    { name: "White-margined Moray", cat: "Eels", rarity: "uncommon", danger: 3, desc: "A dark moray with a stark white edge along its entire dorsal fin." },
    { name: "Chain Moray", cat: "Eels", rarity: "uncommon", danger: 2, desc: "Black with yellow 'chain' markings. Specializes in eating crabs." },
    { name: "Spotted Moray", cat: "Eels", rarity: "common", danger: 3, desc: "Densely covered in small black spots. Common in Atlantic reefs." },

    // ANGELFISH (The Final Touches)
    { name: "King Angelfish", cat: "Angelfish", rarity: "uncommon", danger: 1, desc: "Large blue angelfish with a vertical white bar. Found in the Pacific." },
    { name: "Semicircle Angelfish", cat: "Angelfish", rarity: "common", danger: 1, desc: "Juveniles have beautiful blue and white circular patterns; adults are olive green." },
    { name: "Keyhole Angelfish", cat: "Angelfish", rarity: "common", danger: 1, desc: "Solid black with a small white 'keyhole' spot on its side." },

    // PELAGICS & EXOTICS
    { name: "Pilot Fish", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Famous for following sharks and rays to eat parasites and leftovers." },
    { name: "Tripletail", cat: "Predators", rarity: "rare", danger: 1, desc: "Floats on its side near debris to look like a dead leaf, then strikes." },
    { name: "Batfish Platax", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "The Teira Batfish. Has a very tall, compressed body and is very friendly." },
    { name: "Archerfish", cat: "Predators", rarity: "uncommon", danger: 1, desc: "Spits a jet of water at insects on overhanging branches to knock them into the water." },
    { name: "Flying Fish", cat: "Pelagic", rarity: "uncommon", danger: 1, desc: "Uses wing-like fins to glide over the water surface for hundreds of feet." },
    { name: "Argonaut Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "The Paper Nautilus. The female secretes a shell-like case for her eggs." },
    { name: "Blanket Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "Female has a massive, rainbow-colored cape; the male is 10,000 times smaller." }, 

    // MANGROVE & ESTUARY LURKERS
    { name: "Mudskipper", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Amphibious fish that uses its fins to walk on land and can breathe through its skin." },
    { name: "Archerfish Toxotes", cat: "Predators", rarity: "uncommon", danger: 1, desc: "Famous for 'shooting' down land-based insects with a precisely aimed jet of water." },
    { name: "Scatophagus argus", cat: "Reef Fish", rarity: "common", danger: 2, desc: "The Spotted Scat. Hardy fish found in estuaries; has mildly venomous dorsal spines." },
    { name: "Monodactylus argenteus", cat: "Reef Fish", rarity: "common", danger: 1, desc: "The Silver Moony. Disc-shaped fish that shimmers brilliantly in mangrove roots." },

    // SEA BASS & GROUPERS (The Final Heavyweights)
    { name: "Goliath Grouper", cat: "Predators", rarity: "rare", danger: 2, desc: "Can grow to the size of a small car. Known to produce a loud booming sound to warn off intruders." },
    { name: "Black Grouper", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Large, olive-grey predator. Has a squared-off tail and blocky patterns." },
    { name: "Tiger Grouper", cat: "Predators", rarity: "uncommon", danger: 2, desc: "Named for the dramatic diagonal stripes on its sides. Master of ambush." },
    { name: "Kelpfisn", cat: "Critters", rarity: "common", danger: 1, desc: "The Giant Kelpfish. Mimics a blade of kelp perfectly in color and movement." },

    // COLD WATER & ARCTIC WONDERS
    { name: "Greenland Shark", cat: "Sharks", rarity: "rare", danger: 3, desc: "The longest-living vertebrate on Earth, capable of living for over 400 years." },
    { name: "Arctic Char", cat: "Cold Water", rarity: "uncommon", danger: 1, desc: "Found in sub-arctic waters. Known for its beautiful red belly during spawning." },
    { name: "Lumpfish", cat: "Critters", rarity: "common", danger: 1, desc: "Ball-shaped fish with a suction disk on its belly to cling to rocks in heavy surges." },
    { name: "Atlantic Wolffish", cat: "Predators", rarity: "rare", danger: 3, desc: "Has massive 'wolf-like' teeth to crush sea urchins and crabs in cold northern seas." },

    // THE MIDNIGHT ZONE (Part 3)
    { name: "Stoplight Loosejaw", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "Produces red light to see prey—a color most deep-sea creatures cannot detect." },
    { name: "Footballfish", cat: "Deep Sea", rarity: "rare", danger: 2, desc: "A species of globose deep-sea anglerfish with a complex, branching lure." },
    { name: "Black Dragonfish", cat: "Deep Sea", rarity: "rare", danger: 3, desc: "Long, eel-like body with needle teeth. Females have a long chin barbel." },
    { name: "Sea Angel", cat: "Deep Sea", rarity: "uncommon", danger: 1, desc: "Transparent, predatory sea snail that 'flies' through the water using wing-like parapodia." },

    // WRASSES (The Specialist List)
    { name: "Cleaner Hogfish", cat: "Wrasses", rarity: "common", danger: 1, desc: "Bright yellow and red. A dedicated cleaner that sets up stations on Caribbean reefs." },
    { name: "Spotfin Hogfish", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Deep-water hogfish with a signature black spot on the dorsal fin." },
    { name: "Talamanca Wrasse", cat: "Wrasses", rarity: "rare", danger: 1, desc: "Deep reef specialist with vibrant blue and yellow horizontal bands." },

    // UNIQUE INVERTEBRATES (Part 5)
    { name: "Harlequin Ghost Pipefish", cat: "Macro", rarity: "rare", danger: 1, desc: "Ornate and colorful. Blends in perfectly with crinoids and soft corals." },
    { name: "Squat Lobster Galathea", cat: "Macro", rarity: "uncommon", danger: 1, desc: "Brightly colored with long claws; often lives inside the protection of sponges." },
    { name: "Boxing Crab Lybia", cat: "Macro", rarity: "rare", danger: 1, desc: "Different from the Pom-Pom; this species is found primarily in the Indo-Pacific." },
    { name: "Spider Crab", cat: "Critters", rarity: "common", danger: 2, desc: "Has long, spindly legs and often 'decorates' its shell with algae to hide." },

    // RAYS & SKATES (Final Additions)
    { name: "Bowmouth Guitarfish", cat: "Rays", rarity: "rare", danger: 2, desc: "Looks like a shark in the back and a ray in the front. Has thick, bony ridges for protection." },
    { name: "Electric Ray Torpedo", cat: "Rays", rarity: "uncommon", danger: 4, desc: "The Marble Electric Ray. Capable of producing 200 volts of electricity." },
    { name: "Common Skate", cat: "Rays", rarity: "rare", danger: 2, desc: "The largest skate in the world, now critically endangered in many areas." },

    // BLENNIES & GOBIES (The Final Guard)
    { name: "Yasha Goby", cat: "Critters", rarity: "rare", danger: 1, desc: "Stunning red and white stripes with a high dorsal fin. Shares a burrow with a shrimp." },
    { name: "Greenbanded Goby", cat: "Critters", rarity: "common", danger: 1, desc: "Tiny, beautiful goby with neon green vertical bands." },
    { name: "Redhead Goby", cat: "Critters", rarity: "common", danger: 1, desc: "Transparent body with a bright red head. Often found on brain corals." },

    // SNAPPERS & PORGIES
    { name: "Jolthead Porgy", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Silvery fish with blue highlights. Known for its powerful crushing jaws." },
    { name: "Saucereye Porgy", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Identified by the yellow-gold ring around its eye and brassy spots." },
    { name: "Lane Snapper", cat: "Snappers", rarity: "common", danger: 1, desc: "Pinkish-red with yellow stripes and a single black 'fingerprint' spot on its side." },

    // ODDITIES
    { name: "Remora remora", cat: "Critters", rarity: "common", danger: 1, desc: "The common shark-sucker. Uses its modified dorsal fin as a suction cup." },
    { name: "Cobblerfish", cat: "Reef Fish", rarity: "uncommon", danger: 3, desc: "Also known as the Bleeker's Threadfin. Has long, trailing filaments from its fins." },
    { name: "Sea Raven", cat: "Critters", rarity: "uncommon", danger: 1, desc: "A strange-looking sculpin with ragged skin flaps that look like seaweed." },

    // DAMSELS & CHROMIS (Part 5)
    { name: "Talamanca Damselfish", cat: "Damsels", rarity: "uncommon", danger: 1, desc: "Dark body with a bright yellow spot on the back. Found in the Pacific." },
    { name: "White-tail Dascyllus", cat: "Damsels", rarity: "common", danger: 1, desc: "Aggressive little fish that lives in large groups within staghorn coral." },
    { name: "Spalonis Chromis", cat: "Damsels", rarity: "uncommon", danger: 1, desc: "A deep-water blue chromis found on outer reef walls." },

    // MORE CEPHALOPODS
    { name: "Wunderpus photogenicus", cat: "Octopus", rarity: "rare", danger: 1, desc: "Highly intelligent octopus with a spectacular pattern of white spots and bands." },
    { name: "Starry Night Octopus", cat: "Octopus", rarity: "rare", danger: 1, desc: "A deep purple octopus covered in tiny white dots that look like stars." },
    { name: "Bigfin Reef Squid", cat: "Squid", rarity: "common", danger: 1, desc: "Has a large fin that wraps around its entire body, making it look like a cuttlefish." },

    // PELAGIC PREDATORS
    { name: "Shortbill Spearfish", cat: "Pelagic", rarity: "rare", danger: 3, desc: "A member of the marlin family with a much shorter bill. Very fast hunter." },
    { name: "Opah", cat: "Pelagic", rarity: "rare", danger: 1, desc: "The Moonfish. The first known fully warm-blooded fish." },
    { name: "Great Barracuda Juvenile", cat: "Predators", rarity: "common", danger: 2, desc: "Hides in seagrass and mangroves, perfectly camouflaged by dark vertical bars." },

    // THE FINAL REEF FISH
    { name: "Foureye Butterflyfish", cat: "Butterflyfish", rarity: "common", danger: 1, desc: "Has a huge black spot near the tail to trick predators into attacking the wrong end." },
    { name: "Bandit Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "High-contrast black and white angelfish from Hawaii. Very rare in the wild." },
    { name: "Clarion Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "Bright orange with blue trim. Found almost exclusively around the Revillagigedo Islands." },
    { name: "Peppermint Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "One of the most expensive and rare fish in the world, living in very deep water." },
    { name: "Harlequin Sweetlips", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Juveniles dance rhythmically and look like toxic flatworms to avoid being eaten." },
    { name: "Spotted Sweetlips", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Large, thick-lipped fish covered in small black dots as it matures." },

    // THE "HOLY GRAILS" (Rare Reef Gems)
    { name: "Conspicuous Angelfish", cat: "Angelfish", rarity: "rare", danger: 1, desc: "A stunning, subdued blue-grey fish with a glowing yellow 'mask'. Highly prized." },
    { name: "Gem Tang", cat: "Reef Fish", rarity: "rare", danger: 2, desc: "A jet-black fish covered in white 'diamonds'. One of the rarest tangs in the world." },
    { name: "Psychadelic Frogfish", cat: "Macro", rarity: "rare", danger: 1, desc: "Discovered recently in Indonesia; has fingerprint-like stripes and 'hops' along the bottom." },

    // DEEP SEA GIANTS
    { name: "Giant Squid", cat: "Deep Sea", rarity: "rare", danger: 4, desc: "The legendary Architeuthis. Can grow up to 13 meters and has eyes the size of dinner plates." },
    { name: "Colossal Squid", cat: "Deep Sea", rarity: "rare", danger: 5, desc: "Even heavier than the Giant Squid; has rotating hooks on its tentacles for catching prey." },
    { name: "Megamouth Shark", cat: "Sharks", rarity: "rare", danger: 1, desc: "A prehistoric-looking filter feeder that lives in the deep and migrates to the surface at night." },

    // VENOMOUS & DANGEROUS (Final Additions)
    { name: "Stargazer Astroscopus", cat: "Critters", rarity: "uncommon", danger: 5, desc: "The Northern Stargazer. Can deliver an electric shock and has venomous shoulder spines." },
    { name: "Reef Stonefish", cat: "Predators", rarity: "rare", danger: 5, desc: "The most venomous fish in the world. Its dorsal spines can penetrate a boot sole." },
    { name: "Blue-ringed Octopus Hapalochlaena", cat: "Octopus", rarity: "rare", danger: 5, desc: "Small but deadly; its venom contains tetrodotoxin with no known antivenom." },

    // THE SEAHORSE RELATIVES
    { name: "Ruby Seadragon", cat: "Macro", rarity: "rare", danger: 1, desc: "Discovered in 2015; it is solid red and lives in much deeper water than other seadragons." },
    { name: "Big-belly Seahorse", cat: "Macro", rarity: "uncommon", danger: 1, desc: "A large, pot-bellied seahorse from New Zealand that can change color from white to purple." },
    { name: "Pipefish Syngnathus", cat: "Macro", rarity: "common", danger: 1, desc: "The Greater Pipefish. Mimics blades of seagrass perfectly in coastal meadows." },

    // PELAGIC LEGENDS
    { name: "Black Marlin", cat: "Pelagic", rarity: "rare", danger: 3, desc: "One of the fastest fish in the ocean; known for having rigid pectoral fins that cannot fold." },
    { name: "Swordfish Xiphias", cat: "Pelagic", rarity: "uncommon", danger: 3, desc: "A solitary wanderer. It uses its bill to slash and stun prey rather than spear it." },
    { name: "Atlantic Bluefin Tuna", cat: "Pelagic", rarity: "rare", danger: 1, desc: "A massive, warm-blooded torpedo of muscle. Can weigh over 600kg." },

    // ODD REEF INHABITANTS
    { name: "Flashlight Fish Anomalops", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Uses bioluminescent bacteria in a pouch under its eye to communicate in the dark." },
    { name: "Pineapple Fish Cleidopus", cat: "Critters", rarity: "rare", danger: 2, desc: "Has yellow, armor-like scales edged in black. Glows green from its jaw." },
    { name: "Seamoth Eurypegasus", cat: "Macro", rarity: "rare", danger: 1, desc: "A strange, flattened fish with wing-like fins that crawls across the sand." },

    // MORE CRUSTACEANS & INVERTS
    { name: "Japanese Spider Crab", cat: "Critters", rarity: "rare", danger: 3, desc: "The largest leg span of any arthropod, reaching up to 3.8 meters from claw to claw." },
    { name: "Yeti Crab", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "Found near hydrothermal vents; has 'hairy' claws that grow bacteria for it to eat." },
    { name: "Pom-pom Anemone", cat: "Critters", rarity: "uncommon", danger: 1, desc: "A deep-sea anemone that looks like a cheerleader's pom-pom." },

    // COLORFUL REEF ADDITIONS
    { name: "Candy Basslet", cat: "Critters", rarity: "rare", danger: 1, desc: "A tiny, deep-reef gem with vibrant orange, lavender, and red stripes." },
    { name: "Swissguard Basslet", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Named for the uniforms of the Vatican guards. Lives deep in Caribbean crevices." },
    { name: "Cave Basslet", cat: "Critters", rarity: "uncommon", danger: 1, desc: "Solid red with a white stripe. Often found swimming upside down in dark caves." },

    // WRASSES (The Finale)
    { name: "Splendid Cirrhilabrus", cat: "Wrasses", rarity: "rare", danger: 1, desc: "The Splendid Fairy Wrasse. One of the most colorful fish in the Indo-Pacific." },
    { name: "Exquisite Wrasse", cat: "Wrasses", rarity: "uncommon", danger: 1, desc: "Pattern changes based on its home reef, ranging from green to deep purple." },
    { name: "Laboute's Fairy Wrasse", cat: "Wrasses", rarity: "rare", danger: 1, desc: "Has a unique 'pajama' stripe pattern that glows under blue light." },

    // FINAL SHARKS
    { name: "Cookiecutter Shark", cat: "Sharks", rarity: "rare", danger: 4, desc: "A small shark that takes perfect circular 'cookie' bites out of larger whales and fish." },
    { name: "Salmon Shark", cat: "Sharks", rarity: "uncommon", danger: 4, desc: "A relative of the Great White that lives in the cold North Pacific." },
    { name: "Horn Shark", cat: "Sharks", rarity: "common", danger: 2, desc: "A small, sluggish shark with spines on its dorsal fins and pig-like nostrils." },

    // THE MISCELLANEOUS 500
    { name: "Flying Gurnard Dactylopterus", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Large, wing-like pectoral fins with bright blue edges. Walks on the bottom." },
    { name: "Batfish Ogcocephalus", cat: "Critters", rarity: "uncommon", danger: 1, desc: "The Red-lipped Batfish. Famous for its bright red 'lipstick' and poor swimming." },
    { name: "Sea Snake Laticauda", cat: "Reptiles", rarity: "uncommon", danger: 5, desc: "The Yellow-lipped Sea Krait. Highly venomous but very docile toward divers." },
    { name: "Green Moray Eel", cat: "Eels", rarity: "common", danger: 3, desc: "Actually blue, but covered in yellow mucus that makes it look vibrant green." },
    { name: "Whitespotted Boxfish Juvenile", cat: "Reef Fish", rarity: "common", danger: 1, desc: "Looks like a tiny yellow cube with black spots. Mimics toxic species." },
    { name: "Harlequin Shrimp Hymenocera", cat: "Macro", rarity: "rare", danger: 1, desc: "Incredible white and pink patterns. They only eat starfish, usually in pairs." },
    { name: "Vampire Squid Vampyroteuthis", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "A relic from the past with glowing 'eyes' on its back to confuse predators." },
    { name: "Nautilus pompilius", cat: "Nautilus", rarity: "rare", danger: 1, desc: "The Emperor Nautilus. The largest and most famous species of Nautilus." },
    { name: "Pacific Sailfish", cat: "Pelagic", rarity: "rare", danger: 2, desc: "The Indo-Pacific variety. Known for even larger sails and darker colors." },
    { name: "Atlantic Sailfish", cat: "Pelagic", rarity: "uncommon", danger: 2, desc: "A slightly smaller sailfish common in the Gulf Stream and Caribbean." },
    { name: "Spotted Eagle Ray Aetobatus", cat: "Rays", rarity: "uncommon", danger: 2, desc: "The Bonnetray. Often travels in large squadrons across open water." },
    { name: "Giant Manta Mobula", cat: "Rays", rarity: "rare", danger: 1, desc: "The Oceanic Manta Ray. Can reach spans of over 20 feet (7 meters)." },
    { name: "Zebra Moray Gymnomuraena", cat: "Eels", rarity: "uncommon", danger: 1, desc: "Black and white striped eel. Unlike other morays, it has blunt teeth for crushing shells." },
    { name: "Dragon Moray Enchelycore", cat: "Eels", rarity: "rare", danger: 3, desc: "The most spectacular moray. Has orange and white spots and 'horns' on its head." },
    { name: "Banggai Cardinalfish Pterapogon", cat: "Reef Fish", rarity: "uncommon", danger: 1, desc: "Endemic to the Banggai Islands. An iconic, silver and black striped fish." },
    { name: "Mandarin Dragonet", cat: "Critters", rarity: "rare", danger: 1, desc: "One of the only animals in the world to produce its own blue pigment." },
    { name: "Psychedelic Mandarin", cat: "Critters", rarity: "rare", danger: 1, desc: "A variation of the Mandarin Dragonet with even more complex swirling patterns." },
    { name: "Gnomefish", cat: "Deep Sea", rarity: "rare", danger: 1, desc: "A deep-water fish with huge eyes and a glowing belly. Rarely seen by humans." },
    { name: "Sarcastic Fringehead", cat: "Critters", rarity: "uncommon", danger: 3, desc: "Highly territorial fish that opens its massive, colorful mouth to scare off rivals." },
    { name: "Common Dolphin", cat: "Mammals", rarity: "uncommon", danger: 1, desc: "Fast, social mammals often seen in pods of hundreds in the open ocean." }
];