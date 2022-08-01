import React, { useState, useEffect } from 'react';

function CharactersPage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.results);
        console.log('data?: ', data);
        console.log('people: ', people);
      });
  }, []);

  return (
    <div>
      {people.length > 0 && (
        <div className='row'>
          <div className='col-3 charCol'>
            <h3>{people[0].name}</h3>

            <img src='https://i.pinimg.com/originals/b0/9c/f6/b09cf601ffe13b950dbe11617f185200.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[1].name}</h3>

            <img src='https://ae01.alicdn.com/kf/Hd157d3d08ef540338648b71c3833a9d83.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[2].name}</h3>

            <img src='https://w0.peakpx.com/wallpaper/566/503/HD-wallpaper-r2-d2-droid-star-wars.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[3].name}</h3>

            <img src='https://m.media-amazon.com/images/I/41i-0NH0q9L._AC_SY1000_.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[4].name}</h3>

            <img src='https://wikiimg.tojsiabtv.com/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[5].name}</h3>

            <img src='https://i.pinimg.com/originals/32/33/53/323353d1d14345f7bba31a4f500d136b.png' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[6].name}</h3>

            <img src='http://pm1.narvii.com/6168/ff4e27ef435e7191ca5429126c31754115a93776_00.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[7].name}</h3>

            <img src='https://i.pinimg.com/originals/a9/0e/96/a90e96ded61611148369d440c839cc17.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[8].name}</h3>

            <img src='https://i.pinimg.com/originals/33/81/e5/3381e50f4b54339203c97b28c08ccbb8.jpg' />
          </div>
          <div className='col-3 charCol'>
            <h3>{people[9].name}</h3>

            <img src='https://i.pinimg.com/736x/39/82/82/3982821b6106488c735db130751cbf0c.jpg' />
          </div>
        </div>
      )}
    </div>
  );
}

export default CharactersPage;
