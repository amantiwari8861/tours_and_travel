import { Link } from "react-router";

const touristPlaces = [
  {
    _id:"1",
    name: "Agra",
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
    tours: 2,
    slug: "agra",
    url: "/destination/agra/",
    price:10000,
    description:"Agra is a city in the Indian state of Uttar Pradesh."
  },
  {
    _id:"2",
    name: "Ranthambore",
    city: "Ranthambore",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
    tours: 2,
    slug: "ranthambore",
    url: "/destination/ranthambore/",
    price:20000,
    description:"Ranthambore is a city in the Indian state of Rajasthan."

  },
  {
    _id:"3",
    name: "Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
    tours: 1,
    slug: "jodhpur",
    url: "/destination/jodhpur/",
    price:30000,
    description:"Jodhpur is a city in the Indian state of Rajasthan."
  },
  {
    _id:"4",
    name: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
    tours: 5,
    slug: "jaipur",
    url: "/destination/jaipur/",  
    price:40000,
    description:"Jaipur is a city in the Indian state of Rajasthan."
  },
  {
    _id:"5",
    name: "Delhi",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
    tours: 1,
    slug: "delhi",
    url: "/destination/delhi/", 
    price:50000,
    description:"Delhi is a city in the Indian state of Delhi."
  },
  {
    _id:"6",
    name: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
    tours: 0,
    slug: "udaipur",
    url: "/destination/udaipur/",
    price:60000,
    description:"Udaipur is a city in the Indian state of Rajasthan."
  },
  {
    _id:"7",
    name: "Desert",
    city: "Desert",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
    tours: 1,
    slug: "rajasthan",
    url: "/destination/rajasthan/",
    price:70000,
    description:"Rajasthan is a city in the Indian state of Rajasthan."
  },
  {
    _id:"8",
    name: "Ajmer",
    city: "Ajmer",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
    tours: 1,
    slug: "ajmer",
    url: "/destination/ajmer/",
    price:80000,
    description:"Ajmer is a city in the Indian state of Rajasthan."
  },
  {
    _id:"9",
    name: "Pushkar",
    city: "Pushkar",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
    tours: 1,
    slug: "pushkar",
    url: "/destination/pushkar/",
    price:90000,
    description:"Pushkar is a city in the Indian state of Rajasthan."
  },
  {
    _id:"10",
    name: "Jaisalmer",
    city: "Jaisalmer",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
    tours: 0,
    slug: "jaisalmer",
    url: "/destination/jaisalmer/",
    price:100000,
    description:"Jaisalmer is a city in the Indian state of Rajasthan."
  },
];

const Collections = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 gap-4 p-6">
      {touristPlaces.map((place, i) => (
        <PlaceCard key={i} place={place} />
      ))}
    </div>
  );
};

export default Collections;

const PlaceCard = ({ place }) => {
  const { name, city, state,country, imageUrl, url,slug } = place;

  return (
    <Link to={`destination/${slug}`}>
    <div className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="glassmorphism absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
      <span className="absolute bottom-0 left-0 text-white p-6 text-xl">
        {name}
        <p>
          {name === city ? state : `${city}, ${state}`}
        </p>
      </span>
    </div>
    </Link>
  );
};
