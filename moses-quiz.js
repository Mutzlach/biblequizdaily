// MOSES QUIZ - 30 Questions
// Target: All Ages | Difficulty: Mix (10 Easy, 15 Medium, 5 Hard)
// Format: Multiple Choice, True/False Mix

const mosesQuestions = [
    // ==================== EASY QUESTIONS (1-10) ====================
    {
        question: "Why did Moses' mother hide him as a baby?",
        options: ["He was sick", "Pharaoh ordered all Hebrew baby boys to be killed", "She wanted to protect him from wild animals", "He was crying too much"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 1:22",
        explanation: "Pharaoh commanded that every Hebrew baby boy be thrown into the Nile River."
    },
    {
        question: "Where did Moses' mother hide him?",
        options: ["In a cave", "In a basket among the reeds", "In a barn", "Under the house"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 2:3",
        explanation: "Moses' mother placed him in a papyrus basket and put it among the reeds along the Nile."
    },
    {
        question: "Who found baby Moses in the basket?",
        options: ["An Egyptian servant", "Pharaoh's daughter", "A Hebrew woman", "Moses' sister"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 2:5",
        explanation: "Pharaoh's daughter went down to the Nile to bathe and discovered the basket with Moses."
    },
    {
        question: "True or False: Moses grew up in Pharaoh's palace.",
        options: ["True", "False"],
        correct: 0,
        difficulty: "easy",
        reference: "Exodus 2:10",
        explanation: "True. Pharaoh's daughter adopted Moses and raised him as her own son in the palace."
    },
    {
        question: "What was Moses doing when God spoke to him from the burning bush?",
        options: ["Praying", "Tending his father-in-law's flock", "Building a house", "Traveling to Egypt"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 3:1",
        explanation: "Moses was tending the flock of Jethro, his father-in-law, when he saw the burning bush."
    },
    {
        question: "What was special about the burning bush?",
        options: ["It was very tall", "It burned but was not consumed", "It was golden", "It talked"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 3:2",
        explanation: "The bush was on fire but did not burn up—this caught Moses' attention."
    },
    {
        question: "What did God tell Moses to do before approaching the burning bush?",
        options: ["Bow down", "Take off his sandals", "Close his eyes", "Bring an offering"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 3:5",
        explanation: "God told Moses to take off his sandals because he was standing on holy ground."
    },
    {
        question: "What did God command Moses to tell Pharaoh?",
        options: ["'Build me a temple'", "'Let my people go'", "'Worship the true God'", "'Stop being cruel'"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 5:1",
        explanation: "God commanded Moses to tell Pharaoh, 'Let my people go, so that they may worship me.'"
    },
    {
        question: "How many plagues did God send on Egypt?",
        options: ["7", "10", "12", "15"],
        correct: 1,
        difficulty: "easy",
        reference: "Exodus 7-12",
        explanation: "God sent ten plagues on Egypt to convince Pharaoh to let the Israelites go."
    },
    {
        question: "What was the final plague that convinced Pharaoh to let the Israelites go?",
        options: ["Locusts", "Darkness", "Death of the firstborn", "Hail"],
        correct: 2,
        difficulty: "easy",
        reference: "Exodus 12:29-32",
        explanation: "The death of the firstborn was the tenth and final plague that broke Pharaoh's will."
    },

    // ==================== MEDIUM QUESTIONS (11-25) ====================
    {
        question: "What was the name of Moses' sister who watched over him as a baby?",
        options: ["Rachel", "Leah", "Miriam", "Deborah"],
        correct: 2,
        difficulty: "medium",
        reference: "Exodus 15:20",
        explanation: "Miriam, Moses' sister, watched the basket and later became a prophetess."
    },
    {
        question: "What was the name of Moses' brother who helped him speak to Pharaoh?",
        options: ["Joshua", "Aaron", "Caleb", "Hur"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 4:14",
        explanation: "God appointed Aaron, Moses' brother, to be his spokesman."
    },
    {
        question: "Why did Moses flee Egypt as a young man?",
        options: ["He was exiled", "He killed an Egyptian who was beating a Hebrew slave", "He stole from Pharaoh", "He wanted adventure"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 2:12",
        explanation: "Moses killed an Egyptian who was beating a Hebrew and fled when Pharaoh tried to kill him."
    },
    {
        question: "Where did Moses flee to after leaving Egypt?",
        options: ["Canaan", "Midian", "Babylon", "Jerusalem"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 2:15",
        explanation: "Moses fled to Midian, where he met his wife and tended sheep for 40 years."
    },
    {
        question: "Who was Moses' father-in-law?",
        options: ["Pharaoh", "Jethro (also called Reuel)", "Aaron", "Joshua"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 3:1",
        explanation: "Jethro (also called Reuel) was a priest of Midian and Moses' father-in-law."
    },
    {
        question: "What excuse did Moses give for not wanting to speak to Pharaoh?",
        options: ["He was too young", "He was slow of speech and tongue", "He was afraid", "He didn't know what to say"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 4:10",
        explanation: "Moses objected, saying he was slow of speech and tongue (possibly a speech impediment)."
    },
    {
        question: "What did Moses' staff turn into when he threw it on the ground?",
        options: ["A sword", "A snake", "Water", "Fire"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 4:3",
        explanation: "When Moses threw his staff on the ground, it became a snake."
    },
    {
        question: "What was the first plague God sent on Egypt?",
        options: ["Frogs", "Water turned to blood", "Locusts", "Boils"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 7:20",
        explanation: "The first plague turned all the water in Egypt to blood."
    },
    {
        question: "What did the Israelites put on their doorframes to protect them from the final plague?",
        options: ["Oil", "Water", "The blood of a lamb", "Ashes"],
        correct: 2,
        difficulty: "medium",
        reference: "Exodus 12:7",
        explanation: "The Israelites put lamb's blood on the doorframes so the destroyer would pass over their homes."
    },
    {
        question: "What body of water did Moses part for the Israelites to cross?",
        options: ["The Jordan River", "The Mediterranean Sea", "The Red Sea", "The Nile River"],
        correct: 2,
        difficulty: "medium",
        reference: "Exodus 14:21",
        explanation: "Moses stretched out his hand over the Red Sea, and God parted the waters."
    },
    {
        question: "What happened to Pharaoh's army when they chased the Israelites into the sea?",
        options: ["They turned back", "They drowned when the waters returned", "They were struck by lightning", "They surrendered"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 14:28",
        explanation: "The waters flowed back and covered Pharaoh's chariots and horsemen—the entire army."
    },
    {
        question: "What did God provide for the Israelites to eat in the wilderness?",
        options: ["Fish", "Manna", "Grapes", "Honey"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 16:4",
        explanation: "God rained down bread from heaven called manna for the Israelites to eat."
    },
    {
        question: "How did Moses get water from a rock in the desert?",
        options: ["He prayed and it appeared", "He struck the rock with his staff", "He dug a well", "God made it rain"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 17:6",
        explanation: "God told Moses to strike the rock at Horeb with his staff, and water came out."
    },
    {
        question: "On what mountain did Moses receive the Ten Commandments?",
        options: ["Mount Nebo", "Mount Sinai", "Mount Carmel", "Mount of Olives"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 19:20",
        explanation: "God called Moses to the top of Mount Sinai and gave him the Ten Commandments."
    },
    {
        question: "What were the Ten Commandments written on?",
        options: ["Papyrus scrolls", "Two stone tablets", "Clay tablets", "Animal skins"],
        correct: 1,
        difficulty: "medium",
        reference: "Exodus 31:18",
        explanation: "God gave Moses two tablets of stone inscribed by the finger of God."
    },

    // ==================== HARD QUESTIONS (26-30) ====================
    {
        question: "What did the Israelites make and worship while Moses was on Mount Sinai?",
        options: ["A silver statue", "A golden calf", "An altar to Baal", "A bronze serpent"],
        correct: 1,
        difficulty: "hard",
        reference: "Exodus 32:4",
        explanation: "Aaron made a golden calf, and the people worshiped it, breaking the first commandment."
    },
    {
        question: "What did Moses do when he saw the golden calf?",
        options: ["He prayed", "He broke the stone tablets in anger", "He left the camp", "He cried"],
        correct: 1,
        difficulty: "hard",
        reference: "Exodus 32:19",
        explanation: "Moses' anger burned and he threw the tablets out of his hands, breaking them."
    },
    {
        question: "How old was Moses when he died?",
        options: ["100 years old", "110 years old", "120 years old", "130 years old"],
        correct: 2,
        difficulty: "hard",
        reference: "Deuteronomy 34:7",
        explanation: "Moses was a hundred and twenty years old when he died, yet his eyes were not weak."
    },
    {
        question: "Why was Moses not allowed to enter the Promised Land?",
        options: ["He was too old", "He struck the rock in anger instead of speaking to it", "He built the golden calf", "He doubted God"],
        correct: 1,
        difficulty: "hard",
        reference: "Numbers 20:11-12",
        explanation: "Moses struck the rock twice in anger instead of speaking to it as God commanded."
    },
    {
        question: "From what mountain did Moses view the Promised Land before he died?",
        options: ["Mount Sinai", "Mount Horeb", "Mount Nebo", "Mount Carmel"],
        correct: 2,
        difficulty: "hard",
        reference: "Deuteronomy 34:1",
        explanation: "Moses climbed Mount Nebo from the plains of Moab and God showed him the Promised Land."
    }
];

export default mosesQuestions;
