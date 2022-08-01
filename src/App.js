import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import useNavbar from './Components/Navbar';
import Main from './Components/Main';
import CharactersPage from './Components/CharactersPage';
import Ships from './Components/Ships';

function App() {
  const { render, value } = useNavbar();

  const [renderPage, setRenderPage] = React.useState({
    value: value,
  });

  React.useEffect(() => {
    setRenderPage({
      [value]: value,
    });
  }, [value]);

  return (
    <div className='App'>
      <div className='container-fluid'>
        {render}

        {renderPage.main_page === 'main_page' && <Main />}
        {renderPage.characters === 'characters' && <CharactersPage />}
        {renderPage.ships === 'ships' && <Ships />}
      </div>
    </div>
  );
}

export default App;
