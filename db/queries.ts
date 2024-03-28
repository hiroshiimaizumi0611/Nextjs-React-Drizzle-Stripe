import { cache } from "react";
import db from "./drizzle";

export const getCourses = cache(async () => {
  return db.query.courses.findMany();
});
