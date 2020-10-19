const express = require("express");
const router = express.Router();
const {
    getProjects,
    getProject,
    newProject,
    makeProject, 
    removeProject, 
    changeProject
 } = require("../controllers/project_controller")

router.get("/", getProjects);

router.get("/new", newProject);
 

router.get("/:id", getProject);

router.post("/", makeProject);

router.delete("/:id", removeProject);

router.put("/:id", changeProject);


module.exports = router;
