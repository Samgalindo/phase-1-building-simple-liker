// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal')
modal.classList.add('hidden')


const likeButtons = Array.from(document.querySelectorAll('.like'))

likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const heart = button.querySelector('.like-glyph')
    if (heart.textContent === EMPTY_HEART){
      mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART
        heart.classList.add('activated-heart')
      })
      .catch(error => {
        modal.classList.remove('hidden')
        const modalMessage = document.querySelector('#modal-message')
        modalMessage.textContent= error
        setTimeout(()=> {
          modal.classList.add('hidden')
        }, 3000)
      })
    }
    else if (heart.textContent === FULL_HEART){
      mimicServerCall()
      .then(()=> {
        heart.textContent === EMPTY_HEART
        heart.classList.remove('activated-heart')
      })
      .catch(error => {
        modal.classList.remove('hidden')
        const modalMessage = document.querySelector('#modal-message')
        modalMessage.textContent= error
        setTimeout(()=> {
          modal.classList.add('hidden')
        }, 3000)
      })
    }
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
