(() => {
    const wrapper = document.querySelector('.steps');
    if (!window.questions && !wrapper) return;

    const eventStepUpdated = new Event('stepUpdated');
    const eventChange = new Event('change', { bubbles: true });
    let selectrSelect;

    
    const scrollParentToChild = (parent, child) => {
      const parentRect = parent.getBoundingClientRect();
      const parentViewableArea = {
        height: parent.clientHeight,
        width: parent.clientWidth
      };
    
      const childRect = child.getBoundingClientRect();
      const isViewable = (childRect.bottom >= parentRect.top) && (childRect.bottom <= parentRect.top + parentViewableArea.height);
    
      if (!isViewable) {
        parent.scrollTop = (childRect.top + parent.scrollTop) - parentRect.top
      }
    };

    const createSelectHtml = () => {
        return `<div class="steps__item">
                    <label class="steps__label" for="selectQuestion">Select question</label>
                    <select class="steps__select" id="selectQuestion">
                        ${window.questions.map((item) => {
                            return `<option value="${item.id}">${item.id} &ndash; ${item.selectText}</option>`;
                        }).join('')}
                    </select>
                </div>`;
    };

    const createNextPrevHtml = () => {
        return `<div class="steps__links">
                    <a href="#" class="steps__link steps__link--prev" id="prevQuestion">Previous</a>
                    <a href="#" class="steps__link steps__link--next" id="nextQuestion">Next</a>
                </div>`;
    };

    const renderSteps = () => {
        let html = '';
        html += '<h2 class="steps__heading">Select question</h2>'
        html += createSelectHtml();
        html += createNextPrevHtml();

        wrapper.innerHTML = html;

        const select = wrapper.querySelector('.steps select[id]');
        selectrSelect = new Selectr(select, { 
          searchable: false,
          customClass: 'select-question'
         });

        selectrSelect.on('selectr.open', () => {
          const selectElem = document.querySelector('.select-question');
          setTimeout(() => {
            const selected = selectElem.querySelector('.selectr-option.selected');
            scrollParentToChild(selectElem.querySelector('.selectr-options'), selected)
          }, 0);
          
        });
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
            e.preventDefault();
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

            selectrSelect.setValue(index);
            select.dispatchEvent(eventChange);
        }
    });
})();