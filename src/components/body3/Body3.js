import React from 'react';
import './Body3.css';

const Body3 = () => {
  return (
    <div className='body3'>
      <div className="body3-left">
        <img src="./img/support.png" alt="" />
      </div>
      <div className="body3-right">
        <div className="details">
          <style>
            {`
              summary::before {
                content: '+';
                margin-right: 0.5em;
              }

              details[open] summary::before {
                content: 'x';
              }
              summary::-webkit-details-marker {
                display: none;
              }
              summary {
                list-style-type: none;
              }
            `}
          </style>
          <details>
            <summary>What sould i do on my first trip to Rome?</summary>
            <p>Rome, the Eternal City, stands as a beacon of history, culture, and architectural marvels. From the iconic Colosseum to the majestic Vatican City, Rome's rich tapestry of ancient ruins, Renaissance art, and culinary delights captivates visitors from around the globe. It's a city where every street corner tells a story, where the past seamlessly intertwines with the present, making it a timeless destination for travelers seeking to immerse themselves in the splendor of Italy's capital.</p>
          </details>
          <details>
            <summary>What are some hidden gems to see in Rome?</summary>
            <p>Rome is packed with hidden gems. If you love art, dont't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well work a quick visit. If you love the ancient stuff , dont't miss the Domus Romana at Palazzo Valentii, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and abiance.</p>
          </details>
          <details>
            <summary>How much time should i spend in Rome?</summary>
            <p>Rome is packed with hidden gems. If you love art, dont't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well work a quick visit. If you love the ancient stuff , dont't miss the Domus Romana at Palazzo Valentii, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and abiance.</p>
          </details>
          <details>
          <details>
            <summary>What foodis Rome known for?</summary>
            <p>Rome is packed with hidden gems. If you love art, dont't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well work a quick visit. If you love the ancient stuff , dont't miss the Domus Romana at Palazzo Valentii, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and abiance.</p>
          </details>
            <summary>What is the best way to get arround Rome?</summary>
            <p>Rome is packed with hidden gems. If you love art, dont't miss the Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free museum and well work a quick visit. If you love the ancient stuff , dont't miss the Domus Romana at Palazzo Valentii, the Domus Aurea, and the Baths of Caracalla. For even more hidden gems, take a tour of Trastevere, a fascinating neighborhood full of history and abiance</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Body3;
