const foodService = require('../../services/foods')
const statuses = require('../../constants/status')
const msg = require('../../constants/messages')
const { sResponse } = require('../../constants/structures')

module.exports = {
    
    CreateFood: async (req, res, next) => {
        try {
            const data = req.body

            const resp = await foodService.CreateFood(data)
            if(resp.err_msg) {
                throw new Error(resp.err_msg)
            }
            sResponse.status = statuses.created
            sResponse.data = resp.data
            sResponse.message = msg.created

            return res.status(statuses.created).json(sResponse)
        } catch (err) {
            return next(err);
        }
    },

    GetFoodList: async (req, res, next) => {
        try {
            const resp = await foodService.GetFoodList()
            if(resp.err_msg) {
                throw new Error(resp.err_msg)
            }
            sResponse.status = statuses.ok
            sResponse.data = resp.data
            sResponse.message = msg.ok

            return res.status(statuses.ok).json(sResponse)
        } catch (err) {
            return next(err);
        }
    }
}