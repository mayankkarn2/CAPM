const cds = require("@sap/cds");
const { Tasks } = cds.entities('my.project');

module.exports = (ProjectService) => {
    ProjectService.on("READ","Tasks", (req,res) => {
        console.log("hai");
        const result = SELECT.from(Tasks);
        return result;
    });
}