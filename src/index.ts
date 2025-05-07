import {Schema, model, connect } from 'mongoose' 

process.loadEnvFile()

const URI_DB = process.env.URI_DB || "";

const connectDB = async () => {
    try {
        await connect(URI_DB)
        console.log("Connected to DB")
    } catch (error: any) {
        console.log("Error connecting to DB", error.message)
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


const createSneaker = async (newSneaker: ISneaker) => {
    try {
        const {model, color, price, stock} = newSneaker
        if (!model || !color || !price || !stock) {
            return ({succes: false, message: "Invalid Data"})
        }


        const existingSneaker = await Sneaker.findOne({color, model});
        if (existingSneaker) {
            return ({succes: false, message: "Already exists a sneaker for that model and color"})
        }
        const newSneakerToDb = new Sneaker({model, color, price, stock})
        await newSneakerToDb.save()
        return {
            succes: true,
            data: newSneakerToDb,
            message: "Sneaker created successfully"
        }
    } catch (error: any) {
        return {
            succes: false,
            message: error.message
        }
    }
}

const findSneakerByColor = async (color: string) => { 
    try {
        const sneakers = await Sneaker.find({color})
        if (sneakers.length === 0) {
            return ({succes: false, message: "No sneakers for that color"})
        }
        return {
            succes: true,
            data: sneakers,
            message: `Sneaker found: ${sneakers.length}`, 
        }
    } catch (error: any) {
        return {
            succes: false,
            message: error.message
        }
    }
}

const updateSneaker = async (id: string, newSneaker: ISneaker) => {
    try {
        const {model, color, price, stock} = newSneaker
        if (!model || !color || !price || !stock) {
            return ({succes: false, message: "Sneaker not found"})
        }

        const updatedSneaker = await Sneaker.findByIdAndUpdate(id, {model, color, price, stock}, {new: true})

        if (!updatedSneaker) {
            return { succes: false, message: "Sneaker not found" };
        }

        await updatedSneaker.save()
        
        return {
            succes: true,
            data: updatedSneaker,
            message: "Sneaker updated successfully"
        }
        
    } catch (error: any) {
        return {
            succes: false,
            message: error.message
        }
    }
}

const deleteSneaker = async (id: string) => {
    try {
        const deletedSneaker = await Sneaker.findByIdAndDelete(id)
        if (!deletedSneaker) {
            return ({succes:false, message: "Sneaker not found"})
        }

        return {
            succes: true,
            data: deletedSneaker,
            message: "Sneaker deleted successfully"
        }
    } catch (error: any) {
        return {
            succes: false,
            message: error.message
        }
    }
}

const main = async () => {
    connectDB()
    const result = await findSneakerByColor("Chicago")
    console.log(result)
}

main()