import React from "react";
import { Card, CardBody, CardSubtitle, CardText, Button, Container } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const Course = ({course, update}) => {

    const deleteCourse=(id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("course deleted");
                update(id);
            },
            (error) =>{
                toast.error("Course not deleted , Server error!!");
            }
        )
        
    };

    return (
        <Card>
        <CardBody className="text-center">
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={() => {
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="warning ml-4">Update</Button>
            </Container>
        </CardBody>
    </Card>


    );

};

export default Course;