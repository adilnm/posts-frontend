import React from 'react';
import { connect } from 'react-redux';
import newPost from '../actions/newPost'

class PostCreate extends React.Component{
    state = {
        title:'',
        body:'',
        published: flase
      }
   
    render(){
        return(
            <div>PostCreate</div>
        )
    }
}

export default connect(null,{newPost})(PostCreate)