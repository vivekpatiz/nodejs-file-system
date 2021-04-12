const os = require("os");
const path = require("path");
const fs = require("fs");
const express = require("express")
const app = express()


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/service', (req, res) => {
//   res.json({
//     userName:"vivek",
//     age:22
//   })
// })


app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:`)
})

fs.readdir("./", { withFileTypes:true }, function(err,data){
  var finalHtml = "<div><h1>Node Js File System</h1>"
  if(err) throw err;
  data.forEach(item=>{
    if(item.isDirectory())
    {
      var img = "icons\\folder.png";
    }
    else if(item.isFile())
    {
      var pathname = path.extname(item.name)
      if(pathname== ".js")
      {
        img = "icons\\js.png"
      }
      else if(pathname== ".sol")
      {
        img = "icons\\sol.png"
      }
      else if(pathname == ".mp3")
      {
        img = "icons\\mp3.png"
      }
      else if(pathname == ".json")
      {
        img = "icons\\json.png"
      }
      else if(pathname == ".exe")
      {
        img = "icons\\exe.png"
      }
      else if(pathname == ".html")
      {
        img = "icons\\html.png"
      }
    }
    if(img)
    {
      fs.readFile(img,function(err,data){
        if(err) throw err;
        finalHtml = finalHtml + (`<img height="20px" src="data:image/png;base64,${Buffer.from(data).toString('base64')}"/><h1>${item.name}<br>`)
        // console.log(`${Buffer.from(data).toString('')}`)
        app.get("/",(req,res)=>{
          if(err) throw err;
          res.send(finalHtml)
        })
        
      })
    }



  })
})



// fs.writeFile(`message${i}.txt`,`This is number ${i}`,function(err){
//     if(err) throw err;
//     console.log("File is created");
// });