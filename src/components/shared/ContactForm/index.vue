<template>
  <div class="contact-form background">
    <div class="form-wrapper">
      <div class="details-wrapper">
        <div class="user-wrapper">
          <div class="img-wrapper">
            <img class="user-icon" src="@/assets/user-icon.png" alt="user" />
          </div>
          <div class="text-wrapper">
            <div>
              <strong>{{ advertisementUser.name }}</strong>
            </div>
            <div class="last-seen">
              {{ $t("carDetails.userInfo.registered") }}
              {{ advertisementUser.registered }}
            </div>
            <div class="last-seen">
              {{ $t("carDetails.userInfo.lastSeen") }}
              {{ advertisementUser.lastSeen }}
            </div>
          </div>
        </div>

        <div class="phone-wrapper">
          <font-awesome-icon
            class="phone-icon"
            :icon="['fa', 'phone-square-alt']"
            size="2x"
          />
          <span class="phone-number">{{ advertisementUser.phone }}</span>
        </div>
      </div>
      <InputArea v-model="textarea" v-on:submit="msg()" />
    </div>
  </div>
</template>

<script>
import InputArea from "@/components/shared/InputArea/index.vue";
export default {
  name: "ContactForm",
  props: {
    advertisementUser: {
      type: Object,
      required: true,
    },
  },
  components: { InputArea },
  data() {
    return {
      textarea: "",
    };
  },
  methods: {
    msg() {
      alert(
        `${this.$t("carDetails.messages.sent")}${this.advertisementUser.name}`
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.contact-form {
  .form-wrapper {
    padding: 1.5em;
    .details-wrapper {
      margin: 1em 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .user-wrapper {
        display: flex;
        .img-wrapper {
          width: 90px;
          height: auto;

          .user-icon {
            width: 70px;
            height: auto;
          }
        }
        .text-wrapper {
          font-size: $font-big;
          .last-seen {
            font-size: $font-mid;
            color: $fav-hover;
          }
        }
      }
      .phone-wrapper {
        display: flex;
        align-items: center;
        gap: 1em;
        .phone-icon {
          color: $turquoise-cat;
        }
        .phone-number {
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
