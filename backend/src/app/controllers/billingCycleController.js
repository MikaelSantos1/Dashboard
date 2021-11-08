const BillingCycle = require('../models/billingCycle')

class BillingCycleController {
    async show(req, res) {
        const Cycle = await BillingCycle.find()

        return res.json(Cycle)
    }

    async count(req, res) {
        const Cycle = await BillingCycle.find().count()

        return res.json(Cycle)
    }

    async showById(req, res) {
        const { _id } = req.params
        const Cycle = await BillingCycle.findById({ _id })
        return res.json(Cycle)
    }

    async store(req, res) {

        try {
          
            const Cycle = await BillingCycle.create(req.body)

            return res.send({ Cycle })
        } catch (err) {
            return res.status(400).send({ error: 'error ao enviar' })
        }

    }

    async delete(req, res) {
        const { _id } = req.params
        const Cycle = await BillingCycle.findByIdAndDelete({ _id })

        return res.json(Cycle)
    }

    async update(req, res) {
      
        const { _id } = req.params
        const { name, month, year, credits, debts } = req.body
        const data = { _id, name, month, year, credits, debts }
        const Cycle = await BillingCycle.findByIdAndUpdate({ _id }, data, { new: true })

        res.json(Cycle)
    }

    async summary(req,res){
        BillingCycle.aggregate([{ 
            $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
        }, { 
            $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
        }, { 
            $project: {_id: 0, credit: 1, debt: 1}
        }], (error, result) => {
            if(error) {
                res.status(500).json({errors: [error]})
            } else {
                res.json(result[0] || {credit: 0, debt: 0})
            }
        })
}
}
module.exports = new BillingCycleController()