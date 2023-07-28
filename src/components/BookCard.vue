<template>
  <div class="book-card">
    <router-link :to="{ path: '/details', query: { id: book.id } }" class="link"
      ><h1>{{ book.volumeInfo.title }}</h1></router-link
    >
    <img :src="book.volumeInfo.imageLinks.smallThumbnail" alt="img" />
    <div
      class="star"
      :class="{ active: book.favorite }"
      @click="toggleFavorite"
    >
      {{ book.favorite ? "★" : "☆" }}
    </div>
    <h5>
      {{
        book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "автор неизвестен"
      }}
    </h5>
    <p class="description">{{ book.volumeInfo.description }}</p>
    <div v-if="isDetailsPage" class="details" :style="getGridTemplateStyle">
      <p v-for="key in Object.keys(book.volumeInfo)" :key="key">
        {{ key }}
      </p>
      <p v-for="value in Object.values(book.volumeInfo)" :key="value">
        {{ value }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
    isDetailsPage: {
      type: Boolean,
    },
  },
  computed: {
    getGridTemplateStyle() {
      // Получаем длину массива ключей в объекте volumeInfo
      const numColumns = Object.keys(this.book.volumeInfo).length;

      // Создаем строку для grid-template-columns
      return `grid-template-columns: repeat(${numColumns}, 1fr);`;
    },
  },
  methods: {
    ...mapActions(["setFavorite"]),
    toggleFavorite() {
      // Передаем идентификатор книги в метод setFavorite для изменения состояния "избранности".
      this.setFavorite(this.book.id);
    },
  },
};
</script>
<style>
.link {
  text-decoration: none;
  color: #000;
}
.link:hover {
  color: #42b983;
}
.star {
  margin: auto;
  width: max-content;
  font-size: xx-large;
  color: #8888;
  cursor: pointer;
}
.star:hover {
  color: gold;
}
.active {
  color: gold;
}
.description {
  color: #888;
}
.details {
  display: grid;
  gap: 24px;
}
</style>
