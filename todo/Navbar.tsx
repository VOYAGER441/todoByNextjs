import React from "react";

const Navbar=()=>{

    return(<>
   <div style={{ 
            display: 'flex', 
            padding: '12px 0', 
            flexWrap: 'wrap', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            backgroundColor: '#f8f9fa' 
        }}>
            <h1 style={{ fontSize: '1.125rem', fontWeight: '600' }}>TO-DO-APP</h1>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ margin: '0 15px', cursor: 'pointer' }}>Home</li>
                <li style={{ margin: '0 15px', cursor: 'pointer' }}>Products</li>
                <li style={{ margin: '0 15px', cursor: 'pointer' }}>About</li>
                <li style={{ margin: '0 15px', cursor: 'pointer' }}>Contact</li>
            </ul>
        </div>
    </>);
}

export default Navbar