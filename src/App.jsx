import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layouts/Layout'
import Settings from './pages/Settings/Settings';
import Dashboard from './pages/Dashboard/Dashboard';
import Help from './pages/Help/Help';
import VitalTask from './pages/VitalTask/VitalTask';
import MyTask from './pages/MyTask/MyTask';
import TaskCategories from './pages/TaskCategories/TaskCategories';
import CreateCategories from './pages/CreateCategories/CreateCategories';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import EventTask from './pages/Event/EventTask';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/eventtask" element={<EventTask />}/>
            <Route path="/vital" element={<VitalTask />} />
            <Route path="/task" element={<MyTask />} />
            <Route path="/category" element={<TaskCategories />}/> 
              <Route path="/create" element={<CreateCategories />}/> 
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
