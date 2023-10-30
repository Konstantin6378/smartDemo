/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    checkbox: {
      defaultProps: {
        color: "black",
        label: undefined,
        icon: undefined,
        ripple: true,
        className: "",
        disabled: false,
        containerProps: undefined,
        labelProps: undefined,
        iconProps: undefined,
      },
      valid: {
        colors: "black",
      },
      styles: {
        base: {
          root: {
            display: "inline-flex",
            alignItems: "items-center",
          },
          container: {
            position: "relative",
            display: "flex",
            alignItems: "items-center",
            cursor: "cursor-pointer",
            p: "p-0",
            borderRadius: "rounded-full",
          },
          input: {
            peer: "peer",
            position: "relative",
            appearance: "appearance-none",
            width: "w-10",
            height: "h-10",
            borderWidth: "border",
            borderRadius: "rounded-md",
            borderColor: "border-black",
            cursor: "cursor-pointer",
            transition: "transition-all",
            before: {
              content: "before:content['']",
              display: "before:block",
              bg: "before:bg-black",
              width: "before:w-12",
              height: "before:h-12",
              borderRadius: "before:rounded-full",
              position: "before:absolute",
              top: "before:top-2/4",
              left: "before:left-2/4",
              transform: "before:-translate-y-2/4 before:-translate-x-2/4",
              opacity: "before:opacity-0 hover:before:opacity-10",
              transition: "before:transition-opacity",
            },
          },
          label: {
            color: "text-gray-700",
            fontWeight: "font-light",
            userSelect: "select-none",
            cursor: "cursor-pointer",
            mt: "mt-px",
            p: 'p-0 !important'
          },
          icon: {
            color: "text-white",
            position: "absolute",
            top: "top-2/4",
            left: "left-2/4",
            translate: "-translate-y-2/4 -translate-x-2/4",
            pointerEvents: "pointer-events-none",
            opacity: "opacity-0 peer-checked:opacity-100",
            transition: "transition-opacity",
          },
          disabled: {
            opacity: "opacity-50",
            pointerEvents: "pointer-events-none",
          },
        },
        colors: {
          "black-gray": {
            background: "checked:bg-black",
            border: "checked:border-black",
            before: "checked:before:bg-black",
          },
          black: {
            background: "checked:bg-black",
            border: "checked:border-black",
            before: "checked:before:bg-black",
          },
        
          
        },
      },
    },
    extend: {
      backgroundImage: {
        'video-pattern': "url('/video.png')",
        'main-page': "url('/promo-zone.png')",
      }
    },
  },
  plugins: [],
});
