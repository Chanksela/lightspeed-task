import http from "http";

const PORT = 8000;

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "application/json" });
		res.write("Here we will have logic for CSV export!!!");
		res.end();
		return;
	} else {
		res.statusCode = 404;
		res.write("<h1>404 page not found!</h1>");
		res.end();
	}
});

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
