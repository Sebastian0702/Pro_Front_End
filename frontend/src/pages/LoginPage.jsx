import React, { useState,useEffect } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import SidebarComp from '../components/SidebarComp';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate(); // Obține instanța navigate
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);

  
    

  };
  useEffect(() => {
    // Verifică dacă utilizatorul este autentificat și redirecționează
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-full bg-filler min-h-screen">
 
    <SidebarComp />
      <div className="flex-grow p-4 overflow-hidden flex items-start justify-center">
   
   <div className="col-span-2 lg:col-span-3 sm:mt-20 mt-0 bg-bkg text-content rounded-3xl p-10">
            <div className=" p-4 ">
              <h1 className="text-2xl font-bold mb-2">Login</h1>
             
              <form onSubmit={(e) => onSubmit(e)} className="mt-4">
                <div className="mb-4 ">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 text-black rounded-md"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300  text-black rounded-md"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    minLength="6"
                    required
                  />
                </div>
                <button className="bg-black text-content px-6 py-1 rounded-md" type="submit">
                  Login
                </button>
              </form>
            
            
            </div>
          </div>
      
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login }) (Login);
