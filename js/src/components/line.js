(() => {
    const setChartLineItemsWidth = (chartLine, multiplier) => {
        const delay = 200;
        const lineItems = chartLine.querySelectorAll('.line__chart');

        setTimeout(() => {
            for(let i = 0; i < lineItems.length; i++) {
                let width = lineItems[i].getAttribute('data-value');
                lineItems[i].style.width = `${width}%`;
                lineItems[i].classList.add('line__chart--rendered')
            }
        }, delay * multiplier);
    };

    const initLine = (line) => {
        if (!line) return;

        const chartLines = line.querySelectorAll('.line__line--chart');

        for (let i = 0; i < chartLines.length; i++) {
            setChartLineItemsWidth(chartLines[i], i);
        }
    };
    
    initLine(document.querySelector('[data-item="q1"]'));
    initLine(document.querySelector('[data-item="q1-lg"]'));
})();