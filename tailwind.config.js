module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: [
            {
                light: {
                    "primary": "#176f6b",       
                    "secondary": "#ffc000",       
                    "accent": "#ffedd5",       
                    "neutral": "#f3f4f6",       
                    "base-100": "#ffffff",       
                    "info": "#98a8dd",       
                    "success": "#1bbb70",       
                    "warning": "#df7e07",       
                    "error": "#fa5c5c",
                },
            },
            {
                dark: {
                    "primary": "#D9F99D",       
                    "secondary": "#FDE68A",       
                    "accent": "#4B5563",       
                    "neutral": "#F3F4F6",       
                    "base-100": "#1F2937",       
                    "info": "#98A8DD",       
                    "success": "#1BBB70",       
                    "warning": "#F59E0B",       
                    "error": "#FB7185",
                },
            },

        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "light",
    },
  }