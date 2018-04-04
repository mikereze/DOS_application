# DOS (Denial Service Attack)

**Name: Michale Rezene**    
**Id: ATR/5760/08**
**Department: Software Engineering**
**Section: 2**

I used the nodejs as a server and i send requests by ajax then by clicking the button "send". you can send multiple requests,
then after a minute or few seconds it will be hard for other clients to access that server,
I assume the server will do a lot of works so i make a some task for the server that states the highest prime number,
that is divisible by the number that will be incremented everytime the server gets the request. So this is just for a demo
purpose that assuming the server will have a lot of tasks to do.

You can get to the `app.js` file and 
run the server by `$ node app.js` and try to type this `localhost:3000/dosresponse` on your browser url portion,
and this will create the response page for the server So this page perfectly works But to attack the server
We then open the `Demo.html`(HTML file that implements the dos attack) file on the browser and 
click the send button you can see the request that will be sent on the console of the browser and then after few seconds or minutes.
it will be hard to access that with `localhost:3000/dosresponse`
