import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CustomizedNavbar from './components/CustomizedNavbar';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import './App.css';

import * as BooksAPI from './api/BooksAPI';

const AppContext = React.createContext();

class App extends Component {

    state = {
        allBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState(() => ({
                allBooks: books
            }));
        })
    }

    render() {

        const { allBooks } = this.state;

        return (
            <div className="App">

                <CustomizedNavbar />

                <AppContext.Provider value={{
                    allBooks: allBooks
                }}>

                    <Route exact path = "/" render={() => (
                        <MainPage allBooks={allBooks} />
                    )} />

                    <Route exact path = "/search" component={SearchPage} />

                </AppContext.Provider>
            </div>
        );
    }
}

export default App;

export const AppContextConsumer = AppContext.Consumer;
