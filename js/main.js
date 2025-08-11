function clickLink(url, newTab = false) {
    const el = document.getElementById(url);
    if (el && el.tagName.toLowerCase() === 'a') {
        el.click();
        return;
    }
    const a = document.createElement('a');
    a.href = url;
    if (newTab) a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}