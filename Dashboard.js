// import React, {useEffect, useState} from 'react';
// import api, { setAuthToken } from '../api';
// export default function Dashboard({token, role, onLogout}){
//   const [courses, setCourses] = useState([]);
//   const [students, setStudents] = useState([]);
//   useEffect(()=>{ setAuthToken(token); fetchData(); },[token]);
//   const fetchData = async ()=>{
//     try{ const c = await api.get('/courses'); setCourses(c.data); const s = await api.get('/students'); setStudents(s.data);}catch(e){ console.error(e); }
//   };
//   return (<div>
//     <div>
//       <b>Logged in as role:</b> {role}
//       <button onClick={()=>{ setAuthToken(null); onLogout(); }}>Logout</button>
//     </div>
//     <h3>Courses</h3>
//     <ul>{courses.map(c=> <li key={c.id}>{c.code} - {c.title}</li>)}</ul>
//     <h3>Students</h3>
//     <ul>{students.map(s=> <li key={s.id}>{s.registrationNumber} - {s.name}</li>)}</ul>
//   </div>);
// }
import React, { useEffect, useState } from "react";
import api, { setAuthToken } from "../api";

export default function Dashboard({ token, role, onLogout }) {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setAuthToken(token);
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const c = await api.get("/courses");
      setCourses(c.data);

      const s = await api.get("/students");
      setStudents(s.data);

      const r = await api.get("/results"); 
      setResults(r.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-blue-700 text-white flex justify-between items-center p-4 rounded-xl shadow">
        <h1 className="text-xl font-bold">UNIVERSITY ERP</h1>
        <div className="flex items-center space-x-4">
          <span>Logged in as: <b>{role}</b></span>
          <button
            onClick={() => {
              setAuthToken(null);
              onLogout();
            }}
            className="bg-white text-blue-700 px-3 py-1 rounded-lg hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Courses */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2">
            {courses.map((c) => (
              <li key={c.id} className="p-3 border rounded-lg hover:bg-gray-50">
                <b>{c.code}</b> - {c.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Students</h3>
          <ul className="space-y-2">
            {students.map((s) => (
              <li key={s.id} className="p-3 border rounded-lg hover:bg-gray-50">
                <b>{s.registrationNumber}</b> - {s.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Results</h3>
          <ul className="space-y-2">
            {results.map((r) => (
              <li key={r.id} className="p-3 border rounded-lg hover:bg-gray-50">
                <b>{r.studentName}</b> - {r.courseCode}: {r.grade}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}