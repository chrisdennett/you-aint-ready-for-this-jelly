import React from "react";
import {
  useTrail,
  useSpring,
  animated,
  interpolate,
  config
} from "react-spring";

const nodeRadius = 10;
const spaceBetweenNodes = 4;
const nodeSpacing = nodeRadius * 2 + spaceBetweenNodes;

const Jelly2 = () => {
  // jelly hood animation
  const { x } = useSpring({
    from: { x: 0 },
    to: async next => {
      while (1) await next({ x: 1 });
    },
    config: { duration: 2000 },
    reset: true
  });

  // tentacles
  const [trail] = useTrail(5, () => ({
    from: { y: 20 },
    to: async next => {
      while (1) {
        await next({ y: 200 });
        await next({ y: 20 });
      }
    },
    config: i => (i === 0 ? config.default : config.slow)
  }));

  return (
    <div className="hooks-main">
      <svg width="100%" height="100%">
        {/* Jelly hood */}
        <animated.path
          fill={"none"}
          stroke={"black"}
          d={x
            .interpolate({
              range: [0, 0.2, 0.4, 0.7, 1],
              output: [path4, path3, path1, path2, path4]
            })
            .interpolate(x => `${x}`)}
        />

        {/* Tentacles */}
        <g>
          {trail.map(({ y }, index) => {
            const translation2 = y.interpolate(
              y => `translate(${start3Pos.x} ${y + index * nodeSpacing})`
            );
            if (index === 0) {
              // first node - attached to body
              return (
                <animated.g key={index} transform={translation2}>
                  <circle cx={0} cy={0} r={nodeRadius} fill={"red"} />
                  <circle cx={50} cy={0} r={nodeRadius} fill={"red"} />
                  <circle cx={100} cy={0} r={nodeRadius} fill={"red"} />
                  <circle cx={150} cy={0} r={nodeRadius} fill={"red"} />
                  <circle cx={end3Pos.x} cy={0} r={nodeRadius} fill={"red"} />
                </animated.g>
              );
            }
            return (
              <animated.g key={index} transform={translation2}>
                <circle cx={0} cy={0} r={nodeRadius} fill={"red"} />
                <circle cx={50} cy={0} r={nodeRadius} fill={"red"} />
                <circle cx={100} cy={0} r={nodeRadius} fill={"red"} />
                <circle cx={150} cy={0} r={nodeRadius} fill={"red"} />
                <circle cx={end3Pos.x} cy={0} r={nodeRadius} fill={"red"} />
              </animated.g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default Jelly2;

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

// pose 3 - mid thrust position
const start3Pos = { x: 20, y: 90 };
const start3ControlPt = { x: 70, y: 60 };

const middle3Pt = { x: 110, y: 10 };
const middle3ControlPt = { x: 40, y: 10 };

const end3Pos = { x: 200, y: 90 };
const end3ControlPt = { x: 150, y: 60 };

// pose 4 - mid thrust position 2
const start4Pos = { x: 10, y: 40 };
const start4ControlPt = { x: 70, y: 30 };

const middle4Pt = { x: 110, y: 10 };
const middle4ControlPt = { x: 40, y: 10 };

const end4Pos = { x: 210, y: 40 };
const end4ControlPt = { x: 150, y: 30 };

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
