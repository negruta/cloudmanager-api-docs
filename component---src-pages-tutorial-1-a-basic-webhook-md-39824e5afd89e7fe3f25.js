"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[569],{38571:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a,o=n(87462),i=n(63366),s=(n(15007),n(64983)),r=n(99536),p=n(77402),l=["components"],d={},c=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),m={_frontmatter:d},h=r.Z;function u(e){var t=e.components,n=(0,i.Z)(e,l);return(0,s.mdx)(h,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"tutorial-step-1---a-basic-webhook"},"Tutorial Step 1 - A Basic Webhook"),(0,s.mdx)("p",null,"In the first step of the tutorial, we're going to create an event handler (webhook) which is compatible with Adobe I/O Events. This webhook doesn't actually do much; it just logs the body of the request. But it provides a skeleton on which you'll build in later steps."),(0,s.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,s.mdx)("p",null,"To write the webhook, this tutorial uses ",(0,s.mdx)("a",{href:"https://expressjs.com/",target:"_new"},"Express"),", a minimal web framework for Node.js. To automate the parsing of JSON requests, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"body-parser")," package is used. Finally, a package named ",(0,s.mdx)("inlineCode",{parentName:"p"},"dotenv")," is used to parse and load the ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file created in the ",(0,s.mdx)("a",{parentName:"p",href:"/cloudmanager-api-docs/tutorial/index.md"},"Overview"),". To install these three packages, run"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install express body-parser dotenv\n")),(0,s.mdx)("h2",{id:"writing-the-webhook-script"},"Writing the Webhook Script"),(0,s.mdx)("p",null,"Now you're ready to write the webhook script itself. Create a new file named ",(0,s.mdx)("inlineCode",{parentName:"p"},"index.js")," and open it in your IDE."),(0,s.mdx)("p",null,"The webhook script itself has four main parts. The first part is including the dependencies, loading the ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file, and setting up the Express application:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'const express = require("express");\nconst bodyParser = require("body-parser");\n\nrequire("dotenv").config();\n\nconst app = express();\n\napp.use(bodyParser.json());\n')),(0,s.mdx)("p",null,"The second and third parts are the Express ",(0,s.mdx)("em",{parentName:"p"},"routes"),". These are JavaScript functions that handle specific request patterns. An Adobe I/O webhook must handle two different types of requests."),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"It must handle GET requests with a ",(0,s.mdx)("inlineCode",{parentName:"li"},"challenge")," query string parameter by responding with the ",(0,s.mdx)("inlineCode",{parentName:"li"},"challenge")," parameter."),(0,s.mdx)("li",{parentName:"ol"},"It must handle POST requests by responding with a 200 status code. This is how the actual events will be received.")),(0,s.mdx)("p",null,"For the purpose of this tutorial, the path ",(0,s.mdx)("inlineCode",{parentName:"p"},"/webhook")," is used. This can be any path, even just ",(0,s.mdx)("inlineCode",{parentName:"p"},"/"),", but the ",(0,s.mdx)("strong",{parentName:"p"},"same")," path must be used for both the GET and POST routes."),(0,s.mdx)("p",null,"The challenge handler looks like this:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'app.get("/webhook", (req, res) => {\n  if (req.query["challenge"]) {\n    res.send(req.query["challenge"]);\n  } else {\n    console.log("No challenge");\n    res.status(400);\n  }\n});\n')),(0,s.mdx)("p",null,"For the POST handler, at this point in the tutorial, it should just log the body and then write something trivial as a response."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},'app.post("/webhook", (req, res) => {\n  console.log(req.body);\n  res.writeHead(200, { "Content-Type": "application/text" });\n  res.end("pong");\n});\n')),(0,s.mdx)("p",null,"The last part of the script is to start listening for requests. Here, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PORT")," variable specified in the ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file is used."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-javascript"},"const listener = app.listen(process.env.PORT, () => {\n  console.log(`Your app is listening on port ${listener.address().port}`);\n});\n")),(0,s.mdx)("h2",{id:"running-the-webhook-script"},"Running the Webhook Script"),(0,s.mdx)("p",null,"You have at least two options to run the webhook script. The first way is to simply run it locally with"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"node index.js\n")),(0,s.mdx)("p",null,"You should see a message that it is up and running:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"Your app is listening on port 4000\n")),(0,s.mdx)("h3",{id:"creating-a-tunnel-with-ngrok"},"Creating a Tunnel with ngrok"),(0,s.mdx)("p",null,"In order to use the webhook with Adobe I/O, it must be accessible to the public internet. But, your development machine is probably not accessible. So you need to open a ",(0,s.mdx)("em",{parentName:"p"},"tunnel")," allowing public access to the webhook. One popular tool for doing this is ",(0,s.mdx)("a",{href:"https://ngrok.com",target:"_new"},"ngrok"),". Follow the instructions on the ngrok website to install it. Once it is installed, you can open up a tunnel by running"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"ngrok http 4000\n")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"If you changed the ",(0,s.mdx)("inlineCode",{parentName:"p"},"PORT")," variable in the ",(0,s.mdx)("inlineCode",{parentName:"p"},".env")," file to something else, adjust the command to suit."),(0,s.mdx)("p",null,"Once running ngrok will show you two ",(0,s.mdx)("em",{parentName:"p"},"forwarding")," addresses:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre"},"Forwarding                    http://e639e8fd.ngrok.io -> localhost:4000\nForwarding                    https://e639e8fd.ngrok.io -> localhost:4000\n")),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"For the purpose of this tutorial, the free ngrok service is acceptable. Just keep in mind that every time you restart ngrok you will get a new URL."),(0,s.mdx)("h3",{id:"running-the-webhook-script-with-glitch"},"Running the Webhook Script with Glitch"),(0,s.mdx)("p",null,"Alternatively, you can run the webhook script using ",(0,s.mdx)("a",{href:"https://glitch.com/",target:"_new"},"Glitch"),". Glitch is an interactive web-based code editor for Node.js applications with built-in hosting. To save you the trouble of copy and pasting the files you've created already, you can just click the button below to create a new application on Glitch pre-populated with the content of the tutorial so far."),(0,s.mdx)(p.Z,{projectName:"adobe-cloudmanager-api-tutorial-step1",mdxType:"Glitch"}),(0,s.mdx)(c,{slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Feel free to create an account with Glitch if you want to continue to use it in subsequent steps of the tutorial."),(0,s.mdx)("h2",{id:"registering-the-webhook-with-adobe-io"},"Registering the Webhook with Adobe I/O"),(0,s.mdx)("p",null,"Now that you have your webhook running at a publicly accessible URL, you can register it with Adobe I/O. To do this, open the ",(0,s.mdx)("a",{href:"https://console.adobe.io/projects",target:"_new"},"Adobe Developer Console")," and open the Project you created in Step 0. Click Add to Project and select Event. Select Cloud Manager and click Next."),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.49999999999999%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/cb523/event-select-event-types.webp 320w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/797b9/event-select-event-types.webp 640w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/4b075/event-select-event-types.webp 1280w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/5a519/event-select-event-types.webp 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/72799/event-select-event-types.png 320w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/6af66/event-select-event-types.png 640w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/21b4d/event-select-event-types.png 1280w","/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/c95f0/event-select-event-types.png 1842w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/e58032fc7b17e3cda0f9f29877000a9b/21b4d/event-select-event-types.png",alt:"Select Event Types",title:"Select Event Types",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"Select the events you want to subscribe to. For the purpose of this tutorial, you will need ",(0,s.mdx)("strong",{parentName:"p"},"at least")," the Pipeline Execution Started event. Click the Next button."),(0,s.mdx)("p",null,"There are three options for receiving events: Journaling, Webhooks, and Runtime actions. For the purpose of this tutorial, select the Webhook option."),(0,s.mdx)("p",null,"If you are using ngrok, the Webhook URL will be the Forwarding address appended with ",(0,s.mdx)("inlineCode",{parentName:"p"},"/webhook"),", e.g. ",(0,s.mdx)("inlineCode",{parentName:"p"},"https://e639e8fd.ngrok.io/webhook"),". If you are using Glitch, the URL will be the Glitch application name appended with ",(0,s.mdx)("inlineCode",{parentName:"p"},".glitch.me/webhook"),", e.g. ",(0,s.mdx)("inlineCode",{parentName:"p"},"https://enchanted-bathroom.glitch.me/webhook")),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/cb523/add-webhook-to-existing-integration.webp 320w","/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/797b9/add-webhook-to-existing-integration.webp 640w","/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/2a77d/add-webhook-to-existing-integration.webp 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/72799/add-webhook-to-existing-integration.png 320w","/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/6af66/add-webhook-to-existing-integration.png 640w","/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/f43e4/add-webhook-to-existing-integration.png 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/cloudmanager-api-docs/static/237765ccbd9d102f61a4bace8627f183/f43e4/add-webhook-to-existing-integration.png",alt:"Event Registration",title:"Event Registration",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)(c,{slots:"text",variant:"warning",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Ensure that the Single Delivery style is selected. The tutorial code is ",(0,s.mdx)("strong",{parentName:"p"},"not")," intended to be used with the Batch style, although you may want to explore this on your own."),(0,s.mdx)("h2",{id:"next-step"},"Next Step"),(0,s.mdx)("p",null,"With all that done, you're ready to proceed to the next step. Continue to ",(0,s.mdx)("a",{parentName:"p",href:"2-webhook-signature-validation.md"},"Step 2"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorial-1-a-basic-webhook-md-39824e5afd89e7fe3f25.js.map