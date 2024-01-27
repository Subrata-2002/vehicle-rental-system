
// const API_USER="https://car-rental-app-server.onrender.com"
const API_USER="http://localhost:5000"


async function addUser(UserData){
    const res = await fetch(`${API_USER}/user/signup`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(UserData)
    })
    return await res.json()
}

export {addUser}