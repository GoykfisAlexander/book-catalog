import axios from "axios";

const books = {
  state: { loading: true, books: [], selectedBooks: [] },
  getters: {
    loading(state) {
      return state.loading;
    },
    books(state) {
      return state.books;
    },
    selectedBooks(state) {
      return state.selectedBooks;
    },
  },
  mutations: {
    getBooks(state, books) {
      state.books = books;
      state.selectedBooks = books.filter((book) => book.favorite);
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async getBooks({ commit }) {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=1&maxResults=20"
        );
        // добавляем ключ - избранные
        const books = res.data.items.map((book) => {
          book["favorite"] = false;
          return book;
        });
        commit("getBooks", books);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    setFavorite({ commit, state }, id) {
      const newBooks = state.books.map((book) => {
        if (book.id === id) {
          book.favorite = !book.favorite;
        }
        return book;
      });
      commit("getBooks", newBooks);
    },
  },
};

export default books;
