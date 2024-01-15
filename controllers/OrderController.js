import OrderModel from "../models/Order.js"


export const createOrder = async (req, res) => {
    try {
        const doc = new OrderModel({
            name: req.body.name,
            lastName: req.body.lastName,
            number: req.body.number,
            adress: req.body.adress,
            email: req.body.email,
            payments: req.body.payments,
            orders: req.body.orders
        })

        const order = await doc.save();

        res.json({
            order,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Не вдалося запостити'
        })

    }
}

