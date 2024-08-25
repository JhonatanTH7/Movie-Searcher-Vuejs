<template>
  <div class="cardMovie p-20">
    <h3 class="titleCard">{{ props.title }}</h3>
    <img class="w-90" :src="props.poster" :alt="props.title" />
    <p>
      <span>Year:</span>
      {{ props.year }}
    </p>
    <p>
      <span>Type:</span>
      {{ props.type }}
    </p>
    <router-link :to="{ name: 'movie-details', params: { id: props.id } }">
      View Details
    </router-link>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  title: string;
  poster: string;
  year: string;
  type: string;
  id: string;
}

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
.cardMovie {
  width: 300px;
  background: $secondary;
  text-align: center;
  border: 2px solid $primary;
  border-radius: 10px;
}

.titleCard {
  color: $white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

p {
  color: $white;
  span {
    color: $primary;
    font-weight: bold;
  }
}

img {
  height: 300px;
  object-fit: scale-down;
  border-radius: 10px;
}
</style>
