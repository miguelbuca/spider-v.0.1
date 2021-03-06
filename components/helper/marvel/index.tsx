import React, { FC } from "react";

const Marvel: FC<Svg> = ({ height, width, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 62 28"
      fill="none"
      data-inject-url="https://mikefernando-Marvelman.netlify.app/svg/marvel.svg"
      className="ml-2 w-auto"
    >
      <rect
        x="2"
        y="2"
        width="58"
        height="24.0415"
        fill={fill ? fill : "#EC111A"}
      ></rect>
      <path
        d="M3.95312 4.40417V23.6373H7.40908L7.55934 15.0726L9.06193 23.6373H11.0153L12.5179 15.0726V23.6373H19.1293L19.5801 20.7824H22.2847L22.7355 23.6373H29.4972V17.4767H30.2485L31.7511 23.6373H35.207L33.1034 16.4249C34.2876 15.2354 34.847 14.4377 35.207 12.2176L37.1604 23.6373H41.3676L44.0723 6.65806V23.6373H50.6837V20.1814H47.5283V15.8239H50.6837V12.2176H47.5283V8.01039H50.6837V4.40417H40.9169L39.264 16.7254L37.9117 4.40417H34.0049L34.3055 7.2591C33.7044 5.75651 31.7511 4.40417 30.549 4.40417H25.891V21.2332L23.4868 4.40417H18.6785L16.1241 21.8342V4.40417H11.6163L9.96349 13.8705L8.31064 4.40417H3.95312Z"
        fill="white"
      ></path>
      <path
        d="M51.2847 23.6373V4.40417H54.7407V20.3316H57.7459V23.6373H51.2847Z"
        fill="white"
      ></path>
      <path
        d="M21.0831 9.66308L20.0312 17.3263H22.1349L21.0831 9.66308Z"
        fill={fill ? fill : "#EC111A"}
      ></path>
      <path
        d="M29.4976 13.7201V7.70972C30.8815 8.14666 31.7515 8.91179 31.7515 10.8652C31.7515 12.2175 30.9046 13.5298 29.4976 13.7201Z"
        fill={fill ? fill : "#EC111A"}
      ></path>
    </svg>
  );
};

export default Marvel;
