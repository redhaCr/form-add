import "./FameItem.css";

const FameItem = () => {
  return (
    <div className="mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="73"
        height="73"
        viewBox="0 0 73 73"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.06"
            x2="0.957"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#60efff" />
            <stop offset="1" stop-color="#0178bc" />
          </linearGradient>
        </defs>
        <g id="Group_7" data-name="Group 7" transform="translate(-826 -1721)">
          <rect
            id="Rectangle_5"
            data-name="Rectangle 5"
            width="73"
            height="73"
            rx="29"
            transform="translate(826 1721)"
            fill="url(#linear-gradient)"
          />
          <path
            id="person_FILL0_wght400_GRAD0_opsz48"
            d="M28.17,27.86A9.068,9.068,0,0,1,18.715,18.4,9.068,9.068,0,0,1,28.17,8.95,9.068,9.068,0,0,1,37.625,18.4,9.068,9.068,0,0,1,28.17,27.86ZM8,48.093V42.168a6.937,6.937,0,0,1,1.2-4.1,7.689,7.689,0,0,1,3.089-2.584,47.378,47.378,0,0,1,8.1-2.836A32.742,32.742,0,0,1,28.17,31.7a31.365,31.365,0,0,1,7.753.977,53.7,53.7,0,0,1,8.068,2.8,7.6,7.6,0,0,1,3.152,2.584,6.937,6.937,0,0,1,1.2,4.1v5.925Zm3.782-3.782H44.559V42.168a3.453,3.453,0,0,0-.6-1.922,3.8,3.8,0,0,0-1.481-1.355A33.471,33.471,0,0,0,35.1,36.211a32.611,32.611,0,0,0-6.934-.725,33.5,33.5,0,0,0-7,.725A32.014,32.014,0,0,0,13.8,38.89a3.792,3.792,0,0,0-2.017,3.278ZM28.17,24.078A5.5,5.5,0,0,0,33.843,18.4a5.5,5.5,0,0,0-5.673-5.673A5.5,5.5,0,0,0,22.5,18.4a5.5,5.5,0,0,0,5.673,5.673Zm0-5.673Zm0,25.906Z"
            transform="translate(834.133 1728.781)"
            fill="#fff"
          />
        </g>
      </svg>
      <span className="title-one">Hall of fame</span>
    </div>
  );
};

export default FameItem;
