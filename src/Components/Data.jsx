
import React from 'react';
import high from './HighOrder';

class movie extends React.Component{
    render() {
        return(
            <div>
                {
                    this.props.movies.map((item,index) => {
                        return (
                          
                            <p className='listings' key={index}>{item.movieName}, Rating: {item.Rating}</p>
                          
                        )
                    })
                }
            </div>
        )
    }
}

const EnhancedComponent = high(movie)


export default EnhancedComponent