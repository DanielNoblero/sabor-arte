const products = [
    {
        id: 1,
        titulo: "Pasta",
        category: "Principal",
        precio: 500,
        descripcion: "Una pasta con salsa es un plato clásico y reconfortante, compuesto por fideos cocidos al dente, como spaghetti o penne, generosamente bañados en una salsa rica y sabrosa. Las opciones de salsa varían desde una tradicional marinara, cargada de tomates frescos y hierbas aromáticas, hasta una cremosa salsa Alfredo con un toque suave de ajo y queso parmesano. Este plato se puede personalizar con adiciones como albóndigas, verduras asadas o mariscos, convirtiéndolo en una comida versátil y satisfactoria",
        img: "/src/assets/imagenes/pasta.jpg"
    },
    {
        id: 2,
        titulo: "Pizza",
        category: "Entradas",
        precio: 600,
        descripcion: " Una pizza casera típica consiste en una base de masa crujiente y esponjosa, recién horneada, cubierta con una salsa de tomate rica y aromática. Sobre esta base se esparcen generosamente queso mozzarella derretido y dorado, y se complementa con ingredientes al gusto como rodajas de pepperoni, champiñones frescos, pimientos, albahaca, tomate fresco y cebolla. Este platillo es apreciado por su frescura y la posibilidad de personalizar los toppings según las preferencias de cada uno.",
        img: "/src/assets/imagenes/pizza.jpg"
    },
    {
        id: 3,
        titulo: "Pollo",
        category: "Principal",
        precio: 450,
        descripcion: "Las patas de pollo al horno son un plato sencillo y delicioso, ideal para una comida reconfortante. Este plato consiste en patas de pollo marinadas en una mezcla de especias, hierbas y a veces un toque de jugo de limón o ajo, que luego se hornean hasta alcanzar una piel dorada y crujiente mientras el interior permanece jugoso y tierno. Las patas de pollo al horno se pueden servir con una variedad de guarniciones, como verduras asadas, puré de papas o una ensalada fresca, haciendo de esta receta una opción versátil para cualquier ocasión.",
        img: "/src/assets/imagenes/pollo.jpg"
    },
    {
        id: 4,
        titulo: "Tacos",
        category: "Entradas",
        precio: 400,
        descripcion: "Los tacos son un platillo mexicano popular que consiste en tortillas pequeñas, típicamente de maíz, rellenas de una variedad de ingredientes. Los rellenos clásicos incluyen carne asada, pollo, pescado, o carnitas, acompañados de cebolla, cilantro, y salsa fresca. Se pueden añadir otros complementos como guacamole, queso, o frijoles refritos. Los tacos destacan por su sabor intenso y su capacidad de personalización, siendo un alimento básico tanto en eventos informales como en comidas familiares.",
        img: "/src/assets/imagenes/tacos.jpg"
    },
    {
        id: 5,
        titulo: "Tapas",
        category: "Entradas",
        precio: 350,
        descripcion: "Las tapas gallegas son una exquisita selección de pequeños platos y aperitivos originarios de Galicia, en el noroeste de España. Se caracterizan por su diversidad y riqueza, incorporando productos del mar y del campo gallegos, destacando ingredientes como mariscos frescos, carnes curadas y quesos locales. Estas tapas no solo son deliciosas sino también una parte esencial de la cultura gastronómica gallega, ofreciendo una experiencia culinaria que invita a compartir y disfrutar en buena compañía.",
        img: "/src/assets/imagenes/tapas.jpg"
    },
    {
        id: 6,
        titulo: "Empanadas",
        category: "Entradas",
        precio: 300,
        descripcion: " Las empanadas son un tipo de pastelillo relleno que se puede encontrar en diversas culturas alrededor del mundo, pero son especialmente populares en Latinoamérica, España y Filipinas. Consisten en una masa exterior, que puede ser de harina de trigo o maíz, rellena con una variedad de ingredientes que varían según la región. Los rellenos típicos incluyen carne, pollo, queso, vegetales o mariscos, a menudo acompañados de cebolla, huevo duro, aceitunas y especias. Las empanadas se pueden hornear o freír.",
        img: "/src/assets/imagenes/Empandas.jpg"
    },
    {
        id: 7,
        titulo: "Maracuyá",
        category: "Postre",
        precio: 150,
        descripcion: " El postre de maracuyá fusiona la frescura de la fruta de la pasión con la dulzura característica de la leche condensada y la textura suave de la crema. Este postre se ha ganado un lugar especial en la mesa de los amantes de los sabores tropicales.",
        img: "/src/assets/imagenes/maracuya.jpg"
    },
    {
        id: 8,
        titulo: "Flan",
        category: "Postre",
        precio: 100,
        descripcion: " El flan de huevo es un postre tradicional y popular en muchas culturas alrededor del mundo. Es un postre de textura suave y delicada, hecho principalmente con huevos, leche y azúcar, aunque pueden haber variaciones en los ingredientes y métodos de preparación según la región.",
        img: "/src/assets/imagenes/flan.jpeg"
    },
    {
        id: 9,
        titulo: "Tiramisú",
        category: "Postre",
        precio: 200,
        descripcion: " El clásico postre italiano que ha deleitado a las papilas gustativas durante generaciones. Capas de bizcochos de soletilla empapados en café, rica crema de mascarpone y una capa de cacao en polvo. El tiramisú es el final perfecto para cualquier comida, y se pueden encontrar variantes con sabor a chocolate, naranja, frambuesa e incluso con especias de calabaza.",
        img: "/src/assets/imagenes/tiramisu.jpg"
    },
    {
        id: 10,
        titulo: "Pay de queso",
        category: "Postre",
        precio: 250,
        descripcion: " El pay de queso, también conocido como cheesecake en inglés, es un postre sumamente popular en todo el mundo. Su origen se remonta a la antigua Grecia, donde se preparaba una versión más simple con queso fresco, miel y trigo. Con el tiempo, esta delicia ha evolucionado y se ha convertido en una variedad de sabores y estilos.",
        img: "/src/assets/imagenes/pay-de-queso.jpg"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === parseInt(productoId, 10)));
        }, 1000);
    });
};