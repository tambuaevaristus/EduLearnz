import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import

export default function Course(props) {
  return (
    <div className="col-md-3">
      <div class="card my-4 mx-1">
        <img src={props.imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.courseName}</h5>
          <p class="card-text">{props.courseDes}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted">
            <i class="bi bi-alarm"></i> Last updated 3 mins ago
          </small>
          <a href={"course/" + props.courseName}>
            <button type="button" class="btn mx-2 btn-outline-primary">
              Learn
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

// Api key = AIzaSyARVJU6XWIEtYUpF_DwXRXhZPjeiqPWAwY
