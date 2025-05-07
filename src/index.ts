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

interface ISneaker {
    model: string,
    color: string,
    price: number,
    stock: number
}

const sneakersSchema = new Schema({
    model: {type: String, required: true},
    color: {type: String, required: true},
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
})

const Sneaker = model("Sneaker", sneakersSchema)


const crearSneaker = async (newSneaker: ISneaker) => {
    try {
        const {model, color, price, stock} = newSneaker
        if (!model || !color || !price || !stock) {
            return ({succes: false, message: "Faltan datos"})
        }


        const newSneakerToDb = new Sneaker({model, color, price, stock})
        await newSneakerToDb.save()
        return {
            succes: true,
            data: newSneakerToDb,
            message: "Sneaker creado correctamente"
        }
    } catch (error: any) {
        return {
            succes: false,
            message: error.message
        }
    }
}

crearSneaker({model: "Jordan 1", color: "Chicago", price: 8500, stock: 2})
connectDB()