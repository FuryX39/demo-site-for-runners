export type CourseType = "free" | "group" | "individual";

export interface Course {
  id: string;
  title: string;
  description: string;
  type: CourseType;
  price: number | null;
  duration: string;
  level: "начинающий" | "средний" | "продвинутый";
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
}

export interface NewsPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tag: string;
}

export interface RunningGroup {
  id: string;
  name: string;
  city: string;
  schedule: string;
  pace: string;
  members: number;
  maxMembers: number;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}
