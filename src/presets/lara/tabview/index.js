export default {
  navContainer: ({ props }) => ({
      class: [
        // Position
        "relative",
        // Misc
        { "overflow-hidden": props.scrollable }
      ]
    }),
  navContent: {
    class: ["overflow-y-hidden overscroll-contain", "overscroll-auto", "scroll-smooth", "[&::-webkit-scrollbar]:hidden"]
  },
  previousButton: {
    class: ["flex items-center justify-center", "!absolute", "top-0 left-0", "z-20", "h-full w-12", "rounded-none", "bg-surface-0 dark:bg-surface-800", "text-primary", "shadow-md"]
  },
  nextButton: {
    class: ["flex items-center justify-center", "!absolute", "top-0 right-0", "z-20", "h-full w-12", "rounded-none", "bg-surface-0 dark:bg-surface-800", "text-primary", "shadow-md"]
  },
  nav: {
    class: ["flex flex-1", "list-none", "p-0 m-0", "bg-surface-0 dark:bg-surface-800", "border-b-2 border-surface-200 dark:border-surface-700", "text-surface-900 dark:text-surface-0/80"]
  },
  tabpanel: {
    header: ({ props }) => ({
          class: [
            // Spacing
            "mr-0",
            // Misc
            {
              "opacity-60 cursor-default user-select-none select-none pointer-events-none": props == null ? void 0 : props.disabled
            }
          ]
      }),
    headerAction: ({ parent, context }) => ({
          class: [
            "relative",
            // Font
            "font-bold",
            // Flexbox and Alignment
            "flex items-center",
            // Spacing
            "p-5",
            "-mb-[2px]",
            // Shape
            "border-b-2",
            "rounded-t-md",
            // Colors and Conditions
            {
              "border-surface-200 dark:border-surface-700": parent.state.d_activeIndex !== context.index,
              "bg-surface-0 dark:bg-surface-800": parent.state.d_activeIndex !== context.index,
              "text-surface-700 dark:text-surface-0/80": parent.state.d_activeIndex !== context.index,
              "bg-surface-0 dark:bg-surface-800": parent.state.d_activeIndex === context.index,
              "border-primary": parent.state.d_activeIndex === context.index,
              "text-primary": parent.state.d_activeIndex === context.index
            },
            // States
            "focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring focus-visible:ring-inset",
            "focus-visible:ring-primary-400/50 dark:focus-visible:ring-primary-300/50",
            {
              "hover:bg-surface-0 dark:hover:bg-surface-800/80": parent.state.d_activeIndex !== context.index,
              "hover:border-surface-400 dark:hover:border-primary-400": parent.state.d_activeIndex !== context.index,
              "hover:text-surface-900 dark:hover:text-surface-0": parent.state.d_activeIndex !== context.index
            },
            // Transitions
            "transition-all duration-200",
            // Misc
            "cursor-pointer select-none text-decoration-none",
            "overflow-hidden",
            "user-select-none"
          ]
      }),
    headerTitle: {
      class: ["leading-none", "whitespace-nowrap"]
    },
    content: {
      class: ["p-5", "rounded-b-md", "bg-surface-0 dark:bg-surface-800", "text-surface-700 dark:text-surface-0/80", "border-0"]
    }
  }
}