import { Users, Zap, Clock, Bell, List, Trophy } from "lucide-react";

export const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Fair Playing Time",
    description:
      "Ensure every player plays at least half the game and gets equitable opportunities",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Optimized Lineups",
    description:
      "Automatically generates lineups that maximize team performance",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Real-Time Adjustments",
    description:
      "Lineups adjust automatically if players are injured or arrive late",
  },
  {
    icon: <Bell className="w-8 h-8" />,
    title: "Notifications",
    description: "Get nofitified when it's time to to make a substitution",
  },
  {
    icon: <List className="w-8 h-8" />,
    title: "Playtime Summary",
    description: "Generate playtime summaries for each player after the game",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Focus on Coaching",
    description:
      "Spend less time frantically managing substitutions and more time coaching your team",
  },
];
