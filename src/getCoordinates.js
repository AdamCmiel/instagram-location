import get from './get'

//recieve as a string
function handleResponse(response) {
    const { location, images } = JSON.parse(response).data[0]
    return {
        location: location,
        imgURL: images.standard_resolution.url
    }
}

export default function getCoordinates(id, clientID) {
    let _id = encodeURIComponent(id)
    let _clientID = encodeURIComponent(clientID)
    const url = `https://api.instagram.com/v1/users/${_id}/media/recent/?count=1&client_id=${_clientID}`
    return get(url).then(handleResponse)
}

