import Ably from 'ably';

export const ablyClient = new Ably.Realtime({
  authUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/ably/token`,
});
