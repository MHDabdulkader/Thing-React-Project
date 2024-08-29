function IconSomeday(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"
      width={props.width}
      height={props.height}
      {...props}
      >
        <g>
          <path
            fill="#058f28"
            d="M17.25 23.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
          ></path>
          <path
            stroke="#058f28"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 17.462a2 2 0 112 2V20.5"
          ></path>
          <path
            stroke="#058f28"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 8a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2H7a2 2 0 01-2-2V8z"
          ></path>
          <path
            stroke="#058f28"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h22m-6-4V4M11 8V4"
          ></path>
        </g>
      </svg>
    );
  }
  
  export default IconSomeday;
  