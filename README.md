# Profile Generator

### Description

This is an application used to make the stress of profile generating a thing of the past! This app will simple ask for the user's GitHub username and a color of their choice and will then grab all of the information needed from GitHub and create an HTML page designed with the color scheme chosen by the user. This is a great app for project managers that just need a quick an simple way to collect profiles of all of their developers.

### Installation

The first time a user uses this application, there are a few things that need to be installed. In your terminal, please type each of the following:

npm i inquirier
npm i fs
npm i util
npm i axios
npm i electron
npm i child_process
npm i electron-html-to

### Usage

After you have installed all of the nmp libraries, please type:

node index.js

The application will then have two prompts. The first will be asking for the GitHub username. The second will ask the color to be used on the profile.

![index.js page](/assets/inquirer.png)

You should then see the information from the user populated in an HTML file.
