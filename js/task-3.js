function getElementWidth(content, padding, border) {
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const width = parseFloat(content) + 2 * (paddingValue + borderValue);
    
    return width;
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));