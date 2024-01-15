import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
    
        },
        lastName: {
            type: String,
            required: true,
    
        },
        number: {
            type: String,
            required: true,
    
        },
        adress: {
            type: String,
            required: true,
    
        },
        email: {
            type: String,
            required: false,
    
        },
        payments: {
            type: String,
            required: false,
    
        },
        orders: {
            type: Array,
            required: true,
        },
        
    }
)

export default mongoose.model('Order', OrderSchema)