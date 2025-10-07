import Banner from "../SharedSection/Banner/Banner";

const products = [
  {
    id: 1,
    img: "/images/product/p1.jpg",
    title: "Ins Cool Style Ring Plainly Ring Finger Ring Simple Light Luxury High-grade Sense Ring",
    rating: 5,
    sold: "911 Sold",
    price: 57.82,
    country: "CN",
    delivery: "10-12 days",
  },
  {
    id: 2,
    img: "/images/product/p1.jpg",
    title: "High-End Six-Claw Simulated Diamond Ring for Women, Simple and Fashionable Couple Ring",
    rating: 5,
    sold: "2K Sold",
    price: 33.04,
    country: "CN",
    delivery: "10-12 days",
  },
  {
    id: 3,
    img: "/images/product/p1.jpg",
    title: "Cat's eye ring plain ring corrugated ring fashion luxury simple solid closed gold ring",
    rating: 5,
    sold: "2K Sold",
    price: 30.98,
    country: "CN",
    delivery: "10-12 days",
  },
  {
    id: 4,
    img: "https://i.ibb.co/ySfyF2C/ring4.jpg",
    title: "Childlike and Funny Little Monster Ring, Cute and Colorful, Student Jewelry",
    rating: 5,
    sold: "2K Sold",
    price: 15.49,
    country: "CN",
    delivery: "10-12 days",
  },
  {
    id: 5,
    img: "https://i.ibb.co/tK07Pgz/ring5.jpg",
    title: "Super Gentle Camellia Ring Women's Ins Niche Design Cold Style Advanced Openness",
    rating: 5,
    sold: "3K Sold",
    price: 8.26,
    country: "CN",
    delivery: "10-12 days",
  },
  {
    id: 6,
    img: "https://i.ibb.co/1ZpWmV4/ring6.jpg",
    title: "Titanium steel baby's breath star row diamond ring women's fashion jewelry",
    rating: 5,
    sold: "5K Sold",
    price: 41.3,
    country: "CN",
    delivery: "10-12 days",
  },
];

const Home = () => {
  return (
    <div className="">
      <Banner />

      {/* Product Section */}
      <div className="px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">
          Explore our <span className="text-green-600">MoveOn</span> global product hive
        </h2>

        <div className="flex gap-3 mb-6">
          <button className="px-4 py-1 bg-green-100 text-green-700 rounded-md">Fashion</button>
          <button className="px-4 py-1 border border-gray-300 rounded-md">Appliances</button>
          <button className="px-4 py-1 border border-gray-300 rounded-md">Men's Shoes</button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-2"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-44 object-cover rounded-lg mb-2"
              />
              <h3 className="text-sm font-medium text-gray-700 line-clamp-2">{p.title}</h3>
              <div className="flex items-center text-yellow-500 text-xs mt-1">
                {"★".repeat(p.rating)}
                <span className="text-gray-500 ml-2">{p.sold}</span>
              </div>
              <p className="text-green-600 font-semibold mt-1">৳{p.price}</p>
              <p className="text-xs text-gray-500 mt-1">
                🚚 {p.country} to BD: {p.delivery}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
