import path from "path";
import fs from "fs";

import matter from "gray-matter";
import _ from "lodash";
import {IProject} from "@constants/types/exhibition";

const projectDirectory = path.join(
  process.cwd(),
  "src/constants/data/exhibition"
);

export function getProjectFiles() {
  return fs.readdirSync(projectDirectory);
}

export function getProjectData(filename: string) {
  const filePath = path.join(projectDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data, content} = matter(fileContent);
  const slug = filename.replace(/\.md$/, "").replaceAll(" ", "/");
  const {
    title,
    date,
    year,
    semester,
    grade,
    studio,
    namepath,
    excerpt,
    name,
    email,
    motto,
  } = data;

  const projectData: IProject = {
    slug,

    title,
    date,
    year,
    semester,
    grade,
    studio,
    namepath,
    excerpt,
    name,
    email,
    motto,
    tags: [],

    content,
  };

  return projectData;
}

export function getAllProjects() {
  const projectFiles = getProjectFiles();

  const allProjects = projectFiles.map((projectFile) => {
    return getProjectData(projectFile);
  });

  const sortedProjects = allProjects.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedProjects;
}

export function getFilteredProjects(
  title = "",
  year = "",
  semester = "",
  grade = "",
  studio = "",
  name = "",
  tag = ""
) {
  const allProjects = getAllProjects();
  let filterObject = {};

  if (title !== "") filterObject[title] = title;
  if (year !== "") filterObject[year] = year;
  if (semester !== "") filterObject[semester] = semester;
  if (grade !== "") filterObject[grade] = grade;
  if (studio !== "") filterObject[studio] = studio;
  if (name !== "") filterObject[name] = name;
  if (tag !== "") filterObject[tag] = tag;

  return _.filter(allProjects, filterObject);
}
