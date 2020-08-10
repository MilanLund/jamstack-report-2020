(() => {
    const unifyLanguageId = (id, name) => {
        if (name === 'Other') {
            id = 7
        }
        return parseInt(id);
    }

    const getFilterData = (data) => {
        return {
            country: parseInt(data.country_id),
            gender: parseInt(data.gender_id),
            age: parseInt(data.age_id),
            companySize: parseInt(data.company_size_id),
            language: unifyLanguageId(data.primary_programming_language_id, data.primary_programming_language_name)
        }
    };

    const getAnswerSingle = (id, answer) => {
        return {
            id: id,
            answer: parseInt(answer)
        };
    };

    const getAnswerOrder = (id, data, propertyLabelPrefix, propertyMaxCounter) => {
        const obj = {};
        obj.id = id;
        obj.answer = [];

        for (let i = 1; i <= propertyMaxCounter; i++) {
            const questionItem = window.questions[2].answers.filter((item) => item.csvText === data[`${propertyLabelPrefix}${i}`]);

            obj.answer.push({
                text: questionItem.length && questionItem[0].text
            })
        }
        return obj;
    };

    const getAnswerLines = (id, data, propertyPrefix, propertyMaxCounter) => {
        const obj = {};
        obj.id = id;
        obj.answer = [];

        for (let i = 1; i <= propertyMaxCounter; i++) {
            obj.answer.push({
                id: i,
                option: parseInt(data[`${propertyPrefix}${i}`])
            })
        }

        return obj;
    };

    const getAnswerMultiple = (id, data, propertyPrefix, propertyMaxCounter) => {
        const obj = {};
        obj.id = id;
        obj.answer = [];

        for (let i = 1; i <= propertyMaxCounter; i++) {
            if (data[`${propertyPrefix}${i}`] === '1') {
                obj.answer.push(i);
            }
        }

        return obj;
    };


    const getAnswerMultipleSpecific = (id, data, propertyPrefix, propertyMaxCounter) => {
        const obj = {};
        obj.id = id;
        obj.answer = [];

        for (let i = 1; i <= propertyMaxCounter; i++) {
            if (data[`${propertyPrefix}${i}`]) {
                obj.answer.push(parseInt(data[`${propertyPrefix}${i}`]));
            }
        }

        return obj;
    };

    const structureData = (parserdCSV) => {
        const data = parserdCSV.data;
        const resultData = [];

        for (let i = 0; i < data.length; i++) {
            const obj = {};
            obj.id = parseInt(data[i].id_new);
            obj.filter = getFilterData(data[i]);
            obj.answers = [];
            obj.answers.push(getAnswerSingle(1, data[i].q1_answer_id));
            obj.answers.push(getAnswerSingle(2, data[i].q2_answer_id));
            obj.answers.push(getAnswerOrder(3, data[i], 'q3_answer_label_', 7));
            obj.answers.push(getAnswerLines(4, data[i], 'q4_answer_id_', 5));
            obj.answers.push(getAnswerMultiple(5, data[i], 'q5_answer_id_', 10));
            obj.answers.push(getAnswerMultipleSpecific(6, data[i], 'q6_answer_id_', 4)); // Temp
            obj.answers.push(getAnswerMultiple(7, data[i], 'q7_answer_id_', 12));
            obj.answers.push(getAnswerMultiple(8, data[i], 'q8_answer_id_', 14));
            obj.answers.push(getAnswerMultiple(9, data[i], 'q9_answer_id_', 10));
            obj.answers.push(getAnswerMultipleSpecific(10, data[i], 'q10_answer_id_', 4)); // Temp
            obj.answers.push(getAnswerMultipleSpecific(11, data[i], 'q11_answer_id_', 2)); // Temp
            obj.answers.push(getAnswerSingle(12, data[i].q12_answer_id));
            obj.answers.push(getAnswerMultipleSpecific(13, data[i], 'q13_answer_id_', 4)); // Temp
            obj.answers.push(getAnswerSingle(14, data[i].q14_answer_id));
            resultData.push(obj);
        }

        return resultData;
    };

    Papa.parse('./data/data.csv', { // path for localhost
    //Papa.parse('/jamstack-vizualization/data/data.csv', { // path for kontent.ai
        download: true,
        delimiter: ',',
        header: true,
        complete: (data) => {
            window.answers = structureData(data);
            const event = new Event('answersAvailable');
            window.dispatchEvent(event);
        }
    }); 
})();