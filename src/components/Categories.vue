<template>
  <div class="maincategories">
    <div class="categories-wrapper">
      <h3 class="categories-header">Kategorie Główne</h3>
      <div class="categories-container">
        <div class="categories-item">
          <a href="">
            <img
              class="image motoryzacja"
              src="@/assets/categories/motoryzacja.png"
              alt="motoryzacja"
            />
            <div class="description">Motoryzacja</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image nieruchomosci"
              src="@/assets/categories/nieruchomosci.png"
              alt="nieruchomosci"
            />
            <div class="description">Nieruchomości</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image praca"
              src="@/assets/categories/praca.png"
              alt="praca"
            />
            <div class="description">Praca</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image dom"
              src="@/assets/categories/dom-i-ogrod.png"
              alt="dom-i-ogrod"
            />
            <div class="description">Dom i Ogród</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image elektronika"
              src="@/assets/categories/elektronika.png"
              alt="elektronika"
            />
            <div class="description">Elektronika</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image moda"
              src="@/assets/categories/moda.png"
              alt="moda"
            />
            <div class="description">Moda</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image rolnictwo"
              src="@/assets/categories/rolnictwo.png"
              alt="rolnictwo"
            />
            <div class="description">Rolnictwo</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image zwierzeta"
              src="@/assets/categories/zwierzeta.png"
              alt="zwierzeta"
            />
            <div class="description">Zwierzęta</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image dzieci"
              src="@/assets/categories/dzieci.png"
              alt="dzieci"
            />
            <div class="description">Dla Dzieci</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image sport"
              src="@/assets/categories/sport.png"
              alt="sport"
            />
            <div class="description">Sport i Hobby</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image muzyka"
              src="@/assets/categories/muzyka.png"
              alt="muzyka"
            />
            <div class="description">Muzyka i Edukacja</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image uslugi"
              src="@/assets/categories/uslugi.png"
              alt="uslugi"
            />
            <div class="description">Usługi i Firmy</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image noclegi"
              src="@/assets/categories/motoryzacja.png"
              alt="noclegi"
            />
            <div class="description">Noclegi</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image darmo"
              src="@/assets/categories/darmo.png"
              alt="za-darmo"
            />
            <div class="description">Oddam za darmo</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image zamienie"
              src="@/assets/categories/zamienie.png"
              alt="zamienie"
            />
            <div class="description">Zamienię</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image dostawca"
              src="@/assets/categories/motoryzacja.png"
              alt="dostawca"
            />
            <div class="description">Pracuj jako dostawca</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image domek"
              src="@/assets/categories/motoryzacja.png"
              alt="domek-w-gorach"
            />
            <div class="description">Domek w górach</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="image czesci"
              src="@/assets/categories/motoryzacja.png"
              alt="telefony"
            />
            <div class="description">Telefony z przesyłką za 1zł</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {},
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

.maincategories {
  background: white;
  position: absolute;
  margin-top: 220px;
  left: 0;
  right: 0;
  padding-top: 56px;
  padding-bottom: 61px;

  .categories-wrapper {
    width: 68vw;
    padding: 0 24px;
    margin: auto;

    .categories-header {
      font-size: 32px;
      font-weight: bold;
      margin: 0;
      margin-bottom: 56px;
    }

    .categories-container {
      display: grid;
      grid-template-rows: repeat(2, auto);
      grid-template-columns: repeat(9, auto);
      row-gap: 5vh;

      .categories-item {
        .image {
          width: 70px;
          height: auto;
          border-radius: 50%;
          background: yellow;
        }

        .description {
          text-align: center;
        }
      }
    }
  }
}
</style>
