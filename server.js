const express = require("express");
const ytdl = require("ytdl-core");
const app = express();
const http = require("http")
const fs = require("fs")
const cors = require("cors");
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/' , (req , res)=>{
    const {type,url,quality} = req.body;
    let videoname = ""
    if(type&&url){
        if(type==="video"){
            ytdl.getInfo(url).then((data)=>{
                console.log("download start ...")
                
                videoname = data["videoDetails"].title
                ytdl(url, {
                    quality:quality||136
                }).pipe(
                    fs.createWriteStream(`./videos/${data["videoDetails"].title}.mp4`)
                    
                )
                res.json({status:"finish", video:videoname});
            })

        }else if(type==="audio"){
            // console.log("audio")
            // const YD = new YoutubeMp3Downloader({     
            //     "outputPath": "./videos",    // Output file location (default: the home directory)
            //     "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
            //     "queueParallelism": 2,                  // Download parallelism (default: 1)
            //     "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
            //     "allowWebm": false                      // Enable download from WebM sources (default: false)
            // });
            // const vId = ytdl.getURLVideoID(url)
            // // ytdl.getInfo(url).then((data)=>{
            //     console.log(vId)
            //     YD.download(vId)
            // // })
            
        }

    }
})


http.createServer(app).listen(2022,()=>{console.log("server")})