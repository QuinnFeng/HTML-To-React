type Character = {
  name: string;
  skillset: string[];
  votes: number;
  imageUrl: string;
  background: string;
  nickName: null | string;
  description: string;
};

const data: Character[] = [
  {
    name: "Alex Louis Armstrong",
    nickName: "Major Armstrong",
    skillset: ["Flawless Bodybuilding", "Stone Alchemy"],
    votes: 90,
    background:
      "Major Armstrong may look big and strong, but deep down he's the biggest sap in the entire show",
    imageUrl:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
    description:'Major Armstrong may look big and strong, but deep down he\'s the biggest sap in the entire show'
  },
  {
    name: "Alfonse Elrich",
    nickName: null,
    skillset: ["Being Loveable, Alchemy"],
    votes: 110,
    background:
      "Alphonse is a walking suit of armor on a quest to find his real body",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg",
    description:'Alphonse is a walking suit of armor on a quest to find his real body'
  },
  {
    name: "Edward Elrich",
    nickName: "The Fullmetal Alchemist",
    skillset: ["Human Transmutation", "Alchemy", "Being Short"],
    votes: 109,
    background:
      "Edward is a master alchemist and our main character... just don't call him short",
    imageUrl:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
    description:'Edward is a master alchemist and our main character... just don\'t call him short'
  },
  {
    name: "Greed",
    nickName: "Greed",
    votes: 45,
    skillset: ["Skin Hardening", "Homunculii"],
    imageUrl: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg",
    background:
      "Greed is one of the seven deadly sins Homunculii. He's the most 'on our side' of all of them.",
    description:'Greed is one of the seven deadly sins Homunculii. He\'s the most \'on our side\' of all of them.'
  },
  {
    name: "Nina Tucker",
    nickName: null,
    skillset: ["Being Adorable", "Combining..."],
    votes: 80,
    imageUrl:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/08/fullmetal-alchemist-nina-tucker.jpg",
    background:
      "Nina is an adorable little girl! If you've watched FMA you know...",
    description:
      'Nina is an adorable little girl! If you\'ve watched FMA you know...'
  },
  {
    name: "Riza Hawkeye",
    nickName: "Hawkeye",
    skillset: ["Loyal AF", "Sniper"],
    votes: 95,
    background:
      "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show",
    imageUrl:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8171ae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-1c20-449c-9093-1e4fba7856f3.png/v1/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODc1NzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs",
    description: "Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest non-alchemist characters in the show"
  },
  {
    name: "Solf J. Kimblee",
    nickName: "The Crimson Alchemist",
    votes: -9000,
    skillset: ["Being a piece of sh*t", "Alchemy"],
    background: "Kimblee suckkkkkssss, seriously he's not very nice",
    imageUrl:
      "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=1",
    description: "Kimblee suckkkkkssss, seriously he's not very nice"
  },
  {
    name: "Tim Marcoh",
    nickName: "Dr. Marcoh",
    votes: 40,
    skillset: ["Healing Alchemy", "Making Philospher Stones"],
    background:
      "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg",
    description: "Dr. Marcoh did some F**ked up S**t in the war on ishval, but his redemption arc is strong"
  },
  {
    name: "Winrey Rockbell",
    nickName: null,
    votes: 93,
    skillset: ["Automail Expert", "Delivering Babies"],
    background:
      "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there",
    imageUrl:
      "https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278",
    description: "Winrey is Edward and Al's best friend, and it's a good thing because her specialty is making the best automail out there"
  },
];

export default data;