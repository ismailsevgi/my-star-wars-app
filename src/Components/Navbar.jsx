import React from 'react';

function useNavbar() {
  const [value, setValue] = React.useState('main_page');

  function handleClick(event) {
    if (event.target.name === 'main') {
      setValue('main_page');
    } else if (event.target.name === 'characters') {
      setValue('characters');
    } else {
      setValue('ships');
    }
  }

  return {
    value,
    render: (
      <div className='row navbar'>
        <h1 className='logo'>STAR WARS</h1>
        <hr></hr>
        <ul className='row'>
          <li className='col-sm-3 offset-sm-2 '>
            <button name='main' onClick={handleClick}>
              MAIN PAGE
            </button>
          </li>

          <li className='col-sm-3'>
            <button name='characters' onClick={handleClick}>
              CHARACTERS
            </button>
          </li>
          <li className='col-sm-3'>
            <button name='ships' onClick={handleClick}>
              SHIPS
            </button>
          </li>
        </ul>
        <hr></hr>
      </div>
    ),
  };
}

export default useNavbar;
