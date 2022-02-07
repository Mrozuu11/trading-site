<template>
  <div class="card card-location background">
    <div>
      <strong>{{ $t("carDetails.userInfo.location") }}</strong>
    </div>
    <div class="location-wrapper">
      <div class="text-wrapper">
        <div>
          <strong
            >{{ advertisementLocation.cityName }},
            {{ advertisementLocation.district }}</strong
          >
        </div>
        <div>{{ advertisementLocation.region }}</div>
      </div>
      <div class="map-img">
        <img src="@/assets/map-image.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    advertisementLocation: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-location {
  margin-top: 1.5em;

  .location-wrapper {
    margin-top: 1em;
    display: flex;
    gap: 1em;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
