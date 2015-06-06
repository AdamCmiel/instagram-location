import get from './get'

export default function parseLocation({location, imgURL}) {
    const { latitude, longitude } = location
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`
    return get(url).then(handleResponse).then(({locality, country}) => ({
        locality,
        country,
        imgURL
    }))
}

function handleResults(results) {
    var locality
    var country

    results.forEach(r => r.address_components.forEach(c => {
        if (~c.types.indexOf('locality')) {
            locality = c.long_name || c.short_name
        }

        if (~c.types.indexOf('country')) {
            country = c.long_name || c.short_name
        }
    }))

    return {
        locality,
        country
    }
}

//recieve as a string
function handleResponse(response) {
    return handleResults(JSON.parse(response).results)
}

