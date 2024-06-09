export default {
  root: {
    class: ["flex lg:flex-row flex-col"]
  },
  sourcecontrols: {
    class: ["flex lg:flex-col justify-center gap-2", "p-5"]
  },
  sourcemoveupbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovetopbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovedownbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcemovebottombutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  sourcewrapper: {
    class: "grow shrink basis-2/4"
  },
  sourceheader: {
    class: ["font-bold", "border-b-0 rounded-t-md", "p-5", "text-surface-700 dark:text-white/80", "bg-surface-50 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700"]
  },
  sourcelist: {
    class: ["list-none m-0 p-0", "min-h-[12rem] max-h-[24rem]", "rounded-b-md", "text-surface-600 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700", "py-3 px-0", "outline-none", "overflow-auto"]
  },
  item: ({ context }) => ({
      class: [
        // Position
        "relative",
        // Spacing
        "py-3 px-5 m-0",
        // Shape
        "border-none",
        // Transition
        "transition duration-200",
        // Color
        { "text-surface-700 dark:text-white/80 bg-surface-0 dark:bg-surface-900": !context.active },
        { "text-primary-highlight-inverse bg-primary-highlight": context.active },
        // State
        {
          "hover:bg-surface-100 dark:hover:bg-surface-700": !context.active,
          "hover:bg-primary-highlight-hover": context.active
        },
        // Misc
        "cursor-pointer overflow-hidden"
      ]
    }),
  buttons: {
    class: "flex lg:flex-col justify-center gap-2 p-5"
  },
  movetotargetbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movealltotargetbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movetosourcebutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  movealltosourcebutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetcontrols: {
    class: "flex lg:flex-col justify-center gap-2 p-5"
  },
  targetmoveupbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovetopbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovedownbutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetmovebottombutton: {
    root: ({ context }) => ({
          class: [
            // Flexbox & Alignment
            "relative inline-flex items-center justify-center",
            // Shape
            "rounded-md",
            // Color
            "text-primary-inverse",
            "bg-primary",
            "border border-primary",
            // Spacing & Size
            "w-12",
            "m-0",
            "px-0 py-3",
            // Transitions
            "transition duration-200 ease-in-out",
            // State
            "hover:bg-primary-hover hover:border-primary-hover",
            "focus:outline-none focus:outline-offset-0 focus:ring",
            "focus:ring-primary/50",
            { "cursor-default pointer-events-none opacity-60": context.disabled },
            // Interactivity
            "cursor-pointer user-select-none"
          ]
      }),
    label: {
      class: ["flex-initial", "w-0"]
    }
  },
  targetwrapper: {
    class: "grow shrink basis-2/4"
  },
  targetheader: {
    class: ["font-bold", "border-b-0 rounded-t-md", "p-5", "text-surface-700 dark:text-white/80", "bg-surface-50 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700"]
  },
  targetlist: {
    class: ["list-none m-0 p-0", "min-h-[12rem] max-h-[24rem]", "rounded-b-md", "text-surface-600 dark:text-white/80", "bg-surface-0 dark:bg-surface-800", "border border-surface-200 dark:border-surface-700", "py-3 px-0", "outline-none", "overflow-auto"]
  },
  transition: {
    enterFromClass: "!transition-none",
    enterActiveClass: "!transition-none",
    leaveActiveClass: "!transition-none",
    leaveToClass: "!transition-none"
  }
}