import * as React from 'react'


class fillerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    fillerFunction(num1, num2) {
        return (num1 / num2)
    }

    render(){
        return(
             <Text>Hey!</Text>
        )
    }
}

export default fillerComponent 