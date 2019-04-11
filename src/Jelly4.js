import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Tentacle from "./Tentacle";

const animationTimings = [0, 0.3, 0.5, 0.7, 1];

const Jelly4 = () => {
  const [doAnimate, setDoAnimate] = useState(true);

  // jelly hood animation
  const { x } = useSpring({
    from: { x: 0 },
    x: doAnimate ? 1 : 0,
    reset: true,
    config: { duration: 1000 },
    delay: 200,
    onRest: e => {
      setDoAnimate(!doAnimate);
    }
  });

  // output: [start3Pos.y, start4Pos.y, startPos.y, start2Pos.y, start3Pos.y]
  // const middlePos = star

  return (
    <div className="hooks-main">
      <svg width="100%" height="100%">
        <g transform={`scale(1.5,1.5) translate(10, 10)`}>
          {/* Jelly hood */}
          <animated.path
            fill={"none"}
            stroke={"black"}
            d={x
              .interpolate({
                range: animationTimings,
                output: [path1, path2, path3, path4, path1]
              })
              .interpolate(x => `${x}`)}
          />

          {/* Tentacles */}
          <Tentacle x={x} range={animationTimings} points={ptsStart} />
          <Tentacle x={x} range={animationTimings} points={ptsQuart} />
          <Tentacle x={x} range={animationTimings} points={ptsMid} />
          <Tentacle x={x} range={animationTimings} points={pts3Quarts} />
          <Tentacle x={x} range={animationTimings} points={ptsEnd} />
        </g>
      </svg>
    </div>
  );
};

export default Jelly4;

// pose 1 - fat jelly head
const startPos = { x: 50, y: 100 };
const startControlPt = { x: 10, y: 100 };

const middlePt = { x: 110, y: 10 };
const middleControlPt = { x: 20, y: 10 };

const endPos = { x: 180, y: 100 };
const endControlPt = { x: 210, y: 100 };

// pose 2 - up and flat
const start2Pos = { x: 10, y: 30 };
const start2ControlPt = { x: 0, y: 20 };

const middle2Pt = { x: 110, y: 10 };
const middle2ControlPt = { x: 20, y: 10 };

const end2Pos = { x: 210, y: 30 };
const end2ControlPt = { x: 220, y: 20 };

// pose 3
const start3Pos = { x: 10, y: 40 };
const start3ControlPt = { x: 70, y: 30 };

const middle3Pt = { x: 110, y: 10 };
const middle3ControlPt = { x: 40, y: 10 };

const end3Pos = { x: 210, y: 40 };
const end3ControlPt = { x: 150, y: 30 };

// pose 4
const start4Pos = { x: 20, y: 90 };
const start4ControlPt = { x: 70, y: 60 };

const middle4Pt = { x: 110, y: 10 };
const middle4ControlPt = { x: 40, y: 10 };

const end4Pos = { x: 200, y: 90 };
const end4ControlPt = { x: 150, y: 60 };

const ptsStart = [startPos, start2Pos, start3Pos, start4Pos, startPos];
const ptsEnd = [endPos, end2Pos, end3Pos, end4Pos, endPos];
const ptsQuart = ptsStart.map((pt, index) => {
  const w = ptsEnd[index].x - pt.x;
  const halfway = pt.x + w / 4;

  return { x: halfway, y: pt.y };
});
const ptsMid = ptsStart.map((pt, index) => {
  const w = ptsEnd[index].x - pt.x;
  const halfway = pt.x + w / 2;

  return { x: halfway, y: pt.y };
});
const pts3Quarts = ptsStart.map((pt, index) => {
  const w = ptsEnd[index].x - pt.x;
  const halfway = pt.x + w * 0.75;

  return { x: halfway, y: pt.y };
});

const path1 = ` M${startPos.x} ${startPos.y}
                C ${startControlPt.x} ${startControlPt.y}, 
                ${middleControlPt.x} ${middleControlPt.y}, 
                ${middlePt.x} ${middlePt.y} 
                S ${endControlPt.x} ${endControlPt.y}, 
                ${endPos.x} ${endPos.y} z`;

const path2 = ` M${start2Pos.x} ${start2Pos.y}
                C ${start2ControlPt.x} ${start2ControlPt.y}, 
                ${middle2ControlPt.x} ${middle2ControlPt.y}, 
                ${middle2Pt.x} ${middle2Pt.y} 
                S ${end2ControlPt.x} ${end2ControlPt.y}, 
                ${end2Pos.x} ${end2Pos.y} z`;

const path3 = ` M${start3Pos.x} ${start3Pos.y}
                C ${start3ControlPt.x} ${start3ControlPt.y}, 
                ${middle3ControlPt.x} ${middle3ControlPt.y}, 
                ${middle3Pt.x} ${middle3Pt.y} 
                S ${end3ControlPt.x} ${end3ControlPt.y}, 
                ${end3Pos.x} ${end3Pos.y} z`;

const path4 = ` M${start4Pos.x} ${start4Pos.y}
                C ${start4ControlPt.x} ${start4ControlPt.y}, 
                ${middle4ControlPt.x} ${middle4ControlPt.y}, 
                ${middle4Pt.x} ${middle4Pt.y} 
                S ${end4ControlPt.x} ${end4ControlPt.y}, 
                ${end4Pos.x} ${end4Pos.y} z`;
