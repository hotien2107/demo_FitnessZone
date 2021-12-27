import TrainerAvatar from "../../components/UI/avatar/TrainerAvatar";
import RateStar from "../../components/rate/rate";

const RegisteredTrainer = ({ trainer }) => {
  return (
    <div className="flex flex-col mr-6">
      <TrainerAvatar src={trainer.image}/>
      <RateStar rate={trainer.rate} />
      <p className="text-3xl font-black mt-4">{trainer.name}</p>
    </div>
  );
};

export default RegisteredTrainer;
