/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import { THEMES } from "../src/shared/enums";
import { useEffect, useState } from "react";
import { CountryData, getDataAsync } from "../src/shared/data";

const Home = () => {
  localStorage.setItem("theme", THEMES.LIGHT);

  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    getDataAsync().then((parsedData) => {
      setData(parsedData);
    });
  }, data);

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
    </PageLayout>
  );
};

export default Home;
