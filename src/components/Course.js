import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import CourseContent from "../screen/CourseContent";
// import

export default function Course(props) {
  return (
    <div className="col-md-3 my-3" >
      <div class="card my-4 mx-1" style={{minHeight: "400px"}}>
        <img src={props.imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.courseName}</h5>
          <p4 class="card-text text-dark">{props.shortDescription}</p4>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <i class="bi bi-alarm"></i> Last updated 3 mins ago
          </small>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            class="btn mx-2 btn-outline-primary"
          >
            Learn
          </button>
        </div>
      </div>

      <div
        class="modal fade  modal-dialog-scrollable "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Course Content
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {/* <CourseContent
                image={props.imgUrl}
                courseName={props.courseName}
                shortDescription={props.shortDescription}
                description={props.description}
                courseContent={props.courseContent}
              /> */}



<div>
      <img 
        height="300px"
        src={props.imgUrl}
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

            <h4><small>{props.description}</small></h4>
              <span class="glyphicon glyphicon-time"></span> Post by Tambua
              Evaristus, Sep 27, 2015.
            </h5>
            <h5>
              <span class="label label-danger">{props.shortDescription}</span>{" "}
            </h5>
            <br />
            <p>
                {props.courseContent}
            </p>
         
            <h4>Leave a Comment:</h4>
            <form role="form">
              <div class="form-group">
                <textarea class="form-control" rows="3" required></textarea>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>

            <p>
              <span class="badge">2</span> Comments:
            </p>
           

           
                  <div class="col-xs-10">
                    <h4>
                      Nested Br/o <small>Sep 25, 2015, 8:28 PM</small>
                    </h4>
                    <p>Me too! WOW!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>




















            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Api key = AIzaSyARVJU6XWIEtYUpF_DwXRXhZPjeiqPWAwY
