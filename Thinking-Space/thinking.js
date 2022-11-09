const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, contributing, tests, github, email }) =>
    `# ${title}

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
            choices: ["none"],
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
            message: 'What is your github username?', 
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?', 
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);
        fs.writeFile('sample-README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created sample-README.md!')
      );
    })