import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./work_page.css";

export default function WorkPage(props) {
    const { id } = useParams();
    const [ordersList, setOrdersList] = useState();

    useEffect(() => {
        const f = async () => {
            const getOrderList = async () => {
                const response = await fetch(`http:/127.0.0.1:3030/orders_list/?id=${id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                        'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    return data;
                } else {
                    alert("Ошибка HTTP: " + response.status);
                    return null;
                }
            }

            setOrdersList(await getOrderList());
        }
        f();
    }, [])

    return <div className="work-page" style={{"background-color": "white", "height": "calc(100% - 100px)", "min-width": "800px", "padding": "10px 50px", "margin-right": "auto", "margin-left": "auto", "margin-top": "50px"}}>
        <h3 className="title">Мастерская</h3>
        <span><Link to="/" className="exit">&#10005;</Link></span>
        <h3>Список заказов на сегодня</h3>
        <div className="order_list">
            <table border="1" id="active_orders">
                <tr><td>Статус</td><td>Телефон</td><td>Время</td></tr>
                {ordersList?.map((order, index) => {
                    return <tr>
                        <td>{order.status}</td>
                        <td>{order.client_telephone}</td>
                        <td id="time">{order.time}<button className="compleate_button" id={order.client_telephone} disabled={(((new Date()).getHours() * 60 * 60 + (new Date()).getMinutes() * 60) < (order.time.split(":")[0] * 60 * 60 + order.time.split(":")[1] * 60)) ? true : false} onClick={(event) => {
                            const f = async (event) => {
                                const response = await fetch(`http:/127.0.0.1:3030/update_user/?master_id=${id}&client_telephone=${event.currentTarget.id}&value=${1}`, {
                                    method: "GET",
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                                        'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
                                    }
                                });

                                if (response.ok) {
                                    const data = await response.json();
                                    return data;
                                } else {
                                    alert("Ошибка HTTP: " + response.status);
                                    return null;
                                }
                            }
                            f(event);
                        }}>Выполнить</button></td>
                    </tr>
                })}
            </table>
        </div>
    </div>;
}