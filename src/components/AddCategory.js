import React , {useState}from 'react';
import  PropTypes  from "prop-types";

export const AddCategory = ( {setCategories} ) => {

    const [imputValue, setimputValue] = useState('');

    const handleInputChange = (e)=>{
        setimputValue(e.target.value);
    };

    const hadleSubmit = (e) =>{
        e.preventDefault();
        setCategories(cats =>[  imputValue, ...cats ]);
    }

    return (
        <form onSubmit = { hadleSubmit}> 
            {/* <p> { imputValue } </p> */}
            <input 
                type="text"
                placeholder="Buscar gif"
                value= {imputValue}
                onChange = {handleInputChange}
                className="form-control form-control-sm"
            />
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
