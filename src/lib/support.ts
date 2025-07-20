export const supportArticles = [
  {
    id: "create-team",
    title: "How to Create a Team",
    category: "Basics",
    shortDescription: "Learn to create a new team",
    content:
      '1. From the home screen, select "Add Team"\n2. Input your team name and sport, then press "Create"\n\n![Team Creation Video (youtube)](https://www.youtube.com/watch?v=TDEjXIg7AaE)',
  },
  {
    id: "player-management",
    title: "Adding, Removing, and Editing Players",
    category: "Basics",
    shortDescription: "Learn how to add and remove players from your roster",
    content:
      '## Adding Players\n1. Go to your team → Player List\n2. Tap "Add Player"\n3. Enter player details and save\n\n![Add Player Video (youtube)](https://youtube.com/watch?v=m6GVU5x7qxU)\n## Editing Players\n1. Go to your team → Player List\n2. Select the player\n3. Make your desired edits and tap "Save"\n> Want to **edit player ranks**? Find more info [here](player-ranks)\n\n## Removing Players\n1. Go to your team → Player List\n2. Select the player\n3. Tap "Delete Player"\n\n![Delete Player Video (youtube)](https://youtube.com/watch?v=0QGM1vzRzzQ)',
  },
  {
    id: "player-ranks",
    title: "Edit Player Ranks",
    category: "Basics",
    shortDescription:
      "Learn how to edit player ranks to optimize your team's performance",
    content:
      '## How to Edit Player Ranks\n1. Go to your team → Player List\n2. Select "Offense Ranks" or "Defense Ranks"\n3. Tap and hold the slider next to the player you\'d like to adjust, drag them to their ranking\n> Sort the list such that your most skilled players are at the top\n\n![Edit Player Ranks Video (youtube)](https://youtube.com/watch?v=9qxE63hyKOg)\n\n## Tips\n- If you find yourself adjusting auto-generated lineups midgame, consider adjusting player ranks to inform the app\'s lineup planning\n- Rankings are a major factor in determining which players are benched when. The app keeps lineups balanced throughout the game and ensures your best players are on the field at the end of the game when you need them most\n- For soccer, rankings also play a major role in determining which positions players are assigned to\n  - Striker is primarily based on offense rank\n  - Defense is primarily based on defense rank\n  - Midfield is a combination of both\n  - However, each lineup is different and your best offensive player likely won\'t always play striker, for instance\n- Player playtime is also affected by your [IntelliCoaching Level](/support/intellicoaching-levels)',
  },
  {
    id: "game-specs",
    title: "Edit Game Specifications",
    category: "Basics",
    shortDescription:
      "Learn how about the available game settings and how to to edit them",
    content:
      "![Game specifications video (youtube)](https://youtube.com/watch?v=YRgFx3-Pfy8)\n\nGame specifications can be found under your team → Edit Game Specifications.\n## Overview\n- **Number of Periods:** The number of periods you have (ex. 2 for halves, 4 for quarters)\n - **Unique Lineups Per Period:** The number of times you make a substitution per period.\n  - _Example:_ If set to 1, that's just at the beginning of each period. If set to 2, that's the beginning of the period and one time in the middle.\n- **Period Duration:** The length of each period\n- **IntelliCoaching Level:** Controls how lineups are generated and how playtime is distributed. Read more [here](/support/intellicoaching-levels)\n- **Formation:** The formation your team plays in. Set strikers, midfielders, defenders, and whether or not you have a goalie\n  - For non-soccer sports, you can currently only select the number of players on the field and whether or not you have a goalie (if applicable). Position assignments for other sports are a planned feature!",
  },
  {
    id: "start-game",
    title: "Starting a Game",
    category: "Basics",
    shortDescription:
      "Learn how to start a game and generate your first lineup",
    content: "![Video (youtube)](https://youtube.com/watch?v=4pF7Dc6UuNU)",
  },
  {
    id: "game",
    title: "How to Use the Game Screen",
    category: "Basics",
    shortDescription:
      "Take a tour of the game screen and learn how to make substitutions",
    content:
      "![Video (youtube)](https://youtube.com/watch?v=KaHToYLncRw)\n## Overview\nThe top bar has a timer which displays:\n- How much time has elapsed\n- How much time is left until your next substitution\n- The current period and sub period\n\nThe table in the center of the screen shows your current and future lineup.\n- You can adjust the future lineup by tapping on the suggested player and selecting a different one.\n- Players listed in **red** in the center will be on the bench next period\n- Players listed in **green** in the next lineup will be leaving the bench at the next substitution\n- Note that on High and Low IntelliCoaching the app sometimes makes decisions based on future periods, not just the current one\n\nThe bottom bar has buttons to:\n- **Make a Substitution:** This will process the planned substitution and generate another lineup for the next period\n- **Menu:** The menu button at the bottom right opens a menu with more options\n## Additional Options\nThese can be accessed via the menu button at the bottom right.\n- **Edit Attendance**\n  - Mark players as attending/absent during the game (note: players cannot be marked absent if they are on the field or a future goalie, they must be benched first)\n- **Edit Formation**\n  - Change your formation during the game (only available for soccer currently)\n- **Swap Player Mid-Period**\n  - Swap a player currently on the field with a player on the bench\n- **Back to Previous Period**\n  - Go back to the previous period and lineup\n- **Edit Future Goalies**\n  - Edit goalies for a future period (note: you can't edit a goalie who is currently on the field, they must be swapped mid-period instead)\n- **View Total Playtime**\n  - Only available during the last period, shows total playtime for each player\n- **End Game**\n  - End the game",
  },
  {
    id: "intellicoaching-levels",
    title: "IntelliCoaching Levels",
    category: "FAQ",
    shortDescription: "What do the different IntelliCoaching levels mean?",
    content:
      "**Low IntelliCoaching:** Equal playing time, but if play time must be unequal then additional periods are given to your highest ranking players. Substitutions may not appear completely rotation-based, as this mode calculates in terms of the rest of the game. This is the **best** option for coaches who want to prioritize equal playing time but also want to field strong lineups.\n\n**High IntelliCoaching:** All players will play at least half the game, but there will be a larger discrepancy in playtime between your highest and lowest ranked players. This setting is best for coaches who want to field the most competitive lineups possible.\n\n**Off:** Completely equal playing time on a rotation-based system. First off, first on. Lineups will not be as strong since this mode simply rotates based on playtime, not ranking.\n> High and Low IntelliCoaching levels are only available to premium users. You can purchase premium for $1.99 USD/month in the app. Thanks for supporting intelli.coach!",
  },
  {
    id: "terms",
    title: "Terms of Service",
    category: "Legal",
    shortDescription: "Read our terms of service",
    content:
      "intelli.coach LLC does not promise that intelli.coach will be error-free or provide specific results. You assume total responsibility for your use of intelli.coach. Your sole remedy against intelli.coach LLC for dissatisfaction with the app or any content is to stop using the app.\n\nThe above disclaimer applies to any damages, liability or injuries, whether physical, financial, or other, caused by any failure of performance, error, interruption, or use, for any cause of action.\n\nintelli.coach LLC will not be liable to you for any indirect, consequential, exemplary, incidental or punitive damages, including lost profits.\n\nintelli.coach LLC handles data in accordance with our privacy policy.\n\nBy using intelli.coach, you agree to these terms. The terms of use are subject to change at any time.\n\nQuestions about the terms of use should be directed to [support@intellicoach.tech](mailto:support@intellicoach.tech).",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    category: "Legal",
    shortDescription: "Read our privacy policy",
    content:
      "All data stored and used by intelli.coach is stored exclusively on the user's device. intelli.coach LLC has no access to personal information, nor information entered into the app.\n\nData used for in-app purchases is handled by the respective app store provider (Apple or Google) and RevenueCat. intelli.coach LLC does not directly process data pertaining to in-app purchases. Please refer to their privacy policies for information about their data handling practices.\n\nBy using intelli.coach, you agree to this policy. The privacy policy is subject to change at any time.\n\nQuestions about this privacy policy or specific requests surrounding personal data should be directed to [support@intellicoach.tech](mailto:support@intellicoach.tech).",
  },
];

export const supportCategories = ["Basics", "FAQ", "Legal"];
