import React, { useEffect } from "react";
import {Container, Button} from "reactstrap";
function Home() {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (
        <div>
              <div className="text-center bg-secondary" >
                <h1>Course Details</h1>
                <p>
                    This is developed by Atul Raj for learning purpose. 
                    Backend is in Spring Boot and Front End is in ReactJs
                </p>
                <Container>
                    <Button color="primary">Start Learning</Button>
                </Container>

              </div>
                
            
            
        </div>
    );
}

export default Home;
