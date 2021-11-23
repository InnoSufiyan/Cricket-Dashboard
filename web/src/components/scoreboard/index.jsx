import axios from 'axios';
import { useState, useEffect } from "react"
import { baseUrl } from "./../../core"



import Stack from '@mui/material/Stack';
import io from 'socket.io-client';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Dashboard() {

    const [score, setScore] = useState({})


    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/score`)
            .then((res) => {
                console.log("res +++: ", res.data);
                setScore(res.data)
            })
    }, [])

    useEffect(() => {
        const socket = io(); // to connect with locally running Socker.io server

        socket.on('connect', function () {
            console.log("connected to server")
        });
        socket.on('disconnect', function (message) {
            console.log("disconnected from server: ", message);
        });
        socket.on('SCORE', function (data) {
            console.log(data);
            setScore(data)
        });

        return () => {
            socket.close();
        };
    }, []);




    return (
        <div style={{ marginTop: "5rem" }}>

            <h1 style={{ marginBottom: "5rem", textAlign: "center", color: "white", backgroundImage: "linear-gradient(#f09834,#cf7b21)", paddingTop: "20px", paddingBottom: "20px" }}><span style={{backgroundImage: "linear-gradient(#020b2c,#053575)", padding: "15px 250px", borderRadius: "10px"}}> Score Board </span></h1>
            <h1 style={{ marginBottom: "5rem", textAlign: "center", color: "white", backgroundImage: "linear-gradient(#f09834,#cf7b21)", paddingTop: "20px", paddingBottom: "20px" }}><span style={{backgroundImage: "linear-gradient(#020b2c,#053575)", padding: "15px 100px", borderRadius: "10px"}}> {score?.teamOne} vs. {score?.teamTwo} (bat {score.bat}) </span></h1>


            <Stack spacing={2} direction="column">

                <Card sx={{ minWidth: 275 }} style={{backgroundImage: "linear-gradient(#24353f,#060606)", textAlign: "center"}}>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{
                            backgroundImage: "linear-gradient(#f09834,#cf7b21)", color:"#060606", fontWeight: "bold", padding: "10px 0px"
                        }}>
                           {score.teamOne?.toUpperCase()} {score?.score} / {score?.wicket}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{
                            backgroundImage: "linear-gradient(#032048,#020a2e)", color:"#eaeceb", fontWeight: "bold", padding: "10px 0px", border: "2px #385591 solid", marginTop: "10px"
                        }}>
                            over: {score.over}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <Typography variant="h5" component="div" style={{
                            backgroundImage: "linear-gradient(#f09834,#cf7b21)", color:"#060606", fontWeight: "bold", padding: "10px 0px"
                        }}>
                           {score.teamTwo?.toUpperCase()} {score?.score2} / {score?.wicket2}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{
                            backgroundImage: "linear-gradient(#032048,#020a2e)", color:"#eaeceb", fontWeight: "bold", padding: "10px 0px", border: "2px #385591 solid", marginTop: "10px"
                        }}>
                            over: {score.over2}
                        </Typography>
                        <Typography variant="body2" style={{
                            backgroundImage: "linear-gradient(#032048,#020a2e)", color:"#eaeceb", fontWeight: "bold", padding: "10px 0px", border: "2px #385591 solid", marginTop: "10px"
                        }}>
                            comentry: <b> {score?.comentry || "Hassan Ali just droped the catch"}</b>
                        </Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions> */}
                </Card>
            </Stack>


        </div>
    );
}

export default Dashboard;