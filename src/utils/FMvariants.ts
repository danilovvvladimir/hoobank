export const navVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    transition: {
      type: "tween",
      stiffness: 300,
      damping: 140,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      stiffness: 80,
      // delay: 0.2,
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

export const robotHandVariant = {
  hidden: {
    x: 1200,
    opacity: 0,
    y: 500,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      stiffness: 80,
      // delay: 0.2,
      duration: 3,
      ease: "easeInOut",
    },
  },
};

export const cardsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 2,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const slideFadeUpVariant = (delay: number, duration: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      type: "tween",
      duration: duration,
      ease: "easeInOut",
    },
  },
});

export const slideFromX = ({
  direction = "left",
  distance = 50,
  duration = 1,
  delay = 0,
}): any => ({
  hidden: {
    x: direction === "left" ? -distance : distance,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      type: "tween",
      duration: duration,
      ease: "easeInOut",
    },
  },
});
export const slideFromY = ({
  direction = "up",
  distance = 50,
  duration = 1,
  delay = 0,
}): any => ({
  hidden: {
    y: direction === "up" ? distance : -distance,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      type: "tween",
      duration: duration,
      ease: "easeInOut",
    },
  },
});
