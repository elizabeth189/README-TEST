// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//used: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseBadge(license) {
  if (license === "Apache" ) {
    licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"; //(https://opensource.org/licenses/Apache-2.0)
  }
  if (license === "MIT"){
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"; //(https://opensource.org/licenses/MIT)
  }
  if (license === "GPL"){
    licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"; //(https://www.gnu.org/licenses/gpl-3.0)
  }
  if (license === "None"){
   licenseBadge = "";
  }
//return renderLicenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache" ) {
    licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
  }
  if (license === "MIT"){
    licenseLink = "(https://opensource.org/licenses/MIT)";
  }
  if (license === "GPL"){
    licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "None"){
    licenseLink = "";
  }
 // return renderLicenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  ` ${renderLicenseBadge, renderLicenseLink (license)}`;

// if (license === 'None'){
//     return '';
//   } else {
//     return `[![License] (${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})`;
//   } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ![License badge](https://img.shields.io/badge/license-${data.License}-blue.svg)

  ## Description 
  ${data.Description}

  ## Table of Contents
  - [Installation](##Installation)
  - [Usage](##Usage)
  - [License](##License)
  - [Contributions](##Contributions)
  - [Tests](##Tests)
  - [Questions](##Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## License
  This project is covered under the following License: ${data.License}
  ![License badge](https://img.shields.io/badge/license-${data.License}-blue.svg)

  ## Contributions
  ${data.Contributions}

  ## Tests
  ${data.Tests}

  ## Questions
  If you have any questions please feel free to email me at elizabethlopez0108@gmail.com or you can access my GitHub Portfolio at https://github.com/elizabeth189  

`;
}

module.exports = generateMarkdown;