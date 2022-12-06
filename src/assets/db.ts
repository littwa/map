export default {
  type: 'FeatureCollection',
  features: [
    {
      id: 1,
      type: 'Feature',
      properties: {
        description: 'Place',
        icon: 'theatre-15',
        state: {
          name: 'Kurenivskiy Market',
          description: 'Unfussy retail compound selling',
          images: [ 'https://kyivpastfuture.com.ua/wp-content/uploads/2021/01/kurenevskyj-zhd-most.jpg', 'http://my-obolon.kiev.ua/images/novosti/2019/JD-most-na-Kurenevke.jpg' ],
          address: 'Petropavlivska Square, 1, Kyiv, 04073',
          email: 'kurenivskiy@gmail.com',
          web: 'www.kurenivskiy.com',
          phone: '+380441234578',
          rate: 4,
        },
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
        icon: 'theatre-15',
        state: {
          name: 'Airport Zhulany',
          description: 'International airport',
          images: [ 'https://plaso.pro/gimgs/137/680142.jpg', 'https://static.routesonline.com/images/cached/photograph-3652-scaled-620x0.jpg' ],
          address: 'Vulytsya Medova, 2, Kyiv, 03048',
          email: 'kurenivskiy@gmail.com',
          web: 'www.zhulany.com',
          phone: '+380441004555',
          rate: 5,
        },
      },
      geometry: {
        type: 'Point',
        coordinates: [30.434, 50.404],
      },
    },
    {
      id: 3,
      type: 'Feature',
      properties: {
        description: 'The stainless steel statue stands 62 m (203 ft) tall upon the museum main building with the overall structure measuring 102 m (335 ft) including its base and weighing 560 tonnes',
        icon: 'bar-15',
        state: {
          name: 'Motherland Monument',
          description: 'Monument',
          images: [ 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Motherland.jpg', 'https://vesti.ua/wp-content/uploads/2021/11/MHthYOtb9UojD_HZ3YRY_G3c4sJS7dLA.jpg' ],
          address: 'Lavrska street, 27, Kiev, 02000',
          email: 'motherland@gmail.com',
          web: 'www.motherland.com',
          phone: '+380441334555',
          rate: 5,
        },
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
        description: 'Since the start of Ukraine\'s independence movement in 1990, the square has been the traditional place for political rallies',
        icon: 'art-gallery-15',
        state: {
          name: 'Maidan Nezalezhnosti',
          description: 'Maidan',
          images: [ 'https://kor.ill.in.ua/m/1200x0/2182458.jpg', 'https://st.depositphotos.com/1876851/1576/i/600/depositphotos_15763565-stock-photo-independence-square-with-monument-to.jpg' ],
          address: 'Maidan Nezalezhnosti, Kiev, 02000',
          email: 'maidan@gmail.com',
          web: 'www.maida.com',
          phone: '+380441334111',
          rate: 5,
        },
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
        icon: 'bicycle-15',
        state: {
          name: 'Vydubychi',
          description: 'Vydubychi-station',
          images: [ 'https://bigkyiv.com.ua/wp-content/uploads/2019/06/1_vydubichi1-825x460.jpg', 'https://cfts.org.ua/imglib/_newimage/news/116594/1068.jpg' ],
          address: 'Vydubychi, Kiev, 02000',
          email: 'vydubychi@gmail.com',
          web: 'www.vydubychi.com',
          phone: '+380440004111',
          rate: 4,
        },
      },
      geometry: {
        type: 'Point',
        coordinates: [30.560, 50.402 ]
      }
    }
  ]
};
