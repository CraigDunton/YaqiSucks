
export default function updateSched(sched, uid){
  var userId = -1;
  return fetch('http://192.168.1.115:3000/api/users/'+uid, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sched: sched
    })
  }).then(res => res.json())
  .catch(error => {
     console.error("Error:", error);
   })
  .then(response => {
    console.log("Server Response:", response);
  });

}
