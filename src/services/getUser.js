import axios from 'axios'

var userInfos = {}
var userLoaded = false

const getUser = (userName) => {

    axios.get('https://api.github.com/users/' + userName)
        .then( (response) => {
            userInfos = response.data
            userLoaded = true
        })
        .catch( (err) => {
            userInfos = {}
            userLoaded = false
        })
    
        console.log(userInfos)

        return([userInfos, userLoaded])
    }



export default getUser