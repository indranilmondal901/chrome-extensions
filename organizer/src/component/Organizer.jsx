// /* global chrome */
// import React, { useEffect, useState } from "react";
// import { Box, Chip, Stack, IconButton, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import DoDisturbOnRoundedIcon from "@mui/icons-material/DoDisturbOnRounded";
// import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

// const Organizer = () => {
//   /* ------------------------Data----------------------------------- */
//   const [dataForm, setDataForm] = useState(false);
//   const [dataValue, setDataValue] = useState({
//     id: "",
//     tabName: "",
//     tabUrl: "",
//   });
//   const [data, setData] = useState([
//     {
//       id: 0,
//       tabName: "Google",
//       tabUrl: "https://www.google.com",
//     },
//     {
//       id: 1,
//       tabName: "Yahoo",
//       tabUrl: "https://www.yahoo.com",
//     },
//     {
//       id: 2,
//       tabName: "Bing",
//       tabUrl: "https://www.bing.com",
//     },
//     {
//       id: 3,
//       tabName: "Facebook",
//       tabUrl: "https://www.facebook.com",
//     },
//     {
//       id: 4,
//       tabName: "Gmail",
//       tabUrl: "https://mail.google.com",
//     },
//     {
//       id: 5,
//       tabName: "CNN",
//       tabUrl: "https://www.cnn.com",
//     },
//     {
//       id: 6,
//       tabName: "Amazon",
//       tabUrl: "https://www.amazon.com",
//     },
//     {
//       id: 7,
//       tabName: "DuckDuckGo",
//       tabUrl: "https://duckduckgo.com",
//     },
//     {
//       id: 8,
//       tabName: "Twitter",
//       tabUrl: "https://twitter.com",
//     },
//     {
//       id: 9,
//       tabName: "Yahoo Mail",
//       tabUrl: "https://mail.yahoo.com",
//     },
//   ]);

//   const handleDataInput = (name, value) => {
//     setDataValue({ ...dataValue, [name]: value });
//   };
//   const AddData = () => {
//     if (dataValue) {
//       setData((prev) => [...prev, { ...dataValue, id: data.length }]);
//       chrome.storage.local.set({
//         data: [...data, { ...dataValue, id: data.length }],
//       });
//     }
//     setDataValue({
//       id: "",
//       tabName: "",
//       tabUrl: "",
//     });
//     setDataForm(false);
//   };

//   useEffect(() => {
//     chrome.storage.local.set({ data: data });
//   }, [data]);
//   useEffect(() => {
//     chrome.storage.local.get("tabs", (result) => {
//       if (result.tabs) {
//         setData(result.tabs);
//       }
//     });
//   }, []);

//   const handleClick = (url) => {
//     window.open(url);
//   };

//   const handleDelete = (id) => {
//     setData((prev) => prev.filter((sp) => sp.id !== id));
//   };
//   console.log(data);
//   // /* ------------------Category --------------------------------- */
//   // const [categoryForm, setCategoryForm] = useState(false);
//   // const [catValue, setCatValue] = useState("");
//   // const [category, setCategory] = useState([]);

//   // const AddCategory = () => {
//   //   if (catValue) {
//   //     setCategory((prev) => [...prev, catValue]);
//   //   }
//   //   setCatValue();
//   //   setCategoryForm(false);
//   // };

//   return (
//     <div>
//       <Box>
//         {dataForm ? (
//           <div>
//             <input
//               type="text"
//               id="dataFrom"
//               name="tabName"
//               placeholder="Tab Name"
//               value={dataValue.tabName}
//               onChange={(e) => handleDataInput(e.target.name, e.target.value)}
//             />
//             <input
//               type="text"
//               id="dataFrom"
//               name="tabUrl"
//               placeholder="Url"
//               value={dataValue.tabUrl}
//               onChange={(e) => handleDataInput(e.target.name, e.target.value)}
//             />
//             <button onClick={AddData}>Add</button>
//             <IconButton
//               aria-label="delete"
//               onClick={() => {
//                 setDataForm((prev) => !prev);
//               }}
//             >
//               <DoDisturbOnRoundedIcon />
//             </IconButton>
//           </div>
//         ) : (
//           <IconButton
//             aria-label="delete"
//             onClick={() => {
//               setDataForm((prev) => !prev);
//             }}
//           >
//             <AddCircleOutlinedIcon /> Add your tab
//           </IconButton>
//         )}

//         <Typography varient="h4" color={"blue"}>
//           Unorganized Section
//         </Typography>
//         <Stack
//           direction="row"
//           spacing={1}
//           sx={{ width: "500px", p: "2rem", m: "1rem", overflow: "auto" }}
//         >
//           {data &&
//             data.length &&
//             data.map((sd, index) => (
//               <div key={`${sd.tabName}${index}`}>
//                 <Chip
//                   label={sd.tabName}
//                   onClick={() => handleClick(sd.tabUrl)}
//                   onDelete={() => handleDelete(sd.id)}
//                   deleteIcon={<DeleteIcon />}
//                 />
//               </div>
//             ))}
//         </Stack>
//       </Box>
//       {/* <Box>
//         {categoryForm ? (
//           <div>
//             <input
//               type="text"
//               id="categoryform"
//               name="categoryfrom"
//               placeholder="Category"
//               value={catValue}
//               onChange={(e) => setCatValue(e.target.value)}
//             />
//             <button onClick={AddCategory}>Add</button>
//             <IconButton
//               aria-label="delete"
//               onClick={() => {
//                 setCategoryForm((prev) => !prev);
//               }}
//             >
//               <DoDisturbOnRoundedIcon />
//             </IconButton>
//           </div>
//         ) : (
//           <IconButton
//             aria-label="delete"
//             onClick={() => {
//               setCategoryForm((prev) => !prev);
//             }}
//           >
//             <AddCircleOutlinedIcon /> Add your category to organized as you want
//           </IconButton>
//         )}
//         <Typography varient="h4" color={"blue"}>
//           Organized Section
//         </Typography>
//         {category &&
//           category.length > 0 &&
//           category.map((c) => {
//             return (
//               <>
//                 <h6>{c}</h6>
//                 <div
//                   id="dropZone"
//                   style={{ minHeight: "2rem", border: "1px solid black" }}
//                 ></div>
//               </>
//             );
//           })}
//       </Box> */}
//     </div>
//   );
// };

// export default Organizer;

/* global chrome */

import React, { useState, useEffect } from "react";
import { Box, Chip, Stack, Typography, IconButton, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

const colors = ["default", "primary", "secondary", "error", "warning", "info", "success"];

const getRandomColor = (index) => {
  let synColorIndex = 0;
  if(index > colors.length -1){
    synColorIndex = index % (colors.length-1);
  }else if (index <= colors.length-1){
    synColorIndex = index
  }
  const synColor = colors[synColorIndex];
  return synColor;
};

const Organizer = () => {
  // const [dataForm, setDataForm] = useState(false);
  const [dataValue, setDataValue] = useState({
    tabId:"",
    icon:"",
    tabName: "",
    tabUrl: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    chrome.storage.local.get("tabs", (result) => {
      if (result.tabs) {
        setData(result.tabs);
      }
    });
  }, []);

  // const handleDataInput = (name, value) => {
  //   setDataValue({ ...dataValue, [name]: value });
  // };

  // const addData = () => {
  //   if (dataValue.tabName && dataValue.tabUrl) {
  //     const newData = {
  //       tabName: dataValue.tabName,
  //       tabUrl: dataValue.tabUrl,
  //     };

  //     // Add new tab data to the state and Chrome storage
  //     setData((prev) => [...prev, newData]);
  //     chrome.storage.local.set({ tabs: [...data, newData] });

  //     // Clear input fields and close the form
  //     setDataValue({ tabName: "", tabUrl: "" });
  //     // setDataForm(false);
  //   }
  // };

  const handleClick = (url) => {
    chrome.tabs.create({ url });
  };

  const handleDelete = (tabUrl) => {
    const newData = data.filter((tab) => tab.tabUrl !== tabUrl);
    setData(newData);
    chrome.storage.local.set({ tabs: newData });
  };

  // Function to handle adding the current tab to Organizer
  const handleAddCurrentTabToOrganizer = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      const newData = {
        tabid: currentTab.id,
        icon: currentTab.favIconUrl,
        tabName: currentTab.title,
        tabUrl: currentTab.url,
      };

      // Add new tab data to the state and Chrome storage
      setData((prev) => [...prev, newData]);
      chrome.storage.local.set({ tabs: [...data, newData] });
    });
  };

  return (
    <>
      <IconButton
        aria-label="add this site"
        onClick={handleAddCurrentTabToOrganizer}
        style={{ color: "black" }}
      >
        <AddCircleOutlinedIcon />
      </IconButton>

      <Stack spacing={1} width={"20"} style={{overflow:"auto"}}>
        {/* <Typography variant="h6" color={"blue"}>
          Your Tabs
        </Typography> */}
        {data && data.length ? (
          data.map((tab, index) => (
            <Chip
              label={tab.tabName}
              onClick={() => handleClick(tab.tabUrl)}
              onDelete={() => handleDelete(tab.tabUrl)}
              color={getRandomColor(index)}
              avatar={tab.icon ? <Avatar src={tab.icon} /> : <Avatar>{tab.tabName.split("")[0]}</Avatar>}
            />
          ))
        ) : (
          <h4 style={{ color: "black" }}>No tabs added</h4>
        )}
      </Stack>
    </>
  );
};

export default Organizer;
