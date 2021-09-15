const mongoose = require("mongoose");
const { Schema } = mongoose;

const MutantSchema = new Schema(
    {
        dna: [{ type: String }],
        isMutant: { type: Boolean }
    },
    {
        timestamps: { createdAt: true, updatedAt: true}
    }
);

module.exports = mongoose.model("mutant", MutantSchema);