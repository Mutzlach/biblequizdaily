const revelationQuestions = [
    {
        question: "Who wrote the Book of Revelation?",
        options: ["Peter", "Paul", "John", "James"],
        correct: 2,
        explanation: "The Apostle John wrote Revelation while exiled on the island of Patmos (Revelation 1:1, 1:9). He received these visions from Jesus Christ."
    },
    {
        question: "Where was John when he received the visions of Revelation?",
        options: ["Island of Patmos", "Jerusalem", "Ephesus", "Rome"],
        correct: 0,
        explanation: "John was on the isle called Patmos for the word of God and testimony of Jesus Christ (Revelation 1:9). Patmos is a small rocky island in the Aegean Sea."
    },
    {
        question: "How many churches in Asia did John write letters to in Revelation?",
        options: ["Five", "Seven", "Ten", "Twelve"],
        correct: 1,
        explanation: "John wrote to seven churches: Ephesus, Smyrna, Pergamos, Thyatira, Sardis, Philadelphia, and Laodicea (Revelation 1:11). Seven represents completeness."
    },
    {
        question: "Which church did Jesus say had left their first love?",
        options: ["Ephesus", "Smyrna", "Pergamos", "Philadelphia"],
        correct: 0,
        explanation: "Jesus told the church at Ephesus, 'thou hast left thy first love' (Revelation 2:4). Despite their good works and discernment, their devotion had cooled."
    },
    {
        question: "Which church did Jesus have nothing against?",
        options: ["Ephesus", "Thyatira", "Philadelphia", "Laodicea"],
        correct: 2,
        explanation: "Jesus had no rebuke for Philadelphia, saying 'thou hast a little strength, and hast kept my word' (Revelation 3:8). Smyrna also received no rebuke."
    },
    {
        question: "What did Jesus say about the church of Laodicea?",
        options: ["They were faithful", "They were lukewarm", "They were persecuted", "They held fast"],
        correct: 1,
        explanation: "Jesus said the Laodiceans were 'lukewarm, and neither cold nor hot' and threatened to spew them out of His mouth (Revelation 3:16)."
    },
    {
        question: "How many living creatures are around God's throne in heaven?",
        options: ["Two", "Four", "Seven", "Twelve"],
        correct: 1,
        explanation: "Four living creatures (beasts) are around the throne, full of eyes (Revelation 4:6). They represent creation giving glory to God."
    },
    {
        question: "How many elders sit on thrones around God's throne?",
        options: ["Twelve", "Twenty-four", "Forty-eight", "Seventy"],
        correct: 1,
        explanation: "Twenty-four elders clothed in white raiment with crowns of gold sit on thrones around God's throne (Revelation 4:4). They may represent the twelve tribes and twelve apostles."
    },
    {
        question: "What is the Lamb in Revelation worthy to open?",
        options: ["The gates of heaven", "The book with seven seals", "The ark of the covenant", "The bottomless pit"],
        correct: 1,
        explanation: "The Lamb (Jesus) is worthy to open the book sealed with seven seals (Revelation 5:5-9). No one else in heaven or earth was found worthy."
    },
    {
        question: "What color was the first horse of the apocalypse?",
        options: ["White", "Red", "Black", "Pale"],
        correct: 0,
        explanation: "When the first seal was opened, a white horse appeared with a rider having a bow and crown, going forth conquering (Revelation 6:2)."
    },
    {
        question: "What did the rider on the red horse take from the earth?",
        options: ["Life", "Peace", "Food", "Light"],
        correct: 1,
        explanation: "The rider on the red horse was given power to take peace from the earth, that people should kill one another (Revelation 6:4)."
    },
    {
        question: "What did the rider on the black horse hold?",
        options: ["A sword", "A pair of balances", "A sickle", "A bow"],
        correct: 1,
        explanation: "The rider on the black horse held a pair of balances in his hand (Revelation 6:5), representing famine and economic hardship."
    },
    {
        question: "The fourth horseman's name was:",
        options: ["War", "Famine", "Death", "Pestilence"],
        correct: 2,
        explanation: "The fourth rider's name was Death, and Hell followed with him (Revelation 6:8). They had power over a fourth of the earth."
    },
    {
        question: "How many from each tribe of Israel were sealed?",
        options: ["12,000", "24,000", "100,000", "144,000"],
        correct: 0,
        explanation: "Twelve thousand from each of the twelve tribes were sealed, totaling 144,000 (Revelation 7:4-8). These are protected servants of God."
    },
    {
        question: "What were the two witnesses given power to do?",
        options: ["Heal the sick", "Prophesy for 1,260 days", "Open the seals", "Pour out bowls"],
        correct: 1,
        explanation: "God gave His two witnesses power to prophesy a thousand two hundred and threescore days, clothed in sackcloth (Revelation 11:3)."
    },
    {
        question: "How long did the two witnesses lie dead in the street?",
        options: ["One day", "Three and a half days", "Seven days", "Forty days"],
        correct: 1,
        explanation: "The two witnesses' dead bodies lay in the street for three days and a half before God raised them (Revelation 11:9, 11)."
    },
    {
        question: "Who is described as a great red dragon with seven heads and ten horns?",
        options: ["The beast from the sea", "Satan", "The false prophet", "Babylon"],
        correct: 1,
        explanation: "The great red dragon with seven heads and ten horns is identified as 'that old serpent, called the Devil, and Satan' (Revelation 12:9)."
    },
    {
        question: "How many heads did the beast from the sea have?",
        options: ["Three", "Seven", "Ten", "Twelve"],
        correct: 1,
        explanation: "The beast rising from the sea had seven heads and ten horns (Revelation 13:1). One head had a deadly wound that was healed."
    },
    {
        question: "What is the number of the beast?",
        options: ["333", "616", "666", "999"],
        correct: 2,
        explanation: "The number of the beast is six hundred threescore and six (666), described as 'the number of a man' (Revelation 13:18)."
    },
    {
        question: "Who sang the song of Moses and the Lamb?",
        options: ["The elders", "Those victorious over the beast", "The angels", "The two witnesses"],
        correct: 1,
        explanation: "Those who had gotten victory over the beast stood on a sea of glass and sang the song of Moses and of the Lamb (Revelation 15:2-3)."
    },
    {
        question: "How many bowls of God's wrath were poured out?",
        options: ["Three", "Seven", "Ten", "Twelve"],
        correct: 1,
        explanation: "Seven angels poured out seven vials (bowls) full of the wrath of God upon the earth (Revelation 16:1). These are the final judgments."
    },
    {
        question: "What appeared on the foreheads of the woman riding the beast?",
        options: ["A crown", "A name written: Mystery, Babylon", "The mark of the beast", "Seven stars"],
        correct: 1,
        explanation: "Upon the woman's forehead was written: 'MYSTERY, BABYLON THE GREAT, THE MOTHER OF HARLOTS AND ABOMINATIONS' (Revelation 17:5)."
    },
    {
        question: "What color was the horse that Jesus rode when He returned?",
        options: ["Black", "Red", "White", "Pale"],
        correct: 2,
        explanation: "Jesus sat upon a white horse when heaven opened, called Faithful and True (Revelation 19:11). He came to judge and make war."
    },
    {
        question: "What name is written on Jesus's vesture and thigh?",
        options: ["King of Kings and Lord of Lords", "Alpha and Omega", "Faithful and True", "The Word of God"],
        correct: 0,
        explanation: "On His vesture and thigh was written: 'KING OF KINGS, AND LORD OF LORDS' (Revelation 19:16). This declares His supreme authority."
    },
    {
        question: "How long will Satan be bound in the bottomless pit?",
        options: ["100 years", "500 years", "1,000 years", "Forever"],
        correct: 2,
        explanation: "An angel bound Satan and cast him into the bottomless pit for a thousand years (Revelation 20:2-3). After this he is loosed for a little season."
    },
    {
        question: "What is the second death?",
        options: ["Physical death", "The lake of fire", "Spiritual blindness", "The grave"],
        correct: 1,
        explanation: "The second death is the lake of fire (Revelation 20:14). Those whose names are not in the book of life are cast into it."
    },
    {
        question: "What will God wipe away from all faces in the new earth?",
        options: ["Sorrow", "Tears", "Pain", "All of these"],
        correct: 1,
        explanation: "God shall wipe away all tears from their eyes (Revelation 21:4). There shall be no more death, sorrow, crying, or pain."
    },
    {
        question: "The New Jerusalem has how many gates?",
        options: ["Four", "Seven", "Twelve", "Twenty-four"],
        correct: 2,
        explanation: "The New Jerusalem has twelve gates, three on each side, with the names of the twelve tribes of Israel (Revelation 21:12-13)."
    },
    {
        question: "What is there no need of in the New Jerusalem?",
        options: ["Food", "Water", "The sun", "Houses"],
        correct: 2,
        explanation: "The city has no need of the sun or moon, for the glory of God lightens it and the Lamb is the light (Revelation 21:23)."
    },
    {
        question: "What flows from the throne of God in the New Jerusalem?",
        options: ["River of life", "River of fire", "River of blood", "River of oil"],
        correct: 0,
        explanation: "A pure river of water of life, clear as crystal, proceeds from the throne of God and the Lamb (Revelation 22:1)."
    }
];

// Export for use in quiz page
if (typeof module !== 'undefined' && module.exports) {
    module.exports = revelationQuestions;
}

window.revelationQuestions = revelationQuestions;
