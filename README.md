npm i nodemon -g
yarn

* Need to add more security. just relying on socket id's right now ad identifiers so you could spoof who you are maybe
** Actually maybe not? If you change it in the redux store that probably doesn't do anything because you still communicate with the backend on that socket
** Need to make it stable so when you refresh it doesn't change
** Add login system
* Find all the strings and make them constants somewhere

Links:
http://spraso.com/real-time-data-flow-with-redux-and-socket-io/
https://socket.io/docs/server-api/