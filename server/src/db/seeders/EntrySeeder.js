import { Entry } from "../../models/index.js"
import { User } from "../../models/index.js"
class EntrySeeder {
  static async seed() {
    const user = await User.query().findOne({ email: "marcusA@gmail.com" });

    if (!user) {
      console.log("No user found for EntrySeeder");
      return;
    }
    const epic = "https://imgs.search.brave.com/k14qs4b2cZjAF_lPdborQYM15aQ9cLTwvecYVmv0fu4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkwL2Nm/LzljLzkwY2Y5Yzgy/MTNlYjk5NTY1MDFi/M2JkMTkzNWQxYTE0/LmpwZw"
    const mark = "https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
    const seneca = "https://www.artlistings.com/var/digitized/storage/images/artlistings/magazine/see-nero-and-seneca-by-eduardo-barron-converse-at-the-prado-museum-70595/1721117-1-eng-GB/See-Nero-and-Seneca-by-Eduardo-Barron-Converse-at-the-Prado-Museum_img-800x500.jpg"
    const defImage = "https://get.pxhere.com/photo/monument-statue-ancient-italy-sculpture-capital-art-rome-statues-fountain-culture-history-heritage-carving-water-feature-trevi-fontana-mythology-ancient-rome-lazio-roma-capitale-fontana-di-trevi-ancient-history-671379.jpg"

    const entriesData = [
      {
        userId: user.id,
        date: "February 01 2023",
        title: "Stoic thoughts #1",
        journalEntry:
          `Stoicism is a philosophical school of thought that originated in ancient Greece and has gained a resurgence in modern times. It emphasizes the development of self-control and rationality in the face of adversity, and the acceptance of the things that are beyond our control. Stoicism teaches that the most important thing we can control is our own thoughts, feelings, and actions, and that we can find lasting happiness and tranquility by living in accordance with nature and reason.

          The Stoics believed that by cultivating virtue and living in accordance with nature, we can live a meaningful and fulfilling life. They taught that we should focus on the present moment and not dwell on the past or worry about the future, and that we should treat others with kindness and compassion. Stoicism has been influential in many areas of life, from personal development to business management, and its principles continue to resonate with people today who seek to live a more intentional and fulfilling life.`,
        imageUrl: "https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
      },
      {
        userId: user.id,
        date: "February 02 2023",
        title: "Stoic thoughts #2",
        journalEntry:
          "It does not matter what you bear, but how you bear it. - Seneca",
        imageUrl: "https://www.artlistings.com/var/digitized/storage/images/artlistings/magazine/see-nero-and-seneca-by-eduardo-barron-converse-at-the-prado-museum-70595/1721117-1-eng-GB/See-Nero-and-Seneca-by-Eduardo-Barron-Converse-at-the-Prado-Museum_img-800x500.jpg"
        },
      {
        userId: user.id,
        date: "February 03 2023",
        title: "Stoic thoughts #3",
        journalEntry:
          "The greater the difficulty, the more glory in surmounting it. Skillful pilots gain their reputation from storms and tempests. - Epictetus",
        imageUrl: "https://imgs.search.brave.com/k14qs4b2cZjAF_lPdborQYM15aQ9cLTwvecYVmv0fu4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkwL2Nm/LzljLzkwY2Y5Yzgy/MTNlYjk5NTY1MDFi/M2JkMTkzNWQxYTE0/LmpwZw"
        },
      {
        userId: user.id,
        date: "February 04 2023",
        title: "Stoic thoughts #4",
        journalEntry:
          "Don't explain your philosophy. Embody it. - Epictetus",
        imageUrl: "https://imgs.search.brave.com/k14qs4b2cZjAF_lPdborQYM15aQ9cLTwvecYVmv0fu4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkwL2Nm/LzljLzkwY2Y5Yzgy/MTNlYjk5NTY1MDFi/M2JkMTkzNWQxYTE0/LmpwZw"
        },
      {
        userId: user.id,
        date: "February 05 2023",
        title: "Stoic thoughts #5",
        journalEntry:
          "He who is brave is free. - Seneca",
        imageUrl: "https://www.artlistings.com/var/digitized/storage/images/artlistings/magazine/see-nero-and-seneca-by-eduardo-barron-converse-at-the-prado-museum-70595/1721117-1-eng-GB/See-Nero-and-Seneca-by-Eduardo-Barron-Converse-at-the-Prado-Museum_img-800x500.jpg"
        },
      {
        userId: user.id,
        date: "February 06 2023",
        title: "Stoic thoughts #6",
        journalEntry:
          "We should always be asking ourselves: Is this something that is, or is not, in my control? - Epictetus",
        imageUrl: "https://imgs.search.brave.com/k14qs4b2cZjAF_lPdborQYM15aQ9cLTwvecYVmv0fu4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkwL2Nm/LzljLzkwY2Y5Yzgy/MTNlYjk5NTY1MDFi/M2JkMTkzNWQxYTE0/LmpwZw"
        },
      {
        userId: user.id,
        date: "February 07 2023",
        title: "Stoic thoughts #7",
        journalEntry:
          "To be calm is the highest achievement of the self. - Zen proverb",
        imageUrl:"https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
        },
      {
        userId: user.id,
        date: "February 12 2023",
        title: "Stoic thoughts #8",
        journalEntry:
          "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
        imageUrl: "https://get.pxhere.com/photo/monument-statue-ancient-italy-sculpture-capital-art-rome-statues-fountain-culture-history-heritage-carving-water-feature-trevi-fontana-mythology-ancient-rome-lazio-roma-capitale-fontana-di-trevi-ancient-history-671379.jpg"
        },
      {
        userId: user.id,
        date: "February 13 2023",
        title: "Stoic thoughts #9",
        journalEntry:
          "The mind is everything. What you think you become. - Buddha",
        imageUrl: "https://get.pxhere.com/photo/monument-statue-ancient-italy-sculpture-capital-art-rome-statues-fountain-culture-history-heritage-carving-water-feature-trevi-fontana-mythology-ancient-rome-lazio-roma-capitale-fontana-di-trevi-ancient-history-671379.jpg"
        },
      {
        userId: user.id,
        date: "February 14 2023",
        title: "Stoic thoughts #10",
        journalEntry:
          "It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
        imageUrl:"https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
        },
      {
        userId: user.id,
        date: "February 15 2023",
        title: "Stoic thoughts #11",
        journalEntry:
          "It is not that we have a short time to live, but that we waste a lot of it. - Seneca",
        imageUrl: "https://www.artlistings.com/var/digitized/storage/images/artlistings/magazine/see-nero-and-seneca-by-eduardo-barron-converse-at-the-prado-museum-70595/1721117-1-eng-GB/See-Nero-and-Seneca-by-Eduardo-Barron-Converse-at-the-Prado-Museum_img-800x500.jpg"
        },
      {
        userId: user.id,
        date: "February 16 2023",
        title: "Stoic thoughts #12",
        journalEntry:
          "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
        imageUrl: "https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
        },
    ];

    for (const entryData of entriesData) {
      const currentEntry = await Entry.query().findOne({
        userId: entryData.userId,
        date: entryData.date,
      });
      if (!currentEntry) {
        await Entry.query().insert(entryData);
      }
    }
  }
}

export default EntrySeeder;

