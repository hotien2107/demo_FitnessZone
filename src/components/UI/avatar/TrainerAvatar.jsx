
const defaultSrc = 'https://previews.123rf.com/images/apoev/apoev1804/apoev180400027/98748911-default-placeholder-fitness-trainer-in-a-t-shirt-half-length-portrait-photo-avatar-gray-color.jpg'

const TrainerAvatar = ({src}) => {
    return (
        <div className='w-64 h-64 bg-white shadow-lg rounded-2xl overflow-hidden relative p-2'>
            <img className='w-full h-full object-cover rounded-2xl' src={src ? src : defaultSrc} alt='#' />
        </div>
    )
};

export default TrainerAvatar;