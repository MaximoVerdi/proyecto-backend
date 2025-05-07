import {Schema, model, connect } from 'mongoose' 

process.loadEnvFile()

const URI_DB = process.env.URI_DB || "";

const connectDB = async () => {
    try {
        await connect(URI_DB)
        console.log("Conectado a la DB")
    } catch (error: any) {
        console.log("Error conectando a la DB")
    }
}

const sneakersSchema = new Schema({
    model: {type: String, required: true},
    color: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
})

connectDB()