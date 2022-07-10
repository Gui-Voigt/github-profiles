import axios from 'axios'

const apiRequest = (userName) => {
    let userInfos
    axios.get('https://api.github.com/users/' + userName)
        .then( (response) => {
            console.log(response)
            userInfos = response
        })
        .catch( (err) => console.log(err) )

    return(userInfos)
    }


export default apiRequest