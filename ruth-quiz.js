const ruthQuestions = [
    {
        question: "Where was Elimelech's family from originally?",
        options: ["Jerusalem", "Bethlehem-judah", "Hebron", "Nazareth"],
        correct: 1,
        explanation: "Elimelech was from Bethlehem-judah (Ruth 1:1). They left because of famine and went to Moab."
    },
    {
        question: "Why did Elimelech take his family to Moab?",
        options: ["War", "Famine", "Persecution", "Business"],
        correct: 1,
        explanation: "There was a famine in the land, so Elimelech took his family to sojourn in Moab (Ruth 1:1)."
    },
    {
        question: "What were the names of Elimelech's two sons?",
        options: ["Mahlon and Chilion", "Jacob and Esau", "Cain and Abel", "Simeon and Levi"],
        correct: 0,
        explanation: "Elimelech's sons were named Mahlon and Chilion (Ruth 1:2). Both married Moabite women and later died."
    },
    {
        question: "What were the names of the two Moabite women who married Elimelech's sons?",
        options: ["Ruth and Naomi", "Orpah and Ruth", "Rachel and Leah", "Mary and Martha"],
        correct: 1,
        explanation: "The two Moabite women were Orpah and Ruth (Ruth 1:4). They married Mahlon and Chilion."
    },
    {
        question: "How long had they dwelt in Moab before the men died?",
        options: ["Five years", "About ten years", "Twenty years", "One year"],
        correct: 1,
        explanation: "They dwelt in Moab about ten years, and then Mahlon and Chilion died, leaving Naomi with her two daughters-in-law (Ruth 1:4-5)."
    },
    {
        question: "What name did Naomi ask to be called when she returned?",
        options: ["Pleasant", "Mara", "Blessed", "Joyful"],
        correct: 1,
        explanation: "Naomi said 'Call me not Naomi, call me Mara: for the Almighty hath dealt very bitterly with me' (Ruth 1:20). Mara means 'bitter.'"
    },
    {
        question: "Which daughter-in-law returned to her people?",
        options: ["Ruth", "Orpah", "Both", "Neither"],
        correct: 1,
        explanation: "Orpah kissed Naomi goodbye and returned to her people, but Ruth clave unto her (Ruth 1:14)."
    },
    {
        question: "What famous words did Ruth say to Naomi?",
        options: ["I will serve you", "Whither thou goest, I will go", "Take me with you", "I love you"],
        correct: 1,
        explanation: "Ruth said 'whither thou goest, I will go; and where thou lodgest, I will lodge: thy people shall be my people, and thy God my God' (Ruth 1:16)."
    },
    {
        question: "At what time of year did Naomi and Ruth arrive in Bethlehem?",
        options: ["Wheat harvest", "Beginning of barley harvest", "Grape harvest", "Passover"],
        correct: 1,
        explanation: "They came to Bethlehem in the beginning of barley harvest (Ruth 1:22), which was springtime."
    },
    {
        question: "Whose field did Ruth happen to glean in?",
        options: ["Elimelech's", "Boaz's", "The king's", "A stranger's"],
        correct: 1,
        explanation: "Ruth's 'hap was to light on a part of the field belonging unto Boaz' (Ruth 2:3). This was God's providence."
    },
    {
        question: "How was Boaz related to Elimelech?",
        options: ["Brother", "Kinsman of her husband's", "Cousin", "Uncle"],
        correct: 1,
        explanation: "Boaz was 'a kinsman of her husband's, a mighty man of wealth' (Ruth 2:1). This made him a potential redeemer."
    },
    {
        question: "What greeting did Boaz give his reapers?",
        options: ["Good morning", "The LORD be with you", "Peace be with you", "Welcome"],
        correct: 1,
        explanation: "Boaz said unto the reapers, 'The LORD be with you.' And they answered, 'The LORD bless thee' (Ruth 2:4)."
    },
    {
        question: "What did Boaz tell Ruth to drink when she was thirsty?",
        options: ["Water the young men drew", "Wine", "Milk", "Well water"],
        correct: 0,
        explanation: "Boaz told Ruth 'when thou art athirst, go unto the vessels, and drink of that which the young men have drawn' (Ruth 2:9)."
    },
    {
        question: "Under whose wings had Ruth come to trust?",
        options: ["Naomi's", "Boaz's", "The LORD God of Israel's", "Elimelech's"],
        correct: 2,
        explanation: "Boaz said to Ruth 'a full reward be given thee of the LORD God of Israel, under whose wings thou art come to trust' (Ruth 2:12)."
    },
    {
        question: "What did Boaz command his young men to let Ruth glean among?",
        options: ["The corners only", "The sheaves", "The leftovers", "The edges"],
        correct: 1,
        explanation: "Boaz commanded 'Let her glean even among the sheaves, and reproach her not' (Ruth 2:15), going beyond normal gleaning rights."
    },
    {
        question: "How much barley did Ruth glean on her first day?",
        options: ["A handful", "About an ephah", "A bushel", "Half an ephah"],
        correct: 1,
        explanation: "Ruth gleaned in the field until evening and beat out what she had gleaned: 'and it was about an ephah of barley' (Ruth 2:17)."
    },
    {
        question: "What did Boaz give Ruth to eat at mealtime?",
        options: ["Bread and fish", "Bread and wine", "Bread and vinegar", "Bread and honey"],
        correct: 2,
        explanation: "At meal time Boaz said 'Come thou hither, and eat of the bread, and dip thy morsel in the vinegar' (Ruth 2:14)."
    },
    {
        question: "How long did Ruth glean in Boaz's fields?",
        options: ["One week", "One month", "Until the end of barley and wheat harvest", "One season"],
        correct: 2,
        explanation: "Ruth 'gleaned in the field until even, and dwelt with her mother in law' until the end of barley harvest and of wheat harvest (Ruth 2:23)."
    },
    {
        question: "Where did Naomi tell Ruth to go to meet Boaz?",
        options: ["The field", "The threshing floor", "The city gate", "His house"],
        correct: 1,
        explanation: "Naomi told Ruth that Boaz 'winnoweth barley to night in the threshingfloor' and gave her instructions to go there (Ruth 3:2)."
    },
    {
        question: "What did Naomi tell Ruth to do before going to the threshing floor?",
        options: ["Fast and pray", "Wash, anoint herself, and put on her best raiment", "Bring an offering", "Tell no one"],
        correct: 1,
        explanation: "Naomi said 'Wash thyself therefore, and anoint thee, and put thy raiment upon thee, and get thee down to the floor' (Ruth 3:3)."
    },
    {
        question: "What did Ruth do at midnight on the threshing floor?",
        options: ["Woke Boaz", "Uncovered his feet and lay down", "Prayed", "Gleaned grain"],
        correct: 1,
        explanation: "Ruth 'came softly, and uncovered his feet, and laid her down' (Ruth 3:7). When Boaz awoke at midnight, she was at his feet."
    },
    {
        question: "What did Ruth ask Boaz to do?",
        options: ["Marry her", "Spread his skirt over her", "Give her food", "Bless Naomi"],
        correct: 1,
        explanation: "Ruth said 'spread therefore thy skirt over thine handmaid; for thou art a near kinsman' (Ruth 3:9), asking him to be her redeemer."
    },
    {
        question: "What did Boaz give Ruth before she left the threshing floor?",
        options: ["Money", "Six measures of barley", "A veil", "Jewelry"],
        correct: 1,
        explanation: "Boaz measured six measures of barley and laid it on Ruth before she went into the city (Ruth 3:15)."
    },
    {
        question: "What problem did Boaz need to resolve before redeeming Ruth?",
        options: ["He needed permission from Naomi", "There was a kinsman nearer than he", "He needed the king's approval", "He was already married"],
        correct: 1,
        explanation: "Boaz said 'there is a kinsman nearer than I' (Ruth 3:12), who had the first right to redeem."
    },
    {
        question: "Where did Boaz meet with the nearer kinsman?",
        options: ["The temple", "The field", "The city gate", "Boaz's house"],
        correct: 2,
        explanation: "Boaz 'went up to the gate, and sat him down there' and called the kinsman to come and sit down (Ruth 4:1)."
    },
    {
        question: "How many elders did Boaz gather as witnesses?",
        options: ["Seven", "Ten", "Twelve", "Seventy"],
        correct: 1,
        explanation: "Boaz took ten men of the elders of the city and said 'Sit ye down here.' And they sat down (Ruth 4:2)."
    },
    {
        question: "What was exchanged to confirm transactions in Israel?",
        options: ["A handshake", "A written contract", "A man plucked off his shoe", "A sacrificial offering"],
        correct: 2,
        explanation: "In Israel, 'to confirm all things; a man plucked off his shoe, and gave it to his neighbour' (Ruth 4:7). The nearer kinsman did this."
    },
    {
        question: "What was the name of Ruth and Boaz's son?",
        options: ["Jesse", "David", "Obed", "Boaz"],
        correct: 2,
        explanation: "Ruth bore a son, and they called his name Obed (Ruth 4:17). Obed means 'servant' or 'worshiper.'"
    },
    {
        question: "Who was Ruth's famous great-grandson?",
        options: ["Solomon", "David", "Samuel", "Saul"],
        correct: 1,
        explanation: "Obed begat Jesse, and Jesse begat David (Ruth 4:17, 22). Ruth became King David's great-grandmother."
    },
    {
        question: "What did the women say Obed would be to Naomi?",
        options: ["Her comfort", "A restorer of her life and nourisher of her old age", "Her joy", "Her blessing"],
        correct: 1,
        explanation: "The women said to Naomi that the child 'shall be unto thee a restorer of thy life, and a nourisher of thine old age' (Ruth 4:15)."
    }
];

// Export for use in quiz page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ruthQuestions;
}

window.ruthQuestions = ruthQuestions;
