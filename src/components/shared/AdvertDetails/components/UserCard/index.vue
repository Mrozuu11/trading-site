<template>
  <div class="card card-user background">
    <div>
      <strong>{{ $t("carDetails.userInfo.user") }}</strong>
    </div>
    <div class="details-wrapper">
      <div class="img-wrapper">
        <img class="user-icon" src="@/assets/user-icon.png" alt="user" />
      </div>
      <div class="text-wrapper">
        <div>
          <strong>{{ advertisementUser.name }}</strong>
        </div>
        <div class="last-seen">
          {{ $t("carDetails.userInfo.registered")
          }}{{ advertisementUser.registered }}
        </div>
        <div class="last-seen">
          {{ $t("carDetails.userInfo.lastSeen") }}
          {{ advertisementUser.lastSeen }}
        </div>
        <div class="link">
          <a href=""
            ><strong>{{ $t("carDetails.userInfo.moreFromUser") }}</strong></a
          >
          <hr />
        </div>
      </div>
    </div>

    <div class="contact-wrapper">
      <div>
        {{ $t("carDetails.userInfo.rateUser") }}
      </div>
      <div class="btn-wrapper">
        <button
          type="button"
          class="btn btn-call"
          @click="$emit('handle-call')"
        >
          <span>{{ $t("carDetails.buttons.callBtn") }}</span>
        </button>
        <button type="button" class="btn btn-msg" @click="$emit('handle-msg')">
          <span>{{ $t("carDetails.buttons.messageBtn") }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    advertisementUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-user {
  .details-wrapper {
    margin: 1em 0;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;

    .text-wrapper {
      font-size: $size-20px;
      .last-seen {
        font-size: $size-14px;
        color: $fav-hover;
      }
      .link {
        margin-top: 1em;
        font-size: $size-14px;
      }
    }

    .img-wrapper {
      width: 100px;
      height: auto;

      .user-icon {
        width: 80px;
        height: auto;
      }
    }
  }

  .contact-wrapper {
    .btn-wrapper {
      display: flex;
      margin-top: 20px;
      justify-content: space-around;
      gap: 5%;

      .btn {
        font-weight: bold;
        padding: 5px 10px;
        text-align: center;
        width: 50%;
        height: 3em;

        &-call,
        &-msg:hover {
          border: 2px solid $blue-primary;
          background: transparent;
          color: $blue-primary;
        }
        &-msg {
          color: $white-secondary;
          background: $blue-primary;
          border: none;
        }
      }
    }
  }
}
</style>
