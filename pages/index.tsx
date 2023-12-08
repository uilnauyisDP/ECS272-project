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
import { Map } from "../src/plots/WorldMap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { BarCharts } from "../src/plots/BarCharts";

const Home = () => {
  localStorage.setItem("theme", THEMES.LIGHT);

  const [data, setData] = useState<CountryData[]>([]);

  useEffect(() => {
    getDataAsync().then((parsedData) => {
      setData(parsedData);
    });
  }, []);

  const options = [
    "Population",
    "PopDensity",
    "NetMigration",
    "InfantMortality",
    "GdpPerCapita",
    "LiteracyRate",
    "Birthrate",
    "Deathrate",
    "Agriculture",
    "Industry",
    "Service",
    "ArableRate",
    "AreaSqMi",
    "CropsPercentage",
    "PhonesPer1000",
  ];
  const [option, setOption] = useState(options[0]);
  const opColor = {
    Agriculture: "blue",
    ArableRate: "blue",
    AreaSqMi: "blue",
    Birthrate: "blue",
    CoastlineRatio: "green",
    CropsPercentage: "blue",
    Deathrate: "red",
    GdpPerCapita: "green",
    Industry: "green",
    InfantMortality: "red",
    LiteracyRate: "green",
    NetMigration: "green",
    PhonesPer1000: "blue",
    PopDensity: "red",
    Population: "blue",
    Service: "green",
  };

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
          Background
        </Text>
        <hr className="mt-5" />
        <Text p>
          The International Monetary Fund (IMF) categorizes 41 countries as
          advanced economies, reflecting their high levels of income and
          economic development. These nations often possess well-established
          infrastructure, robust industrial sectors, and a high standard of
          living for their citizens.
        </Text>
        <Text p>
          In contrast, the United Nations lists 46 countries as the least
          developed countries (LDCs), highlighting their challenges in poverty,
          limited economic resources, and lower levels of industrialization.
          These countries often struggle with issues like low income per capita,
          inadequate healthcare systems, and limited access to education.
        </Text>
        <Text p>
          The countries not included in these two categories are classified as
          developing countries. These nations are characterized by their efforts
          to improve their economic status and quality of life for their
          citizens, often showing moderate levels of industrialization, rising
          infrastructural development, and gradual improvements in healthcare
          and education systems. This diverse global economic landscape
          underscores the varying levels of progress and challenges faced by
          countries worldwide.
        </Text>
        <Image
          className="mt-3"
          src="/public/images/worldmap.png"
          alt="nextjs-simple-blog-template"
          size={ImageSize.DEFAULT}
        />
        <Text p>
          For all the countries that we have access to data with which we can
          analyze, the developed countries, developing countries and the least
          developed countries accounts for 15.7%, 74.0% and 10.2% of the world
          population respectively, while their percentages of the world GDP are
          56.2%, 42.0% and 1.7% respectively.
        </Text>
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
        <Text p>
          While the GDP is a very important aspects to consider, there are also
          many other factors that could be overlooked. In our research, we try
          to look into these factors and answer the following questions:
          <List type={ListType.disc} className="mt-5">
            <li className="">
              What are the criteria to define the development levels of these
              countries?
            </li>
            <li>
              {" "}
              What potential factors lead to the success of developed countries?{" "}
            </li>
            <li>
              {" "}
              What advantages do the developed countries have in comparison to
              those developing countries and least developed countries?
            </li>
          </List>
        </Text>
        <br></br>
        <br></br>
        <Text title className="text-3xl">
          Introduction
        </Text>
        <hr className="mt-5" />
        <text p>
          When considering these questions, many different aspects would be
          raised, such as GDP, GDP per capita, Population, Education,
          Development Level, Agriculture, Industry, Technology, Population
          Structure, etc. However, not all aspects can be thought of as the
          factors behind the success of a country. Now, please stay curious,
          come with us to dive deeper to discover the potential factors leading
          to the success of a country. Our strategy is to compare differences
          between developed countries, developing countries, and least developed
          countries in terms of some attributes.
        </text>
        <br></br>
        <br></br>
        <Text title className="text-3xl">
          Data Visualization and Analysis
        </Text>
        <hr className="mt-5" />
        <Text p>
          We chose blue as the color to represent developed countries, green as
          the color to represent developing countries, and red as the color to
          represent least developed countries in our work. The main
          Visualization in our work is the parallel coordinate plot and
          geographic map plot, with which we are able to observe trends and
          symptoms shared by countries in the same categories. We use bar plots
          as ancillary visualization tool to assist our analysis.
        </Text>
        <Text subtitle className="mt-10">
          Parallel Coordinate Plot Analysis
        </Text>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <iframe
            width={"100%"}
            height={"90%"}
            src="https://uilnauyisdp.github.io/ParallelCoordinate/"
          ></iframe>
        </section>
        <Text p>
          We notice that there are trends in some attributes, such as Net
          Migration, Infant Mortality (per 1000 births), GDP ($ per capita),
          Literacy (%), Birthrate, Deathrate, Agriculture, Industry, and
          Service.
          <List type={ListType.disc} className="mt-5">
            <li className="">
              For Net Migration, a majority of developed countries have a higher
              net migration rate between 0.87% and 4.57% compared to developing
              countries and least developed countries;
            </li>
            <li>
              For GDP ($ per capita), the GDP ($ per capita) for developed
              countries is much higher than developing countries and least
              developed countries
            </li>
            <li>
              For Literacy (%), all developed countries have a very high level
              of literacy (above 91.8%);
            </li>
            <li>
              For Agriculture, the percentage of agriculture for developed
              countries is lower than developing countries and least developed
              countries;
            </li>
            <li>
              For Services, developed countries have better services in
              comparison to developing countries and least developed countries.
            </li>
          </List>
        </Text>
        <Text subtitle className="mt-10">
          Geographic Map Analysis
        </Text>
        <Text p>
          The following geographic map depicts those attributes shown in the
          parallel coordinates plot. We used three different colors to represent
          three cases of data. We use red color for the attributes that we
          believe negatively impact the development of a country, while We use
          green for the attributes possitely help the development of a country.
          For the rest of the factors that have complex impact or show no
          significant relation to the countrys' growth, we encode in blue color.
          You can use the dropdown to select the attributes and see how it is
          reflected among the countries.
        </Text>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div>
            <Map
              data={data}
              selectedAttr={option}
              color={opColor[option as keyof typeof opColor]}
            />
          </div>
          <div>
            <Dropdown
              options={options}
              onChange={(e) => {
                setOption(e.value);
              }}
              value={option}
              placeholder="Select an option"
            />
          </div>
        </section>
        <Text subtitle className="mt-10">
          Bar Plots
        </Text>
        <Text p>
          After examining the main representation and the geographic map, it's
          insightful to delve into the bar plots that present a comprehensive
          view of various attributes, offering detailed and concrete data. These
          plots are instrumental in understanding the average values of specific
          attributes across countries categorized by their development levels.
        </Text>
        <section>
          <BarCharts data={data}></BarCharts>
        </section>
        <Text p>
          A striking observation from the plots is the average infant mortality
          rate. In developed countries, this rate is under 5%, significantly
          lower than that in developing countries, and drastically lower
          compared to least developed countries. This stark difference
          underscores the disparities in healthcare and living standards among
          these groups of nations.
        </Text>
        <Text p>
          Another critical attribute is the literacy rate. The plots reveal that
          the average literacy rate in developed countries is nearly 100%,
          markedly higher than in developing countries, and almost double that
          of the least developed countries. This disparity highlights the
          varying levels of educational access and quality across different
          development stages.
        </Text>
        <Text p>
          Focusing on net migration, the plots show an interesting trend.
          Developed countries exhibit a higher average net migration compared to
          their developing and least developed counterparts. Notably, the
          average net migration rate in developing countries is negative,
          indicating a trend where more individuals opt to migrate away from
          these nations.
        </Text>
        <Text p>
          When it comes to economic indicators, the average GDP per capita is
          highest in developed countries, reflecting their economic strength and
          stability. The bar plots also shed light on the sectors contributing
          to GDP. Developed countries show a mature service industry,
          contributing around 70% to their GDP, whereas agriculture and industry
          play a more significant role in developing and least developed
          countries.
        </Text>
        <Text p>
          These bar plots provide a vivid depiction of how attributes like
          infant mortality rate, literacy rate, net migration, and GDP per
          capita insights vary significantly across countries at different
          stages of development. They also offer into the economic structures of
          these nations, emphasizing the dominance of the service sector in
          developed economies.
        </Text>

        <Text title className="text-3xl">
          Summary
        </Text>
        <hr className="mt-5" />
        <Text p>
          In light of the data and visualizations presented, we can draw
          significant conclusions about the factors contributing to the success
          of developed countries. These factors, which are starkly evident in
          the data, also illuminate the characteristics that set developed
          countries apart in various developmental categories. These factors
          mutually affect with development of countries.
        </Text>
        <Text p>
          A high GDP per capita is a crucial metric, indicative of a nation's
          development level. It reflects not just the income per person, but
          also encapsulates the average consumption power and wealth of the
          populace. This economic strength is a fundamental pillar supporting
          the success of developed countries.
        </Text>
        <Text p>
          Education or literacy emerges as another vital factor. A high literacy
          rate boosts a country's productivity as well-educated individuals
          contribute significantly across various industries, fueling the growth
          of the overall GDP. This aspect underscores the importance of
          education in national development and prosperity.
        </Text>
        <Text p>
          Net migration is also a critical component, often representing an
          influx of productivity. Migrants add to the labor force, bolstering
          sectors like agriculture, industry, and technology. This is especially
          beneficial for countries with smaller populations, as it supplements
          their labor needs and enhances productivity.
        </Text>
        <Text p>
          Additionally, a low infant mortality rate not only signifies better
          healthcare but also contributes to workforce availability. If the
          birth rates are comparable across countries, lower infant mortality
          effectively means a larger portion of the population reaching working
          age, thereby boosting potential productivity.
        </Text>
        <Text p>
          Finally, the economic structure of developed countries, characterized
          by a high proportion of the service industry and lower portions of
          agriculture and industry, is noteworthy. The diverse and expansive
          nature of the service sector provides numerous consumption scenarios,
          significantly contributing to the GDP.
        </Text>
        <Text p>
          In summary, these factors — high GDP per capita, literacy, net
          migration, low infant mortality, and a robust service industry —
          collectively characterize the success of developed nations. They
          highlight the interplay between economic strength, educational
          attainment, demographic dynamics, and industrial structure in shaping
          national development. These factors are interconnected.
        </Text>
        The parallel coordinates plot showcases various attributes influencing a
        country's development. However, unlike the clear markers of development
        such as GDP per capita and literacy rates, these attributes do not
        exhibit stark differences between developed and developing countries.
        Their less prominent characteristics lead to their exclusion as
        definitive indicators of development. This focus allows for a more
        precise analysis of those factors that distinctly define the success and
        status of developed nations, ensuring a clearer understanding of the key
        elements driving their progress and distinguishing them from their
        developing counterparts.
      </div>
    </PageLayout>
  );
};

export default Home;
