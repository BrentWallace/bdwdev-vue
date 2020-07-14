<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand text-white" @click="clearActive">Brent Wallace</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="makeActive">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" @click="makeActive">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects" @click="makeActive">Projects</a>
          </li>
        </ul>
        <a href="https://github.com/BrentWallace" target="_blank"><img class="img-fluid" style="max-height:64px;" src="iconfinder_github_273178.png"/></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    makeActive(e) {
      const links = Array.from(document.querySelectorAll('.nav-item'));
      links.forEach(element => {
        element.className = 'nav-item';
      });
      e.target.parentNode.className = 'nav-item active'
    },
    clearActive() {
      const links = Array.from(document.querySelectorAll('.nav-item'));
      links.forEach(element => {
        element.className = 'nav-item';
      });
    }
  }
};
</script>

<style scoped>
</style>