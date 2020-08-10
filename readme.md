# Jamstack report 2020 for kontent.ai

This repository is used for this page: http://kontent.ai/resources/state-of-jamstack-2020-data-deep-dive

## How to move code to the kontent.ai repo

### In the folowing files follow comments for the updates

Before you move thing over to the kontent.ai repo, you need to update couple of things - some styling and paths.

- js\src\data\dataCSVtoJS.js
- js\src\data\questions.js
- css\src\app.min.less
- css\src\components\general.less

### Move files from this repository to the kontent.ai repository

- data\answers.js -> static\jamstack-vizualization\data\answers.js
- data\data.csv -> static\jamstack-vizualization\data\data.csv
- data\q4.jpg -> static\jamstack-vizualization\data\q4.jpg
- css\app.min.css -> static\jamstack-vizualization\css\app.min.css
- js\app.min.js -> static\jamstack-vizualization\js\app.min.js
- js\papaparse.js -> static\jamstack-vizualization\js\papaparse.js
- js\selectr.js -> static\jamstack-vizualization\js\selectr.js

###  Move initial markup

- scaffold.html -> src\components\shared\umlpElements\elementJamstackVizualization.js

The code is not identical. This repository uses pure HTML. Kontent.ai uses JSX with some additional markup. When updating kontent.ai, make sure you pick the updates from local markup carefully.

