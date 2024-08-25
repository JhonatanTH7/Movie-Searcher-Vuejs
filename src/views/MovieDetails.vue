<template>
  <h1>Detalles {{ movieId }}</h1>
  <p>{{ store.detailedMovie }}</p>
  <RouterLink to="/">Go Back</RouterLink>
</template>

<script setup lang="ts">
import { useMoviesStore } from "@/store/movies.store";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useMoviesStore();
const movieId: string = route.params.id as string;

const fetchMovie = async () => {
  await store.getDetailedMovie(movieId);
};

onMounted(() => {
  fetchMovie();
});
</script>

<style scoped lang="scss"></style>
