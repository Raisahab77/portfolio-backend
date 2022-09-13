const express = require('express');
require("./src/db/conn");
// const user = require("./src/models/users");
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./src/models/users');


const app = express();
const PORT = process.env.PORT || 3000;
const cors=require("cors");

const project_data = [{
    id:1,
    title: 'Portfolio Website',
    description: 'Created a Personal portfolio website using MongoDb, express.js, angular and node.js(MEAN Stack).',
    img: '../../assets/portfolio-img.png',
    project_details:"This is a static single page website which I have created using MEAN stack (MongoDb, Express.js, Node.js and angular). This is responsive website and it has a beautiful UI. I am focusing on the UI/UX for better user experience and working on it to make the website more optmize and fast."
  },
  {
    id:2,
    title: 'Jarvis',
    description: 'Created a desktop based voice assistant using python 3.8 which works on windows and linux both.',
    img: '../../assets/jarvis.webp',
    project_details:"During my college time I have created this application named javis, which is inspired by iron man AI assistant named jarvis. I have created this application using python and its libraries. The assistant was able to perform many task such as opening any website or searching something on internet or getting latest news."
  },
  {
    id:3,
    title: 'Angular weather App',
    description: 'Created a weather application using angular and open weather API.',
    img: '../../assets/weather.jpg',
    project_details:"This is very basic angular app which uses a weather api (open weather api) and get live weather data and show it on the user interface(UI). I have used two images based on temperature images get display."
  }
];

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req,res)=>{
    res.send(project_data);
})
app.get('/project/:id',(req,res)=>{
  id = req.params.id;

  for(let i=0;i<project_data.length; i++){
    if(project_data[i].id==id){
      return res.json(project_data[i]);
    }
  }
  res.send("didn't get any response");
})

app.post('/user',(req,res)=>{
    
    console.log(req.body);
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user);
        console.log("Saved Successfully");
    }).catch((err) => {
        res.send(err);
        console.log(err)
    });
})


app.listen(PORT,()=>console.log(`Server running on port: http://localhost:${PORT}`))