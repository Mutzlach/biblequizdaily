const tenCommandmentsQuestions = [
    {
        question: "Where in the Bible are the Ten Commandments first recorded?",
        options: ["Leviticus 19", "Exodus 20", "Deuteronomy 5", "Genesis 9"],
        correct: 1,
        explanation: "The Ten Commandments are first recorded in Exodus 20:1-17, when God gave them to Moses on Mount Sinai. They are later repeated in Deuteronomy 5:6-21."
    },
    {
        question: "On which mountain did God give the Ten Commandments to Moses?",
        options: ["Mount Carmel", "Mount Horeb", "Mount Sinai", "Mount Nebo"],
        correct: 2,
        explanation: "God gave the Ten Commandments to Moses on Mount Sinai (Exodus 19:20). Mount Sinai is also called Horeb in some passages."
    },
    {
        question: "What is the first commandment?",
        options: ["Thou shalt not kill", "Honour thy father and mother", "Thou shalt have no other gods before me", "Remember the sabbath day"],
        correct: 2,
        explanation: "The first commandment is 'Thou shalt have no other gods before me' (Exodus 20:3). This establishes God's exclusive right to our worship."
    },
    {
        question: "What material were the tablets of the Ten Commandments made from?",
        options: ["Stone", "Gold", "Bronze", "Wood"],
        correct: 0,
        explanation: "The Ten Commandments were written on tablets of stone (Exodus 24:12). God Himself wrote them with His finger (Exodus 31:18)."
    },
    {
        question: "Which commandment specifically forbids making graven images?",
        options: ["First", "Second", "Third", "Fourth"],
        correct: 1,
        explanation: "The second commandment states: 'Thou shalt not make unto thee any graven image' (Exodus 20:4). This prohibits idol worship."
    },
    {
        question: "What does 'taking the Lord's name in vain' mean?",
        options: ["Never saying God's name", "Misusing or disrespecting God's name", "Not praying daily", "Refusing to be baptized"],
        correct: 1,
        explanation: "The third commandment forbids misusing or disrespecting God's name (Exodus 20:7). This includes false oaths, blasphemy, and casual misuse of His holy name."
    },
    {
        question: "Which day is the Sabbath according to the Ten Commandments?",
        options: ["First day", "Sixth day", "Seventh day", "Any day you choose"],
        correct: 2,
        explanation: "The fourth commandment says 'Remember the sabbath day, to keep it holy' and specifies the seventh day (Exodus 20:8-10), reflecting God's rest after creation."
    },
    {
        question: "How many commandments deal with our relationship with God?",
        options: ["Two", "Four", "Six", "Ten"],
        correct: 1,
        explanation: "The first four commandments govern our relationship with God (no other gods, no idols, not taking His name in vain, keeping Sabbath). The remaining six govern relationships with others."
    },
    {
        question: "What is the fifth commandment?",
        options: ["Thou shalt not kill", "Thou shalt not steal", "Honour thy father and thy mother", "Thou shalt not bear false witness"],
        correct: 2,
        explanation: "The fifth commandment is 'Honour thy father and thy mother' (Exodus 20:12). It's the first commandment with a promise: long life in the land."
    },
    {
        question: "What promise is attached to honoring your parents?",
        options: ["Great riches", "Many children", "Long life", "Perfect health"],
        correct: 2,
        explanation: "The promise attached to honoring parents is 'that thy days may be long upon the land which the LORD thy God giveth thee' (Exodus 20:12)."
    },
    {
        question: "The sixth commandment 'Thou shalt not kill' more accurately means:",
        options: ["No killing of any kind", "Thou shalt not murder", "No hunting animals", "No capital punishment"],
        correct: 1,
        explanation: "The Hebrew word 'ratsach' specifically means murder—unlawful killing. The commandment prohibits murder, not lawful killing such as self-defense or just war (Exodus 20:13)."
    },
    {
        question: "Which commandment protects the sanctity of marriage?",
        options: ["Fifth", "Sixth", "Seventh", "Eighth"],
        correct: 2,
        explanation: "The seventh commandment is 'Thou shalt not commit adultery' (Exodus 20:14), which protects the sanctity and exclusivity of the marriage covenant."
    },
    {
        question: "What does the eighth commandment forbid?",
        options: ["Lying", "Murder", "Stealing", "Coveting"],
        correct: 2,
        explanation: "The eighth commandment states 'Thou shalt not steal' (Exodus 20:15). This protects private property and condemns theft in all forms."
    },
    {
        question: "The ninth commandment forbids bearing false witness against your:",
        options: ["Enemy", "Neighbour", "Brother", "Master"],
        correct: 1,
        explanation: "The ninth commandment says 'Thou shalt not bear false witness against thy neighbour' (Exodus 20:16). This requires truthfulness and condemns lies, especially in legal settings."
    },
    {
        question: "Which is the last of the Ten Commandments?",
        options: ["Thou shalt not steal", "Thou shalt not covet", "Thou shalt not kill", "Honour thy parents"],
        correct: 1,
        explanation: "The tenth and final commandment is 'Thou shalt not covet' (Exodus 20:17), which addresses the heart's desires rather than outward actions."
    },
    {
        question: "What specific items does the tenth commandment mention not to covet?",
        options: ["Gold and silver", "Neighbour's house, wife, servants, animals", "King's throne", "Temple treasures"],
        correct: 1,
        explanation: "The tenth commandment specifically lists: thy neighbour's house, wife, manservant, maidservant, ox, ass, or anything that belongs to thy neighbour (Exodus 20:17)."
    },
    {
        question: "Who wrote the Ten Commandments on the stone tablets?",
        options: ["Moses", "Aaron", "God Himself", "Joshua"],
        correct: 2,
        explanation: "God Himself wrote the commandments: 'written with the finger of God' (Exodus 31:18). Moses did not write them; God personally inscribed them on stone."
    },
    {
        question: "How many stone tablets contained the Ten Commandments?",
        options: ["One", "Two", "Three", "Ten"],
        correct: 1,
        explanation: "The commandments were written on two tablets of stone (Exodus 31:18). Traditionally, commandments 1-4 were on one tablet (duties to God) and 5-10 on the other (duties to people)."
    },
    {
        question: "What happened to the first set of tablets Moses received?",
        options: ["Placed in the ark", "Moses broke them", "Stolen by enemies", "Lost in the wilderness"],
        correct: 1,
        explanation: "When Moses came down from the mountain and saw the people worshiping the golden calf, he broke the tablets in anger (Exodus 32:19). God later gave him a second set."
    },
    {
        question: "In Jesus' teaching, what two commandments summarize all the Law?",
        options: ["Do not steal and do not lie", "Love God and love your neighbour", "Keep Sabbath and honour parents", "Do not kill and do not covet"],
        correct: 1,
        explanation: "Jesus said all the Law hangs on two commandments: Love God with all your heart, soul, and mind; and love your neighbour as yourself (Matthew 22:37-40)."
    },
    {
        question: "In the Sermon on the Mount, Jesus said being angry with your brother violates which commandment?",
        options: ["Fifth - honour parents", "Sixth - do not murder", "Ninth - false witness", "Tenth - do not covet"],
        correct: 1,
        explanation: "Jesus taught that anger in the heart violates the spirit of 'Thou shalt not kill,' showing that murder begins with anger (Matthew 5:21-22)."
    },
    {
        question: "Jesus equated lustful thoughts with breaking which commandment?",
        options: ["Sixth - murder", "Seventh - adultery", "Ninth - false witness", "Tenth - coveting"],
        correct: 1,
        explanation: "Jesus said 'whosoever looketh on a woman to lust after her hath committed adultery with her already in his heart' (Matthew 5:27-28)."
    },
    {
        question: "According to Paul, love is the fulfilling of what?",
        options: ["The prophecies", "The Law", "The promises", "The sacrifices"],
        correct: 1,
        explanation: "Romans 13:10 states 'love is the fulfilling of the law.' When we truly love God and others, we naturally keep the commandments."
    },
    {
        question: "What was the response of the people when they heard God's voice at Sinai?",
        options: ["They rejoiced", "They were afraid", "They worshiped", "They complained"],
        correct: 1,
        explanation: "The people were terrified when they heard God's voice and saw the thunder, lightning, and smoke. They asked Moses to speak to them instead of God (Exodus 20:18-19)."
    },
    {
        question: "How long did Moses stay on Mount Sinai receiving the Law?",
        options: ["7 days", "30 days", "40 days and nights", "90 days"],
        correct: 2,
        explanation: "Moses was on Mount Sinai for 40 days and 40 nights receiving the Law from God (Exodus 24:18). During this time the people made the golden calf."
    },
    {
        question: "Where were the tablets of the Ten Commandments kept?",
        options: ["In Moses' tent", "In the Ark of the Covenant", "In the temple treasury", "Buried at Sinai"],
        correct: 1,
        explanation: "The tablets were placed inside the Ark of the Covenant (Exodus 25:16, Deuteronomy 10:5), which resided in the Holy of Holies in the tabernacle and later the temple."
    },
    {
        question: "Which commandment mentions both father AND mother specifically?",
        options: ["First", "Third", "Fifth", "Seventh"],
        correct: 2,
        explanation: "The fifth commandment specifically says 'Honour thy father and thy mother' (Exodus 20:12), giving equal honor to both parents."
    },
    {
        question: "According to Deuteronomy, what reason is given for keeping the Sabbath?",
        options: ["God rested on the seventh day", "Israel was delivered from Egypt", "To prepare for worship", "Angels commanded it"],
        correct: 1,
        explanation: "While Exodus 20 cites creation rest, Deuteronomy 5:15 gives an additional reason: 'remember that thou wast a servant in Egypt' and God brought you out, therefore keep the Sabbath."
    },
    {
        question: "What did Jesus say about the commandments in Matthew 5:17?",
        options: ["He came to abolish them", "He came to fulfill them", "They no longer apply", "They need updating"],
        correct: 1,
        explanation: "Jesus declared: 'Think not that I am come to destroy the law...I am not come to destroy, but to fulfil' (Matthew 5:17). Christ perfectly fulfilled the Law."
    },
    {
        question: "Which Old Testament book repeats the Ten Commandments a second time?",
        options: ["Leviticus", "Numbers", "Deuteronomy", "Joshua"],
        correct: 2,
        explanation: "Deuteronomy 5:6-21 records Moses repeating the Ten Commandments to the new generation before entering the Promised Land. 'Deuteronomy' means 'second law.'"
    }
];

// Export for use in quiz page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tenCommandmentsQuestions;
}

window.tenCommandmentsQuestions = tenCommandmentsQuestions;
