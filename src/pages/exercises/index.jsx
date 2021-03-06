import Main from "../../layouts/main";
import CommonHeader from "../../layouts/header/CommonHeader";
import ThumbnailBig from "../../components/UI/thumbnail/thumbnail-big";
import Button from "../../components/UI/button";
import ThumbnailSmall from "../../components/UI/thumbnail/thumbnail-small";
import { FaSearch } from "react-icons/fa";
import InputText from "../../components/UI/input/InputText";
import { Link } from "react-router-dom";

const Exercises = () => {
  return (
    <>
      <CommonHeader className="flex items-center">
        <FaSearch className="mr-8 text-5xl text-white" />
        <InputText placeholder="Tìm kiếm bài tập" isWhite />
      </CommonHeader>
      <Main>
        <section className="mt-8">
          <div className="mb-12">
            <h3 className="my-4 text-4xl font-bold text-gray-900">
              Bài tập của bạn
            </h3>
            <div className="flex justify-between">
              <Link to={`trainer-exercise`}>
                <ThumbnailBig hasTrainer />
              </Link>

              <ThumbnailBig />
            </div>
          </div>
          <div className="mb-12">
            <h3 className="my-4 text-4xl font-bold text-gray-900">
              Nhóm cơ cần tập trung
            </h3>
            <div className="grid grid-flow-row grid-cols-2 gap-5">
              <Button>Tay</Button>
              <Button>Vai</Button>
              <Button>Ngực</Button>
              <Button>Lưng</Button>
              <Button>Chân</Button>
              <Button>Bụng</Button>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="my-4 text-4xl font-bold text-gray-900">
              Bài tập của bạn
            </h3>
            <div className="flex p-4 bg-white shadow-xl rounded-2xl">
              <ThumbnailSmall />
              <div className="flex flex-col ml-4">
                <p className="text-3xl font-medium">Workout toàn thân đốt mỡ</p>
                <p className="text-xl font-medium text-gray-500">
                  __ ngày / tuần
                </p>
                <p className="text-xl font-medium text-gray-500">
                  __ phút / buổi
                </p>
              </div>
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Exercises;
