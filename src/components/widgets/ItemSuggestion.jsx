import React from "react";

const SeasonalOffers = () => {
  const mockProducts = [
    {
      id: 1,
      name: "ตรวจโรคติดต่อทางเพศสัมพันธ์",
      img: "https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png",
      price: "2,820",
      oldPrice: "3,200",
      rating: 5,
      tag: "ขายดี",
    },
    {
      id: 2,
      name: "โปร CO2 Laser",
      img: "https://mersiclinic-thailand.com/wp-content/uploads/2024/07/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-Q-Switch.jpg",
      price: "2,199",
      oldPrice: "2,500",
      rating: 4,
      tag: "ลดราคา",
    },
    {
      id: 3,
      name: "กายภาพบำบัด",
      img: "https://image.makewebcdn.com/makeweb/m_1920x0/gR8C8Iimd/DefaultData/358691738_668603541975095_3511059683635981845_n.jpg",
      price: "900",
      oldPrice: "1,200",
      rating: 4,
      tag: "ใหม่!",
    },
    {
      id: 4,
      name: "ตรวจสุขภาพหัวใจ",
      img: "https://api.ruamjairak.com/media/2023/12/27/_eqqr1zO3QfJGlcCOE6jK6HfKR8sxx.jpg",
      price: "1,999",
      oldPrice: "2,500",
      rating: 5,
      tag: "แนะนำ",
    },
    {
      id: 5,
      name: "ตรวจโรคติดต่อทางเพศสัมพันธ์",
      img: "https://pribta-tangerine.com/wp-content/uploads/2024/08/Pro1500.png",
      price: "2,820",
      oldPrice: "3,200",
      rating: 5,
      tag: "ขายดี",
    },
    {
      id: 6,
      name: "โปร CO2 Laser",
      img: "https://mersiclinic-thailand.com/wp-content/uploads/2024/07/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%82%E0%B8%A1%E0%B8%8A%E0%B8%B1%E0%B9%88%E0%B8%99-Q-Switch.jpg",
      price: "2,199",
      oldPrice: "2,500",
      rating: 4,
      tag: "ลดราคา",
    },
    {
      id: 7,
      name: "กายภาพบำบัด",
      img: "https://image.makewebcdn.com/makeweb/m_1920x0/gR8C8Iimd/DefaultData/358691738_668603541975095_3511059683635981845_n.jpg",
      price: "900",
      oldPrice: "1,200",
      rating: 4,
      tag: "ใหม่!",
    },
    {
      id: 8,
      name: "ตรวจสุขภาพหัวใจ",
      img: "https://api.ruamjairak.com/media/2023/12/27/_eqqr1zO3QfJGlcCOE6jK6HfKR8sxx.jpg",
      price: "1,999",
      oldPrice: "2,500",
      rating: 5,
      tag: "แนะนำ",
    },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "คุณมะลิ พ.",
      img: "https://i.pinimg.com/736x/e0/d6/70/e0d670d16bbad299ec0fd467c031fe7e.jpg",
      review: "บริการดีมากค่ะ คุณหมอให้คำแนะนำอย่างละเอียด พนักงานก็เป็นกันเอง ราคาก็เหมาะสมมาก",
      rating: 5,
    },
    {
      id: 2,
      name: "คุณสมชาย ก.",
      img: "https://i.pinimg.com/736x/91/24/74/9124747c62bcc94451d40bb08708aaf6.jpg",
      review: "ซื้อคอร์สดูแลผิวผ่านเว็บไซต์นี้ ได้ผลลัพธ์ดีเกินคาดค่ะ ราคาก็ถูกกว่าในคลินิกทั่วไป",
      rating: 5,
    },
    {
      id: 3,
      name: "คุณวรรณา ว.",
      img: "https://i.pinimg.com/736x/55/5e/c5/555ec520b022cb78b02597bf08c420bb.jpg",
      review: "โปรโมชั่นเยอะมากและราคาถูกกว่าเคยเจอ ประทับใจตั้งแต่ใช้ครั้งแรกเลยค่ะ",
      rating: 5,
    },
    {
      id: 4,
      name: "คุณมะลิ พ.",
      img: "https://i.pinimg.com/736x/e0/d6/70/e0d670d16bbad299ec0fd467c031fe7e.jpg",
      review: "บริการดีมากค่ะ คุณหมอให้คำแนะนำอย่างละเอียด พนักงานก็เป็นกันเอง ราคาก็เหมาะสมมาก",
      rating: 5,
    },
    {
      id: 5,
      name: "คุณสมชาย ก.",
      img: "https://i.pinimg.com/736x/91/24/74/9124747c62bcc94451d40bb08708aaf6.jpg",
      review: "ซื้อคอร์สดูแลผิวผ่านเว็บไซต์นี้ ได้ผลลัพธ์ดีเกินคาดค่ะ ราคาก็ถูกกว่าในคลินิกทั่วไป",
      rating: 5,
    },
    {
      id: 6,
      name: "คุณวรรณา ว.",
      img: "https://i.pinimg.com/736x/55/5e/c5/555ec520b022cb78b02597bf08c420bb.jpg",
      review: "โปรโมชั่นเยอะมากและราคาถูกกว่าเคยเจอ ประทับใจตั้งแต่ใช้ครั้งแรกเลยค่ะ",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white py-8">
      {/* Seasonal Offers Section */}
      <div className="px-20">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          ข้อเสนอพิเศษตามฤดูกาล
        </h2>
        <div className="grid grid-cols- sm:grid-cols-10 lg:grid-cols-5 gap-5">
          {mockProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden text-center relative group transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                {product.tag}
              </div>
              <img
                src={product.img}
                alt={product.name}
                className="w-full aspect-square object-contain bg-gray-100 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl text-blue-600 font-bold">
                  ฿{product.price}{" "}
                  <span className="text-gray-400 text-base line-through">
                    ฿{product.oldPrice}
                  </span>
                </p>
                <div className="text-yellow-500 text-sm my-2">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </div>
                <button className="mt-4 px-5 py-2 rounded-full bg-teal-500 text-white text-sm font-medium hover:bg-teal-800 transition">
                  ดูโปรโมชัน →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          เสียงตอบรับจากลูกค้าของเรา
        </h2>
        <div className="flex gap-6 max-w-5xl mx-auto animate-scroll overflow-hidden hover:animate-none">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="flex-none bg-white border border-gray-200 rounded-lg shadow-lg p-6 text-center w-64"
            >
              <img
                src={review.img}
                alt={review.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-medium text-gray-700">{review.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{review.review}</p>
              <div className="text-yellow-500 text-lg mt-3">
                {"★".repeat(review.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeasonalOffers;
