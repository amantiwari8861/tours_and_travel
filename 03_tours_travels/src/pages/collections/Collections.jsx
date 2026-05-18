const touristPlaces = [
  {
    name: "Agra",
    city: "Agra",
    state: "Uttar Pradesh",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/12529715.jpeg",
    tours: 2,
    slug: "agra",
    url: "/destination/agra/",
  },
  {
    name: "Ranthambore",
    city: "Ranthambore",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/l4huijlgex4.jpg",
    tours: 2,
    slug: "ranthambore",
    url: "/destination/ranthambore/",
  },
  {
    name: "Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    country: "India",
    imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4453955.jpg",
    tours: 1,
    slug: "jodhpur",
    url: "/destination/jodhpur/",
  },
  {
    name: "Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2025/10/27833732.jpeg",
    tours: 5,
    slug: "jaipur",
    url: "/destination/jaipur/",
  },
  {
    name: "Delhi",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    imageUrl: "https://sukhholidays.com/wp-content/uploads/2025/10/4813658.jpg",
    tours: 1,
    slug: "delhi",
    url: "/destination/delhi/",
  },
  {
    name: "Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-01.webp",
    tours: 0,
    slug: "udaipur",
    url: "/destination/udaipur/",
  },
  {
    name: "Desert",
    city: "Desert",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-07.webp",
    tours: 1,
    slug: "rajasthan",
    url: "/destination/rajasthan/",
  },
  {
    name: "Ajmer",
    city: "Ajmer",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-03.webp",
    tours: 1,
    slug: "ajmer",
    url: "/destination/ajmer/",
  },
  {
    name: "Pushkar",
    city: "Pushkar",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-02.webp",
    tours: 1,
    slug: "pushkar",
    url: "/destination/pushkar/",
  },
  {
    name: "Jaisalmer",
    city: "Jaisalmer",
    state: "Rajasthan",
    country: "India",
    imageUrl:
      "https://sukhholidays.com/wp-content/uploads/2024/02/Destination-05.webp",
    tours: 0,
    slug: "jaisalmer",
    url: "/destination/jaisalmer/",
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
  const { name, city, state, country, imageUrl, url } = place;

  return (
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
  );
};
