import React from "react";
import { Link } from "react-router-dom";


function CourseContent(props) {
//   console.log(props);
  return (
    <div>
      <img 
        height="300px"
        src={props.image}
        class="d-block w-100"
        alt="..."
      />

<center >   <h1 className="">{props.courseName}</h1>
</center>
      <div class="container mt-5">
        <div class="row content">
          <div class="col-sm-9">
            <h4>
              <small>Course Content</small>
            </h4>
            <hr />
            <h2>{props.courseName}</h2>
            <h5>

            <h4><small>{props.descriprion}</small></h4>
              <span class="glyphicon glyphicon-time"></span> Post by Tambua
              Evaristus, Sep 27, 2015.
            </h5>
            <h5>
              <span class="label label-danger">{props.shortDescription}</span>{" "}
            </h5>
            <br />
            <p>
                {props.courseContent}
              {/* Food is my passion. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. */}
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
