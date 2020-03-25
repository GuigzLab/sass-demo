export default function hello (titles) {
     const nameEl = document.querySelector('.js-name')
     let index = 0
   
     setInterval(() => {
       index += 1
       if (index === titles.length) {
         index = 0
       }
   
       nameEl.textContent = titles[index]
     }, 1000)
   }