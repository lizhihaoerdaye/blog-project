import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Markdown from './Markdown';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const posts = [post1, post2, post3];

const useStyles = makeStyles((theme) => ({
    markdown: {
      ...theme.typography.body2,
      padding: theme.spacing(3, 0),
    },
  }));

export default function Main (props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={8}>
      {posts.map((post) => (
        <Markdown className={classes.markdown} key={post.substring(0, 40)}>
          {post}
        </Markdown>
      ))}
    </Grid>
  );
}

