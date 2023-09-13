#!/usr/bin/env node
const champion = require("../index.js");

random = () => {
    console.log("Your champion is: ", champion.getChampionRandom());
};

random();
