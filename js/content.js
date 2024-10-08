export const products = 
localStorage.getItem("products")  ?  JSON.parse(localStorage.getItem("products")) : 
[
  {
    id: 1,
    imageSrc:
      "https://images.uzum.uz/cq176er6eisq2rke8830/t_product_540_high.jpg#1723562633977",
    title: "Kipriklar uchun tush L'Oreal Paris Telescopic, qora",
    rating: "4.9(64 sharhlar)",
    credit: "10 383",
    oldPrice: "142 000",
    newPrice: "89 000",
    imgText: "Aksiya",
    isLiked: false,
    seller: "LOREAL",
    sellerLink: "https://uzum.uz/uz/loreal",
    available: "215"
  },
  {
    id: 2,
    imageSrc:
      "https://images.uzum.uz/ck1descvutvccfo27mn0/original.jpg",
    title: "Ofis texnikalari uchun qog'oz varaqlari Sylvamo Svetotopy, A4f C07/3, 500 varaq",
    rating: "5(5 sharhlar)",
    credit: "4 433",
    oldPrice: "57 000",
    newPrice: "38 000",
    imgText: "Aksiya",
    isLiked: false,
    seller: "World of stationery",
    sellerLink: "https://uzum.uz/uz/world",
    available: "550"
  },
  {
    id: 3,
    imageSrc:
      "https://images.uzum.uz/cqti90dbntafgos1v650/original.jpg",
    title: "Qo'l yuvish uchun sovun",
    rating: "5(5 sharhlar)",
    credit: "9 800",
    oldPrice: "87 000",
    newPrice: "84 000",
    imgText: "Aksiya",
    isLiked: false,
    seller: "Colgate-Palmolive",
    sellerLink: "https://uzum.uz/uz/3205",
    available: "140"
  },
  {
    id: 4,
    imageSrc:
      "https://images.uzum.uz/cqrr214sslomdvnkeog0/original.jpg",
    title: "Klassik poyabzal maktab tufli o'g'il bolalar yoshlar uchun poyabzal mokasinlar lofer 29-39",
    rating: "5(5 sharhlar)",
    credit: "11 550",
    oldPrice: "500 000",
    newPrice: "99 000",
    imgText: "Aksiya",
    isLiked: false,
    seller: "King shoes",
    sellerLink: "https://uzum.uz/uz/kingshoes",
    available: "89"
  },
  {
    id: 5,
    imageSrc:
      "https://images.uzum.uz/cqevn37frr885gh3379g/original.jpg",
    title: "Avtomatik kir yuvish mashinasi SAMSUNG 6.5 kg, Eco Bubble, inverter WW65AG4S21C (ELD/XLD)",
    rating: "5(5 sharhlar)",
    credit: "548 216",
    oldPrice: "7 650 000",
    newPrice: "4 699 000",
    imgText: "Aksiya",
    isLiked: false,
    seller: "mzone",
    sellerLink: "https://uzum.uz/uz/mzone",
    available: "51"
  },
  {
    id: 6,
    imageSrc:
      "https://images.uzum.uz/cq5t1agsarnfdo9au850/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 7,
    imageSrc:
      "https://images.uzum.uz/cqg8247frr8a72r5hga0/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 8,
    imageSrc:
      "https://images.uzum.uz/ce4pavqvtie1lhbehr4g/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 9,
    imageSrc:
      "https://images.uzum.uz/cd0gfef0tgqvlm57tvdg/t_product_540_high.jpg#1722559653244",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 10,
    imageSrc:
      "https://images.uzum.uz/cpg0ivbmdtjnp738cg00/t_product_540_high.jpg#1722559653251",
    title: "Smartfon realme C51 128GB 4GB NFC Carbon Black kamera 50 MP, kuvvatlagich 33w",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 11,
    imageSrc:
      "https://images.uzum.uz/cqmcfiffrr8a72r6q9s0/t_product_540_high.jpg#1723302405282",
    title: "Erkaklar shimlari, klassik, tekis chinos",
    rating: "4.9(64 sharhlar)",
    credit: "19 716",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 12,
    imageSrc:
      "https://images.uzum.uz/cqmctfssslomdvnj7vv0/t_product_540_high.jpg#1723302405282",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 13,
    imageSrc:
      "https://images.uzum.uz/cqdkd5csslotj05l8tj0/t_product_540_high.jpg#1723302405282",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 14,
    imageSrc:
      "https://images.uzum.uz/cpta1d0sarnfdo99bbd0/t_product_540_high.jpg#1723302405282",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 15,
    imageSrc:
      "https://images.uzum.uz/cq7odncsslotj05k3npg/t_product_540_high.jpg#1723302405285",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 16,
    imageSrc:
      "https://images.uzum.uz/cq5t1agsarnfdo9au850/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 17,
    imageSrc:
      "https://images.uzum.uz/cqg8247frr8a72r5hga0/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 18,
    imageSrc:
      "https://images.uzum.uz/ce4pavqvtie1lhbehr4g/t_product_540_high.jpg#1722559653243",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 19,
    imageSrc:
      "https://images.uzum.uz/cd0gfef0tgqvlm57tvdg/t_product_540_high.jpg#1722559653244",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
  {
    id: 20,
    imageSrc:
      "https://images.uzum.uz/cpg0ivbmdtjnp738cg00/t_product_540_high.jpg#1722559653251",
    title: "Ikki kamerali muzlatgichi Biryusa M120 hajmi 205 litr",
    rating: "5(5 sharhlar)",
    credit: "349 883",
    oldPrice: "$50.00",
    newPrice: "$30.00",
    imgText: "Aksiya",
    isLiked: false,
  },
];

