import React from 'react';
import Pic from '../../assets/pict.jpeg'

function Blog(props) {
    return (
        <div>

            <div style={{margin:'auto',marginTop:'24px',width:'20em'}} className="img">
                <img width={'100%'} src={Pic} alt="" />
            </div>
            BLOG COMING SOON
        </div>
    );
}

export default Blog;