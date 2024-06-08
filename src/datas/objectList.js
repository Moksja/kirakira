export class Object {
    constructor(name, price, bestseller, sale, type, src) {
      this.name = name;
      this.price = price;
      this.bestseller = bestseller;
      this.sale = sale;
      this.type = type;
      this.src = src;
    }
  }

export var objectsList = [
  
  ];

export var celestialObjectsList = [
  new Object("107 Aquarii", 66, false, false, "Système stellaire", require('../assets/objectsImgs/107_Aquarii.jpg')),
    new Object("SN 2006gy", 100, false, false, "Système stellaire", require('../assets/objectsImgs/SN_2006gy.jpg')),
    new Object("KOI-5", 111, true, false, "Système stellaire", require('../assets/objectsImgs/koi-5.jpg')),
    new Object("Delta Cephei", 111.1, true, false, "Système stellaire", require('../assets/objectsImgs/Delta_Cephei.jpg')),
    new Object("QZ Carinae", 999, true, false, "Système stellaire", require('../assets/objectsImgs/QZ_Carinae.jpg')),
    new Object("OT44", 550, true, false, "Planète", require('../assets/objectsImgs/OT44.jpg')),
    new Object("TOI 849 b", 153, false, false, "Planète", require('../assets/objectsImgs/Toi_849b.jpg')),
    new Object("WASP-12b", 600, false, false, "Planète", require('../assets/objectsImgs/wasp_12b.jpg')),
    new Object("55 Cancri e", 2755, false, false, "Planète", require('../assets/objectsImgs/55_Cancri_e.PNG')),
    new Object("TrES-2b", 99, false, false, "Planète", require('../assets/objectsImgs/trEs-2b.jpg')),
    new Object("Quasar", 800, false, true, "Trou Noir", require('../assets/objectsImgs/quasar.jpg')),
    new Object("Quasar Double", 16, false, false, "Trou Noir", require('../assets/objectsImgs/quasar_double.jpg')),
    new Object("TON 618", 407, false, false, "Trou Noir", require('../assets/objectsImgs/ton_618.png')),
    new Object("Messier 51", 177.3, false, false, "Trou Noir", require('../assets/objectsImgs/messier_51.jpg')),
    new Object("Messier 104", 955, false, false, "Trou Noir", require('../assets/objectsImgs/Messier_104.jpg')),
    new Object("Nébuleuse du Collier", 101, false, true, "Nébuleuse", require('../assets/objectsImgs/Nebuleuse_collier.jpg')),
    new Object("Nébuleuse de la Cascade", 222, false, true, "Nébuleuse", require('../assets/objectsImgs/Nebuleuse_cascade.jpg')),
    new Object("Barnard 68", 0, false, true, "Nébuleuse", require('../assets/objectsImgs/Barnard_68.jpg')),
    new Object("V838 Monocerotis", 383, false, true, "Nébuleuse", require('../assets/objectsImgs/V838_Monocerotis.jpg')),
    new Object("La Main de Dieu", 0, false, true, "Nébuleuse", require('../assets/objectsImgs/Main_de_Dieu.PNG')),
    new Object("Z-229-15", 390, false, false, "Galaxie", require('../assets/objectsImgs/Z-229-15.jpg')),
    new Object("4C +37.11", 808, false, false, "Galaxie", require('../assets/objectsImgs/4C-37-11.jpeg')),
    new Object("ESO 137-001", 56, false, false, "Galaxie", require('../assets/objectsImgs/eso_137-001.jpg')),
    new Object("NGC 1052-DF2", 65.42, false, false, "Galaxie", require('../assets/objectsImgs/NGC_1052-DF2.jpg')),
    new Object("La Galaxie Morte", 309.12, false, false, "Galaxie", require('../assets/objectsImgs/Galaxie_Morte.PNG'))
]