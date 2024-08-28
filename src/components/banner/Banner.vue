<template>
  <section class="banner-section d-middle w-100 p-10">
    <form @submit.prevent="$event.preventDefault()">
      <div class="search-input d-middle">
        <input
          type="text"
          :required="true"
          v-model.trim="inputValue"
          @input="onChangeInputValue"
        />
        <span>Search movie</span>
      </div>
    </form>
    <div class="container-image-banner">
      <img :src="imageUrl" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import headerImg from "@/assets/images/header-img.svg";
import { useMoviesStore } from "@/store/movies.store";

const imageUrl = ref(headerImg);
const inputValue = ref<string>("");
const store = useMoviesStore();

const onChangeInputValue = () => {
  const search: string = inputValue.value.toLowerCase();

  if (search === "") {
    store.getMovies();
    return;
  }

  setTimeout(() => {
    store.getMovies(search);
  }, 1000);
};
</script>

<style scoped lang="scss">
@import "@/components/banner/banner";
</style>
