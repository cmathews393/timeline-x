import { prisma } from "../../lib/prisma";
import type { Prisma } from "../../generated/prisma/client";

type CreateSeriesBody = {
  title: string;
  startDate: string;
  endDate?: string | null;
  ongoing?: boolean;
};

function parseCreateSeriesBody(body: unknown): CreateSeriesBody {
  if (typeof body !== "object" || body === null) {
    throw new Error("Request body must be an object");
  }
  const { title, startDate, endDate, ongoing } = body as Record<
    string,
    unknown
  >;

  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("title is required");
  }
  if (typeof startDate !== "string" || Number.isNaN(Date.parse(startDate))) {
    throw new Error("startDate must be a valid date string");
  }
  if (
    endDate !== undefined &&
    endDate !== null &&
    (typeof endDate !== "string" || Number.isNaN(Date.parse(endDate)))
  ) {
    throw new Error("endDate must be a valid date string");
  }
  if (ongoing !== undefined && typeof ongoing !== "boolean") {
    throw new Error("ongoing must be a boolean");
  }

  return {
    title,
    startDate,
    endDate: endDate as string | null | undefined,
    ongoing: ongoing as boolean | undefined,
  };
}

export type CreateSeriesResponse = Prisma.SeriesGetPayload<{}>;

export async function POST(request: Request) {
  let body: CreateSeriesBody;
  try {
    body = parseCreateSeriesBody(await request.json());
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Invalid request body";
    return Response.json({ error: message }, { status: 400 });
  }

  const series: CreateSeriesResponse = await prisma.series.create({
    data: {
      title: body.title,
      startDate: new Date(body.startDate),
      endDate: body.endDate ? new Date(body.endDate) : null,
      ongoing: body.ongoing ?? false,
    },
  });

  return Response.json(series, { status: 201 });
}
