import React from 'react' 


class ChosenKey extends React.Component {
    render(){
    var keys = ["Cat", "Pizza", "Car"]
    var randKey = keys[(Math.floor(Math.random() * keys.length))]
        return(
            <p>{randKey}</p>
        )
    }
}

export default ChosenKey