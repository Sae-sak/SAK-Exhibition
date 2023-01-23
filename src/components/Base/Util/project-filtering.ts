import path from "path";
import fs from "fs";
import matter from "gray-matter";
import _ from "lodash";

import {IProject} from "@constants/types/exhibition";
import {IFilter} from "@constants/types/filter";

// markdown files 경로 설정 (해당 폴더 안에 파일만 있어야 함)
const projectDirectory = path.join(process.cwd(), "public/posts");

// 폴더 내 전체 파일 조회
export function getProjectFiles() {
  return fs.readdirSync(projectDirectory);
}

export function getProjectData(filename: string) {
  const filePath = path.join(projectDirectory, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const {data, content} = matter(fileContent);
  const slug = filename.replace(/\.md$/, "").replaceAll("_", "/");
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
  const tags = data.tags.split(","); // tags 배열 변환

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
    tags,

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
  allProjects: IProject[],
  {
    title = "",
    year = "",
    semester = "",
    grade = "",
    studio = "",
    name = "",
    tag = "",
  }: IFilter
) {
  let filterObject = {};

  // 추후 필터 기능
  if (title !== "") filterObject["title"] = title;
  if (year !== "") filterObject["year"] = year;
  if (semester !== "") filterObject["semester"] = semester;
  if (grade !== "") filterObject["grade"] = grade;

  // 현재 필터 기능 (name, studio, tag[])
  if (name !== "") filterObject["name"] = name;
  if (studio !== "") filterObject["studio"] = studio;

  if (tag === "") {
    return _.filter(allProjects, filterObject);
  } else {
    return _.filter(allProjects, (i) => i.tags.includes(tag));
  }
}
