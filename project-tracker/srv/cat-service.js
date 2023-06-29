const cds = require("@sap/cds");
const { Tasks } = cds.entities('my.project');

module.exports = (ProjectService) => {

    // Added the read operation (R) in CRUD
    ProjectService.on("READ","Tasks", async (req,res) => {
        console.log("hai");
        const result = await SELECT.from(Tasks);
        // console.log(result);
        return result;
    });

    //Get Tasks of Single User
    ProjectService.on("getTasks", async (req,res) => {
        const user = req.data.user;
        const result = await SELECT.from(Tasks).where({AssignedTo: user})/*.columns('TaskName')*/;
        return result;
    });

    
}