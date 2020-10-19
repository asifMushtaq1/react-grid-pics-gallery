import React,{useState} from 'react'


const SearchBar = (props) => {
 const [term, setTerm] = useState('');

 const onFormSubmitHandler = event =>{
   event.preventDefault();
   props.onSubmit(term);
 }

  return (
    <div className = 'ui segment'>
      <form 
        onSubmit = {onFormSubmitHandler}className = 'ui form'>
        <div className = 'feild'>
          <label>Image Search</label>
          <input 
            type = 'text' 
            value = {term}
            onChange = {e => setTerm(e.target.value)}/>
        </div>
      </form>
    </div>
  ) 
};
export default SearchBar;