const fs = require('fs');
const sports = require('../models/sportsDataModel');
const world = require('../models/worldDataModel');
const tech = require('../models/techDataModel');
const science = require('../models/scienceDataModel');
const path = require('path');

const sportsPath = path.resolve(__dirname, '../data/sports.json');
const worldPath = path.resolve(__dirname, '../data/world.json');
const techPath = path.resolve(__dirname, '../data/technology.json');
const sciencePath = path.resolve(__dirname, '../data/science.json');

const updateSports = async () => {
    const jsonData = await JSON.parse(fs.readFileSync(sportsPath, 'utf-8'));
    for (const obj of jsonData) {
        const findArticle = await sports.findOne({ Title: obj.Title });
        if (!findArticle) {
            sports.create({
                Title: obj.Title,
                Publisher: {
                    href: obj.Publisher.href,
                    title: obj.Publisher.title,
                },
                Published_Date: obj.Published_Date,
                Description: obj.Description,
                Link: obj.Link,
                Image: obj.Image,
            });
        }
    }
}

const updateWorld = async () => {
    const jsonData = await JSON.parse(fs.readFileSync(worldPath, 'utf-8'));
    for (const obj of jsonData) {
        const findArticle = await world.findOne({ Title: obj.Title });
        if (!findArticle) {
            world.create({
                Title: obj.Title,
                Publisher: {
                    href: obj.Publisher.href,
                    title: obj.Publisher.title,
                },
                Published_Date: obj.Published_Date,
                Description: obj.Description,
                Link: obj.Link,
                Image: obj.Image,
            });
        }
    }
}

const updateTech = async () => {
    const jsonData = await JSON.parse(fs.readFileSync(techPath, 'utf-8'));
    for (const obj of jsonData) {
        const findArticle = await tech.findOne({ Title: obj.Title });
        if (!findArticle) {
            tech.create({
                Title: obj.Title,
                Publisher: {
                    href: obj.Publisher.href,
                    title: obj.Publisher.title,
                },
                Published_Date: obj.Published_Date,
                Description: obj.Description,
                Link: obj.Link,
                Image: obj.Image,
            });
        }
    }
}

const updateScience = async () => {
    const jsonData = await JSON.parse(fs.readFileSync(sciencePath, 'utf-8'));
    for (const obj of jsonData) {
        const findArticle = await science.findOne({ Title: obj.Title });
        if (!findArticle) {
            science.create({
                Title: obj.Title,
                Publisher: {
                    href: obj.Publisher.href,
                    title: obj.Publisher.title,
                },
                Published_Date: obj.Published_Date,
                Description: obj.Description,
                Link: obj.Link,
                Image: obj.Image,
            });
        }
    }
}

module.exports = { updateSports,  updateWorld, updateTech, updateScience };