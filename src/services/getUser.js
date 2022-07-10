import axios from 'axios'

var userInfos = {}

const getUser = (userName) => {
    axios.get('https://api.github.com/users/' + userName)
        .then( (response) => {
            userInfos = response.data
        })
        .catch( (err) => console.log(err) )

       
    return(userInfos)
    }


export default getUser