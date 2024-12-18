import React from 'react';

const offersData = [
  {
    imgSrc: "https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png",
    title: "ตรวจโรคติดต่อทางเพศสัมพันธ์",
    price: "2,820",
    oldPrice: "3,200",
    rating: "★★★★★",
    link: "#"
  },
  {
    imgSrc: "https://mersiclinic-thailand.com/wp-content/uploads/2024/07/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-Q-Switch.jpg",
    title: "โปร CO2 Laser",
    price: "2,199",
    oldPrice: "2,500",
    rating: "★★★★☆",
    link: "#"
  },
  {
    imgSrc: "https://image.makewebcdn.com/makeweb/m_1920x0/gR8C8Iimd/DefaultData/358691738_668603541975095_3511059683635981845_n.jpg",
    title: "กายภาพบำบัด",
    price: "900",
    oldPrice: "1,200",
    rating: "★★★★☆",
    link: "#"
  },
  {
    imgSrc: "https://api.ruamjairak.com/media/2023/12/27/_eqqr1zO3QfJGlcCOE6jK6HfKR8sxx.jpg",
    title: "ตรวจสุขภาพหัวใจ",
    price: "1,999",
    oldPrice: "2,500",
    rating: "★★★★★",
    link: "#"
  }
];

const OfferCard = ({ imgSrc, title, price, oldPrice, rating, link }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto transform transition-transform hover:-translate-y-1 hover:shadow-lg">
    <img src={imgSrc} alt={title} className="w-full h-64 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <div className="text-blue-600 font-bold text-lg">{price} <span className="line-through text-gray-500 text-sm">{oldPrice}</span></div>
      <div className="text-yellow-500 text-sm">{rating}</div>
      <a
        href={link}
        className="inline-block bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-teal-600 transition"
      >
        กดดูโปร →
      </a>
    </div>
  </div>
);

const ItemSuggestion = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Section Header */}
      <h2 className="text-2xl font-bold text-center mb-8">ข้อเสนอพิเศษตามฤดูกาล</h2>

      {/* Offers Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {offersData.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default ItemSuggestion;
