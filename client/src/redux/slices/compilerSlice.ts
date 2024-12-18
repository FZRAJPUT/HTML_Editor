import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompilerState {
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    };
    currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerState = {
    fullCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Compiler</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="welcome-container">
        <div class="background"></div>
        <div class="content">
            <h1 id="hero-text">Code. Compile. <span id="dynamic-text">Learn</span>.</h1>
            <p>Write and test your HTML, CSS, and JavaScript in real-time.</p>
        </div>
    </div>
</body>
</html>`,
        css: `/* Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%;
    font-family: 'Roboto', sans-serif;
}

/* Welcome Container */
.welcome-container {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* Background Animation */
.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, #1e1e2f, #282a36);
    background-size: 200% 200%;
    animation: gradientMove 6s infinite;
    z-index: -1;
}

/* Hero Content */
.content {
    text-align: center;
    color: white;
    z-index: 1;
}

.content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

#dynamic-text {
    color: #4caf50;
}

.content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

/* Animation */
@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}`,
javascript: `// Dynamic Text Animation
const dynamicText = document.getElementById('dynamic-text');
const words = ['Learn', 'Build', 'Innovate'];
let wordIndex = 0;

function changeWord() {
    wordIndex = (wordIndex + 1) % words.length;
    dynamicText.textContent = words[wordIndex];
}

setInterval(changeWord, 2000);`,
    },
    currentLanguage: "html",
};

const compilerSlice = createSlice({
    name: "compilerSlice",
    initialState,
    reducers: {
        updateCurrentLanguage: (state, action: PayloadAction<CompilerState["currentLanguage"]>) => {
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (state, action: PayloadAction<string>) => {
            state.fullCode[state.currentLanguage] = action.payload;
        },

    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;
