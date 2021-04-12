import React, {useState} from 'react'
import ListDrink from '../../commons/components/ListDrink'
import ListPost from '../../commons/components/ListPost'
import ListProduct from '../../commons/components/ListProduct'
import BookTable from '../../features/Home/BookTable'
import HotSale from '../../features/Home/HotSale'
import LatestPost from '../../features/Home/LatestPost'
import ListBanner from '../../features/Home/ListBanner'
import MainSlider from '../../features/Home/MainSlider'
import MenuDrink from '../../features/Home/MenuDrink'
import OurServer from '../../features/Home/OurService'
import Parallax from '../../features/Home/Parallax'
import SmallSlider from '../../features/Home/SmallSlider'


function HomePage() {
    const [listBanner] = useState([
        {
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851620/BaristaCoffee/banners/banner1_fki7lj.jpg",
            title: "New Coffee Flavours",
        },
        {
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/other/banner2_yrdt6u.jpg",
            title: "This Friday 25% Off",
        }
    ])
    const [listHostSale] = useState([
        {
            productId: "prd01",
            productTitle: "paper pouch",
            productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod2_xocw36.jpg",
            productPrice: "46.00",
            rating: 90,
            isSale: false
        },
        {
            productId: "prd02",
            productTitle: "paper bag",
            productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851630/BaristaCoffee/shop/prod12_mc7rpz.jpg",
            productPrice: "79.00",
            productPromo: "98.00",
            rating: 85,
            isSale: true
        },
        {
            productId: "prd03",
            productTitle: "plastic pouch",
            productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod3_nwf7du.jpg",
            productPrice: "27.00",
            rating: 80,
            isSale: false
        },
        {
            productId: "prd04",
            productTitle: "paper pouch",
            productAvatar: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851631/BaristaCoffee/shop/prod7_a8r7zg.jpg",
            productPrice: "71.00",
            rating: 95,
            isSale: false
        }
    ])
    const [listLatestPost] = useState([
        {
            title: "FULL TASTE",
            shortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-3_lmqhci.jpg",
            number: "01"
        },
        {
            title: "FULL TASTE",
            shortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-2_kdmfgc.jpg",
            number: "02"
        },
        {
            title: "FEEL THE COFFEE",
            shortDesc: "Alienum phaedrum to rquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix atle.",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851627/BaristaCoffee/other/service-1_pnhw2j.jpg",
            number: "03"
        }
    ])
    const [listDrink] = useState([
        {
            id: "drk12",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851624/BaristaCoffee/drinks/cf9_uy0mte.jpg",
            price: "4.67",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "ICED CARAMEL LATTE",
            new: false,
        },
        {
            id: "drk11",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851622/BaristaCoffee/drinks/cf12_uok8wg.jpg",
            price: "2.98",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "ESPRESSO MACCHIATO",
            new: false,
        },
        {
            id: "drk10",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851622/BaristaCoffee/drinks/cf11_alphny.jpg",
            price: "2.54",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "CARAMEL MACCHIATO",
            new: false,
        },
        {
            id: "drk09",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/drinks/cf10_kymgai.jpg",
            price: "3.05",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "ICED SMOKED LATTE",
            new: false
        },
        {
            id: "drk08",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf8_mjm8pz.jpg",
            price: "2.60",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "ICED CAFFE MOCHA",
            new: false
        },
        {
            id: "drk07",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf7_agn6eh.jpg",
            price: "3.92",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "ICED GINGERBREAD LATTE",
            new: true
        },
        {
            id: "drk06",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf6_ktujh3.jpg",
            price: "3.65",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "VANILLA LATTE",
            new: false
        },
        {
            id: "drk05",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf5_lssszd.jpg",
            price: "4.03",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "CAPPUCCINO",
            new: false
        },
        {
            id: "drk04",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf4_wxxmfc.jpg",
            price: "3.06",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "CAFFE AMERICANO",
            new: false
        },
        {
            id: "drk03",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf3_pqrxgh.jpg",
            price: "2.79",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "WHITE CHOCOLATE MOCHA",
            new: false
        },
        {
            id: "drk02",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851623/BaristaCoffee/drinks/cf2_xb6uro.jpg",
            price: "3.67",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "COFFEE MOCHA",
            new: false
        },
        {
            id: "drk01",
            img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/drinks/cf1_hkizn2.jpg",
            price: "2.95",
            shortDesc: "Fresh brewed coffee and steamed milk",
            title: "COFFEE LATE",
            new: true
        }
    ])

    return (
        <>
            <MainSlider/>
            <ListBanner listBanner = {listBanner}/>

            <HotSale
                listHotSale = {
                    <ListProduct
                        listProduct = {listHostSale}
                        dataCart = {[]}
                    />
                }
            />
            
            <Parallax/>

            <OurServer/>

            <SmallSlider/>

            <MenuDrink
                listDrink = {
                    <ListDrink
                        listDrink = {listDrink}
                    />
                }
            />

            <BookTable/>
            <LatestPost
                listLatestPost = {
                    <ListPost
                        listPost = {listLatestPost}
                    />
                }
            />
        </>
    )
}

export default HomePage
