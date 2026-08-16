import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = "./content/blog";
const templatePath = "./templates/blog-post.html"

const template = fs.readFileSync(templatePath, "utf8");

const files = fs.readdirSync(postsDirectory);

for (const file of files) {
    if(!file.endsWith(".md")){
        continue
    }

    const filePath = path.join(postsDirectory, file);

    const source = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(source);

    const html = marked(content);

    const slug = path.basename(file, ".md");

    const outputDirectory = path.join("pages", "blog", slug)

    fs.mkdirSync(outputDirectory, { recursive: true });

    let output = template;

    output = output.replaceAll("{{ title }}", data.title);
    output = output.replaceAll("{{ date }}", data.date);
    output = output.replaceAll("{{content}}", html);

    const outputFile = path.join(outputDirectory, "index.html");

    fs.writeFileSync(outputFile, output);

    console.log(`Created: ${outputFile}`);


    console.log(data);
    console.log(html);
}