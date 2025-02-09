const { Router } = require("express");
const company=require('../controller/company.controller');
const Ability = require("../middleware/Ability");
const routes = Router();


routes.post("/create", Ability(["HR"]), company.createCompany);
routes.get("/", Ability(["ADMIN"]), company.getAllCompany);
routes.get("/:id", company.getCompanyById);
routes.put("/:id", Ability(["ADMIN", "HR"]), company.updateCompany);
routes.delete( "/:id",Ability(["ADMIN", "HR"]),company.deleteCompany);
routes.get( "/admin/unverified",Ability(["ADMIN"],company.getUnverified))

module.exports =routes;