import parseLocation from './parseLocation'
import getCoordinates from './getCoordinates'

export default function InstagramLocation(instagramUserID, clientID) {
    return getCoordinates(instagramUserID, clientID).then(parseLocation)
}

