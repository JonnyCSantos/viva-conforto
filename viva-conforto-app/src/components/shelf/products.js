import Prod1 from '../../img/kit-3-viagem.jpg'
import Prod2 from '../../img/nasa-space.jpg'
import Prod3 from '../../img/mamadeira.jpg'
import Prod4 from '../../img/refresh-gel.jpg'
import Feat from '../../img/icons/feat.png'
import Start from '../../img/icons/star.png'
import Truck from '../../img/icons/truck.png'

const Products = [
    {
      id: '1',
      name: "Kit 3 Travesseiros de Viagem my travel grafite",
      desc: "Este é um produto teste",
      val_real: '849.90',
      val_sale: '800.90',
      qtd_parc: '3x',
      val_parc: '266.96',
      tag_desc: '5',
      tag_feat: Feat,
      tag_entry: Start,
      tag_truck: false,
      img: Prod1,
    },
    {
        id: '2',
        name: "Travesseiro Nasa Nap Space",
        desc: "Este é um produto teste",
        val_real: '59.90',
        val_sale: '49.90',
        val_parc: '16,63',
        qtd_parc: '3x',
        tag_desc: '16',
        tag_feat: false,
        tag_entry: Start,
        tag_truck: Truck,
        img: Prod2,
      },
      {
        id: '3',
        name: "Mamadeira de vidro com bico de silicone chuca baby",
        desc: "Este é um produto teste",
        val_real: '99.80',
        val_sale: '79.90',
        qtd_parc: '3x',
        val_parc: '26,63',
        tag_desc: '20',
        tag_feat: false,
        tag_entry: false,
        tag_truck: Truck,
        img: Prod3,
      },
      {
        id: '4',
        name: "Travesseiro Nasa Nap Refresh gel",
        desc: "Este é um produto teste",
        val_real: '129.00',
        val_sale: '109.00',
        qtd_parc: '3x',
        val_parc: '36,33',
        tag_desc: '15',
        tag_feat: Feat,
        tag_entry: false,
        tag_truck: Truck,
        img: Prod4,
      },
      {
        id: '5',
        name: "Travesseiro Nasa Nap Space",
        desc: "Este é um produto teste",
        val_real: '59.90',
        val_sale: '49.90',
        val_parc: '16,63',
        qtd_parc: '3x',
        tag_desc: '16',
        tag_feat: false,
        tag_entry: Start,
        tag_truck: Truck,
        img: Prod2,
      },
      {
        id: '6',
        name: "Mamadeira de vidro com bico de silicone chuca baby",
        desc: "Este é um produto teste",
        val_real: '99.80',
        val_sale: '79.90',
        qtd_parc: '3x',
        val_parc: '26,63',
        tag_desc: '20',
        tag_feat: false,
        tag_entry: false,
        tag_truck: Truck,
        img: Prod3,
      },
      {
        id: '7',
        name: "Travesseiro Nasa Nap Refresh gel",
        desc: "Este é um produto teste",
        val_real: '129.00',
        val_sale: '109.00',
        qtd_parc: '3x',
        val_parc: '36,33',
        tag_desc: '15',
        tag_feat: Feat,
        tag_entry: false,
        tag_truck: Truck,
        img: Prod4,
      },

];
 
export default Products;