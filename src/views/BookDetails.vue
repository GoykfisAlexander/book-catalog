<template>
  <BookCard :book="book" :isDetailsPage="isDetailsPage" />
</template>

<script>
import { mapGetters } from "vuex";
import BookCard from "@/components/BookCard.vue";

export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapGetters(["books"]),
    book() {
      // Получение id из параметров запроса URL
      const id = this.$route.query.id;
      // Поиск книги по id в массиве всех книг
      return this.books.find((book) => book.id === id) || null;
    },
    isDetailsPage() {
      return this.$route.path === "/details";
    },
  },
};
</script>
