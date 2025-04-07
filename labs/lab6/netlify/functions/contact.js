const fs = require('fs');
const path = require('path');

const sanitize = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405, 
            headers: { 'Allow': 'POST', 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Method Not Allowed' }),
        };
    }

    const dataFilePath = path.resolve(__dirname, '_data/messages.json');

    try {
        let incomingData;
        try {
            incomingData = JSON.parse(event.body);
        } catch (parseError) {
            console.error("Error parsing request body:", parseError);
            return { statusCode: 400, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: 'Bad Request: Invalid JSON format.' }) };
        }


        const { name, email, subject, message } = incomingData;
        if (!name || !email || !subject || !message) {
            return { statusCode: 400, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: 'Bad Request: Missing required fields (name, email, subject, message).' }) };
        }
 
        if (!/\S+@\S+\.\S+/.test(email)) {
             return { statusCode: 400, headers: { 'Access-Control-Allow-Origin': '*' }, body: JSON.stringify({ error: 'Bad Request: Invalid email format.' }) };
        }


        const sanitizedMessage = {
            name: sanitize(name.trim()),
            email: email.trim(), 
            subject: sanitize(subject.trim()),
            message: sanitize(message.trim()), 
            timestamp: new Date().toISOString(),
        };
        let messages = [];
        try {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            messages = JSON.parse(fileData);
            if (!Array.isArray(messages)) { 
                 console.warn("messages.json did not contain an array. Resetting.");
                 messages = [];
            }
        } catch (readError) {
            if (readError.code === 'ENOENT') {
                console.log("messages.json not found, starting fresh.");
                messages = [];
            } else {
                console.error("Error reading or parsing messages.json:", readError);
                messages = [];
            }
        }

        messages.push(sanitizedMessage);

        fs.writeFileSync(dataFilePath, JSON.stringify(messages, null, 2), 'utf8'); 

        return {
            statusCode: 201, // 201 Created (or 200 OK)
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({ success: true, message: 'Message received.' }),
        };

    } catch (error) { 
        console.error('Error processing contact function:', error);
        return {
            statusCode: 500,
            headers: { 'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify({ error: 'Internal Server Error processing message.' }),
        };
    }
};