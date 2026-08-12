import type { Prisma } from "../generated/prisma/client";

export type SeriesWithVolumes = Prisma.SeriesGetPayload<{
  include: { volumes: { include: { issues: true } } };
}>;

export type VolumeWithIssues = SeriesWithVolumes["volumes"][number];

const mainlineSeries: SeriesWithVolumes[] = [
  {
    id: 1,
    title: "Uncanny X-Men",
    startDate: new Date("1963-09-01"),
    endDate: null,
    ongoing: true,
    volumes: [
      {
        id: 1,
        title: "Volume 1",
        number: 1,
        startDate: new Date("1963-09-01"),
        endDate: new Date("1981-09-01"), // wrong date fix later
        ongoing: false,
        issues: [],
        seriesId: 1,
      },
    ],
  },
];

export default mainlineSeries;
