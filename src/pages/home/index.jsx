import React from "react";
import ThumbnailSmall from "../../components/UI/thumbnail/thumbnail-small";
import HomeHeader from "../../layouts/header/HomeHeader";
import Main from "../../layouts/main";
import menu1 from "../../assets/images/menu1.webp";
import menu3 from "../../assets/images/menu3.jpg";
const Home = () => {
  return (
    <div className="w-full h-full overflow-scroll">
      <HomeHeader />
      <Main>
        <section className="mt-8">
          {/* Lộ trình tập luyện - start*/}
          <div className="mb-16">
            <h3 className="my-4 text-4xl font-bold text-gray-900">
              Lộ trình tập luyện
            </h3>
            <div className="flex items-center w-full h-48 overflow-hidden align-middle shadow-md rounded-2xl">
              <img src={menu1} alt="" />
            </div>
          </div>
          {/* Lộ trình tập luyện - end*/}

          {/* Bài tập hôm nay - start*/}
          <div className="mb-16">
            <h3 className="my-4 text-4xl font-bold text-gray-900">
              Bài tập hôm nay
            </h3>
            <div className="flex justify-between gap-3">
              <ThumbnailSmall title="Hít đất" />
              <ThumbnailSmall hasTrainer title="Hit đất" />
              {/* <ThumbnailSmall /> */}
            </div>
          </div>
          {/* Bài tập hôm nay  - end*/}

          {/* Bữa ăn hôm nay- start*/}
          <div className="pt-10">
            <h3 className="my-5 text-4xl font-bold text-gray-900">
              Bữa ăn hôm nay
            </h3>
            <div className="flex justify-between gap-3">
              <ThumbnailSmall title="Rau củ" src={menu3} />
              <ThumbnailSmall title="Yến mạch" src={menu3} />
              {/* <ThumbnailSmall src={menu3} /> */}
            </div>
          </div>
          {/* Bữa ăn hôm nay - end*/}
        </section>
      </Main>
    </div>
  );
};

export default Home;
