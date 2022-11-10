// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    let licenseBadge = "./badge_images/license-MIT-blue.svg";
    return licenseBadge;
  } else if (license === "APACHE 2.0") {
    let licenseBadge = "./badge_images/license-APACHE 2.0-blue.svg";
    return licenseBadge;
  } else if (license === "GPL 3.0") {
    let licenseBadge = "./badge_images/license-GPL 3.0-blue.svg";
    return licenseBadge;
  } else if (license === "BSD 3") {
    let licenseBadge = "./badge_images/license-BSD 3-blue.svg";
    return licenseBadge;
  } else if (license === "None") {
    let licenseBadge = "";
    return licenseBadge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
