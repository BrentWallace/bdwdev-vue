<template>
  <div class="container-fluid vh-100 d-flex justify-content-center align-items-center" :style="style">
    <div class="row">
      <div class="col">
        <div class="jumbotron text-center text-white">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      background: String,
    },
    computed: {
      style: function() {
        return `background:url("${this.background}");background-size:cover;background-position:center center;`
      }
    }
}
</script>

<style scoped>
  .jumbotron {
    background-color:transparent;
  }
</style>