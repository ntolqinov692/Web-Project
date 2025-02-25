// src/components/Ranking.js
import React from 'react';
import './Ranking.css';

const Ranking = ({ users, currentUserId }) => {
    return (
        <div className="ranking">
            <h2>Ranking</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Exp</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            className={user.id === currentUserId ? 'current-user' : ''}
                        >
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.exp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Ranking;