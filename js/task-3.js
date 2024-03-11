function getElementWidth(content, padding, border) {
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const width = parseFloat(content) + 2 * (paddingValue + borderValue);
    
    return width;
}