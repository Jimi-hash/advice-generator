//https://api.adviceslip.com/advice

//async await

const btn = document.getElementById("btn")






btn.addEventListener('click', async()=>{
await fetch("https://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => document.getElementById("advice").innerHTML = data.slip.advice)
  .catch((err) => console.log (err))

})
