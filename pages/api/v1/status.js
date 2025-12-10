function status(request, response) {
  response.status(200).json({
    status: "OK",
    message: "API está funcionando normalmente",
    timestamp: new Date().toISOString(),
  });
}

export default status;
