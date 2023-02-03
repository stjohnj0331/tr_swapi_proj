export const getUrl = (url) => {
        return fetch(url)
        .then(res => res.json())
        .then(res => {console.log({url});return res})
        .then(res => res.results)
        .catch(err => console.error('Error getting URL', err))
}