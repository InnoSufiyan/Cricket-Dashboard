import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "./../../core";

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import io from "socket.io-client";

function Scoreboard() {
  const [score, setScore] = useState({
    teamOne: "",
    teamTwo: "",
    bat: "",
    score: "",
    wicket: "",
    over: "",
    target: "",
    score2: "",
    wicket2: "",
    over2: "",
    comentry: "",
  });

  useEffect(() => {
    axios.get(`${baseUrl}/api/v1/score`).then((res) => {
      console.log("res +++: ", res.data);
      setScore(res.data);
    });
  }, []);

  const submit = () => {
    axios.post(`${baseUrl}/api/v1/score`, score).then((res) => {
      console.log("res: ", res.data);
      console.log(score);
    });
  };

  return (
    <div style={{ margin: "1rem", backgroundColor: "#f09834", display: "flex", flexDirection: "column" , alignItems: "center" }}>
      <h1> Dashboard</h1>

      <Box
        color="secondary"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Team 1"
          color="warning"
          variant="filled"
          value={score.teamOne}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, teamOne: e.target.value };
            });
          }}
          placeholder="enter team one name"
        />
        <TextField
          label="Team 2"
          variant="standard"
          value={score.teamTwo}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, teamTwo: e.target.value };
            });
          }}
          placeholder="enter team two name"
        />{" "}
        <br />
        <TextField
          label="Bating team"
          variant="standard"
          value={score.bat}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, bat: e.target.value };
            });
          }}
          placeholder="who is batting"
        />
        <TextField
          label="Target"
          variant="standard"
          value={score.target}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, target: e.target.value };
            });
          }}
          placeholder="who is batting"
        />
        <br />
        <TextField
          label="runs/score"
          variant="standard"
          type="number"
          value={score.score}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, score: e.target.value };
            });
          }}
          placeholder="What's the score"
        />
        <TextField
          label="runs/score second"
          variant="standard"
          type="number"
          value={score.score2}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, score2: e.target.value };
            });
          }}
          placeholder="What's the Target"
        />
        <br />
        <TextField
          label="wicket"
          variant="standard"
          type="number"
          value={score.wicket}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, wicket: e.target.value };
            });
          }}
          placeholder="how many wickets"
        />
        <TextField
          label="wicketsecond"
          variant="standard"
          type="number"
          value={score.wicket2}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, wicket2: e.target.value };
            });
          }}
          placeholder="how many wickets"
        />
        <br />
        <TextField
          label="over"
          variant="standard"
          type="number"
          value={score.over}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, over: e.target.value };
            });
          }}
          placeholder="how many overs"
        />
        <TextField
          label="oversecond"
          variant="standard"
          type="number"
          value={score.over2}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, over2: e.target.value };
            });
          }}
          placeholder="how many overs"
        />
        <br />
        <TextField
          label="comentry"
          variant="standard"
          type="string"
          value={score.comentry}
          onChange={(e) => {
            setScore((prev) => {
              return { ...prev, comentry: e.target.value };
            });
          }}
          placeholder="commentry"
        />
        <br />
        <Button variant="contained" onClick={submit}>
          Post
        </Button>
      </Box>
    </div>

    // <div style={{ marginTop: "5rem" }}>
    //   <h1
    //     style={{
    //       marginBottom: "5rem",
    //       textAlign: "center",
    //       color: "white",
    //       backgroundImage: "linear-gradient(#f09834,#cf7b21)",
    //       paddingTop: "20px",
    //       paddingBottom: "20px",
    //     }}
    //   >
    //     <span
    //       style={{
    //         backgroundImage: "linear-gradient(#020b2c,#053575)",
    //         padding: "15px 250px",
    //         borderRadius: "10px",
    //       }}
    //     >
    //       {" "}
    //       Dash Board{" "}
    //     </span>
    //   </h1>
    //   <h1
    //     style={{
    //       marginBottom: "5rem",
    //       textAlign: "center",
    //       color: "white",
    //       backgroundImage: "linear-gradient(#f09834,#cf7b21)",
    //       paddingTop: "20px",
    //       paddingBottom: "20px",
    //     }}
    //   >
    //     <span
    //       style={{
    //         backgroundImage: "linear-gradient(#020b2c,#053575)",
    //         padding: "15px 100px",
    //         borderRadius: "10px",
    //       }}
    //     >
    //       {" "}
    //       <label>
    //         Team One:
    //         <input
    //           style={{
    //             backgroundColor: "transparent",
    //             color: "white",
    //             border: "2px #385591 solid",
    //           }}
    //           type="text"
    //           name="name"
    //           placeholder="Pak"
    //           onChange={(e) => {
    //             setScore((prev) => {
    //               return { ...prev, teamOne: e.target.value };
    //             });
    //           }}
    //         />
    //       </label>
    //       <label>
    //         Team Two:
    //         <input
    //           style={{
    //             backgroundColor: "transparent",
    //             color: "white",
    //             border: "2px #385591 solid",
    //           }}
    //           type="text"
    //           name="name"
    //           placeholder="Pak"
    //           onChange={(e) => {
    //             setScore((prev) => {
    //               return { ...prev, teamTwo: e.target.value };
    //             });
    //           }}
    //         />
    //       </label>
    //     </span>
    //   </h1>
    //   <h1
    //     style={{
    //       marginBottom: "5rem",
    //       textAlign: "center",
    //       color: "white",
    //       backgroundImage: "linear-gradient(#f09834,#cf7b21)",
    //       paddingTop: "20px",
    //       paddingBottom: "20px",
    //     }}
    //   >
    //     <span
    //       style={{
    //         backgroundImage: "linear-gradient(#020b2c,#053575)",
    //         padding: "15px 100px",
    //         borderRadius: "10px",
    //       }}
    //     >
    //       {" "}
    //       <label>
    //         Team Batting First:
    //         <input
    //           style={{
    //             backgroundColor: "transparent",
    //             color: "white",
    //             border: "2px #385591 solid",
    //           }}
    //           type="text"
    //           name="name"
    //           placeholder="Pak"
    //           onChange={(e) => {
    //             setScore((prev) => {
    //               return { ...prev, bat: e.target.value };
    //             });
    //           }}
    //         />
    //       </label>
    //     </span>
    //   </h1>

    //   <Stack spacing={2} direction="column">
    //     <Card
    //       sx={{ minWidth: 275 }}
    //       style={{
    //         backgroundImage: "linear-gradient(#24353f,#060606)",
    //         textAlign: "center",
    //       }}
    //     >
    //       <CardContent>
    //         <Typography
    //           variant="h5"
    //           component="div"
    //           style={{
    //             backgroundImage: "linear-gradient(#f09834,#cf7b21)",
    //             color: "#060606",
    //             fontWeight: "bold",
    //             padding: "10px 0px",
    //           }}
    //         >
    //           <label>
    //             Team Batting first Score:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="142"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, score: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //           <label>
    //             Team Batting first Wickets:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="3"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, wicket: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //         </Typography>
    //         <Typography
    //           sx={{ mb: 1.5 }}
    //           color="text.secondary"
    //           style={{
    //             backgroundImage: "linear-gradient(#032048,#020a2e)",
    //             color: "#eaeceb",
    //             fontWeight: "bold",
    //             padding: "10px 0px",
    //             border: "2px #385591 solid",
    //             marginTop: "10px",
    //           }}
    //         >
    //           <label>
    //             Team Batting first Overs:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="19.3"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, over: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //         </Typography>
    //       </CardContent>
    //       <CardContent>
    //         <Typography
    //           variant="h5"
    //           component="div"
    //           style={{
    //             backgroundImage: "linear-gradient(#f09834,#cf7b21)",
    //             color: "#060606",
    //             fontWeight: "bold",
    //             padding: "10px 0px",
    //           }}
    //         >
    //           <label>
    //             Team Batting Second Score:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="142"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, score2: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //           <label>
    //             Team Batting Second Wickets:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="3"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, wicket2: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //           <label>
    //             Target:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="3"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, target: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //         </Typography>
    //         <Typography
    //           sx={{ mb: 1.5 }}
    //           color="text.secondary"
    //           style={{
    //             backgroundImage: "linear-gradient(#032048,#020a2e)",
    //             color: "#eaeceb",
    //             fontWeight: "bold",
    //             padding: "10px 0px",
    //             border: "2px #385591 solid",
    //             marginTop: "10px",
    //           }}
    //         >
    //           <label>
    //             Team Batting Second Overs:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="19.3"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, over2: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //         </Typography>
    //         <Typography
    //           sx={{ mb: 1.5 }}
    //           color="text.secondary"
    //           style={{
    //             backgroundImage: "linear-gradient(#032048,#020a2e)",
    //             color: "#eaeceb",
    //             fontWeight: "bold",
    //             padding: "10px 0px",
    //             border: "2px #385591 solid",
    //             marginTop: "10px",
    //           }}
    //         >
    //           <label>
    //             Commentary:
    //             <input
    //               style={{
    //                 backgroundColor: "transparent",
    //                 color: "white",
    //                 border: "2px #385591 solid",
    //                 width: 400,
    //               }}
    //               type="text"
    //               name="name"
    //               placeholder="Pakistan won the toss and chose to bat first"
    //               onChange={(e) => {
    //                 setScore((prev) => {
    //                   return { ...prev, comentry: e.target.value };
    //                 });
    //               }}
    //             />
    //           </label>
    //         </Typography>
    //       </CardContent>
    //       {/* <CardActions>
    //                     <Button size="small">Learn More</Button>
    //                 </CardActions> */}
    //     </Card>
    //     <Button variant="contained" onClick={submit}>
    //       Post
    //     </Button>
    //   </Stack>
    // </div>
  );
}

export default Scoreboard;
