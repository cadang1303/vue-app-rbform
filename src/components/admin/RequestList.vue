<template>
  <div class="table-container">
    <DataTable>
      <RequestItem v-for="item in displayedRows" :key="item.id" :item="item" />
    </DataTable>
    <div class="table-footer">
      <TablePagination
        :data="users"
        :current-page="page"
        :pages="pages"
        :from="from"
        :to="to"
        @onPrevious="onPreviousPage"
        @onNext="onNextPage"
      />
    </div>
  </div>
</template>

<script>
import { RECORDS_PER_PAGE } from "@/constants";
import { mapGetters } from "vuex";
import DataTable from "./DataTable.vue";
import RequestItem from "./RequestItem.vue";
import TablePagination from "./TablePagination.vue";
export default {
  components: {
    RequestItem,
    DataTable,
    TablePagination,
  },
  created() {
    this.$store.dispatch("users/loadUserList");
  },
  computed: {
    ...mapGetters({ users: "users/getUsers" }),
    displayedRows() {
      return this.paginate(this.users);
    },
  },
  data() {
    return {
      page: 1,
      RECORDS_PER_PAGE,
      pages: [],
      from: null,
      to: null,
    };
  },
  watch: {
    users() {
      this.setPages();
    },
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.users.length / this.RECORDS_PER_PAGE);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(data) {
      let from = this.page * this.RECORDS_PER_PAGE - this.RECORDS_PER_PAGE;
      let to = this.page * this.RECORDS_PER_PAGE;
      this.from = from + 1;

      if (to > data.length) {
        this.to = data.length;
      } else this.to = to;

      return data.slice(from, to);
    },
    onPreviousPage() {
      this.page--;
    },
    onNextPage() {
      this.page++;
    },
  },
};
</script>

<style scoped>
.table-container {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.table-footer {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 7%;
  right: 5%;
}
.pagination {
  display: flex;
  gap: 64px;
}
.pagi-text {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.arrow-right {
  font-size: 19px;
}
</style>
