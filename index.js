const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util")
const axios = require("axios")
const generateHTML = require('./generateHTML.js')
const electron = require('electron')
const proc = require('child_process')
const convertFactory = require('electron-html-to');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "list",
            message: "What is your favorite color?",
            name: "color",
            choices: [
                "green",
                "blue",
                "pink",
                "red"
            ]
        },
    ])
    .then(function ({ username }) {
        console.log(username);
        console.log(`====================================`);
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (res) {
            console.log(`axios get is successful`);
            const name = res.data.name;
            const company = res.data.company;
            const photo = res.data.avatar_url //photo
            const username = res.data.login //User Name
            const location = res.data.location;//location
            const git = res.data.html_url; //GitHub Profile
            const blog = res.data.blog; //blog
            const bio = res.data.bio; //bio
            const repos = res.data.public_repos; //repos
            const followers = res.data.followers; // followers
            const following = res.data.following; // following
            console.log(`all these consts`);
            var conversion = convertFactory({
                converterPath: convertFactory.converters.PDF
            });





            console.log('conversion declared')
            conversion({
                html: generateHTML
            }, function (err, result) {
                console.log(`conversion callback started`)
                if (err) {
                    return console.error(err);
                }
                console.log(result.numberOfPages);
                console.log(result.logs);
                result.stream.pipe(fs.createWriteStream('test.pdf'));
                conversion.kill();
            });
        })
        // .then(function ({ username }) {
        //     const queryUrl = `https://api.github.com/users/${username}/starred`;
        //     axios.get(queryUrl).then(function (res) {
        //         // const stars
        //         console.log(res);
        //     })
        // })
    })


// github api: 4ff665d703e6da2dada3227637504bd27d6c6c44