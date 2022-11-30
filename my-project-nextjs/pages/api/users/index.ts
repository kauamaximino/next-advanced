import { NextApiHandler } from 'next';
import { users } from '../../../utils/users';

const handler: NextApiHandler = (request, response) => { 
  response.status(200).json(users)
};

export default handler;


// teste VSCode