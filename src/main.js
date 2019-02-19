import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faArrowCircleLeft,
  faTimesCircle,
  faSpinner,
  faPlane,
  faPlaneDeparture,
  faPlaneArrival,
  faClock,
  faCheckCircle,
  faPlusCircle,
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './registerServiceWorker'
import 'normalize.css/normalize.css'

library.add(faArrowCircleLeft)
library.add(faTimesCircle)
library.add(faSpinner)
library.add(faPlane)
library.add(faPlaneDeparture)
library.add(faPlaneArrival)
library.add(faClock)
library.add(faCheckCircle)
library.add(faPlusCircle)
library.add(faMinusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
