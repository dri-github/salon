import React from "react";
import { Link } from "react-router-dom";
import "./register_master.css";

export default class RegisterMaster extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            full_name: "",
            telephone: "",
            adres: "",
            password: "",
            chech_password: "",
            open_time: "",
            close_time: "",
            step: ""
        };
    }

    render() {
        const state = this.state;

        const onSubmit = (event) => {
            const f = async () => {
                const timeFormat = (time) => {
                    if (time.split(":")[0].length < 2)
                        time = "0" + time;
                    if (time.split(":").length < 3)
                        time = time + ":00";

                    return time;
                }

                const response = await fetch(`http:/127.0.0.1:3030/register_master/?full_name=${state.full_name}&telephone=${state.telephone}&password=${state.password}&adres=${state.adres}&open_time=${timeFormat(state.open_time)}&close_time=${timeFormat(state.close_time)}&step=${timeFormat(state.step)}`, {
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

            if (this.state.password !== this.state.chech_password)
                event.preventDefault();
            else
                f();
        }

        return <div className="register_master"><form className="form" onSubmit={onSubmit}>
            <h1>Форма для регистрации мастеров</h1>
            <span><Link to="/" className="exit">&#10005;</Link></span>
            <div className="page">
                <div className="left_page">
                    <p>
                        <label>ФИО</label><br />
                        <input type="text" className="input_text_teg" value={this.state.full_name} onChange={(event) => this.setState({ full_name: event.target.value })} required />
                    </p>
                    <p>
                        <label>Адрес парикмахерской</label><br />
                        <input type="text" className="input_text_teg" value={this.state.adres} onChange={(event) => this.setState({ adres: event.target.value })} required />
                    </p>
                    <p>
                        <label>Номер телефона</label><br />
                        <input type="tel" className="input_text_teg" value={this.state.telephone} onChange={(event) => this.setState({ telephone: event.target.value })} placeholder="+375 (00) 000-00-00" required />
                    </p>
                    <p>
                        <label>Пароль</label><br />
                        <input type="password" className="input_text_teg" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} required /><br />
                        <input type="password" className="input_text_teg" value={this.state.chech_password} onChange={(event) => this.setState({ chech_password: event.target.value })} required /><br />
                        {this.state.password !== this.state.chech_password ? <p className="wrong_password" id="wrong_password" style={{ color: "red" }}>Пароль не совпал</p> : null}
                    </p>
                </div>
                <div className="right_page">
                    <p>
                        <label>Время работы</label>
                        с <input type="time" className="input_text_teg" value={this.state.open_time} onChange={(event) => this.setState({ open_time: event.target.value })} style={{ width: "100px" }} required />
                        до <input type="time" className="input_text_teg" value={this.state.close_time} onChange={(event) => this.setState({ close_time: event.target.value })} style={{ width: "100px" }} required /><br />
                        <label>Время для обслуживания одного клиента</label>
                        <input type="time" className="input_text_teg" value={this.state.step} onChange={(event) => this.setState({ step: event.target.value })} style={{ width: "100px" }} required />
                    </p>
                </div>
            </div>
            <p><input type="submit" value="Регистрация" className="visuale_button submit_button" /></p>
        </form></div>;
    }
}