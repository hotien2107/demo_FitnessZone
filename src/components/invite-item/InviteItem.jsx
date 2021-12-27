const InviteItem = ({ src, name, lastMess }) => {
  return (
    <div className="flex items-center justify-between my-8">
      <label for={src} className="flex select-none cursor-pointer">
        <img
          src={src}
          alt=""
          className="w-20 h-20 rounded-full object-cover mr-8 form-check-label"
          for={src}
        />
        <div className="h-20 w-full flex flex-col justify-between" for={src}>
          <p className="text-3xl text-gray-800 font-bold">{name}</p>
          <p className="text-2xl text-gray-500 font-light">{lastMess}</p>
        </div>
      </label>
      <input
        type="checkbox"
        id={src}
        value="yes"
        className="opacity-0 absolute h-8 w-8"
      />
      <div
        className="bg-white border-2 rounded-full border-green-400 w-8 h-8 
    flex flex-shrink-0 justify-center 
    items-center mr-2 focus-within:border-green-500"
      >
        <svg
          className="fill-current hidden w-3 h-3 text-green-600 pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#ffffff" fill-rule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default InviteItem;
