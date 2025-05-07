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

connectDB()