import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";


const AddCourse = () => {

    useEffect(() => {
        document.title = "Add Course";
    }, []);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {

        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/courses`, data).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully");
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("error ! Something went wrong");
            }
        )
    }

    return(
        <Fragment>
            <h1 className="text-center my-3" >Fill Course Detail</h1>
            <Form onSubmit={handleForm}>
            
                <FormGroup >
                    <Label for="userId"> Course Id </Label>
                    <Input
                        type="text"
                        placeholder="Enter here"
                        name="userId"
                        id="userId"
                        onChange={(e) => {
                            setCourse({...course, id : e.target.value})
                        }}
                        />
    
                </FormGroup>

                <FormGroup>
                    <Label for="title"> Course title </Label>
                    <Input
                        type="text"
                        placeholder="Enter title here"
                        id="title"
                        onChange={(e) => {
                            setCourse({...course, title : e.target.value})
                        }}
                        />
    
                </FormGroup>

                <FormGroup >
                    <Label for="description"> Course description </Label>
                    <Input
                        type="textarea"
                        placeholder="Enter description here"
                        id="description"
                        style={{height : 100}}

                        onChange={(e) => {
                            setCourse({...course, description : e.target.value})
                        }}
                        />
    
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success" className="mr-2">Add Course</Button>
                    <Button color="warning" className="ml-3" type="reset">Clear</Button>
                </Container>

            </Form>
        </Fragment>

    );
};

export default AddCourse;