var inquirer = require("inquirer")
var fs = require("fs")
var util = require("util")
var axios = require("axios")
var html = require("./generateHTML.js")

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
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function (res) {
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


        })

    })
    // .then(function ({ username }) {
    //     const queryUrl = `"https://api.github.com/users/${username}/starred`;
    //     axios.get(queryUrl).then(function (res) {
    //         // const stars
    //         console.log(res.length());
    //     })
    // })

// .then(function ({ name, from, bio, linked, git }) {
//     console.log(name, from, bio, linked, git);

// github api: 4ff665d703e6da2dada3227637504bd27d6c6c44

