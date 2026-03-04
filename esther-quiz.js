const estherQuestions = [
    {
        question: "What was the name of the king in the Book of Esther?",
        options: ["Nebuchadnezzar", "Cyrus", "Ahasuerus", "Darius"],
        correct: 2,
        explanation: "The king was Ahasuerus (also known as Xerxes), who reigned from India to Ethiopia over 127 provinces (Esther 1:1)."
    },
    {
        question: "How many provinces did King Ahasuerus rule over?",
        options: ["50", "100", "127", "200"],
        correct: 2,
        explanation: "Ahasuerus reigned 'from India even unto Ethiopia, over an hundred and seven and twenty provinces' (Esther 1:1)."
    },
    {
        question: "What was the name of the first queen who was removed?",
        options: ["Esther", "Vashti", "Zeresh", "Candace"],
        correct: 1,
        explanation: "Queen Vashti refused to come when the king commanded, so she was removed from being queen (Esther 1:12, 19)."
    },
    {
        question: "Why was Queen Vashti removed from her position?",
        options: ["She committed treason", "She refused to come when the king called", "She was unfaithful", "She plotted against the king"],
        correct: 1,
        explanation: "Vashti refused to come at the king's commandment, which displeased the king greatly (Esther 1:12). She was removed for her disobedience."
    },
    {
        question: "What was Esther's Hebrew name?",
        options: ["Hannah", "Hadassah", "Rachel", "Deborah"],
        correct: 1,
        explanation: "Esther's Hebrew name was Hadassah. Her cousin Mordecai 'had brought up Hadassah, that is, Esther' (Esther 2:7)."
    },
    {
        question: "Who was Esther's cousin who raised her?",
        options: ["Haman", "Mordecai", "Bigthana", "Teresh"],
        correct: 1,
        explanation: "Mordecai took Esther 'for his own daughter' after her father and mother died (Esther 2:7). He was her cousin."
    },
    {
        question: "How long was the preparation time for women before seeing the king?",
        options: ["6 months", "9 months", "12 months", "2 years"],
        correct: 2,
        explanation: "The purification process was 'twelve months, to wit, six months with oil of myrrh, and six months with sweet odours' (Esther 2:12)."
    },
    {
        question: "Who had charge of the women in the king's house?",
        options: ["Haman", "Hegai", "Harbonah", "Hatach"],
        correct: 1,
        explanation: "Hegai was 'keeper of the women' and had custody of Esther (Esther 2:8). He favored her and gave her preferential treatment."
    },
    {
        question: "Did Esther reveal her nationality when she became queen?",
        options: ["Yes", "No", "Only to the king", "Only to Haman"],
        correct: 1,
        explanation: "Esther 'had not shewed her people nor her kindred: for Mordecai had charged her that she should not shew it' (Esther 2:10)."
    },
    {
        question: "What conspiracy did Mordecai discover?",
        options: ["Haman's plot", "Two doorkeepers plotting to kill the king", "A military rebellion", "A treasury theft"],
        correct: 1,
        explanation: "Mordecai discovered that Bigthan and Teresh, two of the king's chamberlains, sought 'to lay hand on the king Ahasuerus' (Esther 2:21)."
    },
    {
        question: "Who was promoted above all the princes after Esther became queen?",
        options: ["Mordecai", "Haman", "Harbonah", "Hatach"],
        correct: 1,
        explanation: "King Ahasuerus 'promoted Haman the son of Hammedatha the Agagite, and advanced him, and set his seat above all the princes' (Esther 3:1)."
    },
    {
        question: "What did Mordecai refuse to do that angered Haman?",
        options: ["Pay tribute", "Bow down", "Attend the feast", "Leave the gate"],
        correct: 1,
        explanation: "All the king's servants bowed to Haman, 'but Mordecai bowed not, nor did him reverence' (Esther 3:2), which infuriated Haman."
    },
    {
        question: "How much money did Haman offer the king to destroy the Jews?",
        options: ["1,000 talents of silver", "5,000 talents", "10,000 talents of silver", "100,000 talents"],
        correct: 2,
        explanation: "Haman said 'I will pay ten thousand talents of silver' to the king's treasuries to destroy the Jews (Esther 3:9)."
    },
    {
        question: "What did Haman cast to determine the day to destroy the Jews?",
        options: ["Dice", "Lots (Pur)", "Arrows", "Stones"],
        correct: 1,
        explanation: "Haman 'cast Pur, that is, the lot, before Haman from day to day' to determine when to destroy the Jews (Esther 3:7). This is why the feast is called Purim."
    },
    {
        question: "What did Mordecai do when he learned of Haman's decree?",
        options: ["Fled the city", "Rent his clothes and put on sackcloth", "Went into hiding", "Gathered an army"],
        correct: 1,
        explanation: "When Mordecai perceived all that was done, he 'rent his clothes, and put on sackcloth with ashes, and went out into the midst of the city' (Esther 4:1)."
    },
    {
        question: "What famous words did Mordecai say to convince Esther to act?",
        options: ["The king will protect you", "Who knoweth whether thou art come to the kingdom for such a time as this", "You must save yourself", "God will deliver us"],
        correct: 1,
        explanation: "Mordecai challenged Esther with 'who knoweth whether thou art come to the kingdom for such a time as this?' (Esther 4:14)."
    },
    {
        question: "What did Esther ask the Jews in Shushan to do for her?",
        options: ["Pray", "Fast for three days", "Give offerings", "Gather at the palace"],
        correct: 1,
        explanation: "Esther said 'gather together all the Jews...and fast ye for me, and neither eat nor drink three days, night or day' (Esther 4:16)."
    },
    {
        question: "What did Esther say after requesting the fast?",
        options: ["God will save us", "If I perish, I perish", "The king loves me", "Mordecai will help"],
        correct: 1,
        explanation: "After asking for a three-day fast, Esther said 'and so will I go in unto the king...and if I perish, I perish' (Esther 4:16)."
    },
    {
        question: "What did the king extend to Esther when she approached uninvited?",
        options: ["His hand", "His crown", "The golden sceptre", "His ring"],
        correct: 2,
        explanation: "When the king saw Esther standing in the court, 'the king held out to Esther the golden sceptre' (Esther 5:2), granting her access."
    },
    {
        question: "What did Esther request when the king asked what she wanted?",
        options: ["Death to Haman", "To spare the Jews", "That the king and Haman come to a banquet", "Money for the poor"],
        correct: 2,
        explanation: "Esther answered, 'let the king and Haman come this day unto the banquet that I have prepared for him' (Esther 5:4)."
    },
    {
        question: "How tall were the gallows Haman built for Mordecai?",
        options: ["Twenty cubits", "Fifty cubits", "One hundred cubits", "Ten cubits"],
        correct: 1,
        explanation: "Haman's wife and friends suggested 'Let a gallows be made of fifty cubits high' (about 75 feet), and Haman had it made (Esther 5:14)."
    },
    {
        question: "Why couldn't the king sleep one night?",
        options: ["He was sick", "He had nightmares", "His sleep fled from him", "He was worried"],
        correct: 2,
        explanation: "On that night 'could not the king sleep' (Esther 6:1). This sleepless night was divinely orchestrated for Mordecai's deliverance."
    },
    {
        question: "What did the king command to be read when he couldn't sleep?",
        options: ["The law", "His decrees", "The book of chronicles", "Prophecies"],
        correct: 2,
        explanation: "The king commanded 'to bring the book of records of the chronicles; and they were read before the king' (Esther 6:1)."
    },
    {
        question: "What did the king discover Mordecai had never received for saving him?",
        options: ["Money", "Recognition", "Honor or reward", "A promotion"],
        correct: 2,
        explanation: "The chronicles revealed that Mordecai had saved the king, but 'there was nothing done for him' (Esther 6:3). No honor or reward had been given."
    },
    {
        question: "Who did Haman have to honor instead of himself?",
        options: ["The king", "Esther", "Mordecai", "A prince"],
        correct: 2,
        explanation: "When Haman suggested how to honor someone, the king said 'do even so to Mordecai the Jew' (Esther 6:10). Haman had to honor his enemy."
    },
    {
        question: "At which banquet did Esther reveal Haman's plot?",
        options: ["The first", "The second", "The third", "A special dinner"],
        correct: 1,
        explanation: "At the second banquet of wine, Esther revealed 'the adversary and enemy is this wicked Haman' (Esther 7:6)."
    },
    {
        question: "Where was Haman when the king returned from the garden?",
        options: ["At the gate", "Fallen on Esther's couch", "Hiding", "At his house"],
        correct: 1,
        explanation: "The king found Haman 'fallen upon the bed whereon Esther was' (Esther 7:8), which the king interpreted as assault, sealing Haman's fate."
    },
    {
        question: "Where was Haman hanged?",
        options: ["At the city gate", "At the palace", "On the gallows he made for Mordecai", "At his own house"],
        correct: 2,
        explanation: "'So they hanged Haman on the gallows that he had prepared for Mordecai' (Esther 7:10). His evil plan backfired."
    },
    {
        question: "What did Esther receive after Haman's death?",
        options: ["Haman's wealth", "The house of Haman", "Haman's position", "Haman's servants"],
        correct: 1,
        explanation: "The king gave 'the house of Haman the Jews' enemy unto Esther the queen' (Esther 8:1). She received all his possessions."
    },
    {
        question: "What feast was established to commemorate the Jews' deliverance?",
        options: ["Passover", "Pentecost", "Purim", "Tabernacles"],
        correct: 2,
        explanation: "The Jews established the feast of Purim, named after the 'Pur, that is, the lot' that Haman had cast (Esther 9:26), celebrating their deliverance."
    }
];

// Export for use in quiz page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = estherQuestions;
}

window.estherQuestions = estherQuestions;
