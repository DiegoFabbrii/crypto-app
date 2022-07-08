module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            backgroundColor: {
                primary: "var(--color-bg-primary)",
                secondary: "var(--color-bg-secondary)",
                tertiary: "var(--color-bg-tertiary)",
                button: "var(--color-bg-button)",
            },
            textColor: {
                accent: "var(--color-text-accent)",
                primary: "var(--color-text-primary)",
                secondary: "var(--color-text-secondary)",
                btnText: "var(--color-bg-primary)",
            },
            borderColor: {
                primary: "var(--color-text-secondary)",
                secondary: "var(--color-bg-secondary)",
                tertiary: "var(--color-bg-tertiary)",
                input: "var(--color-bg-input)",
                accent: "var(--color-text-accent)",
            },

            gridTemplateColumns: {
                main: "60% 40%",
                coinPage: "70% 30%",
            },
        },
    },
    plugins: [],
};
