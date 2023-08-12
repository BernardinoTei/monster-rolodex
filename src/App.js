import { useEffect, useState } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render')

  useEffect(() => {
    console.log('fired')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users)
        );
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter(
      monster => monster.name.toLocaleLowerCase().includes(searchField))
      setFilteredMonsters(newfilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }



  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters...' className='monsters-search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )

}



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }

//   }

//   componentDidMount() {

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users =>
    //     this.setState(() => {
    //       return { monsters: users }
    //     }
    //     )
    //   );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(
//       () => {
//         return { searchField }
//       }
//     )
//   }


//   render() {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter(
//       monster => monster.name.toLocaleLowerCase().includes(searchField))

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search monsters...' className='monsters-search-box' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }


export default App;
