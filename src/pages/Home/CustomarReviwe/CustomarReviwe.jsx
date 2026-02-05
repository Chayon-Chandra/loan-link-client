import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CustomarReviwe = () => {
  return (
    <div className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-slate-500">
          Trusted by thousands of happy customers
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        modules={[Pagination,  Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-slate-50  min-w-full px-4">
            <div className=" rounded-2xl p-8 shadow">
              <p className="text-slate-600 italic text-center">
                “The loan process was extremely fast and simple. I received the
                money within 24 hours.”
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=1"
                  className="w-14 h-14 rounded-full"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">Rahim Ahmed</h4>
                  <p className="text-sm text-slate-500">Small Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-w-full px-4">
            <div className="bg-slate-50 rounded-2xl p-8 shadow">
              <p className="text-slate-600 italic text-center">
                “Very transparent and trustworthy service. Customer support was
                really helpful.”
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=2"
                  className="w-14 h-14 rounded-full"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">Nusrat Jahan</h4>
                  <p className="text-sm text-slate-500">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="min-w-full px-4">
            <div className="bg-slate-50 rounded-2xl p-8 shadow">
              <p className="text-slate-600 italic text-center">
                “Best microloan platform I’ve used. Approval was quick and
                hassle-free.”
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src="https://i.pravatar.cc/60?img=3"
                  className="w-14 h-14 rounded-full"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800">Imran Khan</h4>
                  <p className="text-sm text-slate-500">Shop Owner</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CustomarReviwe;
