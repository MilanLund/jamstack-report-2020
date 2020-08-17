window.initLine = (() => {
  const setChartLineItemsWidth = (chartLine, multiplier) => {
    const delay = 200;
    const lineItems = chartLine.querySelectorAll('.line__chart');

    let totalValue = 0;
    for (let i = 0; i < lineItems.length; i++) {
      totalValue += parseInt(lineItems[i].getAttribute('data-value'));
    }
    const rest = 100 - totalValue;

    setTimeout(() => {
      for (let i = 0; i < lineItems.length; i++) {
        let width = parseInt(lineItems[i].getAttribute('data-value'));

        if (i === (lineItems.length - 1)) {
          width += rest;
        }

        lineItems[i].style.width = `${width}%`;
        lineItems[i].classList.add('line__chart--rendered');
      }
    }, delay * multiplier);
  };

  const setLegendHeight = () => {
    const chartLegends = document.querySelectorAll('.line__column--chart [data-legend]');
    
    for (let i = 0; i < chartLegends.length; i++) {
      const height = chartLegends[i].clientHeight;
      const index = chartLegends[i].getAttribute('data-legend');

      const titleLegend =  document.querySelector(`.line__column--title [data-legend="${index}"]`);
      if (titleLegend) {
        titleLegend.style.height = `${height}px`;
      }
    }
  }; 

  return (line) => {
    if (!line) return;

    const chartLines = line.querySelectorAll('.line__line--chart');

    for (let i = 0; i < chartLines.length; i++) {
      setChartLineItemsWidth(chartLines[i], i);
    }

    setLegendHeight();
  };
})();

window.getHtmlLine = (state, preventLarge) => {
  let html = '';

  if (!preventLarge) {
    html += `
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
  }

  if (state.length > 1) {
    if (state[0].age && state[0].age.text === 'All') {
      state.shift();
    }
    //console.log(state)
    html += `
            <div class="line line--lines">
                <div class="line__column line__column--title${preventLarge ? ' line__column--sizing' : ''}">
                    ${state.map((item) => {
                        const text = item.age ? item.age.text : item.text;
                        return `${item.text ? `<div class="line__line line__line--legend" data-legend="${item.id}"></div>` : ''}<div class="line__line line__line--title">${text}</div>`
                    }).join('')}
                </div>
                <div class="line__column line__column--chart">
                    ${state.map((item) => {
                        const answersOptions = item.answers ? item.answers : item.options
                        return `
                            ${!!item.text ? `<div class="line__line line__line--legend" data-legend="${item.id}">
                              ${answersOptions.map(item => {
                                let html = `<div class="legend">
                                              <div class="line__chart--${item.color} legend__color"></div>
                                              <div class="legend__title">${item.text}</div>
                                              ${item.note ? `
                                                <div class="legend__note">
                                                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M17 9A8 8 0 111 9a8 8 0 0116 0z" stroke="#231F20" stroke-width="2" stroke-linecap="round"/><path d="M8.082 13.264h1.822V8H8.082v5.264zm-.215-7.4c0-.624.467-1.128 1.127-1.128.66 0 1.139.504 1.139 1.128 0 .612-.479 1.115-1.139 1.115a1.1 1.1 0 01-1.127-1.115z" fill="#231F20"/></g></svg>
                                                  <div class="legend__bubble">${item.note}</div>
                                                </div>
                                                ` : ''}
                                            </div>`;
                                return html;
                              }).join('')}
                            </div>` : ''}
                            <div class="line__line line__line--chart">
                                ${answersOptions.map((answer) => {
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
                ${preventLarge === true ? '' : `
                  <div class="line__column line__column--num">
                      ${state.map((item) => {
                          return `<div class="line__line line__line--num">${item.answersNum}</div>`
                      }).join('')}
                  </div>
                `}
            </div>
        `;
  }

  return html;
};