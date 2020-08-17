require('./chartState.js');
require('./line.js');
require('./bar.js');

(() => {
    const getHtmlQuestion = () => {
        let html = '';
        let question = window.questions.filter(item => window.stateSteps.active === item.id);
        if (!question.length) return html;

        return `
            <div class="chart__question">
                <h2 class="chart__heading"><span class="chart__heading-num">${question[0].id}</span>${question[0].text}</h2>
                ${question[0].description ? `<p class="chart__description">${question[0].description}</p>` : ''}
                ${question[0].note ? `<p class="chart__note">${question[0].note}</p>` : ''}
                ${question[0].subnote ? `<p class="chart__subnote">${question[0].subnote}</p>` : ''}
                <p class="chart__n">N = ${window.stateSteps.n} developers${window.stateSteps.justJamstack ? ' who work with the Jamstack' : ''}</p>
                ${question[0].img ? `<img class="chart__img" src="${question[0].img}" />` : ''}
            </div>
        `
    };

    const calculateChartState = () => {
        let state;
        switch (window.stateSteps.active) {
            case 1:
            case 2:
                state = window.getByAgeState();
                break;
            case 3:
                state = window.getByOrderState();
                break;
            case 4:
                state = window.getByOptionsState();
                break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 13:
                state = window.getByMultipleState();
                break;
            case 12:
            case 14:
                state = window.getBySingleState();
                break;
            default:
        }

        return state;
    };

    const renderChartStep = (state) => {
        let html = getHtmlQuestion();
        switch (window.stateSteps.active) {
            case 1:
            case 2:
                html += window.getHtmlLine(state);
                break;
            case 3:
              html += window.getHtmlBar(state);
                break;
            case 4:
              html += window.getHtmlLine(state, true);
              break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                html += window.getHtmlBar(state);
                break;
            default:
        }

        document.querySelector('.chart').innerHTML = html;

        switch (window.stateSteps.active) {
            case 1:
            case 2:
                window.initLine(document.querySelector('.line--large'));
                window.initLine(document.querySelector('.line--lines'));
                break;
            case 3:
              window.initBar(document.querySelector('.bar'));
              break;
            case 4:
              window.initLine(document.querySelector('.line--lines'));
              break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
                window.initBar(document.querySelector('.bar'));
                break;
            default:
        }

        
    };

    const renderChart = () => {
        if (!window.stateSteps || !window.stateAnswers) return;
        const chartState = calculateChartState();
        renderChartStep(chartState);

        //console.log('Render chart');
        //console.log(window.stateSteps, window.stateFilter, window.stateAnswers);
        //console.log(chartState);
    };

    ['stepUpdated', 'stateAnswersUpdated'].forEach((e) => {
        window.addEventListener(e, renderChart, false);
    });
})();