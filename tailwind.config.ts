import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    content: [
        "./app.vue",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./composables/**/*.{js,ts}",
        "./plugins/**/*.{js,ts}",
    ],

    theme: {
        container: {
            center: true,

            padding: {
                DEFAULT: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
                xl: "3rem",
            },

            screens: {
                "2xl": "1280px",
            },
        },

        extend: {
            /*
            |--------------------------------------------------------------------------
            | Colors
            |--------------------------------------------------------------------------
            */

            colors: {
                background: "#FFFFFF",

                foreground: "#18181B",

                surface: "#FAFAFA",

                border: "#E4E4E7",

                muted: "#71717A",

                primary: {
                    DEFAULT: "#18181B",

                    foreground: "#FFFFFF",
                },

                secondary: {
                    DEFAULT: "#F4F4F5",

                    foreground: "#18181B",
                },

                accent: {
                    DEFAULT: "#2563EB",

                    foreground: "#FFFFFF",
                },

                success: "#22C55E",

                warning: "#F59E0B",

                danger: "#EF4444",
            },

            /*
            |--------------------------------------------------------------------------
            | Typography
            |--------------------------------------------------------------------------
            */

            fontFamily: {
                sans: ["Inter", "sans-serif"],

                display: ["Plus Jakarta Sans", "sans-serif"],
            },

            fontSize: {
                display: [
                    "5rem",
                    {
                        lineHeight: "1",
                        fontWeight: "700",
                    },
                ],

                h1: [
                    "4rem",
                    {
                        lineHeight: "1.1",
                        fontWeight: "700",
                    },
                ],

                h2: [
                    "3rem",
                    {
                        lineHeight: "1.15",
                        fontWeight: "700",
                    },
                ],

                h3: [
                    "2.25rem",
                    {
                        lineHeight: "1.2",
                        fontWeight: "600",
                    },
                ],

                h4: [
                    "1.75rem",
                    {
                        lineHeight: "1.3",
                        fontWeight: "600",
                    },
                ],

                "body-lg": [
                    "1.125rem",
                    {
                        lineHeight: "1.8",
                    },
                ],

                body: [
                    "1rem",
                    {
                        lineHeight: "1.75",
                    },
                ],

                small: [
                    ".875rem",
                    {
                        lineHeight: "1.6",
                    },
                ],

                xs: [
                    ".75rem",
                    {
                        lineHeight: "1.5",
                    },
                ],
            },

            /*
            |--------------------------------------------------------------------------
            | Spacing Scale
            |--------------------------------------------------------------------------
            */

            spacing: {
                18: "4.5rem",
                22: "5.5rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
            },

            /*
            |--------------------------------------------------------------------------
            | Max Width
            |--------------------------------------------------------------------------
            */

            maxWidth: {
                content: "720px",

                reading: "840px",

                section: "1280px",
            },

            /*
            |--------------------------------------------------------------------------
            | Border Radius
            |--------------------------------------------------------------------------
            */

            borderRadius: {
                card: "28px",

                button: "9999px",

                badge: "9999px",

                section: "40px",
            },

            /*
            |--------------------------------------------------------------------------
            | Shadow
            |--------------------------------------------------------------------------
            */

            boxShadow: {
                card: "0 10px 30px rgba(0,0,0,.05)",

                "card-hover": "0 20px 60px rgba(0,0,0,.08)",

                floating: "0 30px 80px rgba(0,0,0,.12)",

                button: "0 8px 20px rgba(0,0,0,.08)",
            },

            /*
            |--------------------------------------------------------------------------
            | Transition
            |--------------------------------------------------------------------------
            */

            transitionDuration: {
                fast: "150ms",

                DEFAULT: "250ms",

                slow: "400ms",
            },

            /*
            |--------------------------------------------------------------------------
            | Backdrop Blur
            |--------------------------------------------------------------------------
            */

            backdropBlur: {
                glass: "20px",
            },

            /*
            |--------------------------------------------------------------------------
            | Z Index
            |--------------------------------------------------------------------------
            */

            zIndex: {
                navbar: "50",

                dropdown: "60",

                overlay: "90",

                modal: "100",

                toast: "110",
            },

            /*
            |--------------------------------------------------------------------------
            | Background
            |--------------------------------------------------------------------------
            */

            backgroundImage: {
                gradient:
                    "linear-gradient(180deg,#FFFFFF 0%,#F8F9FB 100%)",

                radial:
                    "radial-gradient(circle at center, rgba(37,99,235,.12), transparent 70%)",
            },

            /*
            |--------------------------------------------------------------------------
            | Animation
            |--------------------------------------------------------------------------
            */

            keyframes: {
                float: {
                    "0%,100%": {
                        transform: "translateY(0px)",
                    },

                    "50%": {
                        transform: "translateY(-10px)",
                    },
                },

                fadeUp: {
                    "0%": {
                        opacity: "0",

                        transform: "translateY(20px)",
                    },

                    "100%": {
                        opacity: "1",

                        transform: "translateY(0)",
                    },
                },
            },

            animation: {
                float: "float 6s ease-in-out infinite",

                "fade-up": "fadeUp .6s ease forwards",
            },
        },
    },

    plugins: [],
};