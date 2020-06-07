const Ajv = require('ajv');
const parseJson = require('parse-json');


module.exports = {
    validateJsonWithSchema: (schema, data) => {
        const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
        const validate = ajv.compile(schema);
        const valid = validate(data);
        return valid ? true : validate.errors;
    },

    parseJsonExtended: (data) => {
        return parseJson(data);
    }
}
