import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
                style={{ width: '100%', marginBottom: '20px' }}
            />
            <div style={{ width: '100%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

// Example usage:
const inputSentence = "hello world from copilot";
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence); // Output: "Copilot from world hello"
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.placeholder = 'Enter a sentence';
    inputField.style.marginBottom = '10px';

    const reverseButton = document.createElement('button');
    reverseButton.textContent = 'Reverse Sentence';

    const resultDiv = document.createElement('div');
    resultDiv.style.marginTop = '10px';

    reverseButton.addEventListener('click', () => {
        const inputSentence = inputField.value;
        const reversedSentence = reverseSentence(inputSentence);
        resultDiv.textContent = reversedSentence;
    });

    document.body.appendChild(inputField);
    document.body.appendChild(reverseButton);
    document.body.appendChild(resultDiv);
});