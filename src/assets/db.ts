export default {
  type: 'FeatureCollection',
  features: [
    {
      id: 1,
      type: 'Feature',
      properties: {
        description: 'Place',
        icon: 'theatre-15'
      },
      state: {
        name: 'Kurenivskiy Market',
        description: 'Unfussy retail compound selling animals, fish & pet accessories, plus tools & homewares',
        images: [ 'https://kyivpastfuture.com.ua/wp-content/uploads/2021/01/kurenevskyj-zhd-most.jpg', 'http://my-obolon.kiev.ua/images/novosti/2019/JD-most-na-Kurenevke.jpg' ],
        address: 'Petropavlivska Square, 1, Kyiv, 04073',
        email: 'kurenivskiy@gmail.com',
        web: 'www.kurenivskiy.com',
        phone: '+380441234578',
        rate: 4,
      },
      geometry: {
        type: 'Point',
        coordinates: [30.462, 50.498 ]
      },
    },
    {
      id: 2,
      type: 'Feature',
      properties: {
        description: 'Mad Men Season Five Finale Watch Party',
        icon: 'theatre-15'
      },
      geometry: {
        type: 'Point',
        coordinates: [30.434, 50.404]
      },
      state: {
        name: 'Kyiv International Airport Zhulany (Sikorsky)',
        description: 'International airport',
        images: [ 'https://plaso.pro/gimgs/137/680142.jpg', 'https://static.routesonline.com/images/cached/photograph-3652-scaled-620x0.jpg' ],
        address: 'Vulytsya Medova, 2, Kyiv, 03048',
        email: 'kurenivskiy@gmail.com',
        web: 'www.zhulany.com',
        phone: '+380441004555',
        rate: 5,
      },
    },
    {
      id: 3,
      type: 'Feature',
      properties: {
        description: 'Big Backyard Beach Bash and Wine Fest EatBar (2761 Washington Boulevard Arlington VA) is throwing',
        icon: 'bar-15'
      },
      geometry: {
        type: 'Point',
        coordinates: [30.563, 50.426 ]
      }
    },
    {
      id: 4,
      type: 'Feature',
      properties: {
        description: 'Ballston Arts & Crafts Market Ballston Arts & Crafts Markettes this summer. Nearly 35 artists and crafters',
        icon: 'art-gallery-15'
      },
      geometry: {
        type: 'Point',
        coordinates: [30.522, 50.450 ]
      }
    },
    {
      id: 5,
      type: 'Feature',
      properties: {
        description: 'Seersucker Bike Ride and Social. Feeling dandy? Get fancy, grab your bike, and take part in this year\'s. After the ride enjoy a lawn party at Hillwood with jazz, cocktails',
        icon: 'bicycle-15'
      },
      geometry: {
        type: 'Point',
        coordinates: [30.560, 50.402 ]
      }
    }
  ]
};
