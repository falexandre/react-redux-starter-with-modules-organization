import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Topo</h1>
                </header>   
                <aside>
                  <ul>
                    <li><Link to="/" activeClassName="active" >Home</Link></li>
                    <li><Link to="/users" activeClassName="active" >Users</Link></li>
                  </ul>
                </aside>
                    <main>
                    {this.props.children}
                    </main>
                <footer>
                <h2>Rodape</h2>
                </footer>
            </div>
        )
    }
}

export default App;