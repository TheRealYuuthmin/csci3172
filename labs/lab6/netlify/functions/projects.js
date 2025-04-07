const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const projectsFilePath = path.resolve(__dirname, '../../backend/projects.json'); 

  try {

    const data = fs.readFileSync(projectsFilePath, 'utf8');
    const jsonData = JSON.parse(data);

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