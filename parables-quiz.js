// PARABLES OF JESUS QUIZ - 30 Questions
// Target: All Ages | Difficulty: Mix (10 Easy, 15 Medium, 5 Hard)
// Format: Multiple Choice, True/False Mix

const parablesQuestions = [
    // ==================== EASY QUESTIONS (1-10) ====================
    {
        question: "In the parable of the Good Samaritan, who stopped to help the injured man?",
        options: ["A priest", "A Levite", "A Samaritan", "A Roman soldier"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 10:33",
        explanation: "A Samaritan stopped to help the injured man after a priest and Levite passed by."
    },
    {
        question: "In the parable of the Prodigal Son, what did the younger son ask his father for?",
        options: ["A job", "His inheritance", "Food", "A house"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:12",
        explanation: "The younger son asked for his share of the estate (his inheritance)."
    },
    {
        question: "What did the Prodigal Son do after he left home with his money?",
        options: ["He invested it wisely", "He gave it to the poor", "He wasted it in wild living", "He saved it"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 15:13",
        explanation: "The son squandered his wealth in wild living in a distant country."
    },
    {
        question: "What job did the Prodigal Son take when he ran out of money?",
        options: ["Feeding pigs", "Building houses", "Fishing", "Farming"],
        correct: 0,
        difficulty: "easy",
        reference: "Luke 15:15",
        explanation: "He was sent to feed pigs, and he longed to fill his stomach with the pods they ate."
    },
    {
        question: "In the parable of the Lost Sheep, how many sheep did the shepherd have?",
        options: ["50", "75", "100", "120"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 15:4",
        explanation: "The shepherd had one hundred sheep and left the ninety-nine to find the one that was lost."
    },
    {
        question: "True or False: In the parable of the Sower, some seeds fell on rocky ground.",
        options: ["True", "False"],
        correct: 0,
        difficulty: "easy",
        reference: "Matthew 13:5",
        explanation: "True. Some seeds fell on rocky places where there wasn't much soil."
    },
    {
        question: "In the parable of the Mustard Seed, what happens to the tiny mustard seed?",
        options: ["It dies", "It grows into a large tree", "It stays small", "Birds eat it"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 13:31-32",
        explanation: "The mustard seed grows and becomes the largest of garden plants, like a tree."
    },
    {
        question: "In the parable of the Lost Coin, how many coins did the woman have?",
        options: ["5", "10", "12", "20"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:8",
        explanation: "The woman had ten silver coins and lost one of them."
    },
    {
        question: "What did the woman do when she found her lost coin?",
        options: ["She saved it", "She celebrated with friends and neighbors", "She hid it", "She spent it"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:9",
        explanation: "She called her friends and neighbors together to rejoice with her."
    },
    {
        question: "In the parable of the Two Sons, what did the father ask both sons to do?",
        options: ["Go to the temple", "Work in the vineyard", "Feed the animals", "Build a house"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 21:28",
        explanation: "The father told both sons to go and work in the vineyard."
    },

    // ==================== MEDIUM QUESTIONS (11-25) ====================
    {
        question: "In the parable of the Sower, what do the seeds represent?",
        options: ["Money", "The word of God", "People", "Faith"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 8:11",
        explanation: "Jesus explained that the seed is the word of God."
    },
    {
        question: "What happened to the seeds that fell on the path in the parable of the Sower?",
        options: ["They grew quickly", "They were trampled and birds ate them", "They withered", "They produced a harvest"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 8:5",
        explanation: "The seeds on the path were trampled on, and the birds ate them up."
    },
    {
        question: "What killed the seeds that fell among thorns?",
        options: ["Drought", "Birds", "Life's worries, riches and pleasures", "Animals"],
        correct: 2,
        difficulty: "medium",
        reference: "Luke 8:14",
        explanation: "The thorns represent life's worries, riches and pleasures which choke the word."
    },
    {
        question: "In the parable of the Talents, how many talents did the first servant receive?",
        options: ["One", "Two", "Five", "Ten"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 25:15",
        explanation: "The master gave five talents to the first servant, two to another, and one to another."
    },
    {
        question: "What did the servant with five talents do with them?",
        options: ["He buried them", "He spent them", "He invested and gained five more", "He gave them away"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 25:16",
        explanation: "The man who received five talents went and put his money to work and gained five more."
    },
    {
        question: "What did the servant with one talent do?",
        options: ["He invested it", "He buried it in the ground", "He gave it to the poor", "He spent it"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 25:18",
        explanation: "The servant who received one talent went off, dug a hole and hid his master's money."
    },
    {
        question: "In the parable of the Ten Virgins, how many were wise and how many were foolish?",
        options: ["All ten were wise", "Five wise and five foolish", "Seven wise and three foolish", "Three wise and seven foolish"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 25:2",
        explanation: "Five of the virgins were wise and five were foolish."
    },
    {
        question: "What did the wise virgins bring that the foolish virgins forgot?",
        options: ["Water", "Food", "Extra oil for their lamps", "Money"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 25:3-4",
        explanation: "The foolish virgins took their lamps but no oil; the wise took oil in jars along with their lamps."
    },
    {
        question: "In the parable of the Rich Fool, what did the rich man plan to do with his abundant harvest?",
        options: ["Give it to the poor", "Build bigger barns", "Share it with neighbors", "Sell it all"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 12:18",
        explanation: "He said, 'I will tear down my barns and build bigger ones to store all my grain.'"
    },
    {
        question: "What happened to the rich fool that very night?",
        options: ["He celebrated", "He became sick", "God demanded his life", "He gave everything away"],
        correct: 2,
        difficulty: "medium",
        reference: "Luke 12:20",
        explanation: "God said to him, 'You fool! This very night your life will be demanded from you.'"
    },
    {
        question: "In the parable of the Pharisee and Tax Collector, where were they praying?",
        options: ["In their homes", "In the temple", "By the river", "On a mountain"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 18:10",
        explanation: "Two men went up to the temple to pray, one a Pharisee and the other a tax collector."
    },
    {
        question: "How did the Pharisee pray in the temple?",
        options: ["He thanked God he wasn't like other men", "He confessed his sins", "He asked for forgiveness", "He prayed silently"],
        correct: 0,
        difficulty: "medium",
        reference: "Luke 18:11",
        explanation: "The Pharisee prayed about himself, thanking God he wasn't like other people."
    },
    {
        question: "How did the tax collector pray in the temple?",
        options: ["He boasted", "He stood far off and beat his breast saying 'God, have mercy on me, a sinner'", "He prayed loudly", "He didn't pray"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 18:13",
        explanation: "The tax collector stood at a distance, beat his breast and said, 'God, have mercy on me, a sinner.'"
    },
    {
        question: "Who went home justified in the parable of the Pharisee and Tax Collector?",
        options: ["The Pharisee", "The tax collector", "Both of them", "Neither of them"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 18:14",
        explanation: "Jesus said the tax collector went home justified rather than the Pharisee."
    },
    {
        question: "In the parable of the Persistent Widow, what did she keep asking the judge for?",
        options: ["Money", "Food", "Justice against her adversary", "A new home"],
        correct: 2,
        difficulty: "medium",
        reference: "Luke 18:3",
        explanation: "The widow kept coming to the judge saying, 'Grant me justice against my adversary.'"
    },

    // ==================== HARD QUESTIONS (26-30) ====================
    {
        question: "In the parable of the Wedding Banquet, why did the invited guests refuse to come?",
        options: ["They were sick", "They had other priorities like fields and business", "They didn't like the host", "The invitation was unclear"],
        correct: 1,
        difficulty: "hard",
        reference: "Matthew 22:5",
        explanation: "They paid no attention and went off—one to his field, another to his business."
    },
    {
        question: "In the parable of the Unforgiving Servant, how much did the first servant owe the king?",
        options: ["100 denarii", "1,000 denarii", "10,000 talents", "50 talents"],
        correct: 2,
        difficulty: "hard",
        reference: "Matthew 18:24",
        explanation: "The servant owed ten thousand talents (millions of dollars in today's value)."
    },
    {
        question: "How much did the fellow servant owe the unforgiving servant?",
        options: ["100 denarii", "1,000 denarii", "100 talents", "10 talents"],
        correct: 0,
        difficulty: "hard",
        reference: "Matthew 18:28",
        explanation: "The fellow servant owed him a hundred denarii (a few months' wages)."
    },
    {
        question: "In the parable of the Workers in the Vineyard, when did the landowner hire the last workers?",
        options: ["Early morning", "Noon", "The eleventh hour (5 PM)", "Midnight"],
        correct: 2,
        difficulty: "hard",
        reference: "Matthew 20:6",
        explanation: "The landowner went out about the eleventh hour (5 PM) and found still others standing around."
    },
    {
        question: "What wage did ALL the workers receive in the parable of the Workers in the Vineyard?",
        options: ["Different amounts based on hours worked", "One denarius each", "Two denarii each", "Nothing"],
        correct: 1,
        difficulty: "hard",
        reference: "Matthew 20:9-10",
        explanation: "Each worker, whether they worked all day or one hour, received one denarius."
    }
];

export default parablesQuestions;
