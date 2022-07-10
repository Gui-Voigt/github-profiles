import axios from 'axios'

var reposInfos = {}
var isSuccesfull = false

const getRepos = (userName) => {
    axios.get('https://api.github.com/users/' + userName + "/repos")
        .then( (response) => {
            reposInfos = response.data
            isSuccesfull = true
        })
        .catch( (err) => console.log(err) )

    
    return([reposInfos, isSuccesfull])
    }


export default getRepos