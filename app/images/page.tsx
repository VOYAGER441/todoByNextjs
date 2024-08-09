import React from "react";
import images from '../../assets/images.jpeg'
import Image from 'next/image';

const page = () => {

    return (<>
        {/* <img src=""></img> */}

        <div>

            show the image
            <Image src={images} alt="winter" /> 

        </div>
    </>);
}

export default page;