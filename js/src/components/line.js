window.initLine = (() => {
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

    return (line) => {
        if (!line) return;

        const chartLines = line.querySelectorAll('.line__line--chart');

        for (let i = 0; i < chartLines.length; i++) {
            setChartLineItemsWidth(chartLines[i], i);
        }
    };
})();

window.getHtmlLine = (state) => {
    let html = `
        <div class="line line--large">
            <div class="line__column line__column--chart">
                <div class="line__line line__line--chart">
                    ${state[0].answers.map((item) => {
                        let html = '';
                        if (item.percentage > 0) {
                            html = `
                                <div class="line__chart line__chart--${item.color}" data-value="${item.percentage}">
                                    <span class="line__chart-title">${item.text}</span>
                                </div>
                            `;
                        }
                        return html;
                    }).join('')}
                </div>
            </div>
        </div>
    `;

    if (state.length > 1) {
        state.shift();

        html += `
            <div class="line line--lines">
                <div class="line__column line__column--title">
                    ${state.map((item) => {
                        return `<div class="line__line line__line--title">${item.age.text}</div>`
                    }).join('')}
                </div>
                <div class="line__column line__column--chart">
                    ${state.map((item) => {
                        return `
                            <div class="line__line line__line--chart">
                                ${item.answers.map((answer) => {
                                    let html = '';
                                    if (answer.percentage > 0) {
                                        html = `<div class="line__chart line__chart--${answer.color}" data-value="${answer.percentage}"></div>`
                                    }
                                    return html;
                                }).join('')}
                            </div>
                        `
                    }).join('')}
                </div>
                <div class="line__column line__column--num">
                    ${state.map((item) => {
                        return `<div class="line__line line__line--num">${item.answersNum}</div>`
                    }).join('')}
                </div>
            </div>
        `;

    }

    return html;
};