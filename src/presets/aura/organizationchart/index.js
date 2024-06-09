export default {
  table: {
    class: ["mx-auto my-0", "border-spacing-0 border-separate"]
  },
  cell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  node: ({ context }) => ({
      class: [
        "relative inline-block",
        // Spacing
        "py-3 px-4",
        // Shape
        "border",
        "rounded-md",
        "border-surface-200 dark:border-surface-700",
        // Color
        {
          "text-surface-600 dark:text-white/80": !(context != null && context.selected),
          "bg-surface-0 dark:bg-surface-900": !(context != null && context.selected),
          "text-primary-highlight-inverse": context == null ? void 0 : context.selected,
          "bg-primary-highlight": context == null ? void 0 : context.selected
        },
        // States
        {
          "hover:bg-surface-100 dark:hover:bg-surface-800": (context == null ? void 0 : context.selectable) && !(context != null && context.selected),
          "hover:bg-primary-highlight-hover": (context == null ? void 0 : context.selectable) && (context == null ? void 0 : context.selected)
        },
        { "cursor-pointer": context == null ? void 0 : context.selectable }
      ]
    }),
  linecell: {
    class: ["text-center align-top", "py-0 px-3"]
  },
  linedown: {
    class: ["mx-auto my-0", "w-px h-[20px]", "bg-surface-200 dark:bg-surface-700"]
  },
  lineleft: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none border-r",
        { "border-t": context.lineTop },
        // Color
        "border-surface-200 dark:border-surface-700"
      ]
    }),
  lineright: ({ context }) => ({
      class: [
        // Alignment
        "text-center align-top",
        // Spacing
        "py-0 px-3",
        // Shape
        "rounded-none",
        // Color
        { "border-t border-surface-200 dark:border-surface-700": context.lineTop }
      ]
    }),
  nodecell: {
    class: "text-center align-top py-0 px-3"
  },
  nodetoggler: {
    class: ["absolute bottom-[-0.75rem] left-2/4 -ml-3", "z-20", "flex items-center justify-center", "w-6 h-6", "rounded-full", "border border-surface-200 dark:border-surface-700", "bg-inherit text-inherit", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400", "cursor-pointer no-underline select-none"]
  },
  nodetogglericon: {
    class: ["static inline-block", "w-4 h-4"]
  }
}