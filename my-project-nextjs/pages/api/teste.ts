import { NextApiHandler } from 'next';

const handler: NextApiHandler = (request, response) => { 
  response.status(200).json({ name: 'John' })
};

export default handler;