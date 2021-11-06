import React, { FC, useState, useEffect } from "react";
import Spider from "../helper/spider";
import { Content, Main, Loader, Svg } from "./index.styles";
import Props from "./types";

const Container: FC<Props> = ({ video, children }) => {
  const [videoLoad, setVideoLoad] = useState<boolean>(false);

  const [goLeft, setGoLeft] = useState<string>();

  useEffect(() => {
    /*setGoLeft(
      videoLoad ? '-100%' : '0'
    )*/

    setTimeout(() => {
      setGoLeft("-100%");
    }, 3000);
  }, [videoLoad]);

  return (
    <div>
      <Loader
        style={{
          left: goLeft,
        }}
      >
        <Svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="anim-spiderman">
            <path
              className="anim-spiderman"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.4431 44.6386L50.703 44.1559C53.3391 45.6906 59.4431 49.3762 62.7698 51.8416C62.745 53.9208 62.5247 59.401 61.8416 64.6881C61.5322 67.3243 60.2599 73.8589 57.646 78.9084C59.1435 76.9158 62.4876 71.3713 63.8836 65.1337C64.3663 63.3639 65.4653 58.0495 66 50.9505C63.1534 49.3045 56.1683 45.5223 51 43.5619L51.3713 42.7822C55.1955 43.8342 64.1287 46.5025 69.2673 48.7599C69.1559 51.4332 68.495 58.4505 66.7426 65.1337C65.8371 68.5866 63.3416 77.4752 56.2723 86C56.3697 85.8994 56.4882 85.78 56.6273 85.6398C58.1308 84.1248 62.0302 80.1956 67.5223 71.6312C70.2698 66.5446 72.0891 60.6782 74.3911 46.7178C68.9703 44.9728 61.5817 43.0421 51.594 42.0025L51.8911 41.4084C55.6039 41.2104 64.2772 41.0743 69.2673 42.1139C69.8366 38.3144 69.6312 29.4975 65.146 24.6262C66.1361 27.3366 67.9827 34.0569 66.5569 39.255C62.9307 39.2302 54.9431 39.3812 52.0025 40.1832L51.5198 39.552C53.698 38.2525 58.6708 35.5421 61.1361 35.0965C61.1442 35.0372 61.1523 34.9774 61.1605 34.9172C61.8684 29.7099 62.9799 21.5342 55.4554 11C57.2747 14.75 60.2153 23.802 58.3143 33.2772L50.9257 38.6609L50.3688 37.8812L52.6336 35.5421C52.2252 34.8738 51.0074 33.3812 49.4035 32.7574C50.1708 33.6733 51.2079 35.698 49.2178 36.4703H46.2846C45.4307 36.2475 44.198 35.1931 46.099 32.7574C45.3193 33.1163 43.604 34.1757 42.9802 35.5421L44.6881 37.5842L44.3168 38.3267L37.1881 33.3144C36.3465 29.6881 35.6584 20.1559 39.6386 11.0371C39.3184 11.6268 39.0101 12.189 38.7142 12.7287C34.6868 20.0738 32.9356 23.2677 34.1807 35.0965C35.5792 35.3936 39.3639 36.6856 43.3144 39.4777L43.0916 39.9604C39.7005 39.6386 32.0941 39.0619 28.797 39.3292C28.2277 36.6807 27.7054 30.0322 30.1708 24.6262C26.2723 30.1213 25.4926 34.1312 26.1609 42.2252C28.9703 41.6807 36.2896 40.755 43.0916 41.4084L43.3144 42.0025C38.3144 42.6337 26.8515 44.4604 21 46.7178C21.1638 47.5953 21.3229 48.4557 21.4788 49.2991C22.9129 57.0566 24.0818 63.3797 26.2723 68.3639C29.9854 75.5044 33.156 79.1728 37.0129 83.6354C37.6683 84.3937 38.3435 85.1749 39.0446 86C33.0668 77.7203 26.8738 67.3243 26.1609 48.7599C30.0965 47.1881 39.1931 43.7921 44.0941 42.7822L44.4282 43.5619C40.4183 45.2574 31.7673 49.0941 29.5396 50.8762C29.5642 51.2066 29.5884 51.5383 29.6127 51.8715C30.1759 59.5913 30.7984 68.1239 37.5965 78.9084C35.4802 74.2673 33.0891 68.9802 32.5842 51.8416C35.5173 49.8738 42.0446 45.5817 44.6881 44.1559L44.9851 44.6386C43.6485 45.4926 40.5446 47.6386 38.8218 49.3911C38.7104 50.1089 38.5545 52.7847 38.8218 57.745C40.0965 60.0594 43.6559 65.0668 47.6955 66.5817C49.7624 65.7401 54.4084 62.7946 56.4579 57.745C56.6188 56.5569 56.9035 53.2376 56.7549 49.4653C55.5173 48.3391 52.5223 45.797 50.4431 44.6386ZM40.5 49.5L43.5 47L41.5 50C41.5 55.5 43.3217 59.0567 47.8 60.8C53.0938 57.745 54 55 54 50L52 47L55.2 49.8C55.2951 52.3648 55.4229 53.7895 54.7 56.5C53.5 59.5 51.5 61.5 47.7 63.8C44 61.5 43 60 40.7 56.5C40.3164 53.5132 40.1274 51.9879 40.5 49.5Z"
              fill="#EDF1F7"
              stroke="#EDF1F7"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </Svg>
      </Loader>
      <Main>
        {video && (
          <video
            onLoadedData={(e) => {
              setVideoLoad(true);
            }}
            autoPlay
            muted
            loop
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
        {children && <Content>{children}</Content>}
      </Main>
    </div>
  );
};

export default Container;
