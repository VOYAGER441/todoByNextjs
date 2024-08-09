import React from "react";

// Define the type for props
interface PageProps {
    params: {
      name: string;
    };
  }
  

const page:React.FC<PageProps> = ({ params }) => {

    return (<>
        <div>
            <h1>nice to meet you!! {params.name}</h1>
        </div>
    </>);
}

export default page