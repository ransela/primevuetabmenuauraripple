export default {
  root: ({ props }) => ({
      class: ["inline-flex relative", { "[&>input]:pr-10": props.toggleMask }]
    }),
  panel: {
    class: ["p-3", "border", "shadow-md rounded-md", "bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "border-surface-200 dark:border-surface-700"]
  },
  meter: {
    class: ["overflow-hidden", "relative", "border-0", "h-[10px]", "rounded-md", "mb-3", "bg-surface-100 dark:bg-surface-700"]
  },
  meterlabel: ({ instance }) => {
      var _a, _b, _c;
      return {
        class: [
          // Size
          "h-full",
          // Colors
          {
            "bg-red-500 dark:bg-red-400/50": ((_a = instance == null ? void 0 : instance.meter) == null ? void 0 : _a.strength) == "weak",
            "bg-orange-500 dark:bg-orange-400/50": ((_b = instance == null ? void 0 : instance.meter) == null ? void 0 : _b.strength) == "medium",
            "bg-green-500 dark:bg-green-400/50": ((_c = instance == null ? void 0 : instance.meter) == null ? void 0 : _c.strength) == "strong"
          },
          // Transitions
          "transition-all duration-1000 ease-in-out"
        ]
      };
    },
  showicon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  hideicon: {
    class: ["absolute top-1/2 right-3 -mt-2 z-10", "text-surface-600 dark:text-white/70"]
  },
  input: {
    root: ({ props, context, parent }) => {
          var _a, _b, _c;
          return {
            class: [
              // Font
              "leading-none",
              // Flex
              { "flex-1 w-[1%]": parent.instance.$name == "InputGroup" },
              // Spacing
              "m-0",
              {
                "py-3 px-3.5": props.size == "large",
                "py-1.5 px-2": props.size == "small",
                "py-2 px-3": props.size == null
              },
              // Shape
              { "rounded-md": parent.instance.$name !== "InputGroup" },
              { "first:rounded-l-md rounded-none last:rounded-r-md": parent.instance.$name == "InputGroup" },
              { "border-0 border-y border-l last:border-r": parent.instance.$name == "InputGroup" },
              { "first:ml-0 -ml-px": parent.instance.$name == "InputGroup" && !props.showButtons },
              // Colors
              "text-surface-800 dark:text-white/80",
              "placeholder:text-surface-400 dark:placeholder:text-surface-500",
              { "bg-surface-0 dark:bg-surface-950": !context.disabled },
              "border",
              { "border-surface-300 dark:border-surface-700": !props.invalid },
              // Invalid State
              "invalid:focus:ring-red-200",
              "invalid:hover:border-red-500",
              { "border-red-500 dark:border-red-400": props.invalid },
              // States
              {
                "hover:border-surface-400 dark:hover:border-surface-600": !context.disabled && !props.invalid,
                "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10": !context.disabled,
                "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": context.disabled
              },
              // Filled State *for FloatLabel
              { filled: ((_b = (_a = parent.instance) == null ? void 0 : _a.$parentInstance) == null ? void 0 : _b.$name) == "FloatLabel" && parent.props.modelValue !== null && ((_c = parent.props.modelValue) == null ? void 0 : _c.length) !== 0 },
              // Misc
              "appearance-none",
              "transition-colors duration-200"
            ]
          };
      }
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}