import React from "react";
import './css/style.css';
import globus from './images/globus.svg'

/**
 * Информация шапки
 * @returns компонент "Информация шапки"
 */
export function HeaderInformation() {

    return (
        <div className="header-information">
            <div className="header-information_menu">
                <a href="http://localhost:3000/#">About us</a>
                <a href="http://localhost:3000/#">Brands</a>
                <a href="http://localhost:3000/#">Commissions</a>
                <a href="http://localhost:3000/#">News</a>
                <a href="http://localhost:3000/#">Contact us</a>
                <a href="http://localhost:3000/#">Careers</a>
            </div>
            <div className="header-information_language">
                <a href="http://localhost:3000/##">
                    <img src={globus} alt="Иконка глобуса" />
                    <span>EN</span>
                </a>    
                <a href="http://localhost:3000/##">
                    LOG IN
                </a>
                <a href="http://localhost:3000/##" >
                    SIGN UP
                </a>
            </div>
        </div>
    );
}
