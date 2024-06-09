export default {
  root: ({ props, state, parent }) => ({
      class: [
        // Font
        "leading-none",
        // Display and Position
        "inline-flex",
        "relative",
        // Shape
        "rounded-md",
        // Color and Background
        { "bg-surface-0 dark:bg-surface-950": !props.disabled },
        "border",
        { "border-surface-300 dark:border-surface-600": !props.invalid },
        // Invalid State
        "invalid:focus:ring-red-200",
        "invalid:hover:border-red-500",
        { "border-red-500 dark:border-red-400": props.invalid },
        // Transitions
        "transition-all",
        "duration-200",
        // States
        { "hover:border-surface-400 dark:hover:border-surface-700": !props.invalid },
        { "outline-none outline-offset-0 z-10 ring-1 ring-primary-500 dark:ring-primary-400": state.focused },
        // Misc
        "cursor-pointer",
        "select-none",
        { "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled }
      ]
    }),
  labelContainer: {
    class: "overflow-hidden flex flex-auto cursor-pointer "
  },
  label: ({ props }) => {
      var _a, _b, _c, _d;
      return {
        class: [
          "leading-none",
          "block",
          // Spacing
          {
            "py-2 px-3": props.display === "comma" || props.display === "chip" && !((_a = props == null ? void 0 : props.modelValue) != null && _a.length),
            "py-1 px-1": props.display === "chip" && ((_b = props == null ? void 0 : props.modelValue) == null ? void 0 : _b.length) > 0
          },
          // Color
          { "text-surface-800 dark:text-white/80": (_c = props.modelValue) == null ? void 0 : _c.length, "text-surface-400 dark:text-surface-500": !((_d = props.modelValue) != null && _d.length) },
          "placeholder:text-surface-400 dark:placeholder:text-surface-500",
          // Transitions
          "transition duration-200",
          // Misc
          "overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis"
        ]
      };
    },
  token: {
    class: ["inline-flex items-center", "py-1 px-3 m-0 mr-1", "rounded", "bg-surface-100 dark:bg-surface-700", "text-surface-700 dark:text-white", "cursor-default"]
  },
  removeTokenIcon: {
    class: ["ml-[0.375rem]", "w-4 h-4", "cursor-pointer"]
  },
  trigger: {
    class: ["flex items-center justify-center", "shrink-0", "bg-transparent", "text-surface-500", "w-12", "rounded-r-md"]
  },
  panel: {
    class: ["bg-surface-0 dark:bg-surface-900", "text-surface-700 dark:text-white/80", "border border-surface-300 dark:border-surface-700", "rounded-md", "shadow-md"]
  },
  header: {
    class: ["flex items-center justify-between", "pt-2 px-4 pb-0", "m-0", "border-b-0", "rounded-tl-md", "rounded-tr-md", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-900", "border-surface-300 dark:border-surface-700"]
  },
  headerCheckboxContainer: {
    class: ["relative", "inline-flex", "align-bottom", "w-5", "h-5", "mr-2", "cursor-pointer", "select-none"]
  },
  headerCheckbox: {
    root: {
      class: ["relative", "inline-flex", "align-bottom", "w-5", "h-5", "mr-2", "cursor-pointer", "select-none"]
    },
    box: ({ props, context }) => ({
          class: [
            // Alignment
            "flex",
            "items-center",
            "justify-center",
            // Size
            "w-5",
            "h-5",
            // Shape
            "rounded",
            "border",
            // Colors
            {
              "border-surface-300 dark:border-surface-700": !context.checked && !props.invalid,
              "bg-surface-0 dark:bg-surface-950": !context.checked && !props.invalid && !props.disabled,
              "border-primary bg-primary": context.checked
            },
            // Invalid State
            "invalid:focus:ring-red-200",
            "invalid:hover:border-red-500",
            { "border-red-500 dark:border-red-400": props.invalid },
            // States
            {
              "peer-hover:border-surface-400 dark:peer-hover:border-surface-600": !props.disabled && !context.checked && !props.invalid,
              "peer-hover:bg-primary-hover peer-hover:border-primary-hover": !props.disabled && context.checked,
              "peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400": !props.disabled,
              "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled
            },
            // Transitions
            "transition-colors",
            "duration-200"
          ]
      }),
    input: {
      class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded", "outline-none", "border border-surface-300 dark:border-surface-700", "appearance-none", "cursor-pointer"]
    },
    icon: {
      class: ["w-[0.875rem]", "h-[0.875rem]", "text-white dark:text-surface-950", "transition-all", "duration-200"]
    }
  },
  itemCheckbox: {
    root: {
      class: ["relative", "inline-flex", "align-bottom", "w-5", "h-5", "mr-2", "cursor-pointer", "select-none"]
    },
    box: ({ props, context }) => ({
          class: [
            // Alignment
            "flex",
            "items-center",
            "justify-center",
            // Size
            "w-5",
            "h-5",
            // Shape
            "rounded",
            "border",
            // Colors
            {
              "border-surface-300 dark:border-surface-700": !context.checked && !props.invalid,
              "bg-surface-0  dark:bg-surface-950": !context.checked && !props.invalid && !props.disabled,
              "border-primary bg-primary": context.checked
            },
            // Invalid State
            "invalid:focus:ring-red-200",
            "invalid:hover:border-red-500",
            { "border-red-500 dark:border-red-400": props.invalid },
            // States
            {
              "peer-hover:border-surface-400 dark:peer-hover:border-surface-600": !props.disabled && !context.checked && !props.invalid,
              "peer-hover:bg-primary-hover peer-hover:border-primary-hover": !props.disabled && context.checked,
              "peer-focus-visible:z-10 peer-focus-visible:outline-none peer-focus-visible:outline-offset-0 peer-focus-visible:ring-1 peer-focus-visible:ring-primary-500 dark:peer-focus-visible:ring-primary-400": !props.disabled,
              "bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default": props.disabled
            },
            // Transitions
            "transition-colors",
            "duration-200"
          ]
      }),
    input: {
      class: ["peer", "w-full ", "h-full", "absolute", "top-0 left-0", "z-10", "p-0", "m-0", "opacity-0", "rounded", "outline-none", "border border-surface-300 dark:border-surface-700", "appearance-none", "cursor-pointer"]
    },
    icon: {
      class: ["w-[0.875rem]", "h-[0.875rem]", "text-white dark:text-surface-950", "transition-all", "duration-200"]
    }
  },
  closeButton: {
    class: ["relative", "flex items-center justify-center", "ml-2", "last:mr-0", "w-8 h-8", "border-0", "rounded-full", "text-surface-500", "bg-transparent", "transition duration-200 ease-in-out", "hover:text-surface-700 dark:hover:text-white/80", "hover:bg-surface-100 dark:hover:bg-surface-800/80", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-inset", "focus:ring-primary-500 dark:focus:ring-primary-400", "overflow-hidden"]
  },
  closeButtonIcon: {
    class: "w-4 h-4 inline-block"
  },
  wrapper: {
    class: ["max-h-[200px]", "overflow-auto"]
  },
  list: {
    class: "p-1 list-none m-0"
  },
  item: ({ context }) => ({
      class: [
        "relative",
        // Font
        "leading-none",
        // Spacing
        "m-0 px-3 py-2",
        "first:mt-0 mt-[2px]",
        // Shape
        "border-0 rounded",
        // Colors
        {
          "text-surface-700 dark:text-white/80": !context.focused && !context.selected,
          "bg-surface-200 dark:bg-surface-600/60": context.focused && !context.selected,
          "text-surface-700 dark:text-white/80": context.focused && !context.selected,
          "text-primary-highlight-inverse": context.selected,
          "bg-primary-highlight": context.selected
        },
        //States
        { "hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]": !context.focused && !context.selected },
        { "hover:bg-primary-highlight-hover": context.selected },
        { "hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]": context.focused && !context.selected },
        // Transition
        "transition-shadow duration-200",
        // Misc
        "cursor-pointer overflow-hidden whitespace-nowrap"
      ]
    }),
  itemgroup: {
    class: ["font-semibold", "m-0 py-2 px-3", "text-surface-400 dark:text-surface-500", "cursor-auto"]
  },
  filtercontainer: {
    class: "relative"
  },
  filterinput: {
    class: ["leading-[normal]", "py-2 pl-3 pr-7", "-mr-7", "w-full", "text-surface-700 dark:text-white/80", "bg-surface-0 dark:bg-surface-950", "border-surface-200 dark:border-surface-700", "border", "rounded-lg", "appearance-none", "transition", "duration-200", "hover:border-surface-400 dark:hover:border-surface-600", "focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10", "appearance-none"]
  },
  filtericon: {
    class: ["absolute", "top-1/2 right-3", "-mt-2"]
  },
  clearicon: {
    class: ["text-surface-400 dark:text-surface-500", "absolute", "top-1/2", "right-12", "-mt-2"]
  },
  emptymessage: {
    class: ["leading-none", "py-2 px-3", "text-surface-800 dark:text-white/80", "bg-transparent"]
  },
  loadingicon: {
    class: "text-surface-400 dark:text-surface-500 animate-spin"
  },
  transition: {
    enterFromClass: "opacity-0 scale-y-[0.8]",
    enterActiveClass: "transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]",
    leaveActiveClass: "transition-opacity duration-100 ease-linear",
    leaveToClass: "opacity-0"
  }
}