const userSchema = require('../../../Schemas/user')

module.exports = async (userData) => {
  return (async () => {
    try {
       
      var data = await userSchema.find()
      return data
    } catch (e) {
      console.log("e............................",e);
      throw e
    }
  })()
}
