import React, { useState } from 'react';

function SkillList({ skills }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search skills..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', margin: '1rem 0', width: '100%', maxWidth: '300px' }}
      />
      <ul>
        {filteredSkills.map((skill, index) => (
          <li key={index} style={{ listStyleType: 'none', padding: '0.5rem', borderBottom: '1px solid #eee' }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillList;