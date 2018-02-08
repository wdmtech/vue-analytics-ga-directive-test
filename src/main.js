// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAnalytics from 'vue-analytics'
const userId = require('uuid/v1')()

Vue.use(VueAnalytics, {
  id: 'UA-43358396-2',
  fields: { userId },
  autoTracking: {
    exception: true
  },
  commands: {
    trackClicked (name = 'unknown') {
      console.log(this, 'clicks', 'click', 'url', name)
      this.$ga.event('clicks', 'click', 'url', name)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
