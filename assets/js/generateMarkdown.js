// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License v2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;

    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";
      break;

    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;

    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License v2.0":
      return "[Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0)";
      break;

    case "GNU General Public License v3.0":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;

    case "MIT License":
      return "[MIT License](https://opensource.org/licenses/MIT)";
      break;

    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "Apache License v2.0":
      return "## License";
      break;

    case "GNU General Public License v3.0":
      return "## License";
      break;

    case "MIT License":
      return "## License";
      break;

    default:
      "None of the above";
      return "";
      break;
  }
}

function generateMarkdown(data) {
  console.log(data);
  return `${renderLicenseBadge(data.license)}
  # ${data.title}
## Table of content 
- [Description of Project](#description-of-project)
- [Installation instructions](#installation-instructions)
- [Usage information](#usage-information)
- [Contribution instructions](#contribution-instructions)
- [Tests instructions](#tests-instructions)
- [Licence](#licence)
- [Questions](#questions)
## Description of Project
 ${data.description}
## Installation 
${data.instructions}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.test}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
### Questions
- Github username: (https://github.com/${data.github})
- Email address: ${data.email}
`;
}

module.exports = generateMarkdown;
