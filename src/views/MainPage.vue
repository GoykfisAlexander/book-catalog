<template>
  <section class="main-page">
    <AppMenu />
    <AppLoader v-if="loading" />
    <section class="books" v-else>
      <div class="book" v-for="book in books" :key="'book-' + book.id">
        <BookCard :book="book" />
      </div>
    </section>
  </section>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import AppLoader from "@/components/AppLoader.vue";
import AppMenu from "@/layouts/AppMenu.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BookCard,
    AppLoader,
    AppMenu,
  },
  computed: mapGetters(["books", "loading"]),
};
</script>
<style>
.main-page {
  display: grid;
  grid-template-columns: 0.2fr 1fr;
}
.books {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(20%, 30%));
  grid-template-rows: max-content;
  gap: 24px;
}
.book {
  padding: 24px;
  box-sizing: border-box;
  box-shadow: inset 0 0 30px #8888;
  border-radius: 10px;
}
</style>
