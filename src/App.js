import react from 'react';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CourseList />
    </div>
  );
}

export default App;
