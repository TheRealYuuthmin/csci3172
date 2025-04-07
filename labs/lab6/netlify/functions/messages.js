const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers: { 'Allow': 'GET', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const dataFilePath = path.resolve(__dirname, '_data/messages.json');

    try {
        let messages = [];
        try {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            messages = JSON.parse(fileData);
             if (!Array.isArray(messages)) {
                 console.warn("messages.json did not contain an array. Returning empty.");
                 messages = [];
            }
        } catch (readError) {

            if (readError.code === 'ENOENT') {
                console.log("messages.json not found, returning empty array.");
                messages = [];
            } else {
                console.error("Error reading or parsing messages.json:", readError);
                throw new Error('Failed to read message data.');
            }
        }
        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(messages),
        };

    } catch (error) { 
        console.error('Error processing messages function:', error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: error.message || 'Internal Server Error retrieving messages.' }),
        };
    }
};