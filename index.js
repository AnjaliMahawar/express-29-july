//console.log("hello")
const express = require('express')
const app = express()
const mongoose = require('mongoose');

async function po(){

    return await mongoose.connect('mongodb+srv://Anjali:06082002anj@anjaliserver.1968b.mongodb.net/?retryWrites=true&w=majority')
}

po().then((d)=>{
    console.log('connected',d)

}).catch((e)=>{
    console.log('Sorry Not Connected')

})

app.listen(3000,()=>{
    console.log("server is running")
})