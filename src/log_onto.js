import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./log_onto.css";

export default class LogOnto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            telephone: "",
            password: "",
            navigate: null
        };
    }

    render() {
        const state = this.state;

        const getId = async () => {
            const response = await fetch(`http:/127.0.0.1:3030/log_onto/?telephone=${state.telephone}&password=${state.password}`, {
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
                return data.id;
            } else {
                alert("Ошибка HTTP: " + response.status);
                return null;
            }
        }

        const onSubmit = (event) => {
            event.preventDefault();

            const f = async () => {
                const id = await getId();
                if (id < 0)
                    this.setState({ navigate: `/` });
                else
                    this.setState({ navigate: `/work_page/${id}` });
            }
            f();
        }

        if (state.navigate !== null) {
            return <Navigate to={state.navigate} />;
        }

        return <div className="log-onto"><form className="form" action={`/`} onSubmit={onSubmit}>
            <h1>Форма для входа мастера</h1>
            <span><Link to="/" className="exit">&#10005;</Link></span>
            <p>
                <label>Номер телефона</label><br />
                <input type="tel" className="input_text_teg" value={state.telephone} onChange={(event) => this.setState({ telephone: event.target.value })} placeholder="+375 (00) 000-00-00" required />
            </p>
            <p>
                <label>Пароль</label><br />
                <input type="password" className="input_text_teg" value={state.password} onChange={(event) => this.setState({ password: event.target.value })} required />
            </p>
            <p><input type="submit" value="Войти" className="visuale_button submit_button" /></p>
        </form> </div>;
    }
}