import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostsToStore } from "../store/reducers/postsReducer/postsReducer";
import { addUsersToStore } from "../store/reducers/usersReducer/usersReducer";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
} from "@chakra-ui/react";

export const PostsPage = () => {
  // const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  const { isLoading, posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    getPostsData();
    getUsersData();
  }, []);

  const getPostsData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      // .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res.status == 200 && res?.data && Array.isArray(res.data)) {
          dispatch(addPostsToStore({ loaded: true, posts: res.data }));
        }
      })
      .catch((error) => {
        // if (Array.isArray(res)) {
        dispatch(addPostsToStore({ loaded: true, posts: [] }));
        // }
      });

    // ...
  };

  const getUsersData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      // .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        if (res.status == 200 && res?.data && Array.isArray(res.data)) {
          dispatch(addUsersToStore({ loaded: true, users: res.data }));
        }
      })
      .catch((error) => {
        // if (Array.isArray(res)) {
        dispatch(addUsersToStore({ loaded: true, users: [] }));
        // }
      });

    // ...
  };
  const getPostsByUserId = (userId) => {
    return posts.filter((post) => post.userId === userId);
  };
  return (
    <>
      <p>Posts:</p>
      <Stack direction={"row"} wrap={"wrap"}>
        {users.map((user) => (
          <>
            {getPostsByUserId(user.id).map((post) => (
              <Card key={post.id} border={"1px"} m={2} width={200}>
                <CardHeader>{user.name}</CardHeader>
                <CardBody>
                  <p>Title:</p>
                  <p>{post.title}</p>
                  <p>Text:</p>
                  <p>{post.body}</p>
                </CardBody>
              </Card>
            ))}
          </>
        ))}
      </Stack>
      <Button>12</Button>
    </>
  );
};
