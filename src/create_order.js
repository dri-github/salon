import React from "react";
import { Link } from "react-router-dom";
import "./create_order.css";

export default class CreateOrder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            telephone: "",
            orderInfo: null,
            address: null,
            date: null,
            time: null
        };

        this.months = [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
            'Январь'
        ];
    }

    componentDidMount() {
        const f = async() => {
            const response = await fetch("http:/127.0.0.1:3030/get_order_info", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
                }
            });

            if (response.ok) {
                this.setState({ orderInfo: await response.json() });
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        }
        f();
    }

    render() {
        const state = this.state;

        const onSubmit = () => {
            let date = new Date(Date.now());
            date.setDate(date.getDate() + Number(this.state.date) + 1);

            const f = async () => {
                const response = await fetch(`http:/127.0.0.1:3030/add_order/?masterId=${this.state.orderInfo[this.state.address].id}&telephone=${this.state.telephone}&date=${date.toISOString().slice(0, 19).replace('T', ' ')}&time=${this.state.time}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                        'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
                    }
                });

                if (response.ok) {
                    
                } else {
                    alert("Ошибка HTTP: " + response.status);
                }
            }
            f();
        }

        return <form method="get" className="form" onSubmit={onSubmit} action="/">
            <h1>Заказать услугу</h1>
            <span><Link to="/" className="exit">&#10005;</Link></span>
            <p className="main-text">
                Укажите свой телефон и адрес парикмахерской, чтобы заказать услугу в один клик
            </p>
            <p className="telephone-container">
                <label>Номер телефона</label><br />
                <input type="tel" className="input_text_teg" placeholder="+375 (00) 000-00-00" required value={state.telephone} onChange={(event) => this.setState({ telephone: event.target.value })} />
            </p>
            <p className="adres-container">
                <label>Адрес</label><br />
                <select className="input_text_teg" id="adres" required onChange={(event) => { this.setState({ address: event.target.value }); }}>
                    <option disabled selected hidden>Выберите адрес</option>
                    {this.state.orderInfo ? this.state.orderInfo.map((master, index) => { return <option value={index}>{master.master}</option>; }) : null}
                </select>
            </p>
            <p className="date-container">
                <label>Дата</label><br />
                <select className="input_text_teg" required disabled={!this.state.address} onChange={(event) => { this.setState({ date: event.target.value }); }}>
                    <option disabled selected hidden>Выберите дату</option>
                    {this.state.address ? this.state.orderInfo[this.state.address].date.map((date, index) => {
                        return <>
                            {index === 0 ? <option disabled>{this.months[new Date().getMonth()]}</option> : null}
                            {Number(date.value) === 1 ? <option disabled>{this.months[new Date().getMonth() + 1]}</option> : null}
                            <option value={index}>{date.value}</option>
                        </>;
                    }) : null}
                </select>
            </p>
            <p className="time-container">
                <label>Время</label><br />
                <select className="input_text_teg" required disabled={!this.state.date} onChange={(event) => { this.setState({ time: event.target.value }); }}>
                    <option disabled selected hidden>Выберите время</option>
                    {this.state.date ? this.state.orderInfo[this.state.address].date[this.state.date].time.map((time, index) => { return <option value={time.value} disabled={time.disabled}>{String(time.value + (String(time.value).split(":")[1].length < 2 ? "0" : ""))}</option>; }) : null}
                </select>
            </p>
            <p className="submit-container"><input type="submit" value="Заказать" className="visuale_button submit_button" /></p>
        </form>;
    }
}/* <Link to="/create_order">Очистить</Link> */