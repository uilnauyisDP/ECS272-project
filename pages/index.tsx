/**These are necessary imports / components for the page */
import {
  PageLayout,
  Text,
  LinkTo,
  Seperator,
  List,
  Image,
} from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { ImageSize, ListType, THEMES } from "../src/shared/enums";
import { useEffect, useState } from "react";
import { CountryData, getDataAsync } from "../src/shared/data";
import CodeBlock from "../src/components/CodeBlock";
import { AiFillYoutube } from "react-icons/ai";
import { InteractivePieCharts } from "../src/plots/InteractivePieCharts";
import {Map} from "../src/plots/WorldMap"

const Home = () => {
  localStorage.setItem("theme", THEMES.LIGHT);

  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    getDataAsync().then((parsedData) => {
      setData(parsedData);
    });
  }, []);

  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section
        className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "50vh",
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/e/ed/Earth-EpicDay260-20150917.gif")`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            alignItems: "center",
          }}
          className="container text-center px-3"
        >
          <Text title className="text-10xl">
            Beyond GDP: Factors Behind Success of Developed Countries
          </Text>

          <Text p className="mt-3 text-xl">
            Siyuan Liu, Xiang Hao
          </Text>
        </div>
      </section>

      <div className="container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0">
        <Text title className="text-3xl">
          Blog Setup
        </Text>
        <hr className="mt-5" />
        <Text subtitle className="mt-10">
          1. Installing Node, VS Code and downloading the project on your
          computer.
        </Text>
        <List type={ListType.disc} className="mt-5">
          <li className="">
            You will need <b>node js</b> installed in your computer <br />
            You can install node via{" "}
            <a
              href="https://nodejs.org/en/download/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://nodejs.org/en/download/
            </a>{" "}
            or you can look up any tutorial to install node js on your computer.
          </li>
          <li className="">
            Next You will need a code editor like <b>VsCode / Sublime text</b>{" "}
            to write your blog articles. <br />I will suggest using{" "}
            <b>
              {" "}
              <a
                href="https://code.visualstudio.com/download"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                VS Code
              </a>
            </b>
            .
          </li>

          <li className="">
            Download / clone the blog template from our github page to a folder
            on your computer.
            <a
              href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss"
              className="pl-2 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss
            </a>
            <br />
            If you are using Git you can clone the code or click the{" "}
            <b>use template</b> button to generate your own repo.
            <Image
              className="mt-3"
              src="/public/imp_assets/tutorials/download-code.png"
              alt="nextjs-simple-blog-template"
              size={ImageSize.DEFAULT}
            />
          </li>
          <li className="">
            Open the blog project in VS code. <br /> Open terminal in VS code
            using ther <b>Terminal button</b> on tool bar of the VS Code window
            or press <b>ctrl + ~</b> or <b>cmd + ~</b>.
          </li>
          <li className="mb-20">
            In Terminal run <b>npm install</b>. This will install all the
            required packages.
            <Image
              className="my-4"
              src="/public/imp_assets/tutorials/project-install.png"
              alt="nextjs-simple-blog-template"
              size={ImageSize.DEFAULT}
            />
            After the installation is done run <b>npm start</b> in the terminal,
            it will start your project on http://localhost:3000/.
            <br />
            If you are facing any difficulty, write a comment on our discussion
            board{" "}
            <b>
              <i>
                <a
                  href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss/discussions/6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINK
                </a>
              </i>
            </b>
            <br />
            or write to us at{" "}
            <a href="mailto:webexpe13@gmail.com">webexpe13@gmail.com</a>
          </li>
          <li className="mb-20">
            If everything goes well you will see a demo blog with few demo
            articles which will walk you through simple tutorials on how to use
            layouts and different components to write articles.
          </li>
        </List>
        <Seperator dots />
        <Text subtitle className="mt-10">
          2. Setting up authors.
        </Text>
        <Text p>
          Before we start writing articles we need to setup authors and navbar
          so that it can be used throughtout the application.
        </Text>
        <Text p>
          Goto <b>_BLOG_SETUP.tsx</b> in <b>BLOG_CONSTANTS</b> folder. Here you
          will see some example authors you can refer. <br />
          The <b>export const</b> is used to make the item/variable available
          throughtout the project. <br />
          You can add as many authors you want just make sure you keep the
          format as shown.
        </Text>
      </div>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <InteractivePieCharts data={data}></InteractivePieCharts>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <Map />
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh"
        }}
      >
        <iframe width={"100%"} height={"90%"} src="https://uilnauyisdp.github.io/ParallelCoordinate/"></iframe>
      </section>


    </PageLayout>
  );
};

export default Home;
