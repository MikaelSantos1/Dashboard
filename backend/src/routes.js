const express = require ("express")

const BillingCycleController = require("./app/controllers/billingCycleController")
const routes = express.Router()

routes.get("/billingCycle", BillingCycleController.show)
routes.get("/billingCycle/summary", BillingCycleController.summary)
routes.get("/billingCycle/count", BillingCycleController.count)
routes.get("/billingCycle/:_id", BillingCycleController.showById)
routes.post("/billingCycle", BillingCycleController.store)
routes.delete("/billingCycle/:_id",BillingCycleController.delete)
routes.put("/billingCycle/:_id",BillingCycleController.update)


module.exports = routes