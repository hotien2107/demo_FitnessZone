import { MdStarRate } from 'react-icons/md';

const RateStar = ({ rate }) => {
  const rateStar = []
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      rateStar.push(<MdStarRate className={'text-yellow-200 w-12 h-12'} />)
    } else {
      rateStar.push(<MdStarRate className={'text-stone-200 w-12 h-12'} />)
    }
  }
  return (
    <div className='flex'>
      {rateStar}             
    </div>
  )
};

export default RateStar;
