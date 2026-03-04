const kingsOfIsraelQuestions = [
    {
        question: "Who was the first king of Israel?",
        options: ["David", "Saul", "Solomon", "Samuel"],
        correct: 1,
        explanation: "Saul was Israel's first king, anointed by the prophet Samuel (1 Samuel 10:1). The people had demanded a king to be like other nations."
    },
    {
        question: "Which prophet anointed Saul as king?",
        options: ["Elijah", "Nathan", "Samuel", "Elisha"],
        correct: 2,
        explanation: "Samuel the prophet anointed Saul with oil and proclaimed him king over Israel (1 Samuel 10:1). Samuel had warned the people about the dangers of having a king."
    },
    {
        question: "What was David's occupation before becoming king?",
        options: ["Soldier", "Shepherd", "Priest", "Merchant"],
        correct: 1,
        explanation: "David was a shepherd boy tending his father Jesse's sheep when Samuel came to anoint him (1 Samuel 16:11). He later killed Goliath while still a shepherd."
    },
    {
        question: "Which king built the temple in Jerusalem?",
        options: ["David", "Saul", "Solomon", "Rehoboam"],
        correct: 2,
        explanation: "Solomon built the magnificent temple in Jerusalem (1 Kings 6:1). David had wanted to build it, but God said his son would do so because David was a man of war."
    },
    {
        question: "How many sons did Jesse have, including David?",
        options: ["Six", "Seven", "Eight", "Ten"],
        correct: 2,
        explanation: "Jesse had eight sons, and David was the youngest (1 Samuel 16:10-11). Samuel rejected the first seven before God revealed that David was the chosen one."
    },
    {
        question: "What musical instrument did David play for King Saul?",
        options: ["Trumpet", "Harp", "Flute", "Tambourine"],
        correct: 1,
        explanation: "David played the harp to soothe Saul when an evil spirit troubled him (1 Samuel 16:23). David's musical skill brought him into Saul's service."
    },
    {
        question: "Which king was known for his great wisdom?",
        options: ["David", "Saul", "Hezekiah", "Solomon"],
        correct: 3,
        explanation: "Solomon was renowned for his wisdom, which God granted when he asked for an understanding heart (1 Kings 3:12). Kings from all nations came to hear his wisdom."
    },
    {
        question: "What caused the kingdom to split after Solomon's death?",
        options: ["War with Egypt", "Rehoboam's harsh policies", "Plague", "Famine"],
        correct: 1,
        explanation: "Solomon's son Rehoboam refused to lighten the people's burden and threatened heavier taxes and harsher treatment, causing ten tribes to rebel (1 Kings 12:14)."
    },
    {
        question: "Who became king of the northern kingdom (Israel) after the split?",
        options: ["Rehoboam", "Jeroboam", "Abijah", "Ahab"],
        correct: 1,
        explanation: "Jeroboam became king of the ten northern tribes (Israel), while Rehoboam ruled the southern tribes (Judah) (1 Kings 12:20)."
    },
    {
        question: "What sinful thing did Jeroboam set up to prevent people from going to Jerusalem?",
        options: ["Asherah poles", "High places", "Golden calves", "Temples to Baal"],
        correct: 2,
        explanation: "Jeroboam set up two golden calves, one in Bethel and one in Dan, telling the people 'these are your gods' to keep them from Jerusalem (1 Kings 12:28)."
    },
    {
        question: "Which wicked queen was married to King Ahab?",
        options: ["Bathsheba", "Jezebel", "Athaliah", "Esther"],
        correct: 1,
        explanation: "Jezebel, daughter of the king of Sidon, married Ahab and led him into Baal worship (1 Kings 16:31). She was notorious for killing God's prophets."
    },
    {
        question: "Which prophet confronted King Ahab and Queen Jezebel?",
        options: ["Isaiah", "Jeremiah", "Elijah", "Elisha"],
        correct: 2,
        explanation: "Elijah the prophet boldly confronted Ahab and Jezebel, challenging the prophets of Baal on Mount Carmel (1 Kings 18:17-40). Jezebel threatened his life afterward."
    },
    {
        question: "How many years did Solomon reign as king?",
        options: ["30 years", "40 years", "50 years", "70 years"],
        correct: 1,
        explanation: "Solomon reigned in Jerusalem over all Israel for forty years (1 Kings 11:42). This was the same length as both Saul's and David's reigns."
    },
    {
        question: "What was the name of the woman who caused King David to sin?",
        options: ["Abigail", "Bathsheba", "Michal", "Tamar"],
        correct: 1,
        explanation: "David committed adultery with Bathsheba and then arranged for her husband Uriah to be killed in battle (2 Samuel 11:3-4). Nathan the prophet later confronted David."
    },
    {
        question: "Which prophet told David, 'Thou art the man' after his sin?",
        options: ["Samuel", "Nathan", "Gad", "Elijah"],
        correct: 1,
        explanation: "Nathan the prophet told David a parable, then declared 'Thou art the man,' revealing that God knew of David's sin with Bathsheba (2 Samuel 12:7)."
    },
    {
        question: "Which king of Judah was only eight years old when he began to reign?",
        options: ["Joash", "Manasseh", "Josiah", "Jehoiachin"],
        correct: 2,
        explanation: "Josiah was eight years old when he became king and reigned thirty-one years (2 Kings 22:1). He became one of Judah's most righteous kings."
    },
    {
        question: "During whose reign was the Book of the Law found in the temple?",
        options: ["Hezekiah", "Josiah", "Asa", "Jehoshaphat"],
        correct: 1,
        explanation: "During Josiah's reign, Hilkiah the priest found the book of the law in the house of the Lord during temple repairs (2 Kings 22:8). This sparked major reforms."
    },
    {
        question: "Which king of Judah destroyed the bronze serpent Moses had made?",
        options: ["Asa", "Jehoshaphat", "Hezekiah", "Josiah"],
        correct: 2,
        explanation: "King Hezekiah broke in pieces the bronze serpent that Moses had made because the people were burning incense to it (2 Kings 18:4). He called it 'Nehushtan' (a piece of brass)."
    },
    {
        question: "Which wicked king of Judah reigned for 55 years, longer than any other?",
        options: ["Ahaz", "Manasseh", "Amon", "Zedekiah"],
        correct: 1,
        explanation: "Manasseh reigned fifty-five years in Jerusalem and did much evil, even sacrificing his own son (2 Kings 21:1-2). He later repented in captivity."
    },
    {
        question: "Who was David's closest friend?",
        options: ["Absalom", "Solomon", "Jonathan", "Joab"],
        correct: 2,
        explanation: "Jonathan, King Saul's son, was David's closest friend. Their souls were 'knit together' and Jonathan loved David as his own soul (1 Samuel 18:1)."
    },
    {
        question: "Which of David's sons tried to take the throne from him?",
        options: ["Solomon", "Absalom", "Amnon", "Adonijah"],
        correct: 1,
        explanation: "Absalom, David's son, conspired against his father and declared himself king, forcing David to flee Jerusalem (2 Samuel 15:10-14)."
    },
    {
        question: "How many wives did Solomon have?",
        options: ["70", "300", "700", "1,000"],
        correct: 2,
        explanation: "Solomon had seven hundred wives, princesses, and three hundred concubines (1 Kings 11:3). His foreign wives turned his heart away from the Lord in his old age."
    },
    {
        question: "Which king prayed for his life to be extended and received 15 more years?",
        options: ["David", "Solomon", "Hezekiah", "Josiah"],
        correct: 2,
        explanation: "When Hezekiah was sick unto death, he prayed to the Lord. God added fifteen years to his life and gave him a sign (2 Kings 20:1-6)."
    },
    {
        question: "Who was the last king of Judah before the Babylonian captivity?",
        options: ["Jehoiakim", "Jehoiachin", "Zedekiah", "Josiah"],
        correct: 2,
        explanation: "Zedekiah was the last king of Judah. He reigned eleven years before Nebuchadnezzar captured Jerusalem and took the people to Babylon (2 Kings 24:18; 25:7)."
    },
    {
        question: "Which king did God strike with leprosy for entering the temple unlawfully?",
        options: ["Uzziah", "Ahaz", "Jotham", "Hezekiah"],
        correct: 0,
        explanation: "King Uzziah (also called Azariah) became leprous when he entered the temple to burn incense, a duty reserved for priests (2 Chronicles 26:16-21)."
    },
    {
        question: "What did Solomon ask God for when God appeared to him in a dream?",
        options: ["Long life", "Riches", "An understanding heart", "Victory over enemies"],
        correct: 2,
        explanation: "Solomon asked for an understanding heart to judge God's people and discern between good and bad (1 Kings 3:9). God was pleased and gave him wisdom, plus riches and honor."
    },
    {
        question: "Which king of Israel was anointed by Elisha's servant to destroy the house of Ahab?",
        options: ["Jehu", "Jehoram", "Jehoash", "Jeroboam II"],
        correct: 0,
        explanation: "Jehu was anointed king by one of Elisha's servants and commanded to strike down the house of Ahab (2 Kings 9:1-10). He fulfilled this completely."
    },
    {
        question: "How did King Saul die?",
        options: ["In battle against Philistines", "By David's hand", "Of old age", "Struck by lightning"],
        correct: 0,
        explanation: "Saul died in battle against the Philistines on Mount Gilboa. Wounded by arrows, he fell on his own sword rather than be captured (1 Samuel 31:4)."
    },
    {
        question: "Which judge and prophet anointed both Saul and David as kings?",
        options: ["Eli", "Samuel", "Nathan", "Gad"],
        correct: 1,
        explanation: "Samuel anointed both Saul (1 Samuel 10:1) and later David (1 Samuel 16:13) as kings over Israel. He served as judge, prophet, and kingmaker."
    },
    {
        question: "What was the capital city of the northern kingdom of Israel?",
        options: ["Jerusalem", "Bethel", "Samaria", "Dan"],
        correct: 2,
        explanation: "Samaria became the capital of the northern kingdom of Israel. King Omri bought the hill of Samaria and built the city there (1 Kings 16:24)."
    }
];

// Export for use in quiz page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = kingsOfIsraelQuestions;
}

window.kingsOfIsraelQuestions = kingsOfIsraelQuestions;
