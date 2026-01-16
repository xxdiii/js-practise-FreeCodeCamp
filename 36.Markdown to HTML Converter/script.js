const markdownInput=document.getElementById("markdown-input");
const htmlOutput=document.getElementById("html-output");
const htmlPreview=document.getElementById("preview");

function convertMarkdown(){
    let markdown=markdownInput.value;

    markdown = markdown.replace(/^\s*###\s+(.*)$/gm, '<h3>$1</h3>');
    markdown = markdown.replace(/^\s*##\s+(.*)$/gm, '<h2>$1</h2>');
    markdown = markdown.replace(/^\s*#\s+(.*)$/gm, '<h1>$1</h1>');
    markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
    markdown = markdown.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
    markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');
    markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
    markdown = markdown.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

    return markdown;
}

markdownInput.addEventListener("input",()=>{
    const markdownOutput=convertMarkdown();

    htmlOutput.textContent=markdownOutput;
    htmlPreview.innerHTML = markdownOutput;
})