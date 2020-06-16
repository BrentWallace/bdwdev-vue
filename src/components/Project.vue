<template>
  <div class="col-md-6 mb-4">
    <div class="card" data-aos="fade" data-aos-easing="ease-in">
      <img :src="image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
        <template v-if="technologies">
          <div class="mb-4">
            <h4>Technologies</h4>
            <span v-for="(technology, index) in technologies" :key="technology">
              {{ technology }}<span v-if="index != technologies.length - 1">, </span>
            </span>
          </div>
        </template>
        <a :href="url" class="btn btn-info text-white" target="_blank">View this Project</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    description: String,
    url: String,
    image: String,
    technologies: Array
  }
};
</script>

<style scoped>
</style>