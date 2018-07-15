
export default function createOrg(orgCode , orgName){
  var userId = -1;
  return fetch('http://limitless-shore-53582.herokuapp.com/api/orgs', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      orgCode: orgCode,
      orgName: orgName,
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
