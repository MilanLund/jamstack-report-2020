window.initBar = (() => {    
    const calculateRelativeChartLineWidth = (bar, width) => {
        const chartLines = bar.querySelectorAll('.bar__chart');
        const sizes = Array.from(chartLines).map((chartLine) => {
            return chartLine.getAttribute('data-value');
        });
        const maxSize = Math.max.apply(Math, sizes);
        return 100 / maxSize * width;
    };

    const setChartLineWidth = (bar, chartLine, multiplier) => {
        const delay = 200;
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        setTimeout(() => {
            let width = chartLine.getAttribute('data-value');

            if (vw < 768) {
                width = calculateRelativeChartLineWidth(bar, width);
            }

            chartLine.style.width = `${width}%`;
        }, delay * multiplier);
    };

    const setLinesHeight = (bar) => {
      const titles = bar.querySelectorAll('.bar__line--title');
      const charts = bar.querySelectorAll('.bar__line--chart');

      for (let i = 0; i < titles.length; i++) {
        const height = titles[i].offsetHeight;
        charts[i].style.height = `${height}px`;
      }
    };
    
    return (bar) => {
        if (!bar) return;
        
        const chartLines = bar.querySelectorAll('.bar__chart');

        for (let i = 0; i < chartLines.length; i++) {
            setChartLineWidth(bar, chartLines[i], i);
        }

        setLinesHeight(bar);
    };
})();

window.getHtmlBar = (state) => {
    return `
        <div class="bar">
            <div class="bar__column bar__column--title">
                ${state.map((item) => {
                    return `<div class="bar__line bar__line--title">${item.text}</div>`;
                }).join('')}
            </div>
            <div class="bar__column bar__column--chart">
                <div class="bar__grid">
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                    <div class="bar__grid-line"></div>
                </div>
                ${state.map((item) => {
                    return `
                        <div class="bar__line bar__line--chart">
                            <div class="bar__chart bar__chart--${item.color}" data-value="${item.percentage}"></div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}