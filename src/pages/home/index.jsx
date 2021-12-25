import React from "react";
import ThumbnailSmall from "../../components/UI/thumbnail/thumbnail-small";
import HomeHeader from "../../layouts/header/HomeHeader";
import Main from "../../layouts/main";
import menu1 from "../../assets/images/menu1.webp";
import menu3 from "../../assets/images/menu3.jpg";
const Home = () => {
  return (
    <>
      <HomeHeader />
      <Main>
        <section className="mt-8">
          {/* Lộ trình tập luyện - start*/}
          <div className="mb-16">
            <h3 className="text-4xl text-gray-900 font-bold my-4">
              Lộ trình tập luyện
            </h3>
            <div className="h-48 w-full rounded-2xl overflow-hidden align-middle flex items-center shadow-md">
              <img src={menu1} alt="" />
            </div>
          </div>
          {/* Lộ trình tập luyện - end*/}

          {/* Bài tập hôm nay - start*/}
          <div className="mb-16">
            <h3 className="text-4xl text-gray-900 font-bold my-4">
              Bài tập hôm nay
            </h3>
            <div className="flex justify-between">
              <ThumbnailSmall />
              <ThumbnailSmall hasTrainer />
              <ThumbnailSmall />
            </div>
          </div>
          {/* Bài tập hôm nay  - end*/}

          {/* Bữa ăn hôm nay- start*/}
          <div className="">
            <h3 className="text-4xl text-gray-900 font-bold my-4">
              Bữa ăn hôm nay
            </h3>
            <div className="flex justify-between">
              <ThumbnailSmall src={menu3} />
              <ThumbnailSmall src={menu3} />
              <ThumbnailSmall src={menu3} />
            </div>
          </div>
          {/* Bữa ăn hôm nay - end*/}
        </section>
      </Main>
    </>
  );
};

export default Home;
