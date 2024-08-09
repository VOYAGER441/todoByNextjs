import React from "react";

interface Post{
    params:{
        post:string;
    }
}

const page:React.FC<Post> = ({params}) => {

    return (<>
<div>
    <h1>Post: {params.post}</h1>
</div>
    </>);
}

export default page