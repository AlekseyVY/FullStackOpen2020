import React from 'react'
import Header from "./Header";
import Content from "./Content";



const Course = ({course}) => {
    console.log(course.parts)
    return<>
    <Header name={course.name}/>
    <Content part={course.parts}/>
    <p>total of {course.parts.reduce((x, a) => x + a.exercises, 0)} exercises</p>
    </>
}

export default Course
