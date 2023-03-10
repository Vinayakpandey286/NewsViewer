import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  pageSize=9;
  apiKey=process.env.REACT_APP_NEWS_API;

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={1}
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general"pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business"pageSize={this.pageSize} country="in" category="business"/>}/>
        <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment"pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        <Route exact path="/Health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health"pageSize={this.pageSize} country="in" category="health"/>}/>
        <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science"pageSize={this.pageSize} country="in" category="science"/>}/>
        <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports"pageSize={this.pageSize} country="in" category="sports"/>}/>
        <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology"pageSize={this.pageSize} country="in" category="technology"/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

