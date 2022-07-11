import axios from 'axios'

var starredInfos = {}
var starredLoaded = false

const getStarred = (userName) => {
    axios.get('https://api.github.com/users/' + userName + "/starred")
    .then( (response) => {
        starredInfos = response.data
        starredLoaded = true
    })
    .catch( (err) => {
        starredInfos = {}
        starredLoaded = false
    })

    return([starredInfos, starredLoaded])
    }


export default getStarred