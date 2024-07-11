import React, { useEffect, useState } from "react";
import Background from "../components/Background/Background";
import Carrer from "../components/Carrer/Carrer";
import Introduce from "../components/Introduce/Introduce";
import Skills from "../components/Skills/Skills";
import { HomeLayout } from "../styles/Home.style";
import Project from "../components/Project/Project";

const itemTitleData = [
  { title: "자기소개", component: <Introduce scroll={scroll} /> },
  { title: "스킬", component: <Skills /> },
  { title: "경력", component: <Carrer /> },
  { title: "학력", component: <Background /> },
];
const Home = () => {
  const [isScrollView, setIsScrollView] = useState("introduce");
  const [isFirstSkills, setIsFirstSkills] = useState(false);
  const [isFirstCarrer, setIsFirstCarrer] = useState(false);
  const [isFirstBackground, setIsFirstBackground] = useState(false);
  const [isFirstProject, setIsFirstProject] = useState(false);
  useEffect(() => {
    const letsView = () => {
      const sc = window.scrollY;
      console.log("sc", sc);
      if (!isFirstSkills && sc >= 40 && sc <= 480) {
        setIsScrollView("skills");
        setIsFirstSkills(true);
      } else if (!isFirstCarrer && sc >= 600) {
        setIsScrollView("carrer");
        setIsFirstCarrer(true);
      } else if (!isFirstProject && sc >= 1150) {
        setIsScrollView("project");
        setIsFirstProject(true);
      } else if (!isFirstBackground && sc >= 2450) {
        setIsScrollView("background");
        setIsFirstBackground(true);
      }
    };
    document.body.addEventListener("wheel", letsView);
    return () => document.body.removeEventListener("scroll", letsView);
  }, [isScrollView]);
  return (
    <>
      <HomeLayout>
        <Introduce />
        <Skills scroll={isScrollView === "skills" || isFirstSkills} />
        <Carrer scroll={isScrollView === "carrer" || isFirstCarrer} />
        <Project scroll={isScrollView === "project" || isFirstBackground} />
        <Background
          scroll={isScrollView === "background" || isFirstBackground}
        />
      </HomeLayout>
    </>
  );
};

export default Home;
