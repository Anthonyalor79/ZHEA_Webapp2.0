"use client";

import React, { useState } from 'react';
import { addMember } from '@/utilis/api';

const programmingLanguages = [
  'html', 'css', 'JavaScript', 'aspnet', 'github', 'gitlab', 'mysql', 'nextjs', 'react', 'vscode'
];

const AddMemberForm = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [title, setTitle] = useState('');
  const [languages, setLanguages] = useState([]);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Photo = reader.result.split(',')[1];
        await addMember(name, email, title, major, dob, languages, base64Photo);
        alert('Member added successfully!');
      };
      reader.readAsDataURL(photo);
    } catch (error) {
      console.error('Error adding member:', error);
      alert('Failed to add member.');
    }
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setLanguages([...languages, value]);
    } else {
      setLanguages(languages.filter((language) => language !== value));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth:</label>
          <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Major:</label>
          <input type="text" className="form-control" value={major} onChange={(e) => setMajor(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Programming Languages:</label>
          <label multiple className="form-control" value={languages} onChange={handleLanguageChange}>
            {programmingLanguages.map((language) => (
              <div key={language} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={language}
                onChange={handleLanguageChange}
                checked={languages.includes(language)}
              />
              <label className="form-check-label">{language}</label>
              </div>
            ))}
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">Photo:</label>
          <input type="file" className="form-control" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Member</button>
      </form>
    </div>
  );
};

export default AddMemberForm;