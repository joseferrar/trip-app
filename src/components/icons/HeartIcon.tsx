import React from 'react';
import Svg, {Ellipse, Path, SvgProps} from 'react-native-svg';

const HeartIcon = ({color, width, height, focusable}: SvgProps) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      x="http://www.w3.org/2000/svg">
      <Path
        d="M13.0231 20.481C12.6481 20.613 12.0306 20.613 11.6556 20.481C8.45746 19.392 1.31128 14.849 1.31128 7.149C1.31128 3.75 4.05727 1 7.44288 1C9.44999 1 11.2255 1.968 12.3393 3.464C13.4532 1.968 15.2397 1 17.2358 1C20.6214 1 23.3674 3.75 23.3674 7.149C23.3674 14.849 16.2212 19.392 13.0231 20.481Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        stroke={color}
      />
      {focusable ? (
        <Ellipse cx="17.6008" cy="2.5" rx="2.50638" ry="2.5" fill={'#4BD4FF'} />
      ) : null}
    </Svg>
  );
};

export default HeartIcon;
