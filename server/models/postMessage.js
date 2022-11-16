import mongoose from "mongoose";

const teaDataSchema = mongoose.Schema({
    name: { type: String, default: `Picker` },
    otherNames: {type: String},
    weight: { type: Number, required: true },
    createdAt: { type: Date, default: new Date().toISOString()},
});

 const TeaDataSchema = mongoose.model( 'TeaDataSchema', teaDataSchema );

 export default TeaDataSchema;