import { useState } from "react";
import {
  FaArrowLeft,
  FaComment,
  FaDumbbell,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { trainer_exercise_info } from "../../dummy-data/trainerExercise";
import CommonHeader from "../../layouts/header/CommonHeader";
import Main from "../../layouts/main";
import TrainerAvatar from "../UI/avatar/TrainerAvatar";

const ExerciseClass = () => {
  const [rating, setRating] = useState(-1);
  const data = trainer_exercise_info;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/exercises");
  };

  return (
    <>
      <CommonHeader className="flex items-center">
        <FaArrowLeft
          className="mr-8 text-5xl text-white"
          onClick={handleBackClick}
        />

        <h3 className="my-4 text-4xl font-bold text-white">{data.name}</h3>
      </CommonHeader>
      <Main>
        <section className="mt-8">
          <div className="flex flex-col items-center mb-12">
            <TrainerAvatar />
            <p className="mt-4 text-3xl font-black">{data.trainer.name}</p>
          </div>
          <div className="flex justify-center gap-16 mb-12">
            <Link to={""}>
              <div className="flex flex-col items-center w-32 h-full bg-none">
                <FaComment className="text-6xl text-green-500" />
                <p className="text-2xl text-gray-900">Chat</p>
              </div>
            </Link>
            <Link to={"videoCall"}>
              <div className="flex flex-col items-center w-32 h-full bg-none">
                <FaDumbbell className="text-6xl text-green-500" />
                <p className="text-2xl text-gray-900">Tập ngay</p>
              </div>
            </Link>
          </div>
          <div className="grid grid-flow-row grid-cols-3 mb-12 gap-y-5">
            <h4 className="text-2xl text-gray-500">Thời lượng</h4>
            <p className="col-span-2 text-2xl">{data.duration} phút</p>
            <h4 className="text-2xl text-gray-500">Mô tả</h4>
            <p className="col-span-2 text-2xl">{data.description}</p>
            <h4 className="text-2xl text-gray-500">Dụng cụ</h4>
            <p className="col-span-2 text-2xl">
              {data.equipment ? data.equipment : "Không"}
            </p>
          </div>
          <div className="mb-12">
            <h3 className="my-4 text-4xl font-bold text-gray-900">Lịch tập</h3>
            <table className="w-full table-auto text-8xl">
              <thead className="h-20 text-white bg-green-500">
                <tr>
                  <th>Thứ 2</th>
                  <th>Thứ 3</th>
                  <th>Thứ 4</th>
                  <th>Thứ 5</th>
                  <th>Thứ 6</th>
                  <th>Thứ 7</th>
                  <th>Chủ nhật</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {/*Start time*/}
                <tr className="h-20">
                  {data.schedule.map((schedule) => (
                    <td className="text-center">
                      {schedule.start ? schedule.start + "h" : ""}
                    </td>
                  ))}
                </tr>
                {/*End time*/}
                <tr className="h-20">
                  {data.schedule.map((schedule) => (
                    <td className="text-center">
                      {schedule.end ? schedule.end + "h" : ""}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3 className="my-4 text-4xl font-bold text-gray-900">Rate</h3>
            <div className="flex justify-between w-full">
              {[...Array(5)].map((element, index) => (
                <div key={index} onClick={() => setRating(index)}>
                  {rating >= index ? (
                    <FaStar className="text-6xl text-amber-500" />
                  ) : (
                    <FaRegStar className="text-6xl text-amber-500" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default ExerciseClass;
