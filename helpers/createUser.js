
export default function createUser(fName, lName, pw, email, phone, orgCode){
  var userId = -1;
  return fetch('http://limitless-shore-53582.herokuapp.com/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fName: fName,
      lName: lName,
      pw: pw,
      email: email,
      phone: phone,
      orgCode: orgCode,
      sched: "0000000"
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
