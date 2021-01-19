import React, { Component } from 'react';
import './style.css';

class index extends Component {
    render() {
        return (
            <div className="headerContainer">
                <div className="headerItem">Tarefa</div>
                <div className="headerItem">Fazendo</div>
                <div className="headerItem">Concluído</div>
            </div>
        );
    }
}

export default index;
