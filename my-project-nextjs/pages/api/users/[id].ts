import { NextApiHandler } from 'next';
import { users } from '../../../utils/users';

const handler: NextApiHandler = (request, response) => { 
  const { id } = request.query;
  const user = users.find(user => user.id === Number(id));

  if (!user) {
    response.status(404).json({ message: 'User not found' })
  }

  response.status(200).json(user)
};

export default handler;