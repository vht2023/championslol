const listChampions = [
    {
        name: "Aatrox",
        nickName: "The Darkin Blade",
        birthday: 2013,
        role: "Fighter",
        difficulty: "Moderate",
    },
    {
        name: "Ahri",
        nickName: "The Nine-Tailed Fox",
        birthday: 2011,
        role: "Mage",
        difficulty: "Moderate",
    },
    {
        name: "Akali",
        nickName: "The Rogue Assassin",
        birthday: 2010,
        role: "Assassin",
        difficulty: "Moderate",
    },
];

getChampionRandom = () => {
    const randomIndex = Math.floor(Math.random() * listChampions.length);
    return listChampions[randomIndex];
};

exports.getChampionRandom = getChampionRandom;
