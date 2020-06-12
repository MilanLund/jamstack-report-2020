require('./chartState.js');
require('./line.js');
require('./bar.js');

(() => {
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
            case 7:
            case 8:
            case 9:
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
        let html = '';
        switch (window.stateSteps.active) {
            case 1:
            case 2:
                html = window.getHtmlLine(state);
                break;
            case 4:
            case 5:
            case 7:
            case 8:
            case 9:
            case 12:
            case 14:
                html = window.getHtmlBar(state);
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
            case 4:
            case 5:
            case 7:
            case 8:
            case 9:
            case 12:
            case 14:
                window.initBar(document.querySelector('.bar'));
                break;
            default:
        }

        
    };

    const renderChart = () => {
        const chartState = calculateChartState();
        renderChartStep(chartState);

        console.log('Render chart');
        console.log(window.stateSteps, window.stateFilter, window.stateAnswers);
        console.log(chartState);
    };

    ['stepUpdated', 'stateAnswersUpdated'].forEach((e) => {
        window.addEventListener(e, renderChart, false);
    });
})();