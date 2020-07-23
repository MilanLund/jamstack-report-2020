// Selectr fix for mobile
Object.defineProperty(Selectr.prototype, 'mobileDevice', {
    get() { return false; },
    set() {},
    enumerable: true,
    configurable: true
});

(() => {
    const wrapper = document.querySelector('.filter');
    if (!window.filter && !wrapper) return;

    const eventFilterUpdated = new Event('filterUpdated');
    const eventStateAnswersUpdated = new Event('stateAnswersUpdated');
    const selectrSelects = [];

    const createSelectHtml = (property) => {
        const data = window.filter[property];
        return `<div class="filter__item">
                    <label for="${property}" class="filter__label">${data.label}</label>
                    <select id="${property}" class="filter__select">
                        ${data.options.map((item) => {
                            return `<option value="${item.id}">${item.text}</option>`;
                        }).join('')}
                    </select>
                </div>`;
    };

    const createResetHtml = () => {
        return `<div class="filter__item">
                    <a href="#" id="resetFilter" class="filter__reset">Reset all filters</a>
                </div>`;
    };


    const renderFilter = () => {
        let html = '';
        html += '<h2 class="filter__heading">Filter respondents</h2>'
        html += createSelectHtml('country');
        html += createSelectHtml('gender');
        html += createSelectHtml('age');
        html += createSelectHtml('companySize');
        html += createSelectHtml('language');
        html += createResetHtml();

        wrapper.innerHTML = html;

        const selects = wrapper.querySelectorAll('select[id]');

        if (Selectr) {
            for (let i = 0; i < selects.length; i++) {
                selectrSelects.push(new Selectr(selects[i], { searchable: false }));
            }
        }
    };

    const resetFilter = () => {
        for (let i = 0; i < selectrSelects.length; i++) {
            selectrSelects[i].setValue(0);
        }
    };

    const getFilterState = () => {
        const obj = {};
        const selects = wrapper.querySelectorAll('select[id]');
        
        for (let i = 0; i < selects.length; i++) {
            obj[selects[i].id] = parseInt(selects[i].value);
        }

        return obj;
    };

    const updateStateAnswers = () => {
        const state = [];

        for (let i = 0; i < window.answers.length; i++) {
            const answerFilter = window.answers[i].filter;
            let addToState = true;

            for (var prop in window.stateFilter) {
                if (Object.prototype.hasOwnProperty.call(window.stateFilter, prop)) {
                    if (window.stateFilter[prop] !== answerFilter[prop] && window.stateFilter[prop] !== 0) {
                        addToState = false;
                    }
                }
            }

            if (addToState) {
                state.push(window.answers[i]);
            }
        }

        return state;
    };

    renderFilter();

    window.addEventListener('answersAvailable', () => {
        window.stateAnswers = window.answers;
        window.stateFilter = getFilterState();
        window.dispatchEvent(eventStateAnswersUpdated);
    });

    window.addEventListener('change', (e) => {
        if (e.target && e.target.matches('.filter select[id]')) {
            window.stateFilter = getFilterState();
            window.dispatchEvent(eventFilterUpdated);
        }
    });

    wrapper.querySelector('#resetFilter').addEventListener('click', (e) => {
        e.preventDefault();
        resetFilter();
        window.stateFilter = getFilterState();
        window.dispatchEvent(eventFilterUpdated);
    });

    window.addEventListener('filterUpdated', () => {
        if (!window.answers || !window.stateFilter) return;
        window.stateAnswers = updateStateAnswers();
        window.dispatchEvent(eventStateAnswersUpdated);
    });
})();