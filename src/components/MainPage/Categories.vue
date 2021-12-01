<template>
  <div class="maincategories">
    <div class="categories-wrapper">
      <h3 class="categories-header">Kategorie Główne</h3>
      <div class="categories-container">
        <div
          class="categories-item"
          v-for="category in categories"
          :key="category.description"
        >
          <router-link class="cat-link" :to="category.link">
            <img
              :class="category.class"
              :src="category.src"
              :alt="category.description"
            />
            <div class="description">{{ category.description }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {},
  data() {
    return {
      categories: [
        {
          class: "motoryzacja",
          src: "http://localhost:8080/img/motoryzacja.15eb7db3.png",
          description: "Motoryzacja",
          link: "/cars",
        },
        {
          class: "nieruchomosci",
          src: "http://localhost:8080/img/nieruchomosci.0f08edb6.png",
          description: "Nieruchomości",
          link: "/cars",
        },
        {
          class: "praca",
          src: "http://localhost:8080/img/praca.fdfc1916.png",
          description: "Praca",
          link: "/cars",
        },
        {
          class: "dom",
          src: "http://localhost:8080/img/dom-i-ogrod.828dab38.png",
          description: "Dom i Ogród",
          link: "/cars",
        },
        {
          class: "elektronika",
          src: "http://localhost:8080/img/elektronika.bdd6cc9f.png",
          description: "Elektronika",
          link: "/cars",
        },
        {
          class: "moda",
          src: "http://localhost:8080/img/moda.e929a474.png",
          description: "Moda",
          link: "/cars",
        },
        {
          class: "rolnictwo",
          src: "http://localhost:8080/img/rolnictwo.55a394bb.png",
          description: "Rolnictwo",
          link: "/cars",
        },
        {
          class: "zwierzeta",
          src: "http://localhost:8080/img/zwierzeta.3f64b438.png",
          description: "Zwierzeta",
          link: "/cars",
        },
        {
          class: "dzieci",
          src: "http://localhost:8080/img/dzieci.7e12d511.png",
          description: "Dla Dzieci",
          link: "/cars",
        },
        {
          class: "sport",
          src: "http://localhost:8080/img/sport.6aba4f6f.png",
          description: "Sport i Hobby",
          link: "/cars",
        },
        {
          class: "muzyka",
          src: "http://localhost:8080/img/muzyka.02e5f09b.png",
          description: "Muzyka i Edukacja",
          link: "/cars",
        },
        {
          class: "uslugi",
          src: "http://localhost:8080/img/uslugi.44a67dd4.png",
          description: "Usługi i Firmy",
          link: "/cars",
        },
        {
          class: "noclegi",
          src: "http://localhost:8080/img/noclegi.7308ae33.png",
          description: "Noclegi",
          link: "/cars",
        },
        {
          class: "darmo",
          src: "http://localhost:8080/img/darmo.03d96578.png",
          description: "Oddam za darmo",
          link: "/cars",
        },
        {
          class: "zamienie",
          src: "http://localhost:8080/img/zamienie.dea074bc.png",
          description: "Zamienię",
          link: "/cars",
        },
        {
          class: "dostawca",
          src: "http://localhost:8080/img/dostawca.54364683.png",
          description: "Pracuj jako dostawca",
          link: "/cars",
        },
        {
          class: "domek",
          src: "http://localhost:8080/img/domek.916d04d6.png",
          description: "Domek w górach",
          link: "/cars",
        },
        {
          class: "telefony",
          src: "http://localhost:8080/img/telefony.6e1ef94e.png",
          description: "Telefony z przesyłką za 1zł",
          link: "/cars",
        },
      ],
    };
  },
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
