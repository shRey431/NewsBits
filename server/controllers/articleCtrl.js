const fs = require('fs');
const path = require('path');
const { updateSports, updateWorld, updateTech, updateScience } = require('./dataCtrl');

const sportsPath = path.resolve(__dirname, '../data/sports.json');
const worldPath = path.resolve(__dirname, '../data/world.json');
const techPath = path.resolve(__dirname, '../data/technology.json');
const sciencePath = path.resolve(__dirname, '../data/science.json');

const dataWatcher = () => {
    fs.watchFile(sportsPath, { interval: 1000 }, () => {
        console.log("Updating Sports"); 
        updateSports();
    });

    fs.watchFile(worldPath, { interval: 1000 }, () => {
        console.log("Updating World");
        updateWorld();
    });

    fs.watchFile(techPath, { interval: 1000 }, () => {
        console.log("Updating Technology");
        updateTech();
    });

    fs.watchFile(sciencePath, { interval: 1000 }, () => {
        console.log("Updating Science");
        updateScience();
    });
}

module.exports = { dataWatcher };