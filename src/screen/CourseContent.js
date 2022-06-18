import React from "react";
import { Link } from "react-router-dom";


function CourseContent(props) {
//   console.log(props);
  return (
    <div>
      <img 
        height="300px"
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        class="d-block w-100"
        alt="..."
      />

<center >   <h1 className="">COURSE CONTENT</h1>
</center>
      <div class="container mt-5">
        <div class="row content">
          <div class="col-sm-9">
            <h4>
              <small>Course Content</small>
            </h4>
            <hr />
            <h2>Fundamentals of Artificial Intelligeince</h2>
            <h5>
              <span class="glyphicon glyphicon-time"></span> Post by Tambua
              Evaristus, Sep 27, 2015.
            </h5>
            <h5>
              <span class="label label-danger">Food</span>{" "}
              <span class="label label-primary">Ipsum</span>
            </h5>
            <br />
            <p>
              Food is my passion. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <br />
            <br />

            {/* <h4><small>RECENT POSTS</small></h4>
      <hr/>
      <h2>Officially Blogging</h2>
      <h5><span class="glyphicon glyphicon-time"></span> Post by John Doe, Sep 24, 2015.</h5>
      <h5><span class="label label-success">Lorem</span></h5><br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <hr/> */}

            <h4>Leave a Comment:</h4>
            <form role="form">
              <div class="form-group">
                <textarea class="form-control" rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
            <br />
            <br />

            <p>
              <span class="badge">2</span> Comments:
            </p>
            <br />

           
                  <div class="col-xs-10">
                    <h4>
                      Nested Br/o <small>Sep 25, 2015, 8:28 PM</small>
                    </h4>
                    <p>Me too! WOW!</p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
  );
}

export default CourseContent;
