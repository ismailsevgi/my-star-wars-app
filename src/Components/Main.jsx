import React from 'react';

function Main() {
  const [randomNumber, setRandomNumber] = React.useState(
    Math.floor(Math.random() * 10)
  );
  const [myData, setMyData] = React.useState([]);
  const [imgElement, setImgElement] = React.useState('');

  React.useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data) => {
        setMyData(data.results);
        setImgElement(chooseImg(myData[randomNumber].name));
      });
  }, [randomNumber]);

  function handleClick() {
    setRandomNumber(Math.floor(Math.random() * 10));
    setImgElement(chooseImg(myData[randomNumber].name));
  }

  function chooseImg(charName) {
    switch (charName) {
      case 'Luke Skywalker':
        return 'https://i.pinimg.com/originals/b0/9c/f6/b09cf601ffe13b950dbe11617f185200.jpg';
        break;
      case 'C-3PO':
        return 'https://ae01.alicdn.com/kf/Hd157d3d08ef540338648b71c3833a9d83.jpg';
        break;
      case 'R2-D2':
        return 'https://w0.peakpx.com/wallpaper/566/503/HD-wallpaper-r2-d2-droid-star-wars.jpg';
        break;
      case 'Darth Vader':
        return 'https://m.media-amazon.com/images/I/41i-0NH0q9L._AC_SY1000_.jpg';
        break;
      case 'Leia Organa':
        return 'https://wikiimg.tojsiabtv.com/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg';
        break;
      case 'Owen Lars':
        return 'https://i.pinimg.com/originals/32/33/53/323353d1d14345f7bba31a4f500d136b.png';
        break;
      case 'Beru Whitesun lars':
        return 'http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg';
        break;
      case 'R5-D4':
        return 'https://i.pinimg.com/originals/a9/0e/96/a90e96ded61611148369d440c839cc17.jpg';
        break;
      case 'Biggs Darklighter':
        return 'https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406';
        break;
      case 'Obi-Wan Kenobi':
        return 'https://i.pinimg.com/736x/39/82/82/3982821b6106488c735db130751cbf0c.jpg';
        break;
      default:
        break;
    }
  }

  return (
    <div className='row main'>
      <div className='col-4 offset-1'>
        <img src={myData.length > 0 && imgElement} />
      </div>
      <div className='col-7 list'>
        <h1>Character's Info</h1>
        {myData.length > 0 && (
          <ul>
            <li>Name: {myData[randomNumber].name}</li>
            <li>Birth Year: {myData[randomNumber].birth_year}</li>
            <li>Gender: {myData[randomNumber].gender}</li>
            <li>Eye Color: {myData[randomNumber].eye_color}</li>
            <li>Height: {myData[randomNumber].height}</li>
            <li>Homeworld: {myData[randomNumber].homeworld}</li>
            <li>Mass: {myData[randomNumber].mass}</li>
            <li>Hair Color: {myData[randomNumber].hair_color}</li>
          </ul>
        )}

        <button onClick={handleClick}>Change</button>
      </div>
    </div>
  );
}

export default Main;
