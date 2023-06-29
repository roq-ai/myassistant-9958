import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { visitorValidationSchema } from 'validationSchema/visitors';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.visitor
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getVisitorById();
    case 'PUT':
      return updateVisitorById();
    case 'DELETE':
      return deleteVisitorById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getVisitorById() {
    const data = await prisma.visitor.findFirst(convertQueryToPrismaUtil(req.query, 'visitor'));
    return res.status(200).json(data);
  }

  async function updateVisitorById() {
    await visitorValidationSchema.validate(req.body);
    const data = await prisma.visitor.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteVisitorById() {
    const data = await prisma.visitor.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
