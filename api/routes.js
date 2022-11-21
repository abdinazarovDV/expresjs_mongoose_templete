const { Router } = require('express');
const cont = require('./controllers/index')
const middlewares = require('./middlewares/index')

const router = new Router()

// All routes
router
.get("/foods", cont.GetFoodList)
// .get("/foods/:id", cont.GetFoodById)
.post("/foods", cont.CreateFood)




module.exports = router