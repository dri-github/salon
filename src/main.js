import React from "react";
import { Link, NavLink } from "react-router-dom";

import NavMenu from "./NavMenu/NavMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "./App.css";

import imageSlider1 from "./images/slider1.1.png";
import imageSlider2 from "./images/slider2.png";
import imageSlider3 from "./images/slider3.png";
import imageSlider4 from "./images/slider4.png";

import Card from "./Card/Card";
import imageCard1 from "./images/man-haircut.jpg";
import imageCard2 from "./images/women-haircut.jpg";
import imageCard3 from "./images/staining.jpg";
import imageCard4 from "./images/solarium.jpg";
import imageCard5 from "./images/massage.jpg";
import imageCard6 from "./images/eyelash.jpg";
import imageCard7 from "./images/manicure.jpg";

import Spec from "./Spec/Spec";
import imageSpec1 from "./images/visagiste.jpg";
import imageSpec2 from "./images/barber.jpg";
import imageSpec3 from "./images/masseur.jpg";
import imageSpec4 from "./images/haircutwomen.jpg";

import tg_svg from "./images/tg2.svg";
import vk_svg from "./images/vk2.svg";
import inst_svg from "./images/inst2.svg";
import tgHover_svg from "./images/tg.svg";
import vkHover_svg from "./images/vk.svg";
import instHover_svg from "./images/inst.svg";

import imageEstel from "./images/estel.svg";
import imageLonda from "./images/londa.svg";
import imageLoreal from "./images/loreal.svg";

export default class Main extends React.Component {
    render() {
        return (<>
            <header>
                <nav>
                    <div className="nav-logo">Victoria</div>
                    <NavMenu />
                    <div className="nav-phoneNumber">
                        <span className="edLine">Единая линия<br />+375 (00) 000-00-00</span>
                    </div>
                    <div className="nav-record">
                        <NavLink end className="nav-record-button" to="/create_order">Онлайн запись</NavLink>
                    </div>
                </nav>
            </header>
            <main className="main">
                <Swiper
                    className="swiper-container"
                    modules={[Navigation, Autoplay]}
                    slidesPerView={1}
                    touchRatio={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide><div className="image-slider_image"><img src={imageSlider1} alt="slider1" /></div></SwiperSlide>
                    <SwiperSlide><div className="image-slider_image"><img src={imageSlider2} alt="slider2" /></div></SwiperSlide>
                    <SwiperSlide><div className="image-slider_image"><img src={imageSlider3} alt="slider3" /></div></SwiperSlide>
                    <SwiperSlide><div className="image-slider_image"><img src={imageSlider4} alt="slider4" /></div></SwiperSlide>
                </Swiper>
                <div className="cards-container" id="containers">
                    <h1 className="popular-services">Популярные услуги</h1>
                    <div className="cards" id="cards">
                        <Card
                            top="Мужские стрижки"
                            image={imageCard1}
                            coasts={["Прическа - 9$", "Мытье головы - 3$"]}
                        >Мода на мужские стрижки ни на шаг не отстает от женской. Появляются новые уникальные направления, открывающие стилистам бесконечный простор для воплощения самых амбициозных задумок и преображения образа. Современные стрижки мужчин впитали в себя легкую небрежность, которая гармонично сочетается с аккуратностью и изысканностью. Подбирать оптимальный вариант стрижки следует, основываясь на индивидуальных особенностях волос, лица, общего стиля.</Card>
                        <Card
                            top="Женские стрижки"
                            image={imageCard2}
                            coasts={["Прическа - 9$", "Мытье головы - 3$"]}
                        >Если говорить про тренды, то короткие женские стрижки в 2023-м по-прежнему актуальны. В лидерах креативные молодежные варианты, но и классику со счетов не сбрасывают. Если говорить про тренды, то короткие женские стрижки в 2023-м по-прежнему актуальны. В лидерах креативные молодежные варианты, но и классику со счетов не сбрасывают.</Card>
                        <Card
                            top="Окрашивание"
                            image={imageCard3}
                            coasts={["Одноцветное - 9$", "Двуцветное - 13$"]}
                        >Одним из главных трендов в окрашивании волос на 2023 год является натуральность. Многие девушки и женщины выбирают природные оттенки, такие как блонд, рыжий или шоколадный, которые подчеркивают естественную красоту и не выглядят приторно. Однако, также набирает популярность и яркие цвета, такие как фиолетовый, розовый, синий и зеленый, которые помогают выделиться из толпы.</Card>
                        <Card
                            top="Солярий"
                            image={imageCard4}
                            coasts={["10 минут - 5$", "15 минут - 9$"]}
                        >Красивый загар круглый год - не проблема. Попробуйте наш солярий. У нас вы найдете самые современные установки, которые позволят получить равномерный и красивый загар всего за несколько сеансов. Наши специалисты помогут вам выбрать оптимальный уровень облучения и расскажут о правилах безопасности, чтобы вы получили только положительный эффект. Забронируйте свой первый сеанс уже сегодня и наслаждайтесь красивым загаром круглый год!</Card>
                        <Card
                            top="Массаж"
                            image={imageCard5}
                            coasts={["Ручной - 25$", "Автоматный - 15$"]}
                        >Ручной массаж позволяет улучшить кровообращение, снять мышечное напряжение, уменьшить боль и улучшить общее состояние организма. Автоматный массаж позволяет получить максимальный эффект массажа, не требуя больших затрат времени и сил. Наша команда опытных специалистов поможет вам выбрать оптимальный вид массажа, учитывая ваши индивидуальные потребности и желания.</Card>
                        <Card
                            top="Наращивание ресниц"
                            image={imageCard6}
                            coasts={["Окрашивание - 7$", "Коррекция - 14$"]}
                        >В нашем салоне красоты вы можете воспользоваться услугой наращивания ресниц, которая позволит вам получить выразительный взгляд и привлекательный образ. Мы используем только качественные материалы и профессиональное оборудование, что гарантирует безопасность и долговечность нашей услуги. Наши мастера-стилисты обладают большим опытом в наращивании ресниц и помогут вам подобрать оптимальную форму и длину ресниц, учитывая ваши индивидуальные особенности.</Card>
                        <Card
                            top="Маникюр"
                            image={imageCard7}
                            coasts={["Маникюр - 15$", "Наращивание - 6$"]}
                        >Мы предлагаем профессиональный маникюр, который позволит вам получить идеально ухоженные ногти и красивые руки. В нашем салоне красоты мы используем только качественные материалы и инструменты, чтобы обеспечить безопасность и качество нашей услуги. Наши мастера-маникюрщики обладают большим опытом и профессионализмом в своей работе, и помогут вам подобрать оптимальный вариант маникюра, учитывая ваши индивидуальные пожелания.</Card>
                    </div>
                </div>
                <div className="spec">
                    <hr />
                    <h1 id="masters">Лучшие специалисты</h1>
                    <hr />
                    <div className="spec-container">
                        <Spec image={imageSpec1}>
                            <h4>Алла Пугачёва</h4>
                            <h4>Профессиональный визажист</h4>
                        </Spec>
                        <Spec image={imageSpec2}>
                            <h4>Артур Сухофруктов</h4>
                            <h4>Профессиональный барбер</h4>
                        </Spec>
                        <Spec image={imageSpec3}>
                            <h4>Илья Заговорский</h4>
                            <h4>Специалист по массажам</h4>
                        </Spec>
                        <Spec image={imageSpec4}>
                            <h4>Анна Фиалкова</h4>
                            <h4>Парикхмахер</h4>
                        </Spec>
                    </div>
                </div>
            </main>
            <footer>
                <div className="footer-logo">Victoria</div>
                <ul className="footer-menu">
                    <li><a href="/#" className="footer-links">О салоне</a></li>
                    <li><NavLink end to="/register_master" className="footer-links">Стань партнёром</NavLink></li>
                    <li><NavLink end to="/log_onto" className="footer-links">На работу</NavLink></li>
                </ul>
                <div className="verticalLine"></div>
                <div className="mail">
                    <span className="submit-stock">Подпишитесь на нашу рассылку</span><br />
                    <label>
                        <input placeholder="IvanIvanov@gmail.com" type="email" name="mail" className="enter-email" />
                        <input value="Подписаться" type="button" name="mail" className="submit-email" id="submit-button" />
                    </label>
                </div>
                <div className="our-media">
                    <span>Наши соцсети</span>
                    <ul className="social1">
                        <li>
                            <a href="/#" className="tg">
                                <img src={tgHover_svg} alt="" />
                                <img className="tg-image-hover1" src={tg_svg} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="vk">
                                <img src={vkHover_svg} alt="" />
                                <img className="vk-image-hover1" src={vk_svg} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="/#" className="inst">
                                <img src={instHover_svg} alt="" />
                                <img className="inst-image-hover1" src={inst_svg} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="our-partners-media">
                    <span>Наши партнёры</span>
                    <ul className="iconsOfPartners">
                        <li>
                            <a href="/#" className="estel">
                                <img src={imageEstel} alt="" />
                            </a>
                        </li>
                        <li className="londa">
                            <a href="/#">
                                <img src={imageLonda} alt="" />
                            </a>
                        </li>
                        <li className="loreal">
                            <a href="/#">
                                <img src={imageLoreal} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>);
    }
}