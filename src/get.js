import { get as _get } from 'https'

export default function get(url) {
    return new Promise((res, rej) => {
        _get(url, (response) => {
            let buffer = ''
            response.on('data', (chunk) => buffer += chunk)
            response.on('end', () => res(buffer))
        }).on('error', rej)
    })
}

