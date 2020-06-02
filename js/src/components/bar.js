(() => {
    const bars = document.querySelectorAll('.bar');
    
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
    
    const initBar = (bar) => {
        const chartLines = bar.querySelectorAll('.bar__chart');

        for (let i = 0; i < chartLines.length; i++) {
            setChartLineWidth(bar, chartLines[i], i);
        }
    };

    const initPageBars = () => {
        const bars = document.querySelectorAll('.bar');

        for (let i = 0; i < bars.length; i++) {
            initBar(bars[i]);
        }
    };

    // initPageBars();

    initBar(document.querySelector('[data-item="q7"]'));
})();