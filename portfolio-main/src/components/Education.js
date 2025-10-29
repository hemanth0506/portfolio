import React from "react";
import "../styles/component.css";
import "../styles/certification-card.css";

const Education = () => {
  return (
    <div className="component-container" id="education">
      <h1>Education</h1>

      <table className="education-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Degree</th>
            <th>Institute</th>
            <th>% / CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2021-2025</td>
            <td>B.Tech in Computer Science and Engineering</td>
            <td>Koneru Lakshmaiah Education Foundation, Guntur</td>
            <td>9.42</td>
          </tr>
          <tr>
            <td>2019-2021</td>
            <td>Board of Intermediate Education</td>
            <td>Sri Chaitanya Junior College, Tirupati</td>
            <td>88.4%</td>
          </tr>
          <tr>
            <td>2018-2019</td>
            <td>10th Grade</td>
            <td>Vijayam The School, Chittoor</td>
            <td>9.5</td>
          </tr>
        </tbody>
      </table>

      {/* Inline CSS for the table */}
      <style jsx>{`
        .education-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .education-table th,
        .education-table td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }

        .education-table th {
          background-color: #f2f2f2;
          font-weight: bold;
        }

        .education-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        .education-table tr:hover {
          background-color: #f1f1f1;
        }
      `}</style>
    </div>
  );
};

export default Education;
