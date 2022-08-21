

const deleteButtons = document.querySelectorAll(".delete")
const healButtons = document.querySelectorAll(".heal")


Array.from(deleteButtons).forEach((button =>{
  button.addEventListener("click", deleteFighter)
}))

Array.from(healButtons).forEach((button =>{
  button.addEventListener("click", healFighter)
}))


async function deleteFighter(){
  const fighterId = this.parentNode.dataset.id

  try{
      const response = await fetch('/', {
          method: 'delete',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              'idFromJS': fighterId
          })
      })
      const data = await response.json()
      console.log(data)
      location.reload()
  }catch(err){
      console.log(err)
  }
}

async function healFighter(){
  console.log(this.parentNode.dataset.maxhp)
  const fighterId = this.parentNode.dataset.id
  const fighterHP = this.parentNode.dataset.maxhp
  try{
      const response = await fetch('/', {
          method: 'put',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({
              'idFromJS': fighterId,
              'hpFromJS': fighterHP
          })
      })
      const data = await response.json()
      console.log(data)
      location.reload()
  }catch(err){
      console.log(err)
  }
}

async function fight(){
// Have to figure out how to make the fight code work
}