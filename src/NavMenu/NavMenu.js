import React from "react";
import "./NavMenu.css";
import tg_svg from "../images/tg2.svg";
import vk_svg from "../images/vk2.svg";
import inst_svg from "../images/inst2.svg";

import tgHover_svg from "../images/tg.svg";
import vkHover_svg from "../images/vk.svg";
import instHover_svg from "../images/inst.svg";

export default class NavMenu extends React.Component {
    render() {
        const Transition = (props) => {
            return <li><a href={props.href} className="nav-links">{props.children}</a></li>;
        }

        const Social = (props) => {
            return <li>
                <a href="#" className={props.className}>
                    <img src={props.image} alt="" />
                    <img className={props.className + "-image-hover"} src={props.imageHover} alt="" />
                </a>
            </li>;
        }

        return <ul className="nav-menu">
            <Transition href="registration_master.html">Вакансии</Transition>
            <Transition href="#services">Услуги</Transition>
            <Transition href="#masters">Мастера</Transition>
            <ul className="social">
                <Social className="tg" image={tg_svg} imageHover={tgHover_svg} />
                <Social className="vk" image={vk_svg} imageHover={vkHover_svg} />
                <Social className="inst" image={inst_svg} imageHover={instHover_svg} />
            </ul>
        </ul>;
    }
}