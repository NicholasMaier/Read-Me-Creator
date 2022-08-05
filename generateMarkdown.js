// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge;

  if (license == "Apache 2.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if (license == "Boost Software 1.0") {
    licenseBadge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  }
  else if (license == "BSD 3-Clause") {
    licenseBadge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  }
  else if (license == "BSD 2-Clause") {
    licenseBadge = `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  }
  else if (license == "CC0") {
    licenseBadge = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
  }
  else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  let licenseLink;

  if (license == "Apache 2.0") {
    licenseLink = `(https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == "Boost Software 1.0") {
    licenseLink = `(https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (license == "BSD 3-Clause") {
    licenseLink = `(https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license == "BSD 2-Clause") {
    licenseLink = `(https://opensource.org/licenses/BSD-2-Clause)`;
  }
  else if (license == "CC0") {
    licenseLink = `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  else {
    licenseLink = "";
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `In this project we choose to use ${license} licensing for more info about the license go here
  ${renderLicenseLink(license)}`;
}

// Create a function to generate markdown for README

// THEN a high-quality, professional README.md is generated with the title
//  of my project and sections entitled Description, Table of Contents,
//   Installation, Usage, License, Contributing, Tests, and Questions

// THEN this information is added to the sections of the README entitled Description,
// Installation, Usage, Contributing, and Tests

function generateMarkdown(data) {
  return `# ${data.title}               ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.test}

  ## Questions

  My github repo ${data.github}
  My email ${data.email}
`;
}

module.exports = generateMarkdown;

// LINKS to goods

// Badges
// https://shields.io/

// Licences
// https://choosealicense.com/