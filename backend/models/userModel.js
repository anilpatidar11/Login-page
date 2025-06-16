const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({   //Schema must be capitalized because it's a constructor (class).

  firstName: { type: String ,required : true },
  lastName: { type: String ,required : true },
    username : { type: String ,required : true ,unique : true },
  password: { type: String ,required : true}

})

const userSchemaModel = mongoose.model("Usernew", userSchema)

module.exports = userSchemaModel;

