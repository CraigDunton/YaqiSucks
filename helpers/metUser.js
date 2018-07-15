export default function metUser(uid, mid){
  return fetch('http://limitless-shore-53582.herokuapp.com/api/metUser', {
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
