import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
import ViewHomeProductsHook from './../../hook/products/view-home-products-hook';
import Arrivals from '../../Components/Home/arrivals/Arrivals';
const HomePage = () => {

    const [items] = ViewHomeProductsHook();
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer products={items} title="الاكثر مبيعا" btntitle="المزيد" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={items} title="احدث الازياء" btntitle="المزيد" pathText="/products" />
           
            {/* <BrandFeatured title="اشهر الماركات" btntitle="المزيد" /> */}

             <Arrivals/>
        </div> 
    )
}

export default HomePage