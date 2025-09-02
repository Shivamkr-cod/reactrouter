import { createContext, useReducer,useState,useEffect } from "react";

export const Postlist = createContext({
  postlist: [],
  addpost: () => {},
  fetching:false,
  deletepost: () => {},
});
const postlistreducer = (currentpostlist, action) => {
  let newpostlist = currentpostlist;

  if (action.type === "DELETE_POST") {
    newpostlist = currentpostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_initial_POST") {
    newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currentpostlist];
  }

  return newpostlist;
};

const Postlistprovider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(postlistreducer, []);
    const [fetching, setfetching] = useState(false);

  

  const addpost = (post) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addinitialpost = (posts) => {
    dispatchpostlist({
      type: "ADD_initial_POST",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  };
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addinitialpost(data.posts);
        setfetching(false);
      });
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <Postlist.Provider
      value={{
        postlist: postlist,
        fetching:fetching,
        addpost: addpost,
        
        deletepost: deletepost,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

export default Postlistprovider;
