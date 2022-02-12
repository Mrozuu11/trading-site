<template>
  <div class="bread-crumbs">
    <el-button class="back-btn" type="primary" icon="el-icon-arrow-left"
      ><router-link :to="{ name: 'Cars' }">{{
        $t("carDetails.buttons.backBtn")
      }}</router-link></el-button
    >
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">{{
        $t("carDetails.breadCrumb.mainPage")
      }}</el-breadcrumb-item>
      <el-breadcrumb-item
        ><router-link :to="{ name: 'Cars' }">{{
          $t("carDetails.breadCrumb.category")
        }}</router-link></el-breadcrumb-item
      >
      <el-breadcrumb-item>{{ ad.brand.name }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ ad.model.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    ad: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-crumbs {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>
