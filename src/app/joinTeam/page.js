"use client";

import React, { useState } from 'react';
import { addMember } from '@/utilis/api';

const programmingLanguages = [
  'html', 'css', 'JavaScript', 'aspnet', 'github', 'gitlab', 'mysql', 'nextjs', 'react', 'vscode'
];

const AddMemberForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [title, setTitle] = useState('');
  const [skills, setSkills] = useState([]);
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Photo = reader.result.split(',')[1];
        const memberData = {
          firstName,
          lastName,
          email,
          title,
          major,
          dob,
          skills,
          photo: base64Photo,
        };
        const response = await addMember(memberData);
        if (response.status === 200) {
          alert("Request sent successfully!");
          setFirstName('');
          setLastName('');
          setDob('');
          setEmail('');
          setMajor('');
          setTitle('');
          setSkills([]);
          setPhoto(null);
        }else{
          alert("There was an error please contact the administrator");
        }
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
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">New Member Form:</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
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
          <div className="form-control">
            {programmingLanguages.map((skill) => (
              <div key={skill} className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={skill}
                onChange={handleLanguageChange}
                checked={skills.includes(skill)}
              />
              <label className="form-check-label">{skill}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Photo:</label>
          <input type="file" className="form-control" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required />
        </div>
        <button type="submit" className="btn btn-primary">Send Form</button>
      </form>
    </div>
  );
};

export default AddMemberForm;