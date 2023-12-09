import { Category } from "./app/shared/models/Categories";
import { Product } from "./app/shared/models/Products";


export const categories: Category[] = [
    {
        img: 'https://img.freepik.com/free-vector/smart-watch_23-2147519962.jpg?1&amp;t=st=1697121035~exp=1697121635~hmac=ad27bb7b476e0d262fbccc07131962288c4fdc4f4bd9ecc1fbb32c9e0c0dcbb1',
        name:'Special Deals'
    },
    {
        img: 'https://img.freepik.com/free-photo/cool-earphones-with-blue-background_23-2150271766.jpg?t=st=1697120488~exp=1697121088~hmac=57d4653e60980b3ac0137cb289801ed1f18175dc6324bab281441f60f191f2df',
        name:'Wireless Earbuds'
    },
    {
        img: 'https://img.freepik.com/premium-psd/smartwatch-device-mockup_638896-2.jpg',
        name:'Smartwatches'
    },
    {
        img: 'https://img.freepik.com/premium-vector/realistic-black-headphones-colorful-background_368602-579.jpg',
        name:'Earphones'
    },
    {
        img: 'https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-96810.jpg?t=st=1697122930~exp=1697123530~hmac=373d709e934e974c13ca8c28904298079a0dce2ec0ba8cf5b3b378e51599e25e',
        name:'AMOLED screen'
    }
]

export const sample_products: Product[] = [
    // WIEWLESS EARBUDS
    {
        id: 1,
        category: 'Wireless Earbuds',
        name: 'Buds VS404 With ENC',
        description: '50 Hours of Playtime with ENC',
        dicPrice: 3499,
        discount: 71,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1.2_a7f4d9ff-b6bd-4717-9aeb-412a303fdfb1.png?v=1695119844',
    },
    {
        id: 2,
        category: 'Wireless Earbuds',
        name: 'Buds VS104 Max ANC',
        description: '45 hours of playtime | ANC up to 25dB',
        dicPrice: 4999,
        discount: 74,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1.4_b091930e-8347-4d5a-967d-f1056cf66a5e.png?v=1691043368',
    },    

    {
        id: 3,
        category: 'Wireless Earbuds',
        name: 'Buds VS401',
        description: 'Quad Mic with ENC | 50 hours of playtime',
        dicPrice: 3499,
        discount: 62,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1_95328d40-a938-44fa-8b63-75eaa900801d.png?v=1686195918',
    },

    {
        id: 4,
        category: 'Wireless Earbuds',
        name: 'Buds VS102 Plus',
        description: '70 hr playtime | Quad Mic | ENC',
        dicPrice: 3999,
        discount: 70,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/3_1b563deb-0f7a-4d72-b8f2-84b1f1723897.png?v=1687236070',
    },

    // SPECIAL DEALS
    {
        id: 5,
        category: 'Special Deals',
        name: 'ColorFit Thrive Smart Watch',
        description: '1.85" HD display | Metallic finish',
        dicPrice: 5999,
        discount: 78,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/50.png?v=1690783293',
    },

    {
        id: 6,
        category: 'Special Deals',
        name: 'Buds VS404 With ENC',
        description: '50 Hours of Playtime with ENC',
        dicPrice: 3499,
        discount: 71,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1.2_a7f4d9ff-b6bd-4717-9aeb-412a303fdfb1.png?v=1695119844',
    },

    {
        id: 7,
        category: 'Special Deals',
        name: 'ColorFit Quad Call',
        description: '1.81" HD display | Premium metal finish',
        dicPrice: 5999,
        discount: 77,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/Artboard3_19.png?v=1686315408',
    },

    {
        id: 8,
        category: 'Special Deals',
        name: 'ColorFit Icon 2',
        description: '1.8" Display With Calling',
        dicPrice: 6999,
        discount: 66,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1.2_fa2cac90-769e-491e-8be2-843e7b4a4441.png?v=1695388527',
    },

    // SMARTWATCH
    {
        id: 9,
        category: 'Smartwatches',
        name: 'ColorFit Thrive Smart Watch',
        description: '1.85" HD display | Metallic finish',
        dicPrice: 5999,
        discount: 78,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/50.png?v=1690783293',
    },
    {
        id: 10,
        category: 'Smartwatches',
        name: 'ColorFit Mighty',
        description: '1.96" display | Metallic build',
        dicPrice: 6999,
        discount: 74,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/Mighty-PDP-Black-0-removebg-preview_e5628392-f2ac-4655-ac2d-7b363f621821.png?v=1688729969',
    },
    {
        id: 11,
        category: 'Smartwatches',
        name: 'NoiseFit Halo AMOLED',
        description: '1.43" AMOLED | Metal build',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1_1_b18f77db-5fef-4698-9902-a48fec2b8efa.png?v=1692267270',
    },
    {
        id: 12,
        category: 'Smartwatches',
        name: 'Force Plus AMOLED watch',
        description: '1.46" AMOLED display',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1_77e673f8-14be-4be8-8680-9b1dd1e706e0.png?v=1682823529',
    },

    // EARPHONES
    {
        id: 13,
        category: 'Earphones',
        name: 'Tune Active Pro',
        description: 'Instacharge™ | ESR™ | 60-hour playtime',
        dicPrice: 2999,
        discount: 50,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/1.2_a32ebbb0-e601-46b4-8d6e-74f11726c286.png?v=1659442751',
    },
    {
        id: 14,
        category: 'Earphones',
        name: 'Xtreme Neckband',
        description: '100-hour playtime | Environmental Sound Reduction™ | Instacharge™',
        dicPrice: 3999,
        discount: 50,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/8.1127_7d8d173b-6913-4354-9d83-8254263ce900.png?v=1660893516',
    },

    // AMOLED screen
    {
        id: 15,
        category: 'AMOLED screen',
        name: 'Ultra 3 AMOLED',
        description: '1.96" AMOLED',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/NoiseColorFitUltra3-TealBlue_1.png?v=1695122152',
    },
    {
        id: 16,
        category: 'AMOLED screen',
        name: 'Force Plus AMOLED watch',
        description: '1.46" AMOLED display',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1_77e673f8-14be-4be8-8680-9b1dd1e706e0.png?v=1682823529',
    },
    {
        id: 17,
        category: 'AMOLED screen',
        name: 'Pro 4 Alpha AMOLED',
        description: '1.78" AMOLED With Calling',
        dicPrice: 7999,
        discount: 72,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/1_8b810946-adcb-4a40-b460-e967ee2fbe47.png?v=1686911647',
    },
    {
        id: 18,
        category: 'AMOLED screen',
        name: 'NoiseFit Evolve 3',
        description: '1.43" Amoled with Calling',
        dicPrice: 6999,
        discount: 60,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/4_2.png?v=1676439601',
    },

]

export const sample_home_products: Product[] = [
    {
        id: 15,
        category: 'AMOLED screen',
        name: 'Ultra 3 AMOLED',
        description: '1.96" AMOLED',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/NoiseColorFitUltra3-TealBlue_1.png?v=1695122152',
    },
    {
        id: 16,
        category: 'AMOLED screen',
        name: 'Force Plus AMOLED watch',
        description: '1.46" AMOLED display',
        dicPrice: 7999,
        discount: 68,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/files/1_77e673f8-14be-4be8-8680-9b1dd1e706e0.png?v=1682823529',
    },
    {
        id: 17,
        category: 'AMOLED screen',
        name: 'Pro 4 Alpha AMOLED',
        description: '1.78" AMOLED With Calling',
        dicPrice: 7999,
        discount: 72,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/1_8b810946-adcb-4a40-b460-e967ee2fbe47.png?v=1686911647',
    },
    {
        id: 18,
        category: 'AMOLED screen',
        name: 'NoiseFit Evolve 3',
        description: '1.43" Amoled with Calling',
        dicPrice: 6999,
        discount: 60,
        colorName: 'Jet Black',
        imgUrl: '//www.gonoise.com/cdn/shop/products/4_2.png?v=1676439601',
    },
]
