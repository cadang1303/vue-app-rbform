<template>
  <div class="layout">
    <AdminSidebar />
    <div class="view-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/layout/AdminSidebar";

export default {
  components: {
    AdminSidebar,
  },
};
</script>

<style>
.view-container {
  width: calc(100% - 250px);
  height: 100vh;
  margin-left: 250px;
  padding: 24px;
  background: #eee;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
