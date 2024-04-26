const port = 4001;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const exp = require('constants');

app.use(express.json());
app.use(cors());

//Databse connection mongodb
mongoose.connect("mongodb+srv://TrailblazeCC:campusconnect123@cluster1.ltzhhyj.mongodb.net/CampusConnect");

//API creaction
app.get('/', (req, res) => {
    res.send('Hello from Campus Connect');
});

//Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        console.log(file)
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

//Image upload

const upload = multer({storage:storage})

//upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('post'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})




// schema for creating event psots

const Post = mongoose.model('Post', {
    id:{
        type: Number,
        required: true,
    },
    eventname:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    eventinfo:{
        type: String,
        required: true,
    },
    eventstime:{
        type: String,
        required: true,
    },
    eventetime:{
        type: String,
        required: true,
    },
    eventdate:{
        type: String,
        required: true,
    },
    eventvenue:{
        type: String,
        required: true,
    },
    eventorganizer:{
        type: String,
        required: true,
    },
    eventdescription:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    eventapproval:{
        type: Boolean,
        default: true,
    },
    });

    app.post('/createpost', async (req, res) => {
        let posts = await Post.find({});
        let id;
        if(posts.length>0){
            let last_post_array = posts.slice(-1);
            let last_post = last_post_array[0];
            id = last_post.id+1;
        }
        else{
            {id = 1;}
        }
        const post = new Post({
            id: id,
            eventname: req.body.eventname,
            image: req.body.image,
            eventinfo: req.body.eventinfo,
            eventstime: req.body.eventstime,
            eventetime: req.body.eventetime,
            eventdate: req.body.eventdate,
            eventvenue: req.body.eventvenue,
            eventorganizer: req.body.eventorganizer,
            eventdescription: req.body.eventdescription,
        });
        console.log(post);
        await post.save();
        console.log("Post created successfully");
        res.json({
            success:true,
            name:req.body.eventname,
        })
    })


    //Creating api for removing products
    app.post('/removepost', async (req, res) => {
        await Post.findOneAndDelete({id: req.body.id});
        console.log("Post removed successfully");
        res.json({
            success:true,
            name:req.body.eventname,
        })
    });


    //Creating api for getting all products
    app.get('/allposts', async (req, res) => {
        let posts = await Post.find({});
        console.log("All products fetched successfully")
        res.send(posts);
    });




    app.listen(port, (error) => {
        if(!error){
            console.log("Server is running on port: " + port);
        }
        else{
            console.log("Error: " + error);
        }   
    }   
    );