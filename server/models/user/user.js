const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt   = require('bcrypt-nodejs');

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    phone : {type: String, required:true}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
