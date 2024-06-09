import React from 'react';
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title'>Encuentra tu libro...</h2><br />
                <p className='header-text fs-18 fw-3'>Enférmense de música, de libros, de lluvia, de otoños, de soledad. De personas cualquiera se muere. -Elena Poe</p>
                <hr /><hr /><hr />
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header