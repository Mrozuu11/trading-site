<template>
  <div class="maincategories">
    <div class="categories-wrapper">
      <h3 class="categories-header">Kategorie Główne</h3>
      <div class="categories-container">
        <div class="categories-item">
          <a href="">
            <img
              class="motoryzacja"
              src="@/assets/categories/motoryzacja.png"
              alt="motoryzacja"
            />
            <div class="description">Motoryzacja</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="nieruchomosci"
              src="@/assets/categories/nieruchomosci.png"
              alt="nieruchomosci"
            />
            <div class="description">Nieruchomości</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="praca"
              src="@/assets/categories/praca.png"
              alt="praca"
            />
            <div class="description">Praca</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="dom"
              src="@/assets/categories/dom-i-ogrod.png"
              alt="dom-i-ogrod"
            />
            <div class="description">Dom i Ogród</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="elektronika"
              src="@/assets/categories/elektronika.png"
              alt="elektronika"
            />
            <div class="description">Elektronika</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img class="moda" src="@/assets/categories/moda.png" alt="moda" />
            <div class="description">Moda</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="rolnictwo"
              src="@/assets/categories/rolnictwo.png"
              alt="rolnictwo"
            />
            <div class="description">Rolnictwo</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="zwierzeta"
              src="@/assets/categories/zwierzeta.png"
              alt="zwierzeta"
            />
            <div class="description">Zwierzęta</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="dzieci"
              src="@/assets/categories/dzieci.png"
              alt="dzieci"
            />
            <div class="description">Dla Dzieci</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="sport"
              src="@/assets/categories/sport.png"
              alt="sport"
            />
            <div class="description">Sport i Hobby</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="muzyka"
              src="@/assets/categories/muzyka.png"
              alt="muzyka"
            />
            <div class="description">Muzyka i Edukacja</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="uslugi"
              src="@/assets/categories/uslugi.png"
              alt="uslugi"
            />
            <div class="description">Usługi i Firmy</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="noclegi"
              src="@/assets/categories/noclegi.png"
              alt="noclegi"
            />
            <div class="description">Noclegi</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="darmo"
              src="@/assets/categories/darmo.png"
              alt="za-darmo"
            />
            <div class="description">Oddam za darmo</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="zamienie"
              src="@/assets/categories/zamienie.png"
              alt="zamienie"
            />
            <div class="description">Zamienię</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="dostawca"
              src="@/assets/categories/dostawca.png"
              alt="dostawca"
            />
            <div class="description">Pracuj jako dostawca</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="domek"
              src="@/assets/categories/domek.png"
              alt="domek-w-gorach"
            />
            <div class="description">Domek w górach</div>
          </a>
        </div>
        <div class="categories-item">
          <a href="">
            <img
              class="telefony"
              src="@/assets/categories/telefony.png"
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

a:hover {
  .description {
    background: #002f34;
    color: white;
    transition: all 0.3s ease;
  }
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
      grid-template-rows: repeat(auto-fill, minmax(130px, 1fr));
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      row-gap: 4vh;

      .categories-item {
        img {
          width: 88px;
          height: auto;
          border-radius: 50%;
          margin-bottom: 2vh;
        }

        .motoryzacja,
        .dzieci {
          background-color: rgb(255, 206, 50);
        }

        .nieruchomosci,
        .darmo {
          background-color: rgb(58, 119, 255);
        }

        .praca,
        .zamienie {
          background-color: rgb(35, 229, 219);
        }

        .dom,
        .dostawca {
          background-color: rgb(255, 86, 54);
        }

        .elektronika,
        .noclegi,
        .domek {
          background-color: rgb(255, 246, 217);
        }

        .moda,
        .telefony {
          background-color: rgb(206, 221, 255);
        }

        .rolnictwo,
        .muzyka {
          background-color: rgb(200, 248, 246);
        }

        .zwierzeta,
        .uslugi {
          background-color: rgb(255, 214, 201);
        }

        .sport {
          background-color: rgb(206, 221, 255);
        }
      }
    }
  }
}
</style>
