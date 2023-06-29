const mapping: Record<string, string> = {
  clients: 'client',
  facilities: 'facility',
  users: 'user',
  visitors: 'visitor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
