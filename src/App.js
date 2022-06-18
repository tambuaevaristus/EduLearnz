import Banner from './components/Banner';
import CourseList from './components/CourseList';
// import Footer from './components/footer';
import Header from './components/Header';
import {CourseDescription} from './components/courseDesc';


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <CourseList />
      <CourseDescription />
    </div>
  );
}

export default App;
