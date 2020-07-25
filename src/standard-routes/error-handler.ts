const routeHandler = (err: any, req: any, res: any, next: any) => { // eslint-disable-line
  res.status(err.statusCode || 500).json({
    message: err.message,
  });
}

export default routeHandler;
