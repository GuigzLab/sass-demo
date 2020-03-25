import '../scss/app.scss'
import '../../../index.html'
import AOS from 'aos'
import hello from './hello'

class App {
     constructor() {
          this.titles = ['développeur', 'passionné', 'John Doe']
     }

     init() {
          AOS.init()
          hello(this.titles)
     }
}

document.addEventListener('DOMContentLoaded', function () {
     var app = new App()
     app.init()
})