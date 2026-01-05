// MIRACLES OF JESUS QUIZ - 30 Questions
// Target: All Ages | Difficulty: Mix (10 Easy, 15 Medium, 5 Hard)
// Format: Multiple Choice, True/False Mix

const miraclesOfJesusQuestions = [
    // ==================== EASY QUESTIONS (1-10) ====================
    {
        question: "What was Jesus's first miracle?",
        options: ["Healing a blind man", "Turning water into wine", "Walking on water", "Feeding 5,000"],
        correct: 1,
        difficulty: "easy",
        reference: "John 2:1-11",
        explanation: "Jesus performed His first miracle at a wedding in Cana by turning water into wine."
    },
    {
        question: "How many loaves and fish did Jesus use to feed 5,000 people?",
        options: ["3 loaves and 2 fish", "5 loaves and 2 fish", "7 loaves and 3 fish", "10 loaves and 5 fish"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 14:17-21",
        explanation: "Jesus took five loaves and two fish, blessed them, and fed over 5,000 people."
    },
    {
        question: "What did Jesus walk on that amazed His disciples?",
        options: ["Hot coals", "Water", "Air", "Fire"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 14:25",
        explanation: "Jesus walked on the water of the Sea of Galilee during a storm."
    },
    {
        question: "True or False: Jesus healed a man who was blind from birth.",
        options: ["True", "False"],
        correct: 0,
        difficulty: "easy",
        reference: "John 9:1-7",
        explanation: "True. Jesus healed a man who had been blind since birth by putting mud on his eyes."
    },
    {
        question: "What did Jesus calm with His words 'Peace, be still'?",
        options: ["A crying child", "An angry crowd", "A storm at sea", "A wild animal"],
        correct: 2,
        difficulty: "easy",
        reference: "Mark 4:39",
        explanation: "Jesus calmed a furious storm on the Sea of Galilee with His words."
    },
    {
        question: "Who did Jesus raise from the dead after four days in the tomb?",
        options: ["Jairus's daughter", "The widow's son", "Lazarus", "Peter's mother-in-law"],
        correct: 2,
        difficulty: "easy",
        reference: "John 11:43-44",
        explanation: "Jesus raised His friend Lazarus from the dead after he had been in the tomb four days."
    },
    {
        question: "How many lepers did Jesus heal at once?",
        options: ["1", "5", "10", "12"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 17:12-14",
        explanation: "Jesus healed ten lepers at once, but only one returned to thank Him."
    },
    {
        question: "What did Jesus tell the paralyzed man before healing him?",
        options: ["'Stand up'", "'Your sins are forgiven'", "'Be healed'", "'Go in peace'"],
        correct: 1,
        difficulty: "easy",
        reference: "Mark 2:5",
        explanation: "Jesus first told the paralyzed man, 'Son, your sins are forgiven.'"
    },
    {
        question: "True or False: Jesus healed people on the Sabbath.",
        options: ["True", "False"],
        correct: 0,
        difficulty: "easy",
        reference: "Luke 13:10-13",
        explanation: "True. Jesus healed many people on the Sabbath, which angered religious leaders."
    },
    {
        question: "What did the disciples ask Jesus when He was sleeping during the storm?",
        options: ["'Can we go home?'", "'Teacher, don't you care if we drown?'", "'When will it stop?'", "'Should we pray?'"],
        correct: 1,
        difficulty: "easy",
        reference: "Mark 4:38",
        explanation: "The disciples woke Jesus saying, 'Teacher, don't you care if we drown?'"
    },

    // ==================== MEDIUM QUESTIONS (11-25) ====================
    {
        question: "Where was the wedding where Jesus turned water into wine?",
        options: ["Jerusalem", "Bethlehem", "Cana in Galilee", "Nazareth"],
        correct: 2,
        difficulty: "medium",
        reference: "John 2:1",
        explanation: "The wedding took place in Cana of Galilee, where Jesus performed His first miracle."
    },
    {
        question: "How many stone water jars did Jesus use for the wine miracle?",
        options: ["3", "6", "9", "12"],
        correct: 1,
        difficulty: "medium",
        reference: "John 2:6",
        explanation: "There were six stone water jars, each holding about 20-30 gallons."
    },
    {
        question: "What was wrong with the woman who touched Jesus's garment in the crowd?",
        options: ["She was blind", "She had been bleeding for 12 years", "She was paralyzed", "She was deaf"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 5:25",
        explanation: "A woman who had been subject to bleeding for twelve years touched Jesus's cloak and was healed."
    },
    {
        question: "What did Jesus put on the blind man's eyes before he could see?",
        options: ["Oil", "Water", "Mud made with saliva", "His hands"],
        correct: 2,
        difficulty: "medium",
        reference: "John 9:6",
        explanation: "Jesus spit on the ground, made mud with saliva, and put it on the man's eyes."
    },
    {
        question: "Where did Jesus send the blind man after putting mud on his eyes?",
        options: ["Home", "To wash in the Pool of Siloam", "To the temple", "To the priests"],
        correct: 1,
        difficulty: "medium",
        reference: "John 9:7",
        explanation: "Jesus told him, 'Go, wash in the Pool of Siloam,' and the man came back seeing."
    },
    {
        question: "How many baskets of leftovers were gathered after feeding the 5,000?",
        options: ["5 baskets", "7 baskets", "12 baskets", "20 baskets"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 14:20",
        explanation: "The disciples picked up twelve basketfuls of broken pieces that were left over."
    },
    {
        question: "Who walked on water with Jesus before beginning to sink?",
        options: ["John", "James", "Peter", "Andrew"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 14:29",
        explanation: "Peter got out of the boat and walked on the water toward Jesus, but began to sink."
    },
    {
        question: "What did Jesus say when Peter started to sink while walking on water?",
        options: ["'Have faith'", "'You of little faith, why did you doubt?'", "'Hold on'", "'Swim to me'"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 14:31",
        explanation: "Jesus immediately reached out and caught Peter, saying, 'You of little faith, why did you doubt?'"
    },
    {
        question: "Who was the father of the young girl Jesus raised from the dead?",
        options: ["A centurion", "Jairus", "Nicodemus", "Joseph"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 5:22",
        explanation: "Jairus, a synagogue leader, begged Jesus to come heal his dying daughter."
    },
    {
        question: "What did Jesus say about the dead girl before raising her?",
        options: ["'She will live'", "'She is not dead but asleep'", "'Have faith'", "'I am the resurrection'"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 5:39",
        explanation: "Jesus said, 'The child is not dead but asleep,' then raised her to life."
    },
    {
        question: "Where were the demons Jesus cast out sent into?",
        options: ["The sea", "A herd of pigs", "The desert", "A deep pit"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 5:13",
        explanation: "The demons begged to be sent into a herd of pigs, which then rushed into the lake."
    },
    {
        question: "What was the name of the demon-possessed man Jesus healed in the region of the Gerasenes?",
        options: ["Bartimaeus", "Legion", "Matthew", "Simon"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 5:9",
        explanation: "The man said his name was Legion, for many demons had gone into him."
    },
    {
        question: "How did Jesus heal the deaf and mute man?",
        options: ["He spoke to him", "He put His fingers in his ears and touched his tongue", "He laid hands on him", "He commanded the demons to leave"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 7:33",
        explanation: "Jesus put His fingers into the man's ears, then spit and touched the man's tongue."
    },
    {
        question: "What did the man healed from leprosy do after Jesus healed him?",
        options: ["Went to the temple", "Told everyone, despite Jesus telling him not to", "Returned home quietly", "Became a disciple"],
        correct: 1,
        difficulty: "medium",
        reference: "Mark 1:45",
        explanation: "Instead of keeping quiet as Jesus instructed, the man talked freely and spread the news."
    },
    {
        question: "How many demon-possessed men did Jesus heal in the region of the Gadarenes?",
        options: ["One", "Two", "Three", "Five"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 8:28",
        explanation: "Matthew's account mentions two demon-possessed men, though Mark focuses on one."
    },

    // ==================== HARD QUESTIONS (26-30) ====================
    {
        question: "What did Lazarus's sister Martha say when Jesus told them to remove the stone from the tomb?",
        options: ["'He's been dead too long'", "'By this time there is a bad odor'", "'It's impossible'", "'Please don't'"],
        correct: 1,
        difficulty: "hard",
        reference: "John 11:39",
        explanation: "Martha objected, 'Lord, by this time there is a bad odor, for he has been there four days.'"
    },
    {
        question: "What did Jesus say to Lazarus to bring him out of the tomb?",
        options: ["'Lazarus, arise!'", "'Lazarus, come forth!'", "'Live again!'", "'Awake from death!'"],
        correct: 1,
        difficulty: "hard",
        reference: "John 11:43",
        explanation: "Jesus called in a loud voice, 'Lazarus, come out!' (or 'come forth' in KJV)."
    },
    {
        question: "How long had the woman with the issue of blood suffered before Jesus healed her?",
        options: ["5 years", "8 years", "12 years", "18 years"],
        correct: 2,
        difficulty: "hard",
        reference: "Mark 5:25",
        explanation: "She had suffered with bleeding for twelve years and spent all her money on doctors."
    },
    {
        question: "What did the centurion say that amazed Jesus about faith?",
        options: ["'I believe you can heal'", "'Just say the word and my servant will be healed'", "'Come to my house'", "'I have great faith'"],
        correct: 1,
        difficulty: "hard",
        reference: "Matthew 8:8",
        explanation: "The centurion said he wasn't worthy to have Jesus come, but 'just say the word' and it will be done."
    },
    {
        question: "How many years had the woman been crippled before Jesus healed her on the Sabbath?",
        options: ["10 years", "15 years", "18 years", "20 years"],
        correct: 2,
        difficulty: "hard",
        reference: "Luke 13:11",
        explanation: "The woman had been crippled by a spirit for eighteen years and couldn't straighten up."
    }
];

export default miraclesOfJesusQuestions;
