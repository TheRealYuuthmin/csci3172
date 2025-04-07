exports.handler = async (event, context) => {
  try {

    const jsonData = require('./_data/projects.json');


    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', 
      },
      body: JSON.stringify(jsonData),
    };
  } catch (error) {
    console.error('Error processing projects function:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*', 
      },
      body: JSON.stringify({ error: 'Failed to load project data.' }),
    };
  }
};