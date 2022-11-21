const { FoodModel } = require('../models/foods')
const { sService } = require('../constants/structures')

module.exports = {
    
    CreateFood: async (arg) => {
        try {
            const resp = await FoodModel.create(
                {
                    name: arg.name,
                    price: arg.price
                }
            )

            sService.data = resp

            return sService
        } catch (err) {
            sService.err_msg = err.message
            
            return sService
        }
    },

    GetFoodList: async (arg) => {
        try {
            const resp = await FoodModel.find()

            sService.data = resp

            return sService
        } catch (err) {
            sService.err_msg = err.message
            
            return sService
        }
    }
}