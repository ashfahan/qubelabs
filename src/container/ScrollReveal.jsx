import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const baseConfig = { distance: "70px", delay: 0, easing: "cubic-bezier(0.68, -0.55, 0.25, 01.55)" };

var scrollRevealRight1 = { duration: 800, origin: "right" };
var scrollRevealRight2 = { duration: 1000, origin: "right" };
var scrollRevealRight3 = { duration: 1200, origin: "right" };
var scrollRevealRight4 = { duration: 1400, origin: "right" };
var scrollRevealRight5 = { duration: 1600, origin: "right" };

var scrollRevealLeft1 = { duration: 800, origin: "left" };
var scrollRevealLeft2 = { duration: 1000, origin: "left" };
var scrollRevealLeft3 = { duration: 1200, origin: "left" };

var five = { duration: 500 };
var six = { duration: 600 };
var seven = { duration: 700 };
var eight = { duration: 800 };
var nine = { duration: 900 };
var ten = { duration: 1000 };
var eleven = { duration: 1100 };
var twelve = { duration: 1200 };
var thirteen = { duration: 1300 };
var fourteen = { duration: 1400 };
var fifteen = { duration: 1500 };
var sixteen = { duration: 1600 };
var seventeen = { duration: 1700 };
var eighteen = { duration: 1800 };
var nineteen = { duration: 1900 };

var fadeIn = {
  distance: "0",
  opacity: 0,
  duration: 1100,
};
var fadeInFast = {
  distance: "0",
  opacity: 0,
  duration: 500,
};

export const anim = {
  animate1: { ...baseConfig, ...five },
  animate2: { ...baseConfig, ...six },
  animate3: { ...baseConfig, ...seven },
  animate4: { ...baseConfig, ...eight },
  animate5: { ...baseConfig, ...nine },
  animate6: { ...baseConfig, ...ten },
  animate7: { ...baseConfig, ...eleven },
  animate8: { ...baseConfig, ...twelve },
  animate9: { ...baseConfig, ...thirteen },
  animate10: { ...baseConfig, ...fourteen },
  animate11: { ...baseConfig, ...fifteen },
  animate12: { ...baseConfig, ...sixteen },
  animate13: { ...baseConfig, ...seventeen },
  animate14: { ...baseConfig, ...eighteen },
  animate15: { ...baseConfig, ...nineteen },

  fadeIn: { ...baseConfig, ...fadeIn },
  fadeInFast: { ...baseConfig, ...fadeInFast },
  rightToLeft1: { ...baseConfig, ...scrollRevealRight1 },
  rightToLeft2: { ...baseConfig, ...scrollRevealRight2 },
  rightToLeft3: { ...baseConfig, ...scrollRevealRight3 },
  rightToLeft4: { ...baseConfig, ...scrollRevealRight4 },
  rightToLeft5: { ...baseConfig, ...scrollRevealRight5 },
  leftToRight1: { ...baseConfig, ...scrollRevealLeft1 },
  leftToRight2: { ...baseConfig, ...scrollRevealLeft2 },
  leftToRight3: { ...baseConfig, ...scrollRevealLeft3 },
};

export const ScrollReveal = ({ children, className, config = baseConfig }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current) scrollReveal().reveal(sectionRef.current, config);
  }, [config]);

  if (Array.isArray(children))
    return children?.map(children, (child) => {
      return React.cloneElement(child, {
        ref: sectionRef,
        className: `scroll-section ${child.props.className} ${className}`,
      });
    });
  else
    return React.cloneElement(children, {
      ref: sectionRef,
      className: `scroll-section ${children.props.className} ${className}`,
    });
};

export default ScrollReveal;
