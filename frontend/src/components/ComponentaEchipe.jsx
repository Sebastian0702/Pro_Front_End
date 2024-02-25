import React, { useState, useEffect, useRef } from 'react';
import { checkAuthenticated, load_user } from '../actions/auth';
import { connect } from 'react-redux';
import ButtonAccent2 from './ButtonAccent2';

const EchipeListPage = ({ accessToken, load_user, isAuthenticated, searchTerm, viewMode , lastName}) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    getEchipe();
  }, []);

  const getEchipe = async () => {
    const token = accessToken;
    console.log(token)
    const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(token),
      },
    });

    const data = await response.json();
    setTests(data);
    console.log(data)
  };

  const filteredTests = tests.filter((test) => {
    return test && test.name && test.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const showHistoryRef = useRef(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredTests.map((test, index) => (
        <div key={index} className="bg-bkg border shadow-lg border-accent-1 hover:border-accent-3 rounded-2xl">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2 text-content">{test && test.name}</h3>
            <p className="mb-4 text-content">Description: {test && test.description}</p>
            <p className="text-content">Date: {test && test.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  firstName: state.auth.user ? state.auth.user.first_name : '',
  lastName: state.auth.user ? state.auth.user.last_name : '',
  userId: state.auth.user ? state.auth.user.id : '',
  accessToken: state.auth.access,
});

export default connect(mapStateToProps, { checkAuthenticated, load_user })(EchipeListPage);
