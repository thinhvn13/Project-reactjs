import React from 'react';
import './CommentCard.css';
import Asset from './../../asset/Asset';
const CommentCard=({image, name, comment, position})=>{
return(
    <div className='testimony-wrap'>
        <div style={{backgroundImage: `url(${Asset.listAvatar[image]})`}} className='user-image' >
            <span className="icon-user d-flex justify-content-center align-items-center"> <i className='fa fa-quote-left'></i> </span>
        </div>
        <div className='text-comment'>
            <p className='comment'>{comment}</p>
            <p className='name'>{name}</p>
            <p className='position'>{position}</p>
        </div>
    </div>
    )
}

export default CommentCard;