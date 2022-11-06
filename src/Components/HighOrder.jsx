import React from 'react'
const movies  = [
    {movieName: 'Taxi Driver',Rating:'8.2'},
    {movieName: 'Raging Bull',Rating:'8.2'},
    {movieName: 'Night And The City',Rating:'7.9'},
    {movieName: 'Scarface',Rating:'8.3'},
    {movieName: 'The Thing',Rating:'8.2'},
    {movieName: 'Casino',Rating:'8.2'},
    {movieName: 'Rear Window',Rating:'8.5'},
    {movieName: 'Psycho',Rating:'8.5'},
    {movieName: 'Dog Day Afternoon',Rating:'8.0'},
    {movieName: 'Sweet Smell Of Success',Rating:'8.0'},
  ]

const high = (WrappedComponent) => {
    class searchFunctionality extends React.Component{
        constructor(props){
            super(props);
            this.state={
                search: ''
            }

        }
        updateSearch = (e) =>{
            this.setState({search:e.target.value})
        }
        filterMovies = () => {
            return movies.filter(movie => movie.movieName.toLowerCase().includes(this.state.search));
          }
          render(){
            const updatedProducts = this.filterMovies();
          return (
            
            <div>
              <h1>Search Movie</h1>
                <input type="text" onChange={this.updateSearch}></input>
                <WrappedComponent movies={updatedProducts} {...this.props}/>
            </div>
          )
    }
}
  return searchFunctionality;
}

export default high;