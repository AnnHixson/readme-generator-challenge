const inquirer = require('inquirer');
const fs = require('fs');
// let licenseBadge;
function renderLicenseBadge(license) {
  if (license === "MIT") {
    let licenseBadge = "./badge_images/license-MIT-blue.svg";
    console.log(license);
    console.log(licenseBadge);

    return licenseBadge;
  } else if (license === "APACHE 2.0") {
    let licenseBadge = "./badge_images/license-APACHE 2.0-blue.svg";
    console.log(license);
    console.log(licenseBadge);

    return licenseBadge;
  } else if (license === "GPL 3.0") {
    let licenseBadge = "./badge_images/license-GPL 3.0-blue.svg";
    console.log(license);
    console.log(licenseBadge);

    return licenseBadge;
  } else if (license === "BSD 3") {
    let licenseBadge = "./badge_images/license-BSD 3-blue.svg";
    console.log(license);
    console.log(licenseBadge);

    return licenseBadge;
  } else if (license === "None") {
    let licenseBadge = "";
    console.log(license);
    console.log(licenseBadge);

    return licenseBadge;
  }
}

const generateREADME = ({ title, licenseBadgeContent, description, installation, usage, license, contributing, tests, github, email }) =>
  `# ${title}

## ![alt text](${licenseBadgeContent})

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
    
${installation}
    
## Usage
    
${usage}

## License

${license}
    
## Contributing
    
${contributing}
    
## Tests
    
${tests}
    
## Questions
    
You can reach me with additional questions at my GitHub profile [${github}](https://github.com/${github}) or by email at ${email}.`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?', 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your application:', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions for your application?', 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information for your application?', 
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your application have?',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What are the contribution guidelines for your application?', 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for your application?', 
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?', 
        },
    ])
    .then((answers) => {
        const licenseBadgeContent = renderLicenseBadge(answers.license);
        console.log(licenseBadgeContent);
        console.log(answers);
        // answers.push(licenseBadgeContent);
        // console.log(answers);
        const readmePageContent = generateREADME(answers);
        console.log(readmePageContent);
        fs.writeFile('sample-README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created sample-README.md!')
      );
    })