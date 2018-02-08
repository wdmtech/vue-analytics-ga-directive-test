<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

    <hr>

    <ul>
      <li v-for="link in links" v-ga="$ga.commands.trackClicked.bind(this, link)">
        <a :href="link.url" target="_blank">{{ link.name }}</a>
      </li>
    </ul>

    <hr>

    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs.org')"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs.forum')"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs chat')"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs twitter')"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs template')"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs router')"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs vuex')"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          v-ga="$ga.commands.trackClicked.bind(this, 'vuejs vue-loader')"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      links: [
        { url: 'https://google.com', name: 'Google' },
        { url: 'https://github.com', name: 'GitHub' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
