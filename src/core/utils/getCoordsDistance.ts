export const getCoordsDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const r = 6371;
  const subLat1 = (lat1 / 180) * Math.PI;
  const subLat2 = (lat2 / 180) * Math.PI;
  const subLng1 = (lng1 / 180) * Math.PI;
  const subLng2 = (lng2 / 180) * Math.PI;

  const x = (subLng2 - subLng1) * Math.cos((subLat1 + subLat2) / 2);
  const y = subLat2 - subLat1;
  const d = Math.sqrt(x * x + y * y) * r;

  return Math.round(d * 1000 * 100000000) / 100000000;
};
