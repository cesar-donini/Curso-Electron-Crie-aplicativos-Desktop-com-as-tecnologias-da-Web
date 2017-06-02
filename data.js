const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {

    saveInDataBase(course, time) {
        let fileName = `${__dirname}/data/${course}.json`;

        if (fs.existsSync(fileName)) {
            this.addTimeIntoCourse(fileName, time);
        } else {
            this.createDataBase(fileName, {})
                .then(() => {
                    this.addTimeIntoCourse(fileName, time);
                });
        }

    },

    addTimeIntoCourse(fileName, time) {
        let data = { lastAccess: new Date().toString(),
                     studyTime: time };
        
        jsonfile.writeFile(fileName, data, {spaces: 2})
            .then(() => {
                console.log("Success to save course.")
            }).catch((err) => {
                console.log(`Error to save course: ${err}`);
            });

    },

    findByCourseName(courseName) {
        let fileName = `${__dirname}/data/${courseName}.json`;

        return jsonfile.readFile(fileName);
    },

    createDataBase(fileName, initialObject) {
        return jsonfile.writeFile(fileName, initialObject)
            .then(() => {
                console.log("Data base success created!");
            }).catch((err) => {
                console.log(`Create database have a error: ${err}`);
            });
    },

    getCoursesNames() {
        let files = fs.readdirSync(`${__dirname}/data`);

        let coursesNames = files.map((file) => {
            return file.substr(0, file.lastIndexOf('.'));
        });

        return coursesNames;
    }

}