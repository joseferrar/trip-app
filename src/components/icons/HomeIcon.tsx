import React from 'react';
import Svg, {Path, SvgProps, Ellipse} from 'react-native-svg';

const HomeIcon = ({color, width, height, focusable}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      style={{marginLeft: -6}}
      viewBox="0 0 24 36"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M26.6189 17.611L19.5354 11.847C18.1512 10.725 15.9883 10.714 14.6148 11.836L7.53131 17.611C6.51474 18.436 5.89832 20.086 6.11461 21.384L7.47723 29.678C7.79085 31.537 9.48873 33 11.338 33H22.8014C24.6291 33 26.3594 31.504 26.673 29.667L28.0357 21.373C28.2303 20.086 27.6139 18.436 26.6189 17.611ZM17.8808 28.6C17.8808 29.051 17.5131 29.425 17.0697 29.425C16.6263 29.425 16.2587 29.051 16.2587 28.6V25.3C16.2587 24.849 16.6263 24.475 17.0697 24.475C17.5131 24.475 17.8808 24.849 17.8808 25.3V28.6Z"
        fill={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {focusable ? (
        <Ellipse cx="17.6008" cy="2.5" rx="2.50638" ry="2.5" fill={'#4BD4FF'} />
      ) : null}
    </Svg>
  );
};

export default HomeIcon;
