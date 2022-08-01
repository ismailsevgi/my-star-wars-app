import React, { useState, useEffect } from 'react';

function Ships() {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/starships/')
      .then((res) => res.json())
      .then((data) => setShips(data.results));
  }, []);

  if (ships.length > 0) {
    ships[0]['img'] =
      'https://i.pinimg.com/originals/43/54/d3/4354d36812bdd8049b6e4a0f1a34e3cc.jpg';
    ships[1]['img'] =
      'https://cdn-3d.niceshops.com/upload/image/product/large/default/revell-model-set-imperial-star-destroyer-1-pc-311143-en.jpg';
    ships[2]['img'] =
      'https://i.pinimg.com/originals/3f/b9/4a/3fb94adac2472b5ee47ea84ef6cc4e89.jpg';
    ships[3]['img'] =
      'https://media.printables.com/media/prints/57266/images/571904_4853c69f-fcbc-4308-92b3-4b77fd510a13/thumbs/cover/1200x630/png/large_display_deathstar_57266.png';
    ships[4]['img'] =
      'https://www.herald.wales/wp-content/uploads/2021/03/millenium-falcon-pembroke.jpg';
    ships[5]['img'] =
      'https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C24%2C1536%2C768';
    ships[6]['img'] =
      'https://cdnb.artstation.com/p/assets/images/images/008/858/477/large/michael-long-screenshot000.jpg?1515724383';
    ships[7]['img'] =
      'https://cdnb.artstation.com/p/assets/images/images/008/509/599/large/roman-pelipenko-tie-front-1-2.jpg?1513214074';
    ships[8]['img'] =
      'https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest?cb=20180903230846';
    ships[9]['img'] =
      'https://swrpggm.com/wp-content/uploads/2021/02/GR75_FE.png';
  }

  return (
    <div>
      {ships.length > 0 &&
        ships.map((obj, index) => (
          <div>
            <div key={index} className='ship'>
              <img src={obj.img} />
              <div>
                <h2>Name: {obj.name}</h2>
                <h4>Model: {obj.model}</h4>
                <h4>Length: {obj.length}</h4>
                <h4>Starship Class: {obj.starship_class}</h4>
                <h4>Passangers: {obj.passengers}</h4>
                <h4>Crew: {obj.crew}</h4>
                <h4>Hyperdrive Rating {obj.hyperdrive_rating}</h4>
                <h4>Manufacturer {obj.manufacturer}</h4>
              </div>
            </div>
            <hr></hr>
          </div>
        ))}
    </div>
  );
}

export default Ships;
