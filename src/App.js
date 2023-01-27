
import { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField:''
   
    };

  }

  componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
         .then((response)=> response.json())
         .then((users)=> this.setState(
          ()=> {return {monsters:users}},
         )
         )
  }

   onSearchChange=(event)=> {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();


    this.setState(()=>{
      return { searchField }
    });
  }

  render(){

    const { monsters,searchField }= this.state;
    const { onSearchChange } =this;


    const filterMonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
   });



  return (
    <div className="App"> 
    <h1 className='app-title'>Monsters-Book</h1>
    <SearchBox onChangeHandler={onSearchChange} placeholder="search-here" className="search-box" />
    <CardList monsters={filterMonsters}/>
    </div>
  );
  }
}
 
export default App;
