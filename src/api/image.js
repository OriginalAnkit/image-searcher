import Axios from 'axios';
let axios = Axios.create({
    headers: {
        Authorization: "Client-ID daba50e285709651dc65e46caffec901b9e7f5cb850688e3b8a7160bef062bac"
    },
    baseURL: 'https://api.unsplash.com/'
})

function getImages(term) {
    return axios.get('search/photos', {
        params: {
            query: term
        }
    })
}

export { getImages }