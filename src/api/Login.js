import axios from "axios";

// const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const Login = () => {
  axios
    .post("https://dummyjson.com/auth/login", {
      username: "kminchelle",
      password: "0lelplR",
    })
    .then((response) => {
      console.log(response);
      // setPost(response.data);
    });
};

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(`${baseURL}/1`).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   function createPost() {
//     axios
//       .post(baseURL, {
//         title: "Hello World!",
//         body: "This is a new post."
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }

//   if (!post) return "No post!"
//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button onClick={createPost}>Create Post</button>
//     </div>
//   );
// }
