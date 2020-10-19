import React,{useState} from 'react';
import UnSplash from './api/UnSplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {
  const [images, setImages] = useState([]);

   const onSearchSubmitHandler = term => {
    UnSplash.get('/search/photos', {
    params : {query : term},
   }).then(res =>  {
    console.log(res.data.results)
    setImages(res.data.results)
  })
   
  }
  return (
   <div className = 'ui container' style = {{marginTop : '10px'}}>
    <SearchBar  onSubmit = {onSearchSubmitHandler}/>
    <ImageList images = {images} />
  </div>
  );
};

export default App;