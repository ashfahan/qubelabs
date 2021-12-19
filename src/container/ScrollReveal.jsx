import { useRef, useEffect, cloneElement } from "react";
import scrollReveal from "scrollreveal";

const baseConfig = {
  distance: "70px",
  delay: 0,
  easing: "cubic-bezier(0.68, -0.55, 0.25, 01.55)",
};

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
  animate1: five,
  animate2: six,
  animate3: seven,
  animate4: eight,
  animate5: nine,
  animate6: ten,
  animate7: eleven,
  animate8: twelve,
  animate9: thirteen,
  animate10: fourteen,
  animate11: fifteen,
  animate12: sixteen,
  animate13: seventeen,
  animate14: eighteen,
  animate15: nineteen,

  fadeIn: fadeIn,
  fadeInFast: fadeInFast,
  rightToLeft1: scrollRevealRight1,
  rightToLeft2: scrollRevealRight2,
  rightToLeft3: scrollRevealRight3,
  rightToLeft4: scrollRevealRight4,
  rightToLeft5: scrollRevealRight5,
  leftToRight1: scrollRevealLeft1,
  leftToRight2: scrollRevealLeft2,
  leftToRight3: scrollRevealLeft3,
};

const sr = scrollReveal(baseConfig);

export const ScrollReveal = ({ children, className, config }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    setTimeout(() => sectionRef.current && sr.reveal(sectionRef.current, config));
  }, [config]);

  if (children) {
    if (Array.isArray(children)) {
      return children?.map(children, (child) =>
        cloneElement(child, {
          ref: sectionRef,
          className: `scroll-section ${child.props.className} ${className}`,
        })
      );
    } else {
      return cloneElement(children, {
        ref: sectionRef,
        className: `scroll-section ${children.props.className} ${className}`,
      });
    }
  }
};

export default ScrollReveal;
