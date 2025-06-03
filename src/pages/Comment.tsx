import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Button from '../components/ui/Button'


const initialState = [
  {id:'1',name:'Anna',message:'Love the Simple and intuitive design of your train booking app', img: 'https://i.pravatar.cc/50?img=1'},
  {id:'2',name:'Geo',message:'Its Looking great!.. the book now button stands out nicely', img: 'https://i.pravatar.cc/50?img=2'}
];



function reducer(state, action) {
  switch(action.type) {
    case 'ADD':
      return [...state, {id:Date.now().toString(), ...action.payload}];
    case 'REMOVE':
      return state.filter(comment => comment.id !== action.id);
    case 'SET':
      const existingIds = new Set(state.map(c => c.id));
      const newComments = action.payload.filter(c => !existingIds.has(c.id));
      return [...state, ...newComments];
    default:
      return state;
  }
}



const Comment = () => {
  const [comment, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments', {
          params: { postId: 1 }
        });

        const formatted = res.data.map(item => ({
          id: item.id.toString(),
          name: item.name,
          message: item.body,
          img: `https://i.pravatar.cc/50?img=${item.id % 70 + 1}`
        }));
        dispatch({type: 'SET', payload: formatted});
      } catch (error) {
        alert('Error fetching comments: ' + (error.message || 'Unknown error'));
      }
    }
    fetchComments();
  }, []);





  const addComment = () => {
    const name = prompt("Your name");
    const message = prompt("Your comment");
    if(name && message){
      const randomId = Math.floor(Math.random() * 70) + 1;
      dispatch({type:'ADD', payload:{name, message, img: `https://i.pravatar.cc/50?img=${randomId}`}});
    } else {
      alert("Both name and comment are required!");
    }
  }


  const removeComment = (id) => dispatch({type:'REMOVE', id});

  return (
    <Container>
      <Title>Mark your Comment</Title>
      {comment.map(c => (
        <Card key={c.id}>
          <UserImg src={c.img} alt={c.name} />
          <CommentContent>
            <h2>{c.name}</h2>
            <p>{c.message}</p>
          </CommentContent>
          <Button onClick={() => removeComment(c.id)} label="Delete" />
        </Card>
      ))}
      <Button onClick={addComment} label="Add Comment" />
    </Container>
  )
}

export default Comment

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgb(9, 104, 255);
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  background: rgba(59, 137, 255, 0.71);

  &:hover {
    border: 1px solid rgb(8, 41, 255);
    transform: scale(1.01);
  }
`;
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid white;
`;
const CommentContent = styled.div`
  flex: 1;
  h2 {
    margin: 0 0 5px 0;
  }
  p {
    margin: 0;
  }
`;
const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 1rem;
`;
