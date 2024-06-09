export default {
  root: {
    class: ["rounded-md", "min-w-[12rem]", "p-1", "bg-surface-0 dark:bg-surface-900", "border border-surface-200 dark:border-surface-700"]
  },
  menu: {
    class: ["list-none", "m-0", "p-0", "outline-none"]
  },
  menuitem: {
    class: "relative my-[2px] [&:first-child]:mt-0"
  },
  content: ({ context }) => ({
      class: [
        //Shape
        "rounded-[4px]",
        // Colors
        "text-surface-700 dark:text-white/80",
        {
          "text-surface-500 dark:text-white/70": !context.focused && !context.active,
          "text-surface-500 dark:text-white/70 bg-surface-200": context.focused && !context.active,
          "text-primary-highlight-inverse bg-primary-highlight": context.focused && context.active || context.active || !context.focused && context.active
        },
        // Transitions
        "transition-shadow",
        "duration-200",
        // States
        {
          "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.active,
          "hover:bg-primary-highlight-hover text-primary-highlight-inverse": context.active
        },
        // Disabled
        { "opacity-60 pointer-events-none cursor-default": context.disabled }
      ]
    }),
  action: {
    class: ["relative", "flex", "items-center", "py-2", "px-3", "text-surface-700 dark:text-white/80", "no-underline", "overflow-hidden", "cursor-pointer", "select-none"]
  },
  icon: {
    class: ["mr-2", "text-surface-600 dark:text-white/70"]
  },
  label: {
    class: ["leading-none"]
  },
  submenuicon: {
    class: ["ml-auto"]
  },
  submenu: {
    class: ["p-1", "m-0", "list-none", "min-w-[12.5rem]", "shadow-none sm:shadow-md", "border border-surface-200 dark:border-surface-700", "static sm:absolute", "z-10", "bg-surface-0 dark:bg-surface-900"]
  },
  separator: {
    class: "border-t border-surface-200 dark:border-surface-600 my-[2px]"
  }
}