<template>
  <div>
    <div class="header">
      <div class="header-content">
        <div>
          <a href="">
            <img class="logo" src="@/assets/OLX-logo.jpg" />
          </a>
        </div>

        <div class="links-wrapper">
          <div class="links-list">
            <a href="">
              <font-awesome-icon :icon="['far', 'comment']" size="lg" />
              <span class="link"> Wiadomości </span>
            </a>

            <a href=""
              ><font-awesome-icon :icon="['far', 'heart']" size="lg" />
              <span class="link"> </span
            ></a>

            <a href=""
              ><font-awesome-icon :icon="['far', 'user']" size="lg" />
              <span class="link"> Mój OLX </span></a
            >
          </div>

          <div class="add-advertisement"><a href="">Dodaj Ogłoszenie</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.header {
  background: #002f34;
  height: 72px;
  font-size: 16px;
  font-weight: bold;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;

  .header-content {
    width: 1238px;
    padding: 0 24px 0 24px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      padding: 0 10px 0 10px;
      width: 71px;
      height: auto;
    }

    .links-wrapper {
      display: flex;
      align-content: center;
      color: white;
      gap: 30px;

      .links-list {
        margin: auto;

        a {
          color: white;
          padding: 0 15px;
        }

        a:hover {
          color: #7f9799;
        }

        .link {
          padding: 0 8px;
        }
      }

      .add-advertisement {
        background: white;
        color: #002f34;
        align-items: center;
        justify-content: center;
        padding: 14px 5px;
        border-radius: 4px;

        a {
          padding: 10px 10px;
        }
        a:hover {
          color: white;
          background: #002f34;
        }
      }
    }
  }
}
</style>
