let i = 0
let curr = 40

const no = document.querySelector(".no")
const yes = document.querySelector(".yes")
const pic = document.querySelector(".pic")
const text = document.querySelector(".text")

const response = ["What?","Do you not love your country boy? (or girl)", "I'm gonna take your rouuuutttbiiiirr if you don't", "Are you a communist?", "Red Flag on 308 Negra Arroyo Lane New Mexico, 87104.", "..."]

function noClick(){
    if(i < response.length){
        no.innerHTML = response[i++]
        curr+=15
        yes.style.fontSize =  (curr) + "px"
    }
}

function yesClick(){
    pic.src = "https://piximus.net/media/21256/the-most-american-photos-ever-23.jpg"
    yes.style.visibility="hidden"
    no.style.visibility="hidden"
    text.style.visibility="visible"
}