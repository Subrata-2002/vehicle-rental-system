
// const API_ADMIN="https://car-rental-app-server.onrender.com"
const API_ADMIN = "https://rideease-ary1.onrender.com"


function addAdmin(AdminData){
    return fetch(`${API_ADMIN}/admin/signup`, {
        method: 'POST',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(AdminData)
    })
    .then(res => res.json())
}

export {addAdmin}