"use client";

import React from "react";
import icons from "@/../public/assets/icons";
import "./MemberForm.css";

export default function MemberForm({ obj, onClose }) {
  if (!obj) {
    return <p className="text-center">No member selected.</p>;
  }

  const { name, email, title, major, dob, skills, photo, createdat } = obj;

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={onClose}>← Back to Team</button> {/* ✅ Back button */}
      
      <header className="text-center mb-4">
        {photo && <img src={`data:image/jpeg;base64,${photo}`} alt={name} className="profile-img" />}
        <h1 className="display-4">{name}</h1>
        <p className="lead">{title}</p>
      </header>

      <section className="mb-5">
        <h2>About Me</h2>
        <p>
          Hi, my name is {name}, a passionate undergrad pursuing a bachelor's degree in Computer Science with experience in web
          development and a strong focus on creating responsive and user-friendly web applications.
        </p>
      </section>

      <section className="mb-5">
        <h2>Skills</h2>
        <ul className="list-inline">
          {skills?.map((skill, index) => (
            <li key={index} className="list-inline-item badge bg-secondary p-2 m-1">
              <img src={icons[skill] ?? icons["default"]} alt={skill} className="skill-icon" /> {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h2>Contact</h2>
        <p>
          Email me at{" "}
          <a href={`mailto:${email}`} className="text-decoration-none">
            {email}
          </a>
        </p>
      </section>
    </div>
  );
}
