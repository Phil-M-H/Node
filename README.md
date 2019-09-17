Notes:
Node, or NodeJS, is a runtime environment that allows Javascript to run outside of the browser. Based on Chrome's javascript engine.

Notable for its event-drive, asynchronous / non-blocking architecture. Essentially; given the relatively long times to read/write files, node - instead of doing nothing during the periods of downtime, will continue on, and then come back to when the task it was waiting on is ready to continue.

variables accessible by default:
	exports
		reference to module.exports
	require
		
	module
		
	__filename
		ex "/Users/Phil/Desktop/Folder1/Folder2/file.js
	__dirname
		ex "Users/Phil/Desktop/Folder/Folder2/"
os

fs

events

https
