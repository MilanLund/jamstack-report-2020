(() => {
    const renderChart = () => {
        // implement charts here

        // recognize chart type

        // count needed values

        // render chart
        
        console.log('Render chart');
        console.log(window.stateSteps, window.stateFilter, window.stateAnswers);
    };

    ['stepUpdated', 'stateAnswersUpdated'].forEach((e) => {
        window.addEventListener(e, renderChart, false);
    });
})();