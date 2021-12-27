import CommonHeader from "../../layouts/header/CommonHeader";
import { FaArrowLeft } from "react-icons/fa";
import { trainer_exercise_info } from "../../dummy-data/trainerExercise";
import Main from "../../layouts/main";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/button";
import { recommended_trainers } from "../../dummy-data/recommended-trainers";
import { registered_trainers } from "../../dummy-data/registered-trainers";
import RecommendedTrainer from "../../components/trainers/recommend-trainer";
import RegisteredTrainer from "../../components/trainers/registered-trainer";

const ListTrainers = () => {
  const data = trainer_exercise_info;
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <CommonHeader className="flex items-center">
        <Button className="w-16 h-full bg-none" onClick={handleBackClick}>
          <FaArrowLeft className="text-5xl text-white mr-8" />
        </Button>
        <h3 className="text-4xl text-white font-bold my-4">Huấn luyện viên</h3>
      </CommonHeader>
      <Main>
        <section className="mt-8">
          <div>
            <h3 className="text-4xl text-gray-900 font-bold my-4">
              Đã đăng ký
            </h3>
          </div>

          <div className="flex items-center mb-12 overflow-hidden">
            {registered_trainers.map(trainer => (<RegisteredTrainer trainer={trainer}/>))}
          </div>

          <div className="mb-12">
            <h3 className="text-4xl text-gray-900 font-bold my-4">
              Gợi ý cho bạn
            </h3>
            {recommended_trainers.map(trainer => (<RecommendedTrainer trainer={trainer}/>))}
          </div>
        </section>
      </Main>
    </>
  );
};

export default ListTrainers;
