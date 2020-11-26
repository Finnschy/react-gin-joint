const DrinksCard = (props) => {
    return ( 
        <figure className="drinksFigure">
            <img src={props.drinks.imgDrinks} alt=""/>
            <figcaption>{props.drinks.captionDrinks}</figcaption>
            <h6>{props.drinks.authorDrinks}</h6>
        </figure>
     );
}
 
export default DrinksCard;