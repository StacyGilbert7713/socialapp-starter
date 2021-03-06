import React from "react";

function Post(props) {

    return (
        <div className="post">
            <div>
                <span>
                    {props.author} posted at {props.date}


                </span>
                {props.children}
                <span>{props.likes}</span>
            </div>
        </div>
    )
}



export default Post;