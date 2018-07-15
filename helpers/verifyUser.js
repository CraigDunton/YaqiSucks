
//returns the users id if success, otherwise -1
export default function verifyUser(email, pw){
  return fetch('http://limitless-shore-53582.herokuapp.com/api/verifyUser', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      pw: pw
    })
  }).then(res => res.json())
  .catch(error => {
     console.error("Error:", error);
   })
  .then(response => {
    console.log("Server Response:", response);
    var userId = response.data;
    return userId;
  });

}
