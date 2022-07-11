import axios from 'axios'

var reposInfos = {}
var reposLoaded = false

const getRepos = (userName) => {
    axios.get('https://api.github.com/users/' + userName + "/repos")
    .then( (response) => {
        reposInfos = response.data
        reposLoaded = true
    })
    .catch( (err) => {
        reposInfos = {}
        reposLoaded = false
    })

    return([reposInfos, reposLoaded])
    }


export default getRepos