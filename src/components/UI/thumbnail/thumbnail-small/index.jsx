import { FaUserGraduate } from "react-icons/fa";
import menu2 from "../../../../assets/images/menu2.webp";

const ThumbnailSmall = ({ src, title, hasTrainer }) => {
  return (
    <div className="relative flex flex-col bg-white shadow-xl w-72 h-72 rounded-2xl">
      {hasTrainer ? (
        <div className="absolute p-2 bg-white rounded-full shadow-lg top-4 right-4 ">
          <FaUserGraduate className="text-2xl text-gray-800" />
        </div>
      ) : null}
      <img
        className="block object-cover w-full h-full"
        src={src ? src : menu2}
        alt="#"
      />
      <div className="w-full mt-8 text-3xl text-gray-700">{title}</div>
    </div>
  );
};

export default ThumbnailSmall;
