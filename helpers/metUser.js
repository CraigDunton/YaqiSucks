export default function metUser(uid, mid){
  return fetch('http://192.168.1.115:3000/api/metUser', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      uid,
      mid,
    })
  }).then(res => res.json())
  .catch(error => {
    console.error("Error:", error);
   })
  .then(response => {
    console.log("Server Response:", response);
    const match = response.data;
    return match;
  });

}
