// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return ''
  }
    return `## License
    This is the license being used ${license}`  
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);
  // console.log();
  // renderLicenseBadge(data.license)
  return `# ${data.title}
## Description
${data.description}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}


${renderLicenseSection(data.license)}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For any further questions visit my GitHub:  <a href='github.com/${data.github}'>www.github.com/${data.github}</a>
Or email me: ${data.email}

`;
}

module.exports = generateMarkdown;
