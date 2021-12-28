
import avatar from "../../../assets/images/avatar-trainer.webp"

const TrainerAvatar = ({src}) => {
    return (
        <div className='w-64 h-64 bg-white shadow-lg rounded-2xl overflow-hidden relative p-2'>
            <img className='w-full h-full object-cover rounded-2xl' src={src ? src : avatar} alt='#' />
        </div>
    )
};

export default TrainerAvatar;