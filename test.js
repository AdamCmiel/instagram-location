var log = console.log.bind(console)
var Il = require('./')
var il = new Il({
    clientID: process.env.IG_CLIENT_ID
})

il.find({userName: 'adamcmiel'}).then(log).catch(function (e) {
    console.log(e.stack)
})

//il.find({userID: 1448944022}).then(log).catch(log)

