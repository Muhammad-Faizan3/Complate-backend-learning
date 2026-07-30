// server create karna 
const express  = require('express');
const app = express();

app.use(express.json());

const nodes = [];

app.post('/nodes', (req, res) => {
  nodes.push(req.body);
  res.status(202).json({ message: 'Node added successfully' });
})

app.get('/nodes', (req, res) => {
  res.status(200).json({
    message: 'Nodes fetched successfully',
    nodes: nodes
  });
})
app.delete('/nodes/:index', (req, res) => {
  const index = req.params.index;
  delete nodes[index];
  res.status(200).json({
    message: 'Node deleted successfully',
      });
})
app.patch('/nodes/:index', (req, res) => {
  const index = req.params.index;
  const description = req.body.description;
  nodes[index] = description;
  res.status(200).json({
    message: 'Node updated successfully',
  });
})
module.exports = app;
