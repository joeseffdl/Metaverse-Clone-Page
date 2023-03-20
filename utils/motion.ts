enum Direction {
  Left = "left",
  Right = "right",
  Up = "up",
  Down = "down",
}

enum TransitionType {
  Spring = "spring",
  Tween = "tween",
  EaseIn = "easeIn",
  EaseOut = "easeOut",
}

interface staggerProps {
  staggerChildren: string
  delayChildren: string
}

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: TransitionType.Spring,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: TransitionType.Spring,
      stiffness: 80,
      delay: 1,
    },
  },
}

export const slideIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: TransitionType.EaseOut,
    },
  },
})

export const staggerContainer: {} = ({
  staggerChildren,
  delayChildren,
}: staggerProps) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: TransitionType.Spring,
      duration: 1.25,
      delay,
    },
  },
})

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
}

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: TransitionType.Tween,
      ease: TransitionType.EaseIn,
    },
  },
}

export const fadeIn = (
  direction: string,
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    x:
      direction === Direction.Left
        ? 100
        : direction === Direction.Right
        ? -100
        : 0,
    y:
      direction === Direction.Up
        ? 100
        : direction === Direction.Down
        ? -100
        : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: TransitionType.EaseOut,
    },
  },
})

export const planetVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: TransitionType.Spring,
      duration: 1.8,
      delay: 0.5,
    },
  },
})

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: TransitionType.Tween,
      delay,
      duration,
      ease: TransitionType.EaseOut,
    },
  },
})

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: TransitionType.Spring,
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: TransitionType.Spring,
      stiffness: 80,
      delay: 0.5,
    },
  },
}
