import React, { Component } from 'react';


class DisplayCharNotes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props.notes);
        try {
            return(
                <dl>
                    {this.props.notes.map(item =>(
                        <React.Fragment key={item.id}>
                            <dt>Against: {item.vsCharacter}</dt>
                            <dt>{item.contents}</dt>
                        </React.Fragment>    
                    ))}
                </dl>
            );
        } catch (error) {
            return(
                <p>Please enter letters</p>
            )
        }
        
    }
}
export default DisplayCharNotes;