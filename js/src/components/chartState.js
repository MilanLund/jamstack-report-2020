window.getBySingleState = () => {
    const state = window.questions.filter((item) => item.id === window.stateSteps.active)[0].answers;

    state.map((item) => {
        item.value = 0;
        item.percentage = 0;
        return item;
    });

    let answers;
    if (window.stateSteps.active === 14) {
        answers = window.stateAnswers;
        window.stateSteps.justJamstack = false;
    } else {
        answers = window.stateAnswers.filter((item) => item.answers[1].answer !== 1);
        window.stateSteps.justJamstack = true;
    }

    window.stateSteps.n = answers.length;

    for (let i = 0; i < answers.length; i++) {
        const option = answers[i].answers.filter((item) => item.id === window.stateSteps.active)[0].answer;
        for (let k = 0; k < state.length; k++) {
            if (state[k].id === option) {
                state[k].value += 1;
            }
        };
    }

    for (let k = 0; k < state.length; k++) {
        state[k].percentage = Math.round(state[k].value / answers.length * 100);
    }

    state.sort((a, b) => (b.percentage - a.percentage));

    return state;
};

window.getByMultipleState = () => {
    const state = window.questions.filter((item) => item.id === window.stateSteps.active)[0].answers;

    state.map((item) => {
        item.value = 0;
        item.percentage = 0;
        return item;
    });
    
    let answers;

    if (window.stateSteps.active === 13) {
      answers = window.stateAnswers;
    } else {
      answers = window.stateAnswers.filter((item) => item.answers[1].answer !== 1);
    }

    window.stateSteps.justJamstack = true;
    window.stateSteps.n = answers.length;

    for (let i = 0; i < answers.length; i++) {
        const options = answers[i].answers.filter((item) => item.id === window.stateSteps.active)[0].answer;
        
        for (let j = 0; j < options.length; j++) {
          for (let k = 0; k < state.length; k++) {
                if (state[k].id === options[j]) {
                    state[k].value += 1;
                }

            }
        };
    }
    
    for (let k = 0; k < state.length; k++) {
        state[k].percentage = Math.round(state[k].value / answers.length * 100);
    }

    state.sort((a, b) => (b.percentage - a.percentage));

    const moveToTheEnd = (arr, id) => {
      arr.map((elem, index) => {
        if(elem.id === id){
          arr.splice(index, 1);
          arr.push(elem);
        }
      })
      return arr;
    }

    if (window.stateSteps.active === 13) {
      moveToTheEnd(state, 14);
      moveToTheEnd(state, 15);
    }

    if (window.stateSteps.active === 6) {
      moveToTheEnd(state, 20);
    }

    if (window.stateSteps.active === 10) {
      moveToTheEnd(state, 18);
    }

    if (window.stateSteps.active === 11) {
      moveToTheEnd(state, 13);
    }
    
    return state;
};

window.getByOptionsState = () => {
    const getAllOptionsValue = (options) => {
        let totalValue = 0;

        for (let i = 0; i < options.length; i++) {
            totalValue += options[i].value;
        }

        return totalValue;
    };

    const state = window.questions.filter((item) => item.id === window.stateSteps.active)[0].answers;

    for (let i = 0; i < state.length; i++) {
        state[i].options.map((item) => {
            item.value = 0;
            item.percentage = 0;
            return item;
        });
    }

    const answers = window.stateAnswers.filter((item) => item.answers[1].answer !== 1);
    window.stateSteps.justJamstack = true;
    window.stateSteps.n = answers.length;

    for (let i = 0; i < answers.length; i++) {
        const options = answers[i].answers.filter((item) => item.id === window.stateSteps.active)[0].answer;
        
        for (let k = 0; k < state.length; k++) {
            for (let l = 0; l < state[k].options.length; l++) {
                    if (state[k].options[l].id === options[k].option) {
                        state[k].options[l].value += 1;
                    }
            }
        }
    }

    const finalState = [{
        text: 'Hundreds to thousands of unique users served',
        percentage: Math.round((state[0].options[1].value + state[0].options[2].value) / getAllOptionsValue(state[0].options) * 100),
        color: 'orange'
    }, {
        text: '2–3 channels served',
        percentage: Math.round(state[1].options[1].value / getAllOptionsValue(state[1].options) * 100),
        color: 'orange'
    }, {
        text: '2–5 services involved',
        percentage: Math.round(state[2].options[2].value / getAllOptionsValue(state[2].options) * 100),
        color: 'orange'
    }, {
        text: '1–10 engineers involved',
        percentage: Math.round((state[3].options[1].value + state[3].options[2].value) / getAllOptionsValue(state[3].options) * 100),
        color: 'orange'
    }, {
        text: '5–10 level of dynamicity',
        percentage: Math.round(state[4].options[2].value / getAllOptionsValue(state[4].options) * 100),
        color: 'orange'
    }];

    return finalState;
};

window.getByOrderState = () => {
    const state = window.questions.filter((item) => item.id === window.stateSteps.active)[0].answers.map((item) => {
        item.percentage = 0;
        return item;
    });

    const answers = window.stateAnswers.filter((item) => item.answers[1].answer !== 1);
    window.stateSteps.justJamstack = true;
    window.stateSteps.n = answers.length;

    for (let j = 0; j < state.length; j++) {
      const counter = [0, 0, 0];
      for (let i = 0; i < answers.length; i++) {
        for (let k = 0; k < counter.length; k++) {
          if (answers[i].answers.filter((item) => item.id === window.stateSteps.active)[0].answer[k].text === state[j].text) {
            counter[k] +=1;
          }
        }
      }

      for(let x = 0; x < counter.length; x++) {
        state[j].percentage += (counter[x] / answers.length) * 100
      }

      state[j].percentage = Math.round(state[j].percentage);
    }

    state.sort((a, b) => (b.percentage - a.percentage));

    return state;
};

window.getByAgeState = () => {
    let state = [];
    let stateSizeIndex = window.filter.age.options.length;
    let answers = window.questions.filter((item) => item.id === window.stateSteps.active)[0].answers.map((item) => {
        item.value = 0;
        item.percentage = 0;
        return item;
    });
    window.stateSteps.justJamstack = false;
    window.stateSteps.n = window.stateAnswers.length;

    if (window.stateSteps.active === 2) {
        answers.reverse();
    }

    if (window.stateFilter.age !== 0) {
        stateSizeIndex = 1;
    }

    for (let i = 0; i < stateSizeIndex; i++) {
        state.push({
            age: window.filter.age.options[i],
            answers: JSON.parse(JSON.stringify(answers)), // deep clone object
            answersNum: 0
        });
    }


    for (let i = 0; i < window.stateAnswers.length; i++) {
        state.map((item) => {
            if (item.age.id === window.stateAnswers[i].filter.age || item.age.id === 0) {
                item.answers.map((answer) => {
                    if (answer.id === window.stateAnswers[i].answers.filter((answerItem) => answerItem.id === window.stateSteps.active)[0].answer) {
                        answer.value = answer.value + 1;
                    }
                    return answer;
                });
            }
            return item;
        });
    } 

    for (let i = 0; i < state.length; i++) {
        let totalValue = 0;
        let totalPercentage = 0;
        
        for (let j = 0; j < state[i].answers.length; j++) {
            totalValue += state[i].answers[j].value;
        }

        state[i].answersNum = totalValue;

        for (let j = 0; j < state[i].answers.length; j++) {
            state[i].answers[j].percentage = Math.round(state[i].answers[j].value / totalValue * 100);
            totalPercentage += state[i].answers[j].percentage;
        }
    }

    return state;
};