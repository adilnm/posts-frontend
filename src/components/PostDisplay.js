import React from 'react'
import { connect } from "react-redux";

class PostDisplay extends React.Component{
    render(){
        return(
            <div>
                PostDisplay
            </div>
        )
    }
}

const mstp=state=>{
    return{
        posts:state.posts
    }
}

export default  connect(mstp)(PostDisplay)