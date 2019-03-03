import React, { Component } from 'react';
import DeleteNoteButton from './DeleteNoteButton';


class DisplayCharNotes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        try {
            return(
                <dl className="noteDisplay">
                    {this.props.notes.map(item =>(
                        <ul className="displayIndividualNote">
                            <p>Against: {item.vsCharacter}</p>
                            <p>{item.contents}</p>
                            <DeleteNoteButton id={item.noteID}/>
                        </ul>    
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