const notFound = (req: any, res: any) =>
  res.status(404).json({ msg: "Route does not exist." });

export default notFound;
