import CommonHeader from "../../layouts/header/CommonHeader";
import {FaArrowLeft, FaComment, FaDumbbell, FaStar, FaStarHalf, FaRegStar} from "react-icons/fa";
import {trainer_exercise_info} from "../../dummy-data/trainerExercise";
import Main from "../../layouts/main";
import TrainerAvatar from "../UI/avatar/TrainerAvatar";
import Button from "../UI/button/index";
import {useNavigate} from "react-router-dom";


const ExerciseClass = () => {
    const data = trainer_exercise_info;
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }

    return (
        <>
            <CommonHeader className="flex items-center">
                <Button className="w-16 h-full bg-none" onClick={handleBackClick}>
                    <FaArrowLeft className='text-5xl text-white mr-8'/>
                </Button>
                <h3 className='text-4xl text-white font-bold my-4'>{data.name}</h3>
            </CommonHeader>
            <Main>
                <section className="mt-8">
                    <div className="flex flex-col items-center mb-12">
                        <TrainerAvatar/>
                        <p className="text-3xl font-black mt-4">{data.trainer.name}</p>
                    </div>
                    <div className='flex gap-16 justify-center mb-12'>
                        <Button className="w-32 h-32 bg-none flex flex-col items-center">
                            <FaComment className='text-green-500 text-6xl'/>
                            <p className="text-2xl text-gray-900">Chat</p>
                        </Button>
                        <Button className="w-32 h-32 bg-none flex flex-col items-center">
                            <FaDumbbell className='text-green-500 text-6xl'/>
                            <p className="text-2xl text-gray-900">Tập ngay</p>
                        </Button>
                    </div>
                    <div className='grid grid-flow-row gap-y-5 grid-cols-3 mb-12'>
                        <h4 className='text-2xl text-gray-500'>Thời lượng</h4>
                        <p className='col-span-2 text-2xl'>{data.duration} phút</p>
                        <h4 className='text-2xl text-gray-500'>Mô tả</h4>
                        <p className='col-span-2 text-2xl'>{data.description}</p>
                        <h4 className='text-2xl text-gray-500'>Dụng cụ</h4>
                        <p className='col-span-2 text-2xl'>{data.equipment ? data.equipment : "Không"}</p>
                    </div>
                    <div className='mb-12'>
                        <h3 className='text-4xl text-gray-900 font-bold my-4'>Lịch tập</h3>
                        <table className='w-full table-auto text-8xl'>
                            <thead className='bg-green-500 text-white h-20'>
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
                            <tbody className='bg-white'>
                            {/*Start time*/}
                            <tr className='h-20'>
                                {data.schedule.map((schedule) =>
                                    <td className='text-center'>{schedule.start ? schedule.start + 'h' : ''}</td>
                                )}
                            </tr>
                            {/*End time*/}
                            <tr className='h-20'>
                                {data.schedule.map((schedule) =>
                                    <td className='text-center'>{schedule.end ? schedule.end + 'h' : ''}</td>
                                )}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3 className='text-4xl text-gray-900 font-bold my-4'>Rate</h3>
                    </div>
                </section>
            </Main>
        </>
    )
};

export default ExerciseClass;