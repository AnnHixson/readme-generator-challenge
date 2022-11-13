// Required Packages
const inquirer = require('inquirer');
const fs = require('fs');

// Generate Markdown
const generateREADME = ({ title, description, installation, usage, license, contributing, tests, github, email }) => {
    let licenseBadge;
    let licenseSection;
    let licenseInformation;
    // Use the gathered license information from the prompts to get the licenseBadge and licenseSection
    function renderLicenseInformation(input) {
        switch (license) {
          case 'MIT':
            licenseBadge = "badge_images/license-MIT-blue.svg";
            licenseSection = "This project is licensed under the MIT license.";
            licenseInformation = [licenseBadge, licenseSection];
            break;
          case 'APACHE 2.0':
            licenseBadge = "badge_images/license-APACHE_2.0-blue.svg";
            licenseSection = "This project is licensed under the APACHE 2.0 license.";
            licenseInformation = [licenseBadge, licenseSection];
            break;
          case 'GPL 3.0':
            licenseBadge = "badge_images/license-GPL_3.0-blue.svg";
            licenseSection = "This project is licensed under the GPL 3.0 license.";
            licenseInformation = [licenseBadge, licenseSection];
            break;
          case 'BSD 3':
            licenseBadge = "badge_images/license-BSD_3-blue.svg";
            licenseSection = "This project is licensed under the BSD 3 license.";
            licenseInformation = [licenseBadge, licenseSection];
            break;
          case 'None':
            licenseBadge = "";
            licenseSection = "This project is not licensed.";
            licenseInformation = [licenseBadge, licenseSection];
            break;
          default:
            console.log('renderLicenseInformation is not working');
        }
        // Return the licenseBadge and licenseSection
        return licenseInformation;
    }
    // Call the function
    renderLicenseInformation();
  // Return the contents of the markdown file
  return `# ${title}
## ![text](${licenseBadge})
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
${licenseSection}
## Contributing
${contributing}
## Tests 
${tests} 
## Questions   
You can reach me with additional questions at my GitHub profile [${github}](https://github.com/${github}) or by email at [${email}](mailto:${email}).`
}

// Prompts to collect the information to populate the README
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
// Write the README file
    .then((data) => {
        const readmePageContent = generateREADME(data);
        fs.writeFile('README.md', readmePageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
  );
})