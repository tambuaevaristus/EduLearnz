import React from 'react';
import Course from './Course';
import db from "../db"

const CourseList = () => {

    return (
         <div class="container my-5 mt-5">
         <div class="row">
            {db.map(course => {
                return (<Course
                    Key={course.id}
                    imgUrl={course.imgUrl}
                    courseName = {course.Course_name}
                    shortDescription={course.short_description}
                />)
            })}
        </div>
        </div>

    );
}


export default CourseList;
