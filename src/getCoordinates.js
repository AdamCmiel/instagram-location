import get from './get'

//recieve as a string
function handleResponse(response) {
    return JSON.parse(response).data[0].location
}

export default function getCoordinates(id, clientID) {
    const url = `https://api.instagram.com/v1/users/${id}/media/recent/?count=1&client_id=${clientID}`
    return get(url).then(handleResponse)
}

