import {
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="isActive">HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/entertainment" activeClassName="isActive">ENTERTAINMENT</NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeClassName="isActive">SHOP</NavLink>
                </li>
                <li>
                    <NavLink to="/events" activeClassName="isActive">EVENTS</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="isActive">CONTACT</NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;