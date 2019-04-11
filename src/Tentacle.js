import React from "react";
import { animated, useTrail, config } from "react-spring";

const Tentacle = ({ x, range, points }) => {
  const xPosOutput = points.map(pt => pt.x);
  const yPosOutput = points.map(pt => pt.y);
  const totalNodes = 6;
  const nodeRadius = 1;

  const [trail, set] = useTrail(totalNodes, () => ({
    xy: [0, 0],
    config: { mass: 1, tension: 70, friction: 15 }
  }));

  set({
    xy: [
      x.interpolate({ range, output: xPosOutput }),
      x.interpolate({ range, output: yPosOutput })
    ]
  });

  return (
    <g>
      <animated.circle
        cx={x.interpolate({ range, output: xPosOutput })}
        cy={x.interpolate({ range, output: yPosOutput })}
        r={nodeRadius}
      />

      {trail.map((props, index) => (
        <animated.circle
          key={index}
          cx={props.xy.interpolate((x, y) => x)}
          cy={props.xy.interpolate((x, y) => y + 10 * index)}
          r={nodeRadius}
        />
      ))}
    </g>
  );
};

export default Tentacle;
