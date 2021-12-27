import Button from "../UI/button/index";
import RateStar from "../rate/rate";
import TrainerAvatarSmall from "../../components/UI/avatar-small/TrainerAvatarSmall";

const RecommendedTrainer = ({ trainer }) => {
  return (
    <div className="flex bg-white shadow-xl p-4 mb-8 rounded-2xl">
    <TrainerAvatarSmall src={trainer.image}/>
    <div className="w-96 flex flex-col justify-around">
      <div className="flex flex-col ml-4">
        <p className="text-3xl font-medium"> {trainer.name} </p>
        <RateStar rate={trainer.rate} />
        <p className="text-xl font-medium text-gray-500">
          {trainer.description}
        </p>
      </div>

      <div className="flex flex-row-reverse w-full">
        <Button className="h-14 w-72">Đăng kí</Button>
      </div>
    </div>
  </div>
  )
};

export default RecommendedTrainer;
