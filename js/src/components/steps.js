(() => {
    const wrapper = document.querySelector('.steps');
    if (!window.questions && !wrapper) return;

    const eventStepUpdated = new Event('stepUpdated');
    const eventChange = new Event('change', { bubbles: true });

    const createSelectHtml = () => {
        return `<div>
                    <label for="selectQuestion">Select question</label>
                    <select id="selectQuestion">
                        ${window.questions.map((item) => {
                            return `<option value="${item.id}">${item.id} &ndash; ${item.text}</option>`;
                        }).join('')}
                    </select>
                </div>`;
    };

    const createNextPrevHtml = () => {
        return `<div>
                    <span id="prevQuestion">Previous</span>
                    <span id="nextQuestion">Next</span>
                </div>`;
    };

    const renderSteps = () => {
        let html = '';
        html += createSelectHtml();
        html += createNextPrevHtml();

        wrapper.innerHTML = html;
    };

    const getStepsState = () => {
        const select = wrapper.querySelector('.steps select[id]');
        return {
            active: parseInt(select.value)
        }
    };

    renderSteps();
    window.stateSteps = getStepsState();

    window.addEventListener('change', (e) => {
        if (e.target && e.target.matches('.steps select[id]')) {
            window.stateSteps = getStepsState();
            window.dispatchEvent(eventStepUpdated);
        }
    });

    window.addEventListener('click', (e) => {
        if (e.target && (e.target.matches('#prevQuestion') || e.target.matches('#nextQuestion'))) {
            let direction = 1;
            if (e.target.matches('#prevQuestion')) {
                direction = -1;
            }

            const select = wrapper.querySelector('.steps select[id]');
            let index = parseInt(select.value) + direction;

            if (index < 1) {
                index = window.questions.length
            } else if (index > window.questions.length) {
                index = 1;
            }

            select.value = index;
            select.dispatchEvent(eventChange);
        }
    });
})();