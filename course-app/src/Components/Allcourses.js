import React, { useEffect, useState } from "react";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const Allcourses = () => {

    useEffect(() => {
        //alert("testing")
        document.title = "All Courses";
        getAllCoursesFromServer();

    }, []);

//function to call server
const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
        //success
        (response) => {
            //console.log(response);
            console.log(response.data);
            toast.success("course has been loaded");
            setCourses(response.data);
        },
        (error) => {
            //for error
            console.log(error);
            toast.error("something went wrong");
        }
    );
};


//calling loading const function

// useEffect(() => {
//     getAllCoursesFromServer();
// }, []);

    const [courses, setCourses] = useState([])

    const updateCourses = (id) => {
        setCourses(courses.filter((c) => c.id != id));
    };


    return(
        
        <div className="text-center">
            
            <h1>All Course</h1>
            <p>List of Courses are Follows</p>

            {courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item} update={updateCourses} />) : "No Courses "}
        </div>

    );
};

export default Allcourses;