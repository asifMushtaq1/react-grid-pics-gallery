import React from 'react';
import classes from './ImageList.css'
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const Images = props.images.map( image => {
    return <ImageCard key = {image.id}  image = {image} />
  })
  return <div className = {classes.imagelist}>{Images}</div>
  
};
export default ImageList;
