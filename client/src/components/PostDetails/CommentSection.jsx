import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from "./styles";

export const CommentSection = ({ post }) => {
  console.log(post);

  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <div className={classes.commentsInnerContainer}>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((comment, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              Comment ------------------------------------------ {i}
            </Typography>
          ))}
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
