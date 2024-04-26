import { useEffect, useState } from "react";
import React, {createContext} from "react";



export const PostContext = createContext(null);

const PostContextProvider = (props) => {

    const[posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4001/allposts')
        .then((res)=>res.json())
        .then((data) => setPosts(data))
    },[])

    const contextValue = {posts};

    return(
        <PostContext.Provider value={contextValue}>
            {props.children}
        </PostContext.Provider>

    )
}

export default PostContextProvider;