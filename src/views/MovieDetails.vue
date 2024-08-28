<template>
  <RouterLink to="/" class="goback-button">Go Back</RouterLink>
  <div class="movie-details-view p-50" v-if="!store.detailedMovie.Error">
    <div class="movie-main-info">
      <img :src="store.detailedMovie.Poster" alt="Poster" />

      <div class="description">
        <h2>{{ store.detailedMovie.Title }}</h2>
        <span
          ><strong>({{ store.detailedMovie.Year }})</strong></span
        >
        <span><strong>Genres:</strong> {{ store.detailedMovie.Genre }}</span>
        <span
          ><strong>Duration:</strong> {{ store.detailedMovie.Runtime }}</span
        >
        <span><strong>Type:</strong> {{ store.detailedMovie.Type }}</span>
        <h4>Plot</h4>
        <p>{{ store.detailedMovie.Plot }}</p>
      </div>
    </div>
    <div class="bottom-info">
      <div class="additional-info">
        <h3>Movie Info</h3>
        director writer actors language country
      </div>
      <div class="ratings">
        <h3>Ratings</h3>
        awards Rotten Tomatoes metascore imdbRating imdbvotes boxoffice
      </div>
    </div>

    <!-- <p>{{ store.detailedMovie }}</p> -->
  </div>
  <div v-else>
    <h1>{{ store.detailedMovie.Error }}</h1>
    <p>
      Oops... We're having some issues displaying the details of this movie.
    </p>
  </div>
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

<style scoped lang="scss">
.movie-details-view {
  display: flex;
  flex-direction: column;
  gap: 50px;
  color: $white;
}

.movie-main-info {
  display: flex;
  align-items: center;
  gap: 50px;
  img {
    height: 50vw;
    max-height: 350px;
    box-shadow: 0 0 5px 2px $primary;
  }
  .description {
    height: 100%;
    display: flex;
    padding-top: 20px;
    font-size: 15px;
    justify-content: center;
    flex-direction: column;
    p {
      text-align: justify;
    }
  }
}

.bottom-info {
  display: flex;

  .additional-info {
    display: flex;
    flex-direction: column;
  }

  .ratings {
    display: flex;
    flex-direction: column;
  }
}

.goback-button {
  position: absolute;
  right: 5%;
  top: 2%;
  border: 1px solid $primary;
  border-radius: 5px;
  padding: 5px;
  text-decoration: none;
  color: $white;
  background-color: $info;
}

.goback-button:hover {
  background-color: $primary;
  box-shadow: 0 0 5px $primary;
}

@media (max-width: 768px) {
  .movie-main-info {
    flex-direction: column;
    gap: 50px;
    .description {
      font-size: 12px;
      text-wrap: wrap;
    }
  }

  .bottom-info {
    flex-direction: column;
  }
}
</style>
