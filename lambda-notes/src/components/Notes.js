import React, { Component } from 'react';
import Styled from 'styled-components'
import {Heading} from './../styles/styles';
import {data} from './../data';
import { Link, Route} from 'react-router-dom';
import Note from './Note'
import axios from 'axios';
import { getNotes } from './../actions';
import { connect } from 'react-redux';


const Container = Styled.div`
  display: flex;
`;
const NotesContainer = Styled.div`
  display: block;
  width: 100%;
  padding: 70px 30px;
  background: #F3F3F3;
  
`;

const NotesList = Styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

const NoteContainer = Styled.div`
    display: flex;
    flex-direction: column;          
    padding: 10px;
    width: 180px;
    height: 180px;
    border: 1px solid #979797;
    background: #FFFFFF;
    margin-bottom: 20px;
`;

const NoteHeading = Styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 1px solid #979797;
    padding-bottom: 5px;
    text-decoration: none;
`;

const Body = Styled.p`
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 14px;
    overflow: hidden;
    
`;


class Notes extends Component {
  constructor() {
    super();
    this.state = {
        notes: []      
    }
  }


  componentDidMount() {
    this.props.getNotes();
    console.log(this.props.notes);
    
  }
  
  render() {
    return (
      <Container>

      <NotesContainer>
        <Heading>Your notes:</Heading>
        <NotesList>
          {this.props.notes.map(note => {
            return <NoteContainer key={note._id} style={{overflow: 'hidden'}}>
         <Link to={`/note/${note._id}`} style={{textDecoration: 'none', color: '#000000'}} > 
           <NoteHeading>{note.title}</NoteHeading>
           <Body>{note.textBody} </Body></Link>
            </NoteContainer>
          })}
      </NotesList>
      </NotesContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
  }
}

const mapActionsToProps = {
  getNotes: getNotes
}
export default connect( mapStateToProps, mapActionsToProps)(Notes);

/*      */