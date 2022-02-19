const state = {
  favAds: [],
  ads: [
    {
      id: 1,
      class: "Camaro",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcOIEzHKvWm-Y4M4bQhQ_coVmLyfBzWoLwA&usqp=CAU",
      title: "Chevrolet Camaro 2015r., garażowany, przegląd, OC/AC",
      price: 80000,
      currency: " PLN",
      date: "2021-12-08",
      description: "Warszawa, 8 gru",
      link: "cars/1",
      highlighted: true,
      model: { name: "Camaro", id: 1 },
      brand: { name: "Chevrolet", id: 1 },
      year: 2015,
      mileage: 60000,
      fuel: "Benzyna",
      color: "Żółty",
      condition: "Idealny",
      user: {
        name: "Marek",
        registered: "20/12/2018",
        lastSeen: "02/01/2022",
        phone: "689 095 893",
      },
      location: {
        cityName: "Warszawa",
        district: "Żoliborz",
        region: "Mazowieckie",
      },
    },
    {
      id: 2,
      class: "Mustang",
      src: "https://i2.pickpik.com/photos/777/652/27/convertible-ford-mustang-beverly-hills-red-thumb.jpg",
      title: "Ford Mustang, rok 2014, pierwszy właściciel",
      price: 65000,
      currency: " PLN",
      date: "2021-10-29",
      description: "Żyglin, 29 paź",
      link: "cars/2",
      highlighted: false,
      model: { name: "Mustang", id: 2 },
      brand: { name: "Ford", id: 2 },
      year: 2014,
      mileage: 80000,
      fuel: "Benzyna",
      color: "Czerwony",
      condition: "Idealny",
      user: {
        name: "Czarek",
        registered: "22/11/2008",
        lastSeen: "05/01/2022",
        phone: "789 595 393",
      },
      location: {
        cityName: "Żyglin",
        district: "Kościół",
        region: "Śląskie",
      },
    },
    {
      id: 3,
      class: "Corvette",
      src: "https://us.123rf.com/450wm/buschmen/buschmen1706/buschmen170600054/80137438-paaren-im-glien-germany-june-03-2017-sports-car-chevrolet-corvette-stingray-coupe-1976-exhibition-di.jpg?ver=6",
      title: "1982 Chevrolet Corvette C3",
      price: 90000,
      currency: " PLN",
      date: "2021-11-28",
      description: "Poznań, 28 lis",
      link: "cars/3",
      highlighted: true,
      model: { name: "Corvette", id: 2 },
      brand: { name: "Chevrolet", id: 1 },
      year: 1982,
      mileage: 20000,
      fuel: "Benzyna",
      color: "Żółty",
      condition: "Idealny",
      user: {
        name: "Jarek",
        registered: "08/12/2020",
        lastSeen: "28/12/2021",
        phone: "564 034 840",
      },
      location: {
        cityName: "Poznań",
        district: "Centrum",
        region: "Wielkopolskie",
      },
    },
    {
      id: 4,
      class: "Ferrari",
      src: "https://live.staticflickr.com/4071/4546316158_dd35790ea8.jpg",
      title: "Ferrari F430, stan idealny, niski przebieg",
      price: 70000,
      currency: " PLN",
      date: "2021-12-03",
      description: "Kraków, 3 gru",
      link: "cars/4",
      highlighted: false,
      model: { name: "F430", id: 1 },
      brand: { name: "Ferrari", id: 3 },
      year: 2008,
      mileage: 56600,
      fuel: "Benzyna",
      color: "Pomarańczowy",
      condition: "Bardzo dobry",
      user: {
        name: "Janek",
        registered: "17/06/2014",
        lastSeen: "10/01/2022",
        phone: "576 559 904",
      },
      location: {
        cityName: "Kraków",
        district: "Kazimierz",
        region: "Małopolskie",
      },
    },
    {
      id: 5,
      class: "Porsche",
      src: "https://us.123rf.com/450wm/gaschwald/gaschwald1712/gaschwald171200285/91224941-augsburg-germany-october-1-2017-porsche-911-targa-oldtimer-car-at-the-fuggerstadt-classic-2017-oldti.jpg?ver=6",
      title: "Porsche 911 Carrera 933",
      price: 60000,
      currency: " PLN",
      date: "2021-11-27",
      description: "Lubin, 27 lis",
      link: "cars/5",
      highlighted: true,
      model: { name: "911", id: 1 },
      brand: { name: "Porsche", id: 4 },
      year: 1980,
      mileage: 93030,
      fuel: "Benzyna",
      color: "Srebrny",
      condition: "Odnowiony",
      user: {
        name: "Kamil",
        registered: "05/01/2019",
        lastSeen: "10/11/2021",
        phone: "908 543 827",
      },
      location: {
        cityName: "Lubin",
        district: "Centrum",
        region: "Lubuskie",
      },
    },
    {
      id: 6,
      class: "Subaru",
      src: "https://us.123rf.com/450wm/arthursh/arthursh1605/arthursh160500001/56389996-odessa-ukraine-april-17-reel-alex-driving-his-car-subaru-sti-at-the-1-st-stage-severinov-of-the-cham.jpg?ver=6",
      title: "Subaru Impreza WRX STI",
      price: 50000,
      currency: " PLN",
      date: "2021-12-02",
      description: "Gdańsk, 2 gru",
      link: "cars/6",
      highlighted: false,
      model: { name: "Impreza", id: 1 },
      brand: { name: "Subaru", id: 5 },
      year: 2005,
      mileage: 121900,
      fuel: "Benzyna",
      color: "Niebieski",
      condition: "Dobry",
      user: {
        name: "Edward",
        registered: "20/08/2018",
        lastSeen: "06/01/2022",
        phone: "325 594 029",
      },
      location: {
        cityName: "Gdańsk",
        district: "Port",
        region: "Pomorskie",
      },
    },
    {
      id: 7,
      class: "Mclaren",
      src: "https://us.123rf.com/450wm/jvdwolf/jvdwolf1603/jvdwolf160300047/54012813-geneva-switzerland-march-2-2016-mclaren-650s-gt3-racer-sports-car-shown-at-the-86th-international-ge.jpg?ver=6",
      title: "McLaren P1, 2016r.",
      price: 200000,
      currency: " PLN",
      date: "2021-11-29",
      description: "Warszawa, 29 lis",
      link: "cars/7",
      highlighted: true,
      model: { name: "P1", id: 1 },
      brand: { name: "McLaren", id: 6 },
      year: 2016,
      mileage: 10000,
      fuel: "Benzyna",
      color: "Mandarynkowy",
      condition: "Nowy",
      user: {
        name: "Zbyszek",
        registered: "01/03/2016",
        lastSeen: "17/12/2021",
        phone: "894 038 289",
      },
      location: {
        cityName: "Warszawa",
        district: "Praga",
        region: "Mazowieckie",
      },
    },
    {
      id: 8,
      class: "Gtr",
      src: "https://us.123rf.com/450wm/stasukroma8/stasukroma81802/stasukroma8180201152/97261183-kiev-ukraine-ua-april-2017-nissan-gtr-r35-restyling-japanese-supercar-in-the-ukrainian-city-on-the-b.jpg?ver=6",
      title: "Nissan GT-R R35, Stan idealny, niski przebieg",
      price: 60000,
      currency: " PLN",
      date: "2021-11-18",
      description: "Wrocław, 18 lis",
      link: "cars/8",
      highlighted: false,
      model: { name: "GTR", id: 1 },
      brand: { name: "Nissan", id: 7 },
      year: 2012,
      mileage: 480000,
      fuel: "Benzyna",
      color: "Biały",
      condition: "Używany",
      user: {
        name: "Rafał",
        registered: "26/10/2018",
        lastSeen: "03/01/2022",
        phone: "784 479 493",
      },
      location: {
        cityName: "Wrocław",
        district: "Psie Pole",
        region: "Dolnośląskie",
      },
    },
    {
      id: 9,
      class: "Audi",
      src: "https://www.augustus-autos.co.uk/assets/205750/thumb/e7d0b680ae5bc6f23abbd10edd13b294_205750_10.jpg",
      title: "Audi R8 V10 Type 42, garażowany",
      price: 70000,
      currency: " PLN",
      date: "2021-11-30",
      description: "Warszawa, 30 lis",
      link: "cars/9",
      highlighted: false,
      model: { name: "R8", id: 1 },
      brand: { name: "Audi", id: 8 },
      year: 2010,
      mileage: 60000,
      fuel: "Benzyna",
      color: "Czarny",
      condition: "Bardzo dobry+",
      user: {
        name: "Mateusz",
        registered: "10/09/2018",
        lastSeen: "01/01/2022",
        phone: "783 094 782",
      },
      location: {
        cityName: "Warszawa",
        district: "Środmieście",
        region: "Mazowieckie",
      },
    },
    {
      id: 10,
      class: "Lambo",
      src: "https://us.123rf.com/450wm/photosvit/photosvit1612/photosvit161202420/67537329-miami-florida-ee-uu-febrero-19-de-2016-supercar-lamborghini-aventador-color-naranja-aparcado-junto-a.jpg?ver=6",
      title: "Lamborghini Aventador V12, 2016 rok, sprowadzony z USA",
      price: 500000,
      currency: " PLN",
      date: "2021-12-01",
      description: "Gdańsk, 1 gru",
      link: "cars/10",
      highlighted: false,
      model: { name: "Aventador", id: 1 },
      brand: { name: "Lamborghini", id: 9 },
      year: 2016,
      mileage: 14600,
      fuel: "Benzyna",
      color: "Pomarańczowy",
      condition: "Salonowy",
      user: {
        name: "Donald",
        registered: "08/05/2017",
        lastSeen: "30/12/2021",
        phone: "473 927 098",
      },
      location: {
        cityName: "Gdańsk",
        district: "Centrum",
        region: "Pomorskim",
      },
    },
  ],
};

const getters = {
  getAds: (state) => {
    return state.ads;
  },
  getFavAds: (state) => {
    return state.favAds;
  },
  getFilteredAds: (state, getters, rootState) => {
    return [...state.ads]
      .filter((ad) => {
        return (
          (!rootState.filters.carFilters.brand?.id ||
            rootState.filters.carFilters.brand.id === ad.brand.id) &&
          (!rootState.filters.carFilters.model?.id ||
            rootState.filters.carFilters.model.id === ad.model.id) &&
          (!rootState.filters.carFilters.price?.from ||
            rootState.filters.carFilters.price.from <= ad.price) &&
          (!rootState.filters.carFilters.price?.to ||
            rootState.filters.carFilters.price.to >= ad.price) &&
          (!rootState.filters.carFilters.year?.from ||
            rootState.filters.carFilters.year.from <= ad.year) &&
          (!rootState.filters.carFilters.year?.to ||
            rootState.filters.carFilters.year.to >= ad.year)
        );
      })
      .sort((a, b) => {
        if (rootState.filters.sortValue === 1) {
          return Date.parse(b.date) - Date.parse(a.date);
        }
        if (rootState.filters.sortValue === 3) {
          return b.price - a.price;
        }
        return a.price - b.price;
      });
  },
  getHighlightedAds: (state, getters) => {
    return getters.getFilteredAds.filter((ad) => ad.highlighted);
  },
  getRegularAds(state, getters) {
    return getters.getFilteredAds.filter((ad) => !ad.highlighted);
  },
};

const mutations = {
  // Add & Remove from Favourite Ads
  ADD_AD_TO_FAVOURITE(state, ad) {
    state.favAds = [...state.favAds, { ...ad }];
  },
  REMOVE_AD_FROM_FAVOURITE(state, adToRemove) {
    state.favAds = [...state.favAds.filter((ad) => ad.id !== adToRemove.id)];
  },
};

const actions = {
  // Add & Remove from Favourite Ads
  handleClickAddToFavourite({ commit, getters }, ad) {
    getters.getFavAds.some((favAd) => favAd.id === ad.id)
      ? commit("REMOVE_AD_FROM_FAVOURITE", ad)
      : commit("ADD_AD_TO_FAVOURITE", ad);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
