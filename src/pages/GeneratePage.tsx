import React, { useEffect, useState } from "react";
import "../components/Generate.css";
import GeneratePageContent from "../components/GeneratePageContent";
import { useNavigate } from "react-router-dom";

const iconMap: { [key: string]: number } = {
  mou: 72, hil: 55, pla: 91, des: 46, sea: 66, for: 85,
  sunny: 40, cloudy: 50, rainy: 70, stormy: 30, snowy: 20, windy: 60,
  happy: 77, calm: 58, scared: 34, sad: 45, excited: 66, funny: 86
};

const pageColorMap: { [key: string]: { titleColor: string; statsColor: string; statsBgColor: string } } = {
  mou: { titleColor: "#6A0909", statsColor: "#F3AAA3", statsBgColor: "#9F5455" },
  hil: { titleColor: "#096A65", statsColor: "#88DDCA", statsBgColor: "#467891" },
  pla: { titleColor: "#6A0969", statsColor: "#E89ADC", statsBgColor: "#884A98" },
  des: { titleColor: "#6A3B09", statsColor: "#FBCD89", statsBgColor: "#9F8054" },
  sea: { titleColor: "#09506A", statsColor: "#89CFFB", statsBgColor: "#548A9F" },
  for: { titleColor: "#096A25", statsColor: "#C8D167", statsBgColor: "#689F54" }
};

const titleMap: { [key: string]: string } = {
  "mou-happy": "Summit-Joy at the Dawn Peak", "mou-calm": "Peak-Tranquil Above the Misty Mountains",
  "mou-scared": "Shadow-Haunter in the Stormy Ridge", "mou-sad": "Echo-Lament Across the Silent Crags",
  "mou-excited": "Wonder-Struck on the Thunder Peak", "mou-funny": "Rock-Jester Among the Rolling Stones",
  "hil-happy": "Light-Dodger on the Sunlit Hill", "hil-calm": "Meadow-Whisper Across the Gentle Hill",
  "hil-scared": "Dusk-Fear on the Whispering Knoll", "hil-sad": "Mist-Tear Among the Lonely Mounds",
  "hil-excited": "Breeze-Chaser Across the Rolling Knolls", "hil-funny": "Puddle-Bouncer on the Playful Hillock",
  "pla-happy": "Dawn-Singer Across the Golden Plains", "pla-calm": "Wind-Sleeper on the Tranquil Plains",
  "pla-scared": "Heat-Haunter Through the Shimmering Plains", "pla-sad": "Dune-Sorrow Along the Endless Plains",
  "pla-excited": "Gale-Rider Across the Vibrant Plains", "pla-funny": "Laugh-Roller of the Windy Plains",
  "des-happy": "Sun-Smiler on the Golden Dunes", "des-calm": "Slow Wanderer Under the Sunlit Desert",
  "des-scared": "Sand-Screamer Amid the Shifting Dunes", "des-sad": "Dust-Sigh Across the Abandoned Wastes",
  "des-excited": "Fire-Dasher Through the Scorching Sands", "des-funny": "Cactus-Comedian Among the Desert Thorns",
  "sea-happy": "Wave-Singer at the Sunlit Shore", "sea-calm": "Tide-Dreamer Beneath the Gentle Tide",
  "sea-scared": "Storm-Runner on the Roaring Shore", "sea-sad": "Salt-Tear Along the Moonlit Beach",
  "sea-excited": "Surf-Dancer Over the Foamy Crest", "sea-funny": "Silent Soul beneath the Sunlit Shore",
  "for-happy": "Dawn-Harvester in the Sunlit Forest", "for-calm": "Light-Seeker Within the Sunlit Forest",
  "for-scared": "Shadow-Lurker Among the Ancient Oaks", "for-sad": "Dew-Mourner Beneath the Lonely Pines",
  "for-excited": "Leaf-Rider on the Glittering Canopy", "for-funny": "Acorn-Prankster Amid the Woodland Floor"
};

const GeneratePage: React.FC = () => {
  const [pageContent, setPageContent] = useState<{
    title: string;
    subtitle: string;
    videoSrc: string;
    floatingText: string;
    stats: { icon: string; value: number }[];
    statsBgColor: string;
    statsColor: string;
    titleColor: string;
  } | null>(null);

  const [bgm, setBgm] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Moodscape Creation",
        text: "Here's what I generated. Pretty surreal, right?",
        url: window.location.href,
      }).catch(err => console.error("Share failed:", err));
    } else {
      alert("Sharing isn't supported on this browser. Try copying the link instead.");
    }
  };

  useEffect(() => {
    const location = localStorage.getItem("question1_selectedId");
    const weather = localStorage.getItem("question2_selectedId");
    const emotion = localStorage.getItem("question3_selectedId");

    const key = `${location}-${emotion}`;
    const today = new Date();
    const dateString = new Intl.DateTimeFormat('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(today);

    const stats = [
      { icon: location ?? "default", value: iconMap[location as string] || 0 },
      { icon: weather ?? "default", value: iconMap[weather as string] || 0 },
      { icon: emotion ?? "default", value: iconMap[emotion as string] || 0 },
    ];

    fetch("https://ipapi.co/json/")
        .then(res => res.json())
        .then(data => {
          const city = data.city || "Somewhere";
          const country = data.country_name || "";
          const fullLocation = `${city}${country ? ", " + country : ""}`;

          setPageContent({
            title: titleMap[key] || "Default Title",
            subtitle: `${dateString} • ${fullLocation}`,
            videoSrc: `/videos/${key}.mp4`,
            floatingText: `Here you are — shaped by light, space, and feeling.`,
            stats,
            statsBgColor: pageColorMap[location as string]?.statsBgColor || "#000",
            statsColor: pageColorMap[location as string]?.statsColor || "#000",
            titleColor: pageColorMap[location as string]?.titleColor || "#000",
          });
        })
        .catch(() => {
          setPageContent({
            title: titleMap[key] || "Default Title",
            subtitle: `${dateString} • Earth`,
            videoSrc: `/videos/${key}.mp4`,
            floatingText: `Here you are — shaped by light, space, and feeling.`,
            stats,
            statsBgColor: pageColorMap[location as string]?.statsBgColor || "#000",
            statsColor: pageColorMap[location as string]?.statsColor || "#000",
            titleColor: pageColorMap[location as string]?.titleColor || "#000",
          });
        });

    setBgm(`/music/${weather}.WAV`);
  }, []);

  return (
      pageContent && (
          <>
            <GeneratePageContent
                title={pageContent.title}
                subtitle={pageContent.subtitle}
                videoSrc={pageContent.videoSrc}
                floatingText={pageContent.floatingText}
                stats={pageContent.stats}
                statsColor={pageContent.statsColor}
                statsBgColor={pageContent.statsBgColor}
                titleColor={pageContent.titleColor}
                onShare={handleShare}
            />
            {bgm && <audio src={bgm} autoPlay loop />}
          </>
      )
  );
};

export default GeneratePage;
