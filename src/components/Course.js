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
      <div class="card my-3 col-md-3">
        <img src={props.imgUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.courseName}</h5>
          <p class="card-text">{props.shortDescription}</p>
        </div>
        <div class="card-footer">
          <small class="text-muted"><i class="bi bi-alarm"></i> Last updated 3 mins ago</small>
          <button type="button" class="btn mx-2 btn-outline-primary">Learn</button>
        </div>
      </div>
  );
}
