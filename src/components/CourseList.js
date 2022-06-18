import React from 'react';
import Course from './Course';
import db from "../db"

const CourseList = () => {

    return (
        <div className="container my-5 mx-auto bg-light row d-flex">
            {db.map(course => {
                return (<Course
                    Key={course.id}
                    courseDes={course.course_description}
                    courseName = {course.Course_name}
                />)
            })}
        </div>
    );
}


export default CourseList;
