export default function decodeText(text: string) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;

    return textArea.value;
}
