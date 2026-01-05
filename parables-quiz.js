// PARABLES QUIZ - 30 Questions
// Target: All Ages | Difficulty: Mix (10 Easy, 15 Medium, 5 Hard)
// Format: Multiple Choice, True/False Mix

var parablesQuestions = [
    // ==================== EASY QUESTIONS (1-10) ====================
    {
        question: "In the parable of the Good Samaritan, who was beaten and left on the road?",
        options: ["A priest", "A Levite", "A Jewish man", "A Samaritan"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 10:30",
        explanation: "A Jewish man was going down from Jerusalem to Jericho when he was attacked by robbers."
    },
    {
        question: "Who stopped to help the wounded man in the parable of the Good Samaritan?",
        options: ["A priest", "A Levite", "A Samaritan", "A Roman soldier"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 10:33",
        explanation: "A Samaritan took pity on the wounded man, bandaged his wounds, and took him to an inn."
    },
    {
        question: "In the parable of the Prodigal Son, what did the younger son ask his father for?",
        options: ["A new coat", "His inheritance", "A job", "Permission to leave"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:12",
        explanation: "The younger son asked his father for his share of the estate."
    },
    {
        question: "What job did the Prodigal Son end up doing after wasting his inheritance?",
        options: ["Feeding pigs", "Begging", "Working in a field", "Building houses"],
        correct: 0,
        difficulty: "easy",
        reference: "Luke 15:15",
        explanation: "He was sent to feed pigs, and he longed to eat the food the pigs were eating."
    },
    {
        question: "In the parable of the Lost Sheep, how many sheep did the shepherd have?",
        options: ["50", "75", "100", "200"],
        correct: 2,
        difficulty: "easy",
        reference: "Luke 15:4",
        explanation: "The shepherd had 100 sheep, and when one was lost, he left the 99 to find it."
    },
    {
        question: "True or False: In the parable of the Sower, some seed fell on rocky ground.",
        options: ["True", "False"],
        correct: 0,
        difficulty: "easy",
        reference: "Matthew 13:5",
        explanation: "True. Some seed fell on rocky places where it didn't have much soil."
    },
    {
        question: "What did the father give the Prodigal Son when he returned home?",
        options: ["Money", "A robe and a ring", "A house", "A job"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:22",
        explanation: "The father brought the best robe, put a ring on his finger, and sandals on his feet."
    },
    {
        question: "In the parable of the Two Builders, what happened to the house built on sand?",
        options: ["It stood firm", "It fell with a great crash", "It was blown away", "It was repaired"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 7:27",
        explanation: "When the rain and floods came, the house built on sand fell with a great crash."
    },
    {
        question: "What represents the good soil in the parable of the Sower?",
        options: ["Those who ignore God's word", "Those who hear and understand God's word", "Those who reject God's word", "Those who forget God's word"],
        correct: 1,
        difficulty: "easy",
        reference: "Matthew 13:23",
        explanation: "The seed on good soil represents those who hear the word, understand it, and produce a crop."
    },
    {
        question: "In the parable of the Lost Coin, how many coins did the woman have?",
        options: ["5", "10", "15", "20"],
        correct: 1,
        difficulty: "easy",
        reference: "Luke 15:8",
        explanation: "The woman had ten silver coins and lost one, then searched carefully until she found it."
    },

    // ==================== MEDIUM QUESTIONS (11-25) ====================
    {
        question: "In the parable of the Talents, how many talents did the master give to his servants in total?",
        options: ["5", "8", "10", "12"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 25:15",
        explanation: "The master gave five talents to one servant, two to another, and one to a third (8 total)."
    },
    {
        question: "What did the servant with one talent do with it?",
        options: ["Invested it", "Gave it to the poor", "Buried it in the ground", "Lost it"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 25:18",
        explanation: "The servant with one talent went off, dug a hole, and hid his master's money."
    },
    {
        question: "In the parable of the Ten Virgins, why were five virgins called foolish?",
        options: ["They fell asleep", "They brought no oil for their lamps", "They came late", "They forgot their lamps"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 25:3",
        explanation: "The five foolish virgins took their lamps but didn't take any extra oil with them."
    },
    {
        question: "In the parable of the Great Banquet, why did the invited guests not come?",
        options: ["They were sick", "They made excuses", "They didn't know about it", "They were far away"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 14:18",
        explanation: "All the invited guests began to make excusesâ€"one bought a field, another bought oxen, another got married."
    },
    {
        question: "Who did the master invite to the banquet after the original guests refused?",
        options: ["His family", "Other rich people", "The poor, crippled, blind, and lame", "His servants"],
        correct: 2,
        difficulty: "medium",
        reference: "Luke 14:21",
        explanation: "The master told his servant to go to the streets and bring in the poor, crippled, blind, and lame."
    },
    {
        question: "In the parable of the Pharisee and the Tax Collector, where were they praying?",
        options: ["In a house", "On a mountain", "In the temple", "By a river"],
        correct: 2,
        difficulty: "medium",
        reference: "Luke 18:10",
        explanation: "Two men went up to the temple to pray, one a Pharisee and the other a tax collector."
    },
    {
        question: "What did the tax collector say in his prayer?",
        options: ["'Thank you God I'm not like other men'", "'God, have mercy on me, a sinner'", "'I give money to the poor'", "'I fast twice a week'"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 18:13",
        explanation: "The tax collector stood at a distance and prayed, 'God, have mercy on me, a sinner.'"
    },
    {
        question: "In the parable of the Persistent Widow, what did the widow keep asking the judge for?",
        options: ["Money", "Justice against her adversary", "A new home", "Food"],
        correct: 1,
        difficulty: "medium",
        reference: "Luke 18:3",
        explanation: "The widow kept coming to the judge saying, 'Grant me justice against my adversary.'"
    },
    {
        question: "In the parable of the Wheat and Tares (Weeds), what does Jesus say to do with both?",
        options: ["Pull up the weeds immediately", "Let both grow together until harvest", "Burn the weeds", "Separate them now"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 13:30",
        explanation: "Jesus said to let both grow together until the harvest, then the weeds will be separated and burned."
    },
    {
        question: "What does the mustard seed represent in the parable?",
        options: ["Wealth", "The kingdom of heaven", "Faith", "Love"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 13:31",
        explanation: "The kingdom of heaven is like a mustard seedâ€"the smallest seed that grows into the largest garden plant."
    },
    {
        question: "In the parable of the Hidden Treasure, what did the man do after finding treasure in a field?",
        options: ["Told everyone", "Took it and ran", "Sold all he had and bought the field", "Left it there"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 13:44",
        explanation: "In his joy, he sold all he had and bought that field to possess the treasure."
    },
    {
        question: "In the parable of the Pearl, what did the merchant do when he found one very valuable pearl?",
        options: ["Showed it to others", "Sold everything he had and bought it", "Kept searching for more", "Gave it away"],
        correct: 1,
        difficulty: "medium",
        reference: "Matthew 13:46",
        explanation: "When he found one pearl of great value, he sold everything he had and bought it."
    },
    {
        question: "In the parable of the Unforgiving Servant, how much did the first servant owe the king?",
        options: ["100 denarii", "1,000 denarii", "10,000 talents", "50,000 talents"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 18:24",
        explanation: "The servant owed 10,000 talentsâ€"an enormous, unpayable debt."
    },
    {
        question: "What did the unforgiving servant do to his fellow servant who owed him money?",
        options: ["Forgave him", "Gave him more time", "Had him thrown into prison", "Took him to court"],
        correct: 2,
        difficulty: "medium",
        reference: "Matthew 18:30",
        explanation: "He refused to be patient and had the man thrown into prison until he could pay the debt."
    },
    {
        question: "In the parable of the Workers in the Vineyard, what time did the last workers start working?",
        options: ["At dawn", "At noon", "At 3 PM", "At 5 PM (the eleventh hour)"],
        correct: 3,
        difficulty: "medium",
        reference: "Matthew 20:6",
        explanation: "About five in the afternoon (the eleventh hour), the owner found others standing around."
    },

    // ==================== HARD QUESTIONS (26-30) ====================
    {
        question: "In the parable of the Rich Fool, what did the rich man decide to do with his abundant crops?",
        options: ["Give to the poor", "Sell them", "Tear down his barns and build bigger ones", "Store them in the temple"],
        correct: 2,
        difficulty: "hard",
        reference: "Luke 12:18",
        explanation: "He said, 'I will tear down my barns and build bigger ones, and store my surplus grain.'"
    },
    {
        question: "What did God say to the rich fool that very night?",
        options: ["'Well done'", "'You fool! This very night your life will be demanded from you'", "'Share your wealth'", "'Build more barns'"],
        correct: 1,
        difficulty: "hard",
        reference: "Luke 12:20",
        explanation: "God said, 'You fool! This very night your life will be demanded from you.'"
    },
    {
        question: "In the parable of the Shrewd Manager, why was the manager being fired?",
        options: ["He was lazy", "He was wasting his master's possessions", "He stole money", "He was dishonest"],
        correct: 1,
        difficulty: "hard",
        reference: "Luke 16:1",
        explanation: "The manager was accused of wasting his master's possessions."
    },
    {
        question: "What was the main point Jesus made about the Shrewd Manager?",
        options: ["Dishonesty is wrong", "Plan for the future wisely", "Money is evil", "Always obey your master"],
        correct: 1,
        difficulty: "hard",
        reference: "Luke 16:8",
        explanation: "Jesus praised the manager's shrewdness in using worldly wealth to secure his future."
    },
    {
        question: "In the parable of the Rich Man and Lazarus, where did the rich man go after death?",
        options: ["Heaven", "Paradise", "Hades (torment)", "Purgatory"],
        correct: 2,
        difficulty: "hard",
        reference: "Luke 16:23",
        explanation: "In Hades, where he was in torment, the rich man looked up and saw Abraham far away."
    }
];

window.parablesQuestions = parablesQuestions;
