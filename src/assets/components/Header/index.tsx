import React from "react";
import './css/style.css';
import { HeaderInformation } from "../HeaderInformation";

/**
 * Шапка
 * @returns компонент "Шапка"
 */
export function Header(){

    return(
        <header>
            <HeaderInformation/>
        </header>
    );
}