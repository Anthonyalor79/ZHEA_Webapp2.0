"use client";

import React from "react";
import icons from "@/../public/assets/icons";
import "./MemberForm.css";
import Image from "next/image";
import Link from "next/link";

export default function MemberForm({ obj, onClose }) {
  if (!obj) {
    return <p className="text-center">No member selected.</p>;
  }

  const { firstname, lastname, email, title, major, dob, skills, photo, createdat } = obj;

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={onClose}>← Back to Team</button> {/* ✅ Back button */}
      
      <header className="text-center mb-4">
        {photo && <Image src={`data:image/jpeg;base64,${photo}`} alt={firstname} className="profile-img mx-auto" width={300} height={300}/>}
        <h1 className="display-4">{firstname} {lastname}</h1>
        <p className="lead">{title}</p>
      </header>

      <section className="mb-5">
        <h2>About Me</h2>
        <p>
          Hi, my name is {firstname}, its a pleasure meeting you!.
        </p>
      </section>

      <section className="mb-5">
        <h2>Skills</h2>
        <ul className="list-inline">
          {skills?.map((skill, index) => (
            <li key={index} className="list-inline-item badge bg-secondary p-2 m-1">
              <Image src={icons[skill] ?? icons["default"]} alt={skill} className="skill-icon" width={40} height={40} /> {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-5">
        <h2>Contact</h2>
        <p>
          Email me at{" "}
          <Link href={`mailto:${email}`} className="text-decoration-none">
            {email}
          </Link>
        </p>
      </section>
    </div>
  );
}
