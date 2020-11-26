import DrinksCard from "./ForthSectionDrinksCard"
import DrinksData from "../data/Drinks.json"
const ForthSectionDrinks = () => {
    return (  
        <section className="forthSection">
            <article className="forthArticle">
            {DrinksData.map(singleDrink  =><DrinksCard 
                drinks={singleDrink}
                key={singleDrink.id}
            />)}
            </article>  
        </section>
    );
}
 
export default ForthSectionDrinks;