const { urlencoded } = require("express");
const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

const DB = {
  mcs: [
    {
      id: 01,
      artist: "bk",
      bestSong:'quadros',
      bestAlbum:"castelos e ruinas"
      
    },
    {
        id: 02,
        artist: "don L",
        bestSong:'aquela fé',
        bestAlbum:"roteiro para aïnouz vol.3"
        
      },
      {
        id: 03,
        artist: "djonga",
        bestSong:'esquimó',
        bestAlbum:"castelos e ruinas"
        
      },
  ],
};


app.get('/',(req,res)=>{
    res.sendStatus = 200
    res.json(DB.mcs)
})

app.get('/mc/:id',(req,res)=>{
    
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        let id = parseInt(req.params.id)
        var mc = DB.mcs.find(x=>x.id == id)

        if( mc != undefined){
            res.sendStatus = 200
            res.json(mc)
        }else{
            sendStatus = 404
            return
        }
    }

})

app.listen(process.env.PORT || 3000,()=>{
    console.log('porta aberta')
})