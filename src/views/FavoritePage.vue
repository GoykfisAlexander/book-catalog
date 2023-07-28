<template>
  <AppLoader v-if="loading" />
  <h1 v-if="!selectedBooks.length">У вас нет избранных книг</h1>

  <section class="books" v-else>
    <div
      class="book"
      v-for="book in selectedBooks"
      :key="'selectedBooks-' + book.id"
    >
      <BookCard :book="book" />
    </div>
  </section>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import AppLoader from "@/components/AppLoader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BookCard,
    AppLoader,
  },
  computed: mapGetters(["selectedBooks", "loading"]),
};
</script>
