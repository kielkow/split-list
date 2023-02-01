const { emails } = require('./emails-list.json');
const fs = require('fs');

let i = 0;
while (emails.length > 0) {
    const emailsList = emails.splice(0, 30000);

    const contentData = JSON.stringify({ emails: emailsList });

    fs.writeFile(`emails-list-${i}.json`, contentData, 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });

    i++;
}
