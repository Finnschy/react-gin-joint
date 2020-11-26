import ShopComingSoon from "./ShopComingSoon";

const { default: Footer } = require("./Footer")

const Shop = () => {
    return (  
        <section>
            <header id="headerShop"></header>

            <ShopComingSoon />


            <Footer />
        </section>
    );
}
 
export default Shop;