const inquirer = require('inquirer')
const fs = require('fs')

const licenseSelection = (license) => {
    if(license === 'Apache License 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    if(license === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    if(license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if(license === 'ISC') {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if(license === 'none') {
        return 'No License'
    }
}

inquirer.prompt ([
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of the project?'
    },
    {   
        type: 'input',
        name: 'description',
        message: 'Enter a description of you project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter any installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any usage information.'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter any testing information.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select what type of license you would like for this project:',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'none']
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter link to deployed application.'
    },
    {
        type: 'input',
        name: 'reference',
        message: 'Enter any references used while creating app.'
    }
])
.then((data) => {
    fs.writeFile('./../../module-11/note-taker/README.md',
    `# ${data.projectName}
    \n${licenseSelection(data.license)}
    \n## Description
    \n${data.description}
    \n## Table of Contents
    \n- [Installation Instructions](#installation-instructions)
    \n- [Deployed Application](#deployed-application)
    \n- [Usage](#usage)
    \n- [Contributing](#contributing)
    \n- [Tests](#tests)
    \n- [License](#license)
    \n- [Questions](#questions)
    \n- [Reference](#reference)
    \n## Installation Instructions
    \n${data.installation}
    \n## Deployed Application
    \n[${data.projectName}](${data.link})
    \n## Usage
    \n${data.usage}
    \n## Contributing
    \n${data.contribution}
    \n## Tests
    \n${data.tests}
    \n## License
    \nThe project has a license type of: ${data.license}
    \n## Questions
    \n### Github Profile
    \n[${data.github}](https://github.com/${data.github})
    \n### Email
    \n${data.email}
    \n## Reference
    \n${data.reference}`, 
    (err) => err ? console.log(err) : console.log('README.md created!')
    )
})