import get from './get'

function handleData(data) {
    if (data.length > 0) {
        return data[0].id
    }
    else {
        throw new Error('nobody found')
    }
}

//recieve as a string
function handleResponse(response) {
    return handleData(JSON.parse(response).data)
}

export default function idFromUsername(username, clientID) {
    let _username = encodeURIComponent(username)
    let _clientID = encodeURIComponent(clientID)
    const url = `https://api.instagram.com/v1/users/search?q=${_username}&client_id=${_clientID}`
    return get(url).then(handleResponse)
}

