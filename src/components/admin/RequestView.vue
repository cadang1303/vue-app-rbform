<template>
  <div class="request-container">
    <div class="header">
      <div class="btn-back" @click="goBack">
        <img src="@/assets/icon/interfaces/ArrowLeft.png" />
      </div>
    </div>
    <div class="profile-header">
      <div class="avatar"><img :src="avatar" /></div>
      <div class="name">
        <p class="fullname">{{ userdata.fullname }}</p>
        <p class="position">{{ userPosition }}</p>
      </div>
    </div>
    <div class="request-content">
      <FormView
        :formData="formData"
        :currentStep="currentStep"
        :readonly="readonly"
        @changeForm="changeForm"
      />
    </div>
    <div class="footer">
      <ButtonComponent
        btn-label="Approve"
        :disabled="isApproved"
        class="btn btn-approve"
        @onClick="approveRequest"
      />
      <ButtonComponent
        btn-label="Reject"
        :disabled="isRejected"
        class="btn btn-reject"
        @onClick="rejectRequest"
      />
    </div>
  </div>
</template>

<script>
import { API_URL, JOB_LIST } from "@/constants/.";
import { formRequestView } from "@/constants/request-view";
import { mapActions } from "vuex";
import ButtonComponent from "@/components/base/ButtonComponent";
import FormView from "../formRegister/FormView";
import axios from "axios";

export default {
  components: { ButtonComponent, FormView },
  data() {
    return {
      readonly: true,
      currentStep: 1,
      formRequestView,
      formData: [],
      userdata: {},
      API_URL,
      JOB_LIST,
      position: [],
    };
  },
  async created() {
    await this.getUserData();
    this.mapUserdata();
  },
  computed: {
    userPosition() {
      return this.userdata.position ? this.getPosition() : "";
    },
    isApproved() {
      return this.userdata.status === 1;
    },
    isRejected() {
      return this.userdata.status === 2;
    },
    avatar() {
      return this.userdata.avatar ? `${API_URL + this.userdata.avatar}` : "";
    },
  },
  watch: {
    currentStep: {
      handler() {
        this.formData = JSON.parse(
          JSON.stringify(
            this.formRequestView.find((item) => item.step === this.currentStep)
              .data
          )
        );
        this.mapUserdata();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions({ updateStatus: "users/onUpdateStatus" }),
    async getUserData() {
      try {
        const res = await axios.get(`${API_URL}users/${this.$route.params.id}`);
        this.userdata = res.data;
        this.position = this.toArrayPosition(this.userdata.position);
      } catch (err) {
        console.log(err);
      }
    },
    getPosition() {
      return this.position.join(", ");
    },
    toArrayPosition(position) {
      if (position) {
        position = position.split(",");
      }
      return position;
    },
    mapUserdata() {
      const keys = Object.keys(this.userdata);
      const values = Object.values(this.userdata);
      this.formData.forEach((item) => {
        keys.forEach((key) => {
          const index = keys.indexOf(key);
          if (item.key === key) {
            if (item.key === "position") {
              if (this.position) {
                JOB_LIST.forEach((i) => {
                  this.position.forEach((p) => {
                    if (p == i.name) {
                      item.value.push(i);
                    }
                  });
                });
              } else item.value = [];
            } else item.value = values[index];
          }
        });
      });
    },
    changeForm(step) {
      this.currentStep = step;
    },
    goBack() {
      this.$router.push("/admin/request-list");
    },
    approveRequest() {
      this.updateStatus({ id: this.userdata.id, status: 1 });
    },
    rejectRequest() {
      this.updateStatus({ id: this.userdata.id, status: 2 });
    },
  },
};
</script>

<style scoped>
.request-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  background: #fff;
  padding: 24px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}
.header {
  margin-bottom: 24px;
}
.btn-back img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.profile-header {
  display: flex;
  align-items: center;
  background: #f7f7f7;
  padding: 16px;
  gap: 16px;
  margin-bottom: 24px;
}
.avatar img {
  width: 48px;
  height: 48px;
}
.name .fullname {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #333;
}
.name .position {
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #333333;
}
.request-content >>> .form-container {
  width: 100%;
  max-height: 50vh;
}
.request-content >>> .footer-btn {
  display: none;
}
.request-content >>> .cancel-select {
  display: none;
}
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: auto;
}
.btn {
  min-width: 102px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.65;
  cursor: default;
}
.btn-approve {
  color: #ffffff;
  background: #48647f;
  border: 0;
  border-radius: 4px;
}
.btn-reject {
  color: #f86868;
  background: #ffffff;
  border: 1px solid #ffbdbd;
  border-radius: 4px;
}
</style>
