import { Entry } from "../../models/index.js"
import { User } from "../../models/index.js"
class EntrySeeder {
  static async seed() {
    const user = await User.query().findOne({ email: "test1@gmail.com" });

    if (!user) {
      console.log("No user found for EntrySeeder");
      return;
    }

    const entriesData = [
      {
        userId: user.id,
        date: "2022-02-01",
        title: "Stoic thoughts #1",
        journalEntry:
          `Stoicism is a philosophical school of thought that originated in ancient Greece and has gained a resurgence in modern times. It emphasizes the development of self-control and rationality in the face of adversity, and the acceptance of the things that are beyond our control. Stoicism teaches that the most important thing we can control is our own thoughts, feelings, and actions, and that we can find lasting happiness and tranquility by living in accordance with nature and reason.

          The Stoics believed that by cultivating virtue and living in accordance with nature, we can live a meaningful and fulfilling life. They taught that we should focus on the present moment and not dwell on the past or worry about the future, and that we should treat others with kindness and compassion. Stoicism has been influential in many areas of life, from personal development to business management, and its principles continue to resonate with people today who seek to live a more intentional and fulfilling life.`,
      },
      {
        userId: user.id,
        date: "2022-02-03",
        title: "Stoic thoughts #2",
        journalEntry:
          "It does not matter what you bear, but how you bear it. - Seneca",
      },
      {
        userId: user.id,
        date: "2022-02-05",
        title: "Stoic thoughts #3",
        journalEntry:
          "The greater the difficulty, the more glory in surmounting it. Skillful pilots gain their reputation from storms and tempests. - Epictetus",
      },
      {
        userId: user.id,
        date: "2022-02-07",
        title: "Stoic thoughts #4",
        journalEntry:
          "Don't explain your philosophy. Embody it. - Epictetus",
      },
      {
        userId: user.id,
        date: "2022-02-09",
        title: "Stoic thoughts #5",
        journalEntry:
          "He who is brave is free. - Seneca",
      },
      {
        userId: user.id,
        date: "2022-02-11",
        title: "Stoic thoughts #6",
        journalEntry:
          "We should always be asking ourselves: Is this something that is, or is not, in my control? - Epictetus",
      },
      {
        userId: user.id,
        date: "2022-02-13",
        title: "Stoic thoughts #7",
        journalEntry:
          "To be calm is the highest achievement of the self. - Zen proverb",
      },
      {
        userId: user.id,
        date: "2022-02-15",
        title: "Stoic thoughts #8",
        journalEntry:
          "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
      },
      {
        userId: user.id,
        date: "2022-02-17",
        title: "Stoic thoughts #9",
        journalEntry:
          "The mind is everything. What you think you become. - Buddha",
      },
      {
        userId: user.id,
        date: "2022-02-19",
        title: "Stoic thoughts #10",
        journalEntry:
          "It is not death that a man should fear, but he should fear never beginning to live. - Marcus Aurelius",
      },
      {
        userId: user.id,
        date: "2022-02-21",
        title: "Stoic thoughts #11",
        journalEntry:
          "It is not that we have a short time to live, but that we waste a lot of it. - Seneca",
      },
      {
        userId: user.id,
        date: "2022-02-23",
        title: "Stoic thoughts #12",
        journalEntry:
          "The happiness of your life depends upon the quality of your thoughts. - Marcus Aurelius",
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

