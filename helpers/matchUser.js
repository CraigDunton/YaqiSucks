export default function matchUser(userId, orgCode){
  return fetch('http://192.168.1.115:3000/api/matchUser', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      uid: userId,
      orgCode: orgCode
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
