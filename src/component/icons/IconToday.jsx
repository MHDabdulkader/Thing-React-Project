function IconToday(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
      width={props.width}
        height={props.height}
        {...props}
      >
        <g>
          <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"></path>
          <path d="M53 48.8V36c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v14c0 .8.3 1.6.9 2.1l9.6 9.6c.8.8 2 .8 2.8 0l1.4-1.4c.8-.8.8-2 0-2.8L53 48.8z"></path>
        </g>
      </svg>
    );
  }
  
  export default IconToday;