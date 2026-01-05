// ANXIETY BIBLE QUIZ - 30 Questions
// Target: All Ages | Difficulty: Mix (10 Easy, 15 Medium, 5 Hard)
// Format: Multiple Choice, True/False Mix
// UNIQUE: Life Application Focus - "What Does God Say About Your Worry?"

const anxietyBibleQuestions = [
    // ==================== EASY QUESTIONS (1-10) ====================
    {
        question: "Complete this famous verse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to ____.'",
        options: ["Your pastor", "God", "Your friends", "Yourself"],
        correct: 1,
        difficulty: "easy",
        reference: "Philippians 4:6",
        explanation: "We are commanded to present our requests to God through prayer and petition."
    },
    {
        question: "According to Jesus in Matthew 6, what should we NOT worry about?",
        options: ["Our health", "Tomorrow", "Our family", "Our work"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 6:34",
        explanation: "Jesus said, 'Therefore do not worry about tomorrow, for tomorrow will worry about itself.'"
    },
    {
        question: "Complete this verse: 'Cast all your anxiety on Him because ____.'",
        options: ["He is strong", "He cares for you", "He is God", "He commands it"],
        correct: 1,
        difficulty: "easy",
        reference: "1 Peter 5:7",
        explanation: "We can cast our anxiety on God because He genuinely cares for us."
    },
    {
        question: "In Psalm 23, David says 'Even though I walk through the darkest valley, I will fear no ____.'",
        options: ["Man", "Death", "Evil", "Pain"],
        correct: 2,
        difficulty: "easy",
        reference: "Psalm 23:4",
        explanation: "David declares he will fear no evil because God is with him."
    },
    {
        question: "True or False: The Bible tells us to worry about what we will eat and wear.",
        options: ["True", "False"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 6:25",
        explanation: "False. Jesus specifically tells us NOT to worry about food or clothing."
    },
    {
        question: "What does God say we should do instead of being anxious?",
        options: ["Work harder", "Pray", "Sleep more", "Ignore problems"],
        correct: 1,
        difficulty: "easy",
        reference: "Philippians 4:6",
        explanation: "God tells us to pray and present our requests to Him instead of being anxious."
    },
    {
        question: "Complete this verse: 'Peace I leave with you; my ____ I give you.'",
        options: ["Love", "Joy", "Peace", "Strength"],
        correct: 2,
        difficulty: "easy",
        reference: "John 14:27",
        explanation: "Jesus promises to give us His peace—not as the world gives."
    },
    {
        question: "Who does Jesus say we should seek first instead of worrying?",
        options: ["Wealth", "His kingdom and righteousness", "Success", "Happiness"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 6:33",
        explanation: "Jesus tells us to seek first His kingdom and His righteousness."
    },
    {
        question: "What will God give us if we seek Him first?",
        options: ["Riches", "All these things will be given to you as well", "Power", "Fame"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 6:33",
        explanation: "When we seek God's kingdom first, all the things we need will be provided."
    },
    {
        question: "True or False: God wants us to worry about our problems.",
        options: ["True", "False"],
        correct: 1,
        difficulty: "easy",
        reference: "1 Peter 5:7",
        explanation: "False. God wants us to cast our anxieties on Him, not carry them ourselves."
    },

    // ==================== MEDIUM QUESTIONS (11-25) ====================
    {
        question: "What does Philippians 4:7 promise will guard our hearts and minds?",
        options: ["Faith", "Love", "The peace of God", "Hope"],
        correct: 2,
        difficulty: "medium",
        reference: "Philippians 4:7",
        explanation: "The peace of God, which transcends all understanding, will guard our hearts and minds."
    },
    {
        question: "Complete this Isaiah verse: 'You will keep in perfect peace those whose minds are ____.'",
        options: ["Pure", "Steadfast on You", "Praying", "Thinking positively"],
        correct: 1,
        difficulty: "medium",
        reference: "Isaiah 26:3",
        explanation: "Perfect peace comes to those whose minds are steadfast because they trust in God."
    },
    {
        question: "What does Jesus say God knows about us before we ask?",
        options: ["Our dreams", "What we need", "Our fears", "Our future"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 6:8",
        explanation: "Jesus reminds us that our Father knows what we need before we ask Him."
    },
    {
        question: "In Matthew 6, what example does Jesus give of God's care for us?",
        options: ["He feeds the fish", "He feeds the birds of the air", "He makes the sun shine", "He creates beauty"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 6:26",
        explanation: "Jesus points to birds—our heavenly Father feeds them, and we are more valuable than they."
    },
    {
        question: "Complete this verse: 'The Lord is my ____ and my salvation—whom shall I fear?'",
        options: ["Strength", "Light", "Rock", "Shield"],
        correct: 1,
        difficulty: "medium",
        reference: "Psalm 27:1",
        explanation: "When the Lord is our light and salvation, we have no reason to fear."
    },
    {
        question: "What should we think about instead of worrying, according to Philippians 4:8?",
        options: ["Our problems", "Whatever is true, noble, right, pure, lovely, and admirable", "The future", "Our past"],
        correct: 1,
        difficulty: "medium",
        reference: "Philippians 4:8",
        explanation: "We should think about whatever is true, noble, right, pure, lovely, admirable, excellent, or praiseworthy."
    },
    {
        question: "What does Proverbs say about anxiety in the heart?",
        options: ["It is normal", "It weighs a person down", "It builds character", "It should be hidden"],
        correct: 1,
        difficulty: "medium",
        reference: "Proverbs 12:25",
        explanation: "Anxiety weighs down the heart, but a kind word cheers it up."
    },
    {
        question: "In John 14:27, what kind of peace does Jesus NOT give us?",
        options: ["Perfect peace", "Peace as the world gives", "Eternal peace", "Complete peace"],
        correct: 1,
        difficulty: "medium",
        reference: "John 14:27",
        explanation: "Jesus gives us His peace, not as the world gives—His peace is different and superior."
    },
    {
        question: "What does 2 Timothy 1:7 say God has NOT given us?",
        options: ["Love", "A spirit of fear", "Power", "Self-discipline"],
        correct: 1,
        difficulty: "medium",
        reference: "2 Timothy 1:7",
        explanation: "God has not given us a spirit of fear, but of power, love and self-discipline."
    },
    {
        question: "What three things HAS God given us according to 2 Timothy 1:7?",
        options: ["Faith, hope, and love", "Power, love, and self-discipline", "Peace, joy, and strength", "Wisdom, knowledge, and understanding"],
        correct: 1,
        difficulty: "medium",
        reference: "2 Timothy 1:7",
        explanation: "God has given us a spirit of power, love, and self-discipline (or sound mind)."
    },
    {
        question: "Complete this verse from Psalm 55: 'Cast your cares on the Lord and ____.'",
        options: ["He will sustain you", "He will answer", "You will have peace", "He will bless you"],
        correct: 0,
        difficulty: "medium",
        reference: "Psalm 55:22",
        explanation: "When we cast our cares on the Lord, He will sustain us and never let the righteous fall."
    },
    {
        question: "What does Jesus say adds nothing to our life by worrying?",
        options: ["Money", "A single hour to your life", "Happiness", "Friends"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 6:27",
        explanation: "Jesus asks, 'Can any one of you by worrying add a single hour to your life?'"
    },
    {
        question: "What does Romans 8:28 promise for those who love God?",
        options: ["No problems", "An easy life", "God works all things together for good", "Immediate answers"],
        correct: 2,
        difficulty: "medium",
        reference: "Romans 8:28",
        explanation: "God works all things together for the good of those who love Him and are called according to His purpose."
    },
    {
        question: "Complete this verse: 'Come to me, all you who are weary and burdened, and ____.'",
        options: ["I will judge you", "I will give you rest", "You will be healed", "I will bless you"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 11:28",
        explanation: "Jesus invites the weary and burdened to come to Him, and He will give them rest."
    },
    {
        question: "What does Jesus say His yoke is in Matthew 11:30?",
        options: ["Heavy and difficult", "Easy and His burden is light", "Impossible", "Challenging"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 11:30",
        explanation: "Jesus says His yoke is easy and His burden is light."
    },

    // ==================== HARD QUESTIONS (26-30) ====================
    {
        question: "In Psalm 94:19, what does God provide when anxiety is great?",
        options: ["Strength", "His consolation brings joy to your soul", "Answers", "Escape"],
        correct: 1,
        difficulty: "hard",
        reference: "Psalm 94:19",
        explanation: "When anxiety was great within the psalmist, God's consolation brought joy to his soul."
    },
    {
        question: "What does Jeremiah 29:11 say about God's plans for us?",
        options: ["They are mysterious", "Plans to prosper you and not to harm you, plans to give you hope and a future", "They will be difficult", "They require faith"],
        correct: 1,
        difficulty: "hard",
        reference: "Jeremiah 29:11",
        explanation: "God declares His plans are to prosper us, not harm us—to give us hope and a future."
    },
    {
        question: "According to Psalm 46:1, God is our refuge and strength, and what else?",
        options: ["An ever-present help in trouble", "A mighty fortress", "A strong tower", "A shield"],
        correct: 0,
        difficulty: "hard",
        reference: "Psalm 46:1",
        explanation: "God is our refuge, strength, and an ever-present help in trouble."
    },
    {
        question: "What does Psalm 34:4 say happened when David sought the Lord?",
        options: ["He was blessed", "The Lord answered him and delivered him from all his fears", "He found peace", "He was healed"],
        correct: 1,
        difficulty: "hard",
        reference: "Psalm 34:4",
        explanation: "David sought the Lord, and He answered him and delivered him from all his fears."
    },
    {
        question: "Complete this verse from Isaiah 41:10: 'Do not fear, for I am with you; do not be dismayed, for I am your God. I will ____ you and ____ you.'",
        options: ["Love you and bless you", "Strengthen you and help you", "Guide you and protect you", "Heal you and restore you"],
        correct: 1,
        difficulty: "hard",
        reference: "Isaiah 41:10",
        explanation: "God promises to strengthen us, help us, and uphold us with His righteous right hand."
    }
];

export default anxietyBibleQuestions;
