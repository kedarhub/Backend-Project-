import express from 'express';
const app = express();

app.get('/api/joke',(req,res)=>{
    const jokes =[{
        id :1,
        title: 'A joke',
        content:'this is first a joke'
    },
    {
        id :2,
        title: 'Another joke',
        content:'this is a second joke'
    },
    {
        id :3,
        title: 'third joke',
        content:'this is a  third joke'
    }]
    res.send(jokes);
})

const port = process.env.PORT ||4001;
app.listen(port,() => {
    console.log(`server at htpp://localhost:${port}`);
})




