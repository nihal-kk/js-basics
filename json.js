fetch("https://muhammed-nihal.vercel.app/api/addUser", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Nihal",
    age: 18,
    city: "Kozhikode"
  })
})
  .then(res => res.json())
  .then(data => console.log("User added:", data))
  .catch(error => console.log(error));
