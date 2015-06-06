import parseLocation from './parseLocation'
import getCoordinates from './getCoordinates'
import idFromUsername from './idFromUsername'

export default class InstagramLocation {
    constructor({ clientID }) {
        this.clientID = clientID
    }

    find({userName, userID}) {
        if (userName !== undefined) {
            return this.findUser(userName)
        }
        else if (userID !== undefined) {
            return this.findID(userID)
        }
        else {
            throw new Error('throw me a bone')
        }
    }

    findUser(username) {
        return idFromUsername(username, this.clientID).then(id => this.findID(id))
    }

    findID(userID) {
        return getCoordinates(userID, this.clientID).then(parseLocation)
    }
}

