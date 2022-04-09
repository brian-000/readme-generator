// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license[0]!=null){
    return "<img src = 'https://img.shields.io/badge/${license}-%20License-inactive'>"
    
  }else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license[0]) {
    case 'Apache':
      return '<a href = "https://choosealicense.com/licenses/apache-2.0/">Apache License Site</a>';
    case 'MIT':
      return '<a href = "https://choosealicense.com/licenses/mit/">MIT License Site</a>';
    case 'ISC':
      return '<a href = "https://choosealicense.com/licenses/isc/">ISC License Site</a>';
    case 'GNU GPLV2':
      return '<a href = "https://choosealicense.com/licenses/gpl-2.0/">GNU GPLV2 License Site</a>';
    case 'GNU GPLV3':
      return '<a href = "https://choosealicense.com/licenses/gpl-3.0/">GNU GPLV3 License Site</a>';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license[0] != null){
    return `## License
    The license this application is covered under is : ${license}`  
  }
  else{
    return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
## Description
${renderLicenseBadge(data.license)}
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

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
